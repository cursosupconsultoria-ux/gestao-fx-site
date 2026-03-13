import { AlertCircle, CheckCircle2, TrendingUp, Clock, Heart, Download, Share2, Mail, MessageCircle, ExternalLink, Flame } from "lucide-react";
import { useRef, useState } from "react";

/**
 * Design Philosophy: Editorial Corporativo Sofisticado
 * - Hierarquia tipográfica clara com Poppins para títulos
 * - Paleta de cores estratégica: Azul profundo (#1e3a8a), Laranja (#f97316), Verde (#10b981)
 * - Espaçamento generoso e tipografia diferenciada (IBM Plex Mono para dados)
 * - Componentes visuais que destacam informações críticas
 */

export default function Semana1902() {
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

    const subject = encodeURIComponent("Jornalzinho RH - Edição 19 de Fevereiro 2026");
    const body = encodeURIComponent(
      `Olá,\n\n${shareMessage || "Segue em anexo o Jornalzinho RH com as atualizações de 19 de fevereiro de 2026."}\n\nAtenciosamente`
    );

    window.location.href = `mailto:${shareEmail}?subject=${subject}&body=${body}`;
    setShareEmail("");
    setShareMessage("");
    setShowShareForm(false);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      "Confira o Jornalzinho RH - Edição 19/02/2026 com as principais novidades: Trabalho sob Calor, Domingos/Feriados, Tendências de RH 2026 e muito mais!"
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
              <p className="text-blue-100 text-sm mt-1">Edição 19 de Fevereiro 2026</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">RH</p>
            <p className="text-blue-100 text-sm">NEWSLETTER</p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="mb-12 bg-gradient-to-r from-[#1e3a8a]/10 to-[#f97316]/10 rounded-lg p-8 border-l-4 border-[#f97316]">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">Proteção, Tendências e Transformação Digital</h2>
          <p className="text-gray-700 text-lg mb-4">
            Novas Regras de Segurança, Tendências de RH 2026 e Desafios Organizacionais
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Período:</strong> 19 de fevereiro de 2026 | <strong>Próxima atualização:</strong> 26 de fevereiro de 2026
          </p>
        </section>

        {/* Highlights Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8 flex items-center gap-3">
            <Flame className="w-8 h-8 text-[#f97316]" />
            Destaques da Semana
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Highlight Card 1 */}
            <a href="https://www12.senado.leg.br/noticias/audios/2026/02/trabalho-sob-calor-e-em-altura-ganha-regras-mais-rigidas" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-[#f97316] to-[#fb923c] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow hover:opacity-90">
              <div className="flex items-start gap-4">
                <Flame className="w-8 h-8 flex-shrink-0 text-white" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Trabalho sob Calor e Altura</h3>
                  <p className="text-sm opacity-90">
                    Novas regras rígidas do Ministério do Trabalho para proteção
                  </p>
                  <p className="text-xs mt-3 font-mono bg-white/20 px-2 py-1 rounded inline-block">
                    Status: Em vigor
                  </p>
                </div>
              </div>
            </a>

            {/* Highlight Card 2 */}
            <a href="https://noticias.r7.com/prisma/conta-em-dia/governo-mantem-inicio-da-regra-que-muda-trabalho-aos-domingos-e-feriados-em-1-de-marco-19022026/" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow hover:opacity-90">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 flex-shrink-0 text-white" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Domingos e Feriados</h3>
                  <p className="text-sm opacity-90">
                    Mudança em 1º de março requer acordos coletivos
                  </p>
                  <p className="text-xs mt-3 font-mono bg-white/20 px-2 py-1 rounded inline-block">
                    Vigência: 01/03/2026
                  </p>
                </div>
              </div>
            </a>

            {/* Highlight Card 3 */}
            <a href="https://valor.globo.com/carreira/noticia/2026/02/18/9-tendencias-que-vao-influenciar-o-trabalho-dos-diretores-de-rh-em-2026.ghtml" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-[#10b981] to-[#34d399] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow hover:opacity-90">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 flex-shrink-0 text-white" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Tendências de RH 2026</h3>
                  <p className="text-sm opacity-90">
                    9 desafios principais para diretores de RH (Gartner)
                  </p>
                  <p className="text-xs mt-3 font-mono bg-white/20 px-2 py-1 rounded inline-block">
                    Pesquisa: 2,5 mil especialistas
                  </p>
                </div>
              </div>
            </a>

            {/* Highlight Card 4 */}
            <a href="https://confiancadigital.com.br/novas-regras-do-trabalho-hbrido-2026-o-guia-definitivo-de-direitos-e-deveres/" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-[#8b5cf6] to-[#a78bfa] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow hover:opacity-90">
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 flex-shrink-0 text-white" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Trabalho Híbrido</h3>
                  <p className="text-sm opacity-90">
                    Obrigatoriedade de reembolso discriminado de custos
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

        {/* Section 1: Segurança e Saúde */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Flame className="w-12 h-12 text-[#f97316]" />
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a]">Segurança e Saúde no Trabalho</h2>
              <p className="text-gray-600 mt-2">Proteção contra Calor Extremo e Trabalho em Altura</p>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-[#f97316] p-8 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-[#f97316] mb-6 flex items-center gap-2">
              <AlertCircle className="w-6 h-6" />
              <a href="https://www12.senado.leg.br/noticias/audios/2026/02/trabalho-sob-calor-e-em-altura-ganha-regras-mais-rigidas" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Novas Regras para Trabalho sob Calor e Altura
              </a>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border border-[#f97316]">
                <h4 className="font-bold text-[#f97316] mb-4">Contexto Legislativo</h4>
                <p className="text-sm text-gray-700 mb-4">
                  O Ministério do Trabalho publicou novas regras para proteger trabalhadores expostos ao calor extremo e atividades em altura. Um projeto em análise na Comissão de Assuntos Sociais (CAS) inclui na CLT o conceito de meio ambiente do trabalho.
                </p>
                <p className="text-xs font-mono bg-gray-100 px-3 py-2 rounded text-[#f97316] font-semibold">
                  PL 304/2023 - Senador Paulo Paim (PT-RS)
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#f97316]">
                <h4 className="font-bold text-[#f97316] mb-4">Impacto Organizacional</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    <span>Maior rigor em inspeções do trabalho</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    <span>Punição para degradação de condições laborais</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    <span>Responsabilidade por danos à saúde física/mental</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    <span>Revisão de PPE e protocolos de segurança</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-[#f97316]">
              <h4 className="font-bold text-[#1e3a8a] mb-4">Recomendação Estratégica</h4>
              <p className="text-sm text-gray-700 mb-3">
                Realize auditoria imediata dos ambientes de trabalho com exposição a calor (indústria, construção, agricultura) e atividades em altura (limpeza, manutenção, construção). Revise protocolos de segurança e invista em equipamentos de proteção individual (EPI) e coletiva (EPC).
              </p>
              <p className="text-xs font-mono bg-yellow-100 px-3 py-2 rounded text-[#f97316] font-semibold inline-block">
                ⚠️ Prazo: Antecipar implementação antes da aprovação do PL
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-[#1e3a8a] via-[#f97316] to-[#10b981] my-16"></div>

        {/* Section 2: Trabalho aos Domingos e Feriados */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Clock className="w-12 h-12 text-[#1e3a8a]" />
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a]">Trabalho aos Domingos e Feriados</h2>
              <p className="text-gray-600 mt-2">Mudança Crítica em 1º de Março de 2026</p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#1e3a8a] p-8 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-6 flex items-center gap-2">
              <AlertCircle className="w-6 h-6" />
              <a href="https://noticias.r7.com/prisma/conta-em-dia/governo-mantem-inicio-da-regra-que-muda-trabalho-aos-domingos-e-feriados-em-1-de-marco-19022026/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Regra que Limita Trabalho em Domingos e Feriados
              </a>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded border border-[#1e3a8a]">
                <p className="text-xs font-semibold text-[#1e3a8a] mb-2">VIGÊNCIA</p>
                <p className="text-2xl font-bold text-[#1e3a8a]">01/03/2026</p>
                <p className="text-xs text-gray-600 mt-2">Data de entrada em vigor</p>
              </div>
              <div className="bg-white p-4 rounded border border-[#1e3a8a]">
                <p className="text-xs font-semibold text-[#1e3a8a] mb-2">SETORES AFETADOS</p>
                <p className="text-2xl font-bold text-[#f97316]">13+</p>
                <p className="text-xs text-gray-600 mt-2">Atividades comerciais</p>
              </div>
              <div className="bg-white p-4 rounded border border-[#1e3a8a]">
                <p className="text-xs font-semibold text-[#1e3a8a] mb-2">REQUISITO</p>
                <p className="text-2xl font-bold text-[#10b981]">Acordo</p>
                <p className="text-xs text-gray-600 mt-2">Coletivo com sindicatos</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#1e3a8a] mb-8">
              <h4 className="font-bold text-[#1e3a8a] mb-4">Setores Impactados</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                <div className="flex gap-2">
                  <span className="text-[#1e3a8a]">✓</span>
                  <span>Mercados e supermercados</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#1e3a8a]">✓</span>
                  <span>Varejistas de alimentos</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#1e3a8a]">✓</span>
                  <span>Farmácias</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#1e3a8a]">✓</span>
                  <span>Comércio em hotéis</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#1e3a8a]">✓</span>
                  <span>Comércio em aeroportos</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#1e3a8a]">✓</span>
                  <span>Comércio em geral</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-[#f97316]">
              <h4 className="font-bold text-[#f97316] mb-4">⚠️ Ação Imediata Necessária</h4>
              <ol className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold text-[#f97316] bg-orange-100 w-6 h-6 flex items-center justify-center rounded">1</span>
                  <span><strong>Até 25/02:</strong> Iniciar negociação com sindicatos para acordo coletivo</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#f97316] bg-orange-100 w-6 h-6 flex items-center justify-center rounded">2</span>
                  <span><strong>Até 01/03:</strong> Formalizar acordo ou suspender operações em domingos/feriados</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#f97316] bg-orange-100 w-6 h-6 flex items-center justify-center rounded">3</span>
                  <span><strong>Comunicar:</strong> Colaboradores sobre mudanças de escala</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#f97316] bg-orange-100 w-6 h-6 flex items-center justify-center rounded">4</span>
                  <span><strong>Revisar:</strong> Custos operacionais e folha de pagamento</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-[#1e3a8a] via-[#f97316] to-[#10b981] my-16"></div>

        {/* Section 3: Tendências de RH 2026 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <TrendingUp className="w-12 h-12 text-[#10b981]" />
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a]">Tendências de RH 2026</h2>
              <p className="text-gray-600 mt-2">9 Desafios Principais para Diretores de RH (Pesquisa Gartner)</p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-[#10b981] p-8 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-[#10b981] mb-6">Contexto da Pesquisa</h3>
            <p className="text-gray-700 mb-4">
              A multinacional de pesquisas <strong>Gartner</strong> entrevistou 2,5 mil pesquisadores e especialistas em negócios e TI, além de analisar mil estudos de caso sobre adoção de IA. Os resultados apontam desafios críticos que os CHROs (Chief Human Resources Officers) enfrentarão em 2026.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded border border-[#10b981]">
                <p className="text-xs font-semibold text-[#10b981] mb-2">ESCOPO</p>
                <p className="text-2xl font-bold text-[#10b981]">2.500+</p>
                <p className="text-xs text-gray-600 mt-2">Especialistas entrevistados</p>
              </div>
              <div className="bg-white p-4 rounded border border-[#10b981]">
                <p className="text-xs font-semibold text-[#10b981] mb-2">ESTUDOS</p>
                <p className="text-2xl font-bold text-[#10b981]">1.000+</p>
                <p className="text-xs text-gray-600 mt-2">Casos de adoção de IA</p>
              </div>
              <div className="bg-white p-4 rounded border border-[#10b981]">
                <p className="text-xs font-semibold text-[#10b981] mb-2">TENDÊNCIAS</p>
                <p className="text-2xl font-bold text-[#10b981]">9</p>
                <p className="text-xs text-gray-600 mt-2">Desafios principais</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#10b981]">
              <h4 className="font-bold text-[#1e3a8a] mb-6">9 Tendências Identificadas</h4>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <p className="font-bold text-[#1e3a8a]">Redução de Quadros e Demissões Humanizadas</p>
                    <p className="text-sm text-gray-600 mt-1">Implementar planos de demissão sem prejudicar imagem corporativa</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <p className="font-bold text-[#1e3a8a]">Problemas no Uso Inadequado de IA</p>
                    <p className="text-sm text-gray-600 mt-1">Governança de IA para evitar vieses e discriminação em seleção</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <p className="font-bold text-[#1e3a8a]">Maior Atenção no Recrutamento</p>
                    <p className="text-sm text-gray-600 mt-1">Foco em qualidade de hires e cultural fit</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
                  <div>
                    <p className="font-bold text-[#1e3a8a]">Pressão por Maior Produtividade</p>
                    <p className="text-sm text-gray-600 mt-1">71% dos líderes relatam aumento de pressão por resultados</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">5</div>
                  <div>
                    <p className="font-bold text-[#1e3a8a]">Saúde Mental em Risco</p>
                    <p className="text-sm text-gray-600 mt-1">54% dos executivos sofrem ansiedade relacionada à função</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">6</div>
                  <div>
                    <p className="font-bold text-[#1e3a8a]">Desenvolvimento de Liderança</p>
                    <p className="text-sm text-gray-600 mt-1">Prioridade #1 para empresas em 2026</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">7</div>
                  <div>
                    <p className="font-bold text-[#1e3a8a]">Contratação de Talentos</p>
                    <p className="text-sm text-gray-600 mt-1">Prioridade #2 para empresas em 2026</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">8</div>
                  <div>
                    <p className="font-bold text-[#1e3a8a]">Retenção de Colaboradores</p>
                    <p className="text-sm text-gray-600 mt-1">Combater turnover através de flexibilidade e propósito</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">9</div>
                  <div>
                    <p className="font-bold text-[#1e3a8a]">Inclusão e Diversidade</p>
                    <p className="text-sm text-gray-600 mt-1">Integração genuína e não apenas compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-[#1e3a8a] via-[#f97316] to-[#10b981] my-16"></div>

        {/* Section 4: Trabalho Híbrido */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Heart className="w-12 h-12 text-[#8b5cf6]" />
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a]">Trabalho Híbrido 2026</h2>
              <p className="text-gray-600 mt-2">Obrigatoriedade de Reembolso Discriminado de Custos</p>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-[#8b5cf6] p-8 rounded-lg">
            <h3 className="text-xl font-bold text-[#8b5cf6] mb-6">Novas Regras para Trabalho Híbrido</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border border-[#8b5cf6]">
                <h4 className="font-bold text-[#8b5cf6] mb-4">Obrigatoriedade de Reembolso</h4>
                <p className="text-sm text-gray-700 mb-4">
                  A partir de 2026, empresas que adotam trabalho híbrido devem oferecer reembolso <strong>discriminado</strong> e <strong>transparente</strong> de custos de internet e energia, eliminando a prática anterior de "ajuda de custo" genérica.
                </p>
                <div className="bg-purple-100 p-3 rounded text-xs text-[#8b5cf6] font-semibold">
                  ✓ Maior transparência e justiça para colaboradores
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#8b5cf6]">
                <h4 className="font-bold text-[#8b5cf6] mb-4">Impacto Financeiro</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-[#8b5cf6] font-bold">•</span>
                    <span><strong>Internet:</strong> ~R$ 80-150/mês</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#8b5cf6] font-bold">•</span>
                    <span><strong>Energia:</strong> ~R$ 50-100/mês</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#8b5cf6] font-bold">•</span>
                    <span><strong>Total:</strong> ~R$ 130-250/mês por colaborador</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#8b5cf6] font-bold">•</span>
                    <span><strong>Impacto anual:</strong> R$ 1.560-3.000 por pessoa</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-[#8b5cf6]">
              <h4 className="font-bold text-[#1e3a8a] mb-4">Recomendação Estratégica</h4>
              <p className="text-sm text-gray-700 mb-3">
                Revise políticas de trabalho híbrido e implemente sistema de reembolso discriminado. Comunique transparentemente aos colaboradores sobre os valores, metodologia de cálculo e como será processado o reembolso (folha de pagamento, vale, transferência bancária).
              </p>
              <p className="text-xs font-mono bg-purple-100 px-3 py-2 rounded text-[#8b5cf6] font-semibold inline-block">
                💡 Oportunidade: Usar como ferramenta de atração e retenção de talentos
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-[#1e3a8a] via-[#f97316] to-[#10b981] my-16"></div>

        {/* Section 5: Saiba Mais */}
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
                <h4 className="font-bold text-[#1e3a8a] group-hover:underline">Ministério do Trabalho</h4>
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
                <h4 className="font-bold text-[#10b981] group-hover:underline">INSS</h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Informações sobre benefícios, afastamentos, FGTS digital e crédito consignado do trabalhador.
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
              A semana de 19 de fevereiro marca um ponto de inflexão para o RH corporativo. As novas regras de segurança, a mudança nas operações de domingos/feriados e as tendências de IA agêntica exigem ação imediata. O RH estratégico de 2026 será aquele que antecipar riscos, negociar com sindicatos e implementar tecnologia de forma responsável.
            </p>
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663324672414/lKNFbgfUdlfSXjAJ.png"
                  alt="Logo Gestão FX"
                  className="w-8 h-8"
                />
                <p className="text-xs opacity-75">
                  <strong>Edição:</strong> 19 de fevereiro 2026 | <strong>Próxima atualização:</strong> 26 de fevereiro 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
