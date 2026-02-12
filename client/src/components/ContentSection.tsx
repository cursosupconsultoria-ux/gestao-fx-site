import { ReactNode } from 'react';

/**
 * ContentSection Component - Gestão FX
 * Design: Modernismo Corporativo com Humanidade
 * - Layout assimétrico com imagem e conteúdo
 * - Tipografia hierárquica
 * - Espaçamento generoso
 * - Variações de layout
 */

interface ContentSectionProps {
  title: string;
  subtitle?: string;
  content: ReactNode;
  image?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  backgroundColor?: 'white' | 'light' | 'accent';
  children?: ReactNode;
}

export default function ContentSection({
  title,
  subtitle,
  content,
  image,
  imageAlt = 'Conteúdo',
  imagePosition = 'right',
  backgroundColor = 'white',
  children,
}: ContentSectionProps) {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-[#fafaf8]',
    accent: 'bg-[#f5f1ed]',
  };

  return (
    <section className={`py-16 md:py-24 ${bgClasses[backgroundColor]}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          {image && imagePosition === 'left' && (
            <div className="relative order-1 lg:order-1">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          )}

          {/* Content */}
          <div className={`${image && imagePosition === 'left' ? 'lg:col-span-1' : 'lg:col-span-1'}`}>
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              {title}
            </h2>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-lg text-[#d4a5a0] font-semibold mb-6">
                {subtitle}
              </p>
            )}

            {/* Main Content */}
            <div className="text-muted-foreground space-y-4 mb-8">
              {content}
            </div>

            {/* Additional Content */}
            {children}
          </div>

          {/* Image Right */}
          {image && imagePosition === 'right' && (
            <div className="relative order-2 lg:order-2">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
