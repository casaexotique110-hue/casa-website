import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import WhoWeAre from "./pages/WhoWeAre.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import PortfolioPage from "./pages/PortfolioPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import CareerPage from "./pages/CareerPage.tsx";
import BespokeFurniture from "./pages/services/BespokeFurniture.tsx";
import {
  MediaUnits,
  WalkInWardrobes,
  FittedCupboards,
  HomeOffice,
  KitchenFurniture,
  BathroomFurniture,
  OutdoorFurniture,
  UnderstairsLoft,
} from "./pages/services/furniture-pages.tsx";
import {
  TurnkeyExecution,
  CustomFitOuts,
  InHouseCustomization,
  SeamlessProcurement,
} from "./pages/services/other-services.tsx";
import NewsPage from "./pages/media/NewsPage.tsx";
import AwardsPage from "./pages/media/AwardsPage.tsx";
import ThoughtSpotPage from "./pages/media/ThoughtSpotPage.tsx";
import { GreenLeap, ShaktiNirmaan } from "./pages/initiatives/initiative-pages.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />

          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/bespoke-furniture" element={<BespokeFurniture />} />
          <Route path="/services/bespoke-furniture/media-units" element={<MediaUnits />} />
          <Route path="/services/bespoke-furniture/walk-in-wardrobes" element={<WalkInWardrobes />} />
          <Route path="/services/bespoke-furniture/fitted-cupboards" element={<FittedCupboards />} />
          <Route path="/services/bespoke-furniture/home-office" element={<HomeOffice />} />
          <Route path="/services/bespoke-furniture/kitchen" element={<KitchenFurniture />} />
          <Route path="/services/bespoke-furniture/bathroom" element={<BathroomFurniture />} />
          <Route path="/services/bespoke-furniture/outdoor" element={<OutdoorFurniture />} />
          <Route path="/services/bespoke-furniture/understairs-loft" element={<UnderstairsLoft />} />
          <Route path="/services/turnkey-execution" element={<TurnkeyExecution />} />
          <Route path="/services/custom-fit-outs" element={<CustomFitOuts />} />
          <Route path="/services/in-house-customization" element={<InHouseCustomization />} />
          <Route path="/services/seamless-procurement" element={<SeamlessProcurement />} />

          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/career" element={<CareerPage />} />

          <Route path="/media/news" element={<NewsPage />} />
          <Route path="/media/awards" element={<AwardsPage />} />
          <Route path="/media/thought-spot" element={<ThoughtSpotPage />} />

          <Route path="/initiatives/green-leap" element={<GreenLeap />} />
          <Route path="/initiatives/shakti-nirmaan" element={<ShaktiNirmaan />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
