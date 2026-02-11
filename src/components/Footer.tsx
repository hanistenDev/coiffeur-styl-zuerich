const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-8 sm:py-12 px-4 sm:px-6 md:px-12" id="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <p className="font-display text-2xl md:text-3xl tracking-widest text-gold mb-2">
              COIFFEUR STYL
            </p>
            <p className="text-muted-foreground text-sm italic">
              „Schöner gehen als kommen"
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <p className="text-foreground/80 text-sm mb-1">Albisstrasse 110, 8038 Zürich</p>
            <p className="text-foreground/80 text-sm mb-1">Tel: +41 79 779 17 30</p>
            <p className="text-muted-foreground text-sm">Mo–Fr 09:00–19:00 | Sa 08:00–18:00</p>
          </div>

          {/* Social / Links */}
          <div className="flex items-center justify-center md:justify-end gap-6 md:gap-8">
            <a
              href="https://www.instagram.com/coiffeur.styl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors text-sm"
            >
              Instagram
            </a>
            <a
              href="https://www.fresha.com/book-now/coiffeur-styl-kw6qvof5/services?lid=2880902&eid=5092150&share=true&pId=2785542"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors text-sm"
            >
              Termin buchen
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-6 sm:pt-8 flex flex-col items-center gap-3">
          <p className="text-muted-foreground text-sm font-light">
            © {currentYear} Coiffeur Styl. Alle Rechte vorbehalten.
          </p>
          <p className="text-muted-foreground/50 text-xs font-light">
            Website by{" "}
            <a
              href="https://hanistendev.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/70 hover:text-gold transition-colors duration-300"
            >
              Hanisten
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
