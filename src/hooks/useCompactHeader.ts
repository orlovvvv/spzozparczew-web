import { useEffect, useState } from 'react'

const LG_BREAKPOINT = 1024
const FONT_SCALE_THRESHOLD = 1.5 // 150%
const BASE_FONT_SIZE = 16

/**
 * Returns `true` when the header should collapse into the mobile/sidebar layout.
 *
 * This triggers when **either** condition is met:
 * - The viewport is narrower than the `lg` breakpoint (1024 px), OR
 * - The user has scaled the root font-size beyond 150 % of the browser default (16 px).
 *
 * A MutationObserver on `<html>` catches font-size changes made by the
 * in-page A+/A− accessibility buttons (which set `style.fontSize`).
 */
export function useCompactHeader(): boolean {
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    function evaluate() {
      const isNarrow = window.innerWidth < LG_BREAKPOINT
      const currentFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize,
      )
      const isScaled = currentFontSize >= BASE_FONT_SIZE * FONT_SCALE_THRESHOLD

      setCompact(isNarrow || isScaled)
    }

    // Initial check
    evaluate()

    // Re-evaluate on resize
    window.addEventListener('resize', evaluate)

    // Watch for style mutations on <html> (A+/A− buttons modify style.fontSize)
    const observer = new MutationObserver(evaluate)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style'],
    })

    return () => {
      window.removeEventListener('resize', evaluate)
      observer.disconnect()
    }
  }, [])

  return compact
}
