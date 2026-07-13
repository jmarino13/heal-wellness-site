import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    title: "Strength",
    text: "Support for maintaining vitality, energy and physical performance.",
  },
  {
    title: "Energy",
    text: "Addressing factors that may impact how you feel every day.",
  },
  {
    title: "Confidence",
    text: "Helping qualified patients pursue their wellness goals.",
  },
  {
    title: "Optimization",
    text: "A personalized approach guided by your health profile.",
  },
];

export default function EditorialTRT() {
  return (
    <section className="editorial-trt" id="trt">

      <div className="trt-glow trt-glow-one" />
      <div className="trt-glow trt-glow-two" />

      <div className="editorial-trt-main">

        <div className="editorial-trt-visual">

          <div className="trt-photo-frame">
            <Image
              src="/images/trt.jpeg"
              alt="Hormone optimization and wellness"
              fill
              sizes="(max-width:950px) 100vw, 50vw"
            />
          </div>

          <div className="trt-glass-card">

            <p>OPTIMIZATION</p>

            <span />

            <h3>
              Your best years are not behind you.
              <em>
                They are ahead.
              </em>
            </h3>

          </div>

        </div>


        <div className="editorial-trt-copy">

          <p className="trt-eyebrow">
            <span />
            HORMONE OPTIMIZATION • MEN'S WELLNESS
          </p>

          <p className="trt-small-title">
            REDEFINE
          </p>


          <h2>
            Strength.
            <span>Energy.</span>
            <em>Confidence.</em>
          </h2>


          <p className="trt-description">
            Physician-guided hormone optimization designed around your
            individual health goals, lifestyle and long-term wellness journey.
          </p>


          <blockquote>
            Aging is inevitable. Losing your vitality is not.
          </blockquote>


          <Link
            className="trt-button"
            href="/trt"
          >
            Explore TRT Optimization
            <span>→</span>
          </Link>

        </div>

      </div>


      <div className="trt-benefits">

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