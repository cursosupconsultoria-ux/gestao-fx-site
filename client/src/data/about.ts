/**
 * Sobre Nós - Gestão FX
 * Informações sobre a empresa, fundador e equipe
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  image: string;
}

export const founder = {
  name: "Fabrício Xavier",
  title: "Fundador e Psicólogo Especialista em RH",
  bio: "Com mais de 22 anos de experiência em Gestão de Pessoas e Psicologia Organizacional, Fabrício Xavier fundou a Gestão FX com a missão de tornar consultoria de RH acessível e prática para pequenas empresas. Sua abordagem única combina conhecimento psicológico profundo com soluções práticas de negócio.",
  credentials: [
    "Psicólogo - CRP 08/193074",
    "Especialista em Gestão de Pessoas",
    "Certificado em Gestão de RH Estratégico",
    "Especialista em NR-1 e Conformidade Trabalhista",
    "Coach Executivo Certificado",
    "Formação em Inteligência Emocional"
  ],
  experience: [
    "22 anos de experiência em RH e Psicologia Organizacional",
    "Trabalhou em empresas Fortune 500 e startups",
    "Atendeu mais de 50 empresas com sucesso comprovado",
    "Palestrante em conferências de RH e desenvolvimento pessoal",
    "Mentor de profissionais em transição de carreira"
  ],
  image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438957549/a8mgfTffr2f7ZxoXgnaGqo/gestao-fx-hero-team-9TAFM2AHayrBDaa6aAojzT.webp"
};

export const team: TeamMember[] = [
  {
    id: "team-1",
    name: "Fabrício Xavier",
    role: "Fundador & Consultor de RH",
    bio: "Psicólogo especialista em gestão de pessoas com 22 anos de experiência. Lidera a estratégia geral e atende os principais clientes.",
    credentials: [
      "Psicólogo - CRP 08/193074",
      "Especialista em Gestão de RH",
      "Coach Executivo Certificado"
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438957549/a8mgfTffr2f7ZxoXgnaGqo/gestao-fx-hero-team-9TAFM2AHayrBDaa6aAojzT.webp"
  },
  {
    id: "team-2",
    name: "Consultores de RH Especializados",
    role: "Consultoria Estratégica",
    bio: "Equipe de consultores com experiência em diferentes setores (varejo, manufatura, serviços, tecnologia). Cada um traz expertise específica para seus projetos.",
    credentials: [
      "Especialistas em RH Estratégico",
      "Conhecimento em NR-1 e Conformidade",
      "Experiência em PMEs"
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438957549/a8mgfTffr2f7ZxoXgnaGqo/gestao-fx-workshop-hXWtJSshsTtxcN7Ljb58rv.webp"
  },
  {
    id: "team-3",
    name: "Mentores Executivos",
    role: "Desenvolvimento de Lideranças",
    bio: "Profissionais experientes em liderança, gestão e desenvolvimento de pessoas. Focam em transformação individual e organizacional.",
    credentials: [
      "Coaches Executivos Certificados",
      "Especialistas em Liderança",
      "Experiência em Desenvolvimento de Talentos"
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438957549/a8mgfTffr2f7ZxoXgnaGqo/gestao-fx-mentorship-fkQU62eHVN38HnxSJyX2ge.webp"
  },
  {
    id: "team-4",
    name: "Psicoterapeutas",
    role: "Saúde Mental e Bem-estar",
    bio: "Psicólogos clínicos especializados em saúde mental no ambiente corporativo. Focam em bem-estar, ansiedade, estresse e equilíbrio emocional.",
    credentials: [
      "Psicólogos Clínicos",
      "Especialistas em Saúde Mental",
      "Formação em Psicoterapia"
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438957549/a8mgfTffr2f7ZxoXgnaGqo/gestao-fx-wellbeing-BdbB7eAxX5Uosb8ZwVBoAg.webp"
  }
];

export const values = [
  {
    id: "value-1",
    title: "Humanidade",
    description: "Acreditamos que pessoas são o coração de qualquer organização. Nossas soluções sempre colocam o bem-estar humano em primeiro lugar."
  },
  {
    id: "value-2",
    title: "Praticidade",
    description: "Não acreditamos em soluções teóricas. Tudo que fazemos é prático, aplicável e focado em resultados reais para sua empresa."
  },
  {
    id: "value-3",
    title: "Acessibilidade",
    description: "Consultoria de RH não precisa ser cara ou complicada. Tornamos soluções de qualidade acessíveis para pequenas e médias empresas."
  },
  {
    id: "value-4",
    title: "Transparência",
    description: "Comunicação clara, sem jargão acadêmico ou complicações desnecessárias. Você sempre sabe exatamente o que está acontecendo."
  },
  {
    id: "value-5",
    title: "Excelência",
    description: "Cada projeto é tratado com dedicação máxima. Queremos que você alcance não apenas seus objetivos, mas que os supere."
  },
  {
    id: "value-6",
    title: "Parceria",
    description: "Não somos apenas consultores. Somos parceiros no seu crescimento, comprometidos com seu sucesso a longo prazo."
  }
];

export const stats = [
  {
    id: "stat-1",
    metric: "50+",
    label: "Empresas Transformadas",
    description: "Pequenas e médias empresas que cresceram com nossa ajuda"
  },
  {
    id: "stat-2",
    metric: "22+",
    label: "Anos de Experiência",
    description: "Em Gestão de Pessoas e Psicologia Organizacional"
  },
  {
    id: "stat-3",
    metric: "35%",
    label: "Redução Média de Turnover",
    description: "Nos clientes que implementam nossas recomendações"
  },
  {
    id: "stat-4",
    metric: "95%",
    label: "Taxa de Satisfação",
    description: "Clientes que recomendariam nossos serviços"
  }
];

export const mission = {
  title: "Nossa Missão",
  description: "Transformar a forma como pequenas e médias empresas cuidam de suas pessoas, tornando consultoria de RH de qualidade acessível, prática e focada em resultados reais."
};

export const vision = {
  title: "Nossa Visão",
  description: "Ser a consultoria de RH mais confiável e humanizada para PMEs no Brasil, reconhecida por transformar organizações e desenvolver pessoas."
};
