import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HEAL Wellness | Longevity, Peptide & Hormone Optimization",
  description:
    "HEAL Wellness provides physician-directed GLP-1 therapy, peptide therapy, hormone optimization and longevity care designed around your personal health goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}