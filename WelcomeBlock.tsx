import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export function WelcomeBlock() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="pt-16 pb-8 sm:pt-24 sm:pb-12  relative overflow-hidden">
      {/* Decorative gradient for dark wine background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-wine-deep/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[820px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Small Title */}
          <h2 className="text-sm sm:text-base text-cream-aged tracking-[0.2em] uppercase font-semibold mb-8 sm:mb-10">
            Um Convite à Entrega
          </h2>

          {/* Body Text */}
          <div className="text-cream-aged/90 text-base sm:text-lg leading-relaxed font-sans font-light space-y-6 sm:space-y-8 mb-12 sm:mb-16">
            <p>
              Estamos muito felizes por compartilhar com vocês a realização de um novo sonho.
            </p>
            <p>
              Neste espaço, você poderá ouvir antecipadamente ‘Quebranta-me’. Mais do que apresentar uma nova canção, queremos convidar você a viver este momento de oração conosco.
            </p>
            <p>
              Antes de se tornar música, ‘Quebranta-me’ nasceu como uma oração: um pedido sincero para que Deus molde novamente o nosso coração. Por isso, enquanto escuta, permita-se silenciar, rezar e se entregar nas mãos do Oleiro junto conosco.
            </p>
          </div>

          {/* Ornamental Line */}
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-orange-burnt/50 to-transparent mb-10 sm:mb-12" />

          {/* Bible Verse */}
          <div className="flex flex-col items-center">
            <blockquote className="text-xl sm:text-2xl md:text-3xl text-cream-aged font-quote italic leading-relaxed mb-6 max-w-[700px] px-4">
              “Casa de Israel, não poderei fazer de vós o que fez esse oleiro? Como o barro nas mãos do oleiro, assim estais vós em minhas mãos.”
            </blockquote>
            <span className="text-sm sm:text-base text-orange-burnt/90 font-medium tracking-widest uppercase">
              Jeremias 18,6
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
