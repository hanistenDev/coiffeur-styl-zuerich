const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-xl tracking-widest text-gold">
          COIFFEUR STYL
        </p>
        <p className="text-muted-foreground text-sm font-light">
          © {currentYear} Coiffeur Styl. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
