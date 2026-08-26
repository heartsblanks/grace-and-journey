import { BlogCard } from "@/components/BlogCard";
import { posts } from "@/content/site";

export const metadata = {
  title: "Blog"
};

export default function BlogPage() {
  return (
    <>
      <section className="page-title">
        <p className="eyebrow">Blog</p>
        <h1>Reflections and updates</h1>
        <p>Recent writing from Grace & Journey.</p>
      </section>
      <section className="section alt">
        <div className="grid">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
