"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
import {
  Settings,
  Type,
  Palette,
  X,
  Sun,
  Moon,
  Contrast,
  Monitor,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useFontSize } from "@/hooks/use-font-size";
import {
  FONT_SIZES,
  type FontSize,
} from "@/components/providers/font-size-provider";

const fontSizeOrder: FontSize[] = [
  "small",
  "normal",
  "large",
  "xlarge",
  "xxlarge",
  "xxxlarge",
];

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

type ActiveTab = "font" | "theme";

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<ActiveTab>("font");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { fontSize, setFontSize } = useFontSize();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    const savedOpen = localStorage.getItem("accessibility-widget-open");
    const savedTab = localStorage.getItem("accessibility-widget-tab");
    if (savedOpen) {
      setIsOpen(JSON.parse(savedOpen));
    }
    if (savedTab && (savedTab === "font" || savedTab === "theme")) {
      setActiveTab(savedTab);
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
      localStorage.setItem("accessibility-widget-open", JSON.stringify(isOpen));
      localStorage.setItem("accessibility-widget-tab", activeTab);
    }
  }, [isOpen, activeTab, mounted]);

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

  const widgetContent = (
    <div className="fixed bottom-4 right-4 flex flex-col items-end gap-3 max-sm:bottom-2 max-sm:right-2 pointer-events-auto">
      {isOpen && (
        <div
          className={cn(
            "w-80 max-w-[calc(100vw-2rem)] max-h-[calc(100vh-6rem)] rounded-xl border bg-popover/95 p-4 shadow-2xl backdrop-blur-md overflow-y-auto",
            "animate-in slide-in-from-bottom-2 fade-in-0 duration-200",
            "dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] dark:border-border/50",
            "high-contrast:border-2 high-contrast:border-foreground",
          )}
          role="region"
          aria-label="Panel dostępności"
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

          {/* Tabs */}
          <div
            className="mb-4 flex gap-2"
            role="tablist"
            aria-label="Opcje dostępności"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "font"}
              aria-controls="font-panel"
              onClick={() => setActiveTab("font")}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all",
                activeTab === "font"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted/50 hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <Type className="h-4 w-4" />
              <span className="max-sm:sr-only">Czcionka</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "theme"}
              aria-controls="theme-panel"
              onClick={() => setActiveTab("theme")}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all",
                activeTab === "theme"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted/50 hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <Palette className="h-4 w-4" />
              <span className="max-sm:sr-only">Motyw</span>
            </button>
          </div>

          {/* Font Size Panel */}
          {activeTab === "font" && (
            <div
              id="font-panel"
              role="tabpanel"
              aria-labelledby="font-tab"
              className="space-y-3 animate-in fade-in-0 slide-in-from-right-2 duration-200 motion-reduce:animate-none motion-reduce:transition-none"
            >
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

              <div className="rounded-lg bg-muted/50 p-3">
                <p className="text-xs text-muted-foreground">
                  <strong>Skróty:</strong> Użyj{" "}
                  <kbd className="rounded bg-background px-1.5 py-0.5 font-mono text-xs">
                    Ctrl
                  </kbd>{" "}
                  +{" "}
                  <kbd className="rounded bg-background px-1.5 py-0.5 font-mono text-xs">
                    +/-
                  </kbd>{" "}
                  do zmiany rozmiaru
                </p>
              </div>
            </div>
          )}

          {/* Theme Panel */}
          {activeTab === "theme" && (
            <div
              id="theme-panel"
              role="tabpanel"
              aria-labelledby="theme-tab"
              className="space-y-2 animate-in fade-in-0 slide-in-from-left-2 duration-200 motion-reduce:animate-none motion-reduce:transition-none"
            >
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
                        <span className="font-medium text-sm">
                          {option.label}
                        </span>
                        {isActive && (
                          <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-medium text-primary-foreground shrink-0">
                            Aktywny
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground group-hover:text-accent-foreground mt-0.5">
                        {option.description}
                        {isResolved && ` (${resolvedTheme})`}
                      </p>
                    </div>
                  </button>
                );
              })}

              <div className="rounded-lg bg-muted/50 p-3">
                <p className="text-xs text-muted-foreground">
                  <strong>Motyw:</strong> Wybierz preferowany schemat kolorów
                  dla witryny
                </p>
              </div>
            </div>
          )}

          <div className="mt-4 rounded-lg bg-muted/50 p-3">
            <p className="text-xs text-muted-foreground">
              <strong>Skrót:</strong> Naciśnij{" "}
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
              aby otworzyć
            </p>
          </div>

          {/* Screen reader live region */}
          <div
            className="sr-only"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {activeTab === "font"
              ? `Rozmiar czcionki: ${FONT_SIZES[fontSize].label}, ${FONT_SIZES[fontSize].value} procent`
              : `Motyw: ${themeOptions.find((opt) => opt.value === theme)?.label || theme}`}
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
          "backdrop-blur-sm",
          "dark:shadow-[0_0_30px_rgba(0,0,0,0.3)]",
          "high-contrast:border-2 high-contrast:border-foreground",
          isOpen ? "bg-primary text-primary-foreground" : "bg-background/95",
        )}
        aria-label={
          isOpen ? "Zamknij panel dostępności" : "Otwórz panel dostępności"
        }
        aria-expanded={isOpen}
      >
        <Settings className="h-5 w-5" />
        <span className="sr-only">
          {isOpen ? "Zamknij panel dostępności" : "Otwórz panel dostępności"}
        </span>
      </Button>
    </div>
  );

  return createPortal(
    widgetContent,
    (typeof document !== "undefined" &&
      document.getElementById("accessibility-portal")) ||
      document.body,
  );
}

// Utility function for font size announcements
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

// Utility function for theme announcements
function announceThemeChange(theme: string) {
  const themeLabel =
    themeOptions.find((opt) => opt.value === theme)?.label || theme;
  const announcement = document.createElement("div");
  announcement.setAttribute("role", "status");
  announcement.setAttribute("aria-live", "polite");
  announcement.className = "sr-only";
  announcement.textContent = `Motyw zmieniony na ${themeLabel}`;
  document.body.appendChild(announcement);
  setTimeout(() => announcement.remove(), 1000);
}
