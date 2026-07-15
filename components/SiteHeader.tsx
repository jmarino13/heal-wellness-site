import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="nav-shell">
      <Link href="/#top" className="brand" aria-label="HEAL Wellness home">
        <span className="brand-word">heal</span>
        <span className="brand-sub">WELLNESS</span>
      </Link>

     <nav className="nav-links" aria-label="Primary navigation">
  <Link href="/#goals">Your Goals</Link>
  <Link href="/#treatments">Treatments</Link>
  <Link href="/#story">Our Story</Link>
  <Link href="/#experience">Experience</Link>
</nav>

      <Link className="nav-cta" href="/#contact">
        Begin Your Journey
      </Link>
    </header>
  );
}