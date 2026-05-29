import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  CreditCard,
  Globe,
  MapPin,
  Phone,
  Plane,
  Shield,
  Star,
  Users,
} from "lucide-react";

const trips = [
  {
    title: "Israel & Egito",
    date: "Abril 2027",
    duration: "10 dias",
    spots: 40,
    totalSpots: 80,
    highlights: [
      "Jerusalém",
      "Rio Jordão",
      "Pirâmides de Gizé",
      "Cairo",
      "Mar Morto",
    ],
    price: "A partir de 12x de $XXX",
    image: "/images/israel/jerusalem-group-1.jpg",
    href: "/viagens/israel-egito",
    description:
      "Dois países sagrados em uma viagem inesquecível. Da Terra Santa às Pirâmides do Egito.",
    badge: "2 Países",
  },
  {
    title: "7 Igrejas da Turquia",
    date: "Maio 2027",
    duration: "8 dias",
    spots: 35,
    totalSpots: 60,
    highlights: [
      "Éfeso",
      "Esmirna",
      "Pérgamo",
      "Tiatira",
      "Sardes",
      "Filadélfia",
      "Laodiceia",
    ],
    price: "A partir de 12x de $XXX",
    image: null,
    href: "/viagens/turquia",
    description:
      "Caminhe pelas 7 igrejas do Apocalipse. Uma jornada bíblica pela Turquia antiga.",
    badge: "Novo",
  },
  {
    title: "Israel",
    date: "Outubro 2026",
    duration: "10 dias",
    spots: 37,
    totalSpots: 100,
    highlights: [
      "Jerusalém",
      "Rio Jordão",
      "Mar da Galileia",
      "Nazaré",
      "Belém",
      "Mar Morto",
    ],
    price: "A partir de 12x de $XXX",
    image: "/images/pastor-alexandre-guitar-israel.jpg",
    href: "/israel",
    description:
      "A viagem clássica à Terra Santa. 25+ anos de tradição. Pise onde Jesus pisou.",
    badge: "Próxima",
  },
];

const reasons = [
  {
    icon: Star,
    title: "25+ Anos de Experiência",
    description:
      "Mais de 50 viagens realizadas à Terra Santa. Ninguém conhece Israel como o Pastor Alexandre.",
  },
  {
    icon: Globe,
    title: "Historiador e Pesquisador",
    description:
      "Não é turismo — é uma imersão bíblica e histórica conduzida por quem estudou cada local por décadas.",
  },
  {
    icon: CreditCard,
    title: "Pagamento Parcelado",
    description:
      "Pague em até 12x e realize seu sonho sem pesar no bolso. Facilidades de pagamento para todos.",
  },
  {
    icon: Plane,
    title: "Tudo Incluído",
    description:
      "Passagem aérea, hotel, todas as refeições, transporte e entradas. Você só precisa se preocupar em viver a experiência.",
  },
  {
    icon: Users,
    title: "Grupos Pequenos e Exclusivos",
    description:
      "Grupos limitados para uma experiência íntima e personalizada. Cada viajante recebe atenção individual.",
  },
  {
    icon: MapPin,
    title: "Guia Espiritual em Cada Local",
    description:
      "Em cada local sagrado, o Pastor Alexandre conduz momentos de adoração, oração e ensino bíblico profundo.",
  },
];

