import { motion } from "framer-motion";
import { Trophy, Gamepad2, Headphones, Crosshair, Users, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-x-hidden cyber-grid">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center z-10 w-full py-12 lg:py-0">
        {/* LEFT COPY */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-bold text-xs tracking-widest mb-6 uppercase">
            Welcome to the Arena
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] mb-4 text-glow-blue">
            THE FUTURE<br />
            OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">COMPETITIVE</span><br />
            GAMING.
          </h1>
          <p className="text-base sm:text-xl font-bold text-foreground/80 mb-4 font-display tracking-wide">
            ONE PLATFORM. EVERY GAMER.
          </p>
          <p className="text-base sm:text-lg text-foreground/60 max-w-lg mb-8 leading-relaxed">
            India's ultimate esports ecosystem. Compete in daily tournaments, grow your creator brand, build unstoppable teams, and dominate the leaderboards.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href="https://discord.gg/eg7A4hVPEu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-display font-bold text-base sm:text-lg bg-primary text-primary-foreground glow-blue hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              Join Early Access <ArrowUpRight className="w-5 h-5" />
            </a>
            <a
              href="#launch"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-display font-bold text-base sm:text-lg border border-white/20 hover:bg-white/5 transition-colors text-center"
            >
              App Launching Soon
            </a>
          </div>
        </motion.div>

        {/* RIGHT MOCKUP — hidden on mobile, shown from lg up */}
        <motion.div 
          className="relative h-[600px] items-center justify-center hidden lg:flex"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Main Device */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-[300px] h-[600px] bg-card rounded-[2.5rem] border-[8px] border-black shadow-2xl relative overflow-hidden flex flex-col glow-purple z-20"
          >
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-30" />
            
            {/* Mock UI */}
            <div className="flex-1 bg-background p-4 pt-10">
              <div className="h-40 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-2xl mb-4 relative overflow-hidden border border-white/10">
                <div className="absolute bottom-3 left-3">
                  <div className="text-xs font-bold bg-black/50 px-2 py-1 rounded backdrop-blur-sm inline-block mb-1">VALORANT SHOWDOWN</div>
                  <div className="text-[10px] text-accent font-bold">● LIVE 24,501 Watching</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 border border-secondary/50 flex items-center justify-center">
                    <Crosshair className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1 bg-white/5 rounded-xl p-2 border border-white/5">
                    <div className="w-20 h-2 bg-white/20 rounded mb-2" />
                    <div className="w-32 h-2 bg-white/10 rounded" />
                  </div>
                </div>
                <div className="w-full h-16 bg-white/5 rounded-xl border border-white/5 mt-4" />
                <div className="w-full h-16 bg-white/5 rounded-xl border border-white/5" />
              </div>
            </div>
            {/* Nav bar bottom */}
            <div className="h-16 bg-black flex justify-around items-center px-4">
              <Gamepad2 className="w-6 h-6 text-primary" />
              <Trophy className="w-6 h-6 text-white/30" />
              <Headphones className="w-6 h-6 text-white/30" />
              <Users className="w-6 h-6 text-white/30" />
            </div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute top-10 -left-12 bg-card/80 backdrop-blur-md border border-accent/30 p-4 rounded-xl shadow-xl z-30 glow-green"
          >
            <div className="text-xs font-bold text-accent mb-1 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> LIVE MATCH</div>
            <div className="text-sm font-bold">Team Soul vs GodLike</div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0], rotate: [2, -2, 2] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-20 -right-8 bg-card/80 backdrop-blur-md border border-primary/30 p-4 rounded-xl shadow-xl z-30 glow-blue flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 text-primary font-bold">
              #1
            </div>
            <div>
              <div className="text-xs font-bold text-primary mb-1">RANK UP</div>
              <div className="text-sm font-bold">Conqueror Reached</div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

