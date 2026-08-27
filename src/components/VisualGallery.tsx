import { siteConfig } from '../config/siteConfig';

export function VisualGallery() {
  return (
    <section className="py-14 sm:py-24 lg:py-32  border-t border-wine-deep/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 sm:mb-16 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl text-orange-burnt/90 uppercase tracking-widest font-title text-shadow-sm">
            Uma oração que ganhou forma
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 lg:gap-8 items-center">
          
          {/* Main Art - Large */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[320px] md:max-w-full rounded-sm shadow-xl shadow-black-warm/60 group bg-wine-deep/20 flex items-center justify-center">
              <img 
                src={siteConfig.images.hero} 
                alt="Arte principal" 
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 block"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-cream-aged/10 z-10 pointer-events-none" />
            </div>
          </div>
          
          {/* Typographic Art - Wide Panel */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[320px] md:max-w-full rounded-sm shadow-xl shadow-black-warm/60 group md:-translate-y-12 bg-wine-deep/20 flex items-center justify-center">
              <img 
                src={siteConfig.images.typographic} 
                alt="Painel tipográfico Quebranta-me" 
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 block"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-cream-aged/10 z-10 pointer-events-none" />
            </div>
          </div>
          
          {/* Poster Art - Tall */}
          <div className="md:col-span-3 flex justify-center md:justify-start">
            <div className="relative w-full max-w-[320px] md:max-w-full rounded-sm shadow-xl shadow-black-warm/60 group md:translate-y-8 bg-wine-deep/20 flex items-center justify-center">
              <img 
                src={siteConfig.images.poster} 
                alt="Pôster vertical" 
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 block"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-cream-aged/10 z-10 pointer-events-none" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
