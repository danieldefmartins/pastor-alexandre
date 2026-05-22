import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  BookOpen,
  Users,
  ArrowRight,
  Play,
  Calendar,
  MapPin,
  Star,
  Heart,
  Flame,
  Crown,
  Shield,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Ministério",
  description:
    "Conheça o ministério internacional do Pastor Alexandre Mendes. Pregador poderoso que impacta o mundo através de conferências, cruzadas e mensagens transformadoras.",
};

const speakingTopics = [
  {
    title: "O Poder da Fé",
    description:
      "Mensagens que despertam a fé sobrenatural e liberam o poder de Deus na vida do crente.",
    icon: Flame,
  },
  {
    title: "Liderança Bíblica",
    description:
      "Princípios de liderança extraídos das Escrituras para pastores, líderes e empreendedores.",
    icon: Crown,
  },
  {
    title: "Israel e Profecia",
    description:
      "26 anos de estudo in loco sobre a Terra Santa, as profecias bíblicas e o plano de Deus para Israel.",
    icon: BookOpen,
  },
  {
    title: "Família e Propósito",
    description:
      "A restauração familiar como base para o cumprimento do propósito de Deus na terra.",
    icon: Heart,
  },
  {
    title: "Batalha Espiritual",
    description:
      "Estratégias bíblicas para vencer as batalhas do dia a dia com autoridade espiritual.",
    icon: Shield,
  },
  {
    title: "Avivamento e Adoração",
    description:
      "Um chamado à igreja para viver um avivamento genuíno através da adoração e da Palavra.",
    icon: Star,
  },
];

const pastEvents = [
  {
    title: "Conferência de Fé & Milagres",
    location: "Boston, MA",
    date: "2025",
    type: "Conferência",
  },
  {
    title: "Congresso Internacional de Líderes",
    location: "São Paulo, Brasil",
    date: "2025",
    type: "Congresso",
  },
  {
    title: "Cruzada de Milagres",
    location: "Newark, NJ",
    date: "2024",
    type: "Cruzada",
  },
  {
    title: "Conferência Profética",
    location: "Orlando, FL",
    date: "2024",
    type: "Conferência",
  },
  {
    title: "Encontro de Pastores",
    location: "Jerusalém, Israel",
    date: "2024",
    type: "Encontro",
  },
  {
    title: "Congresso de Adoração",
    location: "Miami, FL",
    date: "2023",
    type: "Congresso",
  },
];

export default function MinisterioPage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[70vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(201,168,76,0.1),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-5 h-5 text-accent" />
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                Ministério Internacional
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-white font-display">
              Impactando o Mundo
              <br />
              <span className="text-accent">com a Palavra</span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-lg leading-relaxed">
              Um ministério poderoso que atravessa fronteiras. Pastor Alexandre
              Mendes leva a Palavra de Deus com autoridade e paixão em
              conferências, cruzadas e congressos ao redor do mundo.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/agenda"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent-light transition-colors text-base"
              >
                <Calendar className="w-5 h-5" />
                Ver Agenda
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm text-base border border-white/20"
              >
                Convite para Pregar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT MINISTRY ==================== */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                label="O Chamado"
                title="Um Pregador que Transforma Vidas"
                center={false}
              />
              <div className="space-y-4 text-base sm:text-lg text-stone-600 leading-relaxed">
                <p>
                  O Pastor Alexandre Mendes carrega um chamado profundo para
                  pregar a Palavra de Deus com poder e unção. Desde 1996,
                  seu ministério tem impactado milhares de vidas através de
                  mensagens que desafiam, edificam e transformam.
                </p>
                <p>
                  Com uma combinação única de profundidade teológica,
                  experiência pastoral e vivência em Israel, Alexandre entrega
                  mensagens que conectam o texto bíblico à vida prática com
                  uma autoridade que vem de anos de estudo e oração.
                </p>
                <p>
                  Pregando em igrejas, conferências e congressos internacionais,
                  seu ministério continua a crescer, alcançando pessoas de
                  diferentes nações e denominações com uma mensagem de fé,
                  esperança e poder sobrenatural.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <Globe className="w-16 h-16 text-accent/30 mx-auto mb-4" />
                  <p className="text-stone-400 text-sm">
                    Foto do Pastor Alexandre pregando em conferência
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SPEAKING TOPICS ==================== */}
      <section className="py-20 sm:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Temas"
            title="Tópicos de Pregação"
            description="Mensagens profundas e transformadoras que tocam todas as áreas da vida cristã."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakingTopics.map((topic) => (
              <div
                key={topic.title}
                className="group p-6 sm:p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/30 transition-colors">
                  <topic.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                  {topic.title}
                </h3>
                <p className="mt-3 text-white/60 leading-relaxed text-sm">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PAST EVENTS ==================== */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Eventos"
            title="Conferências & Congressos"
            description="Alguns dos eventos onde o Pastor Alexandre tem pregado e impactado vidas ao redor do mundo."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div
                key={event.title}
                className="group bg-white rounded-2xl border border-stone-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                  <Globe className="w-12 h-12 text-accent/20" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 rounded-md">
                      {event.type}
                    </span>
                    <span className="text-xs text-stone-400">{event.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-2 text-stone-500 text-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    {event.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== VIDEO HIGHLIGHTS ==================== */}
      <section className="py-20 sm:py-28 bg-stone-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Destaques"
            title="Mensagens em Vídeo"
            description="Assista mensagens poderosas do Pastor Alexandre Mendes."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-accent/30 transition-all cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/40 transition-colors">
                    <Play className="w-7 h-7 text-accent ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-semibold text-sm">
                    Mensagem Destaque {i}
                  </p>
                  <p className="text-white/50 text-xs">Placeholder</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://youtube.com/@alexandremendespastor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-light transition-colors group"
            >
              Ver mais no YouTube
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== BOOKING CTA ==================== */}
      <section className="bg-accent py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary font-display">
            Convide o Pastor Alexandre para Pregar
          </h2>
          <p className="mt-3 text-primary/70 text-base sm:text-lg max-w-2xl mx-auto">
            Conferências, congressos, cruzadas e eventos especiais. Entre em
            contato para agendar uma participação do Pastor Alexandre no seu
            evento.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors text-base"
            >
              Solicitar Convite
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+17814803125"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-stone-50 transition-colors text-base"
            >
              Ligar: (781) 480-3125
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
