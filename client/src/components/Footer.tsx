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
  phone = '(19) 98420-7525',
  address = 'São Paulo / Brasil',
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
              <li><a href="/" className="text-white/70 hover:text-white transition-colors">Consultoria de RH</a></li>
              <li><a href="/contato" className="text-white/70 hover:text-white transition-colors">Psicoterapia Clínica</a></li>
              <li><a href="/contato" className="text-white/70 hover:text-white transition-colors">Mentoria Executiva</a></li>
              <li><a href="/treinamentos" className="text-white/70 hover:text-white transition-colors">Treinamento & Desenvolvimento</a></li>
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

        {/* Authority Section */}
        <div className="bg-white/5 rounded-lg p-8 mb-8 border border-white/10">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-4">Sobre Fabrício Xavier</h3>
            <p className="text-sm text-white/80 leading-relaxed mb-6">
              <strong>Psicólogo (CRP 06/193074)</strong> | Gestor de RH | Especialista em Gestão de Pessoas
            </p>
            <p className="text-sm text-white/80 leading-relaxed mb-6">
              Com mais de 22 anos de experiência, Fabrício Xavier une a ciência do comportamento humano com a estratégia de negócios. Sua abordagem única combina conhecimento psicológico profundo com soluções práticas de RH, transformando a forma como as empresas gerem pessoas e promovem bem-estar.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
              <a
                href="https://wa.me/5519984207525?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%u00e3o%20com%20Fabr%C3%ADcio%20Xavier"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <span>💬 WhatsApp</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <span>📅 Calendly</span>
              </a>
            </div>
          </div>
        </div>

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
