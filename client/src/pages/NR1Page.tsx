import { CheckCircle2, AlertCircle } from 'lucide-react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ContentSection from '@/components/ContentSection';
import ServiceCard from '@/components/ServiceCard';
import WaveDivider from '@/components/WaveDivider';
import { Button } from '@/components/ui/button';

/**
 * NR-1 Page - Gestão FX
 * Página dedicada à Norma Reguladora 1 e riscos psicossociais
 */

export default function NR1Page() {
  const [, setLocation] = useLocation();

  const handleSchedule = () => {
    setLocation('/contato');
  };

  const nr1Requirements = [
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Política de Segurança e Saúde',
      description: 'Estabelecer e comunicar política clara de segurança e saúde do trabalho.',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Avaliação de Riscos',
      description: 'Identificar e avaliar riscos ocupacionais, incluindo psicossociais.',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Gestão de Incidentes',
      description: 'Registrar, investigar e prevenir acidentes e doenças ocupacionais.',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Treinamento e Competência',
      description: 'Capacitar colaboradores em segurança e saúde do trabalho.',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Consulta e Participação',
      description: 'Envolver colaboradores nas decisões de segurança e saúde.',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Monitoramento Contínuo',
      description: 'Avaliar regularmente a efetividade do sistema de gestão.',
    },
  ];

  const psychosocialRisks = [
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Sobrecarga de Trabalho',
      description: 'Pressão excessiva e prazos irreais causam estresse e esgotamento.',
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Falta de Reconhecimento',
      description: 'Ausência de valorização reduz motivação e engajamento.',
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Comunicação Deficiente',
      description: 'Falta de clareza nas informações gera ansiedade e insegurança.',
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Conflitos Interpessoais',
      description: 'Relacionamentos tóxicos impactam saúde mental e produtividade.',
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Falta de Desenvolvimento',
      description: 'Ausência de oportunidades de crescimento causa desmotivação.',
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Instabilidade no Emprego',
      description: 'Incerteza sobre o futuro gera ansiedade e insegurança.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header onScheduleClick={handleSchedule} />

      <main className="flex-1">
        {/* HERO */}
        <HeroSection
          title="NR-1 e Riscos Psicossociais"
          subtitle="Entenda os requisitos legais e implemente estratégias efetivas para proteger a saúde e segurança de seus colaboradores."
          backgroundImage="https://private-us-east-1.manuscdn.com/sessionFile/T5u2kkpTgaK3x8g4w2NTqC/sandbox/L0nYVlrWPKQMEUd24xWNEC-img-4_1770861708000_na1fn_bnIxLWNvbXBsaWFuY2UtZ2VzdGFvLWZ4.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVDV1MmtrcFRnYUszeDhnNHcyTlRxQy9zYW5kYm94L0wwbllWbHJXUEtRTUVVZDI0eFdORUMtaW1nLTRfMTc3MDg2MTcwODAwMF9uYTFmbl9ibkl4TFdOdmJYQnNhV0Z1WTJVdFoyVnpkR0Z2TFdaNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=EOHS~7Xj1vZE8MlFH2v0VAkVEqpTXKERv~XDSV033LVBD8Ts5OcNa1nXAkdrhYgJJuk4WUaFuRupjJILe-wcVR1ZlDBmgW4Lu0mSnvRuSOR3oDRtm3gWsh-jc6z8LjeIBlWBvsN8f4r1O5DMhQ3B48o0rFIySU2frgEmzjSRsykrySR9M2p~hQYNeACq06dS7BJXqTjynHojuuXy8be87X6Is1T12Iff4emGP5-BFtk6c8zsn5lhFdlEVIL~hKLVlbqwc-WZTo2dsb0n9faQ9MtvPoVnHS4gozpj8ffNbt67Hc3fK6dgAuGWHzr4ZFcmMs7XrC~YmnfP6ZxvLLKyqA__"
          primaryCTA={{
            label: 'Agendar Diagnóstico Gratuito',
            onClick: handleSchedule,
          }}
        />

        <WaveDivider variant="secondary" />

        {/* NR-1 REQUIREMENTS */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Requisitos da NR-1
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A Norma Reguladora 1 estabelece os requisitos gerais para a gestão de segurança e saúde do trabalho.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nr1Requirements.map((req, index) => (
                <ServiceCard
                  key={index}
                  icon={req.icon}
                  title={req.title}
                  description={req.description}
                  variant={index % 2 === 0 ? 'default' : 'secondary'}
                />
              ))}
            </div>
          </div>
        </section>

        <WaveDivider variant="accent" flip />

        {/* PSYCHOSOCIAL RISKS */}
        <section className="py-16 md:py-24 bg-[#fafaf8]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Riscos Psicossociais
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Identifique e gerencie os fatores que afetam a saúde emocional de sua equipe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {psychosocialRisks.map((risk, index) => (
                <ServiceCard
                  key={index}
                  icon={risk.icon}
                  title={risk.title}
                  description={risk.description}
                  variant={index % 2 === 0 ? 'accent' : 'default'}
                />
              ))}
            </div>
          </div>
        </section>

        <WaveDivider variant="primary" />

        {/* CTA FINAL */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#1e3a5f] to-[#152a47] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Implementar a NR-1?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Agende um diagnóstico gratuito e descubra como adequar sua empresa à legislação.
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

      <Footer />
    </div>
  );
}
