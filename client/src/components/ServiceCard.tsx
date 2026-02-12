import { ReactNode } from 'react';

/**
 * ServiceCard Component - Gestão FX
 * Design: Modernismo Corporativo com Humanidade
 * - Cards com sombras suaves
 * - Hover effects elegantes (elevação + cor)
 * - Ícones customizados
 * - Transições fluidas
 */

interface ServiceCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  variant?: 'default' | 'accent' | 'secondary';
  onClick?: () => void;
}

export default function ServiceCard({
  icon,
  title,
  description,
  variant = 'default',
  onClick,
}: ServiceCardProps) {
  const variantClasses = {
    default: 'bg-white border-border hover:bg-white',
    accent: 'bg-accent/10 border-accent/20 hover:bg-accent/15',
    secondary: 'bg-secondary/10 border-secondary/20 hover:bg-secondary/15',
  };

  return (
    <div
      onClick={onClick}
      className={`
        group relative p-6 rounded-xl border transition-all duration-300 cursor-pointer
        ${variantClasses[variant]}
        hover:shadow-lg hover:scale-105 hover:-translate-y-1
      `}
    >
      {/* Ícone */}
      {icon && (
        <div className="mb-4 inline-flex p-3 rounded-lg bg-[#1e3a5f]/10 group-hover:bg-[#1e3a5f]/20 transition-colors duration-300">
          <div className="text-[#1e3a5f] text-2xl">{icon}</div>
        </div>
      )}

      {/* Título */}
      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#1e3a5f] transition-colors duration-300">
        {title}
      </h3>

      {/* Descrição */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Accent line on hover */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#1e3a5f] to-[#d4a5a0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-0 group-hover:w-full" />
    </div>
  );
}
