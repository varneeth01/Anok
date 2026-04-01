import { motion } from "framer-motion";
import { MessageSquare, Users, Crosshair } from "lucide-react";

export function Community() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 border-t border-white/5 relative" id="community">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          
          {/* Mockup side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[380px] sm:h-[500px] bg-card border border-white/10 rounded-2xl p-3 sm:p-4 shadow-2xl flex flex-col"
          >
            {/* Top Bar */}
            <div className="flex gap-2 sm:gap-4 border-b border-white/5 pb-3 sm:pb-4 mb-3 sm:mb-4">
              <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-lg font-bold text-xs sm:text-sm text-white">Global</div>
              <div className="px-3 sm:px-4 py-1.5 sm:py-2 text-foreground/50 font-bold text-xs sm:text-sm hover:text-white transition-colors cursor-pointer">Clan</div>
              <div className="px-3 sm:px-4 py-1.5 sm:py-2 text-foreground/50 font-bold text-xs sm:text-sm hover:text-white transition-colors cursor-pointer">Squad</div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-hidden flex flex-col gap-3 sm:gap-4 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-card via-transparent to-card pointer-events-none z-10" />
              
              <div className="flex gap-2 sm:gap-3 items-start opacity-40">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-primary/20 flex items-center justify-center font-bold text-xs flex-shrink-0">V</div>
                <div className="bg-white/5 p-2.5 sm:p-3 rounded-2xl rounded-tl-none text-xs sm:text-sm">Looking for 2 players for daily scrims.</div>
              </div>
              
              <div className="flex gap-2 sm:gap-3 items-start">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-secondary/20 flex items-center justify-center font-bold text-xs text-secondary flex-shrink-0">R</div>
                <div>
                  <div className="text-xs text-secondary font-bold mb-1">Rahul_OP</div>
                  <div className="bg-white/5 p-2.5 sm:p-3 rounded-2xl rounded-tl-none text-xs sm:text-sm">Anyone watching the finals right now? That clutch was insane!</div>
                </div>
              </div>

              <div className="flex gap-2 sm:gap-3 items-start flex-row-reverse">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-accent/20 flex items-center justify-center font-bold text-xs text-accent flex-shrink-0">Y</div>
                <div>
                  <div className="text-xs text-accent font-bold mb-1 text-right">You</div>
                  <div className="bg-primary/20 border border-primary/30 p-2.5 sm:p-3 rounded-2xl rounded-tr-none text-xs sm:text-sm">
                    Absolutely crazy movement. Setting up a watch party lobby, join up!
                  </div>
                </div>
              </div>
            </div>

            {/* Input mock */}
            <div className="mt-3 sm:mt-4 bg-white/5 border border-white/10 rounded-xl h-10 sm:h-12 flex items-center px-3 sm:px-4 gap-2 sm:gap-3 text-foreground/40 text-xs sm:text-sm">
              <MessageSquare className="w-4 h-4 flex-shrink-0" /> Type a message...
            </div>
          </motion.div>

          {/* Copy Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6">FIND YOUR <br/><span className="text-secondary">SQUAD.</span></h2>
            <p className="text-base sm:text-xl text-foreground/60 mb-8 sm:mb-10 max-w-md">
              Esports isn't solo. Connect with players who match your skill, rank, and vibe. Built-in voice, clans, and instant party matching.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex gap-3 sm:gap-4 items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/30 flex-shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg">Clan System 2.0</h4>
                  <p className="text-xs sm:text-sm text-foreground/60">Level up your clan to unlock custom banners and tournaments.</p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4 items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center border border-accent/30 flex-shrink-0">
                  <Crosshair className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg">LFG Matchmaking</h4>
                  <p className="text-xs sm:text-sm text-foreground/60">Filter by KD, rank, and playstyle to find the perfect teammates.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

