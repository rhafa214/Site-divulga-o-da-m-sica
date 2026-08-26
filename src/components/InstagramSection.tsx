import { siteConfig } from '../config/siteConfig';

export function InstagramSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-black-warm border-y border-wine-deep/30 text-center">
      <div className="max-w-2xl mx-auto px-4 flex flex-col items-center">
        <p className="text-lg sm:text-xl text-cream-aged/90 font-quote mb-6 sm:mb-8">
          Acompanhe os próximos passos deste lançamento.
        </p>
        <a 
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-transparent border border-orange-burnt/50 text-orange-burnt hover:bg-orange-burnt hover:text-white-off uppercase tracking-widest text-sm transition-all duration-300 rounded-sm"
        >
          Seguir @missaosedentos_
        </a>
      </div>
    </section>
  );
}
