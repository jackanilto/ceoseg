import { Heart, Car, Home, Package, Building2, Plane } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Seguro de Vida",
    description:
      "Quanto vale a tranquilidade da sua família? Proteja quem você mais ama com o seguro de vida ideal.",
    color: "from-rose-500/10 to-rose-600/5",
    iconColor: "text-rose-500",
    iconBg: "bg-rose-500/10",
  },
  {
    icon: Car,
    title: "Seguro Auto",
    description:
      "Seu veículo é parte essencial da sua rotina. Garanta a segurança e tranquilidade ao dirigir com o seguro auto.",
    color: "from-blue-500/10 to-blue-600/5",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/10",
  },
  {
    icon: Home,
    title: "Seguro Residência",
    description:
      "Sua casa é seu refúgio. Proteja seu lar com o seguro residência, em todos os momentos.",
    color: "from-emerald-500/10 to-emerald-600/5",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-500/10",
  },
  {
    icon: Package,
    title: "Seguro Carga",
    description:
      "Transporte suas mercadorias com confiança. Oferecemos seguro de carga para proteger seu negócio de imprevistos.",
    color: "from-amber-500/10 to-amber-600/5",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-500/10",
  },
  {
    icon: Building2,
    title: "Seguro Empresa",
    description:
      "Seu negócio é seu maior patrimônio. Com nosso seguro empresa, você foca no crescimento enquanto nós cuidamos da segurança.",
    color: "from-indigo-500/10 to-indigo-600/5",
    iconColor: "text-indigo-500",
    iconBg: "bg-indigo-500/10",
  },
  {
    icon: Plane,
    title: "Seguro Viagem",
    description:
      "Aproveite suas viagens ao máximo, sem preocupações. Proteja sua jornada com nosso seguro viagem e viaje tranquilo.",
    color: "from-sky-500/10 to-sky-600/5",
    iconColor: "text-sky-500",
    iconBg: "bg-sky-500/10",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-gold" />
            <span className="font-body text-primary/70 text-sm font-medium tracking-wide">
              Nossos Serviços
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground font-bold mb-4">
            Proteção para cada{" "}
            <span className="text-gold italic">momento da sua vida</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Escolha o seguro que melhor atende à sua necessidade. Trabalhamos
            com as melhores seguradoras do mercado para garantir sua proteção.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 shadow-card hover:shadow-lg cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

                <div className="relative z-10">
                  <div className={`w-14 h-14 ${service.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`${service.iconColor} w-7 h-7`} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <a
                    href="http://ceoseg.aggilizador.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-gold hover:text-gold-dark transition-colors font-body"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Fazer cotação
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-navy rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(45 90% 55%) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }} />
          <div className="relative z-10">
            <h3 className="font-display text-3xl text-background font-bold mb-3">
              Não encontrou o que procura?
            </h3>
            <p className="font-body text-background/70 mb-6 max-w-lg mx-auto">
              Entre em contato conosco e encontraremos a melhor solução de seguro para você.
            </p>
            <a
              href="https://wa.me/5522997880606"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-gold text-foreground font-body font-bold px-8 py-3.5 rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-gold"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar com um especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
