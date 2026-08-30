"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChiRhoIcon } from "@/components/icons";

const navItems = [
  ["About", "/about"],
  ["Blog", "/blog"],
  ["Gallery", "/gallery"],
  ["Pilgrimages", "/pilgrimages"],
  ["Ministry", "/ministry"],
  ["Contact", "/contact"]
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <ChiRhoIcon className="brand-mark" size={26} />
        Grace &amp; Journey
      </Link>
      <nav aria-label="Main navigation" className="nav">
        {navItems.map(([label, href]) => {
          const isActive = pathname === href;
          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={isActive ? "is-active" : undefined}
              href={href}
              key={href}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
