"""Split approved rack artwork into a stationary panel and its exact seven handles.
Original remains unchanged. Only handle footprints are repaired using adjacent track pixels.
"""
from pathlib import Path
from PIL import Image, ImageDraw
import numpy as np
root=Path(__file__).parent
im=Image.open(root/'mixing-fader-rack-black-gold.png').convert('RGBA')
a=np.array(im); panel=a.copy()
# Coordinates in the original 1344 x 492 approved artwork.
centers=[395,478,560,643,726,809,892]
for i,x in enumerate(centers,1):
 left,right=x-29,x+29; top,bottom=224,276
 handle=im.crop((left,top,right,bottom))
 mask=Image.new('L',handle.size); ImageDraw.Draw(mask).rounded_rectangle((1,1,56,50),radius=10,fill=255)
 handle.putalpha(mask);handle.save(root/f'mixing-fader-handle-{i}.png')
 # Continue the existing rail through the handle area; softly interpolate its backdrop.
 for y in range(top,bottom):
  t=(y-top)/(bottom-top-1)
  panel[y,left:right]=np.rint(a[top-3,left:right]*(1-t)+a[bottom+3,left:right]*t).astype('uint8')
Image.fromarray(panel).save(root/'mixing-fader-rack-panel.png')
