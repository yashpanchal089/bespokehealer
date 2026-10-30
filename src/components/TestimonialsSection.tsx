import React, { useRef, useState, useEffect } from 'react';
import { Quote, Star, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { testimonialsData, type Testimonial } from '../data/testimonials';

// Dedicated Video Media Player for Testimonial Cards
const VideoFeedbackMedia: React.FC<{
  videoUrl: string;
  posterUrl?: string;
  clientName: string;
  isFullCard?: boolean;
  isPlaying: boolean;
  onTogglePlay: () => void;
}> = ({ videoUrl, posterUrl, clientName, isFullCard = false, isPlaying, onTogglePlay }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.play().catch(() => {
        // Fallback to muted playback if browser policy blocks unmuted autoplay/play
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play();
        }
      });
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    onTogglePlay();
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 1;
    setProgress((current / duration) * 100);
  };

  return (
    <div
      onClick={togglePlay}
      className={`relative w-full overflow-hidden bg-black/90 cursor-pointer group shadow-md select-none flex-1 ${
        isFullCard
          ? 'aspect-[9/15] sm:aspect-[9/16] rounded-3xl h-full'
          : 'aspect-[9/13] rounded-2xl mb-4'
      }`}
      role="button"
      tabIndex={0}
      aria-label={`Play feedback video from ${clientName}`}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          togglePlay(e as unknown as React.MouseEvent);
        }
      }}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        poster={posterUrl}
        playsInline
        loop
        muted={isMuted}
        preload="metadata"
        onEnded={() => onTogglePlay()}
        onTimeUpdate={handleTimeUpdate}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/35 pointer-events-none" />

      {/* Top Floating Controls */}
      <div className="absolute top-3 right-3 z-10">
        <button
          type="button"
          onClick={toggleMute}
          className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:text-white hover:bg-black/80 transition-all border border-white/10 shadow-sm active:scale-95"
          title={isMuted ? "Unmute sound" : "Mute sound"}
          aria-label={isMuted ? "Unmute sound" : "Mute sound"}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Center Animated Play / Pause Control */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 z-10 ${
          isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
        }`}
      >
        <div className="w-14 h-14 rounded-full bg-softCream/90 hover:bg-white text-brandText flex items-center justify-center shadow-2xl transition-transform transform hover:scale-110 border border-secondaryPurple/40 backdrop-blur-sm">
          {isPlaying ? (
            <Pause className="w-5 h-5 fill-current text-mutedPurple" />
          ) : (
            <Play className="w-5 h-5 fill-current text-mutedPurple translate-x-0.5" />
          )}
        </div>
      </div>

      {/* Bottom Floating Client Hint */}
      {!isPlaying && (
        <div className="absolute bottom-3 left-3 right-3 text-center pointer-events-none z-10">
          <span className="text-[11px] text-white/90 font-light tracking-wide drop-shadow-md">
            Tap to watch experience
          </span>
        </div>
      )}

      {/* Video Playback Progress Bar */}
      {isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10 pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-mutedPurple to-secondaryPurple transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};

export const TestimonialsSection: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Helper to render an individual card in either track
  const renderCard = (item: Testimonial, cardKey: string) => {
    const isVideo = item.mediaType === 'video' && Boolean(item.videoUrl);
    const isImage = item.mediaType === 'image' && Boolean(item.imageUrl);

    // Pure Video Feedback Card: Only video (no text, stars, or name below)
    if (isVideo && item.videoUrl) {
      return (
        <div
          key={cardKey}
          className="w-[270px] sm:w-[340px] md:w-[360px] flex-shrink-0 rounded-3xl overflow-hidden bg-black/90 border border-secondaryPurple/40 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
        >
          <VideoFeedbackMedia
            videoUrl={item.videoUrl}
            posterUrl={item.posterUrl}
            clientName={item.clientName}
            isFullCard={true}
            isPlaying={activeVideoId === cardKey}
            onTogglePlay={() => {
              setActiveVideoId(activeVideoId === cardKey ? null : cardKey);
            }}
          />
        </div>
      );
    }

    // Pure Graphic Story Feedback Card (Ananya, Sirender, Tarot Gratitude, Rima)
    if (isImage && item.imageUrl) {
      return (
        <div
          key={cardKey}
          className="w-[270px] sm:w-[340px] md:w-[360px] flex-shrink-0 rounded-3xl overflow-hidden bg-softCream border border-secondaryPurple/40 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group cursor-pointer"
        >
          <div className="relative aspect-[9/15] sm:aspect-[9/16] w-full h-full overflow-hidden bg-softCream">
            <img
              src={item.imageUrl}
              alt={`Feedback from ${item.clientName}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        </div>
      );
    }

    // Text Testimonial Card
    return (
      <div
        key={cardKey}
        className="w-[270px] sm:w-[340px] md:w-[360px] flex-shrink-0 rounded-3xl p-5 sm:p-7 bg-softCream border border-secondaryPurple/40 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
      >
        <div>
          {/* Rating Stars & Quote Icon */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1 text-mutedPurple">
              {[...Array(item.rating || 5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <Quote className="w-5 h-5 text-secondaryPurple/50" />
          </div>

          {/* Highlight Badge */}
          <div className="text-[10px] font-semibold uppercase tracking-wider text-mutedPurple mb-3">
            ✦ {item.highlight}
          </div>

          {/* Testimonial Quote */}
          {item.quote && (
            <p className="font-editorial text-brandText font-light leading-relaxed mb-6 text-base sm:text-xl">
              "{item.quote}"
            </p>
          )}
        </div>

        {/* Client Info Footer */}
        <div className="pt-4 border-t border-secondaryPurple/25 flex items-center justify-between gap-2 mt-auto">
          <div className="min-w-0">
            <h3 className="text-xs sm:text-sm font-semibold text-brandText truncate">
              {item.clientName}
            </h3>
            <p className="text-[11px] sm:text-xs text-brandLightText truncate">
              {item.location} • {item.service}
            </p>
          </div>

          <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-brandLightText bg-warmBeige px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-secondaryPurple/30 font-medium whitespace-nowrap shrink-0">
            {item.durationTogether}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 relative overflow-hidden bg-softCream/40 border-t border-secondaryPurple/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 sm:mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-mutedPurple">
              <span>✦</span>
              <span>Living Sanctuary Stories</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-brandText font-normal">
              1,000+ journeys. Countless stories.
            </h2>
          </div>
        </div>

        {/* Continuous Never-Ending Rolling Marquee Container */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden select-none marquee-container">
          {/* Subtle Ambient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#F5EFE6] via-[#F5EFE6]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#F5EFE6] via-[#F5EFE6]/80 to-transparent z-20 pointer-events-none" />

          {/* Seamless Dual-Track Infinite Loop */}
          <div className="flex w-max">
            {/* Track 1: All 10 Reviews */}
            <div
              className="animate-marquee-track pb-6 pl-4 sm:pl-6 lg:pl-8 items-stretch"
              style={{
                animationPlayState: Boolean(activeVideoId) ? 'paused' : undefined
              }}
            >
              {testimonialsData.map((item, idx) => renderCard(item, `t1-${item.id}-${idx}`))}
            </div>

            {/* Track 2: Identical Twin Track for Seamless Circular Continuation */}
            <div
              className="animate-marquee-track pb-6 pl-4 sm:pl-6 lg:pl-8 items-stretch"
              aria-hidden="true"
              style={{
                animationPlayState: Boolean(activeVideoId) ? 'paused' : undefined
              }}
            >
              {testimonialsData.map((item, idx) => renderCard(item, `t2-${item.id}-${idx}`))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
