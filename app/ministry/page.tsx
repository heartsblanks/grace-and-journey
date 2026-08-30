import { BookIcon, CandleIcon, ChaliceIcon } from "@/components/icons";
import { IconCard } from "@/components/IconCard";
import { Reveal } from "@/components/Reveal";
import { SectionDivider } from "@/components/SectionDivider";

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
          Ministry updates will share invitations, service notes, pastoral reflections, and ways
          to participate.
        </p>
      </section>
      <SectionDivider />
      <Reveal className="section alt">
        <div className="grid">
          <IconCard icon={<CandleIcon />} title="Prayer">
            Seasonal reflections and prayer resources.
          </IconCard>
          <IconCard icon={<ChaliceIcon />} title="Service">
            Community needs, volunteer notes, and ministry updates.
          </IconCard>
          <IconCard icon={<BookIcon />} title="Formation">
            Resources for growth, preparation, and reflection.
          </IconCard>
        </div>
      </Reveal>
    </>
  );
}
