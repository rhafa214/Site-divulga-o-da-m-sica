import { motion, useReducedMotion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';

export function PlatformsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section 
      id="plataformas"
      className="py-14 sm:py-20 lg:py-24 relative overflow-hidden text-center z-10"
      aria-label="Plataformas digitais da Missão Sedentos"
    >
      {/* Luz ambiente suave de fundo integrada */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-wine-deep/20 rounded-full blur-[100px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center w-full"
        >
          {/* Título da Seção */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-orange-burnt font-title uppercase tracking-widest mb-4">
            SIGA-NOS NAS PLATAFORMAS
          </h2>

          {/* Texto de Convite */}
          <p className="text-base sm:text-lg text-cream-aged/90 font-quote max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Continue conosco também nas plataformas digitais e acompanhe os próximos lançamentos da Missão Sedentos.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-xl">
            
            {/* Spotify */}
            <a
              href={siteConfig.streaming.spotify}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguir Missão Sedentos no Spotify (abre em nova aba)"
              className="group w-full sm:w-auto min-h-[48px] px-7 py-3.5 rounded-sm border border-orange-burnt/25 bg-wine-deep/30 hover:bg-wine-deep/50 hover:border-orange-burnt/60 text-cream-aged hover:text-orange-burnt uppercase tracking-widest text-xs sm:text-sm font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-md shadow-black-warm/30 hover:shadow-lg hover:shadow-orange-burnt/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-burnt focus-visible:ring-offset-2 focus-visible:ring-offset-wine-dark"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 shrink-0 text-cream-aged/90 group-hover:text-orange-burnt transition-all duration-300 group-hover:scale-110"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.308c-.218.358-.683.473-1.042.253-2.857-1.745-6.453-2.14-10.688-1.173-.41.094-.82-.162-.914-.572-.094-.41.162-.82.572-.914 4.637-1.06 8.604-.61 11.82 1.364.358.219.473.684.253 1.042zm1.47-3.26c-.275.447-.862.59-1.31.314-3.27-2.01-8.254-2.593-12.12-1.418-.507.153-1.04-.135-1.194-.64-.153-.507.135-1.04.64-1.194 4.417-1.34 9.912-.686 13.67 1.628.448.275.59.862.314 1.31zm.127-3.39c-3.92-2.328-10.38-2.543-14.123-1.407-.601.183-1.24-.162-1.423-.763-.183-.601.162-1.24.763-1.423 4.303-1.306 11.442-1.053 15.96 1.63.54.32.716 1.02.395 1.56-.32.54-1.02.716-1.572.403z"/>
              </svg>
              <span>Seguir no Spotify</span>
            </a>

            {/* YouTube */}
            <a
              href={siteConfig.streaming.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Inscrever-se no canal oficial da Missão Sedentos no YouTube (abre em nova aba)"
              className="group w-full sm:w-auto min-h-[48px] px-7 py-3.5 rounded-sm border border-orange-burnt/25 bg-wine-deep/30 hover:bg-wine-deep/50 hover:border-orange-burnt/60 text-cream-aged hover:text-orange-burnt uppercase tracking-widest text-xs sm:text-sm font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-md shadow-black-warm/30 hover:shadow-lg hover:shadow-orange-burnt/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-burnt focus-visible:ring-offset-2 focus-visible:ring-offset-wine-dark"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 shrink-0 text-cream-aged/90 group-hover:text-orange-burnt transition-all duration-300 group-hover:scale-110"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>Inscreva-se no YouTube</span>
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
