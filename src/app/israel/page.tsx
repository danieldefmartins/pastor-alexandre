"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import {
  ArrowRight,
  Users,
  Star,
  ChevronDown,
  Volume2,
  VolumeX,
  CheckCircle,
  HelpCircle,
  BookOpen,
  Droplets,
  Mountain,
  Sunrise,
  Church,
  Waves,
  MapPin,
  Cross,
  Globe,
  Calendar,
  Phone,
} from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import ScrollVideo from "@/components/ScrollVideo";
import VideoPlayer from "@/components/VideoPlayer";

const itinerary = [
  {
    day: "Dia 1-2",
    title: "Jerusalém",
    description:
      "Muro das Lamentações, Monte do Templo, Via Dolorosa, Santo Sepulcro. Caminhe pelas mesmas ruas onde Jesus carregou a cruz.",
    icon: Church,
    image: "/images/israel/jerusalem-group-1.jpg",
  },
  {
    day: "Dia 3",
    title: "Monte das Oliveiras",
    description:
      "Vista panorâmica de Jerusalém, Getsêmani, o jardim onde Jesus orou antes da crucificação. Adoração ao pôr do sol.",
    icon: Mountain,
    image: "/images/israel/jerusalem-group-2.jpg",
  },
  {
    day: "Dia 4",
    title: "Rio Jordão",
    description:
      "Batismo nas mesmas águas onde Jesus foi batizado por João Batista. O momento mais emocionante da viagem.",
    icon: Droplets,
    image: "/images/israel/jordan-river-group.jpg",
  },
  {
    day: "Dia 5",
    title: "Mar da Galileia",
    description:
      "Onde Jesus andou sobre as águas, acalmou a tempestade e chamou seus discípulos. Estudo bíblico com o Pastor Alexandre.",
    icon: Waves,
    image: "/images/israel/galilee-teaching-1.jpg",
  },
  {
    day: "Dia 6",
    title: "Nazaré & Belém",
    description:
      "A cidade onde Jesus cresceu e o lugar onde Ele nasceu. Dois marcos fundamentais da história sagrada.",
    icon: Star,
    image: "/images/israel/jerusalem-group-3.jpg",
  },
  {
    day: "Dia 7",
    title: "Cafarnaum & Tabgha",
    description:
      "A cidade de Jesus na Galileia. O local da multiplicação dos pães. Ruínas milenares que contam histórias vivas.",
    icon: BookOpen,
    image: "/images/pastor-alexandre-guitar-israel.jpg",
  },
  {
    day: "Dia 8",
    title: "Batismo no Jordão",
    description:
      "Batismo nas águas sagradas do Rio Jordão. Lágrimas, oração e um encontro pessoal com Deus que marca para sempre.",
    icon: Droplets,
    image: "/images/israel/jordan-baptism-1.jpg",
  },
  {
    day: "Dia 9",
    title: "Mar Morto",
    description:
      "Flutuação nas águas mais salgadas do mundo, o ponto mais baixo da Terra. Uma experiência única e inesquecível.",
    icon: Globe,
    image: "/images/israel/galilee-teaching-3.jpg",
  },
  {
    day: "Dia 10",
    title: "Masada & Deserto",
    description:
      "Nascer do sol em Masada, a fortaleza de Herodes. Caminhada pelo deserto da Judeia onde Jesus foi tentado.",
    icon: Sunrise,
    image: "/images/israel/galilee-teaching-2.jpg",
  },
];

