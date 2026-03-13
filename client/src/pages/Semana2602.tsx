import { AlertCircle, CheckCircle2, TrendingUp, Clock, Heart, Download, Share2, Mail, MessageCircle, ExternalLink, Zap } from "lucide-react";
import { useRef, useState } from "react";

export default function Semana2602() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [shareEmail, setShareEmail] = useState("");
  const [shareMessage, setShareMessage] = useState("");
  const [showShareForm, setShowShareForm] = useState(false);

  const handleDownloadPDF = () => {
    alert("Funcionalidade de download em PDF será implementada em breve.");
  };

  const handleShareEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!shareEmail) return;

    const subject = encodeURIComponent("Jornalzinho RH - Edição 26 de Fevereiro 2026");
    const body = encodeURIComponent(
      `Olá,\n\n${shareMessage || "Segue em anexo o Jornalzinho RH com as atualizações de 26 de fevereiro de 2026."}\n\nAtenciosamente`
    );

    window.location.href = `mailto:${shareEmail}?subject=${subject}&body=${body}`;
    setShareEmail("");
    setShareMessage("");
    setShowShareForm(false);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      "Confira o Jornalzinho RH - Edição 26/02/2026: Prorrogação de Feriados, Habilidades de RH 2026, Retenção de Talentos e muito mais!"
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Action Bar */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="text-[#1e3a8a] font-semibold hover:underline flex items-center gap-2">
            ← Voltar ao Índice
          </a>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 bg-[#1e3a8a] text-white px-4 py-2 rounded-lg hover:bg-[#152a5f] transition-colors font-semibold text-sm"
            >
              <Download className="w-5 h-5" />
              Baixar PDF
            </button>
            <button
              onClick={() => setShowShareForm(!showShareForm)}
              className="flex items-center gap-2 bg-[#f97316] text-white px-4 py-2 rounded-lg hover:bg-[#d96300] transition-colors font-semibold text-sm"
            >
              <Share2 className="w-5 h-5" />
              Compartilhar
            </button>
            {showShareForm && (
              <button
                onClick={() => setShowShareForm(false)}
                className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors font-semibold text-sm"
              >
                Voltar
              </button>
            )}
          </div>
        </div>

        {/* Share Form */}
        {showShareForm && (
          <div className="max-w-6xl mx-auto px-4 py-6 bg-gray-50 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <form onSubmit={handleShareEmail} className="space-y-3">
                <h4 className="font-bold text-[#1e3a8a] flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Compartilhar por Email
                </h4>
                <input
                  type="email"
                  placeholder="Email do destinatário"
                  value={shareEmail}
                  onChange={(e) => setShareEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                  required
                />
                <textarea
                  placeholder="Mensagem (opcional)"
                  value={shareMessage}
                  onChange={(e) => setShareMessage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] resize-none h-20"
                />
                <button
                  type="submit"
                  className="w-full bg-[#1e3a8a] text-white py-2 rounded-lg hover:bg-[#152a5f] transition-colors font-semibold"
                >
                  Enviar por Email
                </button>
              </form>

              <div className="space-y-3">
                <h4 className="font-bold text-[#10b981] flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Compartilhar no WhatsApp
                </h4>
                <p className="text-sm text-gray-600">
                  Clique no botão abaixo para compartilhar o link do jornalzinho via WhatsApp
                </p>
                <button
                  onClick={handleShareWhatsApp}
                  className="w-full bg-[#10b981] text-white py-3 rounded-lg hover:bg-[#059669] transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Compartilhar no WhatsApp
                </button>
                <button
                  onClick={() => setShowShareForm(false)}
                  className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors font-semibold"
                >
                  Voltar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12" ref={contentRef}>
        {/* Header with Logo */}
        <div className="bg-gradient-to-r from-[#1e3a8a] via-[#2d5aa3] to-[#3b82f6] text-white p-8 rounded-lg mb-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663324672414/lKNFbgfUdlfSXjAJ.png"
              alt="Logo Gestão FX"
              className="w-20 h-20 drop-shadow-lg"
            />
            <div>
              <h1 className="text-4xl font-bold">Jornalzinho RH</h1>
              <p className="text-blue-100 text-sm mt-1">Edição 26 de Fevereiro 2026</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">RH</p>
            <p className="text-blue-100 text-sm">NEWSLETTER</p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="mb-12 bg-gradient-to-r from-[#1e3a8a]/10 to-[#f97316]/10 rounded-lg p-8 border-l-4 border-[#f97316]">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">Adiamento Crítico, Habilidades em Transformação e Retenção de Talentos</h2>
          <p className="text-gray-700 text-lg mb-4">
            Prorrogação de 90 dias na regra de trabalho em feriados, novas competências de RH 2026 e desafios urgentes de retenção
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Período:</strong> 26 de fevereiro de 2026 | <strong>Próxima atualização:</strong> 05 de março de 2026
          </p>
        </section>

        {/* Highlights Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8 flex items-center gap-3">
            <Zap className="w-8 h-8 text-[#f97316]" />
            Destaques da Semana
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div onClick={() => window.open('https://www.gov.br/trabalho-e-emprego/pt-br/noticias-e-conteudo/2026/fevereiro/governo-federal-prorroga-por-90-dias-regra-sobre-trabalho-em-feriados-no-comercio', '_blank')} className="block bg-gradient-to-br from-[#f97316] to-[#fb923c] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow hover:opacity-90 cursor-pointer">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 flex-shrink-0 text-white" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Prorrogação de 90 Dias</h3>
                  <p className="text-sm opacity-90">
                    Trabalho em feriados adiado para 01 de junho de 2026 (5ª vez)
                  </p>
                  <p className="text-xs mt-3 font-mono bg-white/20 px-2 py-1 rounded inline-block">
                    Nova Data: 01/06/2026
                  </p>
                </div>
              </div>
            </div>

            <div onClick={() => window.open('https://valor.globo.com/carreira/noticia/2026/02/25/quais-habilidades-sao-esperadas-do-rh-em-2026-segundo-o-linkedin.ghtml', '_blank')} className="block bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow hover:opacity-90 cursor-pointer">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 flex-shrink-0 text-white" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Habilidades de RH 2026</h3>
                  <p className="text-sm opacity-90">
                    LinkedIn identifica 5 competências críticas para CHROs
                  </p>
                  <p className="text-xs mt-3 font-mono bg-white/20 px-2 py-1 rounded inline-block">
                    Inteligência Artificial em 1º lugar
                  </p>
                </div>
              </div>
            </div>

            <div onClick={() => window.open('https://www.terra.com.br/noticias/kits-de-boasvindas-ganham-forca-na-retencao-de-talentos-em-2026', '_blank')} className="block bg-gradient-to-br from-[#10b981] to-[#34d399] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow hover:opacity-90 cursor-pointer">
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 flex-shrink-0 text-white" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Retenção de Talentos</h3>
                  <p className="text-sm opacity-90">
                    Onboarding eficaz eleva retenção em 82%
                  </p>
                  <p className="text-xs mt-3 font-mono bg-white/20 px-2 py-1 rounded inline-block">
                    Rotatividade em TI: até 35%
                  </p>
                </div>
              </div>
            </div>

            <div onClick={() => window.open('https://vocerh.abril.com.br/futurodotrabalho/5-tendencias-globais-que-redefinirao-a-gestao-de-pessoas-em-2026/', '_blank')} className="block bg-gradient-to-br from-[#8b5cf6] to-[#a78bfa] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow hover:opacity-90 cursor-pointer">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 flex-shrink-0 text-white" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Tendências Globais</h3>
                  <p className="text-sm opacity-90">
                    Escassez de talentos, crise de liderança e IA agêntica
                  </p>
                  <p className="text-xs mt-3 font-mono bg-white/20 px-2 py-1 rounded inline-block">
                    55% das empresas integrarão IA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-[#1e3a8a] via-[#f97316] to-[#10b981] mb-16"></div>

        {/* Section 1 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <AlertCircle className="w-12 h-12 text-[#f97316]" />
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a]">Prorrogação de 90 Dias: Trabalho em Feriados</h2>
              <p className="text-gray-600 mt-2">5º Adiamento - Nova Data: 01 de Junho de 2026</p>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-[#f97316] p-8 rounded-lg">
            <h3 className="text-xl font-bold text-[#f97316] mb-6">Governo Prorroga Portaria 3.665 por Mais 90 Dias</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded border border-[#f97316]">
                <p className="text-xs font-semibold text-[#f97316] mb-2">DECISÃO</p>
                <p className="text-2xl font-bold text-[#f97316]">5ª Vez</p>
                <p className="text-xs text-gray-600 mt-2">Adiamento consecutivo</p>
              </div>
              <div className="bg-white p-4 rounded border border-[#f97316]">
                <p className="text-xs font-semibold text-[#f97316] mb-2">NOVA DATA</p>
                <p className="text-2xl font-bold text-[#f97316]">01/06/2026</p>
                <p className="text-xs text-gray-600 mt-2">Entrada em vigor</p>
              </div>
              <div className="bg-white p-4 rounded border border-[#f97316]">
                <p className="text-xs font-semibold text-[#f97316] mb-2">SETORES</p>
                <p className="text-2xl font-bold text-[#f97316]">12+</p>
                <p className="text-xs text-gray-600 mt-2">Afetados diretamente</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#f97316] mb-8">
              <h4 className="font-bold text-[#1e3a8a] mb-4">Contexto e Justificativa</h4>
              <p className="text-sm text-gray-700 mb-4">
                O governo federal adiou pela quinta vez a entrada em vigor da Portaria 3.665, que restringe o trabalho em domingos e feriados no comércio. A justificativa oficial é ampliar o prazo para negociação entre empregadores e trabalhadores. O adiamento é particularmente relevante em 2026, que possui 9 feriados nacionais entre segunda e sexta-feira.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Requisito Principal:</strong> A partir de 01 de junho, trabalho em feriados só será permitido se houver acordo prévio em convenção coletiva.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-[#f97316]">
              <h4 className="font-bold text-[#1e3a8a] mb-4">⚠️ Recomendação Estratégica</h4>
              <ol className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold text-[#f97316] bg-orange-100 w-6 h-6 flex items-center justify-center rounded">1</span>
                  <span><strong>Até 15/05:</strong> Iniciar negociação com sindicatos para acordo coletivo</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#f97316] bg-orange-100 w-6 h-6 flex items-center justify-center rounded">2</span>
                  <span><strong>Até 01/06:</strong> Formalizar acordo ou suspender operações em domingos/feriados</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#f97316] bg-orange-100 w-6 h-6 flex items-center justify-center rounded">3</span>
                  <span><strong>Revisar:</strong> Impacto financeiro e operacional</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#f97316] bg-orange-100 w-6 h-6 flex items-center justify-center rounded">4</span>
                  <span><strong>Comunicar:</strong> Colaboradores sobre mudanças de escala</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-[#1e3a8a] via-[#f97316] to-[#10b981] my-16"></div>

        {/* Section 2 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <TrendingUp className="w-12 h-12 text-[#1e3a8a]" />
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a]">Habilidades de RH em 2026</h2>
              <p className="text-gray-600 mt-2">LinkedIn Identifica 5 Competências Críticas para CHROs</p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#1e3a8a] p-8 rounded-lg">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-6">Competências em Alta Demanda</h3>

            <div className="bg-white p-6 rounded-lg border border-[#1e3a8a] mb-8">
              <h4 className="font-bold text-[#1e3a8a] mb-6">5 Habilidades Críticas (Ranking LinkedIn)</h4>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <p className="font-bold text-[#1e3a8a]">Inteligência Artificial & Automação</p>
                    <p className="text-sm text-gray-600 mt-1">Maior competência em alta. Aplicações em recrutamento, análise de desempenho e treinamentos.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <p className="font-bold text-[#1e3a8a]">Gestão de Mudança Organizacional</p>
                    <p className="text-sm text-gray-600 mt-1">Redesenho de estruturas e adaptação a novos modelos de trabalho.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <p className="font-bold text-[#1e3a8a]">Conformidade Regulatória & Compliance</p>
                    <p className="text-sm text-gray-600 mt-1">Pressão crescente por conformidade legal e mitigação de riscos.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
                  <div>
                    <p className="font-bold text-[#1e3a8a]">Análise de Dados & People Analytics</p>
                    <p className="text-sm text-gray-600 mt-1">Decisões baseadas em dados e previsão de turnover.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">5</div>
                  <div>
                    <p className="font-bold text-[#1e3a8a]">Liderança Adaptativa & Resiliência</p>
                    <p className="text-sm text-gray-600 mt-1">Flexibilidade em cenários voláteis e gestão de transformação.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-[#1e3a8a]">
              <h4 className="font-bold text-[#1e3a8a] mb-4">Contexto: Transformação Acelerada</h4>
              <p className="text-sm text-gray-700 mb-3">
                A entrada acelerada de inteligência artificial está redefinindo o escopo de trabalho do RH. Estimativas indicam que <strong>55% das empresas integrarão IA em 2026</strong>, impactando diretamente a estrutura organizacional.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Desafio Principal:</strong> Viés e discriminação em sistemas de IA aplicados a recrutamento e avaliação de desempenho.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-[#1e3a8a] via-[#f97316] to-[#10b981] my-16"></div>

        {/* Section 3 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Heart className="w-12 h-12 text-[#10b981]" />
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a]">Retenção de Talentos: Urgência Crítica</h2>
              <p className="text-gray-600 mt-2">Rotatividade em TI Chega a 35% - Salários Não São Mais Suficientes</p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-[#10b981] p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded border border-[#10b981]">
                <p className="text-xs font-semibold text-[#10b981] mb-2">ROTATIVIDADE TI</p>
                <p className="text-2xl font-bold text-[#10b981]">35%</p>
                <p className="text-xs text-gray-600 mt-2">Taxa anual em setores críticos</p>
              </div>
              <div className="bg-white p-4 rounded border border-[#10b981]">
                <p className="text-xs font-semibold text-[#10b981] mb-2">IMPACTO ONBOARDING</p>
                <p className="text-2xl font-bold text-[#10b981]">+82%</p>
                <p className="text-xs text-gray-600 mt-2">Retenção com onboarding eficaz</p>
              </div>
              <div className="bg-white p-4 rounded border border-[#10b981]">
                <p className="text-xs font-semibold text-[#10b981] mb-2">LÍDERES AFETADOS</p>
                <p className="text-2xl font-bold text-[#10b981]">80%</p>
                <p className="text-xs text-gray-600 mt-2">CTOs com dificuldade de retenção</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#10b981]">
              <h4 className="font-bold text-[#1e3a8a] mb-4">Estratégias de Retenção 2026</h4>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-[#10b981] font-bold">✓</span>
                  <span><strong>Kits de Boas-vindas:</strong> Onboarding eficaz eleva retenção em 82% e produtividade em 70%</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#10b981] font-bold">✓</span>
                  <span><strong>Flexibilidade:</strong> Trabalho híbrido, horários flexíveis, home office</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#10b981] font-bold">✓</span>
                  <span><strong>Propósito:</strong> Alinhamento com valores da empresa e impacto social</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#10b981] font-bold">✓</span>
                  <span><strong>Desenvolvimento:</strong> Planos de carreira, treinamentos e mentoria</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#10b981] font-bold">✓</span>
                  <span><strong>Saúde Mental:</strong> Programas de bem-estar e suporte psicológico</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-[#1e3a8a] via-[#f97316] to-[#10b981] my-16"></div>

        {/* Section: Saiba Mais */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8">Saiba Mais</h2>
          <p className="text-gray-700 mb-8">
            Acesse os portais oficiais para informações contínuas sobre legislação trabalhista, conformidade e atualizações regulatórias:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://www.gov.br/trabalho-e-emprego/pt-br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-2 border-[#1e3a8a] p-6 rounded-lg hover:shadow-lg transition-shadow hover:bg-blue-50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-[#1e3a8a] group-hover:underline">Ministério do Trabalho</h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Portal oficial com legislação, portarias e notícias sobre relações de trabalho.
              </p>
              <p className="text-xs font-mono text-[#1e3a8a]">www.gov.br/trabalho-e-emprego</p>
            </a>

            <a
              href="https://www.stf.jus.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-2 border-[#f97316] p-6 rounded-lg hover:shadow-lg transition-shadow hover:bg-orange-50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#f97316] rounded-lg flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-[#f97316] group-hover:underline">Supremo Tribunal Federal</h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Acompanhe julgamentos e decisões sobre temas trabalhistas.
              </p>
              <p className="text-xs font-mono text-[#f97316]">www.stf.jus.br</p>
            </a>

            <a
              href="https://www.gov.br/inss/pt-br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-2 border-[#10b981] p-6 rounded-lg hover:shadow-lg transition-shadow hover:bg-green-50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#10b981] rounded-lg flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-[#10b981] group-hover:underline">INSS</h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Informações sobre benefícios, afastamentos e crédito consignado.
              </p>
              <p className="text-xs font-mono text-[#10b981]">www.gov.br/inss</p>
            </a>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t-2 border-[#e5e7eb] pt-12 mt-16">
          <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Conclusão</h3>
            <p className="text-sm opacity-95 mb-4">
              A edição de 26 de fevereiro marca um ponto crítico para o RH corporativo. O adiamento da regra de feriados cria oportunidade de negociação, mas também urgência. As habilidades de RH estão em transformação acelerada com IA no centro. A retenção de talentos é agora uma questão de sobrevivência competitiva. O RH estratégico de 2026 será aquele que dominar IA, negociar com sindicatos e reter talentos através de propósito e desenvolvimento.
            </p>
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663324672414/lKNFbgfUdlfSXjAJ.png"
                  alt="Logo Gestão FX"
                  className="w-8 h-8"
                />
                <p className="text-xs opacity-75">
                  <strong>Edição:</strong> 26 de fevereiro 2026 | <strong>Próxima atualização:</strong> 05 de março 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
