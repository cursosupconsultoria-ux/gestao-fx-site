import { useState } from 'react';
import { Mail, MessageCircle, Clock, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import WaveDivider from '@/components/WaveDivider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.company || !formData.message) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Preparar mensagem para WhatsApp
    const whatsappFormMessage = `Olá! Meu nome é ${formData.name}.
Email: ${formData.email}
Telefone: ${formData.phone || 'Não informado'}
Empresa: ${formData.company}

Mensagem: ${formData.message}`;

    // Abrir WhatsApp com os dados do formulário
    const encodedMessage = encodeURIComponent(whatsappFormMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

    // Mostrar confirmação e limpar formulário
    setFormSubmitted(true);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });

    // Limpar mensagem de confirmação após 3 segundos
    setTimeout(() => setFormSubmitted(false), 3000);
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

        {/* FORMULÁRIO DE CONTATO */}
        <section className="py-16 md:py-24 bg-[#fafaf8]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                  Formulário de Contato
                </h2>
                <p className="text-lg text-muted-foreground">
                  Preencha o formulário abaixo e entraremos em contato em breve
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="bg-white rounded-2xl p-8 border border-border shadow-sm">
                {/* Mensagem de Sucesso */}
                {formSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-semibold">
                      ✓ Dados recebidos! Você será redirecionado para o WhatsApp para continuar a conversa.
                    </p>
                  </div>
                )}

                {/* Nome */}
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]"
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu.email@empresa.com"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]"
                    required
                  />
                </div>

                {/* Telefone */}
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                    Telefone (opcional)
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(19) 98420-7525"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]"
                  />
                </div>

                {/* Empresa */}
                <div className="mb-6">
                  <label htmlFor="company" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                    Empresa *
                  </label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Nome da sua empresa"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]"
                    required
                  />
                </div>

                {/* Mensagem */}
                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos como podemos ajudar sua empresa..."
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] resize-none"
                    required
                  />
                </div>

                {/* Botão Enviar */}
                <Button
                  type="submit"
                  className="w-full bg-[#1e3a5f] hover:bg-[#152a47] text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <Send className="w-5 h-5" />
                  Enviar Formulário
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  * Campos obrigatórios. Seus dados serão compartilhados via WhatsApp para continuarmos a conversa.
                </p>
              </form>
            </div>
          </div>
        </section>

        <WaveDivider variant="primary" />

        {/* CARDS DE CONTATO */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#1e3a5f]/10 to-transparent rounded-2xl p-8 border border-[#1e3a5f]/20 hover:shadow-lg transition-all">
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

              <div className="bg-gradient-to-br from-green-600/10 to-transparent rounded-2xl p-8 border border-green-600/20 hover:shadow-lg transition-all">
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

        <WaveDivider variant="secondary" flip />

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
