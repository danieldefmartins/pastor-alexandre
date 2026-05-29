"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle,
  ChevronDown,
  Church,
  CreditCard,
  Cross,
  Droplets,
  Globe,
  HelpCircle,
  Landmark,
  MapPin,
  Mountain,
  Phone,
  Pyramid,
  Star,
  Sunrise,
  Users,
  Waves,
} from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";

const itinerary = [
  {
    day: "Dia 1-2",
    title: "Jerusalém",
    description:
      "Muro das Lamentações, Via Dolorosa, Santo Sepulcro, Monte do Templo. Caminhe pelas ruas onde Jesus carregou a cruz.",
    icon: Church,
    image: "/images/israel/jerusalem-group-1.jpg",
  },
  {
    day: "Dia 3",
    title: "Monte das Oliveiras",
    description:
      "Vista panorâmica de Jerusalém, Getsêmani, adoração ao pôr do sol no jardim onde Jesus orou antes da crucificação.",
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
    title: "Mar da Galileia & Nazaré",
    description:
      "Onde Jesus andou sobre as águas e a cidade onde Ele cresceu. Estudo bíblico com o Pastor Alexandre.",
    icon: Waves,
    image: "/images/israel/galilee-teaching-1.jpg",
  },
  {
    day: "Dia 6",
    title: "Mar Morto",
    description:
      "Flutuação nas águas mais salgadas do mundo, o ponto mais baixo da Terra. Uma experiência única e inesquecível.",
    icon: Globe,
    image: "/images/israel/galilee-teaching-3.jpg",
  },
  {
    day: "Dia 7-8",
    title: "Cairo & Pirâmides de Gizé",
    description:
      "As majestosas Pirâmides do Egito, uma das Sete Maravilhas do Mundo Antigo. O cenário onde Moisés cresceu e onde o povo de Israel viveu.",
    icon: Landmark,
    image: null,
  },
  {
    day: "Dia 9",
    title: "Esfinge & Museu Egípcio",
    description:
      "A Grande Esfinge de Gizé e o Museu Egípcio com seus tesouros milenares, incluindo o acervo de Tutancâmon.",
    icon: Star,
    image: null,
  },
  {
    day: "Dia 10",
    title: "Retorno",
    description:
      "Últimos momentos no Egito e viagem de retorno. Você volta para casa transformado, com a Bíblia viva nos seus olhos.",
    icon: Sunrise,
    image: null,
  },
];

