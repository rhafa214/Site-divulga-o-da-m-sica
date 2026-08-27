import { useState } from 'react';
import { siteConfig } from '../config/siteConfig';

export function PreSaveSection() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (!siteConfig.preSaveUrl) return;
    
    const shareData = {
      title: "Quebranta-me — Missão Sedentos",
      text: "Conheça ‘Quebranta-me’, a nova canção da Missão Sedentos, e faça o pré-save.",
      url: siteConfig.preSaveUrl
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
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
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-orange-burnt uppercase tracking-wide mb-8 font-title">
          Se esta canção alcançou você
        </h2>
        
        <div className="text-base sm:text-lg text-cream-aged/90 mb-10 leading-relaxed space-y-6">
          <p>
            Se esta canção alcançou você de alguma forma, ajude-nos a levá-la a mais corações.
          </p>
          <p>
            Faça agora o pré-save de ‘Quebranta-me’ e compartilhe o link em suas redes sociais. Ficaremos muito gratos e felizes por ter você conosco neste novo sonho.
          </p>
        </div>

        <div className="w-full flex flex-col items-center gap-4 mt-2">
          <a 
            href={siteConfig.preSaveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 font-title text-xl uppercase tracking-widest rounded-sm transition-all duration-300 bg-orange-burnt text-white-off hover:bg-red-earthy shadow-xl hover:shadow-orange-burnt/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-burnt focus:ring-offset-2 focus:ring-offset-black-warm"
          >
            Fazer o pré-save
          </a>
          
          <button
            onClick={handleShare}
            aria-live="polite"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 font-medium text-xs sm:text-sm uppercase tracking-widest rounded-sm transition-all duration-300 border border-orange-burnt/30 text-orange-burnt hover:bg-orange-burnt/10 focus:outline-none focus:ring-2 focus:ring-orange-burnt focus:ring-offset-2 focus:ring-offset-black-warm mt-2"
          >
            {copied ? "Link do pré-save copiado" : "Compartilhar"}
          </button>
        </div>

      </div>
    </section>
  );
}
