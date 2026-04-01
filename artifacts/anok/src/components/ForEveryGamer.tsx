import { motion } from "framer-motion";
import { Gamepad2, Video, Users, Trophy, Building2 } from "lucide-react";

const cards = [
  {
    title: "PLAYERS",
    icon: <Gamepad2 className="w-8 h-8" aria-hidden="true" />,
    desc: "Compete in daily scrims, track your stats, and build your gaming legacy.",
    color: "group-hover:border-primary glow-blue"
  },
  {
    title: "CREATORS",
    icon: <Video className="w-8 h-8" aria-hidden="true" />,
    desc: "Monetize your audience, host community lobbies, and grow your brand.",
    color: "group-hover:border-secondary glow-purple"
  },
  {
    title: "TEAMS",
    icon: <Users className="w-8 h-8" aria-hidden="true" />,
    desc: "Scout talent, manage rosters, and dominate the regional leaderboards.",
    color: "group-hover:border-accent glow-green"
  },
  {
    title: "ORGANIZERS",
    icon: <Trophy className="w-8 h-8" aria-hidden="true" />,
    desc: "Host flawless tournaments with automated brackets and prize pools.",
    color: "group-hover:border-primary glow-blue"
  },
  {
    title: "BRANDS",
    icon: <Building2 className="w-8 h-8" aria-hidden="true" />,
    desc: "Connect authentically with Gen-Z gamers through bespoke sponsorships.",
    color: "group-hover:border-secondary glow-purple"
  }
];

export function ForEveryGamer() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="py-20 sm:py-32 px-4 sm:px-6 relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 id="features-heading" className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6">
            BUILT FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">EVERYONE.</span>
          </h2>
          <p className="text-base sm:text-xl text-foreground/60 max-w-2xl mx-auto">
            Whether you're grinding for tier 1 or building a community, ANOK provides the tools to level up your game.
          </p>
        </motion.div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 list-none p-0 m-0" role="list">
          {cards.map((card, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:scale-[1.02] ${card.color.split(' ')[0]} cursor-crosshair`}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-white/10 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-2 sm:mb-3">{card.title}</h3>
              <p className="text-sm sm:text-base text-foreground/60 font-medium leading-relaxed">
                {card.desc}
              </p>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]" aria-hidden="true" />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

