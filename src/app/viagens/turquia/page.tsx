"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Church,
  CreditCard,
  Flame,
  Globe,
  Heart,
  HelpCircle,
  Landmark,
  MapPin,
  Phone,
  ScrollText,
  Shield,
  Skull,
  Star,
  Thermometer,
  Users,
} from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";

const churches = [
  {
    number: 1,
    name: "Éfeso",
    subtitle: "A igreja que perdeu o primeiro amor",
    verse: "Apocalipse 2:1-7",
    description:
      "A maior cidade da Ásia Menor. Aqui Paulo pregou por 3 anos e João escreveu seu Evangelho. Você verá o Grande Teatro, a Biblioteca de Celso e a casa onde, segundo a tradição, Maria viveu seus últimos dias.",
    whatYouSee: "Grande Teatro de 25.000 lugares, Biblioteca de Celso, Ágora, ruínas da cidade antiga",
    icon: Heart,
  },
  {
    number: 2,
    name: "Esmirna",
    subtitle: "A igreja perseguida",
    verse: "Apocalipse 2:8-11",
    description:
      "A cidade do sofrimento e da fidelidade. Policarpo, discípulo de João, foi martirizado aqui. Jesus não tem críticas a esta igreja — apenas encorajamento para perseverar.",
    whatYouSee: "Ágora antiga, ruínas romanas, Monte Pagos, local do martírio de Policarpo",
    icon: Shield,
  },
  {
    number: 3,
    name: "Pérgamo",
    subtitle: "A igreja que compromete",
    verse: "Apocalipse 2:12-17",
    description:
      "A cidade onde Satanás tinha seu trono. Centro de adoração a Zeus com o famoso Altar de Pérgamo. A igreja aqui enfrentava a tentação de comprometer sua fé com o paganismo ao redor.",
    whatYouSee: "Acrópole, Altar de Zeus, Asklepion (centro de cura antiga), anfiteatro",
    icon: Flame,
  },
  {
    number: 4,
    name: "Tiatira",
    subtitle: "A igreja tolerante",
    verse: "Apocalipse 2:18-29",
    description:
      "Cidade de guildas comerciais e da vendedora de púrpura, Lídia. A igreja tolerava falsos ensinamentos. Jesus a adverte mas promete autoridade sobre as nações aos que vencem.",
    whatYouSee: "Ruínas da basílica, colunas da cidade antiga, sítio arqueológico",
    icon: ScrollText,
  },
  {
    number: 5,
    name: "Sardes",
    subtitle: "A igreja morta",
    verse: "Apocalipse 3:1-6",
    description:
      "A cidade do ouro — onde a moeda foi inventada. Rica e poderosa, mas espiritualmente morta. Jesus diz: 'Tens nome de que vives, mas estás morto.' Um alerta para igrejas de aparência.",
    whatYouSee: "Templo de Ártemis, ginásio romano, sinagoga antiga, ruínas da cidade",
    icon: Skull,
  },
  {
    number: 6,
    name: "Filadélfia",
    subtitle: "A igreja fiel",
    verse: "Apocalipse 3:7-13",
    description:
      "A cidade do amor fraternal. A segunda igreja sem críticas de Jesus. 'Diante de ti coloquei uma porta aberta que ninguém pode fechar.' Uma mensagem de esperança para os fiéis.",
    whatYouSee: "Ruínas da basílica bizantina, pilares do templo, cidade moderna de Alaşehir",
    icon: Star,
  },
  {
    number: 7,
    name: "Laodiceia",
    subtitle: "A igreja morna",
    verse: "Apocalipse 3:14-22",
    description:
      "A cidade rica que não precisava de nada — mas era miserável, pobre e cega. 'Eis que estou à porta e bato.' A mensagem mais conhecida do Apocalipse, vinda desta cidade.",
    whatYouSee: "Extensas ruínas, teatro, estádio, sistema de aquedutos, igreja primitiva",
    icon: Thermometer,
  },
];

