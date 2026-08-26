import React, { useState, useRef, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [coverSrc, setCoverSrc] = useState(siteConfig.images.audioCover || siteConfig.images.hero);
  const [imageFailed, setImageFailed] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const hasAudio = Boolean(siteConfig.audioSrc);

  useEffect(() => {
    if (audioRef.current && hasAudio) {
      const audio = audioRef.current;
      const updateProgress = () => {
        if (audio.duration) {
          setProgress((audio.currentTime / audio.duration) * 100);
        }
      };
      
      const onEnded = () => setIsPlaying(false);

      audio.addEventListener('timeupdate', updateProgress);
      audio.addEventListener('ended', onEnded);
      
      return () => {
        audio.removeEventListener('timeupdate', updateProgress);
        audio.removeEventListener('ended', onEnded);
      };
    }
  }, [hasAudio]);

  const togglePlay = () => {
    if (!hasAudio || !audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const formatTime = (timeInSeconds: number) => {
    if (!timeInSeconds || isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hasAudio || !audioRef.current || !audioRef.current.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audioRef.current.currentTime = percent * audioRef.current.duration;
    setProgress(percent * 100);
  };

  return (
    <section className="py-12 sm:py-24 bg-wine-deep/20 border-y border-wine-deep/40 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-burnt/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-wine-deep/30 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Cinematic Card */}
        <div className="w-full max-w-[900px] bg-wine-dark/90 backdrop-blur-xl rounded-2xl border border-cream-aged/10 p-6 sm:p-10 flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
          
          {/* Internal Card Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-wine-deep/40 via-transparent to-black-warm/50 pointer-events-none" />
          
          {/* Cover Art */}
          <div className="relative w-[190px] h-[190px] sm:w-[260px] sm:h-[260px] shrink-0 z-10">
            <div className="absolute inset-0 bg-orange-burnt/20 blur-2xl rounded-full translate-y-4" />
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-cream-aged/10 shadow-2xl bg-black-warm">
              <img 
                src={coverSrc} 
                alt={imageFailed ? "" : `Capa do single ${siteConfig.songTitle}`}
                className={`w-full h-full object-contain ${imageFailed ? 'opacity-0' : 'opacity-100'}`}
                onError={() => {
                  if (coverSrc !== siteConfig.images.hero) {
                    setCoverSrc(siteConfig.images.hero);
                  } else {
                    setImageFailed(true);
                  }
                }}
              />
            </div>
          </div>
          
          {/* Info & Controls */}
          <div className="flex-1 w-full flex flex-col justify-center relative z-10">
            
            {/* Badge & Equalizer */}
            <div className="flex items-center gap-4 justify-center sm:justify-start mb-2">
              <div className="flex items-center gap-2 bg-black-warm/40 px-3 py-1 rounded-full border border-cream-aged/5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-burnt" />
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-cream-aged/90 uppercase">
                  Escuta Antecipada
                </span>
              </div>
              
              {/* Equalizer */}
              <div className="flex items-end gap-[3px] h-3.5" aria-hidden="true">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-orange-burnt/80 rounded-t-sm"
                    initial={{ height: '3px' }}
                    animate={{ height: isPlaying ? ['3px', '12px', '4px', '14px', '3px'] : '3px' }}
                    transition={{
                      duration: 1 + i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Title & Artist */}
            <div className="text-center sm:text-left mb-1">
              <h3 className="text-3xl sm:text-4xl text-white-off uppercase tracking-wide font-title mb-1 shadow-black/50 drop-shadow-md">
                {siteConfig.songTitle}
              </h3>
              <p className="text-base sm:text-lg text-orange-burnt/90 font-medium">
                {siteConfig.artistName}
              </p>
            </div>
            
            <p className="text-[13px] text-cream-aged/40 text-center sm:text-left mb-8 font-quote italic">
              Conteúdo exclusivo para convidados
            </p>

            {!hasAudio ? (
              <div className="bg-wine-deep/30 rounded-lg border border-wine-deep/50 p-5 text-center sm:text-left">
                <p className="text-sm text-cream-aged/80 font-medium uppercase tracking-wider">
                  A experiência será liberada em breve
                </p>
              </div>
            ) : hasError ? (
              <div className="bg-wine-deep/30 rounded-lg border border-wine-deep/50 p-5 text-center sm:text-left">
                <p className="text-sm text-cream-aged/80 font-medium uppercase tracking-wider">
                  Não foi possível carregar o áudio
                </p>
              </div>
            ) : (
              <div className="flex flex-col w-full gap-5">
                {/* Progress Bar */}
                <div className="flex items-center gap-3 w-full group">
                  <span className="text-xs text-cream-aged/60 w-10 text-right tabular-nums font-medium">
                    {formatTime(audioRef.current?.currentTime || 0)}
                  </span>
                  
                  {/* Clickable Area */}
                  <div 
                    className="flex-1 py-3 cursor-pointer relative flex items-center"
                    onClick={handleSeek}
                    role="slider"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={progress}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                        const dir = e.key === 'ArrowRight' ? 1 : -1;
                        if (audioRef.current && audioRef.current.duration) {
                          audioRef.current.currentTime = Math.max(0, Math.min(audioRef.current.duration, audioRef.current.currentTime + dir * 5));
                          setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
                        }
                      }
                    }}
                  >
                    {/* Track */}
                    <div className="w-full h-1.5 bg-wine-deep/80 rounded-full overflow-hidden">
                      {/* Fill */}
                      <div 
                        className="h-full bg-gradient-to-r from-red-earthy to-orange-burnt"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    {/* Thumb */}
                    <div 
                      className={`absolute h-3.5 w-3.5 bg-white-off rounded-full shadow-md border border-orange-burnt/50 -ml-1.5 transition-transform duration-200 ${isPlaying ? 'scale-100' : 'scale-0 group-hover:scale-100 focus:scale-100'}`}
                      style={{ left: `${progress}%` }}
                    />
                  </div>
                  
                  <span className="text-xs text-cream-aged/60 w-10 tabular-nums font-medium">
                    {formatTime(audioRef.current?.duration || 0)}
                  </span>
                </div>
                
                {/* Controls */}
                <div className="flex items-center justify-center sm:justify-start gap-8 mt-1">
                  <button 
                    onClick={togglePlay}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-earthy hover:bg-orange-burnt text-white-off flex items-center justify-center transition-all shadow-[0_0_20px_rgba(140,43,30,0.3)] hover:shadow-[0_0_25px_rgba(206,89,32,0.5)] border border-orange-burnt/30 focus:outline-none focus:ring-2 focus:ring-orange-burnt focus:ring-offset-2 focus:ring-offset-wine-dark"
                    aria-label={isPlaying ? "Pausar música" : "Tocar música"}
                  >
                    {isPlaying ? <Pause className="w-6 h-6 sm:w-7 sm:h-7 fill-current" /> : <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />}
                  </button>
                  
                  <button 
                    onClick={toggleMute}
                    className="w-12 h-12 flex items-center justify-center text-cream-aged/60 hover:text-cream-aged transition-colors focus:outline-none focus:ring-2 focus:ring-orange-burnt focus:ring-offset-2 focus:ring-offset-wine-dark rounded-full"
                    aria-label={isMuted ? "Ativar som" : "Desativar som"}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" /> : <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />}
                  </button>
                </div>
                
                <audio 
                  ref={audioRef} 
                  src={siteConfig.audioSrc} 
                  preload="metadata"
                  controlsList="nodownload noplaybackrate"
                  onError={() => setHasError(true)}
                />
              </div>
            )}
          </div>
        </div>
        
        {hasAudio && (
          <div className="mt-8 text-center px-4 relative z-10">
            <p className="text-[12px] sm:text-[13px] text-cream-aged/40 font-quote">
              Conteúdo antecipado. Pedimos que não compartilhe a música integralmente antes do lançamento.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
