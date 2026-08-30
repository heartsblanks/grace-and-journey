import { DoveIcon, MailIcon } from "@/components/icons";
import { IconCard } from "@/components/IconCard";
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
      <section className="section alt">
        <div className="contact-list">
          <IconCard icon={<MailIcon />} title="Email">
            Add the public contact email when ready.
          </IconCard>
          <IconCard icon={<DoveIcon />} title="Social">
            Add approved social links when they are available.
          </IconCard>
        </div>
      </section>
    </>
  );
}
