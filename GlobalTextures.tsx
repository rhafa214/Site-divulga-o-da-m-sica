export function GlobalTextures() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
      {/* 1. Base Grain / Noise */}
      {/* Using a tiny SVG data URI for organic paper-like grain */}
      <div 
        className="absolute inset-0 opacity-[0.03] sm:opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      />

      {/* 2. Soft Organic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(18,11,10,0.4)_80%,rgba(18,11,10,0.7)_100%)] mix-blend-multiply" />

      {/* 3. Subtle Warm/Earthy Light variations (Organic Spots) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_15%_25%,rgba(143,29,23,0.03)_0%,transparent_40%),radial-gradient(circle_at_85%_75%,rgba(58,13,18,0.05)_0%,transparent_50%)]" />

      {/* 4. Sparse Tiny Dust/Orange particles (Simulated via radial gradients) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(184,93,22,0.1)_1px,transparent_1px),radial-gradient(circle_at_80%_60%,rgba(184,93,22,0.1)_1.5px,transparent_1.5px),radial-gradient(circle_at_40%_80%,rgba(184,93,22,0.08)_1px,transparent_1px),radial-gradient(circle_at_70%_20%,rgba(184,93,22,0.08)_2px,transparent_2px)] bg-[size:100px_100px] opacity-40" />
    </div>
  );
}
