import Image from "next/image";
import Link from "next/link";
import IntroSplash from "@/components/IntroSplash";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import GoalFinder from "@/components/GoalFinder";
import EditorialGLP1 from "@/components/EditorialGLP1";
import EditorialPeptides from "@/components/EditorialPeptides";
import EditorialMenopause from "@/components/EditorialMenopause";
import EditorialTRT from "@/components/EditorialTRT";
import DrRainaStory from "@/components/DrRainaStory";
import JudeStory from "@/components/JudeStory";
import HealDifference from "@/components/HealDifference";
import BeginJourney from "@/components/BeginJourney";


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
<EditorialMenopause />
<EditorialTRT />
<DrRainaStory />
<JudeStory />
<HealDifference />
<BeginJourney />
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
