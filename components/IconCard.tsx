import type { ReactNode } from "react";

type IconCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

export function IconCard({ icon, title, children }: IconCardProps) {
  return (
    <article className="icon-card">
      <span aria-hidden="true" className="icon-card-badge">
        {icon}
      </span>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
