const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12 px-6 md:px-12" id="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
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
            <p className="text-foreground/80 text-sm mb-1">Tel: 044 482 02 91</p>
            <p className="text-muted-foreground text-sm">Mo–Fr 09:00–19:00 | Sa 08:00–18:00</p>
          </div>

          {/* Links */}
          <nav className="flex items-center justify-center md:justify-end gap-6 md:gap-8">
            <a
              href="/impressum"
              className="text-muted-foreground hover:text-gold transition-colors text-sm"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="text-muted-foreground hover:text-gold transition-colors text-sm"
            >
              Datenschutz
            </a>
          </nav>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm font-light">
            © {currentYear} Coiffeur Styl. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
