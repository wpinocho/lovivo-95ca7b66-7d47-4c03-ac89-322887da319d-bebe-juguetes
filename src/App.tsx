import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SettingsProvider } from "@/contexts/SettingsContext";
import { PixelProvider } from "@/contexts/PixelContext";
import { FaviconManager } from "@/components/FaviconManager";
import { CartProvider } from "@/contexts/CartContext";
import { CartUIProvider } from "@/components/CartProvider";
import { PageViewTracker } from "@/components/PageViewTracker";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SettingsProvider>
      <PixelProvider>
        <FaviconManager />
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <CartUIProvider>
                <PageViewTracker />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/product/:slug" element={<Product />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
                </Routes>
              </CartUIProvider>
            </BrowserRouter>
          </TooltipProvider>
        </CartProvider>
      </PixelProvider>
    </SettingsProvider>
  </QueryClientProvider>
);

export default App;