"use client";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex gap-2">
      {["default", "dark", "green", "red"].map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t as 'default' | 'dark' | 'green' | 'red')}
          className={`px-3 py-1 rounded ${theme === t ? 'bg-[var(--primary)] text-white' : 'bg-gray-200'}`}
        >
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </button>
      ))}
    </div>
  );
} 