// Local editor only: chosen folders stay in memory; only selected images are imported.
const localFiles = new Map();
const imagePattern = /\.(png|jpe?g|webp|gif)$/i;
export function mountComputerPicker(container, onFiles, status) {
  const controls = document.createElement('div');
  controls.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;grid-column:1/-1';
  for (const directory of [false, true]) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = directory ? 'Browse a folder…' : 'Browse computer…';
    button.style.cssText = 'padding:10px 14px;border:1px solid #9a805c;background:#f3eee6;color:#211e18;cursor:pointer';
    const input = document.createElement('input');
    input.type = 'file'; input.multiple = true; input.accept = 'image/png,image/jpeg,image/webp,image/gif'; input.hidden = true;
    if (directory) input.setAttribute('webkitdirectory', '');
    button.onclick = () => input.click();
    input.onchange = () => {
      const added = [];
      for (const file of input.files) {
        if (!imagePattern.test(file.name)) continue;
        const relative = file.webkitRelativePath || file.name;
        const key = `${relative}:${file.size}:${file.lastModified}`;
        if (!localFiles.has(key)) localFiles.set(key, {id:'local-'+crypto.randomUUID(), name:file.name, label:file.name, folder:'Computer/'+(relative.includes('/') ? relative.slice(0,relative.lastIndexOf('/')) : 'Selected photos'), type:'image', src:URL.createObjectURL(file), file});
        added.push(localFiles.get(key));
      }
      onFiles(added);
      if (!added.length) status.textContent = 'No supported photos found. Choose JPG, PNG, WebP or GIF.';
      input.value = '';
    };
    controls.append(button,input);
  }
  container.append(controls);
}
export async function importSelected(item) {
  if (!item.file) return item;
  const response = await fetch('/__import-photo?name='+encodeURIComponent(item.name), {method:'POST',headers:{'Content-Type':'application/octet-stream'},body:item.file});
  const result = await response.json().catch(()=>({}));
  if (!response.ok) throw new Error(result.error || 'Import unavailable. Run the project dev server.');
  const old = item.src;
  Object.assign(item,result);
  delete item.file;
  URL.revokeObjectURL(old);
  return item;
}
