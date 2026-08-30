type TestimonialCardProps = {
  quote: string;
  role: string;
};

export function TestimonialCard({ quote, role }: TestimonialCardProps) {
  return (
    <figure className="testimonial-card">
      <blockquote>
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <figcaption>{role}</figcaption>
    </figure>
  );
}
