import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Users, Brain, Heart, Zap } from 'lucide-react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  onScheduleClick?: () => void;
}

export default function Header({ onScheduleClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const services = [
    {
      title: 'Consultoria de RH',
      description: 'Soluções para pequenas empresas sem RH estruturado',
      href: '/servicos#consultoria',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
    },
    {
      title: 'Mentoria Executiva',
      description: 'Desenvolvimento para gestores e líderes',
      href: '/servicos#mentoria',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100',
    },
    {
      title: 'Psicoterapia Clínica',
      description: 'Foco em saúde mental e equilíbrio emocional',
      href: '/servicos#psicoterapia',
      icon: Heart,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
      hoverColor: 'hover:bg-rose-100',
    },
    {
      title: 'Treinamento & Desenvolvimento',
      description: 'Workshops e palestras customizadas',
      href: '/treinamentos',
      icon: Zap,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      hoverColor: 'hover:bg-amber-100',
    },
  ];

  const handleNavClick = (href: string) => {
    if (href.includes('#')) {
      const [path, id] = href.split('#');
      if (location === path || (path === '' && location === '/')) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        setLocation(href);
      }
    } else {
      setLocation(href);
    }
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  const handleScheduleClick = () => {
    if (onScheduleClick) {
      onScheduleClick();
    } else {
      setLocation('/contato');
    }
    setMobileMenuOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-[#e5e7eb]/50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer flex-shrink-0 group hover:opacity-80 transition-opacity duration-300" 
            onClick={() => handleNavClick('/')}
          >
            <img 
              src="/logo-gestao-fx.png" 
              alt="Gestão FX Logo" 
              className="h-14 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => handleNavClick('/')}
              className={cn(
                "px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300",
                location === '/' ? "text-[#1e3a8a] bg-[#f0f4ff]" : "text-[#4b5563] hover:text-[#1e3a8a] hover:bg-[#f9fafb]"
              )}
            >
              Início
            </button>

            <button
              onClick={() => handleNavClick('/novidades-rh')}
              className={cn(
                "px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300",
                location === '/novidades-rh' ? "text-[#1e3a8a] bg-[#f0f4ff]" : "text-[#4b5563] hover:text-[#1e3a8a] hover:bg-[#f9fafb]"
              )}
            >
              Novidades RH
            </button>

            {/* Services Dropdown Trigger */}
            <div 
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300",
                  dropdownOpen || location.startsWith('/servicos') || location === '/treinamentos'
                    ? "text-[#1e3a8a] bg-[#f0f4ff]" 
                    : "text-[#4b5563] hover:text-[#1e3a8a] hover:bg-[#f9fafb]"
                )}
              >
                Serviços
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", dropdownOpen && "rotate-180")} />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[450px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-4 grid grid-cols-1 gap-2">
                    {services.map((service) => (
                      <button
                        key={service.title}
                        onClick={() => handleNavClick(service.href)}
                        className={cn(
                          "flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-200",
                          service.hoverColor
                        )}
                      >
                        <div className={cn("p-2.5 rounded-lg shrink-0", service.bgColor, service.color)}>
                          <service.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#1e3a8a] text-sm mb-1">{service.title}</h4>
                          <p className="text-gray-500 text-xs leading-relaxed">{service.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-4 border-t border-gray-100">
                    <button 
                      onClick={() => handleNavClick('/servicos')}
                      className="text-xs font-bold text-[#1e3a8a] hover:underline flex items-center justify-center w-full"
                    >
                      Ver todos os detalhes dos serviços
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 ml-auto">
            <Button
              onClick={handleScheduleClick}
              className="hidden sm:inline-flex bg-gradient-to-r from-[#1e3a8a] to-[#152a5f] hover:from-[#152a5f] hover:to-[#0f1d47] text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Agendar Diagnóstico
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-[#1e3a8a] hover:bg-[#f3f4f6] transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-[#e5e7eb] pt-4 space-y-2 animate-in slide-in-from-top-4 duration-300">
            <button
              onClick={() => handleNavClick('/')}
              className={cn(
                "w-full text-left px-4 py-3 text-sm font-semibold rounded-lg",
                location === '/' ? "text-[#1e3a8a] bg-[#f0f4ff]" : "text-[#4b5563]"
              )}
            >
              Início
            </button>
            <button
              onClick={() => handleNavClick('/novidades-rh')}
              className={cn(
                "w-full text-left px-4 py-3 text-sm font-semibold rounded-lg",
                location === '/novidades-rh' ? "text-[#1e3a8a] bg-[#f0f4ff]" : "text-[#4b5563]"
              )}
            >
              Novidades RH
            </button>
            
            <div className="px-4 py-2">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Nossos Serviços</p>
              <div className="grid grid-cols-1 gap-1">
                {services.map((service) => (
                  <button
                    key={service.title}
                    onClick={() => handleNavClick(service.href)}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-left"
                  >
                    <service.icon className={cn("w-5 h-5", service.color)} />
                    <span className="text-sm font-medium text-gray-700">{service.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={handleScheduleClick}
              className="w-full mt-4 bg-gradient-to-r from-[#1e3a8a] to-[#152a5f] text-white font-semibold shadow-lg"
            >
              Agendar Diagnóstico
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
