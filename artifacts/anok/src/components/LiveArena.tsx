import { motion } from "framer-motion";

export function LiveArena() {
  return (
    <section className="py-32 px-6 relative" id="tournaments">
      <div className="absolute inset-0 bg-primary/5 cyber-grid opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-accent"></span>
              </span>
              <span className="text-accent font-bold tracking-widest uppercase text-sm">Live Arena</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black">ACTIVE TOURNAMENTS</h2>
          </div>
          <button className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors font-bold whitespace-nowrap">
            View All Matches
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Live Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-card border border-white/10 rounded-2xl overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
            <div className="h-64 bg-primary/20 flex items-center justify-center relative overflow-hidden">
              {/* Fake animated background */}
              <div className="absolute inset-0 opacity-30 cyber-grid animate-[spin_60s_linear_infinite]" />
              <div className="text-8xl font-black text-white/5 z-0">VALORANT</div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <div className="flex justify-between items-end flex-wrap gap-4">
                <div>
                  <div className="bg-accent text-black text-xs font-bold px-2 py-1 rounded mb-3 inline-block">REGISTRATION OPEN</div>
                  <h3 className="text-3xl font-black mb-1">ANOK VALORANT S1</h3>
                  <p className="text-foreground/70 font-medium mb-1">Prize Pool: ₹10,000</p>
                  <p className="text-foreground/50 text-sm font-medium">Sponsored by <span className="text-secondary font-bold">Anoiak</span></p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-foreground/50 mb-2">Join on Discord</div>
                  <a
                    href="https://discord.gg/eg7A4hVPEu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 rounded-full font-display font-bold text-sm bg-secondary text-white glow-purple hover:scale-105 transition-all"
                  >
                    Join Tournament
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Leaderboard Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex flex-col"
          >
            <h4 className="text-xl font-bold font-display mb-6 pb-4 border-b border-white/5">TOP TEAMS</h4>
            
            <div className="space-y-4 flex-1">
              {[
                { rank: 1, name: "Team Soul", pts: 245, color: "text-primary" },
                { rank: 2, name: "GodLike", pts: 210, color: "text-foreground" },
                { rank: 3, name: "Blind", pts: 185, color: "text-foreground" },
                { rank: 4, name: "Gladiators", pts: 150, color: "text-foreground" },
                { rank: 5, name: "Global Esports", pts: 132, color: "text-foreground/50" }
              ].map((team) => (
                <div key={team.rank} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-default">
                  <div className="flex items-center gap-4">
                    <span className={`font-black text-xl w-6 ${team.color}`}>#{team.rank}</span>
                    <span className="font-bold">{team.name}</span>
                  </div>
                  <span className="font-mono font-bold text-secondary">{team.pts} pts</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
