import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';

/**
 * Footer Component - Gestão FX
 * Design: Modernismo Corporativo com Humanidade
 * - Fundo escuro com texto claro
 * - Links de contato e redes sociais
 * - Informações legais
 */

interface FooterProps {
  email?: string;
  phone?: string;
  address?: string;
  socialLinks?: {
    linkedin?: string;
    facebook?: string;
  };
}

export default function Footer({
  email = 'contato@gestaofx.com.br',
  phone = '(11) 9999-9999',
  address = 'São Paulo, SP',
  socialLinks = {},
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e3a5f] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Gestão FX</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Consultoria de RH especializada em conformidade, gestão psicossocial e desenvolvimento de pessoas para pequenas empresas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Início</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">NR-1 e Conformidade</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Gestão Psicossocial</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Consultoria RH</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Treinamentos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${email}`}>{email}</a>
              </div>
              <div className="flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
                <a href={`tel:${phone}`}>{phone}</a>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4" />
                <span>{address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-white/60">
            © {currentYear} Gestão FX. Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            )}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Privacidade
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
