import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import anokLogo from "../assets/transparent-imadge.svg";

const DISCORD_URL = "https://discord.gg/eg7A4hVPEu";

const navLinks = [
  { label: "Features", href: "#features", title: "Explore ANOK platform features" },
  { label: "Community", href: "#community", title: "Join the ANOK gaming community" },
  { label: "Tournaments", href: "#tournaments", title: "View active esports tournaments" },
  { label: "Launch", href: "#launch", title: "ANOK app launch countdown" },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 backdrop-blur-md border-b border-white/5 bg-background/50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#main-content" aria-label="ANOK – India's Gaming & Esports Platform – Home">
          <img src={anokLogo} alt="ANOK logo" className="h-10 w-auto object-contain" />
        </a>

        <ul className="hidden md:flex items-center gap-8 font-medium text-sm text-foreground/70 list-none m-0 p-0" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                title={link.title}
                aria-label={link.label}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex">
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Join ANOK Early Access on Discord"
            aria-label="Join ANOK Early Access on Discord"
            className="px-6 py-2 rounded-full font-display font-bold text-sm bg-primary text-primary-foreground glow-blue hover:scale-105 transition-transform inline-block"
          >
            Join Early Access
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          aria-label="Open navigation menu"
          aria-expanded="false"
        >
          <Menu className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
    </motion.nav>
  );
}

