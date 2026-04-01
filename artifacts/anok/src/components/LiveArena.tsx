import { motion } from "framer-motion";

export function LiveArena() {
  return (
    <section
      id="tournaments"
      aria-labelledby="tournaments-heading"
      className="py-20 sm:py-32 px-4 sm:px-6 relative"
    >
      <div className="absolute inset-0 bg-primary/5 cyber-grid opacity-50" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-16 gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4" aria-hidden="true">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-accent"></span>
              </span>
              <span className="text-accent font-bold tracking-widest uppercase text-sm">Live Arena</span>
            </div>
            <h2 id="tournaments-heading" className="text-3xl sm:text-5xl md:text-6xl font-black">
              ACTIVE TOURNAMENTS
            </h2>
          </div>
          <a
            href="https://discord.gg/eg7A4hVPEu"
            target="_blank"
            rel="noopener noreferrer"
            title="View all ANOK esports matches on Discord"
            aria-label="View all ANOK esports matches"
            className="self-start sm:self-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors font-bold whitespace-nowrap text-sm sm:text-base"
          >
            View All Matches
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
          <motion.article
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            aria-label="ANOK VALORANT S1 – Active Tournament"
            className="lg:col-span-2 bg-card border border-white/10 rounded-2xl overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" aria-hidden="true" />
            <div className="h-48 sm:h-64 bg-primary/20 flex items-center justify-center relative overflow-hidden" aria-hidden="true">
              <div className="absolute inset-0 opacity-30 cyber-grid animate-[spin_60s_linear_infinite]" />
              <div className="text-5xl sm:text-8xl font-black text-white/5 z-0">VALORANT</div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 z-20">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 sm:gap-4">
                <div>
                  <div className="bg-accent text-black text-xs font-bold px-2 py-1 rounded mb-2 sm:mb-3 inline-block">REGISTRATION OPEN</div>
                  <h3 className="text-xl sm:text-3xl font-black mb-1">ANOK VALORANT S1</h3>
                  <p className="text-foreground/70 font-medium mb-1 text-sm sm:text-base">Prize Pool: ₹10,000</p>
                  <p className="text-foreground/50 text-xs sm:text-sm font-medium">
                    Sponsored by <span className="text-secondary font-bold">Anoiak</span>
                  </p>
                </div>
                <div className="flex flex-row sm:flex-col sm:text-right items-center sm:items-end gap-3 sm:gap-0">
                  <div className="text-xs sm:text-sm text-foreground/50 sm:mb-2">Join on Discord</div>
                  <a
                    href="https://discord.gg/eg7A4hVPEu"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Join ANOK VALORANT S1 Tournament on Discord"
                    aria-label="Join ANOK VALORANT S1 Tournament"
                    className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full font-display font-bold text-sm bg-secondary text-white glow-purple hover:scale-105 transition-all"
                  >
                    Join Tournament
                  </a>
                </div>
              </div>
            </div>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            aria-label="Top Teams Leaderboard"
            className="bg-card/50 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-sm flex flex-col"
          >
            <h3 className="text-lg sm:text-xl font-bold font-display mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-white/5">
              TOP TEAMS
            </h3>
            <ol className="space-y-2 sm:space-y-4 flex-1 list-none p-0 m-0">
              {[
                { rank: 1, name: "Team Soul", pts: 245, color: "text-primary" },
                { rank: 2, name: "GodLike", pts: 210, color: "text-foreground" },
                { rank: 3, name: "Blind", pts: 185, color: "text-foreground" },
                { rank: 4, name: "Gladiators", pts: 150, color: "text-foreground" },
                { rank: 5, name: "Global Esports", pts: 132, color: "text-foreground/50" }
              ].map((team) => (
                <li key={team.rank} className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className={`font-black text-base sm:text-xl w-5 sm:w-6 ${team.color}`} aria-label={`Rank ${team.rank}`}>#{team.rank}</span>
                    <span className="font-bold text-sm sm:text-base">{team.name}</span>
                  </div>
                  <span className="font-mono font-bold text-secondary text-sm sm:text-base" aria-label={`${team.pts} points`}>{team.pts} pts</span>
                </li>
              ))}
            </ol>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

