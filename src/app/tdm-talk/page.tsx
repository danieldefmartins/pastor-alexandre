import type { Metadata } from "next";
import Link from "next/link";
import {
  Mic,
  Headphones,
  Play,
  ArrowRight,
  Star,
  Clock,
  ExternalLink,
  Calendar,
  Users,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "TDM Talk",
  description:
    "TDM Talk Podcast — conversas profundas sobre fé, liderança e propósito com o Pastor Alexandre Mendes. Próximo episódio: Tiago Brunet.",
};

const episodes = [
  {
    number: "EP 12",
    title: "A Força da Oração na Liderança",
    guest: "Pastor Alexandre Mendes",
    duration: "45 min",
    description:
      "Como a oração diária transforma a forma como lideramos e servimos ao próximo.",
  },
  {
    number: "EP 11",
    title: "Israel: Mais que Uma Viagem",
    guest: "Pastor Alexandre Mendes",
    duration: "38 min",
    description:
      "26 anos viajando à Terra Santa e como cada viagem revela algo novo sobre as Escrituras.",
  },
  {
    number: "EP 10",
    title: "Família e Ministério em Equilíbrio",
    guest: "Rebecca Huewes",
    duration: "42 min",
    description:
      "Rebecca compartilha como equilibrar a vida familiar com as demandas do ministério.",
  },
  {
    number: "EP 09",
    title: "A Nova Geração e a Fé",
    guest: "Convidado Especial",
    duration: "35 min",
    description:
      "Como alcançar a nova geração com uma mensagem relevante sem perder a essência da Palavra.",
  },
  {
    number: "EP 08",
    title: "Empreendedorismo com Propósito",
    guest: "Convidado Especial",
    duration: "50 min",
    description:
      "A intersecção entre fé e negócios, e como empreender com princípios bíblicos.",
  },
  {
    number: "EP 07",
    title: "Adoração: Mais que Música",
    guest: "Pastor Alexandre Mendes",
    duration: "40 min",
    description:
      "O verdadeiro significado da adoração e como viver uma vida de louvor em todas as áreas.",
  },
];

const platforms = [
  { name: "YouTube", icon: Play },
  { name: "Spotify", icon: Headphones },
  { name: "Apple Podcasts", icon: Mic },
];

export default function TdmTalkPage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[70vh] flex items-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-primary to-stone-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(201,168,76,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                  <Mic className="w-5 h-5 text-primary" />
                </div>
                <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                  Podcast
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-white font-display">
                TDM
                <br />
                <span className="text-accent">Talk</span>
              </h1>

              <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-lg leading-relaxed">
                Conversas profundas sobre fé, liderança e propósito. O espaço
                onde grandes nomes compartilham suas histórias, ensinamentos
                e a visão que Deus tem para suas vidas.
              </p>

              {/* Platform links */}
              <div className="mt-8 flex flex-wrap gap-3">
                {platforms.map((platform) => (
                  <div
                    key={platform.name}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors text-sm border border-white/10 cursor-pointer"
                  >
                    <platform.icon className="w-4 h-4 text-accent" />
                    {platform.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Podcast cover art */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-accent/20 via-earth/10 to-primary-light/30 border border-white/10 flex items-center justify-center shadow-2xl">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Headphones className="w-12 h-12 text-accent" />
                  </div>
                  <p className="text-white font-bold text-3xl font-display">
                    TDM Talk
                  </p>
                  <p className="text-white/40 text-sm mt-2">
                    Podcast cover art
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURED: TIAGO BRUNET ==================== */}
      <section className="py-20 sm:py-28 bg-accent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-primary" />
                <p className="text-xs font-semibold uppercase tracking-wider text-primary/70">
                  Episodio Especial
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary font-display">
                Tiago Brunet
              </h2>
              <p className="mt-4 text-primary/70 text-base sm:text-lg leading-relaxed">
                Autor best-seller brasileiro, fundador do{" "}
                <strong>Instituto Destiny</strong> e da{" "}
                <strong>Casa de Destino</strong>. CEO, coach de líderes,
                teólogo e palestrante que impacta milhões de vidas ao redor
                do mundo com sua mensagem de propósito e excelência.
              </p>
              <p className="mt-4 text-primary/70 text-base sm:text-lg leading-relaxed">
                Casado com Jeanine e pai de 4 filhos, Tiago é uma das vozes
                mais influentes da nova geração de líderes cristãos. Neste
                episódio especial, ele compartilha sua jornada, seus
                princípios de liderança e como viver uma vida de destino.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors text-base">
                  <Play className="w-5 h-5" />
                  Assistir Episódio
                </button>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-stone-50 transition-colors text-base">
                  <Headphones className="w-5 h-5" />
                  Ouvir no Spotify
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <Users className="w-16 h-16 text-primary/20 mx-auto mb-4" />
                  <p className="text-primary/40 text-sm">
                    Foto do Tiago Brunet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== EPISODE LIST ==================== */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Episodios"
            title="Todos os Episodios"
            description="Cada episódio é uma conversa que inspira, desafia e transforma."
          />

          <div className="space-y-4">
            {episodes.map((episode) => (
              <div
                key={episode.number}
                className="group bg-white rounded-2xl border border-stone-100 hover:border-accent/30 hover:shadow-lg transition-all duration-300 p-6 sm:p-8"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Play button */}
                  <div className="shrink-0 w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors cursor-pointer">
                    <Play className="w-6 h-6 text-accent ml-0.5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-accent">
                        {episode.number}
                      </span>
                      <span className="text-xs text-stone-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {episode.duration}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                      {episode.title}
                    </h3>
                    <p className="text-sm text-stone-500 mt-0.5">
                      Com {episode.guest}
                    </p>
                    <p className="text-sm text-stone-400 mt-2 leading-relaxed hidden sm:block">
                      {episode.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://youtube.com/@alexandremendespastor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-dark transition-colors group"
            >
              Ver todos os episodios no YouTube
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== PLATFORMS ==================== */}
      <section className="py-16 sm:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <SectionHeading
            label="Onde Ouvir"
            title="Disponível nas Principais Plataformas"
            light
          />

          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all cursor-pointer"
              >
                <platform.icon className="w-10 h-10 text-accent mx-auto mb-3" />
                <p className="text-white font-bold text-lg">
                  {platform.name}
                </p>
                <p className="text-white/40 text-sm mt-1">Em breve</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="bg-accent py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary font-display">
            Não Perca Nenhum Episódio
          </h2>
          <p className="mt-3 text-primary/70 text-base sm:text-lg">
            Inscreva-se no canal e ative as notificações para ser avisado
            sempre que um novo episódio sair.
          </p>
          <div className="mt-6">
            <a
              href="https://youtube.com/@alexandremendespastor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors text-base"
            >
              <Play className="w-5 h-5" />
              Inscrever-se no YouTube
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
