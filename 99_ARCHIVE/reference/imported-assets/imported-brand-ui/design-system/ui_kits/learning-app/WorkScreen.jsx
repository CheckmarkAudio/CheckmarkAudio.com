/* My Work — deliverables & submissions list, plus a simple placeholder
   for surfaces not built out in this kit (Calendar / Resources). */
const SUBMISSIONS = [
  { ch: 'Ch 5', title: 'Mix Plan — Reference Breakdown', status: 'success', label: 'Passed', meta: 'Graded · 94 / 100', icon: 'file-check' },
  { ch: 'Ch 6', title: 'First-Pass Top-Down Mix', status: 'warning', label: 'Needs Revision', meta: 'Feedback ready', icon: 'file-audio' },
  { ch: 'Ch 6', title: 'Reference Listening Notes', status: 'gold', label: 'In Review', meta: 'Submitted 2 days ago', icon: 'file-text' },
  { ch: 'Ch 7', title: 'Master — Loudness Pass', status: 'neutral', label: 'Not Started', meta: 'Opens Week 45', icon: 'file' },
  { ch: 'Final', title: 'Mixed & Mastered Original Song', status: 'accent', label: '★ Milestone', meta: 'Portfolio centerpiece · 48%', icon: 'award' },
];

function WorkScreen() {
  return (
    <div className="fade">
      <div className="page-head">
        <div>
          <p className="eyebrow">Module 03</p>
          <h1 className="pt">My Work</h1>
          <p className="sub">Every deliverable that builds toward your final portfolio.</p>
        </div>
        <Button variant="secondary" icon="filter">Filter</Button>
      </div>

      <div className="grid g3" style={{ marginBottom: 22 }}>
        <div className="card pad stat"><div className="v mono">12</div><div className="k">Submitted</div></div>
        <div className="card pad stat"><div className="v mono">9</div><div className="k">Passed</div></div>
        <div className="card pad stat"><div className="v mono">1</div><div className="k">To Revise</div></div>
      </div>

      <div className="widget">
        <div className="widget-head"><h3>Deliverables</h3><span className="mono t-light" style={{ fontSize: 11 }}>5 items</span></div>
        <div style={{ padding: '6px 0' }}>
          {SUBMISSIONS.map((s, i) => (
            <div key={i} className="row gap16" style={{ padding: '13px 18px', borderTop: i ? '1px solid var(--border)' : 'none' }}>
              <span className="gold-tile"><Icon name={s.icon} size={18} /></span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="row gap8">
                  <span className="mono t-light" style={{ fontSize: 11 }}>{s.ch}</span>
                  <span style={{ font: '600 14px var(--font-sans)', color: 'var(--fg)' }}>{s.title}</span>
                </div>
                <div className="t-light" style={{ font: '400 12px var(--font-sans)', marginTop: 3 }}>{s.meta}</div>
              </div>
              <Badge variant={s.status}>{s.label}</Badge>
              <Icon name="chevron-right" size={16} className="t-light" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Placeholder({ title, icon, note }) {
  return (
    <div className="fade" style={{ textAlign: 'center', padding: '70px 20px' }}>
      <span className="gold-tile" style={{ width: 56, height: 56, margin: '0 auto 18px' }}><Icon name={icon} size={26} /></span>
      <h1 className="pt" style={{ fontSize: 24 }}>{title}</h1>
      <p className="sub" style={{ margin: '10px auto 0' }}>{note}</p>
    </div>
  );
}
Object.assign(window, { WorkScreen, Placeholder });
