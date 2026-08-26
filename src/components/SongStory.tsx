export function SongStory() {
  return (
    <section id="song-story" className="py-14 sm:py-24 lg:py-32 bg-wine-dark relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <h2 className="text-3xl sm:text-4xl text-orange-burnt mb-8 sm:mb-12 uppercase tracking-widest relative">
          <span className="relative z-10">A canção</span>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-12 bg-wine-deep/40 blur-xl -z-10" />
        </h2>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-cream-aged/90 font-quote leading-relaxed mb-10 sm:mb-16 max-w-2xl">
          Antes de se tornar música, "Quebranta-me" nasceu como uma oração de entrega, restauração e transformação. Em breve, você poderá conhecer essa história.
        </p>
        
        <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-orange-burnt/50 to-transparent mb-8 sm:mb-12" />
        
        <blockquote className="text-2xl sm:text-3xl lg:text-4xl text-white-off font-title tracking-wide text-shadow-sm uppercase">
          "Quebranta-me. Restaura-me. Faz-me de novo."
        </blockquote>
      </div>
    </section>
  );
}
