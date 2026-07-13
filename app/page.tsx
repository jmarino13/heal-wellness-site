import Image from "next/image";

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


export default function Home() {
  return (
    <main>

      <IntroSplash />

      <SiteHeader />

      <Hero />


      <section className="statement-section">
        <p className="section-kicker">
          WELCOME TO HEAL
        </p>

        <h2>
          Modern medicine, made personal.
        </h2>

        <p>
          Inside a trusted concierge medical practice, HEAL Wellness offers
          a warm and elevated place to pursue weight loss, hormonal balance,
          recovery and longevity — without requiring concierge membership.
        </p>
      </section>


      <GoalFinder />


      {/* Treatment Experiences */}

      <EditorialGLP1 />

      <EditorialPeptides />

      <EditorialMenopause />

      <EditorialTRT />


      {/* The People Behind HEAL */}

      <DrRainaStory />

      <JudeStory />


      {/* Why HEAL */}

      <HealDifference />


      {/* The Experience */}

      <section className="journey" id="experience">

        <div className="journey-copy">

          <p className="section-kicker">
            YOUR HEAL EXPERIENCE
          </p>

          <h2>
            Simple, personal and intentionally different.
          </h2>

          <p>
            From your first conversation to long-term optimization,
            every step is designed to feel clear, comfortable and supported.
          </p>

        </div>


        <div className="steps">

          <div className="step">
            <span>01</span>
            <h3>Connect</h3>
            <p>
              Schedule a private consultation with the HEAL Wellness team.
            </p>
          </div>


          <div className="step">
            <span>02</span>
            <h3>Understand</h3>
            <p>
              We learn about your goals, health history and lifestyle.
            </p>
          </div>


          <div className="step">
            <span>03</span>
            <h3>Personalize</h3>
            <p>
              Your care plan is designed around your individual needs.
            </p>
          </div>


          <div className="step">
            <span>04</span>
            <h3>Optimize</h3>
            <p>
              Ongoing support helps refine your wellness journey.
            </p>
          </div>

        </div>

      </section>



      {/* The HEAL Location */}

      <section className="office-section">

        <div className="office-image">

          <Image
            src="/images/heal-office.jpeg"
            alt="HEAL Wellness office"
            fill
            sizes="100vw"
          />

        </div>


        <div className="office-copy">

          <p className="section-kicker">
            A BEAUTIFUL PLACE TO BEGIN
          </p>

          <h2>
            Warm, private and welcoming.
          </h2>

          <p>
            HEAL Wellness provides the comfort of a boutique wellness
            experience combined with the professionalism of physician-directed
            care.
          </p>

        </div>

      </section>



      {/* Final Conversion */}

      <BeginJourney />



      <footer>

        <div className="footer-brand">

          <span className="brand-word">
            heal
          </span>

          <span className="brand-sub">
            WELLNESS
          </span>

        </div>


        <p>
          GLP-1 Therapy • Peptides • Menopause • TRT • Longevity
        </p>


        <p>
          © {new Date().getFullYear()} HEAL Wellness. All rights reserved.
        </p>

      </footer>


    </main>
  );
}