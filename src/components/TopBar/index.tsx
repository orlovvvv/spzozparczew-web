'use client'

import React from 'react'
import {
  Phone,
  Envelope,
  Sun,
  Moon,
  FacebookLogo,
  YoutubeLogo,
} from '@phosphor-icons/react'
import { cn } from '@/utilities/ui'
import { useTheme } from '@/providers/Theme'

interface TopBarProps {
  className?: string
}

export const TopBar: React.FC<TopBarProps> = ({ className }) => {
  const { theme, setTheme } = useTheme()

  const handleFontSizeIncrease = () => {
    const html = document.documentElement
    const currentSize = parseFloat(getComputedStyle(html).fontSize)
    html.style.fontSize = `${Math.min(currentSize + 1, 20)}px`
  }

  const handleFontSizeDecrease = () => {
    const html = document.documentElement
    const currentSize = parseFloat(getComputedStyle(html).fontSize)
    html.style.fontSize = `${Math.max(currentSize - 1, 12)}px`
  }

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div
      className={cn(
        'bg-slate-900 text-slate-400 text-[11px] font-medium border-b border-slate-800',
        className,
      )}
    >
      <div className="container h-9 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            href="tel:+48833552102"
            aria-label="Zadzwoń na centralę: 83 355 21 02"
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
          >
            <Phone size={12} weight="bold" aria-hidden="true" />
            <span>83&nbsp;355&nbsp;21&nbsp;02</span>
          </a>
          <a
            href="mailto:sekretariat@spzozparczew.pl"
            aria-label="Wyślij email na adres sekretariat@spzozparczew.pl"
            className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Envelope size={12} weight="bold" aria-hidden="true" />
            <span>sekretariat@spzozparczew.pl</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border-r border-slate-700 pr-4">
            <span className="uppercase tracking-wider opacity-60 hidden sm:inline">Dostępność:</span>
            <button
              type="button"
              onClick={handleFontSizeIncrease}
              className="hover:text-white transition-colors px-1"
              aria-label="Zwiększ rozmiar czcionki"
            >
              A+
            </button>
            <button
              type="button"
              onClick={handleFontSizeDecrease}
              className="hover:text-white transition-colors px-1"
              aria-label="Zmniejsz rozmiar czcionki"
            >
              A-
            </button>
            <button
              type="button"
              onClick={handleThemeToggle}
              className="hover:text-white transition-colors p-1 rounded"
              aria-label={theme === 'dark' ? 'Przełącz na jasny motyw' : 'Przełącz na ciemny motyw'}
              aria-pressed={theme === 'dark'}
            >
              {theme === 'dark' ? (
                <Sun size={12} weight="bold" aria-hidden="true" />
              ) : (
                <Moon size={12} weight="bold" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex gap-3" role="navigation" aria-label="Media społecznościowe">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Odwiedź nasz profil na Facebooku (otwiera się w nowej karcie)"
            >
              <FacebookLogo size={14} weight="fill" aria-hidden="true" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Odwiedź nasz kanał na YouTube (otwiera się w nowej karcie)"
            >
              <YoutubeLogo size={14} weight="fill" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
