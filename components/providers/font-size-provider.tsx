"use client";

import { createContext, useEffect, useState, useCallback } from "react";

export type FontSize =
  | "small"
  | "normal"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "xxxlarge";

export const FONT_SIZES = {
  small: { value: 87.5, label: "Mały", scale: 0.875 },
  normal: { value: 100, label: "Normalny", scale: 1 },
  large: { value: 112.5, label: "Duży", scale: 1.125 },
  xlarge: { value: 125, label: "Większy", scale: 1.25 },
  xxlarge: { value: 150, label: "Bardzo duży", scale: 1.5 },
  xxxlarge: { value: 200, label: "Maksymalny", scale: 2 },
} as const;

type FontSizeContextType = {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  scale: number;
  percentage: number;
  // Breakpoint utilities for font-scale aware responsiveness
  getResponsiveClasses: (baseClasses: string) => string;
  shouldReduceColumns: () => boolean;
};

export const FontSizeContext = createContext<FontSizeContextType | undefined>(
  undefined,
);

const STORAGE_KEY = "font-size-preference";
const DEFAULT_SIZE: FontSize = "normal";

function isValidFontSize(value: string): value is FontSize {
  return value in FONT_SIZES;
}

export function FontSizeProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSizeState] = useState<FontSize>(DEFAULT_SIZE);
  const [mounted, setMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && isValidFontSize(saved)) {
      setFontSizeState(saved);
    }
  }, []);

  // Apply CSS class to html element and save to localStorage
  useEffect(() => {
    if (!mounted) return;

    const html = document.documentElement;

    // Remove all font-size classes
    Object.keys(FONT_SIZES).forEach((size) => {
      html.classList.remove(`font-size-${size}`);
    });

    // Add current font-size class
    html.classList.add(`font-size-${fontSize}`);

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, fontSize);
  }, [fontSize, mounted]);

  const setFontSize = useCallback((size: FontSize) => {
    setFontSizeState(size);
  }, []);

  // Font-scale aware responsive utilities
  const getResponsiveClasses = useCallback(
    (baseClasses: string) => {
      const scale = FONT_SIZES[fontSize].scale;

      // For font scales 1.25 and above, we need to adjust breakpoints
      // This function modifies Tailwind classes to be more conservative
      if (scale >= 1.25) {
        return (
          baseClasses
            // Convert lg:grid-cols-3 to md:grid-cols-2 for larger fonts
            .replace(/lg:grid-cols-3/g, "md:grid-cols-2")
            // Convert md:grid-cols-3 to sm:grid-cols-2 for very large fonts
            .replace(
              /md:grid-cols-3/g,
              scale >= 1.5 ? "sm:grid-cols-2" : "sm:grid-cols-3",
            )
            // Adjust other responsive classes to be more conservative
            .replace(/xl:/g, "lg:")
            .replace(/lg:(?!grid-cols-3)/g, "md:")
            .replace(/md:(?!grid-cols-3)/g, "sm:")
        );
      }

      return baseClasses;
    },
    [fontSize],
  );

  const shouldReduceColumns = useCallback(() => {
    return FONT_SIZES[fontSize].scale >= 1.25;
  }, [fontSize]);

  const value = {
    fontSize,
    setFontSize,
    scale: FONT_SIZES[fontSize].scale,
    percentage: FONT_SIZES[fontSize].value,
    getResponsiveClasses,
    shouldReduceColumns,
  };

  return (
    <FontSizeContext.Provider value={value}>
      {children}
    </FontSizeContext.Provider>
  );
}
