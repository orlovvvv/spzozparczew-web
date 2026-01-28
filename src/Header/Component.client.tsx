'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Heart, MagnifyingGlass, List, X } from '@phosphor-icons/react'

import type { Header } from '@/payload-types'

import { HeaderNav, MobileNav } from './Nav'
import { TopBar } from '@/components/TopBar'
import { useCompactHeader } from '@/hooks/useCompactHeader'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const compact = useCompactHeader()

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
        <div className="container min-h-16 py-2 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
              <Heart
                size={32}
                weight="duotone"
                className="text-primary fill-primary/20 group-hover:scale-105 transition-transform"
              />
              <div className="absolute -right-1 -bottom-1 bg-background rounded-full p-0.5">
                <div className="w-3 h-3 bg-primary rounded-full border-2 border-background"></div>
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-foreground font-semibold tracking-tight text-sm leading-none whitespace-nowrap">
                SPZOZ Parczew
              </span>
              {!compact && (
                <span className="text-[0.65rem] text-muted-foreground font-medium tracking-wide mt-0.5 whitespace-nowrap leading-none">
                  Samodzielny Publiczny Zakład Opieki Zdrowotnej
                </span>
              )}
            </div>
          </Link>

          {/* Desktop Navigation */}
          {!compact && (
            <div className="flex items-center min-w-0">
              <HeaderNav data={data} />
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {!compact && (
              <Link
                href="/szukaj"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary px-2.5 py-2 rounded-md hover:bg-primary/5 transition-colors"
              >
                <MagnifyingGlass size={16} weight="bold" />
                <span className="hidden xl:inline">Szukaj</span>
              </Link>
            )}

            {/* Sidebar toggle – visible in compact mode */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              {compact && (
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Otwórz menu"
                >
                  <List size={24} />
                </button>
              )}

              <SheetContent side="right" showCloseButton={false}>
                <SheetHeader className="border-b border-border">
                  <div className="flex items-center justify-between">
                    <SheetTitle>
                      <Link
                        href="/"
                        className="flex items-center gap-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Heart size={20} weight="duotone" className="text-primary" />
                        <span className="text-sm font-semibold text-foreground">SPZOZ Parczew</span>
                      </Link>
                    </SheetTitle>
                    <SheetClose
                      className="p-2 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
                      aria-label="Zamknij menu"
                    >
                      <X size={20} />
                    </SheetClose>
                  </div>
                  <SheetDescription className="sr-only">
                    Menu nawigacyjne strony internetowej szpitala
                  </SheetDescription>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto py-4 px-4">
                  <MobileNav data={data} onNavigate={() => setMobileMenuOpen(false)} />

                  <div className="flex flex-col gap-2 pt-4 border-t border-border mt-4">
                    <Link
                      href="/szukaj"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary px-3 py-2.5 rounded-md hover:bg-primary/5 transition-colors"
                    >
                      <MagnifyingGlass size={16} weight="bold" />
                      <span>Szukaj</span>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
