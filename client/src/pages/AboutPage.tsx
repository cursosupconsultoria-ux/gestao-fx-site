import { Heart, Target, Users, Zap } from 'lucide-react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ContentSection from '@/components/ContentSection';
import ServiceCard from '@/components/ServiceCard';
import WaveDivider from '@/components/WaveDivider';
import { Button } from '@/components/ui/button';

/**
 * About Page - Gestão FX
 * Página sobre a empresa, missão, visão e valores
 */

export default function AboutPage() {
  const [, setLocation] = useLocation();

  const handleSchedule = () => {
    setLocation('/contato');
  };

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Humanidade',
      description: 'Acreditamos que pessoas são o coração de qualquer empresa. Nossas soluções sempre colocam o bem-estar humano em primeiro lugar.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Clareza',
      description: 'Comunicação transparente e sem jargão. Explicamos tudo de forma simples para que você entenda e tome decisões informadas.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Parceria',
      description: 'Não somos consultores distantes. Somos parceiros que trabalham lado a lado com você para alcançar resultados reais.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Pragmatismo',
      description: 'Soluções práticas e implementáveis. Focamos no que funciona na realidade de pequenas empresas, não em teorias.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header onScheduleClick={handleSchedule} />

      <main className="flex-1">
        {/* HERO */}
        <HeroSection
          title="Sobre a Gestão FX"
          subtitle="Somos especialistas em transformar a gestão de pessoas em pequenas empresas, tornando conformidade legal, segurança e bem-estar acessíveis e práticos."
          primaryCTA={{
            label: 'Agendar Diagnóstico Gratuito',
            onClick: handleSchedule,
          }}
        />

        <WaveDivider variant="secondary" />

        {/* MISSÃO, VISÃO, VALORES */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Missão */}
              <div className="bg-gradient-to-br from-[#1e3a5f]/10 to-transparent rounded-2xl p-8 border border-[#1e3a5f]/20">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ajudar pequenas empresas a estruturar sua gestão de pessoas, garantindo conformidade legal, segurança psicossocial e desenvolvimento de equipes, sem complicações.
                </p>
              </div>

              {/* Visão */}
              <div className="bg-gradient-to-br from-[#d4a5a0]/10 to-transparent rounded-2xl p-8 border border-[#d4a5a0]/20">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser a consultoria de referência para pequenas empresas que buscam crescer de forma segura, sustentável e humanizada, com pessoas saudáveis e engajadas.
                </p>
              </div>

              {/* Valores */}
              <div className="bg-gradient-to-br from-[#4a9b7f]/10 to-transparent rounded-2xl p-8 border border-[#4a9b7f]/20">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Valores</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Humanidade, clareza, parceria e pragmatismo. Esses são os pilares que guiam cada decisão e cada solução que oferecemos.
                </p>
              </div>
            </div>

            {/* Valores Detalhados */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Nossos Valores em Ação
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <ServiceCard
                  key={index}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  variant={index % 2 === 0 ? 'default' : 'secondary'}
                />
              ))}
            </div>
          </div>
        </section>

        <WaveDivider variant="accent" flip />

        {/* POR QUE ESCOLHER GESTÃO FX */}
        <ContentSection
          title="Por Que Escolher Gestão FX?"
          subtitle="Diferencial Competitivo"
          image="https://private-us-east-1.manuscdn.com/sessionFile/T5u2kkpTgaK3x8g4w2NTqC/sandbox/L0nYVlrWPKQMEUd24xWNEC-img-2_1770861709000_na1fn_cHJvYmxlbS1zZWN0aW9uLWdlc3Rhby1meA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVDV1MmtrcFRnYUszeDhnNHcyTlRxQy9zYW5kYm94L0wwbllWbHJXUEtRTUVVZDI0eFdORUMtaW1nLTJfMTc3MDg2MTcwOTAwMF9uYTFmbl9jSEp2WW14bGJTMXpaV04wYVc5dUxXZGxjM1JoYnkxbWVBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ViVpsgU7B8ZwlpRPBw0SNxXADElv3NwmGrByTAf5DL~N0E-YiJmaWHhcgzw~UN9ve9k8tbgtdex9tRD1guq-B2i7hWjTRJpQKwqBejbExazI6~8rtFGDUh8sHri-t6HFwhVSU0vLdmvf0TeSMNYNNW2nNWqNEHuVUyuggozbakyUl516TefZVdEevelNr~7uvWkpp6dRwEGyjhJeLlMm-wMXDE4Yj6lIP4pey7203wypBLOwY6pd3RL2SnmsDYa6ZYhoQ~4zgxQBxBhi3gEf4l7opor73UJv-BxkxYExFPH725KGg9ssU912etGgwe86Q7g7sYWqMSImCDFxzKQ4Pw__"
          imagePosition="right"
          backgroundColor="light"
          content={
            <div className="space-y-4">
              <p className="text-base leading-relaxed">
                Diferente de grandes consultoras, entendemos os desafios reais de pequenas empresas. Não oferecemos soluções genéricas — customizamos tudo para sua realidade.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#4a9b7f] font-bold text-lg flex-shrink-0">✓</span>
                  <span><strong>Especialização em PMEs:</strong> Conhecemos os desafios únicos de empresas de 1 a 50 colaboradores</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4a9b7f] font-bold text-lg flex-shrink-0">✓</span>
                  <span><strong>Abordagem Prática:</strong> Soluções implementáveis, sem jargão acadêmico</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4a9b7f] font-bold text-lg flex-shrink-0">✓</span>
                  <span><strong>Suporte Contínuo:</strong> Não saímos depois de entregar — acompanhamos sua jornada</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4a9b7f] font-bold text-lg flex-shrink-0">✓</span>
                  <span><strong>Transparência Total:</strong> Você sabe exatamente o que está pagando e o que vai receber</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4a9b7f] font-bold text-lg flex-shrink-0">✓</span>
                  <span><strong>Foco em Resultados:</strong> Nosso sucesso é seu sucesso — métricas claras e acompanhamento</span>
                </li>
              </ul>
            </div>
          }
        />

        <WaveDivider variant="primary" />

        {/* EXPERTISE */}
        <section className="py-16 md:py-24 bg-[#fafaf8]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Nossa Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Combinamos conhecimento técnico com experiência prática para entregar resultados reais.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Conformidade Legal</h3>
                <p className="text-muted-foreground mb-4">
                  Expertise em NR-1, legislação trabalhista, segurança e saúde do trabalho. Mantemos sua empresa em conformidade e protegida de multas e passivos.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Gestão de Pessoas</h3>
                <p className="text-muted-foreground mb-4">
                  Recrutamento, seleção, desenvolvimento, retenção e gestão de desempenho. Estruturamos processos que funcionam em PMEs.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Saúde Psicossocial</h3>
                <p className="text-muted-foreground mb-4">
                  Diagnóstico e gestão de riscos psicossociais. Criamos ambientes onde as pessoas prosperam e se sentem valorizadas.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Desenvolvimento Organizacional</h3>
                <p className="text-muted-foreground mb-4">
                  Estruturação de processos, políticas e cultura organizacional. Transformamos empresas de dentro para fora.
                </p>
              </div>
            </div>
          </div>
        </section>

        <WaveDivider variant="secondary" flip />

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#1e3a5f] to-[#152a47] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vamos Trabalhar Juntos?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Agende um diagnóstico gratuito e descubra como podemos ajudar sua empresa a crescer com segurança e humanidade.
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
