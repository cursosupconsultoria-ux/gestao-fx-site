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
          backgroundImage="https://private-us-east-1.manuscdn.com/sessionFile/T5u2kkpTgaK3x8g4w2NTqC/sandbox/LW2Q8AooCgypfk9Fd11FhR-img-2_1770936039000_na1fn_c21hbGwtYnVzaW5lc3Mtb3duZXItMg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVDV1MmtrcFRnYUszeDhnNHcyTlRxQy9zYW5kYm94L0xXMlE4QW9vQ2d5cGZrOUZkMTFGaFItaW1nLTJfMTc3MDkzNjAzOTAwMF9uYTFmbl9jMjFoYkd3dFluVnphVzVsYzNNdGIzZHVaWEl0TWcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UNZt3D0lr5qa3GS4NcYY15M4gjv8d3yKnk4UALkeM-HidNl1fluLgw5nSC-l9Y~EqONEv1r9B0eHpdaIQMhcWsm20Iwgm8gvcpLBuvMrlahr-aypnjlTG5Ncr2tJeeYrlWxNAmUu9afdNXyOGR2KuNgeyMLfv5M-tCfGahTU1tFvLPSjwKh6DkLxI5mv2aUdvtvPcFiPVcGdR~YYG77Tk0gq02ecXjMEUIGp-V0SXirpZyynZpe4It-shdzbzDW0icP104NMaWbryTWPZ3QgpfAadBLrJMzjilqY6KZC9rKkGOU69yErCJ5DB7V~JbmHulKi0YenKa2CXqepNtSgTg__"
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