const testimonials = [
  {
    name: "Maria Silva",
    text: "A viagem com o Pastor Alexandre mudou minha vida para sempre. Chorei no Rio Jordão como nunca chorei. Cada lugar que visitamos, ele ensina com uma profundidade que nenhum guia turístico consegue. Voltei uma pessoa diferente.",
    trip: "Viagem 2025",
  },
  {
    name: "João Santos",
    text: "Já fui a Israel duas vezes com o Pastor Alexandre e cada vez é uma experiência completamente nova. Ele conhece cada pedra, cada história, cada detalhe. É como ter a Bíblia viva diante dos seus olhos. Já estou reservando a terceira.",
    trip: "Viagem 2024",
  },
  {
    name: "Ana Costa",
    text: "Eu não frequento a TDM Church, mas fui na viagem por indicação de uma amiga. Foi a melhor decisão da minha vida. O Pastor Alexandre é um guia incrível e a experiência espiritual é absolutamente transformadora. Recomendo para todos.",
    trip: "Viagem 2025",
  },
  {
    name: "Carlos Oliveira",
    text: "Eu tinha medo de ir para Israel, mas o Pastor Alexandre cuida de tudo. Segurança, organização, hotéis excelentes. E o mais importante: cada lugar se torna um encontro com Deus. Minha fé nunca mais foi a mesma.",
    trip: "Viagem 2024",
  },
];

