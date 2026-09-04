import { siteConfig } from '../config/siteConfig';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-wine-dark/80 backdrop-blur-md border-b border-wine-deep/50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo placeholder, replacing with text if image fails */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
            <img 
              src={siteConfig.images.logo} 
              alt="Logotipo Missão Sedentos" 
              className="w-full h-full object-contain opacity-90"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).parentElement!.innerText = 'MS';
                (e.target as HTMLImageElement).parentElement!.className = 'w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cream-aged/10 flex items-center justify-center text-xs font-title';
              }}
            />
          </div>
          <span className="font-title text-xl tracking-wider text-cream-aged hidden sm:block">
            {siteConfig.artistName}
          </span>
        </div>
        
        <a 
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium px-4 py-2 rounded-full border border-orange-burnt/30 text-orange-burnt hover:bg-orange-burnt hover:text-white-off transition-colors"
        >
          Instagram
        </a>
      </div>
    </header>
  );
}