const itinerary = [
  {
    day: "Dia 1",
    title: "Chegada à Turquia",
    description:
      "Chegada a Istambul ou Izmir. Acomodação no hotel e primeira reunião devocional com o Pastor Alexandre.",
    icon: Globe,
  },
  {
    day: "Dia 2",
    title: "Éfeso",
    description:
      "Dia inteiro em Éfeso: Grande Teatro, Biblioteca de Celso, Casa de Maria. Estudo bíblico no local.",
    icon: Landmark,
  },
  {
    day: "Dia 3",
    title: "Esmirna",
    description:
      "Visita às ruínas de Esmirna, Monte Pagos e local do martírio de Policarpo. Adoração e oração.",
    icon: Shield,
  },
  {
    day: "Dia 4",
    title: "Pérgamo",
    description:
      "Acrópole de Pérgamo, Altar de Zeus, Asklepion. Estudo sobre o trono de Satanás e a fé que resiste.",
    icon: Flame,
  },
  {
    day: "Dia 5",
    title: "Tiatira & Sardes",
    description:
      "Duas igrejas em um dia. Ruínas de Tiatira pela manhã, Templo de Ártemis em Sardes à tarde.",
    icon: Church,
  },
  {
    day: "Dia 6",
    title: "Filadélfia",
    description:
      "A cidade do amor fraternal. Ruínas da basílica bizantina e estudo sobre a porta aberta de Deus.",
    icon: Star,
  },
  {
    day: "Dia 7",
    title: "Laodiceia",
    description:
      "Extensas ruínas de Laodiceia, teatro e aquedutos. Encerramento com adoração sobre a mensagem final do Apocalipse.",
    icon: BookOpen,
  },
  {
    day: "Dia 8",
    title: "Retorno",
    description:
      "Últimos momentos na Turquia e viagem de retorno. Você leva consigo as 7 mensagens do Apocalipse vivas no coração.",
    icon: MapPin,
  },
];

