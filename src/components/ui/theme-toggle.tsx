import { useEffect, useState } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains('dark') ||
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-md bg-surface text-text-secondary hover:bg-surface-elevated hover:text-text-primary transition-all border border-border-subtle"
    >
      {isDark ? (
        <MdLightMode className="text-xl" />
      ) : (
        <MdDarkMode className="text-xl" />
      )}
    </button>
  );
};
