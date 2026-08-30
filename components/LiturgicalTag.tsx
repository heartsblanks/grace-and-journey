type LiturgicalTagProps = {
  name: string;
};

export function LiturgicalTag({ name }: LiturgicalTagProps) {
  return (
    <span className="liturgical-tag">
      <span aria-hidden="true" className="liturgical-tag-dot" />
      {name}
    </span>
  );
}
