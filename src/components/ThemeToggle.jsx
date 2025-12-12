import { FiMoon, FiSun } from 'react-icons/fi'

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-100 hover:border-primary/60"
      aria-label="Toggle theme"
    >
      {isDark ? <FiSun /> : <FiMoon />}
      {isDark ? 'Light' : 'Dark'}
    </button>
  )
}
