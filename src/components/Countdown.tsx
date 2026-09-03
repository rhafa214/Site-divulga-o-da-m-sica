import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

interface CountdownProps {
  variant?: 'compact' | 'featured';
}

function calculateTimeLeft(targetTimestamp: number): TimeLeft {
  const now = Date.now();
  const distance = targetTimestamp - now;

  if (isNaN(targetTimestamp) || distance <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: true
    };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
    isExpired: false
  };
}

export function Countdown({ variant = 'compact' }: CountdownProps) {
  const shouldReduceMotion = useReducedMotion();
  const targetDateStr = siteConfig.releaseDate || siteConfig.launchDate || '2026-09-18T00:00:00-03:00';
  const targetTimestamp = new Date(targetDateStr).getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetTimestamp));

  useEffect(() => {
    // Atualização inicial imediata
    setTimeLeft(calculateTimeLeft(targetTimestamp));

    const interval = setInterval(() => {
      const remaining = calculateTimeLeft(targetTimestamp);
      setTimeLeft(remaining);

      if (remaining.isExpired) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTimestamp]);

  const units = [
    { label: 'Dias', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds }
  ];

  // Acessibilidade: texto estático para leitores de tela
  const accessibleText = timeLeft.isExpired
    ? 'Quebranta-me já está disponível.'
    : 'Lançamento oficial de Quebranta-me em 18 de setembro de 2026, às 00:00 (horário de Brasília).';

  if (variant === 'compact') {
    return (
      <section className="py-8 sm:py-12 relative overflow-hidden text-center z-10" aria-label="Contagem regressiva do lançamento">
        {/* Descrição estática para leitores de tela */}
        <p className="sr-only">{accessibleText}</p>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center w-full"
          >
            {/* Título compacto */}
            <span className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.25em] text-orange-burnt/90 font-medium mb-4 sm:mb-6">
              Quebranta-me chega em
            </span>

            {timeLeft.isExpired ? (
              <div className="py-2 px-6 rounded-full border border-orange-burnt/40 bg-orange-burnt/10 backdrop-blur-sm">
                <span className="text-sm sm:text-base md:text-lg font-title text-orange-burnt uppercase tracking-[0.2em]">
                  Quebranta-me já está disponível
                </span>
              </div>
            ) : (
              <div
                className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 w-full max-w-lg"
                aria-hidden="true"
              >
                {units.map((unit, index) => (
                  <div key={unit.label} className="flex items-center">
                    <div className="flex flex-col items-center min-w-[58px] sm:min-w-[76px] md:min-w-[88px]">
                      <span className="text-2xl sm:text-4xl md:text-5xl font-title text-cream-aged font-bold tabular-nums leading-none tracking-tight">
                        {String(unit.value).padStart(2, '0')}
                      </span>
                      <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.18em] text-cream-aged/60 font-medium mt-1.5 sm:mt-2">
                        {unit.label}
                      </span>
                    </div>

                    {index < units.length - 1 && (
                      <span className="text-orange-burnt/50 text-xl sm:text-2xl md:text-3xl font-light select-none pb-4 sm:pb-5 px-0.5 sm:px-1">
                        :
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  // Variante featured (utilizada próximo ao encerramento / pré-save)
  return (
    <section className="py-14 sm:py-20 lg:py-24 relative overflow-hidden text-center z-10" aria-label="Contagem regressiva de encerramento">
      {/* Luz ambiente suave de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-wine-deep/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Descrição estática para leitores de tela */}
      <p className="sr-only">{accessibleText}</p>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex flex-col items-center w-full"
        >
          {/* Título de destaque */}
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cream-aged uppercase tracking-wide mb-8 sm:mb-12 font-title max-w-2xl px-2 leading-snug">
            Falta pouco para esta oração se tornar canção
          </h3>

          {timeLeft.isExpired ? (
            <div className="py-4 px-8 rounded-full border border-orange-burnt/40 bg-orange-burnt/10 backdrop-blur-sm">
              <span className="text-lg sm:text-xl md:text-2xl font-title text-orange-burnt uppercase tracking-widest">
                Quebranta-me já está disponível
              </span>
            </div>
          ) : (
            <div
              className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 w-full max-w-2xl"
              aria-hidden="true"
            >
              {units.map((unit, index) => (
                <div key={unit.label} className="flex items-center">
                  <div className="flex flex-col items-center bg-wine-deep/20 rounded-lg p-2.5 sm:p-4 md:p-6 border border-cream-aged/5 shadow-lg shadow-black-warm/30 min-w-[64px] sm:min-w-[90px] md:min-w-[110px]">
                    <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-title text-orange-burnt mb-1 sm:mb-2 tabular-nums leading-none drop-shadow-sm">
                      {String(unit.value).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] sm:text-xs md:text-sm uppercase tracking-[0.2em] text-cream-aged/75 font-medium">
                      {unit.label}
                    </span>
                  </div>

                  {index < units.length - 1 && (
                    <span className="text-orange-burnt/40 text-2xl sm:text-3xl md:text-4xl font-light select-none pb-2 px-1 sm:px-2">
                      :
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

