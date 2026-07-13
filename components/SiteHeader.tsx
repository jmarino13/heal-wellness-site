import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="nav-shell">
      <Link href="/#top" className="brand" aria-label="HEAL Wellness home">
        <span className="brand-word">heal</span>
        <span className="brand-sub">WELLNESS</span>
      </Link>

      <nav className="nav-links" aria-label="Primary navigation">
        <Link href="/#treatments">Treatments</Link>
        <Link href="/#team">Our Team</Link>
        <Link href="/#experience">Experience</Link>
        <Link href="/#contact">Contact</Link>
      </nav>

      <Link className="nav-cta" href="/#contact">
        Book a Consultation
      </Link>
    </header>
  );
}