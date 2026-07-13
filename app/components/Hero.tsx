import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero signature-hero" id="top">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-copy reveal">
        <p className="eyebrow">
          PHYSICIAN-DIRECTED WELLNESS • BATON ROUGE
        </p>

        <h1>
          Your health,
          <span>beautifully reimagined.</span>
        </h1>

        <p className="hero-text">
          Personalized GLP-1 therapy, peptide medicine, menopause support and
          hormone optimization—delivered with medical guidance and an
          elevated, deeply personal approach.
        </p>

        <div className="hero-actions">
          <Link className="primary-button" href="/#contact">
            Begin Your Journey
          </Link>

          <Link className="text-link" href="/#treatments">
            Explore Treatments <span>↗</span>
          </Link>
        </div>

        <div className="welcome-note">
          <span className="welcome-dot" />

          <span>
            HEAL Wellness is open to the community. You do not need to be a
            patient of Dr. Raina&apos;s concierge practice.
          </span>
        </div>
      </div>

      <div className="hero-portrait-wrap reveal-delay">
        <div className="hero-arch hero-arch-main">
          <Image
            src="/images/dr-gunjan-raina.jpeg"
            alt="Dr. Gunjan Raina"
            fill
            priority
            sizes="(max-width: 900px) 85vw, 32vw"
          />
        </div>

        <div className="hero-arch hero-arch-secondary">
          <Image
            src="/images/jude-marino.jpg"
            alt="Jude Marino"
            fill
            priority
            sizes="(max-width: 900px) 46vw, 19vw"
          />
        </div>

        <div className="hero-detail-card">
          <span>MEDICAL EXPERTISE</span>
          <strong>Personalized care, thoughtfully delivered.</strong>
        </div>

        <div className="hero-signature">
          <span>HEAL</span>
          <small>Wellness & Longevity</small>
        </div>
      </div>

      <div className="scroll-cue">
        SCROLL TO DISCOVER <span>↓</span>
      </div>
    </section>
  );
}