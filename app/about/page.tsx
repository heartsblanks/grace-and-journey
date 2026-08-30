import { CrossIcon, DoveIcon, ShellIcon } from "@/components/icons";
import { IconCard } from "@/components/IconCard";
import { Reveal } from "@/components/Reveal";
import { SectionDivider } from "@/components/SectionDivider";
import { TestimonialCard } from "@/components/TestimonialCard";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <section className="page-title">
        <p className="eyebrow">About</p>
        <h1>Grace &amp; Journey</h1>
        <p>
          Grace &amp; Journey exists to share reflections, ministry life, pilgrimage preparation,
          and community stories with clarity and care.
        </p>
      </section>
      <SectionDivider />
      <Reveal className="section alt">
        <div className="grid">
          <IconCard icon={<CrossIcon />} title="Faith">
            Reflections and resources rooted in prayer, service, and spiritual formation.
          </IconCard>
          <IconCard icon={<ShellIcon />} title="Journey">
            Travel notes and pilgrimage updates for people preparing for sacred places.
          </IconCard>
          <IconCard icon={<DoveIcon />} title="Community">
            Ministry stories and invitations to connect, support, and participate.
          </IconCard>
        </div>
      </Reveal>
      <SectionDivider />
      <Reveal className="section">
        <p className="eyebrow">Voices from the community</p>
        <div className="section-header">
          <h2>Example reflections</h2>
          <p>
            Illustrative example quotes for now &mdash; replace with real community reflections
            when they&rsquo;re ready to share.
          </p>
        </div>
        <div className="grid">
          <TestimonialCard
            quote="The reflections here gave our small group something honest to pray with each week."
            role="A parish volunteer"
          />
          <TestimonialCard
            quote="Reading the pilgrimage notes beforehand changed how I prepared, spiritually and practically."
            role="A first-time pilgrim"
          />
          <TestimonialCard
            quote="It's rare to find a ministry page that feels unhurried. This one does."
            role="A ministry coordinator"
          />
        </div>
      </Reveal>
    </>
  );
}
