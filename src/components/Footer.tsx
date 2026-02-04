const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <p className="font-display text-2xl md:text-3xl tracking-widest text-gold">
            COIFFEUR STYL
          </p>

          {/* Links */}
          <nav className="flex items-center gap-6 md:gap-8">
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

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm font-light">
            © {currentYear} Coiffeur Styl. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
