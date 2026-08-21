(function () {
  "use strict";

  const localHosts = new Set(["localhost", "127.0.0.1", "::1", ""]);
  if (!localHosts.has(window.location.hostname)) return;

  const pageKey = window.location.pathname || "/";
  const storageKey = "checkmark-visual-edits-v1";
  const originalContent = new Map();
  const elementLabels = new Map();
  let active = false;
  let mode = "select";
  let selectedKey = null;
  let draggedSection = null;

  function loadAll() {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || { version: 1, pages: {} };
    } catch (error) {
      return { version: 1, pages: {} };
    }
  }

  let allState = loadAll();
  if (!allState.pages) allState.pages = {};
  if (!allState.pages[pageKey]) {
    allState.pages[pageKey] = { texts: {}, notes: {}, hidden: [], order: [] };
  }
  const pageState = allState.pages[pageKey];
  pageState.texts ||= {};
  pageState.notes ||= {};
  pageState.hidden ||= [];
  pageState.order ||= [];

  function save() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(allState));
    } catch (error) {
      showToast("Your browser could not save that change.");
    }
    updatePanel();
  }

  function cleanLabel(value) {
    return String(value || "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 82);
  }

  const sections = Array.from(document.querySelectorAll("main > section"));
  sections.forEach((section, index) => {
    section.dataset.veSection = `s${index}`;
    const heading = section.querySelector("h1,h2,h3,.eyebrow");
    elementLabels.set(`s${index}`, cleanLabel(heading?.textContent) || `Section ${index + 1}`);
  });

  const editableSelector = [
    "main h1",
    "main h2",
    "main h3",
    "main h4",
    "main p",
    "main blockquote",
    "main figcaption",
    "main .button",
    "main .btn",
    "footer h2",
    "footer h3",
    "footer p",
    "footer li"
  ].join(",");

  const editableElements = Array.from(document.querySelectorAll(editableSelector)).filter(
    (element) => !element.closest(".ve-root")
  );

  editableElements.forEach((element, index) => {
    const key = `e${index}`;
    element.dataset.veKey = key;
    originalContent.set(key, element.innerHTML);
    elementLabels.set(key, cleanLabel(element.textContent) || `${element.tagName.toLowerCase()} ${index + 1}`);
    if (Object.prototype.hasOwnProperty.call(pageState.texts, key)) {
      element.innerHTML = pageState.texts[key];
    }
    if (pageState.notes[key]) element.dataset.veHasNote = "true";
  });

  const mediaElements = Array.from(
    document.querySelectorAll("main img, main video, main audio, main iframe")
  );
  mediaElements.forEach((element, index) => {
    const key = `m${index}`;
    element.dataset.veKey = key;
    const mediaName =
      element.getAttribute("alt") ||
      element.getAttribute("aria-label") ||
      element.getAttribute("title") ||
      element.currentSrc ||
      element.getAttribute("src") ||
      `${element.tagName.toLowerCase()} ${index + 1}`;
    elementLabels.set(key, cleanLabel(mediaName));
    if (pageState.notes[key]) element.dataset.veHasNote = "true";
  });

  function sectionByKey(key) {
    return document.querySelector(`[data-ve-section="${key}"]`);
  }

  function editableByKey(key) {
    return document.querySelector(`[data-ve-key="${key}"]`);
  }

  function currentSections() {
    return Array.from(document.querySelectorAll("main > section[data-ve-section]"));
  }

  function persistOrder() {
    pageState.order = currentSections().map((section) => section.dataset.veSection);
    save();
    updateOrderList();
  }

  if (pageState.order.length) {
    const main = document.querySelector("main");
    pageState.order.forEach((key) => {
      const section = sectionByKey(key);
      if (section) main.appendChild(section);
    });
  }

  pageState.hidden.forEach((key) => {
    const section = sectionByKey(key);
    if (section) section.dataset.veHidden = "true";
  });

  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href = "visual-edit-mode.css";
  styleLink.dataset.visualEditor = "true";
  document.head.appendChild(styleLink);

  const root = document.createElement("div");
  root.className = "ve-root";
  root.innerHTML = `
    <button class="ve-launch" type="button" aria-expanded="false">
      <span aria-hidden="true">✦</span> Edit page
    </button>
    <aside class="ve-panel" aria-label="Visual edit mode" hidden>
      <header class="ve-panel-head">
        <div>
          <span class="ve-kicker">Local preview</span>
          <strong>Visual Edit Mode</strong>
        </div>
        <button class="ve-icon-button" data-ve-action="close" type="button" aria-label="Close visual edit mode">×</button>
      </header>
      <div class="ve-mode-group" aria-label="Editing tools">
        <button type="button" data-ve-mode="select" class="is-active">Select &amp; note</button>
        <button type="button" data-ve-mode="text">Edit text</button>
        <button type="button" data-ve-mode="reorder">Reorder sections</button>
      </div>
      <div class="ve-help" data-ve-help>Select anything on the page, then leave an instruction here.</div>
      <section class="ve-order-manager" hidden>
        <div class="ve-order-heading">
          <span class="ve-kicker">Page order</span>
          <small>Use the arrows or drag the page sections directly.</small>
        </div>
        <div class="ve-order-list" data-ve-order-list></div>
      </section>
      <section class="ve-inspector">
        <span class="ve-kicker">Selected</span>
        <strong data-ve-selected>Nothing selected</strong>
        <textarea data-ve-note rows="5" placeholder="Example: Replace this image with a brighter Studio A photo."></textarea>
        <div class="ve-inspector-actions">
          <button type="button" data-ve-action="save-note">Save note</button>
          <button type="button" data-ve-action="hide-section" class="ve-danger">Hide section</button>
        </div>
      </section>
      <section class="ve-summary">
        <div><span>Text edits</span><strong data-ve-text-count>0</strong></div>
        <div><span>Notes</span><strong data-ve-note-count>0</strong></div>
        <div><span>Hidden</span><strong data-ve-hidden-count>0</strong></div>
      </section>
      <section class="ve-restorable" hidden>
        <span class="ve-kicker">Hidden sections</span>
        <div data-ve-restore-list></div>
      </section>
      <footer class="ve-panel-foot">
        <button type="button" data-ve-action="copy" class="ve-primary">Copy change list</button>
        <button type="button" data-ve-action="download">Download JSON</button>
        <button type="button" data-ve-action="reset" class="ve-reset">Reset this page</button>
      </footer>
    </aside>
    <div class="ve-toast" role="status" aria-live="polite"></div>
  `;
  document.body.appendChild(root);

  const launch = root.querySelector(".ve-launch");
  const panel = root.querySelector(".ve-panel");
  const help = root.querySelector("[data-ve-help]");
  const selectedName = root.querySelector("[data-ve-selected]");
  const noteField = root.querySelector("[data-ve-note]");
  const hideButton = root.querySelector('[data-ve-action="hide-section"]');
  const toast = root.querySelector(".ve-toast");

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
  }

  function setActive(next) {
    active = next;
    document.body.classList.toggle("ve-active", active);
    panel.hidden = !active;
    launch.hidden = active;
    launch.setAttribute("aria-expanded", String(active));
    if (!active) {
      clearSelection();
      setMode("select");
    }
  }

  function setMode(nextMode) {
    mode = nextMode;
    document.body.dataset.veMode = mode;
    root.querySelectorAll("[data-ve-mode]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.veMode === mode);
    });
    editableElements.forEach((element) => {
      const canEdit = active && mode === "text";
      element.contentEditable = canEdit ? "true" : "false";
      element.spellcheck = canEdit;
    });
    currentSections().forEach((section) => {
      section.draggable = active && mode === "reorder";
    });
    root.querySelector(".ve-order-manager").hidden = mode !== "reorder";
    root.querySelector(".ve-inspector").hidden = mode === "reorder";
    updateOrderList();
    help.textContent =
      mode === "text"
        ? "Click any outlined headline, paragraph, caption, or button and type your replacement."
        : mode === "reorder"
          ? "Drag sections, or use the arrow controls on each section."
          : "Select anything on the page, then leave an instruction here.";
  }

  function clearSelection() {
    document.querySelectorAll(".ve-selected").forEach((element) => element.classList.remove("ve-selected"));
    selectedKey = null;
    selectedName.textContent = "Nothing selected";
    noteField.value = "";
    noteField.disabled = true;
    hideButton.disabled = true;
  }

  function selectElement(element) {
    document.querySelectorAll(".ve-selected").forEach((item) => item.classList.remove("ve-selected"));
    element.classList.add("ve-selected");
    selectedKey = element.dataset.veKey || element.closest("[data-ve-section]")?.dataset.veSection;
    if (!selectedKey) return;
    const label = elementLabels.get(selectedKey) || cleanLabel(element.textContent) || element.tagName.toLowerCase();
    const type = element.matches("img") ? "Image" : selectedKey.startsWith("s") ? "Section" : "Element";
    selectedName.textContent = `${type}: ${label}`;
    noteField.value = pageState.notes[selectedKey] || "";
    noteField.disabled = false;
    hideButton.disabled = !element.closest("[data-ve-section]");
    if (mode !== "text") noteField.focus({ preventScroll: true });
  }

  function saveText(element) {
    const key = element.dataset.veKey;
    if (!key) return;
    if (element.innerHTML === originalContent.get(key)) delete pageState.texts[key];
    else pageState.texts[key] = element.innerHTML;
    save();
  }

  editableElements.forEach((element) => {
    element.addEventListener("input", () => saveText(element));
    element.addEventListener("blur", () => saveText(element));
  });

  function moveSection(section, direction) {
    const sibling = direction < 0 ? section.previousElementSibling : section.nextElementSibling;
    if (!sibling || !sibling.matches("section[data-ve-section]")) return;
    if (direction < 0) section.parentNode.insertBefore(section, sibling);
    else section.parentNode.insertBefore(sibling, section);
    persistOrder();
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function updateOrderList() {
    if (!root) return;
    const orderList = root.querySelector("[data-ve-order-list]");
    if (!orderList) return;
    const orderedSections = currentSections();
    orderList.innerHTML = orderedSections
      .map((section, index) => {
        const key = section.dataset.veSection;
        const label = elementLabels.get(key) || `Section ${index + 1}`;
        const hidden = pageState.hidden.includes(key) ? " · hidden" : "";
        return `<div class="ve-order-row">
          <span><b>${index + 1}</b>${label}<em>${hidden}</em></span>
          <div>
            <button type="button" data-ve-order-up="${key}" aria-label="Move ${label} up" ${index === 0 ? "disabled" : ""}>↑</button>
            <button type="button" data-ve-order-down="${key}" aria-label="Move ${label} down" ${index === orderedSections.length - 1 ? "disabled" : ""}>↓</button>
          </div>
        </div>`;
      })
      .join("");
  }

  sections.forEach((section) => {
    const controls = document.createElement("div");
    controls.className = "ve-section-tools";
    controls.innerHTML = `
      <span class="ve-drag-label">Drag section</span>
      <button type="button" data-ve-move="up" aria-label="Move section up">↑</button>
      <button type="button" data-ve-move="down" aria-label="Move section down">↓</button>
      <button type="button" data-ve-section-note>Note</button>
      <button type="button" data-ve-section-hide>Hide</button>
    `;
    section.appendChild(controls);
    controls.addEventListener("click", (event) => {
      event.stopPropagation();
      const button = event.target.closest("button");
      if (!button) return;
      if (button.dataset.veMove === "up") moveSection(section, -1);
      if (button.dataset.veMove === "down") moveSection(section, 1);
      if (button.hasAttribute("data-ve-section-note")) selectElement(section);
      if (button.hasAttribute("data-ve-section-hide")) hideSection(section);
    });
    section.addEventListener("dragstart", (event) => {
      if (!active || mode !== "reorder") return event.preventDefault();
      draggedSection = section;
      section.classList.add("ve-dragging");
      event.dataTransfer.effectAllowed = "move";
    });
    section.addEventListener("dragend", () => {
      section.classList.remove("ve-dragging");
      draggedSection = null;
      persistOrder();
    });
    section.addEventListener("dragover", (event) => {
      if (!draggedSection || draggedSection === section) return;
      event.preventDefault();
      const rect = section.getBoundingClientRect();
      const before = event.clientY < rect.top + rect.height / 2;
      section.parentNode.insertBefore(draggedSection, before ? section : section.nextSibling);
    });
  });

  function hideSection(section) {
    const key = section.dataset.veSection;
    if (!pageState.hidden.includes(key)) pageState.hidden.push(key);
    section.dataset.veHidden = "true";
    clearSelection();
    save();
    showToast("Section hidden. You can restore it from the editor panel.");
  }

  function restoreSection(key) {
    pageState.hidden = pageState.hidden.filter((item) => item !== key);
    const section = sectionByKey(key);
    if (section) delete section.dataset.veHidden;
    save();
  }

  function saveNote() {
    if (!selectedKey) return;
    const note = noteField.value.trim();
    if (note) pageState.notes[selectedKey] = note;
    else delete pageState.notes[selectedKey];
    const target = editableByKey(selectedKey) || sectionByKey(selectedKey);
    if (target) {
      if (note) target.dataset.veHasNote = "true";
      else delete target.dataset.veHasNote;
    }
    save();
    showToast(note ? "Note saved." : "Note removed.");
  }

  function readableChangeList() {
    const textChanges = Object.entries(pageState.texts).map(([key, html]) => ({
      target: elementLabels.get(key) || key,
      original: cleanLabel(originalContent.get(key)),
      requestedText: cleanLabel(html.replace(/<[^>]+>/g, " "))
    }));
    const notes = Object.entries(pageState.notes).map(([key, note]) => ({
      target: elementLabels.get(key) || key,
      note
    }));
    return {
      project: "Checkmark Audio website",
      page: pageKey,
      exportedAt: new Date().toISOString(),
      textChanges,
      sectionOrder: currentSections().map((section) => elementLabels.get(section.dataset.veSection)),
      hiddenSections: pageState.hidden.map((key) => elementLabels.get(key) || key),
      notes
    };
  }

  function copyChanges() {
    const payload = JSON.stringify(readableChangeList(), null, 2);
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(payload).then(
        () => showToast("Change list copied. Paste it into our chat."),
        () => fallbackCopy(payload)
      );
    } else fallbackCopy(payload);
  }

  function fallbackCopy(payload) {
    const area = document.createElement("textarea");
    area.value = payload;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    showToast("Change list copied. Paste it into our chat.");
  }

  function downloadChanges() {
    const blob = new Blob([JSON.stringify(readableChangeList(), null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `checkmark-visual-edits-${pageKey.replace(/\W+/g, "-") || "home"}.json`;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast("Change list downloaded.");
  }

  function updatePanel() {
    if (!root) return;
    root.querySelector("[data-ve-text-count]").textContent = Object.keys(pageState.texts).length;
    root.querySelector("[data-ve-note-count]").textContent = Object.keys(pageState.notes).length;
    root.querySelector("[data-ve-hidden-count]").textContent = pageState.hidden.length;
    const restorable = root.querySelector(".ve-restorable");
    const restoreList = root.querySelector("[data-ve-restore-list]");
    restorable.hidden = pageState.hidden.length === 0;
    restoreList.innerHTML = pageState.hidden
      .map(
        (key) =>
          `<button type="button" data-ve-restore="${key}">Restore ${elementLabels.get(key) || key}</button>`
      )
      .join("");
  }

  launch.addEventListener("click", () => setActive(true));
  root.querySelector('[data-ve-action="close"]').addEventListener("click", () => setActive(false));
  root.querySelectorAll("[data-ve-mode]").forEach((button) =>
    button.addEventListener("click", () => setMode(button.dataset.veMode))
  );
  root.querySelector('[data-ve-action="save-note"]').addEventListener("click", saveNote);
  root.querySelector('[data-ve-action="hide-section"]').addEventListener("click", () => {
    const selected = editableByKey(selectedKey) || sectionByKey(selectedKey);
    const section = selected?.closest("[data-ve-section]") || selected;
    if (section?.dataset.veSection) hideSection(section);
  });
  root.querySelector('[data-ve-action="copy"]').addEventListener("click", copyChanges);
  root.querySelector('[data-ve-action="download"]').addEventListener("click", downloadChanges);
  root.querySelector('[data-ve-action="reset"]').addEventListener("click", () => {
    if (!window.confirm("Reset all visual edits and notes for this page?")) return;
    delete allState.pages[pageKey];
    localStorage.setItem(storageKey, JSON.stringify(allState));
    window.location.reload();
  });
  root.addEventListener("click", (event) => {
    const restore = event.target.closest("[data-ve-restore]");
    if (restore) restoreSection(restore.dataset.veRestore);
    const moveUp = event.target.closest("[data-ve-order-up]");
    if (moveUp) moveSection(sectionByKey(moveUp.dataset.veOrderUp), -1);
    const moveDown = event.target.closest("[data-ve-order-down]");
    if (moveDown) moveSection(sectionByKey(moveDown.dataset.veOrderDown), 1);
  });

  document.addEventListener(
    "click",
    (event) => {
      if (!active || event.target.closest(".ve-root") || event.target.closest(".ve-section-tools")) return;
      if (event.target.closest("a,button")) event.preventDefault();
      if (mode === "reorder") return;
      const editable = event.target.closest("[data-ve-key]");
      const section = event.target.closest("[data-ve-section]");
      if (editable) selectElement(editable);
      else if (section) selectElement(section);
    },
    true
  );

  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.shiftKey && event.key.toLowerCase() === "e") {
      event.preventDefault();
      setActive(!active);
    }
    if (event.key === "Escape" && active) setActive(false);
  });

  noteField.disabled = true;
  hideButton.disabled = true;
  updatePanel();
  setMode("select");
  if (new URLSearchParams(window.location.search).get("edit") === "1") setActive(true);
})();
