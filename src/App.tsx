
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Manifesto from "./pages/Manifesto";
import ContactForm from "./pages/ContactForm";
import PaymentCoverage from "./pages/PaymentCoverage";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import CardIssuing from "./pages/CardIssuing";
import CorporateBanking from "./pages/CorporateBanking";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/payment-coverage" element={<PaymentCoverage />} />
          <Route path="/card-issuing" element={<CardIssuing />} />
          <Route path="/corporate-banking" element={<CorporateBanking />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
