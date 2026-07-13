import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    title: "Recovery",
    text: "Support for mobility, healing and an active lifestyle.",
  },
  {
    title: "Performance",
    text: "Personalized options focused on vitality and resilience.",
  },
  {
    title: "Longevity",
    text: "A thoughtful approach to healthy aging and optimization.",
  },
  {
    title: "Personalized",
    text: "Every plan begins with your health, goals and eligibility.",
  },
];

export default function EditorialPeptides() {
  return (
    <section className="editorial-peptides" id="peptide-experience">
      <div className="peptide-light peptide-light-one" />
      <div className="peptide-light peptide-light-two" />

      <div className="peptide-particles" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="editorial-peptides-main">
        <div className="editorial-peptides-visual">
          <div className="peptide-photo-frame">
            <Image
              src="/images/jude-marino.jpg"
              alt="Personalized peptide therapy at HEAL Wellness"
              fill
              sizes="(max-width: 950px) 100vw, 50vw"
            />
          </div>

          <div className="peptide-glass-card">
            <p>LONGEVITY</p>
            <span />

            <h3>
              Healing is not about slowing down.
              <em>It is about living fully.</em>
            </h3>
          </div>
        </div>

        <div className="editorial-peptides-copy">
          <p className="peptide-eyebrow">
            <span />
            PHYSICIAN-DIRECTED PEPTIDE THERAPY
          </p>

          <p className="peptide-small-title">REPAIR</p>

          <h2>
            Recover.
            <span>Restore.</span>
            <em>Optimize.</em>
          </h2>

          <p className="peptide-description">
            Personalized peptide therapy designed around recovery, vitality,
            performance and healthy aging—with medical oversight and clear
            guidance throughout your experience.
          </p>

          <blockquote>
            Small changes today can create extraordinary years tomorrow.
          </blockquote>

          <Link className="peptide-outline-button" href="/peptides">
            Explore Peptide Therapy
            <span>→</span>
          </Link>
        </div>
      </div>

      <div className="peptide-benefits">
        {benefits.map((benefit, index) => (
          <article key={benefit.title}>
            <span className="peptide-benefit-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}