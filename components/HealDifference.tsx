const differences = [
  {
    number: "01",
    title: "Physician Directed",
    text: "Every wellness journey is built with medical oversight and a commitment to thoughtful, personalized care.",
  },
  {
    number: "02",
    title: "Personalized Protocols",
    text: "Your goals, health history and lifestyle guide the approach — not a one-size-fits-all formula.",
  },
  {
    number: "03",
    title: "Education & Support",
    text: "We believe understanding your wellness journey is just as important as the treatment itself.",
  },
  {
    number: "04",
    title: "Longevity Focused",
    text: "HEAL is designed around helping you optimize today while investing in your future health.",
  },
];

export default function HealDifference() {
  return (
    <section className="heal-difference">

      <div className="heal-difference-header">

        <p className="section-kicker">
          THE HEAL DIFFERENCE
        </p>

        <h2>
          More than treatment.
          <span>A personalized wellness experience.</span>
        </h2>

        <p>
          HEAL Wellness combines physician-directed care, advanced wellness
          strategies and personal guidance to create a healthcare experience
          designed around you.
        </p>

      </div>


      <div className="difference-grid">

        {differences.map((item)=>(
          <article key={item.number}>

            <span className="difference-number">
              {item.number}
            </span>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.text}
            </p>

          </article>
        ))}

      </div>

    </section>
  );
}