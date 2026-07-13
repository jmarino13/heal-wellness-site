"use client";

import Link from "next/link";
import { useState } from "react";

const goals = [
  {
    id: "weight",
    number: "01",
    title: "I want to lose weight",
    description:
      "Explore medically guided options designed around sustainable progress, metabolic health and your individual goals.",
    services: ["GLP-1 Weight Management", "Metabolic Support"],
    link: "/glp1",
  },
  {
    id: "energy",
    number: "02",
    title: "I want more energy",
    description:
      "Fatigue may have many causes. A personalized consultation can help identify appropriate wellness, hormone or peptide options.",
    services: ["Hormone Optimization", "Peptide Therapy"],
    link: "/peptides",
  },
  {
    id: "menopause",
    number: "03",
    title: "I am navigating menopause",
    description:
      "Receive thoughtful support for symptoms affecting sleep, mood, energy, body composition and quality of life.",
    services: ["Menopause Support", "Hormone Evaluation"],
    link: "/menopause",
  },
  {
    id: "recovery",
    number: "04",
    title: "I want to recover and perform better",
    description:
      "Discuss personalized strategies supporting recovery, mobility, resilience and an active lifestyle.",
    services: ["Peptide Therapy", "Recovery Support"],
    link: "/peptides",
  },
  {
    id: "hormones",
    number: "05",
    title: "I want to optimize my hormones",
    description:
      "Clinically supervised hormone care may help qualified patients address symptoms and feel more like themselves.",
    services: ["TRT", "Hormone Optimization"],
    link: "/trt",
  },
  {
    id: "longevity",
    number: "06",
    title: "I want to age exceptionally well",
    description:
      "Build a personalized plan centered on energy, strength, body composition, healthy aging and long-term wellness.",
    services: ["Peptide Therapy", "Longevity Planning"],
    link: "/peptides",
  },
];

export default function GoalFinder() {
  const [activeGoal, setActiveGoal] = useState(goals[0]);

  return (
    <section className="goal-finder" id="goals">
      <div className="goal-finder-heading">
        <p className="section-kicker">START WITH HOW YOU WANT TO FEEL</p>

        <h2>
          What brings you
          <span>here today?</span>
        </h2>

        <p>
          You do not need to know which treatment you need. Begin with your
          goals, and the HEAL Wellness team will help guide the conversation.
        </p>
      </div>

      <div className="goal-finder-layout">
        <div className="goal-options" role="tablist">
          {goals.map((goal) => {
            const isActive = activeGoal.id === goal.id;

            return (
              <button
                type="button"
                className={`goal-option ${isActive ? "active" : ""}`}
                key={goal.id}
                onClick={() => setActiveGoal(goal)}
                role="tab"
                aria-selected={isActive}
              >
                <span className="goal-number">{goal.number}</span>
                <span className="goal-title">{goal.title}</span>
                <span className="goal-arrow">↗</span>
              </button>
            );
          })}
        </div>

        <div className="goal-result" key={activeGoal.id}>
          <p className="goal-result-label">A PLACE TO BEGIN</p>

          <h3>{activeGoal.title}</h3>

          <p className="goal-result-description">
            {activeGoal.description}
          </p>

          <div className="goal-service-label">SERVICES TO DISCUSS</div>

          <div className="goal-services">
            {activeGoal.services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>

          <Link className="goal-result-link" href={activeGoal.link}>
            Explore Your Options <span>↗</span>
          </Link>

          <p className="goal-disclaimer">
            Treatment recommendations are made only after an individualized
            medical evaluation.
          </p>
        </div>
      </div>
    </section>
  );
}