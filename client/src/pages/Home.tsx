import { useState } from 'react';
import { CheckCircle2, AlertTriangle, Zap, Users, BookOpen, Shield } from 'lucide-react';
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
    setLocation('/servicos');
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
          title="Consultoria de RH para Pequenas Empresas"
          subtitle="Conformidade com a NR-1, saúde emocional e gestão de pessoas sem complicação. Atendemos empresas que não têm RH interno, mas precisam cumprir a legislação, reduzir riscos e cuidar das pessoas."
          backgroundImage="https://private-us-east-1.manuscdn.com/sessionFile/T5u2kkpTgaK3x8g4w2NTqC/sandbox/L0nYVlrWPKQMEUd24xWNEC-img-1_1770861706000_na1fn_aGVyby1nZXN0YW8tZng.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVDV1MmtrcFRnYUszeDhnNHcyTlRxQy9zYW5kYm94L0wwbllWbHJXUEtRTUVVZDI0eFdORUMtaW1nLTFfMTc3MDg2MTcwNjAwMF9uYTFmbl9hR1Z5YnkxblpYTjBZVzh0Wm5nLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Hkss0gYYfjtqchbexp7zbhtwX8FXJm9Dz1WuLsIoCG1efEC9c5pouVC5aMQrWgVvOT5DR7sJuvZXYZ7n6O7e~MZfRsBbKr9bcDzmSSxDdUX1ssn8J1oMJoRhthvIcERPkXtFkncWYqqNRuniLQsD92Ar4zVWXkHVyLiQ-JcYpA9ZJQcGsSw1lIw1xw70eilTgiSJp9uXnRpT4apkV6-5QcJSXd-pEtqdDhaLLXxiX3RnM5J6Li8e4uLLMUpS5pD0UUueTlsT-h4yoXKjq4yk--CXLzk3VdOfCJmPCnrP331ZyqM5zH9ZhcVCiIlYxpdGDbMJ~fyQ0Sx7g8OVkh60BQ__"
          primaryCTA={{
            label: 'Agendar Diagnóstico Gratuito',
            onClick: handleSchedule,
          }}
          secondaryCTA={{
            label: 'Entender a NR-1 na Prática',
            onClick: handleNR1Click,
          }}
        />

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
          image="https://private-us-east-1.manuscdn.com/sessionFile/T5u2kkpTgaK3x8g4w2NTqC/sandbox/L0nYVlrWPKQMEUd24xWNEC-img-3_1770861707000_na1fn_c29sdXRpb24tc2VjdGlvbi1nZXN0YW8tZng.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVDV1MmtrcFRnYUszeDhnNHcyTlRxQy9zYW5kYm94L0wwbllWbHJXUEtRTUVVZDI0eFdORUMtaW1nLTNfMTc3MDg2MTcwNzAwMF9uYTFmbl9jMjlzZFhScGIyNHRjMlZqZEdsdmJpMW5aWE4wWVc4dFpuZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=XFXGHULAUdzOV8k8Ywgyi4Q~TIUDLXjJHnoc4x4MzQ0FkpuCsp6Y-YnwJGLEYPLh878zwrdkIbWP~~h7cmIDeNpPLsAUdb~ISJ-57qz7L4hd~picgoOMWACyTDf7pDrkBvjGT~ZDvph4er0bB~QdkE1cmkIk1HmgZT1IN39OvLVyFepmErm0m7iBe9~Ps56KUFM6UZDq4oaNz2TlvIYooc0Pi9KLR0SW-CW1yw34uUAdG5BPHUcWKbqyRh-zRdA18U-gmC2TW0QpBahsA~c5OBAoeLTarGVq2lc8OZPRXAUkSSWfON-KcUcDsCTqfUjGzCKWWIJ9kacB-YUt4pyDgg__"
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

        {/* SERVIÇOS EM DESTAQUE */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Serviços em Destaque
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Soluções completas para transformar sua gestão de pessoas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  variant={index % 2 === 0 ? 'default' : 'secondary'}
                />
              ))}
            </div>

            <div className="text-center">
              <Button
                onClick={handleServicesClick}
                className="bg-[#1e3a5f] hover:bg-[#152a47] text-white font-semibold px-8 py-6 text-base transition-all duration-200 hover:shadow-lg"
              >
                Ver Todos os Serviços
              </Button>
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
        phone="(11) 9999-9999"
        address="São Paulo, SP"
      />
    </div>
  );
}
