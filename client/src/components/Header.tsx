import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

/**
 * Header Component - Gestão FX 2.1
 * Design: Ultra-Moderno, Fluido e Atrativo
 * - Logo minimalista com novo design
 * - Menu com efeitos de hover sofisticados
 * - Navegação fluida e responsiva
 * - Cores: Azul Marinho, Verde Sálvia, Cinza Grafite
 */

interface HeaderProps {
  onScheduleClick?: () => void;
}

export default function Header({ onScheduleClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const navItems = [
    { label: 'Início', href: '/' },
    { label: 'Novidades RH', href: '/novidades-rh' },
    { label: 'Serviços', href: '/#servicos' },
  ];

  const handleNavClick = (href: string) => {
    setLocation(href);
    setMobileMenuOpen(false);
  };

  const handleScheduleClick = () => {
    if (onScheduleClick) {
      onScheduleClick();
    } else {
      setLocation('/contato');
    }
  };

  return (
    <>
      {/* Header Principal - Ultra-Moderno */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-[#e5e7eb]/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-8">
            {/* Logo - Premium Design */}
            <div 
              className="flex items-center gap-3 cursor-pointer flex-shrink-0 group hover:opacity-80 transition-opacity duration-300" 
              onClick={() => handleNavClick('/')}
            >
              <div className="bg-gradient-to-br from-[#1e3a8a] via-[#1e3a8a] to-[#152a5f] rounded-xl p-2.5 w-12 h-12 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-[#1e3a8a] font-montserrat leading-tight">Gestão FX</h1>
                <p className="text-xs text-[#6b7280] font-medium">Consultoria de RH</p>
              </div>
            </div>

            {/* Navegação Desktop - Fluida e Moderna */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 group ${
                    location === item.href || (item.href === '/#servicos' && location === '/')
                      ? 'text-[#1e3a8a] bg-[#f0f4ff]'
                      : 'text-[#4b5563] hover:text-[#1e3a8a]'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#1e3a8a] to-[#059669] transition-all duration-300 ${
                    location === item.href || (item.href === '/#servicos' && location === '/')
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              ))}
            </nav>

            {/* CTA + Menu Mobile */}
            <div className="flex items-center gap-3 ml-auto">
              <Button
                onClick={handleScheduleClick}
                className="hidden sm:inline-flex bg-gradient-to-r from-[#1e3a8a] to-[#152a5f] hover:from-[#152a5f] hover:to-[#0f1d47] text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Agendar Diagnóstico
              </Button>

              {/* Menu Mobile Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-lg text-[#1e3a8a] hover:bg-[#f3f4f6] transition-all duration-300 hover:scale-110"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Menu Mobile - Fluido e Moderno */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-[#e5e7eb] pt-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full text-left px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    location === item.href || (item.href === '/#servicos' && location === '/')
                      ? 'text-[#1e3a8a] bg-[#f0f4ff] border-l-4 border-[#1e3a8a]'
                      : 'text-[#4b5563] hover:text-[#1e3a8a] hover:bg-[#f9fafb]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={handleScheduleClick}
                className="w-full mt-4 bg-gradient-to-r from-[#1e3a8a] to-[#152a5f] hover:from-[#152a5f] hover:to-[#0f1d47] text-white font-semibold transition-all duration-300 shadow-lg"
              >
                Agendar Diagnóstico
              </Button>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
