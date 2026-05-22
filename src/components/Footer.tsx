import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const quickLinks = [
  { name: "Sobre", href: "/sobre" },
  { name: "Viagem a Israel", href: "/israel" },
  { name: "Ministério", href: "/ministerio" },
  { name: "Música", href: "/musica" },
  { name: "TDM Talk", href: "/tdm-talk" },
  { name: "Agenda", href: "/agenda" },
  { name: "Contato", href: "/contato" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/alexandremendespastor",
    icon: InstagramIcon,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@alexandremendespastor",
    icon: YoutubeIcon,
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* CTA Banner — Israel */}
      <div className="relative bg-gradient-to-r from-earth-dark via-earth to-earth-dark py-10 sm:py-14 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/israel/jerusalem-group-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 font-display">
            Conheça Israel com o Pastor Alexandre
          </h3>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            26 anos guiando vidas pela Terra Santa. Uma experiência que vai
            transformar sua fé para sempre.
          </p>
          <Link
            href="/israel"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-primary font-bold rounded-xl hover:bg-accent-light transition-colors"
          >
            Reservar Minha Vaga
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 border-2 border-accent rounded-full flex items-center justify-center">
                <span className="text-accent font-bold text-lg font-display">
                  A
                </span>
              </div>
              <div>
                <p className="font-bold text-lg tracking-tight leading-none">
                  Pastor Alexandre
                </p>
                <p className="text-accent text-xs tracking-[0.2em] uppercase">
                  Mendes
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Pastor, pregador internacional, cantor e guia de viagens a Israel
              há 26 anos. Fundador do Templo dos Milagres.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+17814803125"
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  (781) 480-3125
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@pastoralexandre.com"
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent" />
                  contato@pastoralexandre.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-white/60">
                  <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <p>
                    TDM Church — 539 Salem St
                    <br />
                    Malden, MA 02148
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Pastor Alexandre Mendes. Todos os
            direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacidade"
              className="text-xs text-white/40 hover:text-white/60 transition-colors"
            >
              Privacidade
            </Link>
            <Link
              href="/termos"
              className="text-xs text-white/40 hover:text-white/60 transition-colors"
            >
              Termos
            </Link>
          </div>
        </div>
      </div>

      {/* Gold accent bottom */}
      <div className="h-1 bg-gradient-to-r from-accent-dark via-accent to-accent-dark" />
    </footer>
  );
}
