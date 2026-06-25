/* Overview / student dashboard */
function OverviewScreen({ onNav }) {
  return (
    <div className="fade">
      <div className="page-head">
        <div>
          <p className="eyebrow">Cohort 7 · Week 43 of 48</p>
          <h1 className="pt">Welcome back, Jordan</h1>
          <p className="sub">You're in the home stretch — Module 3 wraps with your final mixed &amp; mastered song.</p>
        </div>
        <Button variant="primary" icon="play" onClick={() => onNav('lesson')}>Resume Chapter 6</Button>
      </div>

      <div className="grid g-main">
        {/* LEFT */}
        <div className="col gap16">
          {/* Continue widget */}
          <div className="widget">
            <div className="widget-head"><h3>Continue Where You Left Off</h3><Badge variant="gold">In Progress</Badge></div>
            <div className="widget-body">
              <div className="row gap16">
                <span className="ink-tile" style={{ width: 52, height: 52 }}><Icon name="sliders-horizontal" size={24} /></span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="row between">
                    <div>
                      <div className="label" style={{ color: 'var(--module-3)' }}>Module 03 · Chapter 6</div>
                      <h3 style={{ margin: '6px 0 0', font: '600 18px var(--font-sans)', color: 'var(--fg)' }}>Full Personal Song Mix — Top-Down Method</h3>
                    </div>
                  </div>
                  <div className="row gap12 mt16">
                    <Progress value={62} />
                    <span className="mono t-gold" style={{ fontSize: 12 }}>62%</span>
                  </div>
                </div>
              </div>
              <div className="row gap8 mt16">
                <Button variant="primary" size="sm" icon="play" onClick={() => onNav('lesson')}>Continue Class</Button>
                <Button variant="secondary" size="sm" icon="list" onClick={() => onNav('modules')}>View Module</Button>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid g3">
            <div className="card pad stat"><div className="v mono">43</div><div className="k">Classes Done</div></div>
            <div className="card pad stat"><div className="v">12</div><div className="k">Deliverables</div></div>
            <div className="card pad stat"><div className="v mono">−14</div><div className="k">Target LUFS</div></div>
          </div>

          {/* Up next */}
          <div className="widget">
            <div className="widget-head"><h3>Up Next This Week</h3><span className="mono t-light" style={{ fontSize: 11 }}>Weeks 43–44</span></div>
            <div className="widget-body col gap12">
              <Callout kind="key" title="Key Concept — Top-Down Mixing">Start from the full mix and carve down. Set the loudest section first so every move has context.</Callout>
              <Callout kind="listen" title="Listening Task">Pull two reference tracks in your genre. Log low-end balance and vocal level before you touch a fader.</Callout>
              <Callout kind="deliver" title="Deliverable — First-Pass Mix">Export a rough top-down mix with your reference notes. Due end of Class 44.</Callout>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col gap16">
          {/* Program progress ring */}
          <div className="widget">
            <div className="widget-head"><h3>Program Progress</h3></div>
            <div className="widget-body row gap16">
              <div style={{ position: 'relative', width: 92, height: 92 }}>
                <ProgressRing value={90} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                  <span className="mono t-gold" style={{ fontSize: 20, fontWeight: 600 }}>90%</span>
                </div>
              </div>
              <div className="col gap8" style={{ flex: 1 }}>
                <div className="row between"><span className="t-muted" style={{ fontSize: 13 }}>Module 1 · Production</span><Icon name="check" size={15} className="t-gold" /></div>
                <div className="row between"><span className="t-muted" style={{ fontSize: 13 }}>Module 2 · Recording</span><Icon name="check" size={15} className="t-gold" /></div>
                <div className="row between"><span style={{ fontSize: 13, color: 'var(--fg)' }}>Module 3 · Mix &amp; Master</span><span className="mono t-gold" style={{ fontSize: 12 }}>71%</span></div>
              </div>
            </div>
          </div>

          {/* Next class */}
          <div className="widget">
            <div className="widget-head"><h3>Next Class</h3></div>
            <div className="widget-body">
              <div className="row gap12">
                <span className="gold-tile"><Icon name="calendar-clock" size={18} /></span>
                <div>
                  <div style={{ font: '600 14px var(--font-sans)', color: 'var(--fg)' }}>Class 44 · Mix Review</div>
                  <div className="t-light" style={{ font: '400 12px var(--font-sans)', marginTop: 3 }}>Thu · 6:00–10:00 PM · Studio A</div>
                </div>
              </div>
              <div className="divider mt16" />
              <div className="row between mt12">
                <span className="label">Bring</span>
                <span className="t-muted" style={{ fontSize: 12 }}>Session file · reference tracks · headphones</span>
              </div>
            </div>
          </div>

          {/* Final project */}
          <div className="widget">
            <div className="widget-head"><h3>Final Project</h3><Badge variant="accent">★ Milestone</Badge></div>
            <div className="widget-body">
              <p className="t-muted" style={{ font: '400 13px/1.55 var(--font-sans)', margin: 0 }}>
                A fully mixed and mastered version of your original song — your portfolio centerpiece.
              </p>
              <div className="row gap12 mt16">
                <Progress value={48} /><span className="mono t-gold" style={{ fontSize: 12 }}>48%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { OverviewScreen });
