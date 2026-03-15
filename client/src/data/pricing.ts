/**
 * Planos e Investimento - Gestão FX
 * Dados estruturados para página de preços e planos de serviços
 */

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  cta_text: string;
  cta_link: string;
}

export interface ServicePrice {
  id: string;
  name: string;
  description: string;
  base_price: string;
  duration: string;
  includes: string[];
  ideal_for: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "plan-diagnostic",
    name: "Diagnóstico Gratuito",
    description: "Avaliação completa da sua situação atual em RH, conformidade e saúde psicossocial",
    price: "Grátis",
    period: "Sessão única (2 horas)",
    features: [
      "Análise de processos de RH atuais",
      "Avaliação de conformidade com NR-1",
      "Diagnóstico de clima organizacional",
      "Identificação de principais desafios",
      "Recomendações iniciais",
      "Proposta personalizada sem compromisso"
    ],
    cta_text: "Agendar Diagnóstico Gratuito",
    cta_link: "/contato"
  },
  {
    id: "plan-starter",
    name: "Plano Starter",
    description: "Ideal para pequenas empresas que começam a estruturar RH",
    price: "R$ 2.500",
    period: "Por mês",
    features: [
      "Consultoria de RH 8 horas/mês",
      "Estruturação de processos básicos",
      "Suporte via email e WhatsApp",
      "Acesso ao Jornalzinho RH",
      "Relatório mensal de atividades",
      "Conformidade com legislação trabalhista"
    ],
    cta_text: "Começar com Starter",
    cta_link: "/contato"
  },
  {
    id: "plan-professional",
    name: "Plano Professional",
    description: "Mais popular - Para empresas que querem transformação real",
    price: "R$ 5.500",
    period: "Por mês",
    popular: true,
    features: [
      "Consultoria de RH 16 horas/mês",
      "Gestão psicossocial estruturada",
      "Mentoria para gestores (4 horas/mês)",
      "Workshops e treinamentos",
      "Suporte prioritário 24/48h",
      "Acesso ao Jornalzinho RH",
      "Relatório mensal detalhado",
      "Conformidade com NR-1 completa",
      "Revisão trimestral de processos"
    ],
    cta_text: "Escolher Professional",
    cta_link: "/contato"
  },
  {
    id: "plan-premium",
    name: "Plano Premium",
    description: "Transformação completa com suporte integral",
    price: "R$ 9.500",
    period: "Por mês",
    features: [
      "Consultoria de RH 24 horas/mês",
      "Gestão psicossocial avançada",
      "Mentoria executiva intensiva (8 horas/mês)",
      "Programa de desenvolvimento de lideranças",
      "Workshops customizados mensais",
      "Suporte prioritário com resposta em 12h",
      "Acesso ao Jornalzinho RH",
      "Relatório executivo mensal",
      "Conformidade com NR-1 + auditorias",
      "Revisão mensal de processos",
      "Assessoria em casos específicos",
      "Acesso a rede de especialistas"
    ],
    cta_text: "Contratar Premium",
    cta_link: "/contato"
  }
];

export const servicesPricing: ServicePrice[] = [
  {
    id: "service-consultation",
    name: "Consultoria de RH Estratégica",
    description: "Diagnóstico, estruturação e implementação de processos de RH",
    base_price: "A partir de R$ 2.500/mês",
    duration: "Contrato mínimo de 3 meses",
    includes: [
      "Diagnóstico completo de RH",
      "Estruturação de subsistemas (recrutamento, onboarding, desenvolvimento)",
      "Implementação de políticas e procedimentos",
      "Conformidade com legislação trabalhista",
      "Suporte contínuo e acompanhamento",
      "Relatórios mensais"
    ],
    ideal_for: "Pequenas e médias empresas sem RH estruturado"
  },
  {
    id: "service-psychosocial",
    name: "Gestão Psicossocial",
    description: "Programa de saúde mental e bem-estar no trabalho",
    base_price: "A partir de R$ 3.000/mês",
    duration: "Programa de 6 meses",
    includes: [
      "Avaliação de riscos psicossociais",
      "Workshops mensais sobre inteligência emocional",
      "Programa de bem-estar e prevenção de burnout",
      "Atendimento psicoterapêutico individual (quando necessário)",
      "Consultoria para líderes",
      "Relatório de impacto"
    ],
    ideal_for: "Empresas que querem cuidar da saúde mental da equipe"
  },
  {
    id: "service-mentorship",
    name: "Mentoria Executiva",
    description: "Desenvolvimento de lideranças e gestores",
    base_price: "R$ 1.500 por sessão",
    duration: "Sessões de 2 horas",
    includes: [
      "Sessões individuais de mentoria",
      "Desenvolvimento de competências de liderança",
      "Coaching em situações específicas",
      "Ferramentas práticas de gestão",
      "Acompanhamento de implementação",
      "Feedback e evolução"
    ],
    ideal_for: "Gestores e líderes que querem crescer profissionalmente"
  },
  {
    id: "service-training",
    name: "Workshops e Treinamentos",
    description: "Programas customizados de desenvolvimento de equipes",
    base_price: "A partir de R$ 2.000 por workshop",
    duration: "4 a 8 horas",
    includes: [
      "Diagnóstico de necessidades",
      "Desenho customizado do programa",
      "Facilitação profissional",
      "Materiais e recursos",
      "Acompanhamento pós-workshop",
      "Certificado de participação"
    ],
    ideal_for: "Equipes que precisam de desenvolvimento específico"
  },
  {
    id: "service-nr1",
    name: "Conformidade com NR-1",
    description: "Implementação completa da Norma Reguladora 1",
    base_price: "A partir de R$ 4.500",
    duration: "Projeto de 90 dias",
    includes: [
      "Diagnóstico de conformidade",
      "Estruturação de políticas e procedimentos",
      "Implementação de sistema de gestão",
      "Treinamento da equipe",
      "Documentação completa",
      "Acompanhamento e ajustes"
    ],
    ideal_for: "Empresas que precisam se regularizar urgentemente"
  },
  {
    id: "service-psychotherapy",
    name: "Psicoterapia Clínica",
    description: "Atendimento psicoterapêutico individual especializado",
    base_price: "A partir de R$ 300 por sessão",
    duration: "Sessões de 50 minutos",
    includes: [
      "Avaliação inicial completa",
      "Sessões terapêuticas individuais",
      "Abordagem humanizada e acolhedora",
      "Foco em ansiedade, estresse e equilíbrio emocional",
      "Relatório de progresso (se autorizado)",
      "Flexibilidade de horários"
    ],
    ideal_for: "Profissionais que buscam equilíbrio emocional e bem-estar"
  }
];

export const faq = [
  {
    id: "faq-1",
    question: "Qual é o investimento mínimo para começar?",
    answer: "O diagnóstico gratuito é o primeiro passo e não tem custo. Após isso, nossos planos começam a partir de R$ 2.500/mês. Oferecemos flexibilidade e podemos customizar conforme sua necessidade e orçamento."
  },
  {
    id: "faq-2",
    question: "Quanto tempo leva para ver resultados?",
    answer: "Os primeiros resultados aparecem em 30-45 dias (melhor comunicação, processos mais claros). Transformações significativas (redução de turnover, melhoria de clima) geralmente aparecem em 3-6 meses. Conformidade com NR-1 pode ser alcançada em 90 dias."
  },
  {
    id: "faq-3",
    question: "Vocês trabalham com empresas de qual tamanho?",
    answer: "Especializamos em pequenas e médias empresas (5 a 500 funcionários). Nossas soluções são desenhadas para a realidade de PMEs, com foco em praticidade e acessibilidade. Empresas maiores também podem se beneficiar, mas nossa expertise é em PMEs."
  },
  {
    id: "faq-4",
    question: "Como funciona o diagnóstico gratuito?",
    answer: "O diagnóstico é uma sessão de 2 horas onde avaliamos: situação atual de RH, conformidade legal, clima organizacional e principais desafios. Ao final, apresentamos recomendações e uma proposta personalizada sem nenhum compromisso de contratação."
  },
  {
    id: "faq-5",
    question: "Qual é o contrato mínimo?",
    answer: "Recomendamos um contrato mínimo de 3 meses para que possamos implementar mudanças significativas. Muitos clientes continuam conosco por mais tempo porque veem resultados reais. Não temos cláusulas de penalidade, apenas pedimos aviso prévio de 30 dias."
  },
  {
    id: "faq-6",
    question: "Posso combinar diferentes serviços?",
    answer: "Sim! Muitos clientes combinam consultoria de RH com mentoria executiva ou gestão psicossocial. Podemos criar um pacote customizado que atenda suas necessidades específicas. Fale com nosso time sobre suas necessidades."
  },
  {
    id: "faq-7",
    question: "Vocês oferecem suporte contínuo?",
    answer: "Sim. Todos os planos incluem suporte contínuo. O Plano Starter oferece suporte via email e WhatsApp. Os planos Professional e Premium têm suporte prioritário com resposta em 24-48h ou 12h respectivamente."
  },
  {
    id: "faq-8",
    question: "Como funciona a psicoterapia clínica?",
    answer: "A psicoterapia é um atendimento individual com nosso psicólogo especializado. As sessões têm 50 minutos e foco em equilíbrio emocional, ansiedade, estresse e bem-estar. É confidencial e pode ser presencial ou online."
  },
  {
    id: "faq-9",
    question: "Qual é a diferença entre mentoria e psicoterapia?",
    answer: "Mentoria é focada em desenvolvimento profissional, liderança e carreira. Psicoterapia é focada em saúde mental e equilíbrio emocional. Muitas pessoas se beneficiam de ambas simultaneamente."
  },
  {
    id: "faq-10",
    question: "Como posso começar?",
    answer: "Simples! Clique em 'Agendar Diagnóstico Gratuito', escolha um horário que funcione para você, e vamos marcar uma chamada. Sem compromisso, sem custo. Vamos conversar sobre seus desafios e como podemos ajudar."
  }
];
