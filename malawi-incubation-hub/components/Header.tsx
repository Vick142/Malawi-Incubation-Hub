"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About & Objectives", href: "/about" },
  { label: "Platform Features", href: "/features" },
  { label: "Framework", href: "/framework" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hide the header on sign up/in pages and workspace dashboard
  if (pathname === "/signup" || pathname === "/features") {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 bg-[#1E3A8A] border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-25 md:h-30 flex items-center justify-between">

        {/* Logo — actual image, name removed since it's on the logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src={logo}
            alt="Daeyang University Smart Business Incubation Hub"
            className="h-14 md:h-30 lg:h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-all duration-200 hover:text-[#38BDF8] hover:-translate-y-0.5 ${isActive
                  ? "text-[#38BDF8] underline underline-offset-8 decoration-2"
                  : "text-white/80"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA / Mobile Menu button */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Link
              href="/signup"
              className="bg-[#2563EB] hover:bg-blue-600 text-white px-6 py-2.5 font-extrabold text-xs uppercase tracking-[0.15em] shadow-lg shadow-blue-700/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-nowrap block border border-blue-400/30"
            >
              GET STARTED
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-white/10 ${isMenuOpen ? "max-h-[32rem] border-t bg-[#1E3A8A]" : "max-h-0 pointer-events-none"
          }`}
      >
        <div className="px-4 py-6 space-y-4 flex flex-col">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-bold transition-all duration-200 pl-2 border-l-2 hover:text-[#38BDF8] hover:translate-x-1 ${isActive
                  ? "text-[#38BDF8] border-[#38BDF8]"
                  : "text-white/80 border-transparent"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-white/10 sm:hidden">
            <Link
              href="/signup"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#2563EB] hover:bg-blue-600 text-white py-3 font-extrabold text-xs uppercase tracking-[0.15em] shadow-lg transition-all text-center block"
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
