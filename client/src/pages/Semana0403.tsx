import { AlertCircle, CheckCircle2, TrendingUp, Clock, Heart, Download, Share2, Mail, MessageCircle, Zap, FileText, Scale, ThermometerSun, Users } from "lucide-react";
import { useRef, useState } from "react";

export default function Semana0403() {
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

    const subject = encodeURIComponent("Jornalzinho RH - Edição 04 de Março 2026");
    const body = encodeURIComponent(
      `Olá,\n\n${shareMessage || "Segue em anexo o Jornalzinho RH com as atualizações de 04 de março de 2026."}\n\nAtenciosamente`
    );

    window.location.href = `mailto:${shareEmail}?subject=${subject}&body=${body}`;
    setShareEmail("");
    setShareMessage("");
    setShowShareForm(false);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      "Confira o Jornalzinho RH - Edição 04/03/2026: Redução da Jornada, Custo de Ações Trabalhistas, Assédio Moral e muito mais!"
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
              <p className="text-blue-100 text-sm mt-1">Edição 04 de Março 2026</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">RH</p>
            <p className="text-blue-100 text-sm">NEWSLETTER</p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="mb-12 bg-gradient-to-r from-[#1e3a8a]/10 to-[#f97316]/10 rounded-lg p-8 border-l-4 border-[#f97316]">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">Redução de Jornada, Custos Trabalhistas e Alerta sobre Assédio</h2>
          <p className="text-gray-700 text-lg mb-4">
            Governo defende jornada de 40h, empresas pagam recorde em ações trabalhistas e processos de assédio moral crescem 22%.
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Período:</strong> 04 de março de 2026 | <strong>Próxima atualização:</strong> 11 de março de 2026
          </p>
        </section>

        {/* Highlights Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8 flex items-center gap-3">
            <Zap className="w-8 h-8 text-[#f97316]" />
            Destaques da Semana
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-lg p-6 text-white shadow-lg">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 flex-shrink-0 text-white" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Redução da Jornada</h3>
                  <p className="text-sm opacity-90">
                    Governo defende redução de 44 para 40 horas semanais com negociação.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f97316] to-[#fb923c] rounded-lg p-6 text-white shadow-lg">
              <div className="flex items-start gap-4">
                <Scale className="w-8 h-8 flex-shrink-0 text-white" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Custo de Ações Recorde</h3>
                  <p className="text-sm opacity-90">
                    Empresas pagaram R$ 50,6 bilhões em ações trabalhistas em 2025.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#10b981] to-[#34d399] rounded-lg p-6 text-white shadow-lg">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 flex-shrink-0 text-white" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Assédio Moral em Alta</h3>
                  <p className="text-sm opacity-90">
                    Aumento de 22% nos processos de assédio moral na Justiça do Trabalho.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#8b5cf6] to-[#a78bfa] rounded-lg p-6 text-white shadow-lg">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 flex-shrink-0 text-white" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Transparência Salarial</h3>
                  <p className="text-sm opacity-90">
                    Prazo para envio de dados terminou em 28/02 para empresas com 100+ funcionários.
                  </p>
                </div>
              </div>
            </div>
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
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Prorrogação de Regras sobre Trabalho em Feriados</h3>
              <p className="text-gray-700 mb-4">
                O Ministério do Trabalho e Emprego (MTE) prorrogou por mais 90 dias o início das novas regras sobre trabalho em feriados no comércio. A nova data é <strong>01 de junho de 2026</strong> (5ª prorrogação).
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Portaria publicada no Diário Oficial da União em 26 de fevereiro</li>
                <li>Afeta principalmente o setor de comércio</li>
                <li>Requer negociação com sindicatos e trabalhadores</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <h4 className="font-bold text-blue-800 mb-1">Pagamento de Salários - Prazo até 06/03</h4>
              <p className="text-blue-700 text-sm">
                Vence no dia <strong>06 de março de 2026</strong> o prazo para pagamento do salário referente ao trabalho executado em fevereiro de 2026 pelos empregados mensalistas.
              </p>
            </div>
          </div>
        </section>

        {/* Health Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8 flex items-center gap-3">
            <Heart className="w-8 h-8 text-[#ef4444]" />
            Saúde e Clima Organizacional
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-bold text-lg text-[#1e3a8a] mb-4">Assédio Moral: Crescimento Preocupante</h3>
              <p className="text-gray-600 text-sm mb-4">
                Com 142.828 novos processos registrados em 2025 (aumento de 22% em relação a 2024), o assédio moral se tornou uma das principais demandas da Justiça do Trabalho.
              </p>
            </div>
            <div className="bg-[#1e3a8a] text-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-4">Recomendações para RH</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                  Implementar canais de denúncia confidenciais
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                  Realizar treinamentos sobre clima organizacional
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                  Criar políticas de prevenção ao assédio
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                  Documentar incidentes e ações corretivas
                </li>
              </ul>
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
                Curto Prazo (Até 31/03)
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-1 flex-shrink-0" />
                  <span>Garantir pagamento de salários até 06/03 (prazo legal)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-1 flex-shrink-0" />
                  <span>Verificar conformidade com Transparência Salarial</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-1 flex-shrink-0" />
                  <span>Revisar políticas de prevenção ao assédio moral</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-6 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Médio Prazo (Até 30/06)
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-1 flex-shrink-0" />
                  <span>Preparar-se para possível redução de jornada (44h → 40h)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-1 flex-shrink-0" />
                  <span>Implementar programas de retenção de talentos</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-1 flex-shrink-0" />
                  <span>Antecipar implementação de novas regras de feriados</span>
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
              Próxima edição: <strong>11 de março de 2026</strong>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
