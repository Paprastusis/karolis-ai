"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#070612]/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-base font-semibold tracking-tight text-white transition-colors duration-300 hover:text-accent"
        >
          Karolis
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/70 transition-colors duration-300 hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-[#070612] transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-white transition-colors duration-300 hover:text-accent md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/[0.06] bg-[#070612]/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-white/80 transition-colors duration-300 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-4 py-3 text-center text-base font-medium text-[#070612] transition-all duration-300 hover:bg-accent-hover"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
