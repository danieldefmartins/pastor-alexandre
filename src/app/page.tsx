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
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CountdownTimer from "@/components/CountdownTimer";

const stats = [
  { number: "26", label: "Anos em Israel", suffix: "" },
  { number: "52", label: "Viagens Realizadas", suffix: "+" },
  { number: "30", label: "Anos de Ministério", suffix: "" },
  { number: "2x", label: "Por Ano", suffix: "" },
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
    title: "Guia de Israel",
    description:
      "26 anos conduzindo viagens à Terra Santa. Cada pedra conta uma história bíblica viva.",
    icon: MapPin,
  },
  {
    title: "Pastor & Líder",
    description:
      "Fundador do Templo dos Milagres em 1996. Quase 30 anos pastoreando e transformando vidas.",
    icon: BookOpen,
  },
];

export default function Home() {
  return (
    <>
      {/* ==================== HERO CINEMATIC ==================== */}
      <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
        {/* Background image — Israel landscape */}
        <div className="absolute inset-0">
          <Image
            src="/images/israel/jerusalem-group-1.jpg"
            alt="Pastor Alexandre em Israel"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40 w-full">
          <div className="max-w-3xl">
            <p className="text-accent text-sm sm:text-base font-semibold tracking-[0.3em] uppercase mb-6 animate-fade-in-up">
              Pastor &middot; Pregador &middot; Cantor &middot; Guia de Israel
            </p>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight text-white font-display">
              Alexandre
              <br />
              <span className="text-accent">Mendes</span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-lg leading-relaxed">
              Desde 1996 dedicado à Palavra de Deus. Uma vida de fé, adoração e
              serviço levando milhares de pessoas a conhecer a Terra Santa.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/israel"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent-light transition-colors text-base"
              >
                <Plane className="w-5 h-5" />
                Viagem a Israel
              </Link>
              <Link
                href="/sobre"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm text-base border border-white/20"
              >
                Conheça Minha História
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/30 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-accent/50 to-transparent" />
        </div>
      </section>

      {/* ==================== ABOUT PREVIEW ==================== */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                A Jornada
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary font-display leading-tight">
                Uma vida dedicada
                <br />à Palavra de Deus
              </h2>
              <p className="mt-6 text-base sm:text-lg text-stone-500 leading-relaxed">
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
                className="inline-flex items-center gap-2 mt-8 text-accent font-semibold hover:text-accent-dark transition-colors group"
              >
                Leia a história completa
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/pastor-alexandre-portrait.jpg"
                  alt="Pastor Alexandre Mendes"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-accent rounded-2xl shadow-xl p-5 text-center">
                <p className="text-3xl font-bold text-primary">30</p>
                <p className="text-xs text-primary/70 uppercase tracking-wider font-semibold">
                  Anos de
                  <br />
                  Ministério
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ISRAEL TRIP HIGHLIGHT ==================== */}
      <section className="relative py-20 sm:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/israel/jordan-river-group.jpg"
            alt="Grupo no Rio Jordão"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-primary" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Plane className="w-5 h-5 text-accent" />
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Próxima Viagem
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
                Conheça Israel com quem chama a Terra Santa de
                <span className="text-accent"> segunda casa</span>
              </h2>
              <p className="mt-6 text-white/70 text-base sm:text-lg leading-relaxed">
                Não é apenas uma viagem turística. É uma experiência
                transformadora guiada por quem estudou a Bíblia a vida inteira e
                conhece cada pedra de Israel. Batismo no Rio Jordão, adoração no
                Monte das Oliveiras, caminhada pela Via Dolorosa.
              </p>

              {/* Spots counter */}
              <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-accent/20">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-white font-semibold">Vagas Disponíveis</p>
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-bold text-accent">37</span>
                    <span className="text-white/50 text-sm">
                      de 100
                    </span>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-white/10 rounded-full h-2.5">
                  <div
                    className="bg-accent rounded-full h-2.5"
                    style={{ width: "63%" }}
                  />
                </div>
                <p className="text-white/50 text-xs mt-2">
                  63 vagas já preenchidas
                </p>
              </div>

              <div className="mt-6">
                <CountdownTimer
                  targetDate="2026-10-15T00:00:00"
                  label="Contagem Regressiva"
                  light
                />
              </div>

              <div className="mt-8">
                <Link
                  href="/israel"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent-light transition-colors text-base"
                >
                  Reservar Minha Vaga
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Photo grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/images/israel/jordan-baptism-1.jpg"
                  alt="Batismo no Rio Jordão"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  style={{ position: "relative" }}
                  width={400}
                  height={533}
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden mt-8">
                <Image
                  src="/images/israel/jordan-baptism-2.jpg"
                  alt="Batismo emocional no Jordão"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  style={{ position: "relative" }}
                  width={400}
                  height={533}
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden col-span-2">
                <Image
                  src="/images/israel/galilee-teaching-1.jpg"
                  alt="Pastor Alexandre ensinando na Galileia"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="py-14 sm:py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl sm:text-5xl font-extrabold text-primary">
                  {stat.number}
                  <span className="text-primary/60">{stat.suffix}</span>
                </p>
                <p className="text-sm text-primary/70 mt-1 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TDM TALK PODCAST ==================== */}
      <section className="py-20 sm:py-28 bg-stone-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                  <Mic className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Podcast
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
                TDM Talk
              </h2>
              <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed">
                Conversas profundas sobre fé, liderança e propósito. O espaço
                onde grandes nomes compartilham suas histórias e ensinamentos.
              </p>

              {/* Next episode — Tiago Brunet */}
              <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 text-accent" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    Próximo Episódio
                  </p>
                </div>
                <h3 className="text-xl font-bold text-white">Tiago Brunet</h3>
                <p className="text-white/60 text-sm mt-1 leading-relaxed">
                  Autor best-seller, fundador do Instituto Destiny e da Casa de
                  Destino. Coach de líderes, teólogo e palestrante que impacta
                  milhões de vidas com sua mensagem de propósito e excelência.
                </p>
                <div className="mt-4">
                  <Link
                    href="/tdm-talk"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-primary text-sm font-semibold rounded-lg hover:bg-accent-light transition-colors"
                  >
                    <Headphones className="w-4 h-4" />
                    Ver Episódios
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-accent/20 via-earth/10 to-primary-light/30 border border-white/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Headphones className="w-12 h-12 text-accent" />
                  </div>
                  <p className="text-white font-bold text-2xl font-display">
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

      {/* ==================== MINISTRY HIGHLIGHTS ==================== */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Ministério"
            title="Múltiplos Chamados, Uma Missão"
            description="Pastor Alexandre serve ao Reino de Deus de diversas formas, cada uma com o mesmo propósito: transformar vidas."
          />

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {ministryHighlights.map((item) => (
              <div
                key={item.title}
                className="group p-8 sm:p-10 bg-white rounded-2xl border border-stone-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
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
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative">
              <Image
                src="/images/pastor-alexandre-headshot.jpg"
                alt="Pastor Alexandre Mendes"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                Família
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary font-display">
                Pai, Marido &amp;
                <br />
                Servo de Deus
              </h2>
              <p className="mt-6 text-base sm:text-lg text-stone-500 leading-relaxed">
                Casado com Rebecca Huewes, Alexandre constrói seu ministério
                sobre a base sólida da família. Juntos, eles lideram o Templo
                dos Milagres com amor, dedicação e a convicção de que a família
                é o primeiro ministério.
              </p>
              <p className="mt-4 text-base sm:text-lg text-stone-500 leading-relaxed">
                Rebecca é uma mulher de fé que caminha lado a lado com o Pastor
                Alexandre em cada missão, cada viagem a Israel e cada momento de
                adoração.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="relative py-20 sm:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/israel/jordan-baptism-5.jpg"
            alt="Abraço emocionante no Jordão"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/60" />

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <Plane className="w-12 h-12 text-accent mx-auto mb-6 animate-float" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Conheça Israel Comigo
          </h2>
          <p className="mt-4 text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Uma experiência que vai transformar sua fé para sempre. Independente
            da sua igreja, esta viagem é para todos que desejam pisar na Terra
            Santa com um guia que a conhece como sua segunda casa.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 text-accent">
            <Users className="w-5 h-5" />
            <span className="text-lg font-bold">37 vagas restantes</span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/israel"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent-light transition-colors text-lg"
            >
              Reservar Minha Vaga
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
