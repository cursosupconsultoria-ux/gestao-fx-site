import { Case } from '@/data/cases';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Target } from 'lucide-react';

interface CaseCardProps {
  case: Case;
  onClick?: () => void;
}

export default function CaseCard({ case: caseData, onClick }: CaseCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={onClick}>
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#1e3a8a]/10 to-[#059669]/10">
        <img
          src={caseData.image}
          alt={caseData.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-[#059669] text-white px-3 py-1 rounded-full text-sm font-semibold">
          {caseData.industry}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and Subtitle */}
        <h3 className="text-xl font-bold text-[#1e3a8a] mb-2 font-montserrat">
          {caseData.title}
        </h3>
        <p className="text-sm text-[#6b7280] mb-4">
          {caseData.subtitle}
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {caseData.results.slice(0, 2).map((result) => (
            <div key={result.metric} className="bg-[#f3f4f6] p-3 rounded-lg">
              <div className="text-lg font-bold text-[#059669]">
                {result.value}
              </div>
              <div className="text-xs text-[#6b7280]">
                {result.metric}
              </div>
            </div>
          ))}
        </div>

        {/* Challenge Preview */}
        <div className="mb-6 pb-6 border-b border-[#e5e7eb]">
          <p className="text-sm text-[#4b5563] line-clamp-2">
            {caseData.challenge}
          </p>
        </div>

        {/* Testimonial */}
        <div className="bg-[#f9fafb] p-4 rounded-lg mb-6">
          <p className="text-sm text-[#4b5563] italic mb-3">
            "{caseData.testimonial.text.substring(0, 80)}..."
          </p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white text-xs font-bold">
              {caseData.testimonial.author.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-semibold text-[#1f2937]">
                {caseData.testimonial.author}
              </div>
              <div className="text-xs text-[#6b7280]">
                {caseData.testimonial.role}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Button
          onClick={onClick}
          className="w-full bg-[#1e3a8a] hover:bg-[#152a5f] text-white font-semibold"
        >
          Ver Case Completo
        </Button>
      </div>
    </Card>
  );
}
