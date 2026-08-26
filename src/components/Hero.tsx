import { siteConfig } from '../config/siteConfig';
import { motion } from 'motion/react';
import { AnimatedHeroArtwork } from './AnimatedHeroArtwork';

export function Hero() {
  const scrollToSong = () => {
    document.getElementById('song-story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden pt-24 pb-24 lg:pb-12">
      {/* Background with slight warm light and texture */}
      <div className="absolute inset-0 bg-wine-dark -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-orange-burnt/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16 flex-1">
        
        {/* Main Artwork - Prioritized on mobile */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
        >
          <AnimatedHeroArtwork src={siteConfig.images.hero} alt="Arte principal do lançamento Quero Queimar" />
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
        >
          <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-orange-burnt/80 font-medium mb-4">
            Missão Sedentos Apresenta
          </span>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-white-off mb-4 leading-none uppercase text-shadow-md">
            {siteConfig.songTitle}
          </h1>
          <p className="text-lg sm:text-xl text-cream-aged/80 font-quote italic mb-8 max-w-md">
            Uma nova canção está chegando.
          </p>
          
          <button 
            onClick={scrollToSong}
            className="px-8 py-4 bg-red-earthy hover:bg-orange-burnt text-white-off font-medium rounded-sm uppercase tracking-widest transition-all duration-300 shadow-lg shadow-red-earthy/20"
          >
            Conheça esta oração
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-aged/50 cursor-pointer"
        onClick={scrollToSong}
      >
        <span className="text-xs uppercase tracking-widest">Rolar</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cream-aged/50 to-transparent" />
      </motion.div>
    </section>
  );
}
