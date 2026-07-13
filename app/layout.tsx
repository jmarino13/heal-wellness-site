import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "HEAL Wellness | Longevity, Peptide & Hormone Optimization",
  description:
   description:
"HEAL Wellness provides physician-directed GLP-1 therapy, peptide therapy, hormone optimization and longevity care designed around your personal health goals.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}

        <Script id="boulevard-self-booking" strategy="afterInteractive">
          {`
            (function (a) {
              var b = {
                businessId: 'c78bc7ca-353e-41b1-8d4d-e517277e47b6'
              };

              var c = a.createElement('script');
              var d = a.querySelector('script');

              c.src = 'https://static.joinboulevard.com/injector.min.js';
              c.async = true;

              c.onload = function () {
                window.blvd.init(b);
              };

              d.parentNode.insertBefore(c, d);
            })(document);
          `}
        </Script>
      </body>
    </html>
  );
}