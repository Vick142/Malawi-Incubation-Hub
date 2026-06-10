"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About & Objectives", href: "/about" },
  { label: "Platform Features", href: "/features" },
  { label: "Framework", href: "/framework" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#1E3A8A] border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-white rounded flex items-center justify-center text-[#1E3A8A] font-black text-xl">
            D
          </div>
          <p className="text-white font-extrabold text-xl tracking-tighter">
            Daeyang <span className="font-medium opacity-80">Hub</span>
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "text-brand-cyan underline underline-offset-8 decoration-2"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div>
          <Link
            href="/signup"
            className="bg-white px-6 py-2.5 rounded-none font-extrabold text-xs uppercase tracking-[0.15em] shadow-xl hover:bg-slate-100 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-nowrap block"
            style={{ color: '#1E3A8A' }}
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </header>
  );
}

