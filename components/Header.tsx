import Link from "next/link";

const navItems = [
  ["About", "/about"],
  ["Blog", "/blog"],
  ["Gallery", "/gallery"],
  ["Pilgrimages", "/pilgrimages"],
  ["Ministry", "/ministry"],
  ["Contact", "/contact"]
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        Grace & Journey
      </Link>
      <nav aria-label="Main navigation" className="nav">
        {navItems.map(([label, href]) => (
          <Link href={href} key={href}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