const faqs = [
  {
    question: "Preciso ser membro da TDM Church para participar?",
    answer:
      "Absolutamente não. A viagem é aberta para qualquer pessoa, de qualquer igreja ou sem igreja. O único requisito é o desejo de conhecer a Terra Santa. Já levamos pessoas de dezenas de denominações diferentes.",
  },
  {
    question: "Quanto custa a viagem?",
    answer:
      "O valor varia conforme a época e duração, mas inclui tudo: passagem aérea, hotéis de qualidade, todas as refeições, transporte, entradas em todos os locais e guia profissional. Oferecemos facilidades de pagamento. Entre em contato para valores atualizados.",
  },
  {
    question: "É seguro viajar para Israel?",
    answer:
      "Sim. O Pastor Alexandre viaja para Israel há mais de 25 anos e conhece profundamente a região. Trabalhamos com agências locais experientes e a segurança é sempre a prioridade número um. Israel possui uma das maiores estruturas de segurança do mundo.",
  },
  {
    question: "Qual é a duração da viagem?",
    answer:
      "A viagem tem duração de 10 dias, cobrindo os principais pontos bíblicos de Israel com tempo para adoração, reflexão e estudo profundo em cada local sagrado.",
  },
  {
    question: "O que está incluído no pacote?",
    answer:
      "Passagem aérea, hospedagem em hotéis de qualidade, todas as refeições, transporte terrestre em ônibus climatizado, guia local profissional, entradas em todos os locais visitados, roupa de batismo e, claro, a liderança espiritual do Pastor Alexandre em cada momento.",
  },
  {
    question: "Posso levar minha família?",
    answer:
      "Com certeza! Muitas famílias viajam juntas. É uma experiência que une e transforma. Crianças acima de 10 anos são bem-vindas e há condições especiais para grupos familiares.",
  },
  {
    question: "Como faço para reservar minha vaga?",
    answer:
      "Preencha o formulário nesta página ou ligue para (781) 480-3125. As vagas são limitadas e preenchidas por ordem de inscrição. Um depósito garante sua reserva.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-bold text-white flex items-start gap-3 pr-4">
          <HelpCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-white/60 text-sm leading-relaxed px-6 pl-14">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function IsraelPage() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [heroMuted, setHeroMuted] = useState(true);

  const toggleHeroMute = () => {
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = !heroMuted;
      setHeroMuted(!heroMuted);
    }
  };

  return (
    <>
      {/* ==================== 1. HERO — CINEMATIC FULL SCREEN ==================== */}
      <section className="relative h-screen bg-black overflow-hidden">
        {/* Video fills entire viewport */}
        <video
          ref={heroVideoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover sm:object-top opacity-80"
        >
          <source src="/videos/israel-clip-1.mp4" type="video/mp4" />
        </video>

        {/* Subtle bottom gradient only — let the video breathe */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        {/* Volume toggle */}
        <button
          onClick={toggleHeroMute}
          className="absolute top-24 sm:top-28 right-4 sm:right-8 w-11 h-11 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white/70 hover:bg-black/60 hover:text-white transition-all z-20"
          aria-label={heroMuted ? "Ativar som" : "Desativar som"}
        >
          {heroMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>

        {/* Content at the very bottom — minimal, elegant */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-10 sm:pb-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              {/* Left — Title */}
              <div>
                <div className="w-10 h-px bg-accent mb-6" />
                <p className="text-accent text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                  Pastor Alexandre Mendes
                </p>
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-white font-display">
                  Pise Onde
                  <br />
                  Jesus <span className="italic text-accent">Pisou</span>
                </h1>
              </div>

              {/* Right — Scroll hint */}
              <div className="hidden sm:flex flex-col items-center gap-2 pb-2">
                <span className="text-white/30 text-[9px] tracking-[0.3em] uppercase [writing-mode:vertical-lr]">
                  Scroll
                </span>
                <div className="w-px h-10 bg-gradient-to-b from-accent/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2. CTA BAR ==================== */}
      <section className="bg-primary border-y border-accent/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 sm:gap-6">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                <span className="text-accent font-bold text-xs sm:text-base whitespace-nowrap">
                  37 vagas
                </span>
              </div>
              <div className="hidden sm:block">
                <CountdownTimer
                  targetDate="2026-10-15T00:00:00"
                  light
                  size="sm"
                />
              </div>
            </div>
            <Link
              href="#reservar"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-8 py-2.5 sm:py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent-light transition-colors text-xs sm:text-base whitespace-nowrap shrink-0"
            >
              Quero Minha Vaga
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== 3. IMAGINE... ==================== */}
      <section className="py-20 sm:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white font-display">
              <span className="text-accent italic">Imagine...</span>
            </h2>
          </div>

          <div className="space-y-24 sm:space-y-32">
            {/* Imagine 1 — Baptism */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                  Rio Jordão
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display leading-tight">
                  Imagine ser batizado nas mesmas águas onde{" "}
                  <span className="text-accent italic">
                    Jesus foi batizado
                  </span>
                </h3>
                <p className="mt-6 text-white/50 text-base sm:text-lg leading-relaxed">
                  As águas do Rio Jordão carregam milhares de anos de história
                  sagrada. Sentir essas águas na sua pele enquanto o Pastor
                  Alexandre ora por você é um momento que vai marcar a sua vida
                  para sempre.
                </p>
              </div>
              <div className="order-1 lg:order-2 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/israel/jordan-baptism-1.jpg"
                  alt="Batismo emocionante no Rio Jordão"
                  fill
                  className="object-cover sm:object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
            </div>

            {/* Imagine 2 — Via Dolorosa */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/israel/jerusalem-group-2.jpg"
                  alt="Grupo caminhando em Jerusalém"
                  fill
                  className="object-cover sm:object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
              <div>
                <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                  Jerusalém
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display leading-tight">
                  Imagine caminhar pela Via Dolorosa onde{" "}
                  <span className="text-accent italic">
                    Jesus carregou a cruz
                  </span>
                </h3>
                <p className="mt-6 text-white/50 text-base sm:text-lg leading-relaxed">
                  Cada pedra daquelas ruas testemunhou o sacrifício mais
                  importante da história. Caminhar ali com um historiador que
                  conhece cada detalhe transforma a leitura da Bíblia para
                  sempre.
                </p>
              </div>
            </div>

            {/* Imagine 3 — Western Wall */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                  Muro das Lamentações
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display leading-tight">
                  Imagine tocar as pedras do Muro das Lamentações e{" "}
                  <span className="text-accent italic">orar</span>
                </h3>
                <p className="mt-6 text-white/50 text-base sm:text-lg leading-relaxed">
                  O lugar mais sagrado do judaísmo. Colocar suas mãos naquelas
                  pedras milenares, sentir o peso de milhares de anos de oração
                  e deixar sua própria oração entre as fendas do Muro.
                </p>
              </div>
              <div className="order-1 lg:order-2 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/israel/jerusalem-group-3.jpg"
                  alt="Grupo no Muro das Lamentações"
                  fill
                  className="object-cover sm:object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
            </div>

            {/* Imagine 4 — Mount of Olives */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/israel/galilee-teaching-1.jpg"
                  alt="Pastor Alexandre ensinando com vista para a Galileia"
                  fill
                  className="object-cover sm:object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
              <div>
                <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                  Monte das Oliveiras
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display leading-tight">
                  Imagine adorar a Deus no Monte das Oliveiras com{" "}
                  <span className="text-accent italic">
                    Jerusalém aos seus pés
                  </span>
                </h3>
                <p className="mt-6 text-white/50 text-base sm:text-lg leading-relaxed">
                  A mesma vista que Jesus contemplou. O mesmo lugar onde Ele
                  chorou por Jerusalém. Você vai estar ali, adorando a Deus com
                  a cidade santa inteira diante dos seus olhos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. VIDEO REEL ==================== */}
      <section className="py-20 sm:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Momentos Reais
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              Veja com Seus Próprios Olhos
            </h2>
            <p className="mt-4 text-white/50 text-base sm:text-lg max-w-2xl mx-auto">
              Cada vídeo é um pedaço da experiência que espera por você na
              Terra Santa.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              "/videos/israel-clip-2.mp4",
              "/videos/israel-clip-3.mp4",
              "/videos/israel-clip-4.mp4",
              "/videos/israel-clip-5.mp4",
              "/videos/israel-clip-6.mp4",
              "/videos/israel-clip-7.mp4",
            ].map((src) => (
              <div
                key={src}
                className="aspect-[9/16] rounded-xl overflow-hidden"
              >
                <VideoPlayer src={src} className="w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA BREAK 1 ==================== */}
      <section className="bg-accent py-6 sm:py-8">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-primary font-bold text-base sm:text-lg font-display">
            Apenas <span className="text-2xl sm:text-3xl">37</span> vagas restantes para a próxima viagem
          </p>
          <Link
            href="#reservar"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-colors text-sm whitespace-nowrap shrink-0"
          >
            Reservar Minha Vaga
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ==================== 5. PASTOR ALEXANDRE ==================== */}
      <section className="py-20 sm:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/pastor-alexandre-guitar-israel.jpg"
                  alt="Pastor Alexandre tocando violão nas ruínas de Cafarnaum, Israel"
                  fill
                  className="object-cover sm:object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent rounded-2xl shadow-xl p-6">
                <p className="text-4xl font-extrabold text-primary font-display">
                  25+
                </p>
                <p className="text-xs text-primary/70 uppercase tracking-wider font-bold">
                  Anos em
                  <br />
                  Israel
                </p>
              </div>
            </div>

            <div>
              <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Seu Guia
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary font-display leading-tight">
                Seu Guia Não É
                <br />
                <span className="text-accent italic">Um Turista</span>
              </h2>
              <div className="w-12 h-px bg-accent mt-6 mb-6" />
              <p className="text-base sm:text-lg text-stone-500 leading-relaxed">
                O Pastor Alexandre Mendes — <strong>Pastor Titular da TDM
                Church em Boston, EUA</strong> — não é um guia turístico. Não é um
                agente de viagens. É um <strong>historiador</strong> e{" "}
                <strong>pesquisador</strong> que dedicou a vida inteira a
                estudar Israel. Ele não lê sobre os lugares — ele{" "}
                <strong>vive</strong> esses lugares.
              </p>
              <p className="mt-4 text-base sm:text-lg text-stone-500 leading-relaxed">
                São mais de 25 anos viajando à Terra Santa, mais de 50 viagens
                realizadas, milhares de vidas transformadas. Quando você caminha
                com o Pastor Alexandre por Jerusalém, cada pedra conta uma
                história que nenhum livro didático consegue transmitir.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-stone-700">
                    <strong>Historiador e pesquisador</strong> — não apenas um
                    guia, mas alguém que estuda Israel há décadas
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-stone-700">
                    <strong>25+ anos, 50+ viagens</strong> — Israel é
                    literalmente sua segunda casa
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-stone-700">
                    <strong>Pastor e adorador</strong> — cada local sagrado se
                    torna um momento de adoração e oração
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-stone-700">
                    <strong>Aberto para TODOS</strong> — qualquer pessoa, de
                    qualquer igreja ou sem igreja
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA BREAK 2 ==================== */}
      <section className="bg-black py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-accent font-bold text-2xl sm:text-3xl font-display mb-2">
            Somente 37 vagas restantes
          </p>
          <p className="text-white/50 text-sm sm:text-base mb-2">
            As passagens estão com excelente preço agora — mas quanto mais você esperar, mais caro pode ficar.
          </p>
          <p className="text-white/30 text-xs mb-6">
            Não perca sua vaga na Terra Santa. As inscrições encerram em breve.
          </p>
          <Link
            href="#reservar"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-colors text-base"
          >
            Garantir Minha Vaga Agora
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ==================== 6. PHOTO GALLERY — MAGAZINE STYLE ==================== */}
      <section className="py-20 sm:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Galeria
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              A Terra Santa em Imagens
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {/* Large hero — 2 cols */}
            <div className="col-span-2 row-span-2 relative group rounded-xl overflow-hidden">
              <Image
                src="/images/israel/jerusalem-group-1.jpg"
                alt="Grupo em Jerusalém com bandeira de Israel"
                width={1200}
                height={800}
                className="w-full h-full object-cover sm:object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-bold">Jerusalém</p>
                <p className="text-white/60 text-xs">
                  Grupo nas escadarias do Templo
                </p>
              </div>
            </div>

            {/* Baptism 1 */}
            <div className="relative group rounded-xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/israel/jordan-baptism-1.jpg"
                alt="Batismo no Rio Jordão"
                fill
                className="object-cover sm:object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Baptism 2 */}
            <div className="relative group rounded-xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/israel/jordan-baptism-2.jpg"
                alt="Batismo emocional"
                fill
                className="object-cover sm:object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Teaching 1 */}
            <div className="relative group rounded-xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/israel/galilee-teaching-2.jpg"
                alt="Pastor Alexandre ensinando na Galileia"
                fill
                className="object-cover sm:object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Baptism 3 */}
            <div className="relative group rounded-xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/israel/jordan-baptism-3.jpg"
                alt="Momento de oração no batismo"
                fill
                className="object-cover sm:object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Jordan River group — full width */}
            <div className="col-span-2 relative group rounded-xl overflow-hidden aspect-video">
              <Image
                src="/images/israel/jordan-river-group.jpg"
                alt="Grupo completo no Rio Jordão vestidos de branco"
                fill
                className="object-cover sm:object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-bold">Rio Jordão</p>
                <p className="text-white/60 text-xs">
                  Grupo antes do batismo
                </p>
              </div>
            </div>

            {/* Teaching 3 */}
            <div className="relative group rounded-xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/israel/galilee-teaching-3.jpg"
                alt="Ensinamento na Galileia"
                fill
                className="object-cover sm:object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Baptism 4 */}
            <div className="relative group rounded-xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/israel/jordan-baptism-4.jpg"
                alt="Batismo emocionante"
                fill
                className="object-cover sm:object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Jerusalem group 2 */}
            <div className="relative group rounded-xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/israel/jerusalem-group-2.jpg"
                alt="Grupo em Jerusalém"
                fill
                className="object-cover sm:object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Baptism 5 */}
            <div className="relative group rounded-xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/israel/jordan-baptism-5.jpg"
                alt="Abraço emocionante após batismo"
                fill
                className="object-cover sm:object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 7. ITINERARY — HORIZONTAL SCROLL ==================== */}
      <section className="py-20 sm:py-28 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-10 sm:mb-14">
          <div className="text-center">
            <p className="text-accent text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Roteiro
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              Uma Jornada pela <span className="italic">Terra Santa</span>
            </h2>
            <p className="mt-4 text-white/50 text-base sm:text-lg max-w-2xl mx-auto">
              Deslize para explorar cada dia da viagem
            </p>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto px-6 sm:px-8 lg:px-12 pb-6 snap-x snap-mandatory scrollbar-hide" style={{ WebkitOverflowScrolling: "touch" }}>
          {itinerary.map((item) => (
            <div
              key={item.title}
              className="group relative shrink-0 w-[280px] sm:w-[340px] lg:w-[380px] snap-start"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover sm:object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Day badge */}
                <div className="absolute top-4 left-4 bg-accent px-3 py-1.5 rounded">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {item.day}
                  </span>
                </div>

                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-4 h-4 text-accent" />
                    <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Final card — CTA */}
          <div className="shrink-0 w-[280px] sm:w-[340px] lg:w-[380px] snap-start flex items-center justify-center">
            <div className="text-center px-8">
              <p className="text-accent text-4xl sm:text-5xl font-extrabold font-display mb-4">
                10
              </p>
              <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-2">
                Dias que vão
              </p>
              <p className="text-white font-bold text-xl sm:text-2xl font-display">
                Transformar
                <br />
                <span className="text-accent italic">Sua Vida</span>
              </p>
              <Link
                href="#reservar"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent-light transition-colors text-sm"
              >
                Reservar Vaga
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA BREAK 3 ==================== */}
      <section className="bg-accent py-6 sm:py-8">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-primary font-bold text-sm sm:text-base">
              As vagas estão acabando. Não deixe para depois.
            </p>
            <p className="text-primary/60 text-xs sm:text-sm mt-1">
              Somente 37 vagas restantes &middot; Inscrições por ordem de chegada
            </p>
          </div>
          <Link
            href="#reservar"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-colors text-sm whitespace-nowrap shrink-0"
          >
            Reservar Agora
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ==================== 8. VIDEO TESTIMONIALS ==================== */}
      <section className="py-20 sm:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-accent text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Depoimentos Reais
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              Vidas <span className="italic text-accent">Transformadas</span>
            </h2>
            <p className="mt-4 text-white/50 text-base sm:text-lg max-w-2xl mx-auto">
              Ouça de quem já pisou na Terra Santa com o Pastor Alexandre.
              Histórias reais. Emoções reais. Vidas que nunca mais foram as mesmas.
            </p>
          </div>

          {/* Video testimonials — horizontal scroll */}
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ WebkitOverflowScrolling: "touch" }}>
            {[
              { src: "/videos/Testemunho/testemunho-1.mp4", label: "Testemunho 1" },
              { src: "/videos/Testemunho/testemunho-2.mp4", label: "Testemunho 2" },
              { src: "/videos/Testemunho/testemunho-3.mp4", label: "Testemunho 3" },
              { src: "/videos/Testemunho/testemunho-4.mp4", label: "Testemunho 4" },
              { src: "/videos/Testemunho/testemunho-5.mp4", label: "Testemunho 5" },
            ].map((video) => (
              <div
                key={video.src}
                className="shrink-0 w-[280px] sm:w-[320px] snap-start"
              >
                <ScrollVideo
                  src={video.src}
                  className="aspect-[9/16] rounded-lg w-full"
                >
                  {null}
                </ScrollVideo>
              </div>
            ))}
          </div>

          {/* Written testimonials below */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-16">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white/5 border border-white/10 p-6 sm:p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-accent fill-accent"
                    />
                  ))}
                </div>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="font-bold text-white text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-white/40 text-xs">{testimonial.trip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 9. FAQ ==================== */}
      <section className="py-20 sm:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Perguntas Frequentes
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              Tire Suas Dúvidas
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 10. BOOKING FORM ==================== */}
      <section
        id="reservar"
        className="relative py-20 sm:py-32 bg-black overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/israel/jordan-river-group.jpg"
            alt="Grupo no Rio Jordão"
            fill
            className="object-cover sm:object-top opacity-10"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black/95" />

        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
              Chegou a{" "}
              <span className="text-accent italic">Sua Vez</span>
            </h2>
            <p className="mt-4 text-white/50 text-base sm:text-lg max-w-2xl mx-auto">
              Não espere mais. Reserve sua vaga e prepare-se para a
              experiência mais transformadora da sua vida.
            </p>
          </div>

          {/* Countdown + Spots */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 mb-12">
            <div className="text-center">
              <CountdownTimer
                targetDate="2026-10-15T00:00:00"
                label="Próxima Viagem"
                light
                size="md"
              />
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-accent/30 rounded-2xl p-6 sm:p-8 min-w-[200px]">
              <p className="text-white/60 text-sm mb-1 font-medium">
                Vagas Disponíveis
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-accent font-display">
                  37
                </span>
                <span className="text-white/40 text-lg">/ 100</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 mt-3">
                <div
                  className="bg-accent rounded-full h-3"
                  style={{ width: "63%" }}
                />
              </div>
              <p className="text-white/30 text-xs mt-2">
                As vagas estão acabando
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 sm:p-10 max-w-2xl mx-auto">
            <div className="space-y-5">
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="(000) 000-0000"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">
                  Como conheceu o Pastor Alexandre?
                </label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white/70 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30">
                  <option value="" className="bg-black">
                    Selecione...
                  </option>
                  <option value="tdm" className="bg-black">
                    TDM Church
                  </option>
                  <option value="instagram" className="bg-black">
                    Instagram
                  </option>
                  <option value="youtube" className="bg-black">
                    YouTube
                  </option>
                  <option value="amigo" className="bg-black">
                    Indicação de amigo
                  </option>
                  <option value="outro" className="bg-black">
                    Outro
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">
                  Quantas pessoas viajarão?
                </label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white/70 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30">
                  <option value="1" className="bg-black">
                    1 pessoa
                  </option>
                  <option value="2" className="bg-black">
                    2 pessoas
                  </option>
                  <option value="3" className="bg-black">
                    3 pessoas
                  </option>
                  <option value="4" className="bg-black">
                    4 ou mais
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">
                  Mensagem (opcional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Dúvidas ou comentários..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent-light transition-colors text-lg"
              >
                Quero Reservar Minha Vaga
              </button>
              <p className="text-white/30 text-xs text-center">
                Ao enviar, nossa equipe entrará em contato em até 24 horas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 11. FINAL CTA — VIDEO ==================== */}
      <section className="relative min-h-[70vh] flex items-center bg-black overflow-hidden">
        <ScrollVideo
          src="/videos/israel-clip-8.mp4"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center py-20">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white font-display">
            Vagas Limitadas.
            <br />
            <span className="text-accent italic">
              Não Deixe Para Depois.
            </span>
          </h2>
          <p className="mt-6 text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Apenas 37 vagas restantes. Cada viagem lota. Cada grupo é
            único. A sua vez é agora.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#reservar"
              className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent-light transition-colors text-lg"
            >
              Reservar Agora
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+17814803125"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-colors text-base border border-white/20"
            >
              <Phone className="w-5 h-5" />
              (781) 480-3125
            </a>
          </div>
        </div>
      </section>
      {/* ==================== FLOATING CTA — MOBILE ==================== */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-black/90 backdrop-blur-md border-t border-accent/20 px-4 py-3 safe-area-pb">
        <Link
          href="#reservar"
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-accent text-primary font-bold rounded-lg text-sm"
        >
          Garantir Minha Vaga — 37 restantes
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </>
  );
}
