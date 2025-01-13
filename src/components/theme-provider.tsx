"use client";

import { createContext, useContext, useEffect } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme",
}: ThemeProviderProps) {
  useEffect(() => {
    const theme = (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    document.documentElement.setAttribute("data-theme", theme);
  }, [storageKey, defaultTheme]);

  return (
    <ThemeProviderContext.Provider
      value={{
        theme: (localStorage.getItem(storageKey) as Theme) || defaultTheme,
        setTheme: (theme: Theme) => {
          localStorage.setItem(storageKey, theme);
          document.documentElement.setAttribute("data-theme", theme);
        },
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
