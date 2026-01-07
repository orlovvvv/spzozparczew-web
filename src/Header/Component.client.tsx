'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Heart, MagnifyingGlass, User, List, X } from '@phosphor-icons/react'

import type { Header } from '@/payload-types'

import { HeaderNav } from './Nav'
import { TopBar } from '@/components/TopBar'
import { cn } from '@/utilities/ui'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
  }, [headerTheme, theme])

  return (
    <>
      <TopBar />
      <header
        className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border"
        {...(theme ? { 'data-theme': theme } : {})}
      >
        <div className="container h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Heart
                size={32}
                weight="duotone"
                className="text-primary fill-primary/20 group-hover:scale-105 transition-transform"
              />
              <div className="absolute -right-1 -bottom-1 bg-background rounded-full p-0.5">
                <div className="w-3 h-3 bg-primary rounded-full border-2 border-background"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-foreground font-semibold tracking-tight text-sm leading-none">
                SPZOZ Parczew
              </span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-wide mt-0.5 hidden sm:block">
                Samodzielny Publiczny Zakład Opieki Zdrowotnej
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <HeaderNav data={data} />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/szukaj"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary px-3 py-2 rounded-md hover:bg-primary/5 transition-colors"
            >
              <MagnifyingGlass size={16} weight="bold" />
              <span>Szukaj</span>
            </Link>
            <Link
              href="/e-portal"
              className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors tracking-tight shadow-sm shadow-primary/20 ring-1 ring-primary/10 hidden sm:flex items-center gap-2"
            >
              <User size={16} weight="bold" />
              <span>e-Portal Pacjenta</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden border-t border-border bg-background overflow-hidden transition-all duration-300',
            mobileMenuOpen ? 'max-h-96' : 'max-h-0',
          )}
        >
          <div className="container py-4 flex flex-col gap-2">
            <HeaderNav data={data} mobile />
            <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
              <Link
                href="/szukaj"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary px-3 py-2 rounded-md hover:bg-primary/5 transition-colors"
              >
                <MagnifyingGlass size={16} weight="bold" />
                <span>Szukaj</span>
              </Link>
              <Link
                href="/e-portal"
                className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors tracking-tight shadow-sm flex items-center gap-2 justify-center"
              >
                <User size={16} weight="bold" />
                <span>e-Portal Pacjenta</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
