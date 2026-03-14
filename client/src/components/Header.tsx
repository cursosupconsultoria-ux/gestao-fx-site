import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

/**
 * Header Component - Gestão FX 2.0
 * Design: Premium & Clean
 * - Logo minimalista com novo design
 * - Menu simplificado: Início, Novidades RH, Serviços, Agendar Diagnóstico
 * - Design moderno com sombras e relevos
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

  return (
    <>
      {/* Header Principal */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-8">
            {/* Logo - Melhor Posicionamento */}
            <div 
              className="flex items-center gap-2 cursor-pointer flex-shrink-0 group" 
              onClick={() => handleNavClick('/')}
            >
              <div className="bg-gradient-to-br from-[#1e3a8a] to-[#152a5f] rounded-lg p-2 w-14 h-14 flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
                <img 
                  src="/logo.png" 
                  alt="Gestão FX" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-[#1e3a8a] font-montserrat leading-tight">Gestão FX</h1>
                <p className="text-xs text-[#6b7280] font-medium">Consultoria de RH</p>
              </div>
            </div>

            {/* Navegação Desktop */}
            <nav className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    location === item.href || (item.href === '/#servicos' && location === '/')
                      ? 'text-[#1e3a8a] bg-[#f3f4f6] shadow-sm'
                      : 'text-[#4b5563] hover:text-[#1e3a8a] hover:bg-[#f9fafb]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA + Menu Mobile */}
            <div className="flex items-center gap-3 ml-auto">
              <Button
                onClick={() => handleNavClick('/contato')}
                className="hidden sm:inline-flex bg-[#1e3a8a] hover:bg-[#152a5f] text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Agendar Diagnóstico
              </Button>

              {/* Menu Mobile Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#1e3a8a] hover:bg-[#f3f4f6] transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Menu Mobile */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-[#e5e7eb] pt-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-[#4b5563] hover:text-[#1e3a8a] hover:bg-[#f3f4f6] rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => handleNavClick('/contato')}
                className="w-full mt-4 bg-[#1e3a8a] hover:bg-[#152a5f] text-white font-semibold transition-all duration-200"
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
