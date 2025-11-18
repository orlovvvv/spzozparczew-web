"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
import { Contrast, Monitor, Moon, Settings, Sun, Type, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useFontSize } from "@/hooks/use-font-size";
import {
  FONT_SIZES,
  type FontSize,
} from "@/components/providers/font-size-provider";

interface ThemeOption {
  value: string;
  label: string;
  icon: React.ElementType;
  description: string;
}

const themeOptions: ThemeOption[] = [
  {
    value: "light",
    label: "Jasny",
    icon: Sun,
    description: "Jasny motyw",
  },
  {
    value: "dark",
    label: "Ciemny",
    icon: Moon,
    description: "Ciemny motyw",
  },
  {
    value: "high-contrast",
    label: "Wysoki kontrast",
    icon: Contrast,
    description: "WCAG 2.1 AA",
  },
  {
    value: "system",
    label: "Systemowy",
    icon: Monitor,
    description: "Według systemu",
  },
];

const fontSizeOrder: FontSize[] = [
  "small",
  "normal",
  "large",
  "xlarge",
  "xxlarge",
  "xxxlarge",
];

export function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { fontSize, setFontSize } = useFontSize();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("accessibility-panel-open");
    if (saved) {
      setIsOpen(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Toggle panel: Ctrl+Shift+A
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "a") {
        event.preventDefault();
        setIsOpen((prev) => !prev);
      }

      // Font size shortcuts
      if ((event.ctrlKey || event.metaKey) && !event.shiftKey) {
        if (event.key === "=" || event.key === "+") {
          event.preventDefault();
          increaseFontSize();
        } else if (event.key === "-") {
          event.preventDefault();
          decreaseFontSize();
        } else if (event.key === "0") {
          event.preventDefault();
          setFontSize("normal");
          announceFontSizeChange("normal");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fontSize, setFontSize]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("accessibility-panel-open", JSON.stringify(isOpen));
    }
  }, [isOpen, mounted]);

  const increaseFontSize = useCallback(() => {
    const currentIndex = fontSizeOrder.indexOf(fontSize);
    if (currentIndex < fontSizeOrder.length - 1) {
      const newSize = fontSizeOrder[currentIndex + 1];
      setFontSize(newSize);
      announceFontSizeChange(newSize);
    }
  }, [fontSize, setFontSize]);

  const decreaseFontSize = useCallback(() => {
    const currentIndex = fontSizeOrder.indexOf(fontSize);
    if (currentIndex > 0) {
      const newSize = fontSizeOrder[currentIndex - 1];
      setFontSize(newSize);
      announceFontSizeChange(newSize);
    }
  }, [fontSize, setFontSize]);

  const handleFontSizeChange = useCallback(
    (newSize: FontSize) => {
      setFontSize(newSize);
      announceFontSizeChange(newSize);
    },
    [setFontSize],
  );

  const handleThemeChange = useCallback(
    async (newTheme: string) => {
      if (!buttonRef.current || !document.startViewTransition) {
        setTheme(newTheme);
        announceThemeChange(newTheme);
        return;
      }

      try {
        await document.startViewTransition(() => {
          flushSync(() => {
            setTheme(newTheme);
          });
        }).ready;

        const { top, left, width, height } =
          buttonRef.current.getBoundingClientRect();
        const x = left + width / 2;
        const y = top + height / 2;
        const maxRadius = Math.hypot(
          Math.max(left, window.innerWidth - left),
          Math.max(top, window.innerHeight - top),
        );

        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 400,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          },
        );

        announceThemeChange(newTheme);
      } catch {
        setTheme(newTheme);
        announceThemeChange(newTheme);
      }
    },
    [setTheme],
  );

  if (!mounted) return null;

  const panelContent = (
    <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end gap-3">
      {isOpen && (
        <div
          className={cn(
            "w-80 rounded-xl border bg-popover/95 p-4 shadow-2xl backdrop-blur-md",
            "animate-in slide-in-from-bottom-2 fade-in-0 duration-200",
            "dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] dark:border-border/50",
            "high-contrast:border-2 high-contrast:border-foreground",
          )}
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Dostępność</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={() => setIsOpen(false)}
              aria-label="Zamknij panel dostępności"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Zamknij</span>
            </Button>
          </div>

          {/* Font Size Section */}
          <div className="mb-6">
            <div className="mb-3 flex items-center gap-2">
              <Type className="h-4 w-4 text-muted-foreground" />
              <h4 className="text-sm font-medium">Rozmiar czcionki</h4>
            </div>

            <div className="space-y-3">
              {/* Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Mniejszy</span>
                  <span className="font-medium tabular-nums">
                    {FONT_SIZES[fontSize].value}%
                  </span>
                  <span>Większy</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={fontSizeOrder.length - 1}
                  step="1"
                  value={fontSizeOrder.indexOf(fontSize)}
                  onChange={(e) => {
                    const newSize =
                      fontSizeOrder[Number.parseInt(e.target.value)];
                    handleFontSizeChange(newSize);
                  }}
                  className="w-full accent-primary"
                  aria-label="Rozmiar czcionki"
                  aria-valuetext={`${FONT_SIZES[fontSize].label}: ${FONT_SIZES[fontSize].value} procent`}
                />
              </div>

              {/* Quick Preset Buttons */}
              <div
                className="grid grid-cols-3 gap-2"
                role="group"
                aria-label="Predefiniowane rozmiary czcionki"
              >
                {fontSizeOrder.slice(1, -1).map((size) => {
                  const { label, value } = FONT_SIZES[size];
                  const isActive = fontSize === size;
                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => handleFontSizeChange(size)}
                      aria-pressed={isActive}
                      aria-label={`${label}: ${value} procent`}
                      className={cn(
                        "rounded-lg px-3 py-2 text-xs font-medium transition-all",
                        "hover:scale-105 active:scale-95",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-muted/50 hover:bg-accent hover:text-accent-foreground",
                      )}
                    >
                      <span className="sr-only">{label}: </span>
                      {value}%
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Theme Section */}
          <div className="mb-4">
            <div className="mb-3 flex items-center gap-2">
              <Sun className="h-4 w-4 text-muted-foreground" />
              <h4 className="text-sm font-medium">Motyw</h4>
            </div>

            <div className="space-y-2">
              {themeOptions.map((option) => {
                const Icon = option.icon;
                const isActive = theme === option.value;
                const isResolved =
                  option.value === "system" && theme === "system"
                    ? resolvedTheme === option.value
                    : false;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleThemeChange(option.value)}
                    className={cn(
                      "group flex w-full items-center gap-3 rounded-lg p-3 text-left transition-all duration-200 min-h-[68px]",
                      "hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] active:scale-[0.98]",
                      isActive
                        ? "bg-primary/10 ring-2 ring-primary/50"
                        : "bg-muted/50",
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-lg transition-colors shrink-0",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-background group-hover:bg-accent-foreground group-hover:text-accent",
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-medium text-sm group-hover:text-current">
                          {option.label}
                        </span>
                        {isActive && (
                          <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-medium text-primary-foreground shrink-0">
                            Aktywny
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground group-hover:text-current mt-0.5">
                        {option.description}
                        {isResolved && ` (${resolvedTheme})`}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Keyboard Shortcuts Help */}
          <div className="rounded-lg bg-muted/50 p-3">
            <p className="text-xs text-muted-foreground">
              <strong>Skróty:</strong> Naciśnij{" "}
              <kbd className="rounded bg-background px-1.5 py-0.5 font-mono text-xs">
                Ctrl
              </kbd>{" "}
              +{" "}
              <kbd className="rounded bg-background px-1.5 py-0.5 font-mono text-xs">
                Shift
              </kbd>{" "}
              +{" "}
              <kbd className="rounded bg-background px-1.5 py-0.5 font-mono text-xs">
                A
              </kbd>{" "}
              aby przełączyć panel
            </p>
          </div>

          {/* Screen reader live region */}
          <div
            className="sr-only"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            Aktualny rozmiar czcionki: {FONT_SIZES[fontSize].label},{" "}
            {FONT_SIZES[fontSize].value} procent
          </div>
        </div>
      )}

      <Button
        ref={buttonRef}
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "h-12 w-12 rounded-full shadow-lg transition-all duration-300",
          "hover:shadow-xl hover:scale-110 active:scale-95",
          "bg-background/95 backdrop-blur-sm",
          "dark:shadow-[0_0_30px_rgba(0,0,0,0.3)]",
          "high-contrast:border-2 high-contrast:border-foreground",
          isOpen && "rotate-90",
        )}
        aria-label={
          isOpen ? "Zamknij panel dostępności" : "Otwórz panel dostępności"
        }
      >
        <Settings
          className={cn(
            "h-5 w-5 transition-transform duration-300",
            isOpen && "rotate-90",
          )}
        />
        <span className="sr-only">
          {isOpen ? "Zamknij panel dostępności" : "Otwórz panel dostępności"}
        </span>
      </Button>
    </div>
  );

  return createPortal(panelContent, document.body);
}

// Utility functions for announcements
function announceFontSizeChange(size: FontSize) {
  const { label, value } = FONT_SIZES[size];
  const announcement = document.createElement("div");
  announcement.setAttribute("role", "status");
  announcement.setAttribute("aria-live", "polite");
  announcement.className = "sr-only";
  announcement.textContent = `Rozmiar czcionki zmieniony na ${label}: ${value} procent`;
  document.body.appendChild(announcement);
  setTimeout(() => announcement.remove(), 1000);
}

function announceThemeChange(newTheme: string) {
  const themeLabel =
    themeOptions.find((opt) => opt.value === newTheme)?.label || newTheme;
  const announcement = document.createElement("div");
  announcement.setAttribute("role", "status");
  announcement.setAttribute("aria-live", "polite");
  announcement.className = "sr-only";
  announcement.textContent = `Motyw zmieniony na ${themeLabel}`;
  document.body.appendChild(announcement);
  setTimeout(() => announcement.remove(), 1000);
}
