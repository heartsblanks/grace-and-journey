"use client";

import { usePathname } from "next/navigation";
import { BackgroundVideo } from "@/components/BackgroundVideo";

export function PageBackground() {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <>
        <BackgroundVideo />
        <span aria-hidden="true" className="background-scrim" />
      </>
    );
  }

  return <span aria-hidden="true" className="background-pattern" />;
}
