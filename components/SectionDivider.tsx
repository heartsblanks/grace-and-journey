import { QuatrefoilIcon } from "@/components/icons";

export function SectionDivider() {
  return (
    <div aria-hidden="true" className="section-divider">
      <span className="section-divider-line" />
      <QuatrefoilIcon className="section-divider-icon" size={20} />
      <span className="section-divider-line" />
    </div>
  );
}
