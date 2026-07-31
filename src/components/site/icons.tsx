type IconProps = { className?: string };

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconStroma({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M24 40V20c0-6 3-10 7-12" />
      <path d="M24 40V24c0-5-3-8-7-9" />
      <path d="M14 40h20" />
      <ellipse cx="31" cy="9" rx="3" ry="5.5" transform="rotate(18 31 9)" />
      <ellipse cx="17" cy="14" rx="2.4" ry="4.4" transform="rotate(-18 17 14)" />
    </svg>
  );
}

export function IconMycelium({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M24 6v36" />
      <path d="M24 16c-5 2-8 5-10 10" />
      <path d="M24 22c5 2 8 5 10 10" />
      <path d="M24 30c-4 1-6 3-7 7" />
      <circle cx="14" cy="26" r="1.6" />
      <circle cx="34" cy="32" r="1.6" />
      <circle cx="17" cy="37" r="1.4" />
      <circle cx="24" cy="6" r="2" />
    </svg>
  );
}

export function IconMolecule({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="24" cy="10" r="3.4" />
      <circle cx="11" cy="31" r="3.4" />
      <circle cx="37" cy="31" r="3.4" />
      <circle cx="24" cy="38" r="3.4" />
      <path d="M24 13.4 13 28M24 13.4 35 28M13.6 33.2l7.2 3.4M34.4 33.2l-7.2 3.4" />
    </svg>
  );
}

export function IconFlask({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M19 6h10" />
      <path d="M21 6v12L12 36a4 4 0 0 0 3.6 6h16.8A4 4 0 0 0 36 36l-9-18V6" />
      <path d="M16 29h16" />
      <circle cx="21" cy="34" r="1.3" />
      <circle cx="27" cy="37" r="1" />
    </svg>
  );
}

export function IconLeafShield({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M24 5 39 11v13c0 10-7 16-15 19-8-3-15-9-15-19V11z" />
      <path d="M17 26c6 1 11-3 13-11-8 0-13 3-13 11z" />
      <path d="M24 33v-9" />
    </svg>
  );
}

export function IconSpore({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="8" />
      <path d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4.5 4.5M33.5 33.5 38 38M38 10l-4.5 4.5M14.5 33.5 10 38" />
    </svg>
  );
}

export function IconWave({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M5 30c5 0 5-12 10-12s5 12 10 12 5-16 10-16 3 8 8 8" />
      <path d="M6 40h36" />
    </svg>
  );
}

export function IconMountain({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 38 18 14l8 12 5-7 13 19z" />
      <path d="M13 38c3-5 7-5 10 0" />
      <circle cx="34" cy="11" r="3" />
    </svg>
  );
}

/** Abstract mark echoing the two-leaf logotype, used for small brand accents. */
export function BrandLeaves({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 40" className={className} aria-hidden="true">
      <path
        d="M2 22C10 4 30 2 40 14c-9-2-15 2-20 10-4 6-12 6-18-2z"
        fill="var(--ember)"
      />
      <path
        d="M62 18c-8 18-28 20-38 8 9 2 15-2 20-10 4-6 12-6 18 2z"
        fill="var(--bark)"
      />
    </svg>
  );
}
