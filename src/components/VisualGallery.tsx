import { publicUrl } from '../config/siteConfig';
import { Download } from 'lucide-react';
import { motion } from 'motion/react';

interface WallpaperItem {
  id: string;
  title: string;
  previewSrc: string;
  downloadSrc: string;
  filename: string;
  ariaLabel: string;
}

const WALLPAPERS: WallpaperItem[] = [
  {
    id: 'quero-queimar',
    title: 'Quero Queimar',
    previewSrc: publicUrl('wallpapers/wallpaper_01_quero_queimar.png'),
    downloadSrc: publicUrl('wallpapers/wallpaper_01_quero_queimar.png'),
    filename: 'wallpaper_01_quero_queimar.png',
    ariaLabel: 'Baixar wallpaper Quero Queimar para celular'
  },
  {
    id: 'quebranta-me',
    title: 'Quebranta-me',
    previewSrc: publicUrl('wallpapers/wallpaper_02_quebranta_me.png'),
    downloadSrc: publicUrl('wallpapers/wallpaper_02_quebranta_me.png'),
    filename: 'wallpaper_02_quebranta_me.png',
    ariaLabel: 'Baixar wallpaper Quebranta-me para celular'
  },
  {
    id: 'quero-queimar-claro',
    title: 'Quero Queimar — Claro',
    previewSrc: publicUrl('wallpapers/wallpaper_03_quero_queimar_claro.png'),
    downloadSrc: publicUrl('wallpapers/wallpaper_03_quero_queimar_claro.png'),
    filename: 'wallpaper_03_quero_queimar_claro.png',
    ariaLabel: 'Baixar wallpaper Quero Queimar — Claro para celular'
  }
];

export function VisualGallery() {
  return (
    <section 
      id="wallpapers" 
      className="py-16 sm:py-24 lg:py-32 border-t border-wine-deep/40 relative overflow-hidden"
      aria-label="Seção de Wallpapers oficiais para celular"
    >
      {/* Luz ambiente suave de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-wine-deep/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl lg:text-4xl text-orange-burnt uppercase tracking-widest font-title mb-4"
          >
            WALLPAPERS
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="space-y-1 text-base sm:text-lg text-cream-aged/90 font-quote max-w-xl mx-auto"
          >
            <p>Leve esta oração com você.</p>
            <p className="text-cream-aged/75 text-sm sm:text-base">Escolha sua arte favorita e baixe gratuitamente.</p>
          </motion.div>
        </div>
        
        {/* Grade com os 3 Cards de Wallpapers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 items-stretch">
          {WALLPAPERS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
              className="bg-wine-deep/25 border border-cream-aged/10 rounded-xl p-5 sm:p-6 flex flex-col justify-between items-center text-center backdrop-blur-sm shadow-xl shadow-black-warm/50 hover:border-orange-burnt/30 transition-all duration-300 group"
            >
              {/* Moldura da Prévia Vertical Proporção 9:16 Completa com object-contain */}
              <div className="w-full flex justify-center mb-6">
                <div className="relative w-full max-w-[200px] sm:max-w-[220px] aspect-[9/16] rounded-lg overflow-hidden border border-cream-aged/15 shadow-md shadow-black-warm/60 bg-black-warm flex items-center justify-center p-1">
                  <img 
                    src={item.previewSrc} 
                    alt={`Prévia do wallpaper ${item.title}`}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Informações da Arte */}
              <div className="w-full flex flex-col items-center mb-6">
                <h3 className="text-lg sm:text-xl font-title text-cream-aged tracking-wide uppercase mb-2">
                  {item.title}
                </h3>
                <span className="text-[11px] sm:text-xs text-cream-aged/60 uppercase tracking-[0.18em] font-medium">
                  Wallpaper para celular
                </span>
              </div>

              {/* Ação de Download Única */}
              <div className="w-full mt-auto">
                <a
                  href={item.downloadSrc}
                  download={item.filename}
                  aria-label={item.ariaLabel}
                  className="w-full min-h-[48px] py-3.5 px-6 bg-orange-burnt text-white-off hover:bg-red-earthy transition-all duration-300 font-medium text-xs sm:text-sm uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 shadow-md hover:shadow-orange-burnt/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-burnt focus:ring-offset-2 focus:ring-offset-wine-dark"
                >
                  <Download className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Baixar wallpaper</span>
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


