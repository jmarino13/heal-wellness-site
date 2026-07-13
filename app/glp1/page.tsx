import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    number: "01",
    title: "Personalized Medical Guidance",
    text: "Your plan is based on your health history, goals, current medications and medical eligibility.",
  },
  {
    number: "02",
    title: "Ongoing Support",
    text: "We help you navigate treatment, progress, lifestyle changes and questions throughout your journey.",
  },
  {
    number: "03",
    title: "A Long-Term Approach",
    text: "The goal is not simply short-term weight loss, but sustainable improvements in health and confidence.",
  },
];

export default function GLP1Page() {
  return (
    <main className="treatment-page">
      <header className="nav-shell treatment-nav">
        <Link href="/" className="brand" aria-label="HEAL Wellness home">
          <span className="brand-word">heal</span>
          <span className="brand-sub">WELLNESS</span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          <Link href="/#treatments">Treatments</Link>
          <Link href="/#team">Our Team</Link>
          <Link href="/#experience">Experience</Link>
        </nav>

        <Link className="nav-cta" href="/#contact">
          Book a Consultation
        </Link>
      </header>

      <section className="treatment-hero">
        <div className="treatment-hero-copy">
          <p className="eyebrow">MEDICALLY GUIDED WEIGHT MANAGEMENT</p>

          <h1>
            A more personal path
            <span>to lasting change.</span>
          </h1>

          <p>
            HEAL Wellness offers physician-directed GLP-1 therapy designed
            around your health, goals and long-term success.
          </p>

          <div className="hero-actions">
            <Link className="primary-button" href="/#contact">
              Schedule a Consultation
            </Link>

            <Link className="text-link" href="/#treatments">
              Explore Other Treatments <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="treatment-hero-visual">
          <div className="treatment-photo">
            <Image
              src="/images/heal-office.jpeg"
              alt="HEAL Wellness medical office"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>

          <div className="floating-treatment-card">
            <span>PERSONALIZED CARE</span>
            <strong>Medical oversight with a boutique wellness experience.</strong>
          </div>
        </div>
      </section>

      <section className="treatment-intro">
        <div>
          <p className="section-kicker">MORE THAN A PRESCRIPTION</p>
          <h2>Designed around the whole person.</h2>
        </div>

        <div className="treatment-intro-copy">
          <p>
            GLP-1 medications may support weight management by helping reduce
            appetite, improve fullness and encourage healthier eating patterns
            for medically appropriate patients.
          </p>

          <p>
            At HEAL Wellness, treatment begins with a medical evaluation and a
            thoughtful conversation about your goals. Your care plan may
            include medication, nutrition guidance, progress monitoring and
            ongoing adjustments when appropriate.
          </p>
        </div>
      </section>

      <section className="benefit-section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">THE HEAL APPROACH</p>
            <h2>Support at every step.</h2>
          </div>

          <p>
            Your experience is designed to feel clear, comfortable and
            individualized from your first consultation forward.
          </p>
        </div>

        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.number}>
              <span>{benefit.number}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="membership-banner treatment-membership">
        <div className="membership-inner">
          <p className="section-kicker">OPEN TO THE COMMUNITY</p>
          <h2>You do not need to be a concierge patient.</h2>

          <p>
            You may schedule directly with HEAL Wellness even if Dr. Raina is
            not your primary care physician and you are not enrolled in her
            concierge medical practice.
          </p>

          <Link className="light-button" href="/#contact">
            Begin With HEAL Wellness
          </Link>
        </div>
      </section>

      <section className="treatment-journey">
        <div className="journey-copy">
          <p className="section-kicker">WHAT TO EXPECT</p>
          <h2>Your GLP-1 journey.</h2>
        </div>

        <div className="treatment-steps">
          <article>
            <span>01</span>
            <h3>Consultation</h3>
            <p>
              We discuss your goals, health history, prior treatments and
              current concerns.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Medical Review</h3>
            <p>
              Your medical professional determines whether treatment is
              appropriate for you.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Your Plan</h3>
            <p>
              When eligible, you receive a personalized plan with clear
              instructions and support.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Ongoing Progress</h3>
            <p>
              Follow-up care helps monitor progress, address concerns and
              refine treatment.
            </p>
          </article>
        </div>
      </section>

      <section className="final-cta treatment-cta">
        <div className="logo-tile" aria-hidden="true">
          <Image
            src="/images/heal-logo.png"
            alt=""
            fill
            sizes="240px"
          />
        </div>

        <p className="section-kicker">BEGIN YOUR JOURNEY</p>
        <h2>Ready for a more personalized approach?</h2>

        <p>
          Schedule a private consultation with the HEAL Wellness team to learn
          whether GLP-1 therapy may be right for you.
        </p>

        <Link className="primary-button" href="/#contact">
          Schedule a Consultation
        </Link>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-word">heal</span>
          <span className="brand-sub">WELLNESS</span>
        </div>

        <p>GLP-1 Therapy • Peptides • Menopause • TRT • Longevity</p>

        <p>
          © {new Date().getFullYear()} HEAL Wellness. All rights reserved.
        </p>
      </footer>
    </main>
  );
}