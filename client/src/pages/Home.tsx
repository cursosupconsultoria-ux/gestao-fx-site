import { useState } from 'react';
import { CheckCircle2, AlertTriangle, Zap, Users, BookOpen, Shield, TrendingUp, Heart, Lightbulb } from 'lucide-react';
import { Link } from 'wouter';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ContentSection from '@/components/ContentSection';
import ServiceCard from '@/components/ServiceCard';
import WaveDivider from '@/components/WaveDivider';
import { Button } from '@/components/ui/button';

/**
 * Home Page - Gestão FX
 * Design: Modernismo Corporativo com Humanidade
 * Objetivo: Converter pequenos empresários em leads qualificados
 * 
 * Seções:
 * 1. Hero - Promessa central e CTAs
 * 2. Problema Real - Dores dos empresários
 * 3. Solução Gestão FX - Proposta de valor
 * 4. Serviços em Destaque - Cards com hover effects
 * 5. Como Trabalhamos - Processo
 * 6. CTA Final - Agendar diagnóstico
 */

export default function Home() {
  const [, setLocation] = useLocation();

  const handleSchedule = () => {
    setLocation('/contato');
  };

  const handleNR1Click = () => {
    setLocation('/nr1');
  };

  const handleServicesClick = () => {
    setLocation('/#servicos');
  };

  const problems = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Falta de RH Estruturado',
      description: 'Empresas pequenas não têm equipe de RH dedicada, deixando processos desorganizados.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Medo de Fiscalização e Multas',
      description: 'Incerteza sobre conformidade legal e riscos de penalidades trabalhistas.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Equipe Desmotivada ou Adoecida',
      description: 'Falta de gestão psicossocial resulta em baixa produtividade e afastamentos.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lideranças Despreparadas',
      description: 'Gestores sem ferramentas e conhecimento para liderar pessoas efetivamente.',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'NR-1 Ignorada ou Mal Compreendida',
      description: 'Desconhecimento sobre a Norma Reguladora 1 e seus requisitos.',
    },
  ];

  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Adequação à NR-1',
      description: 'Diagnóstico completo e implementação de conformidade com a Norma Reguladora 1.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Gestão Psicossocial',
      description: 'Estruturação de programas para saúde emocional e bem-estar da equipe.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Consultoria de RH para PMEs',
      description: 'Suporte estratégico em recrutamento, desenvolvimento e gestão de pessoas.',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Treinamentos e Desenvolvimento',
      description: 'Capacitação de lideranças e equipes em temas críticos de RH e gestão.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Mentoria para Gestores',
      description: 'Acompanhamento contínuo de líderes para melhor gestão de pessoas.',
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: 'Processos e Políticas',
      description: 'Estruturação de processos sólidos e políticas de RH adaptadas à realidade da PME.',
    },
  ];

  const workProcess = [
    {
      step: '01',
      title: 'Diagnóstico Gratuito',
      description: 'Avaliamos a situação atual da sua empresa em RH, conformidade e saúde psicossocial.',
    },
    {
      step: '02',
      title: 'Proposta Personalizada',
      description: 'Apresentamos um plano de ação customizado para suas necessidades específicas.',
    },
    {
      step: '03',
      title: 'Implementação Orientada',
      description: 'Acompanhamos a implementação das soluções com suporte contínuo.',
    },
    {
      step: '04',
      title: 'Acompanhamento e Ajustes',
      description: 'Monitoramos resultados e fazemos ajustes conforme necessário.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header onScheduleClick={handleSchedule} />

      {/* Main Content */}
      <main className="flex-1">
        {/* HERO SECTION */}
        <HeroSection
          title="Gestão Estratégica de Pessoas"
          subtitle="Transformamos a forma como sua empresa cuida das pessoas com consultoria de RH, saúde mental e mentoria executiva. Soluções práticas e acessíveis para empresas que buscam crescimento sólido e humano."
          backgroundImage="/hero-bg.jpg"
          primaryCTA={{
            label: 'Agendar Diagnóstico Gratuito',
            onClick: handleSchedule,
          }}
          secondaryCTA={{
            label: 'Conheça Nossos Serviços',
            onClick: () => setLocation('/servicos'),
          }}
          showWordCloud={true}
        />

        {/* EXPERTISE SECTION - Expertise em Múltiplas Dimensões */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#f9fafb]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              {/* Texto Descritivo Centralizado */}
              <div className="w-full max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6 font-montserrat">
                  Expertise em Múltiplas Dimensões
                </h2>
                <p className="text-lg text-[#4b5563] leading-relaxed mb-8">
                  Nossa abordagem integrada cobre todas as áreas essenciais para o sucesso da sua empresa. De consultoria estratégica a desenvolvimento pessoal, oferecemos soluções que transformam pessoas e organizações.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <div className="px-4 py-2 bg-[#1e3a8a]/10 text-[#1e3a8a] rounded-full text-sm font-semibold">RH Estratégico</div>
                  <div className="px-4 py-2 bg-[#059669]/10 text-[#059669] rounded-full text-sm font-semibold">Bem-estar Mental</div>
                  <div className="px-4 py-2 bg-[#374151]/10 text-[#374151] rounded-full text-sm font-semibold">Desenvolvimento</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEMA REAL SECTION */}
        <section className="py-16 md:py-24 bg-[#fafaf8]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                O Problema Real
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pequenas empresas enfrentam desafios únicos que exigem soluções práticas e acessíveis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {problems.map((problem, index) => (
                <ServiceCard
                  key={index}
                  icon={problem.icon}
                  title={problem.title}
                  description={problem.description}
                  variant="accent"
                />
              ))}
            </div>
          </div>
        </section>

        <WaveDivider variant="secondary" />

        {/* SOLUÇÃO SECTION */}
        <ContentSection
          title="A Solução: Gestão FX"
          subtitle="RH Estratégico Acessível"
          image="https://private-us-east-1.manuscdn.com/sessionFile/T5u2kkpTgaK3x8g4w2NTqC/sandbox/LW2Q8AooCgypfk9Fd11FhR-img-3_1770936047000_na1fn_c21hbGwtYnVzaW5lc3Mtb3duZXItMw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVDV1MmtrcFRnYUszeDhnNHcyTlRxQy9zYW5kYm94L0xXMlE4QW9vQ2d5cGZrOUZkMTFGaFItaW1nLTNfMTc3MDkzNjA0NzAwMF9uYTFmbl9jMjFoYkd3dFluVnphVzVsYzNNdGIzZHVaWEl0TXcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oTYwrOXbEcjB4GCutDosr0bD10OLq~o1LYeaeShV4ZZ7yJ3DtJUFtbr3EeLHOdXJBv00faD-Pea5WmcplA17~~wcBhc6rFPhyv~LkWW8nqDfskwpBBkYjqmlBgwrt1KakXeX0gG3O6RPH3j15TJa0WSFs-MiPigxcyHAS6te5WJorcnaqPaEAg7WOv5ylPhieHlE1BV~Rlg~G7v-vKBHG3shVcJlKbuMEn9EURh1Vs8sT16zLo~OI9mZ-wPxSiB1tm47dJYl4DQNjBSdowJ9Emm94awnMN-18-9i~B5CTPqNa~Cdh2WF4Tlb3lY3JQVdQj7cDvcZ3J8X~JSF7wnw5g__"
          imagePosition="right"
          backgroundColor="white"
          content={
            <div className="space-y-4">
              <p className="text-base leading-relaxed">
                A Gestão FX atua como o <strong>RH estratégico da sua empresa</strong>, com foco em conformidade legal, organização de processos e gestão psicossocial — de forma flexível e acessível.
              </p>
              <p className="text-base leading-relaxed">
                Não somos apenas consultores. Somos parceiros que entendem os desafios reais de pequenas empresas e oferecem soluções práticas, sem jargão acadêmico ou complicações desnecessárias.
              </p>
              <ul className="space-y-2 pt-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4a9b7f] flex-shrink-0 mt-0.5" />
                  <span>Conformidade garantida com NR-1 e legislação trabalhista</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4a9b7f] flex-shrink-0 mt-0.5" />
                  <span>Gestão psicossocial estruturada para bem-estar da equipe</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4a9b7f] flex-shrink-0 mt-0.5" />
                  <span>Processos de RH adaptados à realidade de PMEs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4a9b7f] flex-shrink-0 mt-0.5" />
                  <span>Suporte contínuo e acompanhamento personalizado</span>
                </li>
              </ul>
            </div>
          }
        />

        <WaveDivider variant="accent" flip />

        {/* HUB DE SERVIÇOS - 4 PILARES */}
        <section id="servicos" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 font-montserrat">
                Nossos Serviços
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Soluções estratégicas desenhadas para transformar sua gestão de pessoas, saúde mental e desenvolvimento de liderança.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* Card 1: Consultoria RH */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 border-[#1e3a8a] group">
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-[#1e3a8a] text-white p-3 rounded-md flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1e3a8a] mb-1 font-montserrat">Consultoria de RH</h3>
                      <p className="text-sm text-gray-600">Soluções para pequenas empresas sem RH estruturado</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    Transforme sua gestão de pessoas. Soluções práticas em subsistemas de RH, conformidade e processos para empresas que buscam crescimento sólido.
                  </p>
                  <Button
                    onClick={handleSchedule}
                    className="w-full bg-[#1e3a8a] hover:bg-[#152a5f] text-white font-semibold py-3 rounded-md transition-all duration-200 group-hover:shadow-lg"
                  >
                    Saiba Mais
                  </Button>
                </div>
              </div>

              {/* Card 2: Mentoria */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 border-[#059669] group">
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-[#059669] text-white p-3 rounded-md flex-shrink-0 group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1e3a8a] mb-1 font-montserrat">Mentoria Executiva</h3>
                      <p className="text-sm text-gray-600">Desenvolvimento para gestores e líderes</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    Acelere sua carreira com quem entende a "solidão do líder". Mentoria focada em tomada de decisão, soft skills e inteligência emocional.
                  </p>
                  <Button
                    onClick={handleSchedule}
                    className="w-full bg-[#059669] hover:bg-[#047857] text-white font-semibold py-3 rounded-md transition-all duration-200 group-hover:shadow-lg"
                  >
                    Saiba Mais
                  </Button>
                </div>
              </div>

              {/* Card 3: Saúde Mental */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 border-[#dc2626] group">
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-[#dc2626] text-white p-3 rounded-md flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1e3a8a] mb-1 font-montserrat">Psicoterapia Clínica</h3>
                      <p className="text-sm text-gray-600">Foco em saúde mental e equilíbrio emocional</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    Atendimento clínico especializado para o equilíbrio emocional no ambiente pessoal e profissional. Espaço seguro para o tratamento de ansiedade e estresse.
                  </p>
                  <Button
                    onClick={handleSchedule}
                    className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold py-3 rounded-md transition-all duration-200 group-hover:shadow-lg"
                  >
                    Saiba Mais
                  </Button>
                </div>
              </div>

              {/* Card 4: Treinamento */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 border-[#f97316] group">
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-[#f97316] text-white p-3 rounded-md flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1e3a8a] mb-1 font-montserrat">Treinamento & Desenvolvimento</h3>
                      <p className="text-sm text-gray-600">Workshops e palestras customizadas</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    Workshops, palestras e programas de T&D desenhados sob medida para as necessidades da sua equipe. Foco em resultados comportamentais.
                  </p>
                  <Link href="/treinamentos">
                    <a className="block w-full bg-[#f97316] hover:bg-[#d96300] text-white font-semibold py-3 rounded-md text-center transition-all duration-200 group-hover:shadow-lg">
                      Saiba Mais
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WaveDivider variant="primary" />

        {/* COMO TRABALHAMOS */}
        <section className="py-16 md:py-24 bg-[#fafaf8]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Como Trabalhamos
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Um processo transparente e orientado a resultados.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workProcess.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300">
                    <div className="text-4xl font-bold text-[#d4a5a0] mb-4">{item.step}</div>
                    <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  {index < workProcess.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-[#d4a5a0] text-2xl">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <WaveDivider variant="secondary" flip />

        {/* JORNALZINHO RH CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#4a9b7f] to-[#2d7a5f] text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Acompanhe as Novidades de RH
                </h2>
                <p className="text-lg text-white/90 mb-6">
                  Receba semanalmente as principais atualizações sobre legislação trabalhista, tendências de RH, gestão de pessoas e conformidade com a NR-1. Conteúdo prático e aplicável para pequenas empresas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => setLocation('/novidades-rh')}
                    className="bg-white hover:bg-[#f5f1ed] text-[#4a9b7f] font-semibold px-8 py-6 text-base transition-all duration-200 hover:shadow-lg"
                  >
                    Acessar Jornalzinho RH
                  </Button>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-4">O que você encontra:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span>Atualizações de legislação trabalhista</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span>Tendências e novidades de RH</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span>Dicas práticas de gestão de pessoas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span>Conformidade com NR-1 e segurança</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <WaveDivider variant="primary" />

        {/* CTA FINAL */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#1e3a5f] to-[#152a47] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Transformar sua Gestão de Pessoas?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Agende um diagnóstico gratuito e descubra como podemos ajudar sua empresa a crescer de forma segura e sustentável.
            </p>
            <Button
              onClick={handleSchedule}
              className="bg-white hover:bg-[#f5f1ed] text-[#1e3a5f] font-semibold px-8 py-6 text-base transition-all duration-200 hover:shadow-lg"
            >
              Agendar Diagnóstico Gratuito
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        email="contato@gestaofx.com.br"
        phone="(19) 98420-7525"
        address="São Paulo / Brasil"
      />
    </div>
  );
}
