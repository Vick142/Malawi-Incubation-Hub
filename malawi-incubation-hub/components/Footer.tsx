"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Hide the footer on sign up/in pages and features/workspace dashboard
  if (pathname === "/signup" || pathname === "/features") {
    return null;
  }

  return (
    <footer className="bg-[#1E3A8A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-slate-300 font-medium tracking-tight">
          © 2026 Daeyang University Smart Business Incubation Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
