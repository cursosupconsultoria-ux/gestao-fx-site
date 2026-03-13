import { AlertCircle, CheckCircle2, TrendingUp, Clock, DollarSign, Heart, Download, Share2, Mail, MessageCircle, ExternalLink } from "lucide-react";
import { useRef, useState } from "react";

/**
 * Design Philosophy: Editorial Corporativo Sofisticado
 * - Hierarquia tipográfica clara com Poppins para títulos
 * - Paleta de cores estratégica: Azul profundo (#1e3a8a), Laranja (#f97316), Verde (#10b981)
 * - Espaçamento generoso e tipografia diferenciada (IBM Plex Mono para dados)
 * - Componentes visuais que destacam informações críticas
 */

export default function Semana1102() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [shareEmail, setShareEmail] = useState("");
  const [shareMessage, setShareMessage] = useState("");
  const [showShareForm, setShowShareForm] = useState(false);

  const handleDownloadPDF = () => {
    alert("Funcionalidade de download em PDF sera implementada em breve.");
  };

  const handleShareEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!shareEmail) return;

    const subject = encodeURIComponent("Jornalzinho RH - Edição 11 de Fevereiro 2026");
    const body = encodeURIComponent(
      `Olá,\n\n${shareMessage || "Segue em anexo o Jornalzinho RH com as atualizações de 11 de fevereiro de 2026."}\n\nAtenciosamente`
    );

    window.location.href = `mailto:${shareEmail}?subject=${subject}&body=${body}`;
    setShareEmail("");
    setShareMessage("");
    setShowShareForm(false);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      "Confira o Jornalzinho RH - Edição 11/02/2026 com as principais atualizações legislativas e tendências de RH!"
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Action Bar */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/novidades-rh" className="text-[#1e3a8a] font-semibold hover:underline flex items-center gap-2">
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
              {/* Email Form */}
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

              {/* WhatsApp Share */}
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
              <p className="text-blue-100 text-sm mt-1">Edição 11 de Fevereiro 2026</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">RH</p>
            <p className="text-blue-100 text-sm">NEWSLETTER</p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="mb-12 bg-gradient-to-r from-[#1e3a8a]/10 to-[#f97316]/10 rounded-lg p-8 border-l-4 border-[#f97316]">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">Inteligência Estratégica em Capital Humano</h2>
          <p className="text-gray-700 text-lg mb-4">
            Relatório Executivo sobre Conformidade, Custos e Transformação
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Período:</strong> 11 de fevereiro de 2026 | <strong>Próxima atualização:</strong> 18 de fevereiro de 2026
          </p>
        </section>

        {/* Highlights Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8 flex items-center gap-3">
            <AlertCircle className="w-8 h-8 text-[#f97316]" />
            Destaques do Mês
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Highlight Card 1 */}
            <a href="https://www.conjur.com.br/2026-fev-06/pgr-defende-competencia-da-justica-comum-para-avaliar-pejotizacao/" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow hover:opacity-90">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 flex-shrink-0 text-[#f97316]" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Parecer da PGR</h3>
                  <p className="text-sm opacity-90">
                    Paulo Gonet defende constitucionalidade da contratação via PJ
                  </p>
                  <p className="text-xs mt-3 font-mono bg-white/20 px-2 py-1 rounded inline-block">
                    Status: Favorável
                  </p>
                </div>
              </div>
            </a>

            {/* Highlight Card 2 */}
            <a href="https://www.gov.br/trabalho-e-emprego/pt-br/noticias-e-conteudo/2026/fevereiro/novas-regras-do-programa-de-alimentacao-do-trabalhador-entram-em-vigor-nesta-terca-feira-10" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-[#f97316] to-[#fb923c] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow hover:opacity-90">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 flex-shrink-0 text-white" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Novo PAT</h3>
                  <p className="text-sm opacity-90">
                    Fim dos rebates e novas taxas em vigor
                  </p>
                  <p className="text-xs mt-3 font-mono bg-white/20 px-2 py-1 rounded inline-block">
                    Vigência: 12/02/2026
                  </p>
                </div>
              </div>
            </a>

            {/* Highlight Card 3 */}
            <a href="https://www.gov.br/secom/pt-br/acompanhe-a-secom/noticias/2026/01/nova-tabela-do-ir-veja-faixas-e-aliquotas-e-saiba-mais-sobre-medida-que-isenta-o-pagamento-para-quem-ganha-ate-r-5-mil" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-[#10b981] to-[#34d399] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow hover:opacity-90">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 flex-shrink-0 text-white" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Isenção de IR</h3>
                  <p className="text-sm opacity-90">
                    Nova tabela isenta rendas até R$ 5.000,00
                  </p>
                  <p className="text-xs mt-3 font-mono bg-white/20 px-2 py-1 rounded inline-block">
                    Vigência: 2026
                  </p>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-[#1e3a8a] via-[#f97316] to-[#10b981] mb-16"></div>

        {/* Section 1: Legislação e Compliance */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/tJPnxEY9O8zrI5huKhRCpw/sandbox/7idyYTGG2M30SPMVDm1HSz_1770670013467_na1fn_Y29tcGxpYW5jZS1pY29u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80"
              alt="Compliance"
              className="w-20 h-20"
            />
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a]">Legislação e Compliance</h2>
              <p className="text-gray-600 mt-2">Gestão de Riscos e Definição do Modelo de Contratação</p>
            </div>
          </div>

          <div className="bg-[#f3f4f6] rounded-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-6">Prazos Críticos de Adequação</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[#1e3a8a]">
                    <th className="text-left py-3 px-4 font-bold text-[#1e3a8a]">Tema Legislativo</th>
                    <th className="text-left py-3 px-4 font-bold text-[#1e3a8a]">Atualização Recente</th>
                    <th className="text-left py-3 px-4 font-bold text-[#1e3a8a]">Prazo / Status</th>
                    <th className="text-left py-3 px-4 font-bold text-[#1e3a8a]">Impacto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-300 hover:bg-white transition-colors">
                    <td className="py-3 px-4 font-semibold">Trabalho em Feriados</td>
                    <td className="py-3 px-4">Prorrogação da regra que exige convenção coletiva</td>
                    <td className="py-3 px-4 font-mono text-[#f97316]">01 de março 2026</td>
                    <td className="py-3 px-4">Risco de interrupção operacional</td>
                  </tr>
                  <tr className="border-b border-gray-300 hover:bg-white transition-colors">
                    <td className="py-3 px-4 font-semibold">Igualdade Salarial</td>
                    <td className="py-3 px-4">Entrega do Relatório de Transparência</td>
                    <td className="py-3 px-4 font-mono text-[#f97316]">28 de fevereiro 2026</td>
                    <td className="py-3 px-4">Multa de até 3% da folha</td>
                  </tr>
                  <tr className="border-b border-gray-300 hover:bg-white transition-colors">
                    <td className="py-3 px-4 font-semibold">Escala 6x1 / 40h</td>
                    <td className="py-3 px-4">Pressão social e pareceres parlamentares</td>
                    <td className="py-3 px-4 font-mono text-[#f97316]">Pauta prioritária 2026</td>
                    <td className="py-3 px-4">Revisão imediata de escalas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-[#1e3a8a] bg-blue-50 p-6 rounded">
              <h4 className="font-bold text-[#1e3a8a] mb-3">
                <a href="https://www.conjur.com.br/2026-fev-06/pgr-defende-competencia-da-justica-comum-para-avaliar-pejotizacao/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Pejotização (CLT x PJ)
                </a>
              </h4>
              <p className="text-gray-700 text-sm mb-3">
                O parecer do Procurador-Geral da República, Paulo Gonet, defendeu a constitucionalidade da contratação via Pessoa Jurídica como alternativa à CLT. Todos os processos estão suspensos até o julgamento final do ARE 1.532.603.
              </p>
              <p className="text-xs font-mono bg-white px-3 py-2 rounded inline-block text-[#1e3a8a] font-semibold">
                Oportunidade: Maior segurança jurídica para PJ de alta especialidade
              </p>
            </div>

            <div className="border-l-4 border-[#f97316] bg-orange-50 p-6 rounded">
              <h4 className="font-bold text-[#f97316] mb-3">
                <a href="https://www.migalhas.com.br/depeso/449431/gratuidade-de-justica-politica-de-acesso-vira-incentivo-perverso" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Acesso à Justiça
                </a>
              </h4>
              <p className="text-gray-700 text-sm mb-3">
                O julgamento da ADC 80 no STF caminha para validar a autodeclaração de hipossuficiência como prova suficiente para gratuidade da justiça, mantendo o volume de reclamações em patamares recordes.
              </p>
              <p className="text-xs font-mono bg-white px-3 py-2 rounded inline-block text-[#f97316] font-semibold">
                Risco: Estimado 4 milhões de processos/ano
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-[#1e3a8a] via-[#f97316] to-[#10b981] my-16"></div>

        {/* Section 2: Remuneração e Benefícios */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/tJPnxEY9O8zrI5huKhRCpw/sandbox/7idyYTGG2M30SPMVDm1HSz_1770670013468_na1fn_YmVuZWZpdHMtaWNvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80"
              alt="Benefícios"
              className="w-20 h-20"
            />
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a]">Remuneração e Benefícios</h2>
              <p className="text-gray-600 mt-2">Foco na Eficiência de Custos e Renda Líquida</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 border-l-4 border-[#10b981] p-6 rounded-lg">
              <h4 className="font-bold text-[#10b981] mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                <a href="https://www.gov.br/trabalho-e-emprego/pt-br/noticias-e-conteudo/2026/fevereiro/novas-regras-do-programa-de-alimentacao-do-trabalhador-entram-em-vigor-nesta-terca-feira-10" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Novo PAT (Programa de Alimentação do Trabalhador)
                </a>
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-[#10b981] font-bold">•</span>
                  <span><strong>Vigência:</strong> 12 de fevereiro 2026</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#10b981] font-bold">•</span>
                  <span><strong>Proibição:</strong> Rebates e deságios eliminados</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#10b981] font-bold">•</span>
                  <span><strong>MDR limitada:</strong> 3,6% para restaurantes</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#10b981] font-bold">•</span>
                  <span><strong>Repasse:</strong> Reduzido para 15 dias</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-white rounded border border-[#10b981]">
                <p className="text-xs font-semibold text-[#10b981]">
                  ⚠️ Ação Imediata: Auditar contratos de benefícios para eliminar práticas nulas
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#1e3a8a] p-6 rounded-lg">
              <h4 className="font-bold text-[#1e3a8a] mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <a href="https://www.gov.br/secom/pt-br/acompanhe-a-secom/noticias/2026/01/nova-tabela-do-ir-veja-faixas-e-aliquotas-e-saiba-mais-sobre-medida-que-isenta-o-pagamento-para-quem-ganha-ate-r-5-mil" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Isenção de IR até R$ 5.000,00
                </a>
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-[#1e3a8a] font-bold">•</span>
                  <span><strong>Salário mínimo 2026:</strong> R$ 1.621,00</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1e3a8a] font-bold">•</span>
                  <span><strong>Isenção total:</strong> Até R$ 5.000,00</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1e3a8a] font-bold">•</span>
                  <span><strong>Exemplo:</strong> Ganho de R$ 36,55/mês em renda líquida</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-white rounded border border-[#1e3a8a]">
                <p className="text-xs font-semibold text-[#1e3a8a]">
                  💡 Oportunidade: Usar na comunicação interna para demonstrar ganho real
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#f3f4f6] rounded-lg p-8">
            <h4 className="font-bold text-[#1e3a8a] mb-6">Tabela de Redução de IR (Lei 15.270/25)</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[#1e3a8a]">
                    <th className="text-left py-3 px-4 font-bold text-[#1e3a8a]">Faixa Salarial Mensal</th>
                    <th className="text-left py-3 px-4 font-bold text-[#1e3a8a]">Redutor Aplicável</th>
                    <th className="text-left py-3 px-4 font-bold text-[#1e3a8a]">Resultado Prático</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-300 bg-white hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono">Até R$ 5.000,00</td>
                    <td className="py-3 px-4">Redução até R$ 312,89</td>
                    <td className="py-3 px-4 font-semibold text-[#10b981]">✓ Isenção total</td>
                  </tr>
                  <tr className="border-b border-gray-300 bg-white hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono">R$ 5.000,01 a R$ 7.350,00</td>
                    <td className="py-3 px-4">R$ 978,62 − (0,133145 × renda)</td>
                    <td className="py-3 px-4 font-semibold text-[#f97316]">↓ Redução progressiva</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono">Acima de R$ 7.350,00</td>
                    <td className="py-3 px-4">Tabela Progressiva Tradicional</td>
                    <td className="py-3 px-4">Sem redução adicional</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-[#1e3a8a] via-[#f97316] to-[#10b981] my-16"></div>

        {/* Section 3: Saúde e Clima Organizacional */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/tJPnxEY9O8zrI5huKhRCpw/sandbox/7idyYTGG2M30SPMVDm1HSz_1770670013468_na1fn_aGVhbHRoLXdlbGxuZXNzLWljb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80"
              alt="Saúde e Bem-estar"
              className="w-20 h-20"
            />
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a]">Saúde e Clima Organizacional</h2>
              <p className="text-gray-600 mt-2">Gestão de Riscos Psicossociais (NR-1)</p>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-[#f97316] p-8 rounded-lg mb-8">
            <h4 className="font-bold text-[#f97316] mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              <a href="https://www.migalhas.com.br/depeso/448193/contagem-regressiva-para-a-fiscalizacao-das-novas-exigencias-da-nr-1" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Fiscalização Punitiva da NR-1
              </a>
            </h4>
            <p className="text-gray-700 mb-4">
              O prazo para integrar a gestão de riscos psicossociais (estresse, burnout, assédio) ao Programa de Gerenciamento de Riscos (PGR) é <strong>25 de maio de 2026</strong>. Após essa data, a Inspeção do Trabalho passará a emitir autuações diretas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded border border-[#f97316]">
                <p className="text-xs font-semibold text-[#f97316] mb-2">CONTEXTO</p>
                  <a href="https://www.migalhas.com.br/depeso/448193/contagem-regressiva-para-a-fiscalizacao-das-novas-exigencias-da-nr-1" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80">
                  <p className="text-sm font-bold text-gray-800">546 mil afastamentos</p>
                  <p className="text-xs text-gray-600">por transtornos mentais em 2025</p>
                </a>
              </div>
              <div className="bg-white p-4 rounded border border-[#f97316]">
                <p className="text-xs font-semibold text-[#f97316] mb-2">CRESCIMENTO</p>
                <p className="text-sm font-bold text-gray-800">+67%</p>
                <p className="text-xs text-gray-600">em relação ao período anterior</p>
              </div>
              <div className="bg-white p-4 rounded border border-[#f97316]">
                <p className="text-xs font-semibold text-[#f97316] mb-2">BENEFÍCIO</p>
                <p className="text-sm font-bold text-[#10b981]">+21% produtividade</p>
                <p className="text-xs text-gray-600">em empresas com saúde mental</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-[#10b981] p-6 rounded-lg">
              <h4 className="font-bold text-[#10b981] mb-4">Indicadores de Sucesso</h4>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0" />
                  <span><strong>Absenteísmo:</strong> Redução de 41%</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0" />
                  <span><strong>Produtividade:</strong> Aumento de 21%</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0" />
                  <span><strong>Retenção:</strong> Melhor engajamento</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#1e3a8a] p-6 rounded-lg">
              <h4 className="font-bold text-[#1e3a8a] mb-4">Próximos Passos</h4>
              <ol className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold text-[#1e3a8a] bg-blue-100 w-6 h-6 flex items-center justify-center rounded">1</span>
                  <span>Auditar PGR atual</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#1e3a8a] bg-blue-100 w-6 h-6 flex items-center justify-center rounded">2</span>
                  <span>Incluir riscos psicossociais</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#1e3a8a] bg-blue-100 w-6 h-6 flex items-center justify-center rounded">3</span>
                  <span>Implementar antes de 25/05</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-[#1e3a8a] via-[#f97316] to-[#10b981] my-16"></div>

        {/* Section 4: Tendências 2026 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/tJPnxEY9O8zrI5huKhRCpw/sandbox/7idyYTGG2M30SPMVDm1HSz_1770670013468_na1fn_dHJlbmRzLWljb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80"
              alt="Tendências"
              className="w-20 h-20"
            />
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a]">Tendências e Projeções 2026</h2>
              <p className="text-gray-600 mt-2">IA Operacional e Crédito do Trabalhador</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <h4 className="font-bold text-purple-900 mb-4">
                <a href="https://www.gov.br/trabalho-e-emprego/pt-br/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  IA Agêntica
                </a>
              </h4>
              <p className="text-sm text-gray-700 mb-4">
                A inteligência artificial no RH evoluiu para o modelo agêntico, capaz de analisar o "Cultural Fit" de forma autônoma, otimizando processos de seleção e retenção.
              </p>
              <div className="bg-white p-3 rounded text-xs text-gray-600">
                <strong>Impacto:</strong> Redução de tempo de contratação e melhoria na qualidade das hires
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 border-l-4 border-green-500 p-6 rounded-lg">
              <h4 className="font-bold text-green-900 mb-4">
                <a href="https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/credito-do-trabalhador" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Crédito Consignado Digital
                </a>
              </h4>
              <p className="text-sm text-gray-700 mb-4">
                O FGTS Digital consolidou-se como garantia para crédito consignado, reduzindo as taxas de juros para o colaborador com carência de 90 dias.
              </p>
              <div className="bg-white p-3 rounded text-xs text-gray-600">
                <strong>Benefício:</strong> Proteção contra endividamento impulsivo
              </div>
            </div>
          </div>

          <div className="bg-[#f3f4f6] rounded-lg p-8">
            <h4 className="font-bold text-[#1e3a8a] mb-6">Modelos Híbridos: O Fim do Controle Visual</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-sm font-semibold text-[#1e3a8a] mb-2">ADOÇÃO</p>
                <p className="text-3xl font-bold text-[#f97316] mb-2">73%</p>
                <p className="text-xs text-gray-600">das empresas operam em regime híbrido</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-sm font-semibold text-[#1e3a8a] mb-2">GANHO</p>
                <p className="text-3xl font-bold text-[#10b981] mb-2">+34%</p>
                <p className="text-xs text-gray-600">de produtividade com modelo híbrido</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-sm font-semibold text-[#1e3a8a] mb-2">RETENÇÃO</p>
                <p className="text-3xl font-bold text-[#10b981] mb-2">-40%</p>
                <p className="text-xs text-gray-600">turnover em culturas flexíveis</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#e5e7eb]">
              <h5 className="font-bold text-[#1e3a8a] mb-4">
                <a href="https://www.gov.br/trabalho-e-emprego/pt-br/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Personas de Trabalho
                </a>
              </h5>
              <div className="space-y-3 text-sm">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-[#1e3a8a] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-[#1e3a8a]">Guardião:</strong> Prefere rotina fixa e ambiente estruturado
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-[#f97316] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-[#f97316]">Explorador:</strong> Transita entre espaços e busca flexibilidade
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-[#10b981] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-[#10b981]">Alquimista:</strong> Alterna horários e locais conforme necessidade
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-[#1e3a8a] via-[#f97316] to-[#10b981] my-16"></div>

        {/* Section 5: Recomendações Estratégicas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8">Recomendações Estratégicas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/igualdade-salarial" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:opacity-90">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 flex-shrink-0 text-[#f97316]" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Transparência Salarial</h4>
                  <p className="text-sm opacity-90 mb-3">
                    Realizar envio dos dados no portal Emprega Brasil até 28 de fevereiro para evitar multa de 3% da folha.
                  </p>
                  <p className="text-xs font-mono bg-white/20 px-2 py-1 rounded inline-block">
                    Prazo crítico: 28/02/2026
                  </p>
                </div>
              </div>
            </a>

            <a href="https://www.gov.br/trabalho-e-emprego/pt-br/noticias-e-conteudo/2026/fevereiro/novas-regras-do-programa-de-alimentacao-do-trabalhador-entram-em-vigor-nesta-terca-feira-10" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-[#f97316] to-[#fb923c] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:opacity-90">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 flex-shrink-0 text-white" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Auditoria PAT</h4>
                  <p className="text-sm opacity-90 mb-3">
                    Revisar contratos de vale-refeição até 12 de fevereiro para eliminar rebates ou taxas negativas.
                  </p>
                  <p className="text-xs font-mono bg-white/20 px-2 py-1 rounded inline-block">
                    Prazo crítico: 12/02/2026
                  </p>
                </div>
              </div>
            </a>

            <a href="https://www.migalhas.com.br/depeso/448193/contagem-regressiva-para-a-fiscalizacao-das-novas-exigencias-da-nr-1" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-[#10b981] to-[#34d399] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:opacity-90">
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 flex-shrink-0 text-white" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Saúde Mental (NR-1)</h4>
                  <p className="text-sm opacity-90 mb-3">
                    Iniciar auditoria do PGR para incluir riscos psicossociais antes de maio de 2026.
                  </p>
                  <p className="text-xs font-mono bg-white/20 px-2 py-1 rounded inline-block">
                    Prazo crítico: 25/05/2026
                  </p>
                </div>
              </div>
            </a>

            <a href="https://www.conjur.com.br/2026-fev-06/pgr-defende-competencia-da-justica-comum-para-avaliar-pejotizacao/" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-[#64748b] to-[#475569] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:opacity-90">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 flex-shrink-0 text-[#f97316]" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Pejotização</h4>
                  <p className="text-sm opacity-90 mb-3">
                    Manter monitoramento do julgamento no STF, aproveitando sinalização favorável da PGR.
                  </p>
                  <p className="text-xs font-mono bg-white/20 px-2 py-1 rounded inline-block">
                    Status: Oportunidade estratégica
                  </p>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-[#1e3a8a] via-[#f97316] to-[#10b981] my-16"></div>

        {/* Section 6: Saiba Mais */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8">Saiba Mais</h2>
          <p className="text-gray-700 mb-8">
            Acesse os portais oficiais para informações contínuas sobre legislação trabalhista, conformidade e atualizações regulatórias:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* MTE */}
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
                <h4 className="font-bold text-[#1e3a8a] group-hover:underline">Ministério do Trabalho e Emprego</h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Portal oficial com legislação, portarias, decretos e notícias sobre relações de trabalho no Brasil.
              </p>
              <p className="text-xs font-mono text-[#1e3a8a]">www.gov.br/trabalho-e-emprego</p>
            </a>

            {/* STF */}
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
                Acompanhe julgamentos, decisões e repercussão geral sobre temas trabalhistas em discussão.
              </p>
              <p className="text-xs font-mono text-[#f97316]">www.stf.jus.br</p>
            </a>

            {/* INSS */}
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
                <h4 className="font-bold text-[#10b981] group-hover:underline">Instituto Nacional de Seguridade Social</h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Informações sobre benefícios, afastamentos, FGTS digital e crédito consignado do trabalhador.
              </p>
              <p className="text-xs font-mono text-[#10b981]">www.gov.br/inss</p>
            </a>
          </div>

          <div className="mt-8 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white p-6 rounded-lg">
            <h4 className="font-bold mb-3">Fontes de Informação Complementar</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-[#f97316]">•</span>
                <span>
                  <strong>Tribunal Superior do Trabalho (TST):</strong>{" "}
                  <a href="https://www.tst.jus.br/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    www.tst.jus.br
                  </a>
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#f97316]">•</span>
                <span>
                  <strong>Agência Brasil (Notícias):</strong>{" "}
                  <a href="https://agenciabrasil.ebc.com.br/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    agenciabrasil.ebc.com.br
                  </a>
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#f97316]">•</span>
                <span>
                  <strong>Migalhas (Jurisprudência):</strong>{" "}
                  <a href="https://www.migalhas.com.br/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    www.migalhas.com.br
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t-2 border-[#e5e7eb] pt-12 mt-16">
          <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Conclusão</h3>
            <p className="text-sm opacity-95 mb-4">
              O RH de 2026 deve ser analítico e preditivo, utilizando a tecnologia para desonerar a operação e a conformidade legal para proteger o lucro e a reputação da organização. A gestão de capital humano transcende a folha de pagamento, atuando como um centro de inteligência para mitigação de riscos fiscais, jurídicos e psicossociais.
            </p>
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663324672414/lKNFbgfUdlfSXjAJ.png"
                  alt="Logo Gestão FX"
                  className="w-8 h-8"
                />
                <p className="text-xs opacity-75">
                  <strong>Edição:</strong> 11 de fevereiro 2026 | <strong>Próxima atualização:</strong> 18 de fevereiro 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
