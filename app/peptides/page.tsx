import Image from "next/image";
import Link from "next/link";

const goals = [
  {
    number: "01",
    title: "Recovery",
    text: "Support for patients focused on healing, mobility, physical recovery and maintaining an active lifestyle.",
  },
  {
    number: "02",
    title: "Energy & Performance",
    text: "Personalized options may be considered for patients seeking improved vitality, endurance and daily performance.",
  },
  {
    number: "03",
    title: "Healthy Aging",
    text: "Programs designed around longevity, resilience, body composition and long-term wellness goals.",
  },
  {
    number: "04",
    title: "Skin & Wellness",
    text: "Certain therapies may support broader goals related to skin appearance, wellness and whole-body optimization.",
  },
];

export default function PeptidesPage() {
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
          Begin Your Journey
        </Link>
      </header>

      <section className="treatment-hero peptide-hero">
        <div className="treatment-hero-copy">
          <p className="eyebrow">PERSONALIZED PEPTIDE THERAPY</p>

          <h1>
            Precision support
            <span>for how you want to live.</span>
          </h1>

          <p>
            HEAL Wellness offers medically guided peptide therapy designed
            around your individual health goals, lifestyle and long-term
            wellness plan.
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
          <div className="treatment-photo peptide-photo">
            <Image
              src="/images/jude-marino.jpg"
              alt="Jude Marino, Certified Peptide Integration Specialist"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>

          <div className="floating-treatment-card">
            <span>GUIDED BY YOUR GOALS</span>
            <strong>
              Thoughtful education, medical review and individualized support.
            </strong>
          </div>
        </div>
      </section>

      <section className="treatment-intro">
        <div>
          <p className="section-kicker">A PERSONALIZED APPROACH</p>
          <h2>Peptide therapy begins with understanding you.</h2>
        </div>

        <div className="treatment-intro-copy">
          <p>
            Peptides are naturally occurring chains of amino acids that play
            important roles throughout the body. Certain peptide therapies may
            be considered by a licensed medical professional for appropriate
            patients based on their individual needs and goals.
          </p>

          <p>
            At HEAL Wellness, the experience begins with education, a medical
            evaluation and a clear conversation about what you hope to improve.
            Treatment is never one-size-fits-all.
          </p>
        </div>
      </section>

      <section className="peptide-goals">
        <div className="section-heading">
          <div>
            <p className="section-kicker">EXPLORE YOUR GOALS</p>
            <h2>What could your wellness plan support?</h2>
          </div>

          <p>
            Your medical professional will determine which therapies, if any,
            are appropriate after reviewing your health history and goals.
          </p>
        </div>

        <div className="peptide-goal-grid">
          {goals.map((goal) => (
            <article className="peptide-goal-card" key={goal.number}>
              <span>{goal.number}</span>
              <div>
                <h3>{goal.title}</h3>
                <p>{goal.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="specialist-feature">
        <div className="specialist-image">
          <Image
           src="/images/jude-marino.jpg"
            alt="Jude Marino"
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
          />
        </div>

        <div className="specialist-copy">
          <p className="section-kicker">YOUR PEPTIDE SPECIALIST</p>
          <h2>Education and support throughout your experience.</h2>

          <p>
            Jude Marino is a Certified Peptide Integration Specialist who
            helps patients understand their wellness options, treatment goals
            and the role peptide therapy may play within a broader,
            physician-directed plan.
          </p>

          <p>
            His approach focuses on clear education, thoughtful guidance and
            helping each patient feel confident about the next step in their
            wellness journey.
          </p>

          <Link className="text-link" href="/#team">
            Meet the HEAL Wellness Team <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="membership-banner treatment-membership">
        <div className="membership-inner">
          <p className="section-kicker">OPEN TO THE COMMUNITY</p>
          <h2>You do not need to be a concierge patient.</h2>

          <p>
            HEAL Wellness welcomes patients from throughout the community. You
            may schedule a peptide consultation even if Dr. Raina is not your
            primary care physician and you are not enrolled in her concierge
            medical practice.
          </p>

          <Link className="light-button" href="/#contact">
            Schedule With HEAL Wellness
          </Link>
        </div>
      </section>

      <section className="treatment-journey">
        <div className="journey-copy">
          <p className="section-kicker">WHAT TO EXPECT</p>
          <h2>Your peptide therapy experience.</h2>
        </div>

        <div className="treatment-steps">
          <article>
            <span>01</span>
            <h3>Discover</h3>
            <p>
              Share your goals, current concerns, health history and what you
              hope to improve.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Evaluate</h3>
            <p>
              A licensed medical professional reviews your information and
              determines medical appropriateness.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Personalize</h3>
            <p>
              When appropriate, your treatment plan is tailored to your
              specific needs and wellness priorities.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Optimize</h3>
            <p>
              Ongoing communication and follow-up help support your progress
              and long-term experience.
            </p>
          </article>
        </div>
      </section>

      <section className="final-cta treatment-cta">
        <div className="logo-tile" aria-hidden="true">
          <Image src="/images/heal-logo.png" alt="" fill sizes="240px" />
        </div>

        <p className="section-kicker">BEGIN YOUR JOURNEY</p>
        <h2>Explore what personalized peptide therapy could mean for you.</h2>

        <p>
          Schedule a private consultation with the HEAL Wellness team to
          discuss your goals and learn about available treatment options.
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