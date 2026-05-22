import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Music,
  BookOpen,
  Heart,
  MapPin,
  Plane,
  Church,
  Users,
  Star,
  Mic,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a história do Pastor Alexandre Mendes. Pregador internacional, cantor, pai, marido e guia de Israel há 26 anos. Fundador do Templo dos Milagres.",
};

const stats = [
  { number: "30", label: "Anos de Ministério", suffix: "" },
  { number: "26", label: "Anos em Israel", suffix: "" },
  { number: "52", label: "Viagens a Israel", suffix: "+" },
  { number: "1000", label: "Vidas Transformadas", suffix: "+" },
];

const timeline = [
  {
    year: "1996",
    title: "Chegada aos EUA",
    description:
      "Ainda jovem, Alexandre Mendes chega aos Estados Unidos com um chamado divino e uma paixão inabalável pelo estudo da Palavra de Deus.",
    icon: Plane,
  },
  {
    year: "1996",
    title: "Início do Ministério",
    description:
      "Começa a realizar cruzadas e campanhas de milagres que tocam centenas de vidas. O poder de Deus se manifesta de maneira sobrenatural.",
    icon: BookOpen,
  },
  {
    year: "1997",
    title: "Fundação do Templo dos Milagres",
    description:
      "As cruzadas e campanhas de milagres crescem e se tornam o Templo dos Milagres, uma igreja dedicada à Palavra e ao louvor.",
    icon: Church,
  },
  {
    year: "2000",
    title: "Primeira Viagem a Israel",
    description:
      "Começa a tradição de levar grupos à Terra Santa, compartilhando seu profundo conhecimento bíblico em cada local sagrado.",
    icon: MapPin,
  },
  {
    year: "2005",
    title: "Ministério Musical",
    description:
      "Desenvolve seu ministério de louvor e adoração, gravando músicas que inspiram milhares de fiéis em todo o mundo.",
    icon: Music,
  },
  {
    year: "2010",
    title: "Pregador Internacional",
    description:
      "Seu ministério se expande internacionalmente, pregando em conferências ao redor do mundo com autoridade e paixão.",
    icon: Globe,
  },
  {
    year: "2020",
    title: "TDM Talk Podcast",
    description:
      "Lança o podcast TDM Talk, trazendo conversas profundas sobre fé, liderança e propósito com grandes líderes cristãos.",
    icon: Mic,
  },
  {
    year: "Hoje",
    title: "Um Legado Vivo",
    description:
      "Continua pastoreando, pregando, cantando e levando centenas de pessoas a Israel duas vezes por ano. Um ministério que não para de crescer.",
    icon: Star,
  },
];

const roles = [
  {
    title: "Pastor",
    description:
      "Líder do Templo dos Milagres em Malden, MA, pastoreando com amor e dedicação há quase 30 anos.",
    icon: Church,
  },
  {
    title: "Pregador Internacional",
    description:
      "Mensagens poderosas em conferências ao redor do mundo, levando a Palavra com autoridade e unção.",
    icon: Globe,
  },
  {
    title: "Cantor & Adorador",
    description:
      "Um ministério de louvor que toca corações e conduz a igreja à presença de Deus.",
    icon: Music,
  },
  {
    title: "Guia de Israel",
    description:
      "26 anos conduzindo viagens à Terra Santa. Cada pedra conta uma história bíblica viva.",
    icon: MapPin,
  },
  {
    title: "Pai & Marido",
    description:
      "Casado com Rebecca Huewes, Alexandre vive o que prega: família é o primeiro ministério.",
    icon: Heart,
  },
  {
    title: "Líder de Comunidade",
    description:
      "Uma comunidade vibrante de fiéis que crescem juntos na fé e no propósito de Deus.",
    icon: Users,
  },
];

