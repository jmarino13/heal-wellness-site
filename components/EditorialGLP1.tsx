import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    title: "Personalized Care",
    text: "Tailored to your health, goals and lifestyle.",
  },
  {
    title: "Medically Guided",
    text: "Treatment under licensed medical supervision.",
  },
  {
    title: "Sustainable Progress",
    text: "Focused on meaningful, long-term change.",
  },
  {
    title: "Whole-Person Health",
    text: "Supporting confidence, wellness and quality of life.",
  },
];

export default function EditorialGLP1() {
  return (
  <section className="editorial-glp1" id="treatments">
      <div className="editorial-light editorial-light-left" />
      <div className="editorial-light editorial-light-right" />

      <div className="editorial-glp1-main">
        <div className="editorial-glp1-copy">
          <p className="editorial-eyebrow">
            <span />
            YOUR NEXT CHAPTER BEGINS HERE
          </p>

          <h2>
            Sustainable
            <span>Weight Loss</span>
          </h2>

          <p className="editorial-subtitle">Designed Around You.</p>

          <blockquote>
            <span className="editorial-quote-mark">“</span>

            <div>
              <p>The goal isn&apos;t simply to lose weight.</p>
              <p>
                It&apos;s to regain the life you want to <em>live.</em>
              </p>
            </div>
          </blockquote>

          <Link className="editorial-outline-button" href="/glp1">
            Discover Your Possibilities
            <span>→</span>
          </Link>
        </div>

        <div className="editorial-glp1-visual">
          <div className="editorial-photo-frame">
            <Image
              src="/images/glp1-lifestyle.jpg"
              alt="An active woman embracing strength, wellness and healthy aging"
              fill
              sizes="(max-width: 950px) 100vw, 52vw"
            />
          </div>

          <div className="editorial-glass-card">
            <div className="glass-icon" aria-hidden="true">
              <span>✦</span>
            </div>

            <p>PHYSICIAN DIRECTED</p>
            <span className="glass-divider" />

            <h3>
              Every journey begins
              <span>with understanding you.</span>
            </h3>
          </div>
        </div>
      </div>

      <div className="editorial-benefits">
        {benefits.map((benefit, index) => (
          <article key={benefit.title}>
            <div className="benefit-symbol" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </div>

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