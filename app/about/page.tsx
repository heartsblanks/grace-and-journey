export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <section className="page-title">
        <p className="eyebrow">About</p>
        <h1>Grace & Journey</h1>
        <p>
          Grace & Journey exists to share reflections, ministry life, pilgrimage preparation, and
          community stories with clarity and care.
        </p>
      </section>
      <section className="section alt">
        <div className="grid">
          <article className="card">
            <h3>Faith</h3>
            <p>Reflections and resources rooted in prayer, service, and spiritual formation.</p>
          </article>
          <article className="card">
            <h3>Journey</h3>
            <p>Travel notes and pilgrimage updates for people preparing for sacred places.</p>
          </article>
          <article className="card">
            <h3>Community</h3>
            <p>Ministry stories and invitations to connect, support, and participate.</p>
          </article>
        </div>
      </section>
    </>
  );
}
