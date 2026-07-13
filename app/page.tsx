import Image from "next/image";
import Link from "next/link";
import IntroSplash from "@/components/IntroSplash";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import GoalFinder from "@/components/GoalFinder";
import EditorialGLP1 from "@/components/EditorialGLP1";
import EditorialPeptides from "@/components/EditorialPeptides";
const services = [
  {
    number: "01",
    title: "GLP-1 Weight Management",
    text: "A medically guided program designed around your goals, health history and long-term success.",
  },
  {
    number: "02",
    title: "Peptide Therapy",
    text: "Personalized peptide strategies focused on recovery, performance, body composition and healthy aging.",
  },
  {
    number: "03",
    title: "Menopause Support",
    text: "Thoughtful, individualized care for symptoms that can affect sleep, mood, energy and quality of life.",
  },
  {
    number: "04",
    title: "TRT & Hormone Optimization",
    text: "Clinically supervised hormone care created to help qualified patients feel stronger, clearer and more like themselves.",
  },
];

const steps = [
  ["01", "Connect", "Schedule a private consultation with the HEAL Wellness team."],
  ["02", "Understand", "We learn about your health, goals, symptoms and lifestyle."],
  ["03", "Personalize", "Your medical professional creates a treatment plan tailored to you."],
  ["04", "Optimize", "Ongoing support helps refine your plan as your needs evolve."],
];

export default function Home() {
  return (
    <main>
<IntroSplash />
<SiteHeader />
<Hero />

      <section className="statement-section">
        <p className="section-kicker">WELCOME TO HEAL</p>
        <h2>Modern medicine, made personal.</h2>
        <p>
          Inside a trusted concierge medical practice, HEAL Wellness offers a warm and elevated place to pursue weight loss, hormonal balance, recovery and longevity—without requiring concierge membership.
        </p>
      </section>
 <GoalFinder />
<EditorialGLP1 />
<EditorialPeptides />
      <section className="services" id="treatments">
        <div className="section-heading">
          <div>
            <p className="section-kicker">YOUR TREATMENT, YOUR GOALS</p>
            <h2>Care that evolves with you.</h2>
          </div>
          <p>Every plan begins with a conversation and is shaped around your health history, priorities and medical eligibility.</p>
        </div>

        <div className="service-grid">
         {services.map((service) => {
        
 const link =
  service.number === "01"
    ? "/glp1"
    : service.number === "02"
      ? "/peptides"
      : "#contact";
  return (
    <Link className="service-card" href={link} key={service.number}>
      <span className="service-number">{service.number}</span>

      <div>
        <h3>{service.title}</h3>
        <p>{service.text}</p>
      </div>

      <span className="service-arrow">↗</span>
    </Link>
  );
})}
        </div>
      </section>

      <section className="membership-banner">
        <div className="membership-inner">
          <p className="section-kicker">OPEN TO THE COMMUNITY</p>
          <h2>No concierge membership required.</h2>
          <p>
            HEAL Wellness welcomes new patients directly. You may schedule for GLP-1 therapy, peptide therapy, menopause care, TRT or wellness optimization even if Dr. Raina is not your primary or concierge physician.
          </p>
          <a className="light-button" href="#contact">Schedule Directly With HEAL</a>
        </div>
      </section>

      <section className="team" id="team">
        <div className="section-heading team-heading">
          <div>
            <p className="section-kicker">THE PEOPLE BEHIND YOUR CARE</p>
            <h2>Expertise with a human touch.</h2>
          </div>
        </div>

        <div className="team-grid">
          <article className="team-card">
            <div className="team-image">
              <Image src="/images/dr-gunjan-raina.jpeg" alt="Dr. Gunjan Raina, Medical Director" fill sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
            <div className="team-copy">
              <p className="team-role">MEDICAL DIRECTOR</p>
              <h3>Dr. Gunjan Raina</h3>
              <p>
                Dr. Raina provides the medical leadership behind HEAL Wellness, helping ensure that each eligible patient receives thoughtful, evidence-informed and individualized care.
              </p>
            </div>
          </article>

          <article className="team-card reverse">
            <div className="team-image jude-image">
              <Image src="/images/jude-marino.jpg" alt="Jude Marino, Certified Peptide Integration Specialist" fill sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
            <div className="team-copy">
              <p className="team-role">CERTIFIED PEPTIDE INTEGRATION SPECIALIST</p>
              <h3>Jude Marino</h3>
              <p>
                Jude guides patients through the wellness experience with education, program support and a deep commitment to helping each person understand the path ahead.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="journey" id="experience">
        <div className="journey-copy">
          <p className="section-kicker">THE HEAL EXPERIENCE</p>
          <h2>Simple, personal and intentionally different.</h2>
          <p>From your first conversation to long-term optimization, every step is designed to feel clear, comfortable and supported.</p>
        </div>
        <div className="steps">
          {steps.map(([num, title, text]) => (
            <div className="step" key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="office-section">
        <div className="office-image">
          <Image src="/images/heal-office.jpeg" alt="The welcoming HEAL Wellness office" fill sizes="100vw" />
        </div>
        <div className="office-copy">
          <p className="section-kicker">A BEAUTIFUL PLACE TO BEGIN</p>
          <h2>Warm, private and welcoming.</h2>
          <p>
            HEAL Wellness is located inside Dr. Raina&apos;s concierge medical practice, offering the comfort and professionalism of a medical setting with the charm of a boutique wellness experience.
          </p>
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="logo-tile" aria-hidden="true">
          <Image src="/images/heal-logo.png" alt="" fill sizes="240px" />
        </div>
        <p className="section-kicker">YOUR NEXT CHAPTER STARTS HERE</p>
        <h2>Your healthiest years may still be ahead.</h2>
        <p>Call HEAL Wellness at <strong>(504) 732-HEAL</strong> to schedule your consultation.</p>
        <a className="primary-button" href="tel:+15047324325">Call (504) 732-HEAL</a>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-word">heal</span>
          <span className="brand-sub">WELLNESS</span>
        </div>
        <p>GLP-1 Therapy • Peptides • Menopause • TRT • Longevity</p>
        <p>© {new Date().getFullYear()} HEAL Wellness. All rights reserved.</p>
      </footer>
    </main>
  );
}
