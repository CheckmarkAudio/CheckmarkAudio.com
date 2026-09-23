// Checkmark Audio — homepage sound demo playlist.
//
// TO ADD A SONG:
//   1. Put the mp3 in MEDIA/AUDIO/ (mp3 only — wav files are too heavy for phones).
//   2. Run: python3 MEDIA/AUDIO/make-demo-clips.py
//      (cuts the most active 15 seconds into MEDIA/AUDIO/demo-clips/)
//   3. Add one line below: { title: "Display Title", src: "MEDIA/AUDIO/demo-clips/file-name-demo-clip.mp3?v=20260923-15s" },
//
// The site only ever serves these 15-second clips, never the full songs.
// Order here is the order on the site. Delete a line to remove a song.
// Titles are what visitors see — edit freely.
window.CHECKMARK_DEMO_TRACKS = [
  { title: "Hearts With Fire", src: "MEDIA/AUDIO/demo-clips/01-hearts-with-fire-demo-clip.mp3?v=20260923-15s" },
  { title: "Prolly in the Club", src: "MEDIA/AUDIO/demo-clips/prollyintheclub-98-demo-clip.mp3?v=20260923-15s" },
  { title: "Solo (ft. Yung Gualli)", src: "MEDIA/AUDIO/demo-clips/solo-ft-yung-gualli-demo-clip.mp3?v=20260923-15s" },
  { title: "Save You", src: "MEDIA/AUDIO/demo-clips/save-you-master-1-demo-clip.mp3?v=20260923-15s" },
  { title: "Memories", src: "MEDIA/AUDIO/demo-clips/memories-8-notag-master-demo-clip.mp3?v=20260923-15s" },
  { title: "Sabrina", src: "MEDIA/AUDIO/demo-clips/sabrina-demo-clip.mp3?v=20260923-15s" },
  { title: "Hope", src: "MEDIA/AUDIO/demo-clips/hope-2untagged-master-demo-clip.mp3?v=20260923-15s" },
  { title: "Hurting", src: "MEDIA/AUDIO/demo-clips/hurting-untagged2-master-demo-clip.mp3?v=20260923-15s" },
  { title: "Greif", src: "MEDIA/AUDIO/demo-clips/greif-untagged-master-demo-clip.mp3?v=20260923-15s" },
  { title: "Anthill", src: "MEDIA/AUDIO/demo-clips/anthill-100-41020-13-demo-clip.mp3?v=20260923-15s" },
  { title: "Hoops", src: "MEDIA/AUDIO/demo-clips/ontiva-com-hoops-320k-demo-clip.mp3?v=20260923-15s" }
];
