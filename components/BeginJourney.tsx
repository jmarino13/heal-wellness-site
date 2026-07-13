"use client";
import Image from "next/image";

export default function BeginJourney() {
  return (
    <section className="begin-journey" id="contact">

      <div className="begin-background">
        <Image
          src="/images/heal-office.jpeg"
          alt="HEAL Wellness experience"
          fill
          sizes="100vw"
        />
      </div>


      <div className="begin-overlay" />


      <div className="begin-content">

        <p className="section-kicker">
          BEGIN YOUR HEAL JOURNEY
        </p>


        <h2>
          Your healthiest years
          <span>may still be ahead.</span>
        </h2>


        <p>
          Whether your goal is weight management, improved energy,
          hormone balance, recovery or longevity, HEAL Wellness creates
          a personalized path designed around you.
        </p>


        <div className="begin-actions">

         <button
  className="primary-button"
 onClick={() =>
  (window as any).blvd.openBookingWidget({
    urlParams: {
      locationId: "74ffcb94-8ba1-4f3f-8707-314bd43e7b63",
      path: "/cart/menu/Peptide%20Consultation/s_3e58223a-5a2f-4f15-9d91-62996f82f4e8",
      visitType: "SELF_VISIT",
    },
  })
}
>
  Schedule Your Consultation
</button>


          <a
            className="secondary-button"
            href="tel:+15047324325"
          >
            Call HEAL Wellness
          </a>

        </div>


        <div className="begin-details">

          <div>
            <strong>HEAL Wellness</strong>
            <span>Physician-Directed Wellness</span>
          </div>


          <div>
            <strong>(504) 732-HEAL</strong>
            <span>Call to begin your journey</span>
          </div>

        </div>

      </div>

    </section>
  );
}