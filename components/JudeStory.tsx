import Image from "next/image";

export default function JudeStory() {
  return (
    <section className="jude-story">

      <div className="jude-copy">

        <p className="section-kicker">
          THE VISION BEHIND HEAL
        </p>

        <h2>
          Making modern wellness
          <span>understandable.</span>
        </h2>

        <p>
          After three decades of building relationships, leading teams and
          helping organizations grow, Jude Marino discovered a new way to
          serve people — helping them understand the rapidly evolving world
          of longevity medicine.
        </p>

        <p>
          As a Certified Peptide Integration Specialist, Jude believes the
          future of wellness is not one-size-fits-all. It is education,
          personalized guidance and helping people make informed decisions
          about their health journey.
        </p>

        <blockquote>
          The future of healthcare belongs to those who understand that
          wellness is personal.
        </blockquote>

        <div className="jude-title">
          <strong>Jude Marino</strong>
          <span>
            Certified Peptide Integration Specialist
          </span>
        </div>

      </div>


      <div className="jude-image">

        <Image
          src="/images/jude-story.jpeg"
          alt="Jude Marino, Certified Peptide Integration Specialist"
          fill
          sizes="(max-width:900px) 100vw, 50vw"
        />

      </div>

    </section>
  );
}