import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Plans from "@/pages/plans";
import Contact from "@/pages/contact";
import Inquiry from "@/pages/inquiry";
import Blog from "@/pages/blog";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// ✅ Import framer-motion
import { AnimatePresence, motion } from "framer-motion";

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Switch location={location} key={location}>
        <Route path="/">
          <PageWrapper>
            <Home />
          </PageWrapper>
        </Route>

        <Route path="/about">
          <PageWrapper>
            <About />
          </PageWrapper>
        </Route>

        <Route path="/services">
          <PageWrapper>
            <Services />
          </PageWrapper>
        </Route>

        <Route path="/plans">
          <PageWrapper>
            <Plans />
          </PageWrapper>
        </Route>

        <Route path="/contact">
          <PageWrapper>
            <Contact />
          </PageWrapper>
        </Route>

        <Route path="/inquiry">
          <PageWrapper>
            <Inquiry />
          </PageWrapper>
        </Route>

        <Route path="/blog">
          <PageWrapper>
            <Blog />
          </PageWrapper>
        </Route>

        <Route>
          <PageWrapper>
            <NotFound />
          </PageWrapper>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

// ✅ Animation wrapper for all pages
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Router />
          </main>
          <Footer />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
