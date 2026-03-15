import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { lazy, Suspense } from "react";

// Eager load critical pages
import Home from "./pages/Home";

// Lazy load non-critical pages
const NR1Page = lazy(() => import("./pages/NR1Page"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const JornalRH = lazy(() => import("./pages/JornalRH"));
const Semana1102 = lazy(() => import("./pages/Semana1102"));
const Semana1902 = lazy(() => import("./pages/Semana1902"));
const Semana2602 = lazy(() => import("./pages/Semana2602"));
const Semana0403 = lazy(() => import("./pages/Semana0403"));
const Semana1203 = lazy(() => import("./pages/Semana1203"));
const Treinamentos = lazy(() => import("./pages/Treinamentos"));
const CasesPage = lazy(() => import("./pages/CasesPage"));
const InvestmentPage = lazy(() => import("./pages/InvestmentPage"));

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-[#e5e7eb] border-t-[#1e3a8a] rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-[#6b7280]">Carregando...</p>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/nr1" component={NR1Page} />
        <Route path="/servicos" component={ServicesPage} />
        <Route path="/sobre" component={AboutPage} />
        <Route path="/contato" component={ContactPage} />
        <Route path="/blog/:id" component={BlogPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/novidades-rh" component={JornalRH} />
        <Route path="/novidades-rh/semana-11-02" component={Semana1102} />
        <Route path="/novidades-rh/semana-19-02" component={Semana1902} />
        <Route path="/novidades-rh/semana-26-02" component={Semana2602} />
        <Route path="/novidades-rh/semana-04-03" component={Semana0403} />
        <Route path="/novidades-rh/semana-12-03" component={Semana1203} />
        <Route path="/treinamentos" component={Treinamentos} />
        <Route path="/cases" component={CasesPage} />
        <Route path="/investimento" component={InvestmentPage} />
        <Route path="/404" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
