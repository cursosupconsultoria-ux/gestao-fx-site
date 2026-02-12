import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

/**
 * Header Component - Gestão FX
 * Design: Modernismo Corporativo com Humanidade
 * - Logo com fundo escuro para destaque
 * - Navegação clara e acessível
 * - Botão CTA fixo "Agendar Diagnóstico"
 * - Menu responsivo para mobile
 */

interface HeaderProps {
  onScheduleClick?: () => void;
}

export default function Header({ onScheduleClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const navItems = [
    { label: 'Início', href: '/' },
    { label: 'Para Pequenas Empresas', href: '/' },
    { label: 'NR-1 e Riscos Psicossociais', href: '/nr1' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Como Trabalhamos', href: '/' },
    { label: 'Conteúdos', href: '/' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
  ];

  const handleNavClick = (href: string) => {
    setLocation(href);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header Principal */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo com fundo escuro */}
            <div className="flex items-center gap-3">
              <div className="bg-[#1e3a5f] rounded-lg p-2 w-16 h-16 flex items-center justify-center flex-shrink-0">
                <img 
                  src="/logo.png" 
                  alt="Gestão FX" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-[#1e3a5f]">Gestão FX</h1>
                <p className="text-xs text-muted-foreground">Consultoria de RH</p>
              </div>
            </div>

            {/* Navegação Desktop */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    location === item.href
                      ? 'text-[#1e3a5f] bg-secondary/30'
                      : 'text-foreground hover:text-[#1e3a5f] hover:bg-secondary/30'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA + Menu Mobile */}
            <div className="flex items-center gap-2">
              <Button
                onClick={() => handleNavClick('/contato')}
                className="hidden sm:inline-flex bg-[#1e3a5f] hover:bg-[#152a47] text-white font-semibold px-6 transition-all duration-200 hover:shadow-md"
              >
                Agendar Diagnóstico
              </Button>

              {/* Menu Mobile Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-secondary/50 rounded-md transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Menu Mobile */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location === item.href
                      ? 'text-[#1e3a5f] bg-secondary/30'
                      : 'text-foreground hover:text-[#1e3a5f] hover:bg-secondary/30'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  onScheduleClick?.();
                  setMobileMenuOpen(false);
                }}
                className="w-full mt-4 bg-[#1e3a5f] hover:bg-[#152a47] text-white font-semibold"
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
