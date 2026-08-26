import { useState } from 'react';
import { siteConfig } from '../config/siteConfig';

export function PreSaveSection() {
  const hasPreSave = Boolean(siteConfig.preSaveUrl);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (!hasPreSave) return;
    
    const shareData = {
      title: "Quebranta-me — Missão Sedentos",
      text: "Conheça o próximo lançamento da Missão Sedentos e faça o pré-save.",
      url: siteConfig.preSaveUrl
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Se falhar ou cancelar, tenta copiar (alguns navegadores disparam erro ao cancelar)
        if (err instanceof Error && err.name !== 'AbortError') {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(siteConfig.preSaveUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => {
        // Silencioso em caso de erro
      });
    }
  };

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-black-warm relative border-t border-wine-deep/30">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23B85D16\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E')] -z-10" />
      
      <div className="max-w-2xl mx-auto px-4 text-center flex flex-col items-center">
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-cream-aged uppercase tracking-wide mb-6 font-title">
          Ajude esta canção a alcançar mais pessoas
        </h2>
        
        <p className="text-base sm:text-lg text-cream-aged/90 mb-4 leading-relaxed font-quote">
          Se esta canção falou ao seu coração, gostaríamos de pedir a sua ajuda para levá-la mais longe.
        </p>

        {!hasPreSave && (
          <p className="text-sm sm:text-base text-cream-aged/70 mb-10 leading-relaxed font-quote">
            Quando o pré-save estiver disponível, compartilhe o link em suas redes sociais, grupos e comunidades. Cada compartilhamento pode fazer esta oração chegar a alguém que precisa ouvi-la.
          </p>
        )}

        {hasPreSave && (
          <div className="w-full flex flex-col items-center gap-6 mt-4">
            <a 
              href={siteConfig.preSaveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-block px-10 py-4 font-title text-xl uppercase tracking-widest rounded-sm transition-all duration-300 bg-orange-burnt text-white-off hover:bg-red-earthy shadow-xl hover:shadow-orange-burnt/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-burnt focus:ring-offset-2 focus:ring-offset-black-warm"
            >
              Fazer pré-save
            </a>
            
            <div className="flex flex-col items-center gap-4">
              <p className="text-[13px] sm:text-sm text-cream-aged/50 leading-relaxed max-w-sm">
                Depois de fazer o pré-save, você também pode compartilhar este mesmo link com outras pessoas.
              </p>
              
              <button
                onClick={handleShare}
                aria-live="polite"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 font-medium text-xs sm:text-sm uppercase tracking-widest rounded-sm transition-all duration-300 border border-orange-burnt/30 text-orange-burnt hover:bg-orange-burnt/10 focus:outline-none focus:ring-2 focus:ring-orange-burnt focus:ring-offset-2 focus:ring-offset-black-warm"
              >
                {copied ? "Link copiado" : "Compartilhar o pré-save"}
              </button>
            </div>
          </div>
        )}

        {!hasPreSave && (
          <span 
            className="inline-block px-10 py-4 font-title text-xl uppercase tracking-widest rounded-sm transition-all duration-300 bg-wine-deep/40 text-cream-aged/40 border border-wine-deep cursor-not-allowed select-none"
            aria-disabled="true"
          >
            Pré-save em breve
          </span>
        )}
      </div>
    </section>
  );
}
