import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp, Gem } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Instant Payouts",
    desc: "Win a tournament, get paid immediately. No waiting, no hassle."
  },
  {
    icon: <Shield className="w-6 h-6 text-accent" />,
    title: "Anti-Cheat Engine",
    desc: "Military-grade fair play enforcement across all competitive matches."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-secondary" />,
    title: "Advanced Analytics",
    desc: "Track your K/D, heatmaps, and performance trends over time."
  },
  {
    icon: <Gem className="w-6 h-6 text-primary" />,
    title: "Rewards Ecosystem",
    desc: "Earn ANOK tokens just by playing and trade them for premium gear."
  }
];

export function WhyAnok() {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Abstract bg lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">WHY <br/><span className="text-primary">ANOK?</span></h2>
            <p className="text-xl text-foreground/60 mb-8 max-w-md">
              We stripped away the noise to build a platform that actually respects your time, skill, and passion.
            </p>
            <button className="px-6 py-3 rounded-full font-bold text-sm bg-white/10 hover:bg-white/20 transition-colors border border-white/10">
              Read the Manifesto
            </button>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card/40 border border-white/5 p-6 rounded-2xl backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                  {f.icon}
                </div>
                <h4 className="text-xl font-display font-bold mb-2">{f.title}</h4>
                <p className="text-sm text-foreground/60">{f.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
