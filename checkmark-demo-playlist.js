// Checkmark Audio — homepage sound demo playlist.
//
// TO ADD A SONG:
//   1. Put the mp3 in MEDIA/AUDIO/ (mp3 only — wav files are too heavy for phones).
//   2. Run: python3 MEDIA/AUDIO/make-demo-clips.py
//      (cuts the most active 30 seconds into MEDIA/AUDIO/demo-clips/)
//   3. Add one line below: { title: "Display Title", src: "MEDIA/AUDIO/demo-clips/file-name-demo-clip.mp3" },
//
// The site only ever serves these 30-second clips, never the full songs.
// Order here is the order on the site. Delete a line to remove a song.
// Titles are what visitors see — edit freely.
window.CHECKMARK_DEMO_TRACKS = [
  { title: "Hearts With Fire", src: "MEDIA/AUDIO/demo-clips/01-hearts-with-fire-demo-clip.mp3" },
  { title: "Prolly in the Club", src: "MEDIA/AUDIO/demo-clips/prollyintheclub-98-demo-clip.mp3" },
  { title: "Solo (ft. Yung Gualli)", src: "MEDIA/AUDIO/demo-clips/solo-ft-yung-gualli-demo-clip.mp3" },
  { title: "Save You", src: "MEDIA/AUDIO/demo-clips/save-you-master-1-demo-clip.mp3" },
  { title: "Memories", src: "MEDIA/AUDIO/demo-clips/memories-8-notag-master-demo-clip.mp3" },
  { title: "Sabrina", src: "MEDIA/AUDIO/demo-clips/sabrina-demo-clip.mp3" },
  { title: "Hope", src: "MEDIA/AUDIO/demo-clips/hope-2untagged-master-demo-clip.mp3" },
  { title: "Hurting", src: "MEDIA/AUDIO/demo-clips/hurting-untagged2-master-demo-clip.mp3" },
  { title: "Greif", src: "MEDIA/AUDIO/demo-clips/greif-untagged-master-demo-clip.mp3" },
  { title: "Anthill", src: "MEDIA/AUDIO/demo-clips/anthill-100-41020-13-demo-clip.mp3" },
  { title: "Hoops", src: "MEDIA/AUDIO/demo-clips/ontiva-com-hoops-320k-demo-clip.mp3" }
];
