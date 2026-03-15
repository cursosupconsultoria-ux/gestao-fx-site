import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NR1Page from "./pages/NR1Page";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import JornalRH from "./pages/JornalRH";
import Semana1102 from "./pages/Semana1102";
import Semana1902 from "./pages/Semana1902";
import Semana2602 from "./pages/Semana2602";
import Semana0403 from "./pages/Semana0403";
import Semana1203 from "./pages/Semana1203";
import Treinamentos from "./pages/Treinamentos";
import CasesPage from "./pages/CasesPage";
import InvestmentPage from "./pages/InvestmentPage";

function Router() {
  return (
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
