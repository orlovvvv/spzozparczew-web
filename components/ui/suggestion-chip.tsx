"use client";

interface SuggestionChipProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function SuggestionChip({ children, onClick }: SuggestionChipProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label={`Zapytaj o: ${children}`}
      className="inline-flex items-center rounded-full border border-outline-variant bg-background px-4 py-2 text-sm font-light text-muted-foreground shadow-sm hover:bg-accent hover:border-primary hover:text-foreground hover:shadow-md hover:scale-105 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-medium-2 ease-standard motion-reduce:hover:scale-100 motion-reduce:transition-colors high-contrast:border-foreground high-contrast:bg-surface-container-low high-contrast:text-foreground high-contrast:hover:bg-primary high-contrast:hover:text-primary-foreground high-contrast:hover:border-primary"
    >
      {children}
    </button>
  );
}
