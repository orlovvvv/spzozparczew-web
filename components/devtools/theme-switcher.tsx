"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
import {
  Contrast,
  Monitor,
  Moon,
  Palette,
  Settings,
  Sun,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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

export function DevToolsThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("devtools-panel-open");
    if (saved) {
      setIsOpen(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "t") {
        event.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setIsOpen]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("devtools-panel-open", JSON.stringify(isOpen));
    }
  }, [isOpen, mounted]);

  const handleThemeChange = useCallback(
    async (newTheme: string) => {
      if (!buttonRef.current || !document.startViewTransition) {
        setTheme(newTheme);
        // Announce theme change to screen readers
        const themeLabel =
          themeOptions.find((opt) => opt.value === newTheme)?.label || newTheme;
        const announcement = document.createElement("div");
        announcement.setAttribute("role", "status");
        announcement.setAttribute("aria-live", "polite");
        announcement.className = "sr-only";
        announcement.textContent = `Motyw zmieniony na ${themeLabel}`;
        document.body.appendChild(announcement);
        setTimeout(() => announcement.remove(), 1000);
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

        // Announce theme change to screen readers
        const themeLabel =
          themeOptions.find((opt) => opt.value === newTheme)?.label || newTheme;
        const announcement = document.createElement("div");
        announcement.setAttribute("role", "status");
        announcement.setAttribute("aria-live", "polite");
        announcement.className = "sr-only";
        announcement.textContent = `Motyw zmieniony na ${themeLabel}`;
        document.body.appendChild(announcement);
        setTimeout(() => announcement.remove(), 1000);
      } catch {
        setTheme(newTheme);
        // Announce theme change to screen readers
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
    },
    [setTheme],
  );

  if (!mounted) return null;

  const panelContent = (
    <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end gap-3">
      {isOpen && (
        <div
          className={cn(
            "w-72 rounded-xl border bg-popover/95 p-4 shadow-2xl backdrop-blur-md",
            "animate-in slide-in-from-bottom-2 fade-in-0 duration-200",
            "dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] dark:border-border/50",
            "high-contrast:border-2 high-contrast:border-foreground",
          )}
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Motyw</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Zamknij</span>
            </Button>
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
                    "flex w-full items-center gap-3 rounded-lg p-3 text-left transition-all duration-200",
                    "hover:bg-accent hover:scale-[1.02] active:scale-[0.98]",
                    isActive
                      ? "bg-primary/10 ring-2 ring-primary/50"
                      : "bg-muted/50",
                  )}
                >
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-background",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{option.label}</span>
                      {isActive && (
                        <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                          Aktywny
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {option.description}
                      {isResolved && ` (${resolvedTheme})`}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

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
                T
              </kbd>{" "}
              aby przełączyć motyw
            </p>
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
      >
        <Settings
          className={cn(
            "h-5 w-5 transition-transform duration-300",
            isOpen && "rotate-90",
          )}
        />
        <span className="sr-only">
          {isOpen ? "Zamknij panel motywów" : "Otwórz panel motywów"}
        </span>
      </Button>
    </div>
  );

  return createPortal(panelContent, document.body);
}
