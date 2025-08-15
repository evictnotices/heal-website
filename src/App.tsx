import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from './hooks/use-config';
import { useTheme } from './hooks/use-theme';
import { useSmoothScroll } from './components/animations/smooth-scroll';
import { useVisitorTracking } from './utils/analytics';
import { Header } from './components/layout/header';
import { Home } from './pages/home';
import { Commands } from './pages/commands';
import { Privacy } from './pages/privacy';
import { Terms } from './pages/terms';
import './styles/theme.css';

function AppContent() {
  useTheme();
  useSmoothScroll();
  useVisitorTracking();

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/commands" element={<Commands />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <ConfigProvider>
      <Router>
        <AppContent />
      </Router>
    </ConfigProvider>
  );
}