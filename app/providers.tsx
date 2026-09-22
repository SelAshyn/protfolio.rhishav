'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const defaultContextValue: ThemeContextType = {
  theme: 'light',
  toggleTheme: () => {}
}

const ThemeContext = createContext<ThemeContextType>(defaultContextValue)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get saved theme from localStorage or system preference
    const saved = localStorage.getItem('theme') as Theme | null
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const initialTheme = saved || system

    setTheme(initialTheme)
    setMounted(true)
    document.documentElement.setAttribute('data-theme', initialTheme)
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      document.documentElement.setAttribute('data-theme', newTheme)
      return newTheme
    })
  }

  // Avoid rendering children until theme is resolved on the client to prevent
  // SSR/CSR hydration mismatch and the white-flash on dark-mode first load.
  if (!mounted) {
    return (
      <ThemeContext.Provider value={defaultContextValue}>
        <div style={{ visibility: "hidden" }}>{children}</div>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  return context
}
