import { Shield, Users, Zap, BookOpen, CheckCircle2, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import WaveDivider from '@/components/WaveDivider';
import { Button } from '@/components/ui/button';

/**
 * Services Page - Gestão FX
 * Página completa com todos os serviços oferecidos
 */

export default function ServicesPage() {
  const handleSchedule = () => {
    alert('Agendar diagnóstico - Integração em desenvolvimento');
  };

  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Adequação à NR-1',
      description: 'Diagnóstico completo, mapeamento de requisitos e implementação de conformidade com a Norma Reguladora 1. Garantimos que sua empresa esteja protegida de multas e passivos.',
      details: ['Diagnóstico inicial', 'Mapeamento de requisitos', 'Plano de ação', 'Implementação orientada', 'Acompanhamento'],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Gestão Psicossocial',
      description: 'Estruturação de programas para identificar e gerenciar riscos psicossociais. Criamos ambientes onde as pessoas prosperam e se sentem valorizadas.',
      details: ['Avaliação de clima', 'Identificação de riscos', 'Programas de bem-estar', 'Treinamento de lideranças', 'Monitoramento contínuo'],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Consultoria de RH para PMEs',
      description: 'Suporte estratégico em recrutamento, seleção, desenvolvimento, retenção e gestão de desempenho. Estruturamos processos que funcionam em pequenas empresas.',
      details: ['Estruturação de RH', 'Processos de recrutamento', 'Gestão de desempenho', 'Retenção de talentos', 'Políticas de RH'],
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Treinamentos e Desenvolvimento',
      description: 'Capacitação de lideranças e equipes em temas críticos de RH, segurança, saúde e gestão de pessoas. Programas customizados para sua realidade.',
      details: ['Diagnóstico de necessidades', 'Desenho de programas', 'Facilitação de treinamentos', 'Materiais customizados', 'Avaliação de impacto'],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Mentoria para Gestores',
      description: 'Acompanhamento contínuo de líderes para melhor gestão de pessoas, desenvolvimento de competências e resolução de desafios do dia a dia.',
      details: ['Sessões individuais', 'Coaching de lideranças', 'Desenvolvimento de competências', 'Suporte em decisões', 'Acompanhamento de resultados'],
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: 'Processos e Políticas',
      description: 'Estruturação de processos sólidos e políticas de RH adaptadas à realidade de PMEs. Documentação clara e implementação prática.',
      details: ['Mapeamento de processos', 'Desenho de políticas', 'Documentação', 'Treinamento de equipes', 'Implementação'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header onScheduleClick={handleSchedule} />

      <main className="flex-1">
        {/* HERO */}
        <HeroSection
          title="Nossos Serviços"
          subtitle="Soluções completas em RH, conformidade legal e gestão psicossocial para pequenas empresas."
          primaryCTA={{
            label: 'Agendar Diagnóstico Gratuito',
            onClick: handleSchedule,
          }}
        />

        <WaveDivider variant="secondary" />

        {/* SERVIÇOS DETALHADOS */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Serviços Completos
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cada serviço é customizado para sua empresa. Trabalhamos com você para identificar necessidades e implementar soluções práticas.
              </p>
            </div>

            <div className="space-y-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:grid-cols-2 lg:auto-cols-fr' : ''
                  }`}
                >
                  {/* Conteúdo */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="inline-flex p-3 rounded-lg bg-[#1e3a5f]/10 mb-4">
                      <div className="text-[#1e3a5f] text-2xl">{service.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                    {/* Detalhes */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-[#1e3a5f] mb-3">O que está incluído:</h4>
                      <ul className="space-y-2">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#d4a5a0]" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      onClick={handleSchedule}
                      className="bg-[#1e3a5f] hover:bg-[#152a47] text-white font-semibold px-6 py-3 transition-all duration-200 hover:shadow-md"
                    >
                      Solicitar Proposta
                    </Button>
                  </div>

                  {/* Imagem/Decoração */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative h-80 bg-gradient-to-br from-[#d4a5a0]/20 to-[#e8d4c4]/20 rounded-2xl flex items-center justify-center">
                      <div className="text-6xl opacity-20">{service.icon}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WaveDivider variant="accent" flip />

        {/* PROCESSO */}
        <section className="py-16 md:py-24 bg-[#fafaf8]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Como Trabalhamos
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Um processo transparente, orientado a resultados e adaptado à sua empresa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Diagnóstico',
                  description: 'Entendemos sua situação atual, desafios e objetivos',
                },
                {
                  step: '02',
                  title: 'Proposta',
                  description: 'Apresentamos um plano customizado com prazos e investimento',
                },
                {
                  step: '03',
                  title: 'Implementação',
                  description: 'Executamos as soluções com suporte contínuo',
                },
                {
                  step: '04',
                  title: 'Resultados',
                  description: 'Acompanhamos e ajustamos para garantir sucesso',
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300">
                    <div className="text-4xl font-bold text-[#d4a5a0] mb-4">{item.step}</div>
                    <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-[#d4a5a0] text-2xl">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <WaveDivider variant="primary" />

        {/* DIFERENCIAIS */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Por Que Escolher Nossos Serviços?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Briefcase className="w-8 h-8" />,
                  title: 'Especialização em PMEs',
                  description: 'Conhecemos os desafios únicos de empresas pequenas e oferecemos soluções práticas e acessíveis.',
                },
                {
                  icon: <CheckCircle2 className="w-8 h-8" />,
                  title: 'Resultados Comprovados',
                  description: 'Acompanhamos métricas claras e garantimos que você veja o retorno do investimento.',
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Suporte Contínuo',
                  description: 'Não saímos depois de entregar. Continuamos ao seu lado para garantir o sucesso.',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex p-4 rounded-lg bg-[#1e3a5f]/10 mb-4">
                    <div className="text-[#1e3a5f] text-3xl">{item.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WaveDivider variant="secondary" flip />

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#1e3a5f] to-[#152a47] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Transformar sua Gestão de Pessoas?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Agende um diagnóstico gratuito e descubra qual serviço é ideal para sua empresa.
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
