/* App — auth gate + nav routing + theme */
function App() {
  const [authed, setAuthed] = useState(false);
  const [page, setPage] = useState('overview');
  const [theme, setTheme] = useState(() => localStorage.getItem('cas-theme-v2') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cas-theme-v2', theme);
  }, [theme]);

  if (!authed) return <LoginScreen onLogin={() => setAuthed(true)} />;

  let screen;
  switch (page) {
    case 'overview':   screen = <OverviewScreen onNav={setPage} />; break;
    case 'modules':    screen = <CurriculumScreen onNav={setPage} />; break;
    case 'lesson':     screen = <LessonScreen onNav={setPage} />; break;
    case 'work':       screen = <WorkScreen />; break;
    case 'calendar':   screen = <Placeholder title="Calendar" icon="calendar" note="Class schedule, studio sessions, and deliverable due dates live here." />; break;
    case 'resources':  screen = <Placeholder title="Studio Resources" icon="folder-open" note="DAW templates, signal-flow diagrams, mic technique library, and safety docs." />; break;
    default:           screen = <OverviewScreen onNav={setPage} />;
  }

  // 'lesson' isn't a top-nav item — keep Curriculum highlighted while viewing one.
  const current = page === 'lesson' ? 'modules' : page;

  return (
    <AppShell current={current} onNav={setPage} theme={theme} onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}>
      {screen}
    </AppShell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
