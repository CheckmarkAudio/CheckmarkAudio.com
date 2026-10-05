// Checkmark Audio — homepage sound demo playlist.
//
// TO ADD A SONG:
//   1. Put the mp3 in MEDIA/AUDIO/ (mp3 only — wav files are too heavy for phones).
//   2. Run: python3 MEDIA/AUDIO/make-demo-clips.py
//      (cuts the most active 15 seconds into MEDIA/AUDIO/demo-clips/)
//   3. Add one line below: { title: "Display Title", src: "MEDIA/AUDIO/demo-clips/file-name-demo-clip.mp3?v=20260923-15s" },
//
// Source positions and current curation status: MEDIA/AUDIO/demo-clips/selection.json.
// The site only ever serves these short clips, never the full songs.
// Order here is the order on the site. Delete a line to remove a song.
// Titles are what visitors see — edit freely.
window.CHECKMARK_DEMO_TRACKS = [
  { title: "VALAO", artist: "Mira Como Suena", src: "MEDIA/AUDIO/demo-clips/valao-demo-clip.mp3?v=20261002-valao-boom" },
  { title: "Song of Solomon", artist: "King de Leone", src: "MEDIA/AUDIO/demo-clips/song-of-solomon-demo-clip.mp3?v=20261002-curation" },
  { title: "Solo (ft. Yung Gualli)", src: "MEDIA/AUDIO/demo-clips/solo-ft-yung-gualli-demo-clip.mp3?v=20261002-curation" },
  { title: "Anthill", src: "MEDIA/AUDIO/demo-clips/anthill-100-41020-13-demo-clip.mp3?v=20261002-curation" },
  { title: "Igneous Rocks", src: "MEDIA/AUDIO/demo-clips/igneous-rocks-demo-clip.mp3?v=20261002-curation" },
  { title: "The Wave", src: "MEDIA/AUDIO/demo-clips/the-wave-demo-clip.mp3?v=20261002-curation" },
  { title: "BULLSHIT", artist: "Gavin Hammond", src: "MEDIA/AUDIO/demo-clips/bullshit-gavin-hammond-demo-clip.mp3?v=20261002-curation" },
  { title: "BOOM", src: "MEDIA/AUDIO/demo-clips/boom-demo-clip.mp3?v=20261002-valao-boom" },
  { title: "Up Next", src: "MEDIA/AUDIO/demo-clips/up-next-demo-clip.mp3?v=20261002-curation" },
  { title: "Hyper", src: "MEDIA/AUDIO/demo-clips/hyper-demo-clip.mp3?v=20261002-curation" },
  { title: "Love never Dies", artist: "Bloodshot", src: "MEDIA/AUDIO/demo-clips/love-never-dies-bloodshot-demo-clip.mp3?v=20261005-final-album-song" },
  { title: "Are You Alright", artist: "NEH", src: "MEDIA/AUDIO/demo-clips/are-you-alright-demo-clip.mp3?v=20261002-three-more" },
  { title: "Mai (King)", artist: "King de Leone", src: "MEDIA/AUDIO/demo-clips/mai-demo-clip.mp3?v=20261002-three-more" },
  { title: "Raudo", src: "MEDIA/AUDIO/demo-clips/raudo-demo-clip.mp3?v=20261002-three-more" },
  { title: "Prolly in the Club", src: "MEDIA/AUDIO/demo-clips/prollyintheclub-98-demo-clip.mp3?v=20261002-curation" },
  { title: "Save You", src: "MEDIA/AUDIO/demo-clips/save-you-master-1-demo-clip.mp3?v=20261002-curation" },
  { title: "Greif", src: "MEDIA/AUDIO/demo-clips/greif-untagged-master-demo-clip.mp3?v=20261002-curation" }
];
