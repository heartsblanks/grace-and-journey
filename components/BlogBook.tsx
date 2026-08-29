"use client";

import { forwardRef, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import type { BlogPost } from "@/content/site";

type PageFlipInstance = {
  flipNext: (corner?: "top" | "bottom") => void;
  flipPrev: (corner?: "top" | "bottom") => void;
  turnToPage: (page: number) => void;
  getCurrentPageIndex: () => number;
  getPageCount: () => number;
};

type FlipBookHandle = {
  pageFlip: () => PageFlipInstance;
};

type FlipBookProps = {
  width: number;
  height: number;
  size?: "fixed" | "stretch";
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  showCover?: boolean;
  drawShadow?: boolean;
  flippingTime?: number;
  maxShadowOpacity?: number;
  usePortrait?: boolean;
  mobileScrollSupport?: boolean;
  useMouseEvents?: boolean;
  className?: string;
  onFlip?: (event: { data: number }) => void;
  children: React.ReactNode;
};

const FlipBook = HTMLFlipBook as unknown as React.ForwardRefExoticComponent<
  FlipBookProps & React.RefAttributes<FlipBookHandle>
>;

type PageProps = {
  className?: string;
  hard?: boolean;
  children: React.ReactNode;
};

const Page = forwardRef<HTMLDivElement, PageProps>(function Page(
  { className, hard, children },
  ref
) {
  return (
    <div
      className={`book-leaf ${className ?? ""}`}
      data-density={hard ? "hard" : undefined}
      ref={ref}
    >
      {children}
    </div>
  );
});

type BlogBookProps = {
  post: BlogPost;
};

export function BlogBook({ post }: BlogBookProps) {
  const flipBookRef = useRef<FlipBookHandle>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const lastPage = post.body.length + 1;

  function goPrev() {
    flipBookRef.current?.pageFlip().flipPrev();
  }

  function goNext() {
    flipBookRef.current?.pageFlip().flipNext();
  }

  return (
    <section className="book-wrap" aria-label={`${post.title} reader`}>
      <div className="book-shell">
        <span className="page-stack page-stack-left" aria-hidden="true" />
        <span className="page-stack page-stack-right" aria-hidden="true" />
        <span className="book-gutter" aria-hidden="true" />
        <FlipBook
          ref={flipBookRef}
          width={420}
          height={600}
          size="stretch"
          minWidth={260}
          maxWidth={560}
          minHeight={370}
          maxHeight={800}
          showCover
          drawShadow
          flippingTime={800}
          maxShadowOpacity={0.55}
          usePortrait
          mobileScrollSupport={false}
          useMouseEvents
          className="flip-book"
          onFlip={(event) => setCurrentPage(event.data)}
        >
          <Page hard className="book-cover book-cover-front">
            <div className="book-cover-inner">
              <p className="eyebrow">{post.date}</p>
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <span className="book-hint">Drag a corner to open</span>
            </div>
          </Page>
          {post.body.map((paragraph, index) => (
            <Page className="book-page-surface" key={post.slug + index}>
              <p>{paragraph}</p>
              <span className="page-number">
                {index + 1} of {post.body.length}
              </span>
            </Page>
          ))}
          <Page hard className="book-cover book-cover-back">
            <div className="book-cover-inner">
              <p className="eyebrow">Grace &amp; Journey</p>
              <h2>Thank you for reading</h2>
              <p>Return to the blog for more reflections and pilgrimage notes.</p>
            </div>
          </Page>
        </FlipBook>
      </div>
      <div className="book-controls">
        <button className="button ghost" disabled={currentPage === 0} onClick={goPrev}>
          Previous
        </button>
        <span className="page-indicator">
          Page {currentPage} of {lastPage}
        </span>
        <button className="button" disabled={currentPage === lastPage} onClick={goNext}>
          Next page
        </button>
      </div>
    </section>
  );
}
