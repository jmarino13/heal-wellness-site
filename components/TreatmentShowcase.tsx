import Image from "next/image";
import Link from "next/link";

export default function TreatmentShowcase() {
  return (
    <section className="treatment-showcase" aria-label="Featured treatments">
      <article className="immersive-treatment glp1-experience">
        <div className="treatment-ambient treatment-ambient-one" />
        <div className="treatment-ambient treatment-ambient-two" />

        <div className="immersive-treatment-copy">
          <p className="immersive-treatment-number">01 / GLP-1 THERAPY</p>

          <p className="immersive-treatment-kicker">
            A HEALTHIER FUTURE BEGINS HERE
          </p>

          <h2>
            Sustainable
            <span>weight loss.</span>
          </h2>

          <h3>Designed around you.</h3>

          <p className="immersive-treatment-description">
            Physician-directed GLP-1 care focused on meaningful progress,
            improved metabolic health and long-term lifestyle change. Every
            plan begins with your health history, goals and medical
            eligibility.
          </p>

          <div className="immersive-treatment-actions">
            <Link className="immersive-treatment-button" href="/glp1">
              Explore GLP-1 Therapy
              <span>↗</span>
            </Link>

            <p>
              Individualized medical evaluation required before treatment.
            </p>
          </div>
        </div>

        <div className="immersive-treatment-visual">
          <div className="immersive-treatment-image">
            <Image
              src="/images/glp1-lifestyle.jpg"
              alt="An active woman embracing a healthy lifestyle"
              fill
              sizes="(max-width: 900px) 100vw, 54vw"
            />
          </div>

          <div className="immersive-treatment-badge">
            <span>PHYSICIAN</span>
            <strong>Guided</strong>
          </div>

          <div className="immersive-treatment-caption">
            <span>PERSONALIZED CARE</span>
            <p>Not a one-size-fits-all program.</p>
          </div>
        </div>
      </article>
    </section>
  );
}