import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { Hero } from "@/components/Hero";
import { PilgrimageFeature } from "@/components/PilgrimageFeature";
import { PullQuote } from "@/components/PullQuote";
import { Reveal } from "@/components/Reveal";
import { StaggerGroup } from "@/components/StaggerGroup";
import { VerseBand } from "@/components/VerseBand";
import { posts, pilgrimages } from "@/content/site";

export default function Home() {
  const [featuredPilgrimage, ...otherPilgrimages] = pilgrimages;

  return (
    <>
      <Hero />
      <VerseBand />
      <Reveal className="section">
        <p className="eyebrow">Latest Reflections</p>
        <div className="section-header">
          <h2>Stories of faith, service, and sacred travel.</h2>
          <p>
            Grace & Journey gathers reflections, ministry updates, and pilgrimage notes in one place.
          </p>
        </div>
        <StaggerGroup className="grid">
          {posts.slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </StaggerGroup>
      </Reveal>
      <Reveal>
        <PullQuote attribution="From the About page">
          Grace &amp; Journey exists to share reflections, ministry life, pilgrimage preparation,
          and community stories with clarity and care.
        </PullQuote>
      </Reveal>
      <Reveal className="section alt">
        <div className="section-header">
          <h2>Upcoming journeys</h2>
          <p>Follow pilgrimage planning, location notes, and spiritual preparation resources.</p>
        </div>
        <div className="glass-panel pilgrimage-spotlight">
          <PilgrimageFeature eyebrow="Featured Pilgrimage" pilgrimage={featuredPilgrimage} />
        </div>
        {otherPilgrimages.length > 0 ? (
          <p className="section-footer-link">
            <Link href="/pilgrimages">See all pilgrimages &rarr;</Link>
          </p>
        ) : null}
      </Reveal>
    </>
  );
}
