import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

/**
 * HeroSection Component - Gestão FX 2.0
 * Design: Premium, Dynamic & Professional
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
  showWordCloud?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  primaryCTA,
  secondaryCTA,
  children,
  imagePosition = 'right',
  showWordCloud = false,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0f172a]">
      {/* Background Image with Overlay */}
      {backgroundImage && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-[#0f172a]/40" />
        </div>
      )}

      {/* Decorative Gradient Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Text Content */}
          <div className={`${imagePosition === 'right' ? 'lg:col-span-1' : 'lg:col-span-1 lg:order-2'} animate-in fade-in slide-in-from-left duration-1000`}>
            {/* Main Title with Gradient Text */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 font-montserrat">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                {title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed mb-10 max-w-xl">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {primaryCTA && (
                <Button
                  onClick={primaryCTA.onClick}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-105"
                >
                  {primaryCTA.label}
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  onClick={secondaryCTA.onClick}
                  variant="outline"
                  className="border-2 border-white/20 bg-white/5 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 backdrop-blur-sm"
                >
                  {secondaryCTA.label}
                </Button>
              )}
            </div>

            {/* Additional Content */}
            {children}
          </div>

          {/* Right Side - Word Cloud or Decoration */}
          {imagePosition === 'right' && (
            <div className="hidden lg:flex relative h-full items-center justify-center animate-in fade-in zoom-in duration-1000 delay-300">
              {showWordCloud ? (
                <div className="relative">
                  <img 
                    src="/wordcloud-rh.png" 
                    alt="Nuvem de Palavras - Temas de RH e Desenvolvimento" 
                    className="w-full max-w-2xl h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 object-contain"
                  />
                </div>
              ) : (
                <div className="relative h-96 w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-3xl transform rotate-6 shadow-2xl backdrop-blur-3xl border border-white/10" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-3xl transform -rotate-3 border border-white/5" />
                  <div className="flex items-center justify-center h-full">
                    <div className="w-64 h-64 bg-blue-500/10 rounded-full flex items-center justify-center border border-white/10">
                      <div className="w-48 h-48 bg-blue-500/20 rounded-full animate-ping" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
