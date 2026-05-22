import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Plane,
  MapPin,
  Users,
  Star,
  ChevronRight,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  BookOpen,
  Heart,
  Droplets,
  Mountain,
  Sunrise,
  Church,
  Waves,
} from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";

export const metadata: Metadata = {
  title: "Viagem a Israel",
  description:
    "Conheça a Terra Santa com o Pastor Alexandre Mendes. 26 anos de experiência, 52+ viagens. Batismo no Rio Jordão, Jerusalém, Mar da Galileia e muito mais. Vagas limitadas.",
};

const itinerary = [
  {
    day: "Dia 1-2",
    title: "Jerusalém",
    description:
      "Muro das Lamentações, Monte do Templo, Via Dolorosa, Santo Sepulcro. Caminhe onde Jesus caminhou.",
    icon: Church,
  },
  {
    day: "Dia 3",
    title: "Monte das Oliveiras",
    description:
      "Vista panorâmica de Jerusalém, Getsêmani, lugar onde Jesus orou antes da crucificação.",
    icon: Mountain,
  },
  {
    day: "Dia 4",
    title: "Rio Jordão",
    description:
      "Batismo nas águas sagradas do Rio Jordão. Um dos momentos mais emocionantes da viagem.",
    icon: Droplets,
  },
  {
    day: "Dia 5",
    title: "Mar da Galileia",
    description:
      "Onde Jesus andou sobre as águas e chamou seus discípulos. Estudo bíblico com vista para o mar.",
    icon: Waves,
  },
  {
    day: "Dia 6",
    title: "Nazaré & Belém",
    description:
      "A cidade onde Jesus cresceu e o lugar onde nasceu. Dois marcos fundamentais da história sagrada.",
    icon: Star,
  },
  {
    day: "Dia 7-8",
    title: "Mar Morto & Masada",
    description:
      "Flutuação no Mar Morto, Masada ao nascer do sol. Experiências únicas na Terra Santa.",
    icon: Sunrise,
  },
];

const testimonials = [
  {
    name: "Maria Silva",
    text: "A viagem com o Pastor Alexandre mudou minha vida. Cada lugar que visitamos, ele ensina com uma profundidade que nenhum guia turístico consegue. Chorei no Rio Jordão.",
    trip: "Viagem 2025",
  },
  {
    name: "João Santos",
    text: "Já fui a Israel duas vezes com o Pastor Alexandre e cada vez é uma experiência completamente nova. Ele conhece cada pedra, cada história. É como ter a Bíblia viva na sua frente.",
    trip: "Viagem 2024",
  },
  {
    name: "Ana Costa",
    text: "Eu não frequento a TDM Church, mas fui na viagem por indicação de uma amiga. Foi a melhor decisão da minha vida. O Pastor Alexandre é um guia incrível e a experiência espiritual é transformadora.",
    trip: "Viagem 2025",
  },
];

const faqs = [
  {
    question: "Preciso ser membro da TDM Church para participar?",
    answer:
      "Não! A viagem é aberta para qualquer pessoa, independente da igreja que frequenta ou se frequenta alguma. O importante é o desejo de conhecer a Terra Santa.",
  },
  {
    question: "Qual é a duração da viagem?",
    answer:
      "A viagem tem duração de 8 a 10 dias, cobrindo os principais pontos bíblicos de Israel com tempo para adoração e reflexão em cada local.",
  },
  {
    question: "O que está incluído no pacote?",
    answer:
      "Passagem aérea, hospedagem em hotéis de qualidade, todas as refeições, transporte terrestre, guia local, entradas em todos os locais visitados e a liderança espiritual do Pastor Alexandre.",
  },
  {
    question: "Quantas vezes o Pastor Alexandre já foi a Israel?",
    answer:
      "O Pastor Alexandre viaja para Israel há 26 anos, duas vezes por ano, totalizando mais de 52 viagens. Israel é a sua segunda casa.",
  },
  {
    question: "É seguro viajar para Israel?",
    answer:
      "Sim. Trabalhamos com agências locais experientes e o Pastor Alexandre conhece profundamente a região. A segurança dos viajantes é sempre a prioridade número um.",
  },
  {
    question: "Como faço para reservar minha vaga?",
    answer:
      "Preencha o formulário de interesse nesta página ou entre em contato conosco pelo telefone (781) 480-3125. As vagas são limitadas e preenchidas por ordem de inscrição.",
  },
];

