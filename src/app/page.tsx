import Link from "next/link";
import Image from "next/image";
import {
  Play,
  ArrowRight,
  MapPin,
  Globe,
  Music,
  BookOpen,
  Heart,
  Mic,
  Headphones,
  Users,
  Plane,
  Star,
  Church,
  Video,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CountdownTimer from "@/components/CountdownTimer";
import HeroCarousel from "@/components/HeroCarousel";

const heroSlides = [
  {
    image: "/images/pastor-alexandre-portrait.jpg",
    label: "Pastor &middot; Pregador &middot; Cantor",
    title: "Alexandre",
    titleAccent: "Mendes",
    description:
      "Quase 30 anos dedicado à Palavra de Deus. Uma vida de fé, adoração e serviço transformando milhares de vidas.",
    cta: { text: "Conheça Minha História", href: "/sobre" },
    ctaSecondary: { text: "Assistir Pregações", href: "/ministerio" },
  },
  {
    image: "/images/pastor-alexandre-guitar-israel.jpg",
    label: "Historiador &middot; Pesquisador &middot; Adorador",
    title: "Pise Onde",
    titleAccent: "Jesus Pisou",
    description:
      "Mais de 25 anos percorrendo a Terra Santa como historiador e pesquisador. Não é turismo — é uma experiência que transforma sua fé para sempre. Chegou a sua vez.",
    cta: { text: "Quero Ir a Israel", href: "/israel" },
    ctaSecondary: null,
  },
  {
    image: "/images/israel/jordan-river-group.jpg",
    label: "Templo dos Milagres &middot; Malden, MA",
    title: "Minha",
    titleAccent: "Igreja",
    description:
      "Fundador do Templo dos Milagres desde 1996. Uma comunidade de fé, cura e restauração espiritual no coração de Massachusetts.",
    cta: { text: "Conheça a TDM Church", href: "https://tdmchurch.com" },
    ctaSecondary: { text: "Cultos Ao Vivo", href: "/cultos" },
  },
  {
    image: "/images/israel/galilee-teaching-2.jpg",
    label: "Podcast &middot; Entrevistas &middot; Conversas de Fé",
    title: "TDM",
    titleAccent: "Talk",
    description:
      "Conversas profundas sobre fé, liderança e propósito com os maiores nomes do Brasil e do mundo. Próximo episódio: Tiago Brunet.",
    cta: { text: "Ouvir Episódios", href: "/tdm-talk" },
    ctaSecondary: null,
  },
  {
    image: "/images/israel/jordan-baptism-5.jpg",
    label: "Pregador Internacional &middot; Cantor &middot; Adorador",
    title: "Mensagens que",
    titleAccent: "Transformam",
    description:
      "Pregações poderosas em conferências ao redor do mundo, levando a Palavra de Deus com autoridade, paixão e unção.",
    cta: { text: "Assistir Mensagens", href: "/ministerio" },
    ctaSecondary: null,
  },
];

const stats = [
  { number: "30", label: "Anos de Ministério", suffix: "" },
  { number: "50", label: "Viagens a Israel", suffix: "+" },
  { number: "2x", label: "Por Ano na Terra Santa", suffix: "" },
  { number: "1000", label: "Vidas Transformadas", suffix: "+" },
];

const ministryHighlights = [
  {
    title: "Pregador Internacional",
    description:
      "Mensagens poderosas em conferências ao redor do mundo, levando a Palavra de Deus com autoridade e paixão.",
    icon: Globe,
  },
  {
    title: "Cantor & Adorador",
    description:
      "Um ministério de louvor que toca os corações e conduz a igreja à presença de Deus.",
    icon: Music,
  },
  {
    title: "Especialista em Israel",
    description:
      "Quase 30 anos percorrendo a Terra Santa. Um conhecimento bíblico e histórico que só décadas de experiência podem construir.",
    icon: MapPin,
  },
  {
    title: "Pastor & Fundador",
    description:
      "Fundador do Templo dos Milagres em 1996. Quase 30 anos pastoreando e transformando vidas em Malden, MA.",
    icon: BookOpen,
  },
];

export default function Home() {
  return (
    <>
      {/* ==================== HERO CAROUSEL ==================== */}
      <HeroCarousel
        slides={heroSlides.map((s) => ({ src: s.image, alt: s.title }))}
        interval={6000}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40 w-full">
          <div className="max-w-3xl">
            <p
              className="text-accent text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-6"
              dangerouslySetInnerHTML={{ __html: heroSlides[0].label }}
            />

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight text-white font-display">
              {heroSlides[0].title}
              <br />
              <span className="text-accent">{heroSlides[0].titleAccent}</span>
            </h1>

            <p className="mt-8 text-base sm:text-lg text-white/60 max-w-lg leading-relaxed">
              {heroSlides[0].description}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href={heroSlides[0].cta.href}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-colors text-base"
              >
                {heroSlides[0].cta.text}
              </Link>
              {heroSlides[0].ctaSecondary && (
                <Link
                  href={heroSlides[0].ctaSecondary.href}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/0 text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-base border border-white/30"
                >
                  {heroSlides[0].ctaSecondary.text}
                </Link>
              )}
            </div>
          </div>
        </div>
      </HeroCarousel>

      {/* ==================== QUICK NAV CARDS ==================== */}
      <section className="bg-black py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                icon: Plane,
                title: "Viagem a Israel",
                desc: "Próxima viagem — 37 vagas",
                href: "/israel",
                accent: true,
              },
              {
                icon: Video,
                title: "Mensagens",
                desc: "Pregações e conferências",
                href: "/ministerio",
                accent: false,
              },
              {
                icon: Church,
                title: "Minha Igreja",
                desc: "TDM Church — Malden, MA",
                href: "https://tdmchurch.com",
                accent: false,
              },
              {
                icon: Mic,
                title: "TDM Talk",
                desc: "Podcast — Tiago Brunet",
                href: "/tdm-talk",
                accent: false,
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg transition-all duration-300 ${
                  item.accent
                    ? "bg-accent/10 border border-accent/20 hover:bg-accent/20"
                    : "bg-white/5 border border-white/5 hover:bg-white/10"
                }`}
              >
                <item.icon
                  className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 ${
                    item.accent ? "text-accent" : "text-white/50"
                  }`}
                />
                <div className="min-w-0">
                  <p
                    className={`font-bold text-xs sm:text-sm truncate ${
                      item.accent ? "text-accent" : "text-white"
                    }`}
                  >
                    {item.title}
                  </p>
                  <p className="text-white/40 text-[10px] sm:text-xs truncate">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ABOUT PREVIEW ==================== */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                A Jornada
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black font-display leading-[1.05]">
                Uma vida dedicada
                <br />à <span className="italic">Palavra de Deus</span>
              </h2>
              <div className="w-16 h-px bg-accent mt-8 mb-8" />
              <p className="text-base sm:text-lg text-stone-500 leading-relaxed">
                Em 1996, ainda jovem, Alexandre Mendes chegou aos Estados Unidos
                com um chamado que iria transformar milhares de vidas. Com uma
                paixão inabalável pelo estudo da Palavra de Deus, ele iniciou
                seu ministério através de cruzadas e campanhas de milagres que
                deram origem ao Templo dos Milagres.
              </p>
              <p className="mt-4 text-base sm:text-lg text-stone-500 leading-relaxed">
                Casado com Rebecca, pai dedicado, pregador internacional e
                cantor, Alexandre é acima de tudo um homem de oração que chama
                Israel de sua segunda casa.
              </p>
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 mt-8 text-black font-semibold hover:text-accent transition-colors group text-sm uppercase tracking-wider"
              >
                Leia a história completa
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[3/4] overflow-hidden shadow-2xl">
                <Image
                  src="/images/pastor-alexandre-guitar-israel.jpg"
                  alt="Pastor Alexandre tocando violão nas ruínas de Cafarnaum, Israel"
                  fill
                  className="object-cover sm:object-top"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-black text-white p-6 sm:p-8">
                <p className="text-4xl sm:text-5xl font-extrabold font-display">30</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 mt-1">
                  Anos de
                  <br />
                  Ministério
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ISRAEL — FULL BLEED ==================== */}
      <section className="relative py-24 sm:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/israel/jordan-river-group.jpg"
            alt="Grupo no Rio Jordão"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                Historiador &middot; Pesquisador &middot; 25+ Anos na Terra Santa
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.05]">
                Pise Onde
                <br />
                <span className="text-accent italic">Jesus Pisou</span>
              </h2>
              <div className="w-12 h-px bg-accent mt-6 mb-6" />
              <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                O Pastor Alexandre não é um guia turístico — é um{" "}
                <strong className="text-white">historiador e pesquisador</strong>{" "}
                que dedicou mais de 25 anos a estudar e viver a Bíblia na terra
                onde ela foi escrita. Mais de 50 viagens. Milhares de vidas
                transformadas. Chegou a sua vez.
              </p>

              {/* Spots counter */}
              <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm border border-accent/20">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-white font-semibold text-sm">
                    Vagas — Próxima Viagem
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-accent font-display">
                      37
                    </span>
                    <span className="text-white/40 text-sm">/ 100</span>
                  </div>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-accent rounded-full h-2"
                    style={{ width: "63%" }}
                  />
                </div>
              </div>

              <div className="mt-6">
                <CountdownTimer
                  targetDate="2026-10-15T00:00:00"
                  label="Contagem Regressiva"
                  light
                  size="sm"
                />
              </div>

              <div className="mt-8">
                <Link
                  href="/israel"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-colors text-base"
                >
                  Quero Ir a Israel
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Photo grid with guitar photo */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] overflow-hidden col-span-2 group">
                <Image
                  src="/images/pastor-alexandre-guitar-israel.jpg"
                  alt="Pastor Alexandre tocando violão nas ruínas de Cafarnaum, Israel"
                  fill
                  className="object-cover sm:object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-bold font-display text-lg">
                    Cafarnaum, Israel
                  </p>
                  <p className="text-white/60 text-sm">
                    Adoração nas ruínas onde Jesus ensinou
                  </p>
                </div>
              </div>
              <div className="relative aspect-[3/4] overflow-hidden group">
                <Image
                  src="/images/israel/jordan-baptism-1.jpg"
                  alt="Batismo no Rio Jordão"
                  fill
                  className="object-cover sm:object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden group">
                <Image
                  src="/images/israel/jordan-baptism-2.jpg"
                  alt="Batismo emocional no Jordão"
                  fill
                  className="object-cover sm:object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="py-10 sm:py-14 bg-accent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl sm:text-5xl font-extrabold text-black font-display">
                  {stat.number}
                  <span className="text-black/40">{stat.suffix}</span>
                </p>
                <p className="text-sm text-black/60 mt-1 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TDM TALK PODCAST ==================== */}
      <section className="py-24 sm:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Mic className="w-5 h-5 text-black" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
                  Podcast
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
                TDM <span className="italic">Talk</span>
              </h2>
              <p className="mt-6 text-white/50 text-base sm:text-lg leading-relaxed">
                Conversas profundas sobre fé, liderança e propósito com os
                maiores nomes do Brasil e do mundo.
              </p>

              <div className="mt-10 p-6 sm:p-8 bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 text-accent" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
                    Próximo Episódio
                  </p>
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Tiago Brunet
                </h3>
                <p className="text-white/40 text-sm mt-2 leading-relaxed">
                  Autor best-seller, fundador do Instituto Destiny e da Casa de
                  Destino. Coach de líderes, teólogo e palestrante que impacta
                  milhões de vidas.
                </p>
                <Link
                  href="/tdm-talk"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 bg-white text-black text-sm font-bold rounded-lg hover:bg-white/90 transition-colors"
                >
                  <Headphones className="w-4 h-4" />
                  Ver Episódios
                </Link>
              </div>
            </div>

            <div className="relative aspect-square max-w-md mx-auto overflow-hidden">
              <Image
                src="/images/israel/galilee-teaching-2.jpg"
                alt="Pastor Alexandre — TDM Talk"
                fill
                className="object-cover sm:object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="w-14 h-14 bg-accent/30 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                  <Headphones className="w-7 h-7 text-white" />
                </div>
                <p className="text-white font-bold text-3xl font-display">
                  TDM <span className="italic">Talk</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MINISTRY HIGHLIGHTS ==================== */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-3">
              Ministério
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black font-display">
              Múltiplos Chamados, Uma <span className="italic">Missão</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {ministryHighlights.map((item) => (
              <div
                key={item.title}
                className="group p-8 sm:p-10 bg-warm-50 border border-stone-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-black group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-stone-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAMILY ==================== */}
      <section className="py-20 sm:py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="aspect-[4/3] overflow-hidden shadow-xl relative">
              <Image
                src="/images/pastor-alexandre-headshot.jpg"
                alt="Pastor Alexandre Mendes"
                fill
                className="object-cover sm:object-top"
              />
            </div>

            <div>
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                Família
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black font-display">
                Pai, Marido &amp;
                <br />
                Servo de <span className="italic">Deus</span>
              </h2>
              <div className="w-12 h-px bg-accent mt-6 mb-6" />
              <p className="text-base sm:text-lg text-stone-500 leading-relaxed">
                Casado com Rebecca Huewes, Alexandre constrói seu ministério
                sobre a base sólida da família. Juntos, eles lideram o Templo
                dos Milagres com amor, dedicação e a convicção de que a família
                é o primeiro ministério.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA — FULL BLEED ==================== */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/israel/jordan-baptism-5.jpg"
            alt="Abraço emocionante no Jordão"
            fill
            className="object-cover sm:object-top"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent mb-4">
            Chegou a Sua Vez
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Pise Onde Jesus Pisou.
            <br />
            <span className="italic text-accent">Toque Onde Jesus Tocou.</span>
          </h2>
          <p className="mt-6 text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Seja batizado nas mesmas águas do Rio Jordão. Caminhe pela Via
            Dolorosa. Ore no Muro das Lamentações. Aberto para TODOS —
            qualquer pessoa, de qualquer igreja.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 text-accent">
            <Users className="w-5 h-5" />
            <span className="text-lg font-bold">37 vagas restantes</span>
          </div>

          <div className="mt-8">
            <Link
              href="/israel"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-colors text-lg"
            >
              Quero Ir a Israel
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
