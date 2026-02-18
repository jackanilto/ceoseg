import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img
              src="https://ceoseg.com.br/wp-content/uploads/2024/08/logo-CEO-200x200-1.png"
              alt="CEO Corretora de Seguros"
              className="h-16 w-auto mb-5"
            />
            <p className="font-body text-background/60 text-sm leading-relaxed max-w-xs">
              A CEO Corretora de Seguros oferece as melhores soluções em seguros para proteger o que você mais valoriza.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base font-semibold text-gold mb-5">Nossos Seguros</h4>
            <ul className="space-y-3">
              {["Seguro de Vida", "Seguro Auto", "Seguro Residência", "Seguro Carga", "Seguro Empresa", "Seguro Viagem"].map((item) => (
                <li key={item}>
                  <a
                    href="http://ceoseg.aggilizador.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-background/60 hover:text-gold transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/50 flex-shrink-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold text-gold mb-5">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/5522997880606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/60 hover:text-gold transition-colors group"
                >
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors">
                    <Phone size={14} className="text-green-400" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-background/40">WhatsApp 24h</p>
                    <p className="font-body text-sm font-medium">(22) 99788-0606</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Rua+Dez+de+Maio+500+Itaperuna+RJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-background/60 hover:text-gold transition-colors group"
                >
                  <div className="w-8 h-8 bg-primary/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/40 transition-colors">
                    <MapPin size={14} className="text-background/70" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-background/40">Endereço</p>
                    <p className="font-body text-sm">R. Dez de Maio, 500 – 8º andar</p>
                    <p className="font-body text-sm">Sala 806 – Centro</p>
                    <p className="font-body text-sm">Itaperuna – RJ, 28300-000</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-background/40">
            © {currentYear} CEO Corretora de Seguros. Todos os direitos reservados.
          </p>
          <a
            href="http://ceoseg.aggilizador.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-gold hover:text-gold-light transition-colors font-semibold"
          >
            Fazer Cotação Online →
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
