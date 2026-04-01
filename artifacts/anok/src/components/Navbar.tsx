import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import anokLogo from "artifacts/anok/src/assets/transparent-imadge.svg";

const DISCORD_URL = "https://discord.gg/eg7A4hVPEu";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md border-b border-white/5 bg-background/50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={anokLogo} alt="ANOK" className="h-10 w-auto object-contain" />
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-foreground/70">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#community" className="hover:text-primary transition-colors">Community</a>
          <a href="#tournaments" className="hover:text-primary transition-colors">Tournaments</a>
          <a href="#launch" className="hover:text-primary transition-colors">Launch</a>
        </div>

        <div className="hidden md:flex">
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full font-display font-bold text-sm bg-primary text-primary-foreground glow-blue hover:scale-105 transition-transform inline-block"
          >
            Join Early Access
          </a>
        </div>

        <button className="md:hidden text-foreground">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.nav>
  );
}
