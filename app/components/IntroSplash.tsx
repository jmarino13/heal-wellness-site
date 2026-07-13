"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function IntroSplash() {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIntroComplete(true);
    }, 4300);

    return () => window.clearTimeout(timer);
  }, []);

  if (introComplete) {
    return null;
  }

  return (
    <div className="cinematic-intro" aria-hidden="true">
      <div className="intro-light intro-light-left" />
      <div className="intro-light intro-light-right" />
      <div className="intro-grain" />

      <div className="intro-curtain intro-curtain-top" />
      <div className="intro-curtain intro-curtain-bottom" />

      <div className="cinematic-intro-content">
        <p className="intro-pretitle">WELCOME TO</p>

        <div className="cinematic-logo-wrap">
          <Image
            src="/images/heal-logo.png"
            alt=""
            fill
            priority
            sizes="360px"
          />
        </div>

        <div className="intro-line" />

        <p className="cinematic-tagline">
          Personalized wellness.
          <span>Thoughtfully delivered.</span>
        </p>

        <p className="intro-location">
          PHYSICIAN-DIRECTED WELLNESS • BATON ROUGE
        </p>
      </div>
    </div>
  );
}