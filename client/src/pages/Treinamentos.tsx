import { Link } from "wouter";
import { ArrowRight, Users, Brain, Zap, Heart, MessageSquare, TrendingUp, Lightbulb, Home } from "lucide-react";

export default function Treinamentos() {
  const trainings = [
    {
      id: 1,
      title: "Treinamento de Líderes",
      subtitle: "Liderança Estratégica e Transformacional",
      description: "Desenvolva competências essenciais para liderar equipes de alta performance. Abordagem prática focada em tomada de decisão, gestão de conflitos e desenvolvimento de inteligência emocional.",
      icon: <Users className="w-8 h-8" />,
      color: "from-[#1e3a8a] to-[#3b82f6]",
      highlights: ["Comunicação efetiva", "Gestão de mudanças", "Inteligência emocional", "Visão estratégica"],
      duration: "8 a 16 horas",
      format: "Presencial, Híbrido ou Online"
    },
    {
      id: 2,
      title: "Comunicação Efetiva",
      subtitle: "Comunicação Estratégica e Assertiva",
      description: "Potencialize a comunicação interna e externa. Técnicas de comunicação não-violenta, escuta ativa e apresentações de impacto para fortalecer relacionamentos profissionais.",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-[#059669] to-[#10b981]",
      highlights: ["Escuta ativa", "Comunicação não-violenta", "Apresentações impactantes", "Feedback construtivo"],
      duration: "6 a 12 horas",
      format: "Presencial, Híbrido ou Online"
    },
    {
      id: 3,
      title: "Fortalecimento de Políticas",
      subtitle: "Estruturação e Implementação de Políticas RH",
      description: "Crie políticas de RH sólidas e alinhadas com a cultura organizacional. Desde políticas de benefícios até código de conduta, garantindo conformidade legal e engajamento.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-[#7c3aed] to-[#a78bfa]",
      highlights: ["Políticas de benefícios", "Código de conduta", "Conformidade legal", "Cultura organizacional"],
      duration: "12 a 20 horas",
      format: "Consultoria + Workshop"
    },
    {
      id: 4,
      title: "Treinamento de Recrutamento & Seleção",
      subtitle: "R&S Estratégico e Baseado em Competências",
      description: "Desenvolva técnicas avançadas de recrutamento e seleção. Desde employer branding até entrevistas comportamentais, atraia e retenha talentos alinhados com sua estratégia.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-[#f97316] to-[#fb923c]",
      highlights: ["Employer branding", "Entrevistas comportamentais", "Avaliação de competências", "Retenção de talentos"],
      duration: "8 a 16 horas",
      format: "Presencial, Híbrido ou Online"
    },
    {
      id: 5,
      title: "Treinamento e Desenvolvimento (T&D)",
      subtitle: "Programas de Desenvolvimento Customizados",
      description: "Desenhe e implemente programas de T&D que geram resultados. Mapeamento de competências, planos de desenvolvimento individual e trilhas de carreira.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-[#06b6d4] to-[#22d3ee]",
      highlights: ["Mapeamento de competências", "Planos de desenvolvimento", "Trilhas de carreira", "Avaliação de desempenho"],
      duration: "10 a 18 horas",
      format: "Consultoria + Workshop"
    },
    {
      id: 6,
      title: "Inteligência Artificial Aplicada aos Negócios",
      subtitle: "IA para Otimização de Processos RH",
      description: "Explore como a IA pode transformar processos de RH. De recrutamento automatizado a análise preditiva de desempenho, prepare sua equipe para o futuro.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-[#ec4899] to-[#f472b6]",
      highlights: ["Automação de processos", "Análise preditiva", "Chatbots RH", "Recrutamento com IA"],
      duration: "6 a 12 horas",
      format: "Presencial, Híbrido ou Online"
    },
    {
      id: 7,
      title: "Neurociência Aplicada ao Negócio",
      subtitle: "Compreender o Cérebro para Liderar Melhor",
      description: "Integre conhecimentos de neurociência na gestão. Entenda como o cérebro funciona para otimizar motivação, aprendizado e tomada de decisão nas organizações.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-[#8b5cf6] to-[#a78bfa]",
      highlights: ["Neurociência da motivação", "Aprendizado e memória", "Tomada de decisão", "Gestão do estresse"],
      duration: "8 a 14 horas",
      format: "Presencial, Híbrido ou Online"
    },
    {
      id: 8,
      title: "Inteligência Emocional para o Crescimento Sustentável",
      subtitle: "Autoconhecimento e Relacionamentos Profissionais",
      description: "Desenvolva inteligência emocional como competência estratégica. Autoconhecimento, empatia e gestão de emoções para criar ambientes de trabalho saudáveis e produtivos.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-[#dc2626] to-[#ef4444]",
      highlights: ["Autoconhecimento", "Empatia", "Gestão de emoções", "Resiliência"],
      duration: "8 a 16 horas",
      format: "Presencial, Híbrido ou Online"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link href="/">
              <a className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                <Home className="w-4 h-4" />
                Voltar à Página Inicial
              </a>
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-2">Portfólio de Treinamentos</h1>
          <p className="text-blue-100 text-lg">Soluções customizadas de desenvolvimento humano e organizacional</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#1e3a8a]/5 to-[#10b981]/5 rounded-lg p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">Desenvolvemos Pessoas e Organizações</h2>
            <p className="text-gray-700 text-lg mb-4">
              Nossos programas de treinamento e desenvolvimento são desenhados sob medida para as necessidades específicas da sua organização. Combinamos teoria com prática, neurociência com experiência, para gerar resultados mensuráveis em comportamento, engajamento e performance.
            </p>
            <p className="text-gray-600">
              Cada solução é customizada, considerando a cultura, os desafios e os objetivos estratégicos da sua empresa. Trabalhamos com pequenas empresas, PMEs e grandes corporações.
            </p>
          </div>
        </section>

        {/* Trainings Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-12">Nossas Soluções de Treinamento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {trainings.map((training) => (
              <div
                key={training.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
              >
                {/* Color Header */}
                <div className={`bg-gradient-to-r ${training.color} h-2`}></div>

                {/* Content */}
                <div className="p-8">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`bg-gradient-to-br ${training.color} text-white p-3 rounded-lg flex-shrink-0`}>
                      {training.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1e3a8a] mb-1">{training.title}</h3>
                      <p className="text-sm text-gray-600 font-medium">{training.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {training.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <p className="text-xs font-bold text-gray-500 uppercase mb-3">Tópicos abordados:</p>
                    <div className="flex flex-wrap gap-2">
                      {training.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Duration and Format */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase mb-1">Duração</p>
                      <p className="text-sm font-semibold text-[#1e3a8a]">{training.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase mb-1">Formato</p>
                      <p className="text-sm font-semibold text-[#1e3a8a]">{training.format}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href="/contato">
                    <a className={`block w-full bg-gradient-to-r ${training.color} text-white py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-200 group-hover:scale-105 flex items-center justify-center gap-2`}>
                      Solicitar Informações
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Não Encontrou o Que Procura?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Desenvolvemos soluções customizadas para qualquer necessidade de treinamento e desenvolvimento. Converse com nosso time sobre sua situação específica.
          </p>
          <Link href="/contato">
            <a className="inline-block bg-white text-[#1e3a8a] font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors">
              Agendar Consulta Gratuita
            </a>
          </Link>
        </section>

        {/* Footer Info */}
        <section className="mt-16 text-center text-gray-600 text-sm border-t pt-8">
          <p className="mb-2">
            <strong>Gestão FX</strong> - Desenvolvimento Humano e Organizacional
          </p>
          <p>
            Fabrício Xavier – Psicólogo (CRP 06/193074), Gestor de RH e Especialista em Gestão de Pessoas
          </p>
        </section>
      </div>
    </div>
  );
}
