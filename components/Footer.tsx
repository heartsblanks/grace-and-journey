import Link from "next/link";
import { ChiRhoIcon } from "@/components/icons";

const quickLinks = [
  ["About", "/about"],
  ["Blog", "/blog"],
  ["Pilgrimages", "/pilgrimages"],
  ["Ministry", "/ministry"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"]
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-brand-mark">
            <ChiRhoIcon size={24} />
            Grace &amp; Journey
          </span>
          <p>Faith, pilgrimage, ministry, and community.</p>
        </div>
        <nav aria-label="Footer navigation" className="footer-links">
          {quickLinks.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <p className="footer-verse">&ldquo;Pray without ceasing.&rdquo; &mdash; 1 Thessalonians 5:17</p>
      </div>
    </footer>
  );
}
