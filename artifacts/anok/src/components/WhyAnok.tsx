import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp, Gem } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-primary" aria-hidden="true" />,
    title: "Instant Payouts",
    desc: "Win a tournament, get paid immediately. No waiting, no hassle."
  },
  {
    icon: <Shield className="w-6 h-6 text-accent" aria-hidden="true" />,
    title: "Anti-Cheat Engine",
    desc: "Military-grade fair play enforcement across all competitive matches."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-secondary" aria-hidden="true" />,
    title: "Advanced Analytics",
    desc: "Track your K/D, heatmaps, and performance trends over time."
  },
  {
    icon: <Gem className="w-6 h-6 text-primary" aria-hidden="true" />,
    title: "Rewards Ecosystem",
    desc: "Earn ANOK tokens just by playing and trade them for premium gear."
  }
];

export function WhyAnok() {
  return (
    <section
      aria-labelledby="why-anok-heading"
      className="py-20 sm:py-32 px-4 sm:px-6 bg-black relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="why-anok-heading" className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6">
              WHY <br /><span className="text-primary">ANOK?</span>
            </h2>
            <p className="text-base sm:text-xl text-foreground/60 mb-6 sm:mb-8 max-w-md">
              We stripped away the noise to build a platform that actually respects your time, skill, and passion.
            </p>
            <a
              href="https://discord.gg/eg7A4hVPEu"
              target="_blank"
              rel="noopener noreferrer"
              title="Read the ANOK manifesto on Discord"
              className="inline-block px-6 py-3 rounded-full font-bold text-sm bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
            >
              Read the Manifesto
            </a>
          </motion.div>

          <ul className="grid grid-cols-2 gap-4 sm:gap-6 list-none p-0 m-0" role="list">
            {features.map((f, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card/40 border border-white/5 p-4 sm:p-6 rounded-2xl backdrop-blur-sm"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center mb-3 sm:mb-4 border border-white/10">
                  {f.icon}
                </div>
                <h3 className="text-base sm:text-xl font-display font-bold mb-1 sm:mb-2">{f.title}</h3>
                <p className="text-xs sm:text-sm text-foreground/60">{f.desc}</p>
              </motion.li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}

