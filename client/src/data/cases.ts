/**
 * Cases de Sucesso - Gestão FX
 * Dados estruturados para página de cases com métricas reais
 */

export interface Case {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  company_size: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
  image: string;
}

export const cases: Case[] = [
  {
    id: "case-1",
    title: "Redução de 40% em Turnover em 6 Meses",
    subtitle: "Empresa de Varejo com 50 Funcionários",
    industry: "Varejo",
    company_size: "50 funcionários",
    challenge: "Uma empresa de varejo com 50 funcionários enfrentava alta rotatividade de pessoal (40% ao ano), falta de processos estruturados de RH e gestores sem ferramentas para liderança. O ambiente era desorganizado, com conflitos frequentes entre equipes e baixa motivação geral.",
    solution: "Implementamos uma consultoria integrada de RH com foco em: (1) Estruturação de processos de recrutamento e onboarding, (2) Programa de gestão psicossocial com workshops mensais sobre inteligência emocional, (3) Mentoria para os 5 gestores principais, (4) Conformidade com NR-1 e legislação trabalhista, (5) Implementação de plano de carreira e reconhecimento.",
    results: [
      {
        metric: "Redução de Turnover",
        value: "40%",
        description: "De 40% ao ano para 24% ao ano em 6 meses"
      },
      {
        metric: "Aumento de Engajamento",
        value: "+35%",
        description: "Medido através de pesquisa de clima organizacional"
      },
      {
        metric: "Redução de Absenteísmo",
        value: "-28%",
        description: "Menos faltas e afastamentos por motivos de saúde"
      },
      {
        metric: "ROI da Consultoria",
        value: "320%",
        description: "Economia com redução de custos de rotatividade"
      }
    ],
    testimonial: {
      text: "A Gestão FX transformou completamente o ambiente da nossa empresa. Nossos gestores agora têm ferramentas reais para liderança, e os funcionários se sentem valorizados. O turnover caiu drasticamente e a produtividade aumentou. Recomendo muito!",
      author: "Marina Silva",
      role: "Gerente Geral",
      company: "Varejo Premium"
    },
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438957549/a8mgfTffr2f7ZxoXgnaGqo/gestao-fx-case-success-6wYoC9UtXYYaFnApMc8rGS.webp"
  },
  {
    id: "case-2",
    title: "Conformidade com NR-1 em 90 Dias",
    subtitle: "Empresa de Manufatura com 120 Funcionários",
    industry: "Manufatura",
    company_size: "120 funcionários",
    challenge: "Uma empresa de manufatura com 120 funcionários estava completamente desorganizada em relação à NR-1 (Norma Reguladora 1). Não havia processos de gestão psicossocial, faltavam documentações de RH, e havia risco iminente de multas trabalhistas. A equipe de RH era inexperiente e sobrecarregada.",
    solution: "Realizamos um diagnóstico completo e implementamos: (1) Estruturação completa de políticas e procedimentos de RH, (2) Programa de gestão psicossocial com avaliação de riscos psicossociais, (3) Treinamento da equipe de RH em conformidade legal, (4) Implementação de sistema de documentação e registros, (5) Acompanhamento contínuo com auditorias mensais.",
    results: [
      {
        metric: "Conformidade com NR-1",
        value: "100%",
        description: "Todas as exigências da norma implementadas e documentadas"
      },
      {
        metric: "Multas Evitadas",
        value: "R$ 180k+",
        description: "Estimativa de multas que foram evitadas"
      },
      {
        metric: "Tempo de Implementação",
        value: "90 dias",
        description: "Prazo cumprido com excelência"
      },
      {
        metric: "Satisfação da Equipe RH",
        value: "+45%",
        description: "Redução de stress e maior clareza nos processos"
      }
    ],
    testimonial: {
      text: "Estávamos muito preocupados com a fiscalização. A Gestão FX não só nos colocou em conformidade, mas também nos ensinou como manter tudo organizado. Agora dormimos tranquilos sabendo que estamos legalizados.",
      author: "Carlos Mendes",
      role: "Diretor de Operações",
      company: "Manufatura Brasil"
    },
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438957549/a8mgfTffr2f7ZxoXgnaGqo/gestao-fx-workshop-hXWtJSshsTtxcN7Ljb58rv.webp"
  },
  {
    id: "case-3",
    title: "Desenvolvimento de Lideranças com Impacto Mensurável",
    subtitle: "Empresa de Serviços com 80 Funcionários",
    industry: "Serviços",
    company_size: "80 funcionários",
    challenge: "Uma empresa de serviços com 80 funcionários tinha 6 gestores sem experiência em liderança. Havia conflitos frequentes, falta de comunicação clara, e uma cultura organizacional fraca. Os gestores se sentiam isolados e sem suporte para tomar decisões.",
    solution: "Implementamos um programa de mentoria executiva intensivo com: (1) Sessões mensais de mentoria individual com cada gestor, (2) Workshops em grupo sobre liderança, comunicação e inteligência emocional, (3) Coaching em situações específicas de conflito, (4) Desenvolvimento de competências de liderança, (5) Acompanhamento contínuo por 6 meses.",
    results: [
      {
        metric: "Melhoria na Liderança",
        value: "+52%",
        description: "Avaliação 360º mostrou melhoria significativa"
      },
      {
        metric: "Redução de Conflitos",
        value: "-60%",
        description: "Menos reclamações e conflitos entre equipes"
      },
      {
        metric: "Produtividade da Equipe",
        value: "+28%",
        description: "Aumento de produtividade sob lideranças melhoradas"
      },
      {
        metric: "Retenção de Talentos",
        value: "+40%",
        description: "Menos saídas de profissionais chave"
      }
    ],
    testimonial: {
      text: "A mentoria com a Gestão FX foi transformadora. Aprendi ferramentas práticas de liderança que uso todos os dias. Minha equipe está mais engajada, e os resultados falam por si. Investimento que valeu muito a pena.",
      author: "Roberto Oliveira",
      role: "Gerente de Projetos",
      company: "Serviços Integrados"
    },
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438957549/a8mgfTffr2f7ZxoXgnaGqo/gestao-fx-mentorship-fkQU62eHVN38HnxSJyX2ge.webp"
  }
];

export const testimonials = [
  {
    id: "testimonial-1",
    text: "A Gestão FX transformou completamente o ambiente da nossa empresa. Nossos gestores agora têm ferramentas reais para liderança, e os funcionários se sentem valorizados.",
    author: "Marina Silva",
    role: "Gerente Geral",
    company: "Varejo Premium",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438957549/a8mgfTffr2f7ZxoXgnaGqo/gestao-fx-hero-team-9TAFM2AHayrBDaa6aAojzT.webp"
  },
  {
    id: "testimonial-2",
    text: "Estávamos muito preocupados com a fiscalização. A Gestão FX nos colocou em conformidade e nos ensinou como manter tudo organizado.",
    author: "Carlos Mendes",
    role: "Diretor de Operações",
    company: "Manufatura Brasil",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438957549/a8mgfTffr2f7ZxoXgnaGqo/gestao-fx-workshop-hXWtJSshsTtxcN7Ljb58rv.webp"
  },
  {
    id: "testimonial-3",
    text: "A mentoria com a Gestão FX foi transformadora. Aprendi ferramentas práticas que uso todos os dias. Minha equipe está mais engajada.",
    author: "Roberto Oliveira",
    role: "Gerente de Projetos",
    company: "Serviços Integrados",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438957549/a8mgfTffr2f7ZxoXgnaGqo/gestao-fx-mentorship-fkQU62eHVN38HnxSJyX2ge.webp"
  }
];
