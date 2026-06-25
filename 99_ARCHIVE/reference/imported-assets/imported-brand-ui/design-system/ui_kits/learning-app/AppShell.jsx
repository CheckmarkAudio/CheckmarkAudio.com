/* App shell — sticky header, brand, top nav, right controls */
function AppShell({ nav, current, onNav, onSignOut, theme, onToggleTheme, children }) {
  const items = [
    { id: 'overview', label: 'Overview', icon: 'layout-dashboard' },
    { id: 'modules', label: 'Curriculum', icon: 'library' },
    { id: 'work', label: 'My Work', icon: 'check-square' },
    { id: 'calendar', label: 'Calendar', icon: 'calendar' },
    { id: 'resources', label: 'Resources', icon: 'folder-open' },
  ];
  return (
    <div className="shell">
      <header className="hdr">
        <div className="hdr-row">
          <div className="brand">
            <img src="../../assets/02-school-logo-gold.png" alt="Checkmark Audio School" />
            <div>
              <div className="bn">Checkmark Audio</div>
              <div className="bs">School</div>
            </div>
          </div>
          <div className="hdr-right">
            <button className="resume-pill" onClick={() => onNav('lesson')}>
              <Icon name="play" size={14} /> Resume Class
            </button>
            <button className="icon-btn" onClick={onToggleTheme} title={theme === 'dark' ? 'Use classroom mode' : 'Use studio dark mode'}>
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={16} />
            </button>
            <button className="icon-btn" title="Notifications"><Icon name="bell" size={16} /></button>
            <div className="row gap12">
              <div className="avatar">JA</div>
              <div className="who">
                <div className="n">Jordan Avery</div>
                <div className="r">Student · Cohort 7</div>
              </div>
            </div>
          </div>
        </div>
        <nav className="topnav">
          {items.map(it => (
            <button key={it.id} className={`nav-item${current === it.id ? ' active' : ''}`} onClick={() => onNav(it.id)}>
              <Icon name={it.icon} size={16} strokeWidth={1.9} />{it.label}
            </button>
          ))}
        </nav>
      </header>
      <main className="content">{children}</main>
    </div>
  );
}
Object.assign(window, { AppShell });
