import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LaunchHype() {
  const [timeLeft, setTimeLeft] = useState({
    days: 29,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 29);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = launchDate.getTime() - now.getTime();
      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 relative border-t border-white/5" id="launch">
      <div className="absolute inset-0 bg-secondary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/50 bg-secondary/10 text-secondary font-bold text-xs sm:text-sm tracking-widest mb-6 sm:mb-8 uppercase">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" /> V1.0 INCOMING
          </div>
          
          <h2 className="text-3xl sm:text-6xl md:text-8xl font-black mb-4 sm:mb-6 text-glow-purple">
            APP LAUNCHING <br/>SOON.
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-foreground/80 mb-8 sm:mb-12 font-bold tracking-wide font-display">
            INDIA'S NEXT GAMING ECOSYSTEM IS ALMOST HERE
          </p>

          {/* Timer */}
          <div className="flex justify-center gap-2 sm:gap-4 md:gap-8 mb-10 sm:mb-16">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINS", value: timeLeft.minutes },
              { label: "SECS", value: timeLeft.seconds }
            ].map((unit, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-20 sm:w-24 sm:h-28 md:w-32 md:h-36 bg-card border border-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-4xl md:text-6xl font-black font-mono shadow-xl glow-purple relative overflow-hidden">
                  <div className="absolute top-0 w-full h-1/2 bg-white/5 border-b border-white/5" />
                  {unit.value.toString().padStart(2, '0')}
                </div>
                <div className="mt-2 sm:mt-4 text-[10px] sm:text-sm font-bold tracking-widest text-foreground/50">{unit.label}</div>
              </div>
            ))}
          </div>

          {/* Form — stacks on mobile */}
          <div className="max-w-md mx-auto flex flex-col sm:flex-row bg-card/80 backdrop-blur-md sm:p-2 rounded-2xl sm:rounded-full border border-white/10 shadow-2xl overflow-hidden">
            <input 
              type="email" 
              placeholder="Enter your email..." 
              className="flex-1 bg-transparent border-none outline-none px-5 py-3 sm:py-0 text-white placeholder:text-foreground/40 font-medium text-sm sm:text-base"
            />
            <a
              href="https://discord.gg/eg7A4hVPEu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 bg-secondary text-white font-bold hover:bg-secondary/90 transition-colors glow-purple text-center text-sm sm:text-base sm:rounded-full"
            >
              Join Waitlist
            </a>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-foreground/40">Guaranteed access code for the first 10,000 signups.</p>
        </motion.div>
      </div>
    </section>
  );
}

