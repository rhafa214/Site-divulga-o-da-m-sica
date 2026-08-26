import { motion } from 'motion/react';

export function MissionSignature() {
  return (
    <section className="py-10 sm:py-16 bg-wine-dark border-t border-wine-deep/40 text-center flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 bg-orange-burnt/10 rounded-full blur-[60px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-2 sm:gap-3 px-4"
      >
        <span className="text-sm sm:text-base text-cream-aged font-title tracking-[0.2em] uppercase">
          Por Jesus nós somos?!
        </span>
        
        <span className="text-4xl sm:text-5xl lg:text-6xl text-orange-burnt font-title font-bold tracking-widest uppercase text-shadow-md">
          Sedentos!
        </span>
      </motion.div>
    </section>
  );
}
