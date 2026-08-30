import { CrossIcon, DoveIcon, ShellIcon } from "@/components/icons";
import { IconCard } from "@/components/IconCard";
import { SectionDivider } from "@/components/SectionDivider";

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
      <section className="section alt">
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
      </section>
    </>
  );
}
