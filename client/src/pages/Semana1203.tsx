import { AlertCircle, CheckCircle2, TrendingUp, Clock, Heart, Download, Share2, Mail, MessageCircle, Zap, FileText, Scale, ShieldCheck, BarChart3, Users, ExternalLink } from "lucide-react";
import { useRef, useState } from "react";

export default function Semana1203() {
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

    const subject = encodeURIComponent("Jornalzinho RH - Edição 12 de Março 2026");
    const body = encodeURIComponent(
      `Olá,\n\n${shareMessage || "Segue em anexo o Jornalzinho RH com as atualizações de 12 de março de 2026."}\n\nAtenciosamente`
    );

    window.location.href = `mailto:${shareEmail}?subject=${subject}&body=${body}`;
    setShareEmail("");
    setShareMessage("");
    setShowShareForm(false);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      "Confira o Jornalzinho RH - Edição 12/03/2026: Decisão do STF sobre SAT, Recorde de Gastos com Ações Trabalhistas, Geração de Empregos e mais!"
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
              <p className="text-blue-100 text-sm mt-1">Edição 12 de Março 2026</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">RH</p>
            <p className="text-blue-100 text-sm">NEWSLETTER</p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="mb-12 bg-gradient-to-r from-[#1e3a8a]/10 to-[#f97316]/10 rounded-lg p-8 border-l-4 border-[#f97316]">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">Decisões do STF, Recorde de Gastos Trabalhistas e Saldo Positivo no Emprego</h2>
          <p className="text-gray-700 text-lg mb-4">
            STF afasta cobrança de SAT sobre autônomos antes de 1998, empresas gastam R$ 50,7 bi com ações em 2025 e Brasil gera 112 mil vagas em janeiro.
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Período:</strong> 12 de março de 2026 | <strong>Próxima atualização:</strong> 19 de março de 2026
          </p>
        </section>

        {/* Highlights Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8 flex items-center gap-3">
            <Zap className="w-8 h-8 text-[#f97316]" />
            Destaques da Semana
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="https://noticias.stf.jus.br/postsnoticias/stf-afasta-cobranca-do-seguro-de-acidente-de-trabalho-sobre-autonomos-antes-de-emenda-constitucional-de-1998/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] group">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 flex-shrink-0 text-white" />
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-lg">STF e Seguro Acidente</h3>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm opacity-90">
                    STF afasta cobrança de SAT sobre autônomos antes da Emenda de 1998.
                  </p>
                </div>
              </div>
            </a>

            <a href="https://www.estadao.com.br/economia/empresas-gastam-50-bi-acoes-trabalhistas-2025/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-[#f97316] to-[#fb923c] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] group">
              <div className="flex items-start gap-4">
                <Scale className="w-8 h-8 flex-shrink-0 text-white" />
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-lg">Gasto Recorde em Ações</h3>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm opacity-90">
                    Empresas pagaram R$ 50,7 bilhões em ações trabalhistas em 2025.
                  </p>
                </div>
              </div>
            </a>

            <a href="https://g1.globo.com/economia/noticia/2026/03/03/brasil-cria-1123-mil-empregos-formais-em-janeiro-com-forte-queda-de-27percent-frente-ao-mesmo-mes-de-2025.ghtml" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-[#10b981] to-[#34d399] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] group">
              <div className="flex items-start gap-4">
                <BarChart3 className="w-8 h-8 flex-shrink-0 text-white" />
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-lg">Saldo de Empregos</h3>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm opacity-90">
                    Brasil gera 112,3 mil novos empregos formais em janeiro de 2026.
                  </p>
                </div>
              </div>
            </a>

            <a href="https://solides.com.br/blog/tendencias-no-rh/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-[#8b5cf6] to-[#a78bfa] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] group">
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 flex-shrink-0 text-white" />
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-lg">Gestão Comportamental</h3>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm opacity-90">
                    Tendência 2026: Foco no perfil comportamental para retenção de talentos.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Legislation Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8 flex items-center gap-3">
            <Scale className="w-8 h-8 text-[#1e3a8a]" />
            Legislação e Compliance
          </h2>
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">STF: Marco Temporal para SAT sobre Autônomos</h3>
              <p className="text-gray-700 mb-4">
                O Supremo Tribunal Federal validou que a cobrança do Seguro de Acidente de Trabalho (SAT) sobre a remuneração de autônomos só é devida após a Emenda Constitucional de 1998.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Decisão protege empresas de cobranças retroativas indevidas</li>
                <li>Reforça a necessidade de base legal expressa para contribuições</li>
                <li>Impacto direto no planejamento tributário-trabalhista</li>
              </ul>
              <a href="https://www.conjur.com.br/2026-mar-12/stf-afasta-contribuicao-ao-sat-em-pagamentos-a-autonomos-antes-de-1998/" target="_blank" rel="noopener noreferrer" className="text-[#1e3a8a] font-semibold hover:underline flex items-center gap-1">
                Ver análise jurídica completa <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
              <h4 className="font-bold text-orange-800 mb-1">Alerta: R$ 50,7 Bilhões em Ações Trabalhistas</h4>
              <p className="text-orange-700 text-sm mb-3">
                O valor pago pelas empresas em 2025 bateu recorde histórico. O STF discute agora critérios mais rígidos para a gratuidade da justiça, visando reduzir o volume de ações sem comprovação de insuficiência econômica.
              </p>
              <a href="https://www.conjur.com.br/2026-mar-10/recorde-de-indenizacoes-trabalhistas/" target="_blank" rel="noopener noreferrer" className="text-orange-800 font-bold text-xs hover:underline flex items-center gap-1">
                Acesse os dados oficiais <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

        {/* Strategic Recommendations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-[#10b981]" />
            Recomendações Estratégicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#f97316] mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6" />
                Foco em Retenção (Imediato)
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-1 flex-shrink-0" />
                  <span>Implementar Gestão Comportamental para reduzir turnover</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-1 flex-shrink-0" />
                  <span>Revisar pacotes de benefícios flexíveis (Tendência 2026)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-1 flex-shrink-0" />
                  <span>Auditoria interna para mitigar riscos de novas ações trabalhistas</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-6 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6" />
                Compliance e Dados
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-1 flex-shrink-0" />
                  <span>Adoção de People Analytics para decisões baseadas em dados</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-1 flex-shrink-0" />
                  <span>Monitorar decisões do STF sobre gratuidade de justiça</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-1 flex-shrink-0" />
                  <span>Preparar relatórios de transparência salarial contínuos</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center border-t border-gray-200 pt-12">
          <div className="flex flex-col items-center gap-4">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663324672414/lKNFbgfUdlfSXjAJ.png"
              alt="Logo Gestão FX"
              className="w-16 h-16 opacity-80"
            />
            <p className="text-gray-500 text-sm">
              © 2026 Gestão FX - Desenvolvimento Humano e Organizacional<br />
              Próxima edição: <strong>19 de março de 2026</strong>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
