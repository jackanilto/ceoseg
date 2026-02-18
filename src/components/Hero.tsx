import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="CEO Corretora de Seguros"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
        {/* Decorative overlay pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(45 90% 55%) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Gold accent lines */}
      <div className="absolute left-0 top-1/4 w-1 h-32 bg-gradient-gold rounded-r-full opacity-70" />
      <div className="absolute left-0 top-1/4 mt-36 w-1 h-16 bg-gradient-gold rounded-r-full opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="font-body text-gold-light text-sm font-medium tracking-wide">
              CEO Corretora de Seguros
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-background font-bold leading-tight mb-6">
            Boas mãos para{" "}
            <span className="text-gold italic">uma boa vida</span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-background/80 text-lg md:text-xl leading-relaxed mb-4">
            De seguro auto a seguro de vida, encontre a melhor opção na CEOSEG.
          </p>
          <p className="font-body text-background/65 text-base leading-relaxed mb-10">
            Oferecemos seguros para imóveis residenciais e comerciais, automóvel,
            cargas, vida e outros para você que quer proteger o seu patrimônio.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="http://ceoseg.aggilizador.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-foreground font-body font-bold px-8 py-4 rounded-xl text-base hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-gold"
            >
              Fazer Cotação Gratuita
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="https://wa.me/5522997880606"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-background/10 border border-background/30 backdrop-blur-sm text-background font-body font-semibold px-8 py-4 rounded-xl text-base hover:bg-background/20 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 flex items-center gap-8 pt-8 border-t border-background/20">
            {[
              { value: "10+", label: "Anos de experiência" },
              { value: "12", label: "Seguradoras parceiras" },
              { value: "24h", label: "Atendimento" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl font-bold text-gold">{stat.value}</div>
                <div className="font-body text-xs text-background/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="hsl(210 20% 98%)"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
