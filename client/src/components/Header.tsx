import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

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
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        setLocation('/');
      }
    } else {
      setLocation(href);
    }
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-[#e5e7eb]/50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          <div 
            className="flex items-center gap-3 cursor-pointer flex-shrink-0 group hover:opacity-80 transition-opacity duration-300" 
            onClick={() => handleNavClick('/')}
          >
            <img 
              src="/LogoGestão0604transpFX.png" 
              alt="Gestão FX Logo" 
              className="h-14 w-auto object-contain"
            />
          </div>

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

          <div className="flex items-center gap-3 ml-auto">
            <Button
              onClick={handleScheduleClick}
              className="hidden sm:inline-flex bg-gradient-to-r from-[#1e3a8a] to-[#152a5f] hover:from-[#152a5f] hover:to-[#0f1d47] text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Agendar Diagnóstico
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-[#1e3a8a] hover:bg-[#f3f4f6] transition-all duration-300 hover:scale-110"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

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
  );
}
