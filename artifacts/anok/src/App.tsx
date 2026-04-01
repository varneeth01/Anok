import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ForEveryGamer } from "@/components/ForEveryGamer";
import { WhyAnok } from "@/components/WhyAnok";
import { LiveArena } from "@/components/LiveArena";
import { Community } from "@/components/Community";
import { LaunchHype } from "@/components/LaunchHype";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">

      <header role="banner">
        <Navbar />
      </header>
      <main id="main-content" role="main">
        <Hero />
        <ForEveryGamer />
        <WhyAnok />
        <LiveArena />
        <Community />
        <LaunchHype />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
