import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Carlos Eduardo Souza",
    role: "Empresário, Itaperuna – RJ",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Contratei o seguro da minha empresa pela CEO Corretora e fui surpreendido pela agilidade e qualidade no atendimento. Em menos de 24 horas tive minha apólice em mãos. Recomendo a todos!",
  },
  {
    name: "Ana Paula Ferreira",
    role: "Professora, Italva – RJ",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Quando precisei acionar o seguro do meu carro, a equipe da CEO me orientou em tudo. Um atendimento humano e eficiente que faz toda a diferença em momentos difíceis.",
  },
  {
    name: "Rodrigo Nascimento",
    role: "Médico, Itaperuna – RJ",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 5,
    text: "Já contratei seguros de vida, residência e do consultório pela CEO. Sempre com as melhores condições do mercado e atendimento impecável. São meus corretores de confiança há anos.",
  },
  {
    name: "Fernanda Lima",
    role: "Advogada, Natividade – RJ",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 5,
    text: "Profissionais sérios e comprometidos. Me ajudaram a encontrar o seguro de vida ideal para a minha família, com uma cotação transparente e sem letra miúda. Excelente trabalho!",
  },
  {
    name: "Marcelo Tavares",
    role: "Comerciante, Bom Jesus do Itabapoana – RJ",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    text: "O seguro de carga que contratei pela CEO me salvou de um grande prejuízo. Eles trabalham com as melhores seguradoras e têm um preço justo. Vale cada centavo investido.",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "text-gold fill-gold" : "text-muted-foreground/30"}
      />
    ))}
  </div>
);

const Testimonials = () => {
  const header = useScrollReveal();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const go = (dir: number) => {
    setDirection(dir);
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3 },
    }),
  };

  const t = testimonials[current];

  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={header.ref}
          initial={{ opacity: 0, y: 30 }}
          animate={header.isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-gold" />
            <span className="font-body text-primary/70 text-sm font-medium tracking-wide">
              Depoimentos
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground font-bold mb-4">
            O que nossos{" "}
            <span className="text-gold italic">clientes dizem</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior patrimônio. Veja o que eles falam sobre a CEO Corretora.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-card border border-border rounded-3xl p-10 shadow-card"
              >
                {/* Quote icon */}
                <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center mb-6">
                  <Quote size={22} className="text-primary/40" />
                </div>

                {/* Review text */}
                <p className="font-body text-foreground/80 text-lg leading-relaxed mb-8 italic">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-border"
                  />
                  <div className="flex-1">
                    <p className="font-display text-base font-semibold text-foreground">{t.name}</p>
                    <p className="font-body text-sm text-muted-foreground">{t.role}</p>
                    <div className="mt-1.5">
                      <StarRating rating={t.rating} />
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 bg-gold/10 border border-gold/20 rounded-xl px-3 py-2">
                    <Star size={14} className="text-gold fill-gold" />
                    <span className="font-body text-sm font-bold text-gold">5.0</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={() => go(-1)}
            aria-label="Depoimento anterior"
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-11 h-11 bg-card border border-border rounded-full flex items-center justify-center shadow-card hover:border-primary/30 hover:shadow-md transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft size={20} className="text-foreground/60" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Próximo depoimento"
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-11 h-11 bg-card border border-border rounded-full flex items-center justify-center shadow-card hover:border-primary/30 hover:shadow-md transition-all duration-200 hover:scale-110"
          >
            <ChevronRight size={20} className="text-foreground/60" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setIsAutoPlaying(false);
                setCurrent(i);
                setTimeout(() => setIsAutoPlaying(true), 5000);
              }}
              aria-label={`Ir para depoimento ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2.5 bg-gold"
                  : "w-2.5 h-2.5 bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 grid grid-cols-3 gap-6 max-w-lg mx-auto text-center"
        >
          {[
            { value: "5.0", label: "Avaliação média" },
            { value: "500+", label: "Clientes ativos" },
            { value: "98%", label: "Satisfação" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-2xl p-5">
              <div className="font-display text-2xl font-bold text-gold">{stat.value}</div>
              <div className="font-body text-xs text-muted-foreground mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
