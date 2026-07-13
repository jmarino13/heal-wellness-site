import Image from "next/image";

export default function DrRainaStory() {
  return (
   <section className="dr-raina-story" id="story">

      <div className="dr-raina-image">

        <Image
          src="/images/dr-raina-story.jpeg"
          alt="Dr. Gunjan Raina, founder of HEAL Wellness"
          fill
          sizes="(max-width:900px) 100vw, 50vw"
        />

      </div>


      <div className="dr-raina-copy">

        <p className="section-kicker">
          THE PHILOSOPHY BEHIND HEAL
        </p>


        <h2>
          Medicine is personal.
          <span>Care should be too.</span>
        </h2>


        <p>
          Dr. Gunjan Raina founded her concierge medical practice with a simple belief:
          every patient deserves time, attention and a healthcare experience built
          around understanding the whole person.
        </p>


        <p>
          Through HEAL Wellness, that philosophy extends beyond traditional care into
          metabolic health, hormone optimization, peptide therapy and longevity.
        </p>


        <blockquote>
          "The future of healthcare is not one-size-fits-all.
          It is personalized, thoughtful and proactive."
        </blockquote>


        <div className="doctor-signature">
          <strong>Dr. Gunjan Raina</strong>
          <span>Medical Director • HEAL Wellness</span>
        </div>

      </div>

    </section>
  );
}