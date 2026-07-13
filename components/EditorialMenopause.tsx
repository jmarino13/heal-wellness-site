import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    title: "Balance",
    text: "Support designed around hormones, energy, sleep and mood.",
  },
  {
    title: "Confidence",
    text: "Care that helps you feel more like yourself again.",
  },
  {
    title: "Wellness",
    text: "A personalized approach to your changing needs.",
  },
  {
    title: "Renewal",
    text: "Your next chapter deserves thoughtful support.",
  },
];

export default function EditorialMenopause() {
  return (
    <section className="editorial-menopause" id="menopause">

      <div className="menopause-glow menopause-glow-one" />
      <div className="menopause-glow menopause-glow-two" />

      <div className="editorial-menopause-main">

        <div className="editorial-menopause-copy">

          <p className="menopause-eyebrow">
            <span />
            HORMONE HEALTH • WOMEN'S WELLNESS
          </p>

          <p className="menopause-small-title">
            REDISCOVER
          </p>

          <h2>
            Balance.
            <span>Confidence.</span>
            <em>Yourself.</em>
          </h2>

          <p className="menopause-description">
            Personalized menopause support designed around your unique
            experience — helping address changes in hormones, sleep, energy,
            mood and overall wellness.
          </p>

          <blockquote>
            Every season of life deserves thoughtful support.
          </blockquote>

          <Link 
            className="menopause-button"
            href="/#contact"
          >
            Explore Menopause Support
            <span>→</span>
          </Link>

        </div>


        <div className="editorial-menopause-visual">

          <div className="menopause-photo-frame">
            <Image
              src="/images/menopause.jpeg"
              alt="Menopause wellness support"
              fill
              sizes="(max-width: 950px) 100vw, 50vw"
            />
          </div>


          <div className="menopause-glass-card">

            <p>NEW CHAPTER</p>

            <span />

            <h3>
              Your wellness journey does not end.
              <em>
                It evolves.
              </em>
            </h3>

          </div>

        </div>

      </div>


      <div className="menopause-benefits">

        {benefits.map((item,index)=>(
          <article key={item.title}>

            <span>
              {String(index + 1).padStart(2,"0")}
            </span>

            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>

          </article>
        ))}

      </div>

    </section>
  );
}