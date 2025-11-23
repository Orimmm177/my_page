import React, { useEffect, useState, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Games from './pages/Games';
import { PageRoute } from './types';

// Theme Context
type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Scroll to top on route change helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen font-sans text-slate-900 bg-[#fdfbf7] dark:bg-[#0B1120] dark:text-slate-100 selection:bg-amber-200 selection:text-amber-900 dark:selection:bg-sky-900 dark:selection:text-sky-200 transition-colors duration-300">
          <Navigation />
          
          <main className="relative z-0">
            <Routes>
              <Route path={PageRoute.HOME} element={<Home />} />
              <Route path={PageRoute.EXPERIENCE} element={<Experience />} />
              <Route path={PageRoute.PROJECTS} element={<Projects />} />
              <Route path={PageRoute.GAMES} element={<Games />} />
            </Routes>
          </main>

          <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-8 text-center relative z-10 transition-colors duration-300">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-serif">
              © {new Date().getFullYear()}
            </p>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;