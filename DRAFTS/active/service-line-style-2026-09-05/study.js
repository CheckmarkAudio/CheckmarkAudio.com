const page = document.getElementById('page');
const wrap = document.getElementById('frameWrap');
const size = document.getElementById('size');
const descriptions = {
  outline: '01 · A champagne outline with a shallow raised edge, broader rounded corners, and a beveled fader. The closest match for the Services icons.',
  window: '02 · A slim title bar and an edge-to-edge display, echoing the window frames on Services. A softly rounded, beveled rim and raised controls add depth.',
  rack: '03 · Outlined rack ears and four small mounting points give the unit a studio identity with rounded, beveled edges and restrained metallic highlights.',
  original: 'Current · The existing beveled frame for comparison. The surrounding study and component samples retain the proposed styling.'
};
let finish = 'outline';
function applyFinish() {
  page.contentWindow.postMessage({finish}, location.origin);
}
document.querySelectorAll('[data-finish]').forEach(button => {
  button.addEventListener('click', () => {
    finish = button.dataset.finish;
    document.querySelectorAll('[data-finish]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.getElementById('description').textContent = descriptions[finish];
    applyFinish();
  });
});
function fit() {
  const width = Number(size.value);
  const scale = Math.min(1, (document.querySelector('.stage').clientWidth - 32) / width);
  const height = width === 390 ? 844 : 1040;
  page.style.width = `${width}px`;
  page.style.height = `${height}px`;
  page.style.transform = `scale(${scale})`;
  wrap.style.width = `${width * scale}px`;
  wrap.style.height = `${height * scale}px`;
}
page.addEventListener('load', applyFinish);
size.addEventListener('change', fit);
addEventListener('resize', fit);
if (matchMedia('(max-width: 600px)').matches) size.value = '390';
fit();
