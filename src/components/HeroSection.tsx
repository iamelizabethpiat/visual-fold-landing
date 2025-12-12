import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - replace src with your own image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Elegant dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-charcoal/40 via-deep-charcoal/50 to-deep-charcoal/70" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-warm-white mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          The Visual Fold
        </h1>
        
        <p 
          className="font-body text-lg md:text-xl lg:text-2xl text-warm-white/90 font-light leading-relaxed max-w-2xl mx-auto opacity-0 animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          La creatividad necesita estructura y tu marca necesita una estrategia.
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: '1s' }}
      >
        <div className="w-6 h-10 border-2 border-warm-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-warm-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;