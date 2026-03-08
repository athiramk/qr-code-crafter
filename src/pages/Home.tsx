import { Link } from "react-router-dom";
import { QrCode, Contact, Link as LinkIcon, Github } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="pt-16 pb-10 text-center px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3.5 rounded-2xl bg-primary/10">
            <QrCode className="h-9 w-9 text-primary" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            QR Code Crafter
          </h1>
        </div>
        <p className="text-muted-foreground font-medium text-lg max-w-lg mx-auto leading-relaxed">
          Generate beautiful, customizable QR codes for contacts and links — free and instant.
        </p>
      </header>

      {/* Cards */}
      <main className="container max-w-3xl px-4 pb-20 flex-1">
        <h2 className="font-heading text-sm font-bold text-muted-foreground uppercase tracking-widest text-center mb-6">
          Choose a QR type
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            to="/contact"
            className="group rounded-2xl bg-card border border-border/50 p-8 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 flex flex-col items-center gap-5 text-center"
          >
            <div className="p-5 rounded-2xl bg-primary/10 group-hover:bg-primary/15 transition-colors duration-300">
              <Contact className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-1.5">Contact Card</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Share your name, phone, email & more via a scannable vCard QR code
              </p>
            </div>
            <span className="text-xs font-semibold text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
              vCard 3.0
            </span>
          </Link>

          <Link
            to="/url"
            className="group rounded-2xl bg-card border border-border/50 p-8 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 flex flex-col items-center gap-5 text-center"
          >
            <div className="p-5 rounded-2xl bg-secondary/10 group-hover:bg-secondary/15 transition-colors duration-300">
              <LinkIcon className="h-10 w-10 text-secondary" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-1.5">Hyperlink</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Turn any URL into a QR code — websites, social profiles, videos & more
              </p>
            </div>
            <span className="text-xs font-semibold text-secondary/80 bg-secondary/10 px-3 py-1 rounded-full">
              Any URL
            </span>
          </Link>
        </div>

        {/* Features strip */}
        <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">✨ Customizable colors</span>
          <span className="flex items-center gap-1.5">📐 Multiple sizes</span>
          <span className="flex items-center gap-1.5">⬇️ PNG download</span>
          <span className="flex items-center gap-1.5">🔒 No data stored</span>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-6 text-center">
        <p className="text-xs text-muted-foreground">
          Built with ❤️ · Open source on{" "}
          <a
            href="https://github.com/athiramk/qr-code-crafter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:underline"
          >
            <Github className="h-3 w-3" />
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
