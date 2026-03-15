import { useState } from 'react';
import { pricingPlans, servicesPricing, faq } from '@/data/pricing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check, X } from 'lucide-react';

export default function InvestmentPage() {
  const [activeTab, setActiveTab] = useState<'plans' | 'services'>('plans');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1e3a8a] to-[#152a5f] text-white py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
              Investimento em RH que Transforma
            </h1>
            <p className="text-xl text-[#e5e7eb] max-w-2xl">
              Soluções acessíveis, práticas e focadas em resultados reais para sua empresa crescer com solidez.
            </p>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-8 px-4 bg-[#f9fafb]">
          <div className="max-w-6xl mx-auto">
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setActiveTab('plans')}
                className={`px-6 py-3 font-semibold rounded-lg transition-all ${
                  activeTab === 'plans'
                    ? 'bg-[#1e3a8a] text-white'
                    : 'bg-white text-[#1e3a8a] border-2 border-[#1e3a8a]'
                }`}
              >
                Planos Mensais
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`px-6 py-3 font-semibold rounded-lg transition-all ${
                  activeTab === 'services'
                    ? 'bg-[#1e3a8a] text-white'
                    : 'bg-white text-[#1e3a8a] border-2 border-[#1e3a8a]'
                }`}
              >
                Serviços Específicos
              </button>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        {activeTab === 'plans' && (
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-[#1e3a8a] mb-4 font-montserrat text-center">
                Planos Mensais
              </h2>
              <p className="text-center text-[#6b7280] mb-12 max-w-2xl mx-auto">
                Escolha o plano que melhor se adequa às necessidades da sua empresa. Todos incluem suporte contínuo e acompanhamento personalizado.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pricingPlans.map((plan) => (
                  <Card
                    key={plan.id}
                    className={`relative overflow-hidden transition-all ${
                      plan.popular
                        ? 'ring-2 ring-[#059669] shadow-xl scale-105'
                        : 'hover:shadow-lg'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-[#059669] text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                        POPULAR
                      </div>
                    )}

                    <div className="p-6">
                      {/* Plan Name */}
                      <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2 font-montserrat">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-[#6b7280] mb-6">
                        {plan.description}
                      </p>

                      {/* Price */}
                      <div className="mb-6">
                        <div className="text-4xl font-bold text-[#059669]">
                          {plan.price}
                        </div>
                        <div className="text-sm text-[#6b7280]">
                          {plan.period}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#059669] flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[#4b5563]">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Button
                        onClick={() => (window.location.href = plan.cta_link)}
                        className={`w-full font-semibold py-3 ${
                          plan.popular
                            ? 'bg-[#059669] hover:bg-[#047857] text-white'
                            : 'bg-[#1e3a8a] hover:bg-[#152a5f] text-white'
                        }`}
                      >
                        {plan.cta_text}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Services Section */}
        {activeTab === 'services' && (
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-[#1e3a8a] mb-4 font-montserrat text-center">
                Serviços Específicos
              </h2>
              <p className="text-center text-[#6b7280] mb-12 max-w-2xl mx-auto">
                Contrate serviços específicos conforme sua necessidade. Perfeito para empresas que querem soluções pontuais.
              </p>

              <div className="space-y-6">
                {servicesPricing.map((service) => (
                  <Card key={service.id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Info */}
                      <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2 font-montserrat">
                          {service.name}
                        </h3>
                        <p className="text-[#6b7280] mb-4">
                          {service.description}
                        </p>

                        {/* Includes */}
                        <div className="mb-4">
                          <div className="text-sm font-semibold text-[#1f2937] mb-2">
                            Inclui:
                          </div>
                          <ul className="space-y-2">
                            {service.includes.map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-[#4b5563]">
                                <Check className="w-4 h-4 text-[#059669]" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="text-sm text-[#6b7280]">
                          <strong>Ideal para:</strong> {service.ideal_for}
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="bg-[#f9fafb] p-6 rounded-lg flex flex-col justify-between">
                        <div>
                          <div className="text-sm text-[#6b7280] mb-2">Investimento</div>
                          <div className="text-3xl font-bold text-[#059669] mb-2">
                            {service.base_price}
                          </div>
                          <div className="text-sm text-[#6b7280] mb-6">
                            {service.duration}
                          </div>
                        </div>

                        <Button
                          onClick={() => (window.location.href = '/contato')}
                          className="w-full bg-[#1e3a8a] hover:bg-[#152a5f] text-white font-semibold"
                        >
                          Solicitar Orçamento
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="bg-[#f3f4f6] py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-12 font-montserrat text-center">
              Perguntas Frequentes
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-white px-6 rounded-lg border border-[#e5e7eb]"
                >
                  <AccordionTrigger className="text-left font-semibold text-[#1e3a8a] hover:text-[#059669]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4b5563]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-12 font-montserrat text-center">
              Comparação de Planos
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#1e3a8a] text-white">
                    <th className="px-6 py-4 text-left font-semibold">Recurso</th>
                    <th className="px-6 py-4 text-center font-semibold">Starter</th>
                    <th className="px-6 py-4 text-center font-semibold">Professional</th>
                    <th className="px-6 py-4 text-center font-semibold">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#e5e7eb]">
                    <td className="px-6 py-4 font-semibold text-[#1f2937]">Consultoria de RH</td>
                    <td className="px-6 py-4 text-center">8h/mês</td>
                    <td className="px-6 py-4 text-center">16h/mês</td>
                    <td className="px-6 py-4 text-center">24h/mês</td>
                  </tr>
                  <tr className="border-b border-[#e5e7eb]">
                    <td className="px-6 py-4 font-semibold text-[#1f2937]">Gestão Psicossocial</td>
                    <td className="px-6 py-4 text-center"><X className="w-5 h-5 mx-auto text-[#dc2626]" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-[#059669]" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-[#059669]" /></td>
                  </tr>
                  <tr className="border-b border-[#e5e7eb]">
                    <td className="px-6 py-4 font-semibold text-[#1f2937]">Mentoria Executiva</td>
                    <td className="px-6 py-4 text-center"><X className="w-5 h-5 mx-auto text-[#dc2626]" /></td>
                    <td className="px-6 py-4 text-center">4h/mês</td>
                    <td className="px-6 py-4 text-center">8h/mês</td>
                  </tr>
                  <tr className="border-b border-[#e5e7eb]">
                    <td className="px-6 py-4 font-semibold text-[#1f2937]">Suporte</td>
                    <td className="px-6 py-4 text-center">Email</td>
                    <td className="px-6 py-4 text-center">Prioritário 24-48h</td>
                    <td className="px-6 py-4 text-center">Prioritário 12h</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#1e3a8a] to-[#059669] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 font-montserrat">
              Pronto para Começar?
            </h2>
            <p className="text-xl text-[#e5e7eb] mb-8">
              Agende um diagnóstico gratuito e descubra qual plano é ideal para sua empresa.
            </p>
            <Button
              onClick={() => (window.location.href = '/contato')}
              className="bg-white text-[#1e3a8a] hover:bg-[#f3f4f6] font-semibold px-8 py-3 text-lg"
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
