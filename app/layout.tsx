import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "HEAL Wellness | GLP-1, Peptides & Hormone Optimization",
  description:
    "Physician-directed GLP-1 therapy, peptide therapy, menopause support, TRT and longevity care at HEAL Wellness.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>

        {children}

        <Script
          src="https://static-widget-assets.boulevard.io/widget.js"
          strategy="afterInteractive"
        />

      </body>
    </html>
  );
}