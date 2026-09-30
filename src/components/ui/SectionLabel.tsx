export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: string;
}) {
  return (
    <p className="section-label small-caps">
      <span>{number}</span>
      <span aria-hidden="true">—</span>
      <span>{children}</span>
    </p>
  );
}
