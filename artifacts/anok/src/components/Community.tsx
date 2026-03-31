import { motion } from "framer-motion";
import { MessageSquare, Users, Crosshair } from "lucide-react";

export function Community() {
  return (
    <section className="py-32 px-6 border-t border-white/5 relative" id="community">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Mockup side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] bg-card border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col"
          >
            {/* Top Bar */}
            <div className="flex gap-4 border-b border-white/5 pb-4 mb-4">
              <div className="px-4 py-2 bg-white/10 rounded-lg font-bold text-sm text-white">Global</div>
              <div className="px-4 py-2 text-foreground/50 font-bold text-sm hover:text-white transition-colors cursor-pointer">Clan</div>
              <div className="px-4 py-2 text-foreground/50 font-bold text-sm hover:text-white transition-colors cursor-pointer">Squad</div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-hidden flex flex-col gap-4 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-card via-transparent to-card pointer-events-none z-10" />
              
              <div className="flex gap-3 items-start opacity-40">
                <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center font-bold text-xs">V</div>
                <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm">Looking for 2 players for daily scrims.</div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded bg-secondary/20 flex items-center justify-center font-bold text-xs text-secondary">R</div>
                <div>
                  <div className="text-xs text-secondary font-bold mb-1">Rahul_OP</div>
                  <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm">Anyone watching the finals right now? That clutch was insane! 🔥</div>
                </div>
              </div>

              <div className="flex gap-3 items-start flex-row-reverse">
                <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center font-bold text-xs text-accent">Y</div>
                <div>
                  <div className="text-xs text-accent font-bold mb-1 text-right">You</div>
                  <div className="bg-primary/20 border border-primary/30 p-3 rounded-2xl rounded-tr-none max-w-[100%] text-sm">
                    Absolutely crazy movement. Setting up a watch party lobby, join up!
                  </div>
                </div>
              </div>
            </div>

            {/* Input mock */}
            <div className="mt-4 bg-white/5 border border-white/10 rounded-xl h-12 flex items-center px-4 gap-3 text-foreground/40 text-sm">
              <MessageSquare className="w-4 h-4" /> Type a message...
            </div>
          </motion.div>

          {/* Copy Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">FIND YOUR <br/><span className="text-secondary">SQUAD.</span></h2>
            <p className="text-xl text-foreground/60 mb-10 max-w-md">
              Esports isn't solo. Connect with players who match your skill, rank, and vibe. Built-in voice, clans, and instant party matching.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/30">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Clan System 2.0</h4>
                  <p className="text-sm text-foreground/60">Level up your clan to unlock custom banners and tournaments.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center border border-accent/30">
                  <Crosshair className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">LFG Matchmaking</h4>
                  <p className="text-sm text-foreground/60">Filter by KD, rank, and playstyle to find the perfect teammates.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
