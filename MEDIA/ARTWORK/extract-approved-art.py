from pathlib import Path
from PIL import Image
import numpy as np
from scipy import ndimage
import json
root=Path(__file__).resolve().parents[2]
source=root/'DRAFTS/active/editorial-audio-art-pages-2026-09-09'
out=root/'MEDIA/ARTWORK'
records=[]

def save(name, rgba, origin, crop, note):
    im=Image.fromarray(np.uint8(np.clip(rgba,0,255)),'RGBA')
    box=im.getchannel('A').getbbox()
    im=im.crop(box)
    # Transparent padding protects all strokes. Resampling improves placement at fractional CSS pixels.
    pad=6
    padded=Image.new('RGBA',(im.width+2*pad,im.height+2*pad))
    padded.paste(im,(pad,pad))
    padded=padded.resize((padded.width*3,padded.height*3),Image.Resampling.LANCZOS)
    padded.save(out/name,optimize=True)
    records.append({'file':'MEDIA/ARTWORK/'+name,'source':str(origin.relative_to(root)),'sourceCrop':crop,'width':padded.width,'height':padded.height,'method':note,'alphaZeroFraction':padded.getchannel('A').histogram()[0]/(padded.width*padded.height)})

def array(f,crop):return np.array(Image.open(source/f).convert('RGB').crop(crop)).astype(float)
def rgba_color(a,color):
    rgb=np.zeros((*a.shape,4));rgb[:,:,:3]=color;rgb[:,:,3]=np.clip(a,0,1)*255;return rgb

f='07c-team-black-ink-headphones.png';b=(880,124,1118,333);rgb=array(f,b)
a=np.clip(((245-rgb.mean(2))/245-.075)/.925,0,1)
save('team-headphones-black.png',rgba_color(a,(12,12,11)),source/f,b,'Original black linework isolated from cream; interior negative space transparent.')

f='10a-404-reconnect.png';b=(255,673,760,949);rgb=array(f,b);a=np.clip((rgb[:,:,0]-37)/190,0,1)
y,x=np.indices(a.shape);a[(y+673>=934)&((x+255<598)|(x+255>619))]=0
save('not-found-patchbay-cable-gold.png',rgba_color(a,(216,183,126)),source/f,b,'Original gold stroke coverage isolated from black; adjoining webpage lettering excluded.')

f='03b-mixing-mastering-the-record-in-two-chapters.png';b=(128,931,433,1226);rgb=array(f,b);a=np.clip((rgb[:,:,0]-37)/202,0,1)
y,x=np.indices(a.shape)
# Remove only the draft play glyph and lettering, preserving all three circles.
a[((x-151)**2+(y-147)**2)<19**2]=0
a[(y>=181)&(y<=195)&(x>=127)&(x<=177)]=0
save('mastering-compact-disc-gold.png',rgba_color(a,(216,183,126)),source/f,b,'Original complete disc strokes; draft-only play triangle and PLAY label removed, with rings preserved.')

f='04a-live-recordings-the-performance-frame.png';b=(18,301,118,618);rgb=array(f,b);a=np.clip((rgb[:,:,0]-42)/198,0,1)
y,x=np.indices(a.shape);a[(x+18>=110)&(y+301>=611)]=0
save('live-recording-microphone-stand-gold.png',rgba_color(a,(216,183,126)),source/f,b,'Original microphone, stand and loose cable isolated from dark page; adjoining horizontal page rule excluded.')

f='04a-live-recordings-the-performance-frame.png';b=(55,901,360,1166);rgb=array(f,b)
mx=rgb.max(2);mn=rgb.min(2);sat=(mx-mn)/np.maximum(mx,1);lum=rgb.mean(2)
a=np.clip(np.maximum((225-lum)/35,(sat-.19)/.19),0,1)
a[(lum>225)&(sat<.19)]=0
# Unmatte antialiased edges from the source paper, keeping the original black and gold pixels.
bg=np.array([244,237,226]);clean=np.clip((rgb-bg*(1-a[:,:,None]))/np.maximum(a[:,:,None],.001),0,255)
save('live-recording-guitar-amplifier.png',np.dstack((clean,a*255)),source/f,b,'Original black and gold guitar/amp; cream removed from exterior and enclosed negative spaces; edges unmatted.')

f='03b-mixing-mastering-the-record-in-two-chapters.png';b=(52,710,496,871);rgb=array(f,b)
# Only the cream region connected to the outside is removed. The physical black rack face stays opaque.
mask=rgb.mean(2)>160
exterior=ndimage.binary_propagation(np.pad(np.ones((1,1),bool),((0,mask.shape[0]-1),(0,mask.shape[1]-1))),mask=mask)
# Flood all four boundaries, including isolated corner regions.
seed=np.zeros(mask.shape,bool);seed[0]=mask[0];seed[-1]=mask[-1];seed[:,0]=mask[:,0];seed[:,-1]=mask[:,-1]
exterior=ndimage.binary_propagation(seed,mask=mask)
a=np.ones(mask.shape,float);a[exterior]=0
edge=ndimage.binary_dilation(exterior)&~exterior
a[edge]=np.clip((235-rgb.mean(2)[edge])/100,0,1)
save('mixing-fader-rack-black-gold.png',np.dstack((rgb,a*255)),source/f,b,'Original rack artwork and labels preserved; only surrounding cream removed, physical black panel retained.')
(root/'MEDIA/ARTWORK/ASSET_PROVENANCE.json').write_text(json.dumps({'authorization':'2026-09-10: Bridget explicitly authorized direct extraction of exact original artwork.','assets':records},indent=2)+'\n')
print(json.dumps(records,indent=2))
