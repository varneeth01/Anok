import { motion } from "framer-motion";
import { Gamepad2, Video, Users, Trophy, Building2 } from "lucide-react";

const cards = [
  {
    title: "PLAYERS",
    icon: <Gamepad2 className="w-8 h-8" />,
    desc: "Compete in daily scrims, track your stats, and build your gaming legacy.",
    color: "group-hover:border-primary glow-blue"
  },
  {
    title: "CREATORS",
    icon: <Video className="w-8 h-8" />,
    desc: "Monetize your audience, host community lobbies, and grow your brand.",
    color: "group-hover:border-secondary glow-purple"
  },
  {
    title: "TEAMS",
    icon: <Users className="w-8 h-8" />,
    desc: "Scout talent, manage rosters, and dominate the regional leaderboards.",
    color: "group-hover:border-accent glow-green"
  },
  {
    title: "ORGANIZERS",
    icon: <Trophy className="w-8 h-8" />,
    desc: "Host flawless tournaments with automated brackets and prize pools.",
    color: "group-hover:border-primary glow-blue"
  },
  {
    title: "BRANDS",
    icon: <Building2 className="w-8 h-8" />,
    desc: "Connect authentically with Gen-Z gamers through bespoke sponsorships.",
    color: "group-hover:border-secondary glow-purple"
  }
];

export function ForEveryGamer() {
  return (
    <section className="py-32 px-6 relative border-t border-white/5" id="features">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6">BUILT FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">EVERYONE.</span></h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Whether you're grinding for tier 1 or building a community, ANOK provides the tools to level up your game.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] ${card.color.split(' ')[0]} cursor-crosshair`}
            >
              <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">{card.title}</h3>
              <p className="text-foreground/60 font-medium leading-relaxed">
                {card.desc}
              </p>
              
              {/* Hover highlight effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
