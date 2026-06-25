/* @ds-bundle: {"format":3,"namespace":"CheckmarkAudioSchoolDesignSystem_7b4194","components":[],"sourceHashes":{"ui_kits/learning-app/AppShell.jsx":"039400868867","ui_kits/learning-app/CurriculumScreen.jsx":"d9b2a59ff779","ui_kits/learning-app/LessonScreen.jsx":"308e9baeac84","ui_kits/learning-app/LoginScreen.jsx":"a32f1ad4514a","ui_kits/learning-app/OverviewScreen.jsx":"f053a46d3e78","ui_kits/learning-app/Primitives.jsx":"62d36bbb3af6","ui_kits/learning-app/WorkScreen.jsx":"5dcee1363758","ui_kits/learning-app/app.jsx":"7b06914d1142"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CheckmarkAudioSchoolDesignSystem_7b4194 = window.CheckmarkAudioSchoolDesignSystem_7b4194 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/learning-app/AppShell.jsx
try { (() => {
/* App shell — sticky header, brand, top nav, right controls */
function AppShell({
  nav,
  current,
  onNav,
  onSignOut,
  theme,
  onToggleTheme,
  children
}) {
  const items = [{
    id: 'overview',
    label: 'Overview',
    icon: 'layout-dashboard'
  }, {
    id: 'modules',
    label: 'Curriculum',
    icon: 'library'
  }, {
    id: 'work',
    label: 'My Work',
    icon: 'check-square'
  }, {
    id: 'calendar',
    label: 'Calendar',
    icon: 'calendar'
  }, {
    id: 'resources',
    label: 'Resources',
    icon: 'folder-open'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("header", {
    className: "hdr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hdr-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/02-school-logo-gold.png",
    alt: "Checkmark Audio School"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bn"
  }, "Checkmark Audio"), /*#__PURE__*/React.createElement("div", {
    className: "bs"
  }, "School"))), /*#__PURE__*/React.createElement("div", {
    className: "hdr-right"
  }, /*#__PURE__*/React.createElement("button", {
    className: "resume-pill",
    onClick: () => onNav('lesson')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 14
  }), " Resume Class"), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: onToggleTheme,
    title: theme === 'dark' ? 'Use classroom mode' : 'Use studio dark mode'
  }, /*#__PURE__*/React.createElement(Icon, {
    name: theme === 'dark' ? 'sun' : 'moon',
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    title: "Notifications"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    className: "row gap12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatar"
  }, "JA"), /*#__PURE__*/React.createElement("div", {
    className: "who"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "Jordan Avery"), /*#__PURE__*/React.createElement("div", {
    className: "r"
  }, "Student \xB7 Cohort 7"))))), /*#__PURE__*/React.createElement("nav", {
    className: "topnav"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: `nav-item${current === it.id ? ' active' : ''}`,
    onClick: () => onNav(it.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 16,
    strokeWidth: 1.9
  }), it.label)))), /*#__PURE__*/React.createElement("main", {
    className: "content"
  }, children));
}
Object.assign(window, {
  AppShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learning-app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learning-app/CurriculumScreen.jsx
try { (() => {
/* Curriculum browser — module overview + chapter cards */
const M3_CHAPTERS = [{
  n: 1,
  classes: 'Classes 33–34',
  title: 'Critical Listening & Analyzing Pro Mixes',
  meta: 'Weeks 33–34 · listening + hands-on',
  progress: 100,
  done: true
}, {
  n: 2,
  classes: 'Classes 35–36',
  title: 'Session Setup, Basic Balance & Panning',
  meta: 'Weeks 35–36 · hands-on',
  progress: 100,
  done: true
}, {
  n: 3,
  classes: 'Classes 37–38',
  title: 'Masking Solutions With EQ & Compression',
  meta: 'Weeks 37–38 · hands-on',
  progress: 100,
  done: true
}, {
  n: 4,
  classes: 'Classes 39–40',
  title: 'Time-Based Effects & Creative Automation',
  meta: 'Weeks 39–40 · hands-on',
  progress: 100,
  done: true
}, {
  n: 5,
  classes: 'Classes 41–42',
  title: 'Mix Planning Using Reference Tracks',
  meta: 'Weeks 41–42 · planning',
  progress: 100,
  done: true
}, {
  n: 6,
  classes: 'Classes 43–44',
  title: 'Full Personal Song Mix — Top-Down Method',
  meta: 'Weeks 43–44 · studio build',
  progress: 62,
  done: false
}, {
  n: 7,
  classes: 'Classes 45–46',
  title: 'Mastering: Loudness, EQ & Stereo Imaging',
  meta: 'Weeks 45–46 · mastering',
  progress: 0,
  done: false
}, {
  n: 8,
  classes: 'Classes 47–48',
  title: 'Final Review, Delivery & Class Presentation',
  meta: 'Weeks 47–48 · delivery',
  progress: 0,
  done: false
}];
const MODULES = [{
  id: 1,
  v: '--module-1',
  label: 'Module 01',
  title: 'Production & Sound Design',
  done: true
}, {
  id: 2,
  v: '--module-2',
  label: 'Module 02',
  title: 'Recording & Engineering',
  done: true
}, {
  id: 3,
  v: '--module-3',
  label: 'Module 03',
  title: 'Mixing, Mastering & Delivery',
  done: false
}];
function CurriculumScreen({
  onNav
}) {
  const [active, setActive] = useState(3);
  return /*#__PURE__*/React.createElement("div", {
    className: "fade"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "12 Months \xB7 48 Classes"), /*#__PURE__*/React.createElement("h1", {
    className: "pt"
  }, "Curriculum"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "One creative project across three modules: produce it, record it, then mix and master it."))), /*#__PURE__*/React.createElement("div", {
    className: "grid g3",
    style: {
      marginBottom: 24
    }
  }, MODULES.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    className: `card pad lift`,
    onClick: () => setActive(m.id),
    style: active === m.id ? {
      borderColor: `var(${m.v})`,
      boxShadow: `inset 0 0 0 1px var(${m.v})`
    } : {}
  }, /*#__PURE__*/React.createElement("div", {
    className: "row between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label",
    style: {
      color: `var(${m.v})`
    }
  }, m.label), m.done ? /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check-big",
    size: 17,
    className: "t-gold"
  }) : /*#__PURE__*/React.createElement(Badge, {
    variant: "gold"
  }, "Current")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '10px 0 0',
      font: '600 16px var(--font-sans)',
      color: 'var(--fg)'
    }
  }, m.title)))), /*#__PURE__*/React.createElement("div", {
    className: "row between",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row gap12"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ink-tile"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sliders-horizontal",
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label",
    style: {
      color: 'var(--module-3)'
    }
  }, "Module 03 \xB7 16 weeks"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 20px var(--font-sans)',
      letterSpacing: '-0.01em',
      color: 'var(--fg)',
      marginTop: 4
    }
  }, "Mixing, Mastering & Delivery"))), /*#__PURE__*/React.createElement("div", {
    className: "row gap12",
    style: {
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    value: 71
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono t-gold",
    style: {
      fontSize: 12
    }
  }, "71%"))), /*#__PURE__*/React.createElement("div", {
    className: "grid g2"
  }, M3_CHAPTERS.map(c => /*#__PURE__*/React.createElement(LessonCard, {
    key: c.n,
    module: `Chapter ${c.n}`,
    moduleVar: "--module-3",
    classes: c.classes,
    title: c.title,
    meta: c.meta,
    progress: c.progress,
    done: c.done,
    onOpen: () => onNav('lesson')
  }))));
}
Object.assign(window, {
  CurriculumScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learning-app/CurriculumScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learning-app/LessonScreen.jsx
try { (() => {
/* Lesson / class detail — the chapter plan */
function LessonScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fade"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn ghost sm",
    onClick: () => onNav('modules'),
    style: {
      paddingLeft: 0,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 15
  }), " Back to Curriculum"), /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      color: 'var(--module-3)'
    }
  }, "Module 03 \xB7 Chapter 6 \xB7 Weeks 43\u201344"), /*#__PURE__*/React.createElement("h1", {
    className: "pt"
  }, "Full Personal Song Mix \u2014 Top-Down Method"), /*#__PURE__*/React.createElement("div", {
    className: "row gap8 mt16"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral",
    dot: true
  }, "2 Classes"), /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral"
  }, "Hands-On"), /*#__PURE__*/React.createElement(Badge, {
    variant: "gold"
  }, "In Progress \xB7 62%"))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "play"
  }, "Continue Class")), /*#__PURE__*/React.createElement("div", {
    className: "grid g-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col gap16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "widget"
  }, /*#__PURE__*/React.createElement("div", {
    className: "widget-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Chapter Objective")), /*#__PURE__*/React.createElement("div", {
    className: "widget-body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "t-muted",
    style: {
      font: '400 15px/1.6 var(--font-sans)',
      margin: 0
    }
  }, "Mix your own song end-to-end using the top-down method: set the full balance first, then refine with EQ, compression, and automation \u2014 always checked against your reference tracks."))), /*#__PURE__*/React.createElement("div", {
    className: "widget"
  }, /*#__PURE__*/React.createElement("div", {
    className: "widget-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row gap12"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gold-tile",
    style: {
      width: 30,
      height: 30
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 13,
      color: 'var(--gold)'
    }
  }, "43")), /*#__PURE__*/React.createElement("h3", null, "Class 1 \u2014 Introduce & Build")), /*#__PURE__*/React.createElement("span", {
    className: "mono t-light",
    style: {
      fontSize: 11
    }
  }, "4 hours")), /*#__PURE__*/React.createElement("div", {
    className: "widget-body col gap12"
  }, /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Key Concept \u2014 Gain Staging First"
  }, "Set a clean, consistent level on every track before any processing. A tidy gain structure makes every later move predictable."), /*#__PURE__*/React.createElement(Callout, {
    kind: "listen",
    title: "Listening Task"
  }, "Compare your rough balance to two pro references. Note where your low end and vocals sit by feel, then by meter."))), /*#__PURE__*/React.createElement("div", {
    className: "widget"
  }, /*#__PURE__*/React.createElement("div", {
    className: "widget-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row gap12"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gold-tile",
    style: {
      width: 30,
      height: 30
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 13,
      color: 'var(--gold)'
    }
  }, "44")), /*#__PURE__*/React.createElement("h3", null, "Class 2 \u2014 Refine & Critique")), /*#__PURE__*/React.createElement("span", {
    className: "mono t-light",
    style: {
      fontSize: 11
    }
  }, "4 hours")), /*#__PURE__*/React.createElement("div", {
    className: "widget-body col gap12"
  }, /*#__PURE__*/React.createElement(Callout, {
    kind: "safe",
    title: "Studio Safety"
  }, "Pull monitor gain to zero before re-patching the console. Protect your ears and the speakers."), /*#__PURE__*/React.createElement(Callout, {
    kind: "deliver",
    title: "Deliverable \u2014 First-Pass Mix"
  }, "Export a top-down mix bounced at your reference loudness and submit with your notes. Collected at end of Class 2.")))), /*#__PURE__*/React.createElement("div", {
    className: "col gap16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "widget"
  }, /*#__PURE__*/React.createElement("div", {
    className: "widget-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Technical Targets")), /*#__PURE__*/React.createElement("div", {
    className: "widget-body col gap12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-muted",
    style: {
      fontSize: 13
    }
  }, "Integrated loudness"), /*#__PURE__*/React.createElement("span", {
    className: "mono t-gold"
  }, "\u221214 LUFS")), /*#__PURE__*/React.createElement("div", {
    className: "divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "row between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-muted",
    style: {
      fontSize: 13
    }
  }, "True peak ceiling"), /*#__PURE__*/React.createElement("span", {
    className: "mono t-gold"
  }, "\u22121.0 dBTP")), /*#__PURE__*/React.createElement("div", {
    className: "divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "row between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-muted",
    style: {
      fontSize: 13
    }
  }, "Bounce format"), /*#__PURE__*/React.createElement("span", {
    className: "mono t-gold"
  }, "24-bit \xB7 48k")))), /*#__PURE__*/React.createElement("div", {
    className: "widget"
  }, /*#__PURE__*/React.createElement("div", {
    className: "widget-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Required Materials")), /*#__PURE__*/React.createElement("div", {
    className: "widget-body col gap12"
  }, ['DAW session (template provided)', 'Two genre reference tracks', 'Calibrated headphones', 'Loudness meter plugin'].map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "row gap12"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    className: "t-gold"
  }), /*#__PURE__*/React.createElement("span", {
    className: "t-muted",
    style: {
      fontSize: 13
    }
  }, m))))), /*#__PURE__*/React.createElement("div", {
    className: "widget"
  }, /*#__PURE__*/React.createElement("div", {
    className: "widget-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Submit Deliverable"), /*#__PURE__*/React.createElement(Badge, {
    variant: "warning"
  }, "Due Class 44")), /*#__PURE__*/React.createElement("div", {
    className: "widget-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card pad",
    style: {
      borderStyle: 'dashed',
      textAlign: 'center',
      background: 'var(--surface-alt)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "accent-tile",
    style: {
      margin: '0 auto 10px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "upload",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px var(--font-sans)',
      color: 'var(--fg)'
    }
  }, "Drop your mix bounce"), /*#__PURE__*/React.createElement("div", {
    className: "t-light",
    style: {
      font: '400 12px var(--font-sans)',
      marginTop: 3
    }
  }, "WAV \xB7 up to 100 MB")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "upload",
    style: {
      width: '100%',
      marginTop: 14
    }
  }, "Submit First-Pass Mix"))))));
}
Object.assign(window, {
  LessonScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learning-app/LessonScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learning-app/LoginScreen.jsx
try { (() => {
/* Login screen — split branding panel (mirrors the parent dashboard) */
function LoginScreen({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "login fade"
  }, /*#__PURE__*/React.createElement("div", {
    className: "login-brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glow1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "glow2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "inner"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/02-school-logo-gold.png",
    alt: "Checkmark Audio School"
  }), /*#__PURE__*/React.createElement("h2", null, "Learn the craft.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "t-gold"
  }, "In a real studio.")), /*#__PURE__*/React.createElement("p", null, "A 12-month, hands-on program in production, recording, mixing & mastering \u2014 taught the way the work is actually done."), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral"
  }, "3 Modules"), /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral"
  }, "48 Classes"), /*#__PURE__*/React.createElement(Badge, {
    variant: "gold"
  }, "Portfolio-driven")))), /*#__PURE__*/React.createElement("div", {
    className: "login-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box fade"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "pt",
    style: {
      fontSize: 26
    }
  }, "Welcome back"), /*#__PURE__*/React.createElement("p", {
    className: "sub",
    style: {
      marginBottom: 24
    }
  }, "Sign in to continue your program."), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    defaultValue: "jordan.avery@student.checkmark.audio"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    defaultValue: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "log-in",
    onClick: onLogin,
    style: {
      width: '100%',
      marginTop: 6
    }
  }, "Sign In"), /*#__PURE__*/React.createElement("p", {
    className: "t-light",
    style: {
      font: '400 12px var(--font-sans)',
      textAlign: 'center',
      marginTop: 16
    }
  }, "Need access? Ask your instructor to set up your account."))));
}
Object.assign(window, {
  LoginScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learning-app/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learning-app/OverviewScreen.jsx
try { (() => {
/* Overview / student dashboard */
function OverviewScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fade"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Cohort 7 \xB7 Week 43 of 48"), /*#__PURE__*/React.createElement("h1", {
    className: "pt"
  }, "Welcome back, Jordan"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "You're in the home stretch \u2014 Module 3 wraps with your final mixed & mastered song.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "play",
    onClick: () => onNav('lesson')
  }, "Resume Chapter 6")), /*#__PURE__*/React.createElement("div", {
    className: "grid g-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col gap16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "widget"
  }, /*#__PURE__*/React.createElement("div", {
    className: "widget-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Continue Where You Left Off"), /*#__PURE__*/React.createElement(Badge, {
    variant: "gold"
  }, "In Progress")), /*#__PURE__*/React.createElement("div", {
    className: "widget-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row gap16"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ink-tile",
    style: {
      width: 52,
      height: 52
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sliders-horizontal",
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label",
    style: {
      color: 'var(--module-3)'
    }
  }, "Module 03 \xB7 Chapter 6"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '6px 0 0',
      font: '600 18px var(--font-sans)',
      color: 'var(--fg)'
    }
  }, "Full Personal Song Mix \u2014 Top-Down Method"))), /*#__PURE__*/React.createElement("div", {
    className: "row gap12 mt16"
  }, /*#__PURE__*/React.createElement(Progress, {
    value: 62
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono t-gold",
    style: {
      fontSize: 12
    }
  }, "62%")))), /*#__PURE__*/React.createElement("div", {
    className: "row gap8 mt16"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    icon: "play",
    onClick: () => onNav('lesson')
  }, "Continue Class"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "list",
    onClick: () => onNav('modules')
  }, "View Module")))), /*#__PURE__*/React.createElement("div", {
    className: "grid g3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card pad stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v mono"
  }, "43"), /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Classes Done")), /*#__PURE__*/React.createElement("div", {
    className: "card pad stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "12"), /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Deliverables")), /*#__PURE__*/React.createElement("div", {
    className: "card pad stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v mono"
  }, "\u221214"), /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Target LUFS"))), /*#__PURE__*/React.createElement("div", {
    className: "widget"
  }, /*#__PURE__*/React.createElement("div", {
    className: "widget-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Up Next This Week"), /*#__PURE__*/React.createElement("span", {
    className: "mono t-light",
    style: {
      fontSize: 11
    }
  }, "Weeks 43\u201344")), /*#__PURE__*/React.createElement("div", {
    className: "widget-body col gap12"
  }, /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Key Concept \u2014 Top-Down Mixing"
  }, "Start from the full mix and carve down. Set the loudest section first so every move has context."), /*#__PURE__*/React.createElement(Callout, {
    kind: "listen",
    title: "Listening Task"
  }, "Pull two reference tracks in your genre. Log low-end balance and vocal level before you touch a fader."), /*#__PURE__*/React.createElement(Callout, {
    kind: "deliver",
    title: "Deliverable \u2014 First-Pass Mix"
  }, "Export a rough top-down mix with your reference notes. Due end of Class 44.")))), /*#__PURE__*/React.createElement("div", {
    className: "col gap16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "widget"
  }, /*#__PURE__*/React.createElement("div", {
    className: "widget-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Program Progress")), /*#__PURE__*/React.createElement("div", {
    className: "widget-body row gap16"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 92,
      height: 92
    }
  }, /*#__PURE__*/React.createElement(ProgressRing, {
    value: 90
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono t-gold",
    style: {
      fontSize: 20,
      fontWeight: 600
    }
  }, "90%"))), /*#__PURE__*/React.createElement("div", {
    className: "col gap8",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-muted",
    style: {
      fontSize: 13
    }
  }, "Module 1 \xB7 Production"), /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    className: "t-gold"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-muted",
    style: {
      fontSize: 13
    }
  }, "Module 2 \xB7 Recording"), /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    className: "t-gold"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row between"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--fg)'
    }
  }, "Module 3 \xB7 Mix & Master"), /*#__PURE__*/React.createElement("span", {
    className: "mono t-gold",
    style: {
      fontSize: 12
    }
  }, "71%"))))), /*#__PURE__*/React.createElement("div", {
    className: "widget"
  }, /*#__PURE__*/React.createElement("div", {
    className: "widget-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Next Class")), /*#__PURE__*/React.createElement("div", {
    className: "widget-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row gap12"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gold-tile"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-clock",
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px var(--font-sans)',
      color: 'var(--fg)'
    }
  }, "Class 44 \xB7 Mix Review"), /*#__PURE__*/React.createElement("div", {
    className: "t-light",
    style: {
      font: '400 12px var(--font-sans)',
      marginTop: 3
    }
  }, "Thu \xB7 6:00\u201310:00 PM \xB7 Studio A"))), /*#__PURE__*/React.createElement("div", {
    className: "divider mt16"
  }), /*#__PURE__*/React.createElement("div", {
    className: "row between mt12"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Bring"), /*#__PURE__*/React.createElement("span", {
    className: "t-muted",
    style: {
      fontSize: 12
    }
  }, "Session file \xB7 reference tracks \xB7 headphones")))), /*#__PURE__*/React.createElement("div", {
    className: "widget"
  }, /*#__PURE__*/React.createElement("div", {
    className: "widget-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Final Project"), /*#__PURE__*/React.createElement(Badge, {
    variant: "accent"
  }, "\u2605 Milestone")), /*#__PURE__*/React.createElement("div", {
    className: "widget-body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "t-muted",
    style: {
      font: '400 13px/1.55 var(--font-sans)',
      margin: 0
    }
  }, "A fully mixed and mastered version of your original song \u2014 your portfolio centerpiece."), /*#__PURE__*/React.createElement("div", {
    className: "row gap12 mt16"
  }, /*#__PURE__*/React.createElement(Progress, {
    value: 48
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono t-gold",
    style: {
      fontSize: 12
    }
  }, "48%")))))));
}
Object.assign(window, {
  OverviewScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learning-app/OverviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learning-app/Primitives.jsx
try { (() => {
/* Checkmark Audio School — shared UI primitives */
const {
  useState,
  useEffect,
  useRef
} = React;

/* Lucide icon — renders an SVG via the lucide UMD global. Inherits color
   through currentColor; size via attrs. */
function Icon({
  name,
  size = 18,
  strokeWidth = 2,
  className = '',
  style = {}
}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    el.appendChild(i);
    window.lucide.createIcons({
      attrs: {
        width: size,
        height: size,
        'stroke-width': strokeWidth
      }
    });
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: className,
    style: {
      display: 'inline-flex',
      ...style
    }
  });
}
function Button({
  variant = 'primary',
  size,
  icon,
  children,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: `btn ${variant}${size ? ' ' + size : ''}`,
    onClick: onClick,
    style: style
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size === 'sm' ? 14 : 16
  }), children);
}
function Badge({
  variant = 'neutral',
  dot,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `badge ${variant}`
  }, dot && /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: 'currentColor'
    }
  }), children);
}
function Progress({
  value,
  success
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `prog${success ? ' success' : ''}`
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: `${value}%`
    }
  }));
}

