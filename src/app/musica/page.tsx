import type { Metadata } from "next";
import Link from "next/link";
import {
  Music,
  Play,
  ArrowRight,
  Heart,
  Mic,
  ExternalLink,
  Disc3,
  ListMusic,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Musica",
  description:
    "Conheça o ministério musical do Pastor Alexandre Mendes. Louvor e adoração que tocam os corações e conduzem à presença de Deus.",
};

const albums = [
  {
    title: "Na Presença do Rei",
    year: "2024",
    tracks: 12,
  },
  {
    title: "Terra Santa",
    year: "2022",
    tracks: 10,
  },
  {
    title: "Milagres",
    year: "2020",
    tracks: 11,
  },
];

export default function MusicaPage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[70vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-stone-900 to-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.08),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Music className="w-5 h-5 text-accent" />
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                Ministério de Louvor
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-white font-display">
              Adoração que
              <br />
              <span className="text-accent">Transforma</span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-xl mx-auto leading-relaxed">
              Um ministério de louvor que toca os corações e conduz a igreja à
              presença de Deus. Cada canção é uma oração, cada nota é um ato
              de adoração.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://youtube.com/@alexandremendespastor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent-light transition-colors text-base"
              >
                <Play className="w-5 h-5" />
                Assistir no YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WORSHIP STYLE ==================== */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                label="Adoração"
                title="Louvor que Vem do Coração"
                center={false}
              />
              <div className="space-y-4 text-base sm:text-lg text-stone-600 leading-relaxed">
                <p>
                  O ministério musical do Pastor Alexandre Mendes nasce de um
                  lugar profundo de intimidade com Deus. Não é apenas música
                  — é uma expressão genuína de adoração que conduz a igreja
                  a um encontro real com o Espírito Santo.
                </p>
                <p>
                  Com uma voz que transmite emoção e unção, Alexandre combina
                  a tradição dos hinos sagrados com uma sensibilidade
                  contemporânea que alcança todas as gerações. Cada culto,
                  cada conferência, cada momento de louvor é uma oportunidade
                  de tocar o céu.
                </p>
                <p>
                  Suas músicas são inspiradas pela Palavra de Deus e pela
                  experiência de caminhar pela Terra Santa. Melodias que
                  carregam a profundidade de quem conhece cada página das
                  Escrituras e vive cada versículo com intensidade.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <Mic className="w-16 h-16 text-accent/30 mx-auto mb-4" />
                  <p className="text-stone-400 text-sm">
                    Foto do Pastor Alexandre cantando
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ALBUMS / DISCOGRAFIA ==================== */}
      <section className="py-20 sm:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Discografia"
            title="Álbuns & Músicas"
            description="Ouça as músicas do Pastor Alexandre em todas as plataformas digitais."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album) => (
              <div
                key={album.title}
                className="group bg-white/5 rounded-2xl border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-square bg-gradient-to-br from-accent/5 to-primary-light/10 flex items-center justify-center">
                  <Disc3 className="w-20 h-20 text-accent/20 group-hover:text-accent/40 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {album.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-white/50 text-sm">
                    <span>{album.year}</span>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span>{album.tracks} faixas</span>
                  </div>
                  <button className="mt-4 inline-flex items-center gap-2 text-accent text-sm font-semibold hover:text-accent-light transition-colors group/btn">
                    <Play className="w-4 h-4" />
                    Ouvir
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SPOTIFY / PLAYER EMBED ==================== */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Ouça Agora"
            title="Plataformas de Música"
            description="As músicas do Pastor Alexandre estão disponíveis nas principais plataformas digitais."
          />

          {/* Spotify embed placeholder */}
          <div className="bg-stone-100 rounded-2xl border border-stone-200 p-8 sm:p-12 text-center">
            <ListMusic className="w-16 h-16 text-accent/30 mx-auto mb-4" />
            <p className="text-stone-500 text-lg font-medium">
              Player do Spotify
            </p>
            <p className="text-stone-400 text-sm mt-2">
              Embed do Spotify será integrado aqui
            </p>
          </div>

          {/* Platform links */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            <a
              href="https://youtube.com/@alexandremendespastor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-5 bg-white rounded-2xl border border-stone-100 hover:border-accent/30 hover:shadow-lg transition-all group"
            >
              <Play className="w-6 h-6 text-accent" />
              <span className="font-bold text-primary group-hover:text-accent transition-colors">
                YouTube
              </span>
              <ExternalLink className="w-4 h-4 text-stone-300" />
            </a>
            <div className="flex items-center justify-center gap-3 p-5 bg-white rounded-2xl border border-stone-100 hover:border-accent/30 hover:shadow-lg transition-all group cursor-pointer">
              <Music className="w-6 h-6 text-accent" />
              <span className="font-bold text-primary group-hover:text-accent transition-colors">
                Spotify
              </span>
              <ExternalLink className="w-4 h-4 text-stone-300" />
            </div>
            <div className="flex items-center justify-center gap-3 p-5 bg-white rounded-2xl border border-stone-100 hover:border-accent/30 hover:shadow-lg transition-all group cursor-pointer">
              <Music className="w-6 h-6 text-accent" />
              <span className="font-bold text-primary group-hover:text-accent transition-colors">
                Apple Music
              </span>
              <ExternalLink className="w-4 h-4 text-stone-300" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WORSHIP PHOTOS ==================== */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Galeria"
            title="Momentos de Adoração"
            description="Instantes capturados durante cultos, conferências e momentos de louvor."
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className={`relative group rounded-2xl overflow-hidden bg-gradient-to-br from-accent/5 to-primary/5 flex items-center justify-center ${
                  i <= 2 ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <div className="text-center p-4">
                  <Heart className="w-8 h-8 text-accent/20 mx-auto mb-2" />
                  <p className="text-stone-400 text-xs">
                    Foto de adoração {i}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="bg-accent py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary font-display">
            Acompanhe o Ministério Musical
          </h2>
          <p className="mt-3 text-primary/70 text-base sm:text-lg">
            Inscreva-se no canal do YouTube para não perder nenhum louvor.
          </p>
          <div className="mt-6">
            <a
              href="https://youtube.com/@alexandremendespastor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors text-base"
            >
              <Play className="w-5 h-5" />
              YouTube @alexandremendespastor
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
