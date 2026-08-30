import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getLiturgicalInfo } from "@/content/liturgical";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: {
    default: "Grace & Journey",
    template: "%s | Grace & Journey"
  },
  description: "Ministry, pilgrimage, reflection, and community updates from Grace & Journey."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const liturgical = getLiturgicalInfo();

  return (
    <html
      className={displayFont.variable}
      data-liturgical-color={liturgical.color}
      data-season={liturgical.season}
      lang="en"
    >
      <body>
        <BackgroundVideo />
        <Header />
        <main className="page-shell">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