/* Circular progress ring (gold) for the overview hero */
function ProgressRing({
  value,
  size = 92,
  stroke = 8
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c - value / 100 * c;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    className: "ring"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--surface-alt)",
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--gold)",
    strokeWidth: stroke,
    strokeDasharray: c,
    strokeDashoffset: off,
    strokeLinecap: "round",
    style: {
      transition: 'stroke-dashoffset .6s ease'
    }
  }));
}
const CALLOUT_ICON = {
  key: 'star',
  safe: 'triangle-alert',
  listen: 'music',
  deliver: 'check'
};
function Callout({
  kind,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `callout ${kind}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "ct-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: CALLOUT_ICON[kind],
    size: 17
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, title), /*#__PURE__*/React.createElement("p", null, children)));
}

/* Lesson / chapter card */
function LessonCard({
  module,
  moduleVar,
  classes,
  title,
  meta,
  progress,
  done,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "lesson",
    onClick: onOpen
  }, /*#__PURE__*/React.createElement("div", {
    className: "strip",
    style: {
      background: `var(${moduleVar})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "lb"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lt"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral"
  }, module), /*#__PURE__*/React.createElement("span", {
    className: "mono t-light",
    style: {
      fontSize: 11
    }
  }, classes)), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", {
    className: "meta"
  }, meta), /*#__PURE__*/React.createElement("div", {
    className: "lf"
  }, /*#__PURE__*/React.createElement(Progress, {
    value: done ? 100 : progress,
    success: done
  }), /*#__PURE__*/React.createElement("span", {
    className: "pct",
    style: done ? {
      color: 'var(--success)'
    } : {}
  }, done ? 'Done' : progress + '%'))));
}
Object.assign(window, {
  Icon,
  Button,
  Badge,
  Progress,
  ProgressRing,
  Callout,
  LessonCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learning-app/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learning-app/WorkScreen.jsx
try { (() => {
/* My Work — deliverables & submissions list, plus a simple placeholder
   for surfaces not built out in this kit (Calendar / Resources). */
const SUBMISSIONS = [{
  ch: 'Ch 5',
  title: 'Mix Plan — Reference Breakdown',
  status: 'success',
  label: 'Passed',
  meta: 'Graded · 94 / 100',
  icon: 'file-check'
}, {
  ch: 'Ch 6',
  title: 'First-Pass Top-Down Mix',
  status: 'warning',
  label: 'Needs Revision',
  meta: 'Feedback ready',
  icon: 'file-audio'
}, {
  ch: 'Ch 6',
  title: 'Reference Listening Notes',
  status: 'gold',
  label: 'In Review',
  meta: 'Submitted 2 days ago',
  icon: 'file-text'
}, {
  ch: 'Ch 7',
  title: 'Master — Loudness Pass',
  status: 'neutral',
  label: 'Not Started',
  meta: 'Opens Week 45',
  icon: 'file'
}, {
  ch: 'Final',
  title: 'Mixed & Mastered Original Song',
  status: 'accent',
  label: '★ Milestone',
  meta: 'Portfolio centerpiece · 48%',
  icon: 'award'
}];
function WorkScreen() {
  return /*#__PURE__*/React.createElement("div", {
    className: "fade"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Module 03"), /*#__PURE__*/React.createElement("h1", {
    className: "pt"
  }, "My Work"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "Every deliverable that builds toward your final portfolio.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "filter"
  }, "Filter")), /*#__PURE__*/React.createElement("div", {
    className: "grid g3",
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card pad stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v mono"
  }, "12"), /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Submitted")), /*#__PURE__*/React.createElement("div", {
    className: "card pad stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v mono"
  }, "9"), /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Passed")), /*#__PURE__*/React.createElement("div", {
    className: "card pad stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v mono"
  }, "1"), /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "To Revise"))), /*#__PURE__*/React.createElement("div", {
    className: "widget"
  }, /*#__PURE__*/React.createElement("div", {
    className: "widget-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Deliverables"), /*#__PURE__*/React.createElement("span", {
    className: "mono t-light",
    style: {
      fontSize: 11
    }
  }, "5 items")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 0'
    }
  }, SUBMISSIONS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "row gap16",
    style: {
      padding: '13px 18px',
      borderTop: i ? '1px solid var(--border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gold-tile"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row gap8"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono t-light",
    style: {
      fontSize: 11
    }
  }, s.ch), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 14px var(--font-sans)',
      color: 'var(--fg)'
    }
  }, s.title)), /*#__PURE__*/React.createElement("div", {
    className: "t-light",
    style: {
      font: '400 12px var(--font-sans)',
      marginTop: 3
    }
  }, s.meta)), /*#__PURE__*/React.createElement(Badge, {
    variant: s.status
  }, s.label), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16,
    className: "t-light"
  }))))));
}
function Placeholder({
  title,
  icon,
  note
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fade",
    style: {
      textAlign: 'center',
      padding: '70px 20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gold-tile",
    style: {
      width: 56,
      height: 56,
      margin: '0 auto 18px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 26
  })), /*#__PURE__*/React.createElement("h1", {
    className: "pt",
    style: {
      fontSize: 24
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "sub",
    style: {
      margin: '10px auto 0'
    }
  }, note));
}
Object.assign(window, {
  WorkScreen,
  Placeholder
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learning-app/WorkScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learning-app/app.jsx
try { (() => {
/* App — auth gate + nav routing + theme */
function App() {
  const [authed, setAuthed] = useState(false);
  const [page, setPage] = useState('overview');
  const [theme, setTheme] = useState(() => localStorage.getItem('cas-theme-v2') || 'light');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cas-theme-v2', theme);
  }, [theme]);
  if (!authed) return /*#__PURE__*/React.createElement(LoginScreen, {
    onLogin: () => setAuthed(true)
  });
  let screen;
  switch (page) {
    case 'overview':
      screen = /*#__PURE__*/React.createElement(OverviewScreen, {
        onNav: setPage
      });
      break;
    case 'modules':
      screen = /*#__PURE__*/React.createElement(CurriculumScreen, {
        onNav: setPage
      });
      break;
    case 'lesson':
      screen = /*#__PURE__*/React.createElement(LessonScreen, {
        onNav: setPage
      });
      break;
    case 'work':
      screen = /*#__PURE__*/React.createElement(WorkScreen, null);
      break;
    case 'calendar':
      screen = /*#__PURE__*/React.createElement(Placeholder, {
        title: "Calendar",
        icon: "calendar",
        note: "Class schedule, studio sessions, and deliverable due dates live here."
      });
      break;
    case 'resources':
      screen = /*#__PURE__*/React.createElement(Placeholder, {
        title: "Studio Resources",
        icon: "folder-open",
        note: "DAW templates, signal-flow diagrams, mic technique library, and safety docs."
      });
      break;
    default:
      screen = /*#__PURE__*/React.createElement(OverviewScreen, {
        onNav: setPage
      });
  }

  // 'lesson' isn't a top-nav item — keep Curriculum highlighted while viewing one.
  const current = page === 'lesson' ? 'modules' : page;
  return /*#__PURE__*/React.createElement(AppShell, {
    current: current,
    onNav: setPage,
    theme: theme,
    onToggleTheme: () => setTheme(t => t === 'dark' ? 'light' : 'dark')
  }, screen);
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learning-app/app.jsx", error: String((e && e.message) || e) }); }

})();
