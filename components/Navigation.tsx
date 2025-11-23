import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Palette, Briefcase, BookOpen, Gamepad2, Moon, Sun } from 'lucide-react';
import { PageRoute } from '../types';
import { useTheme } from '../App';

const Navigation: React.FC = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { path: PageRoute.HOME, label: '画廊', icon: Palette },
    { path: PageRoute.EXPERIENCE, label: '历程', icon: Briefcase },
    { path: PageRoute.PROJECTS, label: '作品', icon: BookOpen },
    { path: PageRoute.GAMES, label: '雅趣', icon: Gamepad2 },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-6 bg-gradient-to-b from-white/90 dark:from-slate-900/90 to-transparent pointer-events-none transition-colors duration-300">
      <div className="pointer-events-auto bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-lg shadow-blue-900/5 dark:shadow-black/40 rounded-full px-2 py-2 border border-white/50 dark:border-slate-700 flex gap-2 items-center">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 font-medium text-sm
                ${isActive 
                  ? 'bg-sky-100 text-sky-900 shadow-inner shadow-sky-200 dark:bg-sky-900 dark:text-sky-100 dark:shadow-none' 
                  : 'text-slate-600 hover:bg-amber-50 hover:text-amber-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-amber-200'}
              `}
            >
              <item.icon size={18} className={isActive ? "text-sky-700 dark:text-sky-200" : "opacity-70"} />
              <span className={`${isActive ? 'opacity-100 font-bold' : 'hidden md:inline opacity-80'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
        
        <div className="w-px h-6 bg-slate-200 dark:bg-slate-600 mx-1"></div>

        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;