import { BlogCard } from "@/components/BlogCard";
import { Hero } from "@/components/Hero";
import { posts, pilgrimages } from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section">
        <p className="eyebrow">Latest Reflections</p>
        <div className="section-header">
          <h2>Stories of faith, service, and sacred travel.</h2>
          <p>
            Grace & Journey gathers reflections, ministry updates, and pilgrimage notes in one place.
          </p>
        </div>
        <div className="grid">
          {posts.slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
      <section className="section alt">
        <p className="eyebrow">Pilgrimages</p>
        <div className="section-header">
          <h2>Upcoming journeys</h2>
          <p>Follow pilgrimage planning, location notes, and spiritual preparation resources.</p>
        </div>
        <div className="grid">
          {pilgrimages.map((pilgrimage) => (
            <article className="card" key={pilgrimage.slug}>
              <h3>{pilgrimage.title}</h3>
              <p>{pilgrimage.summary}</p>
              <a href="/pilgrimages">View details</a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
