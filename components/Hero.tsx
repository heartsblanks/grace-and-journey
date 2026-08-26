import Link from "next/link";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Grace & Journey</p>
        <h1>Faith for the road ahead.</h1>
        <p>
          Reflections, pilgrimage updates, ministry notes, and stories for people walking with
          purpose.
        </p>
        <div className="button-row">
          <Link className="button" href="/blog">
            Read reflections
          </Link>
          <Link className="button secondary" href="/pilgrimages">
            View pilgrimages
          </Link>
        </div>
      </div>
    </section>
  );
}
