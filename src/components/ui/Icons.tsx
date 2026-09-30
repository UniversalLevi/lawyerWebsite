import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.25,
    "aria-hidden": true as const,
    ...props,
  };
}

export function IconColumns(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 20V6M20 20V6M4 6h16M8 20V9M16 20V9M2 20h20" />
    </svg>
  );
}

export function IconScale(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3v18M8 21h8M12 5l-6 8h12L12 5Z" />
      <path d="M6 13c0 1.7 1.3 3 3 0M15 13c1.7 3 3 1.7 3 0" />
    </svg>
  );
}

export function IconBook(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 4.5h11a3 3 0 0 1 3 3V20H8a3 3 0 0 0-3 3V4.5Z" />
      <path d="M5 4.5A3 3 0 0 1 8 1.5h11" />
    </svg>
  );
}

export function IconQuill(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 20s3-1 5-5 7-9 12-11c-2 5-7 9-11 12-4 2-6 4-6 4Z" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
    </svg>
  );
}

export function IconHome(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 11.5 12 4l8 7.5V20H4v-8.5Z" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

export function IconBrief(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="7" width="18" height="13" />
      <path d="M8 7V5h8v2M3 12h18" />
    </svg>
  );
}

export function IconNetwork(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="4" width="16" height="12" />
      <path d="M2 20h20M8 16v4M16 16v4" />
    </svg>
  );
}

export function IconHandshake(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M8 11 4.5 7.5 8 4l4 4 4-4 3.5 3.5L16 11" />
      <path d="M8 11l4 4 4-4" />
      <path d="M7 18h10" />
    </svg>
  );
}

const set = [
  IconShield,
  IconScale,
  IconBook,
  IconHome,
  IconQuill,
  IconColumns,
  IconNetwork,
  IconBrief,
  IconHandshake,
];

export function PracticeIcon({ index, className }: { index: number; className?: string }) {
  const Icon = set[index % set.length];
  return <Icon className={className} />;
}
