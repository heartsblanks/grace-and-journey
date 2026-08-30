import { ContactForm } from "@/components/ContactForm";
import { DoveIcon, MailIcon } from "@/components/icons";
import { IconCard } from "@/components/IconCard";
import { Reveal } from "@/components/Reveal";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <>
      <section className="page-title">
        <p className="eyebrow">Contact</p>
        <h1>Connect with Grace &amp; Journey</h1>
        <p>Use this page for future contact details, ministry inquiries, and pilgrimage questions.</p>
      </section>
      <SectionDivider />
      <Reveal className="section alt">
        <div className="contact-layout">
          <div className="contact-panel">
            <img alt="" aria-hidden="true" src="/images/contact-motif.svg" />
            <div className="contact-list">
              <IconCard icon={<MailIcon />} title="Email">
                Add the public contact email when ready.
              </IconCard>
              <IconCard icon={<DoveIcon />} title="Social">
                Add approved social links when they are available.
              </IconCard>
            </div>
          </div>
          <div className="contact-form-wrap">
            <h2>Send a message</h2>
            <p>We&rsquo;ll follow up once contact details are connected.</p>
            <ContactForm />
          </div>
        </div>
      </Reveal>
    </>
  );
}
