type IconProps = {
  className?: string;
  size?: number;
};

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": "true" as const,
  focusable: "false" as const
};

export function CrossIcon({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...svgProps}>
      <path d="M12 2.5v19M6.5 8h11" />
    </svg>
  );
}

export function ChiRhoIcon({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...svgProps}>
      <path d="M6 6l12 12M18 6L6 18M12 5.25v13.5M12 5.25c4.9 0 4.9 6.35 0 6.35" />
    </svg>
  );
}

export function DoveIcon({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...svgProps}>
      <path
        d="M12 9c-3-1-7 0-9 4 3 1 6.5.5 9-1.5 2.5 2 6 2.5 9 1.5-2-4-6-5-9-4Z"
        fill="currentColor"
        stroke="none"
      />
      <circle cx="12" cy="6.6" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ChaliceIcon({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...svgProps}>
      <path d="M7 4h10M7 4c0 4.5 2 7 5 7s5-2.5 5-7M12 11v6M8 20h8M9 20c0-1.8 1.3-3 3-3s3 1.2 3 3" />
    </svg>
  );
}

export function ShellIcon({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...svgProps}>
      <path d="M12 20L5 13A7 7 0 0 1 19 13Z" />
      <path d="M12 20L7.05 8.05M12 20V6M12 20l4.95-11.95" />
    </svg>
  );
}

export function CandleIcon({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...svgProps}>
      <path
        d="M12 3c2 2.6 2.8 4.6 1.6 6.4-.5.8-1.6 1-2.4.5-.9-.5-1.2-1.6-.5-2.6C11.4 6 12 4.5 12 3Z"
        fill="currentColor"
        stroke="none"
      />
      <rect x="9.5" y="10" width="5" height="9.5" rx="0.6" />
      <path d="M7 20.5h10" />
    </svg>
  );
}

export function QuatrefoilIcon({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...svgProps}>
      <circle cx="12" cy="7.3" r="3.1" />
      <circle cx="16.7" cy="12" r="3.1" />
      <circle cx="12" cy="16.7" r="3.1" />
      <circle cx="7.3" cy="12" r="3.1" />
    </svg>
  );
}

export function MailIcon({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...svgProps}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M4 6.5l8 6.5 8-6.5" />
    </svg>
  );
}

export function BookIcon({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} {...svgProps}>
      <path d="M12 5.5c-2-1.3-5-1.7-8-1v13c3-.7 6-.3 8 1 2-1.3 5-1.7 8-1v-13c-3-.7-6-.3-8 1Z" />
      <path d="M12 5.5v13" />
    </svg>
  );
}
