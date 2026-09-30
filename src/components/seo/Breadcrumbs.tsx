import Link from "next/link";

export function Breadcrumbs({
  items,
}: {
  items: Array<{ href?: string; label: string }>;
}) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const last = index === items.length - 1;
        return (
          <span key={`${item.label}-${index}`}>
            {item.href && !last ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current={last ? "page" : undefined}>{item.label}</span>
            )}
            {!last ? <span aria-hidden="true"> / </span> : null}
          </span>
        );
      })}
    </nav>
  );
}
