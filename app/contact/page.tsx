export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <>
      <section className="page-title">
        <p className="eyebrow">Contact</p>
        <h1>Connect with Grace & Journey</h1>
        <p>Use this page for future contact details, ministry inquiries, and pilgrimage questions.</p>
      </section>
      <section className="section alt">
        <div className="contact-list">
          <article className="card">
            <h3>Email</h3>
            <p>Add the public contact email when ready.</p>
          </article>
          <article className="card">
            <h3>Social</h3>
            <p>Add approved social links when they are available.</p>
          </article>
        </div>
      </section>
    </>
  );
}
