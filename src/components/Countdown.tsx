import { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const hasDate = Boolean(siteConfig.launchDate);

  useEffect(() => {
    if (!hasDate || !siteConfig.launchDate) return;
    
    const targetDate = new Date(siteConfig.launchDate).getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [hasDate]);

  if (!hasDate) {
    return (
      <section className="py-8 sm:py-16 bg-wine-dark text-center border-b border-wine-deep/30">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm sm:text-base text-cream-aged/50 uppercase tracking-[0.2em]">
            Data de lançamento em breve
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-14 sm:py-24 lg:py-32 bg-wine-dark relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-wine-deep/30 via-wine-dark to-wine-dark -z-10" />
      
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-xl sm:text-2xl text-cream-aged/80 uppercase tracking-widest mb-8 sm:mb-12">
          Contagem Regressiva
        </h3>
        
        <div className="flex justify-center gap-4 sm:gap-8 lg:gap-12">
          {[
            { label: 'Dias', value: timeLeft.days },
            { label: 'Horas', value: timeLeft.hours },
            { label: 'Minutos', value: timeLeft.minutes },
            { label: 'Segundos', value: timeLeft.seconds }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-4xl sm:text-6xl lg:text-7xl font-title text-orange-burnt mb-2 tabular-nums">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-cream-aged/60 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
