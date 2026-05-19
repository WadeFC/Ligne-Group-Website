'use client'

import { useEffect, useState } from 'react'
import {
  Sun,
  TreePine,
  Egg,
} from 'lucide-react'

const themes = [
  {
    name: 'light',
    icon: Sun,
  },
  {
    name: 'christmas',
    icon: TreePine,
  },
  {
    name: 'easter',
    icon: Egg,
  },
]

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme =
      localStorage.getItem('theme') || 'light'

    document.documentElement.classList.remove(
      'light',
      'christmas',
      'easter',
    )

    document.documentElement.classList.add(savedTheme)

    setTheme(savedTheme)
  }, [])

  const changeTheme = (newTheme: string) => {
    document.documentElement.classList.remove(
      'light',
      'christmas',
      'easter',
    )

    document.documentElement.classList.add(newTheme)

    localStorage.setItem('theme', newTheme)

    setTheme(newTheme)
  }

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-3 py-2 shadow-sm">
      <span className="text-sm font-medium text-muted-foreground">
        Website Theme
      </span>

      {themes.map((item) => {
        const Icon = item.icon

        return (
          <button
            key={item.name}
            onClick={() => changeTheme(item.name)}
            className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition-all duration-300 ${
              theme === item.name
                ? 'bg-gold text-navy border-gold shadow-md'
                : 'border-border hover:border-gold hover:bg-secondary'
            }`}
          >
            <Icon size={16} />

            <span className="capitalize">
              {item.name}
            </span>
          </button>
        )
      })}
    </div>
  )
}
