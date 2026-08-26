import { notFound } from "next/navigation";
import { BlogBook } from "@/components/BlogBook";
import { posts } from "@/content/site";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found"
    };
  }

  return {
    title: post.title,
    description: post.summary
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <section className="page-title">
        <p className="eyebrow">{post.date}</p>
        <h1>{post.title}</h1>
        <p>{post.summary}</p>
      </section>
      <BlogBook post={post} />
    </article>
  );
}
