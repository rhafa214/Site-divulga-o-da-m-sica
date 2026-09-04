import { siteConfig } from '../config/siteConfig';

export function AnimatedHeroArtwork({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full max-w-[400px] lg:max-w-[500px] flex justify-center items-center group isolate">
      
      {/* Brilho quente e discreto atrás da arte - acompanha a intensidade das chamas */}
      <div 
        className="absolute -inset-4 sm:-inset-8 bg-gradient-to-t from-transparent via-orange-burnt/30 to-transparent rounded-[100%] blur-3xl -z-10 animate-fire-glow motion-reduce:animate-none motion-reduce:opacity-30 pointer-events-none" 
        aria-hidden="true" 
      />
      
      <div className="relative w-full h-auto isolate flex justify-center items-center">
        
        {/* Camada Estática Original (Garante que coração e textos fiquem intocados) */}
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto object-contain block relative z-10"
          fetchPriority="high"
          decoding="async"
        />
        
      </div>
    </div>
  );
}
