import type { Metadata } from "next";
import Link from "next/link";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de uso do site do Pastor Alexandre Mendes. Leia os termos e condicoes para uso do site e servicos.",
};

export default function TermosPage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light" />

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-28 sm:py-32 text-center">
          <FileText className="w-10 h-10 text-accent mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
            Termos de <span className="text-accent">Uso</span>
          </h1>
          <p className="mt-4 text-white/60 text-base sm:text-lg max-w-xl mx-auto">
            Leia atentamente os termos e condicoes de uso do nosso site e
            servicos.
          </p>
        </div>
      </section>

      {/* ==================== CONTENT ==================== */}
      <section className="py-16 sm:py-20 bg-warm-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="prose prose-stone prose-lg max-w-none">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-primary font-display mb-4">
                  1. Aceitacao dos Termos
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Ao acessar e usar este site, voce concorda em cumprir e
                  ficar vinculado a estes termos de uso. Se voce nao concordar
                  com qualquer parte destes termos, nao devera usar o site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary font-display mb-4">
                  2. Uso do Site
                </h2>
                <p className="text-stone-600 leading-relaxed mb-3">
                  Este site e destinado a fornecer informacoes sobre o
                  ministerio do Pastor Alexandre Mendes, incluindo:
                </p>
                <ul className="space-y-2 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2.5" />
                    Informacoes sobre viagens a Israel
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2.5" />
                    Agenda de eventos e conferencias
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2.5" />
                    Conteudo do ministerio musical e podcast
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2.5" />
                    Formularios de contato e inscricao
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary font-display mb-4">
                  3. Propriedade Intelectual
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Todo o conteudo deste site, incluindo textos, imagens,
                  logotipos, videos e musicas, e propriedade do Pastor
                  Alexandre Mendes ou de seus respectivos proprietarios e
                  esta protegido por leis de direitos autorais. O uso nao
                  autorizado de qualquer conteudo e estritamente proibido.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary font-display mb-4">
                  4. Viagens e Eventos
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  As informacoes sobre viagens a Israel e eventos publicadas
                  neste site sao de carater informativo. Os detalhes
                  especificos, incluindo precos, datas e disponibilidade,
                  podem estar sujeitos a alteracoes. Termos e condicoes
                  adicionais serao fornecidos no momento da reserva.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary font-display mb-4">
                  5. Limitacao de Responsabilidade
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  O Pastor Alexandre Mendes e sua equipe nao se
                  responsabilizam por quaisquer danos diretos, indiretos,
                  incidentais ou consequentes decorrentes do uso ou
                  incapacidade de uso deste site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary font-display mb-4">
                  6. Links Externos
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Este site pode conter links para sites de terceiros. Nao
                  temos controle sobre o conteudo ou as praticas de
                  privacidade desses sites e nao nos responsabilizamos por
                  eles.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary font-display mb-4">
                  7. Modificacoes dos Termos
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Reservamo-nos o direito de modificar estes termos de uso a
                  qualquer momento. As modificacoes entram em vigor
                  imediatamente apos a publicacao nesta pagina. O uso
                  continuado do site apos as modificacoes constitui aceitacao
                  dos novos termos.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary font-display mb-4">
                  8. Lei Aplicavel
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Estes termos sao regidos pelas leis do estado de
                  Massachusetts, Estados Unidos da America. Qualquer disputa
                  sera resolvida nos tribunais competentes do estado de
                  Massachusetts.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary font-display mb-4">
                  9. Contato
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Para duvidas sobre estes termos de uso, entre em contato:
                </p>
                <div className="mt-4 p-6 bg-cream rounded-xl border border-stone-200">
                  <p className="text-stone-700 font-semibold">
                    Pastor Alexandre Mendes
                  </p>
                  <p className="text-stone-500 text-sm mt-1">
                    539 Salem St, Malden, MA 02148
                  </p>
                  <p className="text-stone-500 text-sm">
                    Email: contato@pastoralexandre.com
                  </p>
                  <p className="text-stone-500 text-sm">
                    Telefone: (781) 480-3125
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-200">
                <p className="text-stone-400 text-sm">
                  Ultima atualizacao: Maio de 2026
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/privacidade"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-dark transition-colors"
            >
              Ver Politica de Privacidade
              <span className="text-accent">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