const faqs = [
  {
    question: "Preciso ser membro da TDM Church para participar?",
    answer:
      "Absolutamente não. A viagem é aberta para qualquer pessoa, de qualquer igreja ou sem igreja. O único requisito é o desejo de conhecer a Terra Santa e o Egito.",
  },
  {
    question: "Quanto custa a viagem?",
    answer:
      "O valor inclui tudo: passagem aérea, hotéis de qualidade, todas as refeições, transporte, entradas e guia. Oferecemos pagamento parcelado em até 12x. Entre em contato para valores atualizados.",
  },
  {
    question: "É seguro viajar para Israel e Egito?",
    answer:
      "Sim. O Pastor Alexandre viaja para Israel há mais de 25 anos e conhece profundamente a região. Trabalhamos com agências locais experientes e a segurança é sempre a prioridade número um.",
  },
  {
    question: "Preciso de visto para o Egito?",
    answer:
      "Brasileiros com passaporte americano não precisam de visto prévio para o Egito. Para portadores de passaporte brasileiro, o visto pode ser obtido na chegada. Nossa equipe orienta sobre toda a documentação necessária.",
  },
  {
    question: "O que está incluído no pacote?",
    answer:
      "Passagem aérea, hospedagem em hotéis de qualidade, todas as refeições, transporte terrestre, guia profissional, entradas em todos os locais, roupa de batismo e a liderança espiritual do Pastor Alexandre.",
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

export default function IsraelEgitoPage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[80vh] flex items-end bg-black overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/israel/jerusalem-group-1.jpg"
            alt="Grupo com Pastor Alexandre em Jerusalém"
            fill
            priority
            className="object-cover sm:object-top opacity-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 sm:pb-24 pt-32 w-full">
          <div className="w-10 h-px bg-accent mb-6" />
          <p className="text-accent text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Abril 2027 &middot; 10 Dias &middot; 2 Países
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-white font-display">
            Israel &
            <br />
            <span className="italic text-accent">Egito</span>
          </h1>
          <p className="mt-6 text-white/60 text-base sm:text-lg max-w-lg leading-relaxed">
            Da Terra Santa às Pirâmides. Dois países sagrados em uma viagem
            inesquecível com o Pastor Alexandre Mendes.
          </p>
        </div>
      </section>

      {/* ==================== STATS BAR ==================== */}
      <section className="bg-accent py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-3 gap-6 sm:gap-10 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-primary font-display">
                10
              </p>
              <p className="text-xs sm:text-sm text-primary/60 font-medium">
                Dias
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-primary font-display">
                2
              </p>
              <p className="text-xs sm:text-sm text-primary/60 font-medium">
                Países
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-primary font-display">
                25+
              </p>
              <p className="text-xs sm:text-sm text-primary/60 font-medium">
                Anos de Experiência
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ITINERARY — HORIZONTAL SCROLL ==================== */}
      <section className="py-20 sm:py-28 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-10 sm:mb-14">
          <div className="text-center">
            <p className="text-accent text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Roteiro
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              Da Terra Santa às <span className="italic">Pirâmides</span>
            </h2>
            <p className="mt-4 text-white/50 text-base sm:text-lg max-w-2xl mx-auto">
              Deslize para explorar cada dia da viagem
            </p>
          </div>
        </div>

        <div
          className="flex gap-4 sm:gap-6 overflow-x-auto px-6 sm:px-8 lg:px-12 pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {itinerary.map((item) => (
            <div
              key={item.title}
              className="group relative shrink-0 w-[280px] sm:w-[340px] lg:w-[380px] snap-start"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover sm:object-top group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#8B6F47] via-[#1A1A2E] to-[#C9A84C]/30" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4 bg-accent px-3 py-1.5 rounded">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {item.day}
                  </span>
                </div>

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

          {/* Final CTA card */}
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

      {/* ==================== PAGUE PARCELADO ==================== */}
      <section className="py-20 sm:py-28 bg-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-accent text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Pagamento Facilitado
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Pague Parcelado e
            <br />
            <span className="italic text-accent">Realize Seu Sonho</span>
          </h2>
          <p className="mt-4 text-white/50 text-base sm:text-lg max-w-2xl mx-auto">
            Até 12x sem pesar no bolso. Tudo incluído: passagem, hotel,
            refeições, transporte e entradas.
          </p>

          <div className="mt-10 bg-white/5 backdrop-blur-sm border border-accent/30 rounded-2xl p-8 sm:p-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <CreditCard className="w-8 h-8 text-accent" />
              <p className="text-accent text-4xl sm:text-5xl font-extrabold font-display">
                Até 12x
              </p>
            </div>
            <p className="text-white/60 text-lg">
              Pague mensalmente e viaje sem preocupação
            </p>
            <p className="mt-4 text-accent font-bold text-xl">
              A partir de 12x de $XXX
            </p>
          </div>
        </div>
      </section>

      {/* ==================== SPOTS + COUNTDOWN ==================== */}
      <section className="py-20 sm:py-28 bg-primary">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
            <div className="text-center">
              <CountdownTimer
                targetDate="2027-04-15T00:00:00"
                label="Contagem Regressiva — Abril 2027"
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
                  40
                </span>
                <span className="text-white/40 text-lg">/ 80</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 mt-3">
                <div
                  className="bg-accent rounded-full h-3"
                  style={{ width: "50%" }}
                />
              </div>
              <p className="text-white/30 text-xs mt-2">
                As vagas estão acabando
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BOOKING FORM ==================== */}
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
              Reserve sua vaga para Israel & Egito — Abril 2027
            </p>
          </div>

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
                  Viagem de Interesse
                </label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white/70 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30">
                  <option value="israel-egito" className="bg-black">
                    Israel & Egito — Abril 2027
                  </option>
                  <option value="turquia" className="bg-black">
                    7 Igrejas da Turquia — Maio 2027
                  </option>
                  <option value="israel" className="bg-black">
                    Israel — Outubro 2026
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">
                  Quantas pessoas viajarão?
                </label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white/70 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30">
                  <option value="1" className="bg-black">1 pessoa</option>
                  <option value="2" className="bg-black">2 pessoas</option>
                  <option value="3" className="bg-black">3 pessoas</option>
                  <option value="4" className="bg-black">4 ou mais</option>
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

      {/* ==================== FAQ ==================== */}
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

      {/* ==================== FINAL CTA ==================== */}
      <section className="relative py-20 sm:py-28 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/israel/jordan-baptism-5.jpg"
            alt="Momento emocionante no Jordão"
            fill
            className="object-cover sm:object-top opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white font-display">
            40 Vagas.
            <br />
            <span className="text-accent italic">
              Não Deixe Para Depois.
            </span>
          </h2>
          <p className="mt-6 text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Israel & Egito — Abril 2027. Pague parcelado e realize seu sonho
            de pisar na Terra Santa e nas Pirâmides.
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
