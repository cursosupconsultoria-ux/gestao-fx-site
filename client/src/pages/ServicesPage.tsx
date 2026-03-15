import { Shield, Users, Zap, BookOpen, CheckCircle2, Brain, Heart } from 'lucide-react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import WaveDivider from '@/components/WaveDivider';
import { Button } from '@/components/ui/button';

/**
 * Services Page - Gestão FX
 * Página completa com todos os serviços oferecidos
 */

export default function ServicesPage() {
  const [, setLocation] = useLocation();

  const handleSchedule = () => {
    setLocation('/contato');
  };

  const services = [
    {
      id: 'consultoria',
      icon: <Users className="w-8 h-8" />,
      title: 'Consultoria de RH para PMEs',
      description: 'Suporte estratégico em recrutamento, seleção, desenvolvimento, retenção e gestão de desempenho. Estruturamos processos que funcionam em pequenas empresas.',
      details: ['Estruturação de RH', 'Processos de recrutamento', 'Gestão de desempenho', 'Retenção de talentos', 'Políticas de RH'],
    },
    {
      id: 'mentoria',
      icon: <Brain className="w-8 h-8" />,
      title: 'Mentoria para Gestores',
      description: 'Acompanhamento contínuo de líderes para melhor gestão de pessoas, desenvolvimento de competências e resolução de desafios do dia a dia.',
      details: ['Sessões individuais', 'Coaching de lideranças', 'Desenvolvimento de competências', 'Suporte em decisões', 'Acompanhamento de resultados'],
    },
    {
      id: 'psicoterapia',
      icon: <Heart className="w-8 h-8" />,
      title: 'Psicoterapia Clínica',
      description: 'Atendimento clínico especializado para o equilíbrio emocional no ambiente pessoal e profissional. Foco em saúde mental, ansiedade e estresse.',
      details: ['Equilíbrio emocional', 'Saúde mental no trabalho', 'Gestão de estresse', 'Desenvolvimento pessoal', 'Ambiente seguro e ético'],
    },
    {
      id: 'treinamentos-info',
      icon: <Zap className="w-8 h-8" />,
      title: 'Treinamentos e Desenvolvimento',
      description: 'Capacitação de lideranças e equipes em temas críticos de RH, segurança, saúde e gestão de pessoas. Workshops e palestras customizadas.',
      details: ['Diagnóstico de necessidades', 'Desenho de programas', 'Facilitação de treinamentos', 'Materiais customizados', 'Avaliação de impacto'],
    },
    {
      id: 'nr1',
      icon: <Shield className="w-8 h-8" />,
      title: 'Adequação à NR-1',
      description: 'Diagnóstico completo, mapeamento de requisitos e implementação de conformidade com a Norma Reguladora 1. Proteção contra multas e passivos.',
      details: ['Diagnóstico inicial', 'Mapeamento de requisitos', 'Plano de ação', 'Implementação orientada', 'Acompanhamento'],
    },
    {
      id: 'politicas',
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
          subtitle="Soluções estratégicas desenhadas para transformar sua gestão de pessoas, saúde mental e desenvolvimento de liderança."
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

            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-mt-32 ${
                    index % 2 === 1 ? 'lg:grid-cols-2' : ''
                  }`}
                >
                  {/* Conteúdo */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="inline-flex p-4 rounded-2xl bg-[#1e3a5f]/5 mb-6">
                      <div className="text-[#1e3a5f]">{service.icon}</div>
                    </div>
                    <h3 className="text-3xl font-bold text-[#1e3a5f] mb-4">{service.title}</h3>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{service.description}</p>

                    {/* Detalhes */}
                    <div className="mb-8 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-bold text-[#1e3a5f] mb-4">O que entregamos:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                            <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      onClick={handleSchedule}
                      className="bg-[#1e3a8a] hover:bg-[#152a5f] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      Solicitar Proposta
                    </Button>
                  </div>

                  {/* Imagem/Decoração */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative h-[400px] bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 shadow-inner flex items-center justify-center overflow-hidden group">
                      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
                      <div className="text-9xl opacity-10 transition-transform duration-500 group-hover:scale-110">{service.icon}</div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white to-transparent" />
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
                  icon: <CheckCircle2 className="w-8 h-8" />,
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
