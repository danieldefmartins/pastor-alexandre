import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Plane,
  Globe,
  Users,
  Star,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Agenda",
  description:
    "Veja a agenda de pregações e eventos do Pastor Alexandre Mendes. Conferências, congressos e viagens a Israel. Agende uma participação.",
};

const upcomingEvents = [
  {
    date: "15-22 Out 2026",
    title: "Viagem a Israel — Terra Santa",
    location: "Jerusalém, Tel Aviv, Galileia",
    type: "Viagem",
    description:
      "8 dias pela Terra Santa com o Pastor Alexandre. Batismo no Rio Jordão, Monte das Oliveiras, Mar da Galileia e muito mais.",
    highlight: true,
    spots: "37 vagas restantes",
    link: "/israel",
  },
  {
    date: "Jun 2026",
    title: "Conferência de Fé & Poder",
    location: "TDM Church — Malden, MA",
    type: "Conferência",
    description:
      "Três noites de pregação poderosa e adoração intensa. Palestrantes nacionais e internacionais.",
    highlight: false,
  },
  {
    date: "Jul 2026",
    title: "Congresso de Líderes",
    location: "Boston, MA",
    type: "Congresso",
    description:
      "Treinamento e capacitação de líderes com foco em liderança bíblica e visão ministerial.",
    highlight: false,
  },
  {
    date: "Ago 2026",
    title: "Cruzada de Milagres",
    location: "Newark, NJ",
    type: "Cruzada",
    description:
      "Noite de milagres e manifestação do poder de Deus. Evento aberto ao público.",
    highlight: false,
  },
  {
    date: "Set 2026",
    title: "Conferência Internacional",
    location: "São Paulo, Brasil",
    type: "Internacional",
    description:
      "Pastor Alexandre ministra em uma das maiores conferências do Brasil.",
    highlight: false,
  },
  {
    date: "Nov 2026",
    title: "Noite de Adoração",
    location: "TDM Church — Malden, MA",
    type: "Adoração",
    description:
      "Uma noite especial de louvor e adoração com o Pastor Alexandre e convidados especiais.",
    highlight: false,
  },
];

const weeklySchedule = [
  {
    day: "Domingo",
    time: "10:00 AM",
    event: "Culto de Celebração",
    location: "TDM Church",
  },
  {
    day: "Quarta-feira",
    time: "7:30 PM",
    event: "Estudo Bíblico",
    location: "TDM Church",
  },
  {
    day: "Sexta-feira",
    time: "7:30 PM",
    event: "Culto de Adoração",
    location: "TDM Church",
  },
];

export default function AgendaPage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[60vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(201,168,76,0.08),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                Agenda 2026
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-white font-display">
              Próximos
              <br />
              <span className="text-accent">Eventos</span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-lg leading-relaxed">
              Acompanhe a agenda de pregações, conferências e viagens do
              Pastor Alexandre Mendes. Não perca nenhum evento.
            </p>

            <div className="mt-10">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent-light transition-colors text-base"
              >
                Convite para Pregar
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== UPCOMING EVENTS ==================== */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Eventos"
            title="Próximos Compromissos"
            description="Conferências, congressos, cruzadas e viagens programadas."
          />

          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                  event.highlight
                    ? "bg-accent/5 border-accent/30 hover:shadow-xl"
                    : "bg-white border-stone-100 hover:border-accent/30 hover:shadow-lg"
                }`}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                    {/* Date badge */}
                    <div className="shrink-0 sm:w-32 text-center sm:text-left">
                      <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-md">
                        {event.type}
                      </span>
                      <p className="text-lg font-bold text-primary mt-2">
                        {event.date}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-1.5 text-stone-500 text-sm">
                        <MapPin className="w-3.5 h-3.5" />
                        {event.location}
                      </div>
                      <p className="mt-3 text-stone-500 leading-relaxed text-sm">
                        {event.description}
                      </p>
                      {event.spots && (
                        <div className="mt-3 flex items-center gap-2">
                          <Users className="w-4 h-4 text-accent" />
                          <span className="text-accent font-semibold text-sm">
                            {event.spots}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Action */}
                    {event.link && (
                      <div className="shrink-0">
                        <Link
                          href={event.link}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-primary text-sm font-semibold rounded-lg hover:bg-accent-light transition-colors"
                        >
                          Ver Detalhes
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                {event.highlight && (
                  <div className="bg-accent/10 px-6 sm:px-8 py-3 border-t border-accent/20">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-accent" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Evento Destaque
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WEEKLY SCHEDULE ==================== */}
      <section className="py-20 sm:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Cultos Semanais"
            title="Programação da Igreja"
            description="Venha adorar conosco no Templo dos Milagres em Malden, MA."
            light
          />

          <div className="grid sm:grid-cols-3 gap-6">
            {weeklySchedule.map((item) => (
              <div
                key={item.day}
                className="group p-6 sm:p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-300 text-center"
              >
                <p className="text-accent font-bold text-xl">{item.day}</p>
                <div className="flex items-center justify-center gap-1.5 mt-2 text-white/60 text-sm">
                  <Clock className="w-3.5 h-3.5" />
                  {item.time}
                </div>
                <p className="text-white font-semibold mt-4">{item.event}</p>
                <div className="flex items-center justify-center gap-1.5 mt-2 text-white/40 text-xs">
                  <MapPin className="w-3 h-3" />
                  {item.location}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-white/60 text-sm">
              <MapPin className="w-4 h-4 inline mr-1" />
              539 Salem St, Malden, MA 02148
            </p>
          </div>
        </div>
      </section>

      {/* ==================== BOOKING CTA ==================== */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-cream rounded-2xl border border-stone-200 p-8 sm:p-12 text-center">
            <Globe className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary font-display">
              Convide o Pastor Alexandre
            </h2>
            <p className="mt-4 text-stone-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Deseja convidar o Pastor Alexandre Mendes para pregar na sua
              igreja, conferência ou evento? Entre em contato com nossa equipe.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent-light transition-colors text-base"
              >
                Enviar Convite
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+17814803125"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors text-base"
              >
                (781) 480-3125
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="bg-accent py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary font-display">
            Próxima Viagem a Israel
          </h2>
          <p className="mt-3 text-primary/70 text-base sm:text-lg">
            Outubro 2026 — 37 vagas restantes. Reserve a sua agora.
          </p>
          <div className="mt-6">
            <Link
              href="/israel"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors text-base"
            >
              <Plane className="w-5 h-5" />
              Reservar Minha Vaga
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
