"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Type, X } from "lucide-react";

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

export function FontSizeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { fontSize, setFontSize } = useFontSize();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("font-size-panel-open");
    if (saved) {
      setIsOpen(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Toggle panel: Ctrl+Shift+F
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "f") {
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
      localStorage.setItem("font-size-panel-open", JSON.stringify(isOpen));
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

  if (!mounted) return null;

  const panelContent = (
    <div className="fixed bottom-4 right-20 z-[10000] flex flex-col items-end gap-3 max-sm:bottom-2 max-sm:right-14">
      {isOpen && (
        <div
          className={cn(
            "w-80 max-w-[calc(100vw-2rem)] max-h-[calc(100vh-6rem)] rounded-xl border bg-popover/95 p-4 shadow-2xl backdrop-blur-md overflow-y-auto",
            "animate-in slide-in-from-bottom-2 fade-in-0 duration-200",
            "dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] dark:border-border/50",
            "high-contrast:border-2 high-contrast:border-foreground",
          )}
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Type className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Rozmiar czcionki</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={() => setIsOpen(false)}
              aria-label="Zamknij panel rozmiaru czcionki"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Zamknij</span>
            </Button>
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

            {/* Description */}
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
                  F
                </kbd>{" "}
                aby przełączyć panel
              </p>
            </div>
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
          "backdrop-blur-sm",
          "dark:shadow-[0_0_30px_rgba(0,0,0,0.3)]",
          "high-contrast:border-2 high-contrast:border-foreground",
          isOpen ? "bg-primary text-primary-foreground" : "bg-background/95",
        )}
        aria-label={
          isOpen
            ? "Zamknij panel rozmiaru czcionki"
            : "Otwórz panel rozmiaru czcionki"
        }
      >
        <Type className="h-5 w-5" />
        <span className="sr-only">
          {isOpen
            ? "Zamknij panel rozmiaru czcionki"
            : "Otwórz panel rozmiaru czcionki"}
        </span>
      </Button>
    </div>
  );

  return createPortal(panelContent, document.body);
}

// Utility function for announcements
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
