"use client";

import { useTheme } from "next-themes";
import type React from "react";
import { memo } from "react";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  darkColors?: string[];
  speed?: number;
}

export const AuroraText = memo(
  ({
    children,
    className = "",
    colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
    darkColors = ["#0d4a47", "#0f766e", "#14b8a6", "#2dd4bf"],
    speed = 1,
  }: AuroraTextProps) => {
    const { resolvedTheme } = useTheme();

    // High contrast mode: return solid white text for accessibility
    if (resolvedTheme === "high-contrast") {
      return (
        <span className={`relative inline-block ${className}`}>
          <span className="text-foreground">{children}</span>
        </span>
      );
    }

    // Use darker colors for dark mode
    const activeColors = resolvedTheme === "dark" ? darkColors : colors;

    const gradientStyle = {
      backgroundImage: `linear-gradient(135deg, ${activeColors.join(", ")}, ${
        activeColors[0]
      })`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animationDuration: `${10 / speed}s`,
    };

    return (
      <span className={`relative inline-block ${className}`}>
        <span className="sr-only">{children}</span>
        <span
          className="animate-aurora relative bg-[length:200%_auto] bg-clip-text text-transparent"
          style={gradientStyle}
          aria-hidden="true"
        >
          {children}
        </span>
      </span>
    );
  },
);

AuroraText.displayName = "AuroraText";
