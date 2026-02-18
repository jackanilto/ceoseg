import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Seguradoras", href: "#parceiros" },
  { label: "Contato", href: "#contato" }];


  return (
    <>
      {/* Top bar */}
      <div className="bg-foreground text-background text-sm py-2 px-4 hidden md:flex items-center justify-between">
        <span className="font-body opacity-80">
          Rua 10 de Maio, nº 500 – 8 andar – Sala 806, Itaperuna – RJ
        </span>
        <a
          href="https://wa.me/5522997880606"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gold font-semibold hover:opacity-80 transition-opacity">

          <Phone size={14} />
          (22) 99788-0606
        </a>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ?
        "bg-foreground/95 backdrop-blur-md shadow-lg" :
        "bg-foreground"}`
        }>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-3 group">
              <img

                alt="CEO Corretora de Seguros"
                className="h-14 w-auto object-contain" src="/lovable-uploads/1cfe2420-cb97-4481-91ef-1e5e1387469b.webp" />

            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
              <a
                key={link.label}
                href={link.href}
                className="font-body font-medium text-background/80 hover:text-gold transition-colors duration-200 text-sm uppercase tracking-wider">

                  {link.label}
                </a>
              )}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="http://ceoseg.aggilizador.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-gold text-foreground font-body font-bold px-6 py-2.5 rounded-lg text-sm hover:opacity-90 transition-all duration-200 shadow-gold hover:scale-105">

                Fazer Cotação
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-background p-2"
              onClick={() => setMobileOpen(!mobileOpen)}>

              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen &&
        <div className="md:hidden bg-foreground border-t border-background/10 px-4 pb-4">
            {navLinks.map((link) =>
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="block py-3 font-body font-medium text-background/80 hover:text-gold border-b border-background/10 text-sm uppercase tracking-wider">

                {link.label}
              </a>
          )}
            <a
            href="http://ceoseg.aggilizador.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 bg-gradient-gold text-foreground font-bold text-center px-6 py-3 rounded-lg text-sm">

              Fazer Cotação
            </a>
          </div>
        }
      </nav>
    </>);

};

export default Navbar;