/* Curriculum browser — module overview + chapter cards */
const M3_CHAPTERS = [
  { n: 1, classes: 'Classes 33–34', title: 'Critical Listening & Analyzing Pro Mixes', meta: 'Weeks 33–34 · listening + hands-on', progress: 100, done: true },
  { n: 2, classes: 'Classes 35–36', title: 'Session Setup, Basic Balance & Panning', meta: 'Weeks 35–36 · hands-on', progress: 100, done: true },
  { n: 3, classes: 'Classes 37–38', title: 'Masking Solutions With EQ & Compression', meta: 'Weeks 37–38 · hands-on', progress: 100, done: true },
  { n: 4, classes: 'Classes 39–40', title: 'Time-Based Effects & Creative Automation', meta: 'Weeks 39–40 · hands-on', progress: 100, done: true },
  { n: 5, classes: 'Classes 41–42', title: 'Mix Planning Using Reference Tracks', meta: 'Weeks 41–42 · planning', progress: 100, done: true },
  { n: 6, classes: 'Classes 43–44', title: 'Full Personal Song Mix — Top-Down Method', meta: 'Weeks 43–44 · studio build', progress: 62, done: false },
  { n: 7, classes: 'Classes 45–46', title: 'Mastering: Loudness, EQ & Stereo Imaging', meta: 'Weeks 45–46 · mastering', progress: 0, done: false },
  { n: 8, classes: 'Classes 47–48', title: 'Final Review, Delivery & Class Presentation', meta: 'Weeks 47–48 · delivery', progress: 0, done: false },
];
const MODULES = [
  { id: 1, v: '--module-1', label: 'Module 01', title: 'Production & Sound Design', done: true },
  { id: 2, v: '--module-2', label: 'Module 02', title: 'Recording & Engineering', done: true },
  { id: 3, v: '--module-3', label: 'Module 03', title: 'Mixing, Mastering & Delivery', done: false },
];

function CurriculumScreen({ onNav }) {
  const [active, setActive] = useState(3);
  return (
    <div className="fade">
      <div className="page-head">
        <div>
          <p className="eyebrow">12 Months · 48 Classes</p>
          <h1 className="pt">Curriculum</h1>
          <p className="sub">One creative project across three modules: produce it, record it, then mix and master it.</p>
        </div>
      </div>

      {/* module switcher */}
      <div className="grid g3" style={{ marginBottom: 24 }}>
        {MODULES.map(m => (
          <div key={m.id} className={`card pad lift`} onClick={() => setActive(m.id)}
            style={active === m.id ? { borderColor: `var(${m.v})`, boxShadow: `inset 0 0 0 1px var(${m.v})` } : {}}>
            <div className="row between">
              <span className="label" style={{ color: `var(${m.v})` }}>{m.label}</span>
              {m.done ? <Icon name="circle-check-big" size={17} className="t-gold" /> : <Badge variant="gold">Current</Badge>}
            </div>
            <h3 style={{ margin: '10px 0 0', font: '600 16px var(--font-sans)', color: 'var(--fg)' }}>{m.title}</h3>
          </div>
        ))}
      </div>

      {/* active module header */}
      <div className="row between" style={{ marginBottom: 16 }}>
        <div className="row gap12">
          <span className="ink-tile"><Icon name="sliders-horizontal" size={20} /></span>
          <div>
            <div className="label" style={{ color: 'var(--module-3)' }}>Module 03 · 16 weeks</div>
            <div style={{ font: '700 20px var(--font-sans)', letterSpacing: '-0.01em', color: 'var(--fg)', marginTop: 4 }}>Mixing, Mastering &amp; Delivery</div>
          </div>
        </div>
        <div className="row gap12" style={{ minWidth: 200 }}>
          <Progress value={71} /><span className="mono t-gold" style={{ fontSize: 12 }}>71%</span>
        </div>
      </div>

      {/* chapter cards */}
      <div className="grid g2">
        {M3_CHAPTERS.map(c => (
          <LessonCard key={c.n} module={`Chapter ${c.n}`} moduleVar="--module-3"
            classes={c.classes} title={c.title} meta={c.meta}
            progress={c.progress} done={c.done} onOpen={() => onNav('lesson')} />
        ))}
      </div>
    </div>
  );
}
Object.assign(window, { CurriculumScreen });