const faqs = [
  {
    question: "Preciso ser membro da TDM Church para participar?",
    answer:
      "Absolutamente não. A viagem é aberta para qualquer pessoa, de qualquer igreja ou sem igreja. O único requisito é o desejo de conhecer as 7 Igrejas do Apocalipse.",
  },
  {
    question: "Quanto custa a viagem?",
    answer:
      "O valor inclui tudo: passagem aérea, hotéis de qualidade, todas as refeições, transporte, entradas e guia. Oferecemos pagamento parcelado em até 12x. Entre em contato para valores atualizados.",
  },
  {
    question: "É seguro viajar para a Turquia?",
    answer:
      "Sim. A Turquia é um destino turístico popular e seguro, recebendo milhões de visitantes por ano. As regiões que visitamos são turísticas e bem estruturadas.",
  },
  {
    question: "Preciso de visto para a Turquia?",
    answer:
      "Portadores de passaporte americano podem obter um e-visto online facilmente. Portadores de passaporte brasileiro não precisam de visto para estadias de até 90 dias. Nossa equipe orienta sobre toda a documentação.",
  },
  {
    question: "O que está incluído no pacote?",
    answer:
      "Passagem aérea, hospedagem em hotéis de qualidade, todas as refeições, transporte terrestre, guia profissional, entradas em todos os sítios arqueológicos e a liderança espiritual do Pastor Alexandre.",
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

export default function TurquiaPage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[80vh] flex items-end bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B6F47]/40 via-[#1A1A2E] to-[#C9A84C]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 sm:pb-24 pt-32 w-full">
          <div className="w-10 h-px bg-accent mb-6" />
          <p className="text-accent text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Maio 2027 &middot; 8 Dias &middot; 7 Igrejas do Apocalipse
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-white font-display">
            7 Igrejas da
            <br />
            <span className="italic text-accent">Turquia</span>
          </h1>
          <p className="mt-6 text-white/60 text-base sm:text-lg max-w-lg leading-relaxed">
            Caminhe pelas 7 igrejas do Apocalipse. Uma jornada bíblica pela
            Turquia antiga com o Pastor Alexandre Mendes.
          </p>
        </div>
      </section>

      {/* ==================== STATS BAR ==================== */}
      <section className="bg-accent py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-3 gap-6 sm:gap-10 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-primary font-display">
                8
              </p>
              <p className="text-xs sm:text-sm text-primary/60 font-medium">
                Dias
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-primary font-display">
                7
              </p>
              <p className="text-xs sm:text-sm text-primary/60 font-medium">
                Igrejas do Apocalipse
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

      {/* ==================== 7 CHURCHES ==================== */}
      <section className="py-20 sm:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14 sm:mb-20">
            <p className="text-accent text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Apocalipse 2-3
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              As 7 Igrejas do <span className="italic">Apocalipse</span>
            </h2>
            <p className="mt-4 text-white/50 text-base sm:text-lg max-w-2xl mx-auto">
              Sete mensagens de Jesus Cristo para sete igrejas. Sete cidades que
              você vai pisar com seus próprios pés.
            </p>
          </div>

          <div className="space-y-6">
            {churches.map((church) => (
              <div
                key={church.name}
                className="group bg-white/5 border border-white/10 hover:border-accent/30 rounded-2xl p-6 sm:p-8 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                  {/* Number + Icon */}
                  <div className="flex items-start gap-4 lg:min-w-[200px]">
                    <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/30 transition-colors">
                      <span className="text-accent text-2xl font-extrabold font-display">
                        {church.number}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-accent transition-colors">
                        {church.name}
                      </h3>
                      <p className="text-accent/80 text-sm italic mt-0.5">
                        {church.subtitle}
                      </p>
                      <p className="text-white/30 text-xs mt-1">
                        {church.verse}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                      {church.description}
                    </p>
                    <div className="mt-4 flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <p className="text-white/40 text-xs sm:text-sm">
                        <span className="text-white/60 font-medium">O que você verá:</span>{" "}
                        {church.whatYouSee}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ITINERARY — HORIZONTAL SCROLL ==================== */}
      <section className="py-20 sm:py-28 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-10 sm:mb-14">
          <div className="text-center">
            <p className="text-accent text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Roteiro
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              8 Dias pela <span className="italic">Turquia Bíblica</span>
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
              key={item.day}
              className="group relative shrink-0 w-[280px] sm:w-[340px] lg:w-[380px] snap-start"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <div className="w-full h-full bg-gradient-to-br from-[#8B6F47]/60 via-[#1A1A2E] to-[#C9A84C]/20" />
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
                8
              </p>
              <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-2">
                Dias que vão
              </p>
              <p className="text-white font-bold text-xl sm:text-2xl font-display">
                Transformar
                <br />
                <span className="text-accent italic">Sua Fé</span>
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
      <section className="py-20 sm:py-28 bg-primary">
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
      <section className="py-20 sm:py-28 bg-black">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
            <div className="text-center">
              <CountdownTimer
                targetDate="2027-05-15T00:00:00"
                label="Contagem Regressiva — Maio 2027"
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
                  35
                </span>
                <span className="text-white/40 text-lg">/ 60</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 mt-3">
                <div
                  className="bg-accent rounded-full h-3"
                  style={{ width: "42%" }}
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
        className="relative py-20 sm:py-32 bg-primary overflow-hidden"
      >
        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
              Chegou a{" "}
              <span className="text-accent italic">Sua Vez</span>
            </h2>
            <p className="mt-4 text-white/50 text-base sm:text-lg max-w-2xl mx-auto">
              Reserve sua vaga para as 7 Igrejas da Turquia — Maio 2027
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
                  <option value="turquia" className="bg-black">
                    7 Igrejas da Turquia — Maio 2027
                  </option>
                  <option value="israel-egito" className="bg-black">
                    Israel & Egito — Abril 2027
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
      <section className="py-20 sm:py-28 bg-black">
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
      <section className="relative py-20 sm:py-28 bg-primary overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white font-display">
            35 Vagas.
            <br />
            <span className="text-accent italic">
              Não Deixe Para Depois.
            </span>
          </h2>
          <p className="mt-6 text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            7 Igrejas da Turquia — Maio 2027. Pague parcelado e caminhe pelas
            igrejas do Apocalipse com o Pastor Alexandre.
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
