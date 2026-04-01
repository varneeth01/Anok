import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative py-24 sm:py-40 overflow-hidden bg-black flex items-center justify-center"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.02] pointer-events-none select-none" aria-hidden="true">
        ANOK
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6">
        <motion.h2
          id="final-cta-heading"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-9xl font-black mb-6 sm:mb-8 tracking-tighter"
        >
          BE PART OF <br /><span className="text-primary text-glow-blue">THE FUTURE.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://discord.gg/eg7A4hVPEu"
            target="_blank"
            rel="noopener noreferrer"
            title="Get early access to ANOK – India's gaming platform"
            aria-label="Get Early Access to ANOK on Discord"
            className="inline-block px-8 py-4 sm:px-12 sm:py-6 rounded-full font-display font-black text-lg sm:text-2xl bg-white text-black hover:scale-110 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            GET EARLY ACCESS
          </a>
        </motion.div>
      </div>
    </section>
  );
}

