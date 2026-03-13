import { Link } from "wouter";
import { ArrowRight, Calendar, FileText } from "lucide-react";

/**
 * Design Philosophy: Editorial Corporativo Sofisticado
 * - Página principal com navegação clara entre edições semanais
 * - Cards com resumo das novidades de cada semana
 * - Paleta: Azul profundo (#1e3a8a), Laranja (#f97316), Verde (#10b981)
 */

export default function Index() {
  const editions = [
    {
      week: "Semana 04/03/2026",
      date: "04 de março de 2026",
      path: "/novidades-rh/semana-04-03",
      status: "Última edição",
      highlights: [
        "Redução da Jornada: Governo defende 40 horas semanais",
        "Custo Bilionário: R$ 50,6 bilhões em ações trabalhistas em 2025",
        "Assédio Moral: Aumento de 22% nos processos",
        "Transparência Salarial: Prazo encerrado em 28/02",
      ],
      color: "from-[#1e3a8a] to-[#3b82f6]",
      statusBg: "bg-blue-100 text-[#1e3a8a]",
    },
    {
      week: "Semana 26/02/2026",
      date: "26 de fevereiro de 2026",
      path: "/novidades-rh/semana-26-02",
      status: "Edição anterior",
      highlights: [
        "Prorrogação de 90 Dias: Trabalho em Feriados (5ª vez)",
        "Habilidades de RH 2026 - LinkedIn identifica 5 competências críticas",
        "Retenção de Talentos: Rotatividade em TI chega a 35%",
        "Inteligência Artificial: 55% das empresas integrarão em 2026",
      ],
      color: "from-[#1e3a8a] to-[#3b82f6]",
      statusBg: "bg-blue-100 text-[#1e3a8a]",
    },
    {
      week: "Semana 19/02/2026",
      date: "19 de fevereiro de 2026",
      path: "/novidades-rh/semana-19-02",
      status: "Edição anterior",
      highlights: [
        "Trabalho sob Calor e Altura - Novas Regras Rígidas",
        "Trabalho aos Domingos e Feriados - Mudança em 1º de Março",
        "Tendências de RH 2026 - 9 Desafios Principais",
        "Reembolso em Trabalho Híbrido - Obrigatoriedade de Discriminação",
      ],
      color: "from-[#3b82f6] to-[#60a5fa]",
      statusBg: "bg-blue-50 text-[#1e3a8a]",
    },
    {
      week: "Semana 11/02/2026",
      date: "11 de fevereiro de 2026",
      path: "/novidades-rh/semana-11-02",
      status: "Arquivo",
      highlights: [
        "Parecer da PGR sobre Pejotização",
        "Novo PAT - Programa de Alimentação do Trabalhador",
        "Isenção de IR até R$ 5.000",
        "Fiscalização NR-1 e Saúde Mental",
      ],
      color: "from-[#f97316] to-[#fb923c]",
      statusBg: "bg-orange-100 text-[#f97316]",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663324672414/lKNFbgfUdlfSXjAJ.png"
              alt="Logo Gestão FX"
              className="w-16 h-16"
            />
            <div>
              <h1 className="text-4xl font-bold">Jornalzinho RH</h1>
              <p className="text-blue-100 mt-1">Edições Semanais - Inteligência Estratégica em Capital Humano</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-[#1e3a8a]">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Bem-vindo ao Jornalzinho RH</h2>
            <p className="text-gray-700 mb-4">
              Acompanhe as principais atualizações legislativas, tendências e novidades do mundo do trabalho e recursos humanos. Nossas edições semanais, publicadas todas as quintas-feiras, trazem análises estratégicas para manter sua diretoria informada sobre as mudanças que impactam a gestão de pessoas.
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Frequência:</strong> Toda quinta-feira | <strong>Formato:</strong> Digital interativo com links para fontes oficiais
            </p>
          </div>
        </section>

        {/* Editions Grid */}
        <section>
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8 flex items-center gap-3">
            <Calendar className="w-8 h-8" />
            Edições Disponíveis
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {editions.map((edition, idx) => (
              <Link key={idx} href={edition.path}>
                <a className="block group">
                  <div className={`bg-gradient-to-br ${edition.color} rounded-lg p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full cursor-pointer`}>
                    {/* Status Badge */}
                    <div className={`inline-block ${edition.statusBg} px-3 py-1 rounded-full text-xs font-semibold mb-4`}>
                      {edition.status}
                    </div>

                    {/* Week Title */}
                    <h3 className="text-2xl font-bold mb-2">{edition.week}</h3>
                    <p className="text-white/80 text-sm mb-6">{edition.date}</p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <p className="text-xs font-semibold text-white/70 uppercase mb-3">Destaques desta semana:</p>
                      <ul className="space-y-2">
                        {edition.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm flex gap-2">
                            <span className="text-white/60">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                      <span>Ler edição completa</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section className="mt-16 bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Como Funciona
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-[#f97316] mb-2">📅 Publicação Semanal</h4>
              <p className="text-sm text-gray-600">Novas edições publicadas toda quinta-feira com as atualizações mais recentes da legislação trabalhista.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#10b981] mb-2">🔗 Links Diretos</h4>
              <p className="text-sm text-gray-600">Todos os temas possuem links para fontes oficiais (MTE, STF, INSS) e portais de notícias especializados.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#1e3a8a] mb-2">📊 Compartilhamento</h4>
              <p className="text-sm text-gray-600">Compartilhe cada edição por email ou WhatsApp, e exporte em PDF para apresentações à diretoria.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="mt-12 text-center text-gray-600 text-sm border-t pt-8">
            <div className="flex items-center gap-3">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663324672414/lKNFbgfUdlfSXjAJ.png"
                alt="Logo Gestão FX"
                className="w-10 h-10"
              />
              <p>
                <strong>Gestão FX</strong> - Desenvolvimento Humano e Organizacional
              </p>
            </div>
          <p className="mt-2">
            Próxima edição: <strong>05 de março de 2026</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