export default function SobrePage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[70vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,168,76,0.08),transparent_70%)]" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-6">
                A Jornada de Um Homem de Deus
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-white font-display">
                Pastor
                <br />
                Alexandre
                <br />
                <span className="text-accent">Mendes</span>
              </h1>
              <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-lg leading-relaxed">
                Pastor, pregador internacional, cantor, pai, marido e guia de
                Israel. Uma vida inteiramente dedicada à Palavra de Deus e ao
                serviço do próximo.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/israel"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent-light transition-colors text-base"
                >
                  <Plane className="w-5 h-5" />
                  Viagem a Israel
                </Link>
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm text-base border border-white/20"
                >
                  Entre em Contato
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-accent/10 to-primary-light/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Heart className="w-16 h-16 text-accent/30 mx-auto mb-4" />
                  <p className="text-white/30 text-sm">
                    Foto do Pastor Alexandre
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent rounded-2xl shadow-xl p-5 text-center">
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

      {/* ==================== STATS ==================== */}
      <section className="bg-accent py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-5xl font-extrabold text-primary">
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

      {/* ==================== HISTÓRIA ==================== */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionHeading
                label="A História"
                title="De Jovem Imigrante a Líder Espiritual"
                center={false}
              />
              <div className="space-y-6 text-base sm:text-lg text-stone-600 leading-relaxed">
                <p>
                  Em 1996, ainda jovem, Alexandre Mendes chegou aos Estados
                  Unidos carregando mais do que sonhos — carregava um chamado
                  divino que mudaria milhares de vidas. Desde o início, sua
                  paixão era o estudo profundo da Palavra de Deus.
                </p>
                <p>
                  Com dedicação incansável, Alexandre começou a realizar
                  cruzadas e campanhas de milagres que rapidamente ganharam
                  projeção. O poder de Deus se manifestava de maneira
                  sobrenatural em cada reunião, e vidas eram transformadas.
                  Essas campanhas deram origem ao{" "}
                  <strong className="text-primary">
                    Templo dos Milagres (TDM Church)
                  </strong>
                  , uma igreja que se tornaria referência na comunidade
                  brasileira nos Estados Unidos.
                </p>
                <p>
                  Casado com{" "}
                  <strong className="text-primary">Rebecca Huewes</strong>{" "}
                  <span className="text-accent">(@rebeccahuewes)</span>,
                  Alexandre constrói seu ministério sobre a base sólida da
                  família. Rebecca é uma mulher de fé que caminha lado a lado
                  em cada missão, cada viagem a Israel e cada momento de
                  adoração.
                </p>
                <p>
                  Pregador internacional, cantor e adorador, Alexandre é
                  reconhecido por mensagens que impactam e transformam. Sua voz
                  ecoa em conferências ao redor do mundo, sempre com a mesma
                  convicção: a Palavra de Deus é viva e eficaz.
                </p>
                <p>
                  Há 26 anos, Alexandre viaja para Israel duas vezes por ano,
                  conduzindo grupos pela Terra Santa com um conhecimento
                  bíblico profundo que transforma cada pedra em uma página viva
                  das Escrituras. Israel é a sua segunda casa.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <BookOpen className="w-16 h-16 text-accent/30 mx-auto mb-4" />
                  <p className="text-stone-400 text-sm">
                    Foto do Pastor Alexandre pregando
                  </p>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-16 h-16 text-accent/30 mx-auto mb-4" />
                  <p className="text-stone-400 text-sm">
                    Foto com a família
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TIMELINE ==================== */}
      <section className="py-20 sm:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Linha do Tempo"
            title="Os Marcos de Uma Vida de Fé"
            description="Cada capítulo desta jornada é marcado pela mão de Deus guiando o caminho."
            light
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-accent/20" />

            <div className="space-y-8 sm:space-y-10">
              {timeline.map((item) => (
                <div key={item.title} className="relative pl-16 sm:pl-20">
                  {/* Icon circle */}
                  <div className="absolute left-0 top-0 w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-xl flex items-center justify-center border border-accent/20">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>

                  <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-accent/30 transition-colors">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PAPÉIS / MINISTÉRIOS ==================== */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Ministério"
            title="Múltiplos Chamados, Uma Missão"
            description="Pastor Alexandre serve ao Reino de Deus de diversas formas, cada uma com o mesmo propósito: transformar vidas."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {roles.map((role) => (
              <div
                key={role.title}
                className="group p-8 bg-white rounded-2xl border border-stone-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <role.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                  {role.title}
                </h3>
                <p className="mt-3 text-stone-500 leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAMÍLIA ==================== */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
              <div className="text-center">
                <Heart className="w-16 h-16 text-accent/30 mx-auto mb-4" />
                <p className="text-stone-400 text-sm">
                  Foto da família
                </p>
              </div>
            </div>

            <div>
              <SectionHeading
                label="Família"
                title="A Base de Tudo"
                center={false}
              />
              <div className="space-y-4 text-base sm:text-lg text-stone-600 leading-relaxed">
                <p>
                  Para o Pastor Alexandre, a família é o primeiro ministério.
                  Casado com <strong className="text-primary">Rebecca Huewes</strong>,
                  juntos eles lideram o Templo dos Milagres com amor, dedicação
                  e a convicção de que uma família forte gera uma igreja forte.
                </p>
                <p>
                  Rebecca caminha lado a lado com Alexandre em cada missão,
                  cada viagem a Israel e cada momento de adoração. Juntos, eles
                  são exemplo de fé, parceria e propósito.
                </p>
                <p>
                  Como pai, Alexandre vive o que prega — dedicação, presença e
                  amor incondicional. Sua família é testemunho vivo do poder de
                  Deus na vida de quem o serve com integridade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="bg-accent py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary font-display">
            Quer Conhecer Israel com o Pastor Alexandre?
          </h2>
          <p className="mt-3 text-primary/70 text-base sm:text-lg">
            26 anos de experiência guiando grupos pela Terra Santa. Uma
            experiência que transforma sua fé para sempre.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/israel"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors text-base"
            >
              <Plane className="w-5 h-5" />
              Viagem a Israel
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-stone-50 transition-colors text-base"
            >
              Entre em Contato
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
