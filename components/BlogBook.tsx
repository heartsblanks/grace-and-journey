"use client";

import { useState } from "react";
import type { BlogPost } from "@/content/site";

type BlogBookProps = {
  post: BlogPost;
};

export function BlogBook({ post }: BlogBookProps) {
  const [page, setPage] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const pages = post.body;

  function turnPage(nextPage: number) {
    if (nextPage < 0 || nextPage >= pages.length) {
      return;
    }

    setFlipping(true);
    window.setTimeout(() => {
      setPage(nextPage);
      setFlipping(false);
    }, 260);
  }

  return (
    <section className="book-wrap" aria-label={`${post.title} reader`}>
      <div className={`book ${flipping ? "is-flipping" : ""}`}>
        <div className="book-page book-page-left">
          <p className="eyebrow">{post.date}</p>
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
        </div>
        <div className="book-page book-page-right">
          <p>{pages[page]}</p>
          <span className="page-number">
            Page {page + 1} of {pages.length}
          </span>
        </div>
      </div>
      <div className="book-controls">
        <button className="button ghost" disabled={page === 0} onClick={() => turnPage(page - 1)}>
          Previous
        </button>
        <button
          className="button"
          disabled={page === pages.length - 1}
          onClick={() => turnPage(page + 1)}
        >
          Next page
        </button>
      </div>
    </section>
  );
}
