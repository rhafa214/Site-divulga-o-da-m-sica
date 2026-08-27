import { siteConfig } from '../config/siteConfig';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" py-10 sm:py-12 border-t border-wine-deep/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Logo */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-6 opacity-60 hover:opacity-100 transition-opacity">
          <img 
            src={siteConfig.images.logo} 
            alt="Logotipo Missão Sedentos" 
            className="w-full h-full object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.innerText = 'MS';
              (e.target as HTMLImageElement).parentElement!.className = 'w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cream-aged/10 flex items-center justify-center text-xs font-title';
            }}
          />
        </div>
        
        <h4 className="font-title text-xl sm:text-2xl text-cream-aged tracking-widest uppercase mb-2">
          {siteConfig.artistName}
        </h4>
        
        <p className="text-sm text-cream-aged/60 font-quote italic mb-8">
          Evangelizando por meio da música
        </p>
        
        <a 
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm text-orange-burnt/80 hover:text-orange-burnt mb-8 sm:mb-12 tracking-widest uppercase"
        >
          @missaosedentos_
        </a>
        
        <div className="text-[10px] sm:text-xs text-cream-aged/40 uppercase tracking-widest">
          &copy; {currentYear} {siteConfig.artistName}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
