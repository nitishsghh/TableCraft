"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Theme = "default" | "dark" | "green" | "red";

const themes = {
  default: {
    "--background": "#ffffff",
    "--foreground": "#171717",
    "--primary": "#2563eb",
    "--secondary": "#fbbf24",
  },
  dark: {
    "--background": "#171717",
    "--foreground": "#ededed",
    "--primary": "#0ea5e9",
    "--secondary": "#fbbf24",
  },
  green: {
    "--background": "#e0f2f1",
    "--foreground": "#065f46",
    "--primary": "#10b981",
    "--secondary": "#fbbf24",
  },
  red: {
    "--background": "#fff1f2",
    "--foreground": "#7f1d1d",
    "--primary": "#ef4444",
    "--secondary": "#fbbf24",
  },
};

const ThemeContext = createContext({
  theme: "default" as Theme,
  setTheme: (theme: Theme) => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("default");
  const [mounted, setMounted] = useState(false);

  // Handle initial mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    const themeVars = themes[theme];
    Object.entries(themeVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [theme, mounted]);

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
} 