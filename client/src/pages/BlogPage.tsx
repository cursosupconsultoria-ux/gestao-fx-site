import React from 'react';
import { useLocation } from 'wouter';
import { Calendar, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Blog Page - Gestão FX
 * Design: Modernismo Corporativo com Humanidade
 * - Artigos informativos sobre NR-1, gestão psicossocial e RH
 * - Layout limpo e legível
 * - Tipografia hierárquica
 */

interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
}

const articles: BlogArticle[] = [
  {
    id: 'nr1-importance',
    title: 'A Importância da NR-1 para Pequenas e Médias Empresas',
    excerpt: 'Entenda por que a NR-1 é fundamental para a conformidade legal e o bem-estar dos colaboradores em empresas de pequeno e médio porte.',
    author: 'Gestão FX',
    date: '12 de fevereiro de 2026',
    readTime: 8,
    category: 'NR-1',
    content: `
A Norma Regulamentadora 1 (NR-1) é a base de toda a estrutura de segurança e saúde do trabalho no Brasil. Mas você sabe por que ela é tão importante para pequenas e médias empresas?

## O que é a NR-1?

A NR-1 estabelece as disposições gerais sobre as Normas Regulamentadoras de Segurança e Saúde do Trabalho. Ela define direitos e responsabilidades de empregadores e empregados, além de estabelecer os procedimentos básicos para garantir um ambiente de trabalho seguro e saudável.

## Por que a NR-1 é crucial para PMEs?

### 1. Conformidade Legal

Muitas pequenas e médias empresas não possuem um departamento de RH estruturado. A NR-1 estabelece as obrigações mínimas que toda empresa deve cumprir, independentemente do tamanho. Não cumprir com essas normas pode resultar em multas significativas e até processos judiciais.

### 2. Proteção dos Colaboradores

A NR-1 garante que todos os colaboradores tenham direitos básicos de segurança e saúde. Isso inclui:
- Acesso a informações sobre riscos no trabalho
- Direito a equipamento de proteção individual (EPI)
- Acesso a treinamentos de segurança
- Direito a denunciar situações de risco sem represálias

### 3. Redução de Riscos Psicossociais

A NR-1 também aborda aspectos relacionados à saúde mental e bem-estar dos colaboradores. Isso inclui:
- Prevenção de assédio moral e sexual
- Gestão do estresse ocupacional
- Promoção de um ambiente saudável
- Equilíbrio entre vida profissional e pessoal

### 4. Economia de Recursos

Implementar medidas de segurança e saúde desde o início é muito mais econômico do que lidar com acidentes, doenças ocupacionais e afastamentos. Além disso, colaboradores saudáveis e seguros são mais produtivos.

### 5. Reputação e Confiança

Empresas que cumprem com a NR-1 demonstram compromisso com o bem-estar de seus colaboradores. Isso melhora a reputação da empresa, facilita a atração de talentos e aumenta a confiança de clientes e parceiros.

## Desafios das PMEs na Implementação da NR-1

### Falta de Conhecimento

Muitos gestores de pequenas empresas não entendem completamente as exigências da NR-1. Isso pode levar a implementações inadequadas ou incompletas.

### Recursos Limitados

PMEs frequentemente têm orçamentos limitados para investir em segurança e saúde. No entanto, existem soluções acessíveis e escaláveis.

### Falta de Pessoal Especializado

Sem um departamento de RH dedicado, fica difícil manter-se atualizado sobre as mudanças nas regulamentações.

## Como a Gestão FX Pode Ajudar

A Gestão FX oferece consultoria especializada em NR-1 e gestão psicossocial para pequenas e médias empresas. Nossos serviços incluem:

- **Diagnóstico de Conformidade**: Avaliação completa da situação atual da sua empresa
- **Implementação de Políticas**: Desenvolvimento de políticas e procedimentos adequados
- **Treinamentos**: Capacitação de gestores e colaboradores
- **Acompanhamento Contínuo**: Suporte contínuo para garantir conformidade

## Conclusão

A NR-1 não é apenas uma obrigação legal. É um investimento no futuro da sua empresa e no bem-estar de seus colaboradores. Empresas que cumprem com essas normas têm:
- Menos acidentes e doenças ocupacionais
- Maior produtividade
- Melhor reputação
- Menor rotatividade de pessoal
- Melhor clima organizacional

Se sua empresa ainda não está totalmente em conformidade com a NR-1, este é o momento de agir. Entre em contato conosco para um diagnóstico gratuito e descubra como podemos ajudar sua empresa a estar segura, saudável e em conformidade com a lei.
    `,
  },
];

// Componente para exibir um artigo individual
function ArticleView({ article, onBack }: { article: BlogArticle; onBack: () => void }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-[#1e3a5f] text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <span className="text-[#1e3a5f] font-bold text-lg">FX</span>
            </div>
            <span className="font-semibold">Gestão FX</span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10"
              onClick={onBack}
            >
              ← Voltar ao Blog
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10"
              onClick={() => window.location.href = '/'}
            >
              ← Voltar ao Início
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Article Header */}
        <section className="bg-gradient-to-b from-[#f5f3f0] to-white py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-[#4a9b7f] text-white text-sm font-semibold rounded-full">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} min de leitura</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {article.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.trim().startsWith('##')) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-bold text-[#1e3a5f] mt-8 mb-4"
                    >
                      {paragraph.trim().replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.trim().startsWith('###')) {
                  return (
                    <h3
                      key={index}
                      className="text-xl font-semibold text-[#1e3a5f] mt-6 mb-3"
                    >
                      {paragraph.trim().replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.trim().startsWith('-')) {
                  const items = paragraph.split('\n').filter((line) => line.trim().startsWith('-'));
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 my-4">
                      {items.map((item, i) => (
                        <li key={i} className="text-gray-700">
                          {item.trim().replace('- ', '')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="mb-4 text-gray-700">
                      {paragraph.trim()}
                    </p>
                  );
                }
                return null;
              })}
            </div>

            {/* CTA Section */}
            <div className="mt-12 p-8 bg-gradient-to-r from-[#1e3a5f] to-[#2a4a7f] rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">
                Pronto para implementar a NR-1 na sua empresa?
              </h3>
              <p className="mb-6 text-white/90">
                Entre em contato conosco para um diagnóstico gratuito e descubra como podemos ajudar sua empresa a estar segura, saudável e em conformidade com a lei.
              </p>
              <Button
                className="bg-white text-[#1e3a5f] hover:bg-gray-100 font-semibold"
                onClick={onBack}
              >
                Agendar Diagnóstico Gratuito
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1e3a5f] text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-white/70">
          <p>© 2026 Gestão FX. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

// Componente para listar artigos
function BlogListView({ onArticleClick }: { onArticleClick: (id: string) => void }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-[#1e3a5f] text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <span className="text-[#1e3a5f] font-bold text-lg">FX</span>
            </div>
            <span className="font-semibold">Gestão FX</span>
          </div>
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10"
            onClick={() => window.location.href = '/'}
          >
            ← Voltar ao Início
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Blog Header */}
        <section className="bg-gradient-to-b from-[#1e3a5f] to-[#2a4a7f] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog Gestão FX</h1>
            <p className="text-xl text-white/90">
              Artigos informativos sobre NR-1, gestão psicossocial e RH para pequenas e médias empresas
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8">
              {articles.map((article) => (
                <a
                  key={article.id}
                  href={`/blog/${article.id}`}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 block"
                >
                  <div className="p-8">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-[#4a9b7f] text-white text-sm font-semibold rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#1e3a5f] mb-3 hover:text-[#2a4a7f] transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime} min</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#f5f3f0] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
              Tem dúvidas sobre NR-1 ou gestão psicossocial?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco para um diagnóstico gratuito e descubra como podemos ajudar sua empresa.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1e3a5f] text-white py-8">
        <div className="container mx-auto px-4 text-center text-white/70">
          <p>© 2026 Gestão FX. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

// Componente principal
export default function BlogPage(props: any) {
  const [, navigate] = useLocation();
  const [selectedArticleId, setSelectedArticleId] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (props.params?.id) {
      setSelectedArticleId(props.params.id);
    } else {
      const params = new URLSearchParams(window.location.search);
      const id = params.get('id');
      setSelectedArticleId(id);
    }
  }, [props.params?.id]);

  const selectedArticle = selectedArticleId
    ? articles.find((a) => a.id === selectedArticleId)
    : null;

  if (selectedArticle) {
    return (
      <ArticleView
        article={selectedArticle}
        onBack={() => navigate('/blog')}
      />
    );
  }

  return (
    <BlogListView
      onArticleClick={(id) => navigate(`/blog/${id}`)}
    />
  );
}
