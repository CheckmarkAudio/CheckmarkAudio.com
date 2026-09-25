// Local-only Theme panel for the website media editor. It offers only the
// approved choices in checkmark-theme-options.json, previews them on the open
// page, and saves option ids through scripts/dev-server.py (POST /__save-theme).
// The server resolves ids to token values, so nothing off-brand can be saved.
const SAVE_ENDPOINT = '/__save-theme';
const esc = value => String(value).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

let panel, scrim, launcher, controls = [], saved = {}, draft = {}, saveAvailable = false, ready;

function tokensFor(choices) {
  const tokens = {};
  for (const control of controls) {
    const choice = choices[control.id] ?? control.default;
    if (choice === control.default) continue;
    Object.assign(tokens, control.options.find(option => option.id === choice)?.tokens);
  }
  return tokens;
}

function preview(choices) {
  const root = document.documentElement.style, tokens = tokensFor(choices);
  for (const control of controls)
    for (const option of control.options)
      for (const name of Object.keys(option.tokens)) if (!(name in tokens)) root.removeProperty(name);
  for (const [name, value] of Object.entries(tokens)) root.setProperty(name, value);
}

const isDirty = () => controls.some(control => (draft[control.id] ?? control.default) !== (saved[control.id] ?? control.default));

function status(message) {
  const dirty = isDirty();
  panel.querySelector('#cteStatus').textContent = message || (dirty
    ? (saveAvailable ? 'Previewing unsaved choices on this page.' : 'Previewing only. Run python3 scripts/dev-server.py to save.')
    : 'Showing the saved theme.');
  panel.querySelector('#cteSave').disabled = !dirty || !saveAvailable;
  panel.querySelector('#cteRevert').disabled = !dirty;
  launcher?.classList.toggle('unsaved', dirty);
  if (launcher) launcher.textContent = dirty ? 'Theme · unsaved' : 'Theme';
}

function optionMarkup(control, option) {
  const checked = (draft[control.id] ?? control.default) === option.id ? ' checked' : '';
  let visual = '';
  if (control.kind === 'swatch') visual = `<span class="cte-swatch" style="background:${esc(option.swatch)}"></span>`;
  else if (control.kind === 'font') {
    const t = option.tokens, p = { display: t['--cm-font-display'], label: t['--cm-font-label'], body: t['--cm-font-body'] };
    visual = `<span class="cte-font"><b style="font-family:${esc(p.display)}">Checkmark Audio</b><i style="font-family:${esc(p.label)}">Book a session</i><small style="font-family:${esc(p.body)}">Recording, mixing and mastering.</small></span>`;
  } else if (control.kind === 'texture') visual = option.src
    ? `<span class="cte-texture" style="background-image:url('${esc(option.src)}')"></span>`
    : '<span class="cte-texture cte-texture-none">None</span>';
  const current = option.id === control.default ? ' <em>current site</em>' : '';
  return `<label class="cte-option cte-kind-${esc(control.kind)}"><input type="radio" name="cte-${esc(control.id)}" value="${esc(option.id)}"${checked}>${visual}<span class="cte-option-text"><strong>${esc(option.label)}${current}</strong><small>${esc(option.note || '')}</small></span></label>`;
}

function render() {
  panel.querySelector('#cteControls').innerHTML = controls.map(control =>
    `<fieldset class="cte-group"><legend>${esc(control.label)}</legend><div class="cte-options">${control.options.map(option => optionMarkup(control, option)).join('')}</div></fieldset>`).join('');
  status();
}

async function save() {
  status('Saving theme to the project…');
  try {
    const response = await fetch(SAVE_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ choices: draft }) });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) return status(`Not saved: ${result.error || 'server said ' + response.status}`);
    saved = { ...result.theme.choices };
    draft = { ...saved };
    status(`Saved to ${result.path}${result.changed?.length ? ` (${result.changed.length} changed)` : ''}. Commit and push to publish.`);
  } catch {
    saveAvailable = false;
    status('The local save server is not running. Start python3 scripts/dev-server.py and try again.');
  }
}

function build() {
  panel = document.createElement('aside');
  panel.className = 'cte-panel';
  panel.id = 'cteDrawer';
  panel.setAttribute('aria-hidden', 'true');
  panel.setAttribute('aria-labelledby', 'cteTitle');
  panel.innerHTML = `<div class="cte-head"><div><span class="cte-kicker">Brand theme</span><h2 id="cteTitle">Theme</h2></div><button class="cte-close" id="cteClose" type="button" aria-label="Close theme panel">×</button></div><p class="cte-intro">Only approved Checkmark choices are listed. Changes preview on this page until you save.</p><div id="cteControls"><p>Loading approved choices…</p></div><div class="cte-actions"><button id="cteRevert" type="button">Revert to saved</button><button id="cteDefaults" type="button">Use current site</button><button class="primary" id="cteSave" type="button">Save theme</button></div><p class="cte-status" id="cteStatus" role="status"></p>`;
  scrim = document.createElement('div');
  scrim.className = 'cte-scrim';
  scrim.hidden = true;
  // A shadow root keeps the site's own label, button and bevel rules out of the panel.
  const host = document.createElement('div'), shadow = host.attachShadow({ mode: 'open' }), link = document.createElement('link');
  host.id = 'cteHost';
  link.rel = 'stylesheet';
  link.href = 'checkmark-theme-editor.css?v=20260925-1';
  shadow.append(link, scrim, panel);
  document.body.appendChild(host);
  panel.querySelector('#cteControls').addEventListener('change', event => {
    const input = event.target.closest('input[type=radio]');
    if (!input) return;
    draft[input.name.slice(4)] = input.value;
    preview(draft);
    status();
  });
  panel.querySelector('#cteRevert').addEventListener('click', () => { draft = { ...saved }; preview(draft); render(); });
  panel.querySelector('#cteDefaults').addEventListener('click', () => { draft = Object.fromEntries(controls.map(control => [control.id, control.default])); preview(draft); render(); });
  panel.querySelector('#cteSave').addEventListener('click', save);
  panel.querySelector('#cteClose').addEventListener('click', close);
  scrim.addEventListener('click', close);
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && panel.classList.contains('open')) close(); });
}

async function load() {
  build();
  const [options, selections] = await Promise.all([
    fetch('checkmark-theme-options.json', { cache: 'no-store' }).then(response => response.json()),
    fetch('MEDIA/WEBSITE_MEDIA_SELECTIONS.json', { cache: 'no-store' }).then(response => response.json()).catch(() => ({}))
  ]);
  controls = options.controls || [];
  saved = { ...(selections.theme?.choices || {}) };
  draft = { ...saved };
  saveAvailable = await fetch(SAVE_ENDPOINT, { method: 'HEAD' }).then(response => response.ok).catch(() => false);
  render();
}

function close() {
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  scrim.hidden = true;
  launcher?.focus({ preventScroll: true });
}

export async function openThemePanel(button) {
  launcher = button;
  ready ||= load();
  await ready;
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  scrim.hidden = false;
  requestAnimationFrame(() => panel.querySelector('#cteClose').focus({ preventScroll: true }));
}
