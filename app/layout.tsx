import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { AccessibilityWidget } from "@/components/accessibility/accessibility-widget";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { FontSizeProvider } from "@/components/providers/font-size-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SPZOZ Parczew – Szpital Powiatowy",
  description:
    "SPZOZ Parczew – informacje dla pacjentów, godziny otwarcia, poradnie, usługi, aktualności.",
  other: {
    "Content-Language": "pl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={["light", "dark", "high-contrast"]}
          disableTransitionOnChange
        >
          <FontSizeProvider>
            {children}
            <AccessibilityWidget />
          </FontSizeProvider>
        </ThemeProvider>

        {/* Portal containers for z-index hierarchy */}
        <div
          id="modal-portal"
          style={{ position: "fixed", zIndex: 1000, pointerEvents: "none" }}
        />
        <div
          id="accessibility-portal"
          style={{ position: "fixed", zIndex: 10000, pointerEvents: "none" }}
        />
      </body>
    </html>
  );
}
