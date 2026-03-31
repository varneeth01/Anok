import { FaDiscord, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-display font-black text-3xl tracking-wider text-white">
          ANOK
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-foreground/50 hover:text-white hover:scale-110 transition-all">
            <FaDiscord className="w-6 h-6" />
          </a>
          <a href="#" className="text-foreground/50 hover:text-white hover:scale-110 transition-all">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-foreground/50 hover:text-white hover:scale-110 transition-all">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-foreground/50 hover:text-white hover:scale-110 transition-all">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-foreground/50 hover:text-white hover:scale-110 transition-all">
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>

        <div className="text-sm text-foreground/40 font-medium">
          © {new Date().getFullYear()} ANOK Esports. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
