import Link from "next/link";
import { HeroParallax } from "@/components/HeroParallax";
import { LiturgicalTag } from "@/components/LiturgicalTag";
import { getLiturgicalInfo } from "@/content/liturgical";

export function Hero() {
  const liturgical = getLiturgicalInfo();

  return (
    <section className="hero">
      <HeroParallax />
      <div className="hero-content">
        <div className="hero-tags">
          <p className="eyebrow">Grace &amp; Journey</p>
          <LiturgicalTag name={liturgical.name} />
        </div>
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
