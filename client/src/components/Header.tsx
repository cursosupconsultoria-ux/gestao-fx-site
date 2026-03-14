import { useState } from 'react';
import { Menu, X, Users, Heart, TrendingUp, Lightbulb } from 'lucide-react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

/**
 * Header Component - Gestão FX 2.0
 * Design: Premium & Clean
 * - Logo minimalista com novo design
 * - Menu fluido com dropdown dos 4 pilares
 * - Navegação clara e intuitiva
 * - Botão CTA "Agendar Diagnóstico"
 */

interface HeaderProps {
  onScheduleClick?: () => void;
}

export default function Header({ onScheduleClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const mainNavItems = [
    { label: 'Início', href: '/' },
    { label: 'Para Pequenas Empresas', href: '/' },
    { label: 'NR-1 e Riscos Psicossociais', href: '/nr1' },
    { label: 'Como Trabalhamos', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Novidades RH', href: '/novidades-rh' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
  ];

  const services = [
    {
      label: 'Consultoria de RH',
      description: 'Soluções para pequenas empresas',
      icon: <Users className="w-5 h-5" />,
      href: '/',
    },
    {
      label: 'Psicoterapia Clínica',
      description: 'Saúde mental e equilíbrio emocional',
      icon: <Heart className="w-5 h-5" />,
      href: '/contato',
    },
    {
      label: 'Mentoria Executiva',
      description: 'Desenvolvimento de gestores',
      icon: <TrendingUp className="w-5 h-5" />,
      href: '/contato',
    },
    {
      label: 'Treinamento & Desenvolvimento',
      description: 'Workshops e palestras',
      icon: <Lightbulb className="w-5 h-5" />,
      href: '/treinamentos',
    },
  ];

  const handleNavClick = (href: string) => {
    setLocation(href);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <>
      {/* Header Principal */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('/')}>
              <div className="bg-[#1e3a8a] rounded-lg p-2 w-12 h-12 flex items-center justify-center flex-shrink-0">
                <img 
                  src="/logo.png" 
                  alt="Gestão FX" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-[#1e3a8a] font-montserrat">Gestão FX</h1>
                <p className="text-xs text-muted-foreground">Consultoria de RH</p>
              </div>
            </div>

            {/* Navegação Desktop */}
            <nav className="hidden lg:flex items-center gap-6">
              {mainNavItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location === item.href
                      ? 'text-[#1e3a8a] font-semibold'
                      : 'text-foreground hover:text-[#1e3a8a]'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Dropdown Serviços */}
              <div className="relative group">
                <button className="text-sm font-medium text-foreground hover:text-[#1e3a8a] transition-colors duration-200">
                  Serviços
                </button>
                <div className="absolute left-0 mt-0 w-80 bg-white rounded-lg shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-4">
                  {services.map((service) => (
                    <button
                      key={service.label}
                      onClick={() => handleNavClick(service.href)}
                      className="w-full px-4 py-3 text-left hover:bg-muted transition-colors duration-200 flex items-start gap-3 group/item"
                    >
                      <div className="text-[#1e3a8a] group-hover/item:text-[#059669] transition-colors">
                        {service.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{service.label}</p>
                        <p className="text-xs text-muted-foreground">{service.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </nav>

            {/* CTA + Menu Mobile */}
            <div className="flex items-center gap-3">
              <Button
                onClick={() => handleNavClick('/contato')}
                className="hidden sm:inline-flex bg-[#1e3a8a] hover:bg-[#152a5f] text-white font-semibold px-6 transition-all duration-200 hover:shadow-md"
              >
                Agendar Diagnóstico
              </Button>

              {/* Menu Mobile Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Menu Mobile */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 space-y-2">
              {mainNavItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:text-[#1e3a8a] hover:bg-muted rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}

              {/* Serviços Mobile */}
              <div className="px-4 py-2">
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="w-full text-left text-sm font-medium text-foreground hover:text-[#1e3a8a] transition-colors"
                >
                  Serviços
                </button>
                {servicesDropdownOpen && (
                  <div className="mt-2 space-y-2">
                    {services.map((service) => (
                      <button
                        key={service.label}
                        onClick={() => handleNavClick(service.href)}
                        className="w-full text-left px-3 py-2 text-xs bg-muted rounded-md hover:bg-muted/80 transition-colors flex items-start gap-2"
                      >
                        <div className="text-[#1e3a8a] flex-shrink-0">{service.icon}</div>
                        <div>
                          <p className="font-semibold text-foreground">{service.label}</p>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

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
