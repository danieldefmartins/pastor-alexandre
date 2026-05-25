"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Users,
  Star,
  ChevronDown,
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
  },
  {
    day: "Dia 3",
    title: "Monte das Oliveiras",
    description:
      "Vista panorâmica de Jerusalém, Getsêmani, o jardim onde Jesus orou antes da crucificação. Adoração ao pôr do sol.",
    icon: Mountain,
  },
  {
    day: "Dia 4",
    title: "Rio Jordão",
    description:
      "Batismo nas mesmas águas onde Jesus foi batizado por João Batista. O momento mais emocionante da viagem.",
    icon: Droplets,
  },
  {
    day: "Dia 5",
    title: "Mar da Galileia",
    description:
      "Onde Jesus andou sobre as águas, acalmou a tempestade e chamou seus discípulos. Estudo bíblico com o Pastor Alexandre.",
    icon: Waves,
  },
  {
    day: "Dia 6",
    title: "Nazaré & Belém",
    description:
      "A cidade onde Jesus cresceu e o lugar onde Ele nasceu. Dois marcos fundamentais da história sagrada.",
    icon: Star,
  },
  {
    day: "Dia 7",
    title: "Cafarnaum & Tabgha",
    description:
      "A cidade de Jesus na Galileia. O local da multiplicação dos pães. Ruínas milenares que contam histórias vivas.",
    icon: BookOpen,
  },
  {
    day: "Dia 8",
    title: "Mar Morto",
    description:
      "Flutuação nas águas mais salgadas do mundo, o ponto mais baixo da Terra. Uma experiência única e inesquecível.",
    icon: Globe,
  },
  {
    day: "Dia 9-10",
    title: "Masada & Deserto",
    description:
      "Nascer do sol em Masada, a fortaleza de Herodes. Caminhada pelo deserto da Judeia onde Jesus foi tentado.",
    icon: Sunrise,
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
      "A viagem tem duração de 8 a 10 dias, cobrindo os principais pontos bíblicos de Israel com tempo para adoração, reflexão e estudo profundo em cada local sagrado.",
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
  return (
    <>
      {/* ==================== 1. HERO — FULL SCREEN VIDEO ==================== */}
      <section className="relative min-h-screen flex items-end bg-black overflow-hidden">
        <ScrollVideo
          src="/videos/israel-clip-1.mp4"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20 sm:pb-32 w-full">
          <div className="max-w-4xl">
            <p className="text-accent text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-6">
              Israel com Pastor Alexandre Mendes
            </p>

            <h1 className="text-5xl sm:text-7xl lg:text-[6rem] font-extrabold leading-[0.9] tracking-tight text-white font-display">
              Pise Onde
              <br />
              <span className="text-accent">Jesus Pisou</span>
            </h1>

            <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed">
              Uma experiência que nenhum livro pode oferecer. Mais de 25 anos
              guiando vidas pela Terra Santa.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== 2. CTA BAR ==================== */}
      <section className="bg-primary border-y border-accent/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 sm:gap-8">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-accent font-bold text-sm sm:text-base">
                  37 vagas restantes
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
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent-light transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              Quero Minha Vaga
              <ArrowRight className="w-4 h-4" />
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
                  className="object-cover"
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
                  className="object-cover"
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
                  className="object-cover"
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
                  className="object-cover"
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
                  className="object-cover"
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
                O Pastor Alexandre Mendes não é um guia turístico. Não é um
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
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Baptism 2 */}
            <div className="relative group rounded-xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/israel/jordan-baptism-2.jpg"
                alt="Batismo emocional"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Teaching 1 */}
            <div className="relative group rounded-xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/israel/galilee-teaching-2.jpg"
                alt="Pastor Alexandre ensinando na Galileia"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Baptism 3 */}
            <div className="relative group rounded-xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/israel/jordan-baptism-3.jpg"
                alt="Momento de oração no batismo"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Jordan River group — full width */}
            <div className="col-span-2 relative group rounded-xl overflow-hidden aspect-video">
              <Image
                src="/images/israel/jordan-river-group.jpg"
                alt="Grupo completo no Rio Jordão vestidos de branco"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
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
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Baptism 4 */}
            <div className="relative group rounded-xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/israel/jordan-baptism-4.jpg"
                alt="Batismo emocionante"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Jerusalem group 2 */}
            <div className="relative group rounded-xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/israel/jerusalem-group-2.jpg"
                alt="Grupo em Jerusalém"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Baptism 5 */}
            <div className="relative group rounded-xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/israel/jordan-baptism-5.jpg"
                alt="Abraço emocionante após batismo"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 7. ITINERARY ==================== */}
      <section className="py-20 sm:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Roteiro
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              Uma Jornada pela Terra Santa
            </h2>
            <p className="mt-4 text-white/50 text-base sm:text-lg max-w-2xl mx-auto">
              Cada dia é uma nova descoberta. Cada lugar, uma página da Bíblia
              ganhando vida diante dos seus olhos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {itinerary.map((item) => (
              <div
                key={item.title}
                className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">
                    {item.day}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 8. TESTIMONIALS ==================== */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Depoimentos
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary font-display">
              Vidas Transformadas
            </h2>
            <p className="mt-4 text-stone-500 text-base sm:text-lg max-w-2xl mx-auto">
              Pessoas reais que pisaram na Terra Santa com o Pastor Alexandre e
              nunca mais foram as mesmas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-100 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-accent fill-accent"
                    />
                  ))}
                </div>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-stone-100">
                  <p className="font-bold text-primary text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-stone-500 text-xs">{testimonial.trip}</p>
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
            className="object-cover opacity-10"
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
    </>
  );
}
