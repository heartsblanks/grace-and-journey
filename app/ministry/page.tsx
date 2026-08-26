export const metadata = {
  title: "Ministry"
};

export default function MinistryPage() {
  return (
    <>
      <section className="page-title">
        <p className="eyebrow">Ministry</p>
        <h1>Serving through presence, prayer, and community.</h1>
        <p>
          Ministry updates will share invitations, service notes, pastoral reflections, and ways to
          participate.
        </p>
      </section>
      <section className="section alt">
        <div className="grid">
          <article className="card">
            <h3>Prayer</h3>
            <p>Seasonal reflections and prayer resources.</p>
          </article>
          <article className="card">
            <h3>Service</h3>
            <p>Community needs, volunteer notes, and ministry updates.</p>
          </article>
          <article className="card">
            <h3>Formation</h3>
            <p>Resources for growth, preparation, and reflection.</p>
          </article>
        </div>
      </section>
    </>
  );
}
