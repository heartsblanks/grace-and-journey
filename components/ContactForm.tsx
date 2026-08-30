"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="contact-form-field">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" required type="text" />
      </div>
      <div className="contact-form-field">
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" required type="email" />
      </div>
      <div className="contact-form-field">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" required rows={5} />
      </div>
      <button className="button" type="submit">
        Send message
      </button>
      {submitted ? (
        <p className="contact-form-note" role="status">
          This form isn&rsquo;t connected yet &mdash; please email us directly for now.
        </p>
      ) : null}
    </form>
  );
}
