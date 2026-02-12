/**
 * WaveDivider Component - Gestão FX
 * Design: Modernismo Corporativo com Humanidade
 * - Dividers ondulados suaves entre seções
 * - Transições visuais elegantes
 * - Cores coordenadas com paleta
 */

interface WaveDividerProps {
  variant?: 'primary' | 'secondary' | 'accent';
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({
  variant = 'primary',
  flip = false,
  className = '',
}: WaveDividerProps) {
  const colors = {
    primary: '#1e3a5f',
    secondary: '#e8d4c4',
    accent: '#d4a5a0',
  };

  const transform = flip ? 'scaleY(-1)' : '';

  return (
    <svg
      className={`w-full h-auto ${className}`}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform }}
    >
      <path
        d="M0,40 Q360,0 720,40 T1440,40 L1440,120 L0,120 Z"
        fill={colors[variant]}
        opacity="0.1"
      />
      <path
        d="M0,50 Q360,20 720,50 T1440,50 L1440,120 L0,120 Z"
        fill={colors[variant]}
        opacity="0.05"
      />
    </svg>
  );
}
