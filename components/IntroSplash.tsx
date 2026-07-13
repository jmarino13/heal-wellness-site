"use client";

import { useEffect, useState } from "react";

export default function IntroSplash() {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIntroComplete(true);
    }, 3700);

    return () => window.clearTimeout(timer);
  }, []);

  if (introComplete) {
    return null;
  }

  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-wordmark">
        <h1>heal</h1>
        <p>WELLNESS</p>
      </div>
    </div>
  );
}