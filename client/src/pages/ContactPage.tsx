import { Mail, MessageCircle, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import WaveDivider from '@/components/WaveDivider';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const whatsappNumber = '5519984207525';
  const whatsappMessage = 'Olá! Gostaria de saber mais sobre os serviços da Gestão FX.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const emailAddress = 'contato@gestaofx.com.br';
  const emailSubject = 'Interesse em Consultoria - Gestão FX';

  const handleWhatsApp = () => {
    window.open(whatsappUrl, '_blank');
  };

  const handleEmail = () => {
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onScheduleClick={handleWhatsApp} />

      <main className="flex-1">
        <HeroSection
          title="Entre em Contato"
          subtitle="Estamos aqui para ajudar sua empresa. Fale conosco por email ou WhatsApp!"
          primaryCTA={{
            label: 'Enviar Mensagem',
            onClick: handleWhatsApp,
          }}
        />

        <WaveDivider variant="secondary" />

        {/* TABELA DE CONTATO */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Informações de Contato
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Escolha o melhor canal para se comunicar conosco
              </p>
            </div>

            <div className="overflow-x-auto rounded-lg border border-border shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#1e3a5f] text-white">
                    <th className="px-6 py-4 text-left font-bold">Canal</th>
                    <th className="px-6 py-4 text-left font-bold">Informação</th>
                    <th className="px-6 py-4 text-left font-bold">Tempo de Resposta</th>
                    <th className="px-6 py-4 text-center font-bold">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-secondary/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Mail className="w-5 h-5 text-[#1e3a5f]" />
                        <span className="font-semibold text-[#1e3a5f]">Email</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <a href={`mailto:${emailAddress}`} className="text-[#1e3a5f] hover:underline font-medium">
                        {emailAddress}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>24-48 horas</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Button
                        onClick={handleEmail}
                        className="bg-[#1e3a5f] hover:bg-[#152a47] text-white font-semibold px-4 py-2 text-sm"
                      >
                        Enviar Email
                      </Button>
                    </td>
                  </tr>

                  <tr className="hover:bg-secondary/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-[#1e3a5f]">WhatsApp</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#1e3a5f] hover:underline font-medium">
                        +55 19 98420-7525
                      </a>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>1-2 horas</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Button
                        onClick={handleWhatsApp}
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 text-sm"
                      >
                        Enviar WhatsApp
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <WaveDivider variant="accent" flip />

        {/* CARDS DE CONTATO */}
        <section className="py-16 md:py-24 bg-[#fafaf8]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-[#1e3a5f]/20 hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#1e3a5f] rounded-lg p-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f]">Email</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Envie-nos um email com suas dúvidas. Respondemos em até 48 horas.
                </p>
                <p className="text-sm font-semibold text-[#1e3a5f] mb-4">
                  {emailAddress}
                </p>
                <Button
                  onClick={handleEmail}
                  className="w-full bg-[#1e3a5f] hover:bg-[#152a47] text-white font-semibold"
                >
                  Enviar Email
                </Button>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-green-600/20 hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-600 rounded-lg p-3">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f]">WhatsApp</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Prefere conversar por WhatsApp? Respondemos em 1-2 horas.
                </p>
                <p className="text-sm font-semibold text-[#1e3a5f] mb-4">
                  +55 19 98420-7525
                </p>
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                >
                  Enviar WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>

        <WaveDivider variant="primary" />

        {/* CTA FINAL */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#1e3a5f] to-[#152a47] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Começar?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Entre em contato conosco e agende seu diagnóstico gratuito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleEmail}
                className="bg-white hover:bg-[#f5f1ed] text-[#1e3a5f] font-semibold px-8 py-6 text-base"
              >
                Enviar Email
              </Button>
              <Button
                onClick={handleWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-6 text-base"
              >
                Enviar WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
