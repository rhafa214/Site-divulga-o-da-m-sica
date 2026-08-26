import { siteConfig } from '../config/siteConfig';

export function AnimatedHeroArtwork({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full max-w-[400px] lg:max-w-[500px] flex justify-center items-center group isolate">
      
      {/* Brilho quente e discreto atrás da arte - acompanha a intensidade das chamas */}
      <div 
        className="absolute -inset-4 sm:-inset-8 bg-gradient-to-t from-wine-deep via-orange-burnt/40 to-transparent rounded-[100%] blur-3xl -z-10 animate-fire-glow motion-reduce:animate-none motion-reduce:opacity-30 pointer-events-none" 
        aria-hidden="true" 
      />
      
      <div className="relative w-full h-auto rounded-sm shadow-2xl shadow-black-warm/80 border border-wine-deep/30 bg-wine-dark overflow-hidden isolate">
        
        {/* Camada Estática Original (Garante que coração e textos fiquem intocados) */}
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto object-contain block relative z-10"
        />
        
        {/* Camada Animada de Calor / Luminosidade */}
        {/* Ancorada no topo/meio para iluminar apenas a área do fogo, evitando o coração */}
        <div 
          className="absolute top-0 left-0 right-0 bottom-[40%] bg-gradient-to-b from-orange-burnt/20 via-orange-burnt/5 to-transparent mix-blend-color-dodge z-20 pointer-events-none animate-heat-light motion-reduce:animate-none motion-reduce:hidden" 
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
