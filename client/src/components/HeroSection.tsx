import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

/**
 * HeroSection Component - Gestão FX
 * Design: Modernismo Corporativo com Humanidade
 * - Imagem de fundo com gradiente suave
 * - Tipografia hierárquica clara
 * - Botões CTA destacados
 * - Layout assimétrico
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-[#fafaf8] to-[#f5f1ed]">
      {/* Background Image with Overlay */}
      {backgroundImage && (
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`${imagePosition === 'right' ? 'lg:col-span-1' : 'lg:col-span-1 lg:order-2'}`}>
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3a5f] leading-tight mb-6">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {primaryCTA && (
                <Button
                  onClick={primaryCTA.onClick}
                  className="bg-[#1e3a5f] hover:bg-[#152a47] text-white font-semibold px-8 py-6 text-base transition-all duration-200 hover:shadow-lg"
                >
                  {primaryCTA.label}
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  onClick={secondaryCTA.onClick}
                  variant="outline"
                  className="border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f]/5 font-semibold px-8 py-6 text-base transition-all duration-200"
                >
                  {secondaryCTA.label}
                </Button>
              )}
            </div>

            {/* Additional Content */}
            {children}
          </div>

          {/* Right Side Decoration (if no image provided) */}
          {!backgroundImage && imagePosition === 'right' && (
            <div className="hidden lg:block relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4a5a0]/20 to-[#e8d4c4]/20 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a5f]/10 to-transparent rounded-3xl transform -rotate-3" />
            </div>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#d4a5a0]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#1e3a5f]/5 rounded-full blur-3xl" />
    </section>
  );
}
