import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const partners = [
  { name: "Bradesco Seguros", logo: "https://ceoseg.com.br/wp-content/uploads/2024/08/Ceoseg-Bradesco-80x80-1.png" },
  { name: "HDI Seguros", logo: "https://ceoseg.com.br/wp-content/uploads/2024/08/Ceoseg-HDI_Seguros-80x80-1.png" },
  { name: "Itaú Seguros", logo: "https://ceoseg.com.br/wp-content/uploads/2024/08/Ceoseg-Itau-80x80-1.png" },
  { name: "Liberty Seguros", logo: "https://ceoseg.com.br/wp-content/uploads/2024/08/Ceoseg-Liberty-80x80-1.png" },
  { name: "MAPFRE Seguros", logo: "https://ceoseg.com.br/wp-content/uploads/2024/08/Ceoseg-Mafre-80x80-1.png" },
  { name: "Porto Seguro", logo: "https://ceoseg.com.br/wp-content/uploads/2024/08/Ceoseg-Porto-80x80-1.png" },
  { name: "Suhai Seguros", logo: "https://ceoseg.com.br/wp-content/uploads/2024/08/Ceoseg-suhai-80x80-1.png" },
  { name: "SulAmérica Seguros", logo: "https://ceoseg.com.br/wp-content/uploads/2024/08/Ceoseg-SulAmerica-80x80-1.png" },
  { name: "Tokio Marine", logo: "https://ceoseg.com.br/wp-content/uploads/2024/08/Ceoseg-TokioMarine-80x80-1.png" },
  { name: "Zurich Seguros", logo: "https://ceoseg.com.br/wp-content/uploads/2024/08/Ceoseg-Zurich-80x80-1.png" },
  { name: "Allianz Seguros", logo: "https://ceoseg.com.br/wp-content/uploads/2024/08/Ceoseg-Allians-seg-80x80-1.png" },
  { name: "Azul Seguros", logo: "https://ceoseg.com.br/wp-content/uploads/2024/08/Ceoseg-Azul-80x80-1.png" },
];

const Partners = () => {
  const header = useScrollReveal();
  const footer = useScrollReveal();
  const doubled = [...partners, ...partners];

  return (
    <section id="parceiros" className="py-24 bg-secondary/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          ref={header.ref}
          initial={{ opacity: 0, y: 30 }}
          animate={header.isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-gold" />
            <span className="font-body text-primary/70 text-sm font-medium tracking-wide">
              Nossas Parceiras
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground font-bold mb-4">
            As melhores{" "}
            <span className="text-gold italic">seguradoras do Brasil</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Trabalhamos com as principais seguradoras do mercado para oferecer
            a melhor cobertura com o melhor custo-benefício para você.
          </p>
        </motion.div>
      </div>

      {/* Scrolling carousel — fullwidth but clipped */}
      <div className="relative w-full overflow-hidden">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-secondary/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary/80 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-scroll" style={{ width: "max-content" }}>
          {doubled.map((partner, index) => (
            <a
              key={`${partner.name}-${index}`}
              href="http://ceoseg.aggilizador.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 group"
            >
              <div className="bg-card rounded-2xl p-6 w-36 h-36 flex flex-col items-center justify-center gap-2 border border-border hover:border-primary/20 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0"
                />
                <span className="font-body text-xs text-muted-foreground text-center leading-tight">
                  {partner.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Count */}
      <motion.div
        ref={footer.ref}
        initial={{ opacity: 0 }}
        animate={footer.isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center"
      >
        <p className="font-body text-muted-foreground text-sm">
          <span className="font-bold text-primary">{partners.length} seguradoras</span>{" "}
          parceiras para oferecer a melhor cobertura
        </p>
      </motion.div>
    </section>
  );
};

export default Partners;
