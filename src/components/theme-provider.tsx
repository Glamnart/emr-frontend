// src/components/theme-provider.tsx
import { useEffect, useState } from "react"
import { ThemeContext, type Theme } from "./theme-context"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "light"
  )

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme: () => setTheme((t) => (t === "light" ? "dark" : "light")) }}
    >
      {children}
    </ThemeContext.Provider>
  )
}