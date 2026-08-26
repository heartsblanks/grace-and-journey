import Link from "next/link";
import type { BlogPost } from "@/content/site";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="card">
      <p className="eyebrow">{post.date}</p>
      <h3>{post.title}</h3>
      <p>{post.summary}</p>
      <Link href={`/blog/${post.slug}`}>Read more</Link>
    </article>
  );
}