export default function IsraelPage() {
  return (
    <>
      {/* ==================== HERO CINEMATOGRÁFICO ==================== */}
      <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/israel/jerusalem-group-1.jpg"
            alt="Grupo em Jerusalém com bandeira de Israel"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Plane className="w-5 h-5 text-accent" />
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                Viagem à Terra Santa
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1] tracking-tight text-white font-display">
              Conheça Israel
              <br />
              <span className="text-accent">com quem a vive</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed">
              26 anos guiando vidas pela Terra Santa. Não é uma viagem turística
              — é uma experiência que transforma sua fé para sempre.
            </p>

            {/* Spots + Countdown */}
            <div className="mt-10 flex flex-col sm:flex-row gap-6 items-start">
              <div className="bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-2xl p-6 sm:p-8">
                <p className="text-white/70 text-sm mb-1 font-medium">
                  Vagas Disponíveis
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl sm:text-6xl font-extrabold text-accent">
                    37
                  </span>
                  <span className="text-white/50 text-lg">/ 100</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 mt-3">
                  <div
                    className="bg-accent rounded-full h-3 transition-all duration-1000"
                    style={{ width: "63%" }}
                  />
                </div>
                <p className="text-white/40 text-xs mt-2">
                  As vagas estão acabando
                </p>
              </div>

              <div>
                <CountdownTimer
                  targetDate="2026-10-15T00:00:00"
                  label="Próxima Viagem"
                  light
                  size="sm"
                />
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="#reservar"
                className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent-light transition-colors text-lg"
              >
                Quero Minha Vaga
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS BAR ==================== */}
      <section className="bg-accent py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-primary">
                26
              </p>
              <p className="text-sm text-primary/70 font-medium">
                Anos de Experiência
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-primary">
                52+
              </p>
              <p className="text-sm text-primary/70 font-medium">
                Viagens Realizadas
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-primary">
                2x
              </p>
              <p className="text-sm text-primary/70 font-medium">Por Ano</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-primary">
                1000+
              </p>
              <p className="text-sm text-primary/70 font-medium">
                Vidas Transformadas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== GALERIA CINEMATOGRÁFICA ==================== */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-3">
              Momentos Inesquecíveis
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary font-display">
              A Terra Santa em Imagens
            </h2>
          </div>

          {/* Masonry-style photo grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {/* Large hero image */}
            <div className="col-span-2 lg:col-span-2 row-span-2 relative group rounded-2xl overflow-hidden">
              <Image
                src="/images/israel/jerusalem-group-1.jpg"
                alt="Grupo em Jerusalém com bandeira de Israel"
                width={1200}
                height={800}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-bold text-lg">Jerusalém</p>
                <p className="text-white/70 text-sm">
                  Grupo nas escadarias do Templo
                </p>
              </div>
            </div>

            {/* Baptism 1 */}
            <div className="relative group rounded-2xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/israel/jordan-baptism-1.jpg"
                alt="Batismo no Rio Jordão"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-bold text-sm">Rio Jordão</p>
                <p className="text-white/70 text-xs">Batismo</p>
              </div>
            </div>

            {/* Baptism 2 */}
            <div className="relative group rounded-2xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/israel/jordan-baptism-2.jpg"
                alt="Batismo emocional"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-bold text-sm">Oração</p>
                <p className="text-white/70 text-xs">Momento de fé</p>
              </div>
            </div>

            {/* Teaching */}
            <div className="relative group rounded-2xl overflow-hidden aspect-video col-span-2 lg:col-span-1">
              <Image
                src="/images/israel/galilee-teaching-1.jpg"
                alt="Pastor Alexandre ensinando na Galileia"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-bold text-sm">Mar da Galileia</p>
                <p className="text-white/70 text-xs">Estudo bíblico</p>
              </div>
            </div>

            {/* Jordan River group */}
            <div className="relative group rounded-2xl overflow-hidden aspect-video col-span-2">
              <Image
                src="/images/israel/jordan-river-group.jpg"
                alt="Grupo no Rio Jordão vestidos de branco"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-bold text-lg">Rio Jordão</p>
                <p className="text-white/70 text-sm">
                  Grupo completo antes do batismo
                </p>
              </div>
            </div>

            {/* Hug */}
            <div className="relative group rounded-2xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/israel/jordan-baptism-5.jpg"
                alt="Abraço emocionante após batismo"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-bold text-sm">Emoção</p>
                <p className="text-white/70 text-xs">Abraço pós-batismo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ROTEIRO DA VIAGEM ==================== */}
      <section className="py-20 sm:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-3">
              Roteiro
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              Uma Jornada pela Terra Santa
            </h2>
            <p className="mt-4 text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
              Cada dia é uma nova descoberta. Cada lugar, uma página da Bíblia
              ganhando vida diante dos seus olhos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {itinerary.map((item) => (
              <div
                key={item.title}
                className="group p-6 sm:p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">
                    {item.day}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SEU GUIA ==================== */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/israel/galilee-teaching-2.jpg"
                  alt="Pastor Alexandre ensinando com o Mar da Galileia ao fundo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent rounded-2xl shadow-xl p-6">
                <p className="text-4xl font-extrabold text-primary">52+</p>
                <p className="text-xs text-primary/70 uppercase tracking-wider font-bold">
                  Viagens
                  <br />a Israel
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                Seu Guia
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary font-display">
                Pastor Alexandre Mendes
              </h2>
              <p className="mt-6 text-base sm:text-lg text-stone-500 leading-relaxed">
                Não é apenas um guia turístico. É um pastor que estudou a Bíblia
                a vida inteira e conhece cada pedra de Israel. Cada local
                visitado se torna um estudo bíblico profundo, cada momento uma
                oportunidade de encontro com Deus.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-stone-700">
                    <strong>26 anos de experiência</strong> viajando a Israel, 2
                    vezes por ano
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-stone-700">
                    <strong>Teólogo e estudioso</strong> — cada local é uma aula
                    bíblica viva
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-stone-700">
                    <strong>Pastor e adorador</strong> — momentos de louvor e
                    oração em cada lugar sagrado
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-stone-700">
                    <strong>Aberto para todos</strong> — não é necessário ser
                    membro de nenhuma igreja
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DEPOIMENTOS ==================== */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-3">
              Depoimentos
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary font-display">
              Vidas Transformadas
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
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
                <p className="text-stone-700 text-sm leading-relaxed italic">
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

      {/* ==================== FAQ ==================== */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-3">
              Perguntas Frequentes
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary font-display">
              Tire Suas Dúvidas
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-stone-100 p-6"
              >
                <h3 className="font-bold text-primary flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="mt-3 text-stone-500 text-sm leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FORMULÁRIO DE INTERESSE ==================== */}
      <section
        id="reservar"
        className="relative py-20 sm:py-28 bg-primary overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/israel/jordan-river-group.jpg"
            alt="Grupo no Rio Jordão"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary/95" />

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-10">
            <Plane className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              Reserve Sua Vaga
            </h2>
            <p className="mt-4 text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato com
              todos os detalhes da viagem.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-accent font-bold text-lg">
                37 vagas restantes
              </span>
            </div>
          </div>

          {/* Form placeholder — will be replaced with GHL form */}
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
                  <option value="" className="bg-primary">
                    Selecione...
                  </option>
                  <option value="tdm" className="bg-primary">
                    TDM Church
                  </option>
                  <option value="instagram" className="bg-primary">
                    Instagram
                  </option>
                  <option value="youtube" className="bg-primary">
                    YouTube
                  </option>
                  <option value="amigo" className="bg-primary">
                    Indicação de amigo
                  </option>
                  <option value="outro" className="bg-primary">
                    Outro
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

      {/* ==================== CTA FINAL ==================== */}
      <section className="bg-accent py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary font-display">
            Vagas Limitadas. Não Deixe Para Depois.
          </h2>
          <p className="mt-3 text-primary/70 text-base sm:text-lg">
            Apenas 37 vagas restantes para a próxima viagem. Reserve a sua
            agora.
          </p>
          <div className="mt-6">
            <a
              href="tel:+17814803125"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors text-base"
            >
              Ligue Agora: (781) 480-3125
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
