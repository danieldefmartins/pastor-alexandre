import type { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Politica de Privacidade",
  description:
    "Politica de privacidade do site do Pastor Alexandre Mendes. Saiba como coletamos, usamos e protegemos suas informações pessoais.",
};

export default function PrivacidadePage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light" />

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-28 sm:py-32 text-center">
          <Shield className="w-10 h-10 text-accent mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
            Politica de <span className="text-accent">Privacidade</span>
          </h1>
          <p className="mt-4 text-white/60 text-base sm:text-lg max-w-xl mx-auto">
            Sua privacidade e importante para nos. Leia abaixo como coletamos,
            usamos e protegemos suas informacoes.
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
                  1. Informacoes que Coletamos
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Coletamos informacoes que voce nos fornece diretamente, como
                  nome, email, telefone e mensagens enviadas atraves dos
                  formularios do site. Tambem podemos coletar informacoes
                  automaticamente, como endereco IP, tipo de navegador e
                  paginas visitadas.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary font-display mb-4">
                  2. Como Usamos Suas Informacoes
                </h2>
                <p className="text-stone-600 leading-relaxed mb-3">
                  Utilizamos suas informacoes para:
                </p>
                <ul className="space-y-2 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2.5" />
                    Responder suas mensagens e solicitacoes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2.5" />
                    Enviar informacoes sobre eventos, viagens a Israel e
                    atividades do ministerio
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2.5" />
                    Melhorar nosso site e a experiencia do usuario
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2.5" />
                    Processar inscricoes para viagens e eventos
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary font-display mb-4">
                  3. Compartilhamento de Informacoes
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Nao vendemos, alugamos ou compartilhamos suas informacoes
                  pessoais com terceiros, exceto quando necessario para
                  processar servicos solicitados por voce (como reservas de
                  viagens) ou quando exigido por lei.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary font-display mb-4">
                  4. Seguranca dos Dados
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Implementamos medidas de seguranca tecnicas e organizacionais
                  para proteger suas informacoes pessoais contra acesso nao
                  autorizado, alteracao, divulgacao ou destruicao.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary font-display mb-4">
                  5. Cookies
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Nosso site pode utilizar cookies para melhorar a experiencia
                  de navegacao. Voce pode configurar seu navegador para recusar
                  cookies, embora isso possa afetar algumas funcionalidades do
                  site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary font-display mb-4">
                  6. Seus Direitos
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Voce tem o direito de acessar, corrigir ou solicitar a
                  exclusao de suas informacoes pessoais a qualquer momento.
                  Para exercer esses direitos, entre em contato conosco
                  atraves do email{" "}
                  <a
                    href="mailto:contato@pastoralexandre.com"
                    className="text-accent hover:text-accent-dark transition-colors font-semibold"
                  >
                    contato@pastoralexandre.com
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary font-display mb-4">
                  7. Alteracoes nesta Politica
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Reservamo-nos o direito de atualizar esta politica de
                  privacidade a qualquer momento. Quaisquer alteracoes serao
                  publicadas nesta pagina com a data de atualizacao.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary font-display mb-4">
                  8. Contato
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Se voce tiver duvidas sobre esta politica de privacidade,
                  entre em contato conosco:
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
              href="/contato"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-dark transition-colors"
            >
              Duvidas? Entre em contato
              <span className="text-accent">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
