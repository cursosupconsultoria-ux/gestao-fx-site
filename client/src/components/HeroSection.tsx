import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

/**
 * HeroSection Component - Gestão FX 2.0
 * Design: Premium & Clean
 * - Fundo limpo e moderno com gradientes suaves
 * - Tipografia hierárquica clara e amistosa
 * - Botões CTA destacados com sombras modernas
 * - Layout responsivo e fluido
 */

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  primaryCTA?: {
    label: string;
    onClick?: () => void;
  };
  secondaryCTA?: {
    label: string;
    onClick?: () => void;
  };
  children?: ReactNode;
  imagePosition?: 'left' | 'right';
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  primaryCTA,
  secondaryCTA,
  children,
  imagePosition = 'right',
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-white to-[#f9fafb]">
      {/* Background Image with Overlay */}
      {backgroundImage && (
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-transparent" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Text Content */}
          <div className={`${imagePosition === 'right' ? 'lg:col-span-1' : 'lg:col-span-1 lg:order-2'}`}>
            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1e3a8a] leading-tight mb-6 font-montserrat">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-[#4b5563] leading-relaxed mb-10 max-w-xl">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {primaryCTA && (
                <Button
                  onClick={primaryCTA.onClick}
                  className="bg-[#1e3a8a] hover:bg-[#152a5f] text-white font-semibold px-8 py-3 text-base rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  {primaryCTA.label}
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  onClick={secondaryCTA.onClick}
                  variant="outline"
                  className="border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a]/5 font-semibold px-8 py-3 text-base rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  {secondaryCTA.label}
                </Button>
              )}
            </div>

            {/* Additional Content */}
            {children}
          </div>

          {/* Right Side Decoration */}
          {!backgroundImage && imagePosition === 'right' && (
            <div className="hidden lg:block relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-[#059669]/15 to-[#10b981]/10 rounded-3xl transform rotate-6 shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a8a]/10 to-transparent rounded-3xl transform -rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#374151]/5 to-transparent rounded-3xl" />
            </div>
          )}
        </div>
      </div>

      {/* Decorative Elements - Moderno */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#059669]/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#1e3a8a]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#10b981]/5 rounded-full blur-3xl" />
    </section>
  );
}
