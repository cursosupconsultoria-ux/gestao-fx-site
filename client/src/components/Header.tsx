import { useState } from 'react';
import { Menu, X } from 'lucide-react';
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
  logo?: string;
  onScheduleClick?: () => void;
}

export default function Header({ logo, onScheduleClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#' },
    { label: 'Para Pequenas Empresas', href: '#' },
    { label: 'NR-1 e Riscos Psicossociais', href: '#' },
    { label: 'Serviços', href: '#' },
    { label: 'Como Trabalhamos', href: '#' },
    { label: 'Conteúdos', href: '#' },
    { label: 'Sobre', href: '#' },
    { label: 'Contato', href: '#' },
  ];

  return (
    <>
      {/* Header Principal */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo com fundo escuro */}
            <div className="flex items-center gap-3">
              <div className="bg-[#1e3a5f] rounded-lg p-2 w-12 h-12 flex items-center justify-center">
                {logo ? (
                  <img src={logo} alt="Gestão FX" className="w-full h-full object-contain" />
                ) : (
                  <span className="text-white font-bold text-sm">FX</span>
                )}
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-[#1e3a5f]">Gestão FX</h1>
                <p className="text-xs text-muted-foreground">Consultoria de RH</p>
              </div>
            </div>

            {/* Navegação Desktop */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-[#1e3a5f] hover:bg-secondary/30 rounded-md transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA + Menu Mobile */}
            <div className="flex items-center gap-2">
              <Button
                onClick={onScheduleClick}
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
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium text-foreground hover:text-[#1e3a5f] hover:bg-secondary/30 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
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
