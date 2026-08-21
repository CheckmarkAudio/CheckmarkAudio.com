/* Lesson / class detail — the chapter plan */
function LessonScreen({ onNav }) {
  return (
    <div className="fade">
      <button className="btn ghost sm" onClick={() => onNav('modules')} style={{ paddingLeft: 0, marginBottom: 14 }}>
        <Icon name="arrow-left" size={15} /> Back to Curriculum
      </button>

      <div className="page-head">
        <div>
          <p className="eyebrow" style={{ color: 'var(--module-3)' }}>Module 03 · Chapter 6 · Weeks 43–44</p>
          <h1 className="pt">Full Personal Song Mix — Top-Down Method</h1>
          <div className="row gap8 mt16">
            <Badge variant="neutral" dot>2 Classes</Badge>
            <Badge variant="neutral">Hands-On</Badge>
            <Badge variant="gold">In Progress · 62%</Badge>
          </div>
        </div>
        <Button variant="primary" icon="play">Continue Class</Button>
      </div>

      <div className="grid g-main">
        {/* LEFT — plan */}
        <div className="col gap16">
          <div className="widget">
            <div className="widget-head"><h3>Chapter Objective</h3></div>
            <div className="widget-body">
              <p className="t-muted" style={{ font: '400 15px/1.6 var(--font-sans)', margin: 0 }}>
                Mix your own song end-to-end using the top-down method: set the full balance first, then refine
                with EQ, compression, and automation — always checked against your reference tracks.
              </p>
            </div>
          </div>

          {/* Class 1 */}
          <div className="widget">
            <div className="widget-head">
              <div className="row gap12"><span className="gold-tile" style={{ width: 30, height: 30 }}><span className="mono" style={{ fontSize: 13, color: 'var(--gold)' }}>43</span></span><h3>Class 1 — Introduce &amp; Build</h3></div>
              <span className="mono t-light" style={{ fontSize: 11 }}>4 hours</span>
            </div>
            <div className="widget-body col gap12">
              <Callout kind="key" title="Key Concept — Gain Staging First">Set a clean, consistent level on every track before any processing. A tidy gain structure makes every later move predictable.</Callout>
              <Callout kind="listen" title="Listening Task">Compare your rough balance to two pro references. Note where your low end and vocals sit by feel, then by meter.</Callout>
            </div>
          </div>

          {/* Class 2 */}
          <div className="widget">
            <div className="widget-head">
              <div className="row gap12"><span className="gold-tile" style={{ width: 30, height: 30 }}><span className="mono" style={{ fontSize: 13, color: 'var(--gold)' }}>44</span></span><h3>Class 2 — Refine &amp; Critique</h3></div>
              <span className="mono t-light" style={{ fontSize: 11 }}>4 hours</span>
            </div>
            <div className="widget-body col gap12">
              <Callout kind="safe" title="Studio Safety">Pull monitor gain to zero before re-patching the console. Protect your ears and the speakers.</Callout>
              <Callout kind="deliver" title="Deliverable — First-Pass Mix">Export a top-down mix bounced at your reference loudness and submit with your notes. Collected at end of Class 2.</Callout>
            </div>
          </div>
        </div>

        {/* RIGHT — targets, materials, submit */}
        <div className="col gap16">
          <div className="widget">
            <div className="widget-head"><h3>Technical Targets</h3></div>
            <div className="widget-body col gap12">
              <div className="row between"><span className="t-muted" style={{ fontSize: 13 }}>Integrated loudness</span><span className="mono t-gold">−14 LUFS</span></div>
              <div className="divider" />
              <div className="row between"><span className="t-muted" style={{ fontSize: 13 }}>True peak ceiling</span><span className="mono t-gold">−1.0 dBTP</span></div>
              <div className="divider" />
              <div className="row between"><span className="t-muted" style={{ fontSize: 13 }}>Bounce format</span><span className="mono t-gold">24-bit · 48k</span></div>
            </div>
          </div>

          <div className="widget">
            <div className="widget-head"><h3>Required Materials</h3></div>
            <div className="widget-body col gap12">
              {['DAW session (template provided)', 'Two genre reference tracks', 'Calibrated headphones', 'Loudness meter plugin'].map((m, i) => (
                <div key={i} className="row gap12"><Icon name="check" size={16} className="t-gold" /><span className="t-muted" style={{ fontSize: 13 }}>{m}</span></div>
              ))}
            </div>
          </div>

          <div className="widget">
            <div className="widget-head"><h3>Submit Deliverable</h3><Badge variant="warning">Due Class 44</Badge></div>
            <div className="widget-body">
              <div className="card pad" style={{ borderStyle: 'dashed', textAlign: 'center', background: 'var(--surface-alt)' }}>
                <span className="accent-tile" style={{ margin: '0 auto 10px' }}><Icon name="upload" size={18} /></span>
                <div style={{ font: '600 13px var(--font-sans)', color: 'var(--fg)' }}>Drop your mix bounce</div>
                <div className="t-light" style={{ font: '400 12px var(--font-sans)', marginTop: 3 }}>WAV · up to 100 MB</div>
              </div>
              <Button variant="primary" icon="upload" style={{ width: '100%', marginTop: 14 }}>Submit First-Pass Mix</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { LessonScreen });