export default function ViagensPage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/israel/jerusalem-group-1.jpg"
            alt="Grupo com Pastor Alexandre em Jerusalém"
            fill
            priority
            className="object-cover sm:object-top opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40 w-full">
          <div className="max-w-3xl">
            <p className="text-accent text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-6">
              Israel &middot; Egito &middot; Turquia
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-white font-display">
              Viagens com
              <br />
              Pastor <span className="text-accent italic">Alexandre</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-white/60 max-w-lg leading-relaxed">
              Pague parcelado e realize seu sonho
            </p>
            <div className="mt-10">
              <Link
                href="#viagens"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent-light transition-colors text-base"
              >
                Escolha Sua Viagem
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TRIP CARDS ==================== */}
      <section id="viagens" className="py-20 sm:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14 sm:mb-20">
            <p className="text-accent text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Destinos
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              Escolha Sua <span className="italic">Jornada</span>
            </h2>
            <p className="mt-4 text-white/50 text-base sm:text-lg max-w-2xl mx-auto">
              Três destinos sagrados, uma experiência transformadora.
              Pague parcelado e realize seu sonho.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {trips.map((trip) => (
              <Link
                key={trip.title}
                href={trip.href}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-accent/40 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  {trip.image ? (
                    <Image
                      src={trip.image}
                      alt={trip.title}
                      fill
                      className="object-cover sm:object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#8B6F47] via-[#1A1A2E] to-[#C9A84C]/30" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-accent px-3 py-1.5 rounded">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                      {trip.badge}
                    </span>
                  </div>

                  {/* Date badge */}
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded border border-white/20">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                      {trip.date}
                    </span>
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      <span className="text-accent text-xs font-semibold">
                        {trip.duration}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-2">
                      {trip.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {trip.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {trip.highlights.slice(0, 4).map((h) => (
                        <span
                          key={h}
                          className="text-[10px] px-2 py-1 bg-white/10 text-white/70 rounded"
                        >
                          {h}
                        </span>
                      ))}
                      {trip.highlights.length > 4 && (
                        <span className="text-[10px] px-2 py-1 bg-white/10 text-white/70 rounded">
                          +{trip.highlights.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Price */}
                    <p className="text-accent font-bold text-sm mb-4">
                      {trip.price}
                    </p>

                    {/* Spots */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-white/50" />
                        <span className="text-white/50 text-xs">
                          {trip.spots} vagas restantes
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div
                        className="bg-accent rounded-full h-1.5"
                        style={{
                          width: `${((trip.totalSpots - trip.spots) / trip.totalSpots) * 100}%`,
                        }}
                      />
                    </div>

                    {/* CTA */}
                    <div className="mt-5 flex items-center gap-2 text-accent font-bold text-sm group-hover:gap-3 transition-all">
                      Saiba Mais
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY TRAVEL WITH US ==================== */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14 sm:mb-20">
            <p className="text-accent text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Diferenciais
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black font-display">
              Por Que Viajar <span className="italic">Conosco?</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group p-8 sm:p-10 bg-warm-50 border border-stone-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <reason.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-black group-hover:text-accent transition-colors">
                  {reason.title}
                </h3>
                <p className="mt-3 text-stone-500 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PAYMENT PLANS ==================== */}
      <section className="py-20 sm:py-28 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14 sm:mb-20">
            <p className="text-accent text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Pagamento Facilitado
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              Realize Seu Sonho
              <br />
              <span className="italic text-accent">Sem Pesar no Bolso</span>
            </h2>
            <p className="mt-4 text-white/50 text-base sm:text-lg max-w-2xl mx-auto">
              Pague parcelado e realize seu sonho de pisar na Terra Santa
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Main card */}
            <div className="bg-white/5 backdrop-blur-sm border border-accent/30 rounded-2xl p-8 sm:p-12 text-center">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-10 h-10 text-accent" />
              </div>
              <p className="text-accent text-5xl sm:text-6xl font-extrabold font-display mb-2">
                Até 12x
              </p>
              <p className="text-white/70 text-lg sm:text-xl">
                Pague mensalmente e viaje sem preocupação
              </p>

              <div className="mt-10 grid sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl border border-white/10">
                  <Shield className="w-8 h-8 text-accent mb-3" />
                  <p className="text-white font-bold text-sm">Segurança</p>
                  <p className="text-white/40 text-xs mt-1">
                    Pagamento protegido e garantido
                  </p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl border border-white/10">
                  <CheckCircle className="w-8 h-8 text-accent mb-3" />
                  <p className="text-white font-bold text-sm">Flexibilidade</p>
                  <p className="text-white/40 text-xs mt-1">
                    Parcelas que cabem no seu orçamento
                  </p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl border border-white/10">
                  <Plane className="w-8 h-8 text-accent mb-3" />
                  <p className="text-white font-bold text-sm">Tudo Incluído</p>
                  <p className="text-white/40 text-xs mt-1">
                    Passagem, hotel, refeições e mais
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA FOOTER ==================== */}
      <section className="relative py-20 sm:py-28 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/israel/jordan-baptism-5.jpg"
            alt="Batismo no Rio Jordão"
            fill
            className="object-cover sm:object-top opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-accent text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Chegou a Sua Vez
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Escolha Sua <span className="italic text-accent">Viagem</span>
          </h2>
          <p className="mt-6 text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Três destinos sagrados. Pagamento parcelado. Aberto para TODOS —
            qualquer pessoa, de qualquer igreja.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {trips.map((trip) => (
              <Link
                key={trip.title}
                href={trip.href}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-accent hover:text-primary transition-all text-sm border border-white/20 hover:border-accent"
              >
                {trip.title}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm mb-3">
              Dúvidas? Fale conosco:
            </p>
            <a
              href="tel:+17814803125"
              className="inline-flex items-center gap-2 text-accent font-bold text-lg hover:text-accent-light transition-colors"
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
