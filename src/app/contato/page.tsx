import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  Globe,
  ExternalLink,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o Pastor Alexandre Mendes. Convites para pregação, informações sobre viagens a Israel e atendimento pastoral. Malden, MA.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(781) 480-3125",
    href: "tel:+17814803125",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contato@pastoralexandre.com",
    href: "mailto:contato@pastoralexandre.com",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "539 Salem St, Malden, MA 02148",
    href: "https://maps.google.com/?q=539+Salem+St+Malden+MA+02148",
  },
];

const socialLinks = [
  {
    name: "YouTube",
    handle: "@alexandremendespastor",
    url: "https://youtube.com/@alexandremendespastor",
  },
  {
    name: "Instagram",
    handle: "@pastoralexandre",
    url: "https://instagram.com/pastoralexandre",
  },
  {
    name: "Facebook",
    handle: "Pastor Alexandre Mendes",
    url: "https://facebook.com/pastoralexandremendes",
  },
];

export default function ContatoPage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[50vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.06),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-36 w-full text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Mail className="w-5 h-5 text-accent" />
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Fale Conosco
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-white font-display">
            Entre em
            <br />
            <span className="text-accent">Contato</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-xl mx-auto leading-relaxed">
            Estamos aqui para ajudar. Envie uma mensagem, ligue ou visite-nos
            no Templo dos Milagres em Malden, MA.
          </p>
        </div>
      </section>

      {/* ==================== CONTACT INFO CARDS ==================== */}
      <section className="bg-accent py-10 sm:py-12">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Endereço" ? "_blank" : undefined}
                rel={
                  item.label === "Endereço"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center gap-4 p-5 bg-white rounded-2xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                    {item.label}
                  </p>
                  <p className="text-primary font-bold text-sm mt-0.5">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FORM + DETAILS ==================== */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <SectionHeading
                label="Mensagem"
                title="Envie Sua Mensagem"
                center={false}
              />

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-stone-700 text-sm font-medium mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      className="w-full px-4 py-3.5 bg-white border border-stone-200 rounded-xl text-primary placeholder-stone-300 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3.5 bg-white border border-stone-200 rounded-xl text-primary placeholder-stone-300 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-stone-700 text-sm font-medium mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      placeholder="(000) 000-0000"
                      className="w-full px-4 py-3.5 bg-white border border-stone-200 rounded-xl text-primary placeholder-stone-300 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 text-sm font-medium mb-2">
                      Assunto *
                    </label>
                    <select className="w-full px-4 py-3.5 bg-white border border-stone-200 rounded-xl text-stone-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all">
                      <option value="">Selecione...</option>
                      <option value="pregacao">
                        Convite para Pregação
                      </option>
                      <option value="israel">Viagem a Israel</option>
                      <option value="pastoral">
                        Atendimento Pastoral
                      </option>
                      <option value="musica">Ministério Musical</option>
                      <option value="podcast">TDM Talk Podcast</option>
                      <option value="outro">Outro Assunto</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 text-sm font-medium mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Escreva sua mensagem aqui..."
                    className="w-full px-4 py-3.5 bg-white border border-stone-200 rounded-xl text-primary placeholder-stone-300 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent-light transition-colors text-base w-full sm:w-auto"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Booking inquiries */}
              <div className="bg-cream rounded-2xl border border-stone-200 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-bold text-primary">
                    Convites para Pregação
                  </h3>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Para convidar o Pastor Alexandre para pregar na sua igreja,
                  conferência ou evento, envie uma mensagem com os detalhes:
                  data, local, tipo de evento e expectativa de público.
                </p>
                <Link
                  href="/ministerio"
                  className="inline-flex items-center gap-2 mt-4 text-accent font-semibold text-sm hover:text-accent-dark transition-colors group"
                >
                  Ver ministério
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Church hours */}
              <div className="bg-white rounded-2xl border border-stone-100 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-bold text-primary">
                    Horários dos Cultos
                  </h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Domingo</span>
                    <span className="font-semibold text-primary">
                      10:00 AM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Quarta-feira</span>
                    <span className="font-semibold text-primary">
                      7:30 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Sexta-feira</span>
                    <span className="font-semibold text-primary">
                      7:30 PM
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100">
                  <div className="flex items-start gap-2 text-stone-500 text-xs">
                    <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    539 Salem St, Malden, MA 02148
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="bg-white rounded-2xl border border-stone-100 p-6 sm:p-8">
                <h3 className="text-lg font-bold text-primary mb-4">
                  Redes Sociais
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-accent/5 transition-colors group"
                    >
                      <div>
                        <p className="font-semibold text-primary text-sm group-hover:text-accent transition-colors">
                          {social.name}
                        </p>
                        <p className="text-stone-400 text-xs">
                          {social.handle}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-stone-300 group-hover:text-accent transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MAP PLACEHOLDER ==================== */}
      <section className="bg-stone-100">
        <div className="aspect-[21/6] sm:aspect-[21/4] bg-gradient-to-br from-stone-200 to-stone-100 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-10 h-10 text-accent/30 mx-auto mb-2" />
            <p className="text-stone-400 text-sm font-medium">
              539 Salem St, Malden, MA 02148
            </p>
            <p className="text-stone-300 text-xs mt-1">
              Google Maps embed aqui
            </p>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="bg-accent py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary font-display">
            Prefere Ligar?
          </h2>
          <p className="mt-3 text-primary/70 text-base sm:text-lg">
            Nossa equipe está pronta para atender você.
          </p>
          <div className="mt-6">
            <a
              href="tel:+17814803125"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors text-base"
            >
              <Phone className="w-5 h-5" />
              (781) 480-3125
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
