"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Play } from "lucide-react";

const navLinks = [
  { name: "Sobre", href: "/sobre" },
  { name: "Israel", href: "/israel" },
  { name: "Ministério", href: "/ministerio" },
  { name: "Música", href: "/musica" },
  { name: "TDM Talk", href: "/tdm-talk" },
  { name: "Agenda", href: "/agenda" },
  { name: "Contato", href: "/contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Gold accent bar */}
      <div className="h-[3px] bg-gradient-to-r from-accent-dark via-accent to-accent-dark" />

      <nav className="bg-primary/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo — left aligned on all sizes */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/pastor-alexandre-headshot.jpg"
                alt="Pastor Alexandre"
                width={56}
                height={56}
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover border-2 border-accent shadow-md"
              />
              <div>
                <p className="text-white font-bold text-sm sm:text-base lg:text-lg tracking-tight leading-none">
                  Pastor Alexandre
                </p>
                <p className="text-accent text-[9px] sm:text-[10px] lg:text-xs tracking-[0.2em] uppercase">
                  Mendes
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    link.name === "Israel"
                      ? "text-accent hover:text-accent-light"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/israel"
                className="flex items-center gap-2 px-6 py-2.5 bg-accent text-primary text-sm font-bold rounded-lg hover:bg-accent-light transition-colors"
              >
                Viagem a Israel
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white/80"
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-primary border-t border-white/5 pb-6">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg ${
                    link.name === "Israel"
                      ? "text-accent hover:bg-accent/10"
                      : "text-white/80 hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="px-4 mt-4">
              <Link
                href="/israel"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-6 py-3 bg-accent text-primary font-bold rounded-lg"
              >
                Viagem a Israel
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
