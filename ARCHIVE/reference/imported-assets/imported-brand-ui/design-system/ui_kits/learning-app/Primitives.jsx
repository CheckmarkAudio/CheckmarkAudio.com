/* Checkmark Audio School — shared UI primitives */
const { useState, useEffect, useRef } = React;

/* Lucide icon — renders an SVG via the lucide UMD global. Inherits color
   through currentColor; size via attrs. */
function Icon({ name, size = 18, strokeWidth = 2, className = '', style = {} }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    el.appendChild(i);
    window.lucide.createIcons({
      attrs: { width: size, height: size, 'stroke-width': strokeWidth },
    });
  }, [name, size, strokeWidth]);
  return <span ref={ref} className={className} style={{ display: 'inline-flex', ...style }} />;
}

function Button({ variant = 'primary', size, icon, children, onClick, style }) {
  return (
    <button className={`btn ${variant}${size ? ' ' + size : ''}`} onClick={onClick} style={style}>
      {icon && <Icon name={icon} size={size === 'sm' ? 14 : 16} />}
      {children}
    </button>
  );
}

function Badge({ variant = 'neutral', dot, children }) {
  return (
    <span className={`badge ${variant}`}>
      {dot && <span className="dot" style={{ background: 'currentColor' }} />}
      {children}
    </span>
  );
}

function Progress({ value, success }) {
  return (
    <div className={`prog${success ? ' success' : ''}`}>
      <i style={{ width: `${value}%` }} />
    </div>
  );
}

/* Circular progress ring (gold) for the overview hero */
function ProgressRing({ value, size = 92, stroke = 8 }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c - (value / 100) * c;
  return (
    <svg width={size} height={size} className="ring">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--surface-alt)" strokeWidth={stroke} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--gold)" strokeWidth={stroke}
        strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset .6s ease' }} />
    </svg>
  );
}

const CALLOUT_ICON = { key: 'star', safe: 'triangle-alert', listen: 'music', deliver: 'check' };
function Callout({ kind, title, children }) {
  return (
    <div className={`callout ${kind}`}>
      <span className="ct-ic"><Icon name={CALLOUT_ICON[kind]} size={17} /></span>
      <div><h4>{title}</h4><p>{children}</p></div>
    </div>
  );
}

/* Lesson / chapter card */
function LessonCard({ module, moduleVar, classes, title, meta, progress, done, onOpen }) {
  return (
    <div className="lesson" onClick={onOpen}>
      <div className="strip" style={{ background: `var(${moduleVar})` }} />
      <div className="lb">
        <div className="lt">
          <Badge variant="neutral">{module}</Badge>
          <span className="mono t-light" style={{ fontSize: 11 }}>{classes}</span>
        </div>
        <h3>{title}</h3>
        <p className="meta">{meta}</p>
        <div className="lf">
          <Progress value={done ? 100 : progress} success={done} />
          <span className="pct" style={done ? { color: 'var(--success)' } : {}}>{done ? 'Done' : progress + '%'}</span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Icon, Button, Badge, Progress, ProgressRing, Callout, LessonCard });
