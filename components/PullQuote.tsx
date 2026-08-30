type PullQuoteProps = {
  children: React.ReactNode;
  attribution?: string;
};

export function PullQuote({ children, attribution }: PullQuoteProps) {
  return (
    <figure className="pull-quote">
      <span aria-hidden="true" className="pull-quote-mark">
        &ldquo;
      </span>
      <blockquote>
        <p>{children}</p>
      </blockquote>
      {attribution ? <figcaption>{attribution}</figcaption> : null}
    </figure>
  );
}
