/* Login screen — split branding panel (mirrors the parent dashboard) */
function LoginScreen({ onLogin }) {
  return (
    <div className="login fade">
      <div className="login-brand">
        <div className="glow1" /><div className="glow2" />
        <div className="inner">
          <img src="../../assets/02-school-logo-gold.png" alt="Checkmark Audio School" />
          <h2>Learn the craft.<br /><span className="t-gold">In a real studio.</span></h2>
          <p>A 12-month, hands-on program in production, recording, mixing &amp; mastering — taught the way the work is actually done.</p>
          <div className="chips">
            <Badge variant="neutral">3 Modules</Badge>
            <Badge variant="neutral">48 Classes</Badge>
            <Badge variant="gold">Portfolio-driven</Badge>
          </div>
        </div>
      </div>
      <div className="login-form">
        <div className="box fade">
          <h1 className="pt" style={{ fontSize: 26 }}>Welcome back</h1>
          <p className="sub" style={{ marginBottom: 24 }}>Sign in to continue your program.</p>
          <div className="field">
            <label>Email</label>
            <input type="email" defaultValue="jordan.avery@student.checkmark.audio" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" defaultValue="········" />
          </div>
          <Button variant="primary" icon="log-in" onClick={onLogin} style={{ width: '100%', marginTop: 6 }}>
            Sign In
          </Button>
          <p className="t-light" style={{ font: '400 12px var(--font-sans)', textAlign: 'center', marginTop: 16 }}>
            Need access? Ask your instructor to set up your account.
          </p>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { LoginScreen });
