import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

/**
 * ContactHeroSection Component - Gestão FX
 * Design: Premium Dark with Animated Cards
 */

interface ContactHeroSectionProps {
  title: string;
  subtitle: string;
  primaryCTA?: {
    label: string;
    onClick?: () => void;
  };
  children?: ReactNode;
  image?: string;
}

export default function ContactHeroSection({
  title,
  subtitle,
  primaryCTA,
  children,
  image,
}: ContactHeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1a2a4a] to-[#0f172a]">
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Text Content */}
          <div className="animate-in fade-in slide-in-from-left duration-1000">
            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 font-montserrat">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed mb-10 max-w-xl">
              {subtitle}
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {primaryCTA && (
                <Button
                  onClick={primaryCTA.onClick}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-105"
                >
                  {primaryCTA.label}
                </Button>
              )}
            </div>

            {/* Additional Content */}
            {children}
          </div>

          {/* Right Side - Image Card with Animation */}
          {image && (
            <div className="hidden lg:flex relative h-full items-center justify-center animate-in fade-in zoom-in duration-1000 delay-300">
              <div className="relative w-full max-w-md">
                {/* Animated Background Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-3xl transform rotate-3 shadow-2xl backdrop-blur-3xl border border-white/10 animate-float" />
                
                {/* Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                  <img
                    src={image}
                    alt="Contact illustration"
                    className="w-full h-auto object-cover rounded-3xl"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
