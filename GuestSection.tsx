export function GuestSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-wine-deep/20 relative overflow-hidden">
      <div className="absolute left-0 w-1/3 h-px bg-gradient-to-r from-transparent to-orange-burnt/30 top-1/2" />
      <div className="absolute right-0 w-1/3 h-px bg-gradient-to-l from-transparent to-orange-burnt/30 top-1/2" />
      
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 sm:mb-8 border border-cream-aged/20 bg-wine-dark/50 rounded-full backdrop-blur-sm">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium text-cream-aged/70">
            Convidado da Missão
          </span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-cream-aged font-title uppercase tracking-wide mb-6">
          Esta canção chegou primeiro até você
        </h2>
        
        <p className="text-base sm:text-lg text-cream-aged/80 mb-6 leading-relaxed max-w-2xl mx-auto font-quote">
          Se você chegou até aqui pelo nosso convite, queremos agradecer por aceitar conhecer esta canção antes do lançamento.
        </p>
        
        <p className="text-sm sm:text-base text-orange-burnt/80 max-w-xl mx-auto leading-relaxed">
          Quando a experiência completa for liberada, este será o seu espaço para ouvir, conhecer a história e encontrar os materiais oficiais de divulgação.
        </p>
        
      </div>
    </section>
  );
}
