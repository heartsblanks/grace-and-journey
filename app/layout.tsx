import type { Metadata } from "next";
import "./globals.css";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

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
  return (
    <html lang="en">
      <body>
        <BackgroundVideo />
        <Header />
        <main className="page-shell">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
