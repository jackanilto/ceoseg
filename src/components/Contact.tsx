import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

const WhatsAppCTA = () => {
  return (
    <section className="py-20 bg-gradient-navy relative overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(45 90% 55%) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-gold/20" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border border-gold/10" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
        </div>

        <h2 className="font-display text-4xl md:text-5xl text-background font-bold mb-4">
          Deixe-nos cuidar do seu{" "}
          <span className="text-gold italic">patrimônio</span>
        </h2>
        <p className="font-body text-background/70 text-lg mb-8 max-w-xl mx-auto">
          Fale com um especialista agora mesmo. Atendimento 24 horas, todos os dias da semana.
        </p>

        <a
          href="https://wa.me/5522997880606"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-background font-body font-bold px-10 py-4 rounded-2xl text-lg transition-all duration-200 hover:scale-105 shadow-lg"
        >
          <MessageCircle size={24} />
          (22) 99788-0606
        </a>

        <div className="mt-4 flex items-center justify-center gap-2 text-background/50">
          <Clock size={14} />
          <span className="font-body text-sm">Disponível 24 horas, 7 dias por semana</span>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-gold" />
            <span className="font-body text-primary/70 text-sm font-medium tracking-wide">
              Fale Conosco
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground font-bold mb-4">
            Encontre um{" "}
            <span className="text-gold italic">agente de seguros</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-lg mx-auto">
            Ligue-nos a qualquer hora. Estamos prontos para atender você e encontrar a melhor solução.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact info */}
          <div className="space-y-6">
            {[
              {
                icon: Phone,
                title: "Telefone / WhatsApp",
                content: "(22) 99788-0606",
                link: "https://wa.me/5522997880606",
                color: "bg-green-500/10 text-green-600",
              },
              {
                icon: MapPin,
                title: "Endereço",
                content: "R. Dez de Maio, 500 – 8º andar, Sala 806 – Centro\nItaperuna – RJ, 28300-000",
                link: "https://maps.google.com/?q=Rua+Dez+de+Maio+500+Itaperuna+RJ",
                color: "bg-primary/10 text-primary",
              },
              {
                icon: Clock,
                title: "Horário de Atendimento",
                content: "24 horas por dia, 7 dias por semana\nAtendimento via WhatsApp sempre disponível",
                link: null,
                color: "bg-gold/20 text-amber-700",
              },
            ].map((item) => {
              const Icon = item.icon;
              const Wrapper = item.link ? "a" : "div";
              return (
                <Wrapper
                  key={item.title}
                  {...(item.link ? { href: item.link, target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl hover:border-primary/20 hover:shadow-card transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="font-body text-sm text-muted-foreground whitespace-pre-line leading-relaxed">{item.content}</p>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          {/* Agent image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://ceoseg.com.br/wp-content/uploads/2024/08/agente-ceoseg-1024x512.jpg"
                alt="Agente CEO Corretora de Seguros"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-background text-xl font-bold mb-2">
                  Encontre um agente de seguros
                </p>
                <a
                  href="https://wa.me/5522997880606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-gold text-foreground font-body font-bold px-5 py-2.5 rounded-lg text-sm hover:opacity-90 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground">Status</p>
                  <p className="font-body text-sm font-semibold text-foreground">Online agora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { WhatsAppCTA, Contact };
