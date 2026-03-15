import { useState } from 'react';
import { cases, testimonials } from '@/data/cases';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CaseCard from '@/components/CaseCard';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { TrendingUp, Users, Target, Award } from 'lucide-react';

export default function CasesPage() {
  const [selectedCase, setSelectedCase] = useState(cases[0]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1e3a8a] to-[#152a5f] text-white py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
              Cases de Sucesso
            </h1>
            <p className="text-xl text-[#e5e7eb] max-w-2xl">
              Veja como transformamos empresas reais com nossas soluções de RH, gestão psicossocial e desenvolvimento de lideranças.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[#f9fafb] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#059669] mb-2">50+</div>
                <div className="text-[#6b7280]">Empresas Transformadas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#059669] mb-2">35%</div>
                <div className="text-[#6b7280]">Redução Média de Turnover</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#059669] mb-2">95%</div>
                <div className="text-[#6b7280]">Taxa de Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#059669] mb-2">22+</div>
                <div className="text-[#6b7280]">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-12 font-montserrat text-center">
              Histórias de Transformação
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cases.map((caseData) => (
                <CaseCard
                  key={caseData.id}
                  case={caseData}
                  onClick={() => {
                    setSelectedCase(caseData);
                    setIsDialogOpen(true);
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-[#f3f4f6] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-12 font-montserrat text-center">
              O Que Nossos Clientes Dizem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-[#1f2937]">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-[#6b7280]">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-[#4b5563] italic">
                    "{testimonial.text}"
                  </p>
                  <div className="mt-4 pt-4 border-t border-[#e5e7eb]">
                    <div className="text-sm text-[#6b7280]">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#1e3a8a] to-[#059669] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 font-montserrat">
              Pronto para Transformar Sua Empresa?
            </h2>
            <p className="text-xl text-[#e5e7eb] mb-8">
              Agende um diagnóstico gratuito e descubra como podemos ajudar sua empresa a crescer com solidez.
            </p>
            <Button
              onClick={() => window.location.href = '/contato'}
              className="bg-white text-[#1e3a8a] hover:bg-[#f3f4f6] font-semibold px-8 py-3 text-lg"
            >
              Agendar Diagnóstico Gratuito
            </Button>
          </div>
        </section>
      </main>

      {/* Case Detail Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#1e3a8a] font-montserrat">
              {selectedCase.title}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Image */}
            <img
              src={selectedCase.image}
              alt={selectedCase.title}
              className="w-full h-64 object-cover rounded-lg"
            />

            {/* Info */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-[#6b7280]">Indústria</div>
                <div className="font-semibold text-[#1f2937]">{selectedCase.industry}</div>
              </div>
              <div>
                <div className="text-sm text-[#6b7280]">Tamanho da Empresa</div>
                <div className="font-semibold text-[#1f2937]">{selectedCase.company_size}</div>
              </div>
            </div>

            {/* Challenge */}
            <div>
              <h3 className="font-bold text-[#1e3a8a] mb-2">Desafio</h3>
              <p className="text-[#4b5563]">{selectedCase.challenge}</p>
            </div>

            {/* Solution */}
            <div>
              <h3 className="font-bold text-[#1e3a8a] mb-2">Solução</h3>
              <p className="text-[#4b5563]">{selectedCase.solution}</p>
            </div>

            {/* Results */}
            <div>
              <h3 className="font-bold text-[#1e3a8a] mb-4">Resultados</h3>
              <div className="grid grid-cols-2 gap-4">
                {selectedCase.results.map((result) => (
                  <div
                    key={result.metric}
                    className="bg-[#f3f4f6] p-4 rounded-lg"
                  >
                    <div className="text-2xl font-bold text-[#059669]">
                      {result.value}
                    </div>
                    <div className="text-sm font-semibold text-[#1f2937]">
                      {result.metric}
                    </div>
                    <div className="text-xs text-[#6b7280] mt-1">
                      {result.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-[#f9fafb] p-6 rounded-lg border border-[#e5e7eb]">
              <p className="text-[#4b5563] italic mb-4">
                "{selectedCase.testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white font-bold">
                  {selectedCase.testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-[#1f2937]">
                    {selectedCase.testimonial.author}
                  </div>
                  <div className="text-sm text-[#6b7280]">
                    {selectedCase.testimonial.role} • {selectedCase.testimonial.company}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button
              onClick={() => {
                setIsDialogOpen(false);
                window.location.href = '/contato';
              }}
              className="w-full bg-[#1e3a8a] hover:bg-[#152a5f] text-white font-semibold py-3"
            >
              Quero Resultados Similares
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
