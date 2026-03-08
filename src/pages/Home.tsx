import { Link } from "react-router-dom";
import { QrCode, Contact, Link as LinkIcon } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="py-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="p-3 rounded-2xl bg-primary/10">
            <QrCode className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-heading text-4xl font-extrabold text-foreground tracking-tight">
            QR Code Crafter
          </h1>
        </div>
        <p className="text-muted-foreground font-medium max-w-md mx-auto">
          Generate beautiful QR codes for contacts and links in seconds
        </p>
      </header>

      {/* Cards */}
      <main className="container max-w-3xl px-4 pb-16 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            to="/contact"
            className="group rounded-2xl bg-card p-8 shadow-card hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col items-center gap-4 text-center"
          >
            <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Contact className="h-10 w-10 text-primary" />
            </div>
            <h2 className="font-heading text-xl font-bold text-foreground">Contact Card</h2>
            <p className="text-sm text-muted-foreground">
              Create a vCard QR code to share your name, phone, email, and more
            </p>
          </Link>

          <Link
            to="/url"
            className="group rounded-2xl bg-card p-8 shadow-card hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col items-center gap-4 text-center"
          >
            <div className="p-4 rounded-2xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
              <LinkIcon className="h-10 w-10 text-secondary" />
            </div>
            <h2 className="font-heading text-xl font-bold text-foreground">Hyperlink</h2>
            <p className="text-sm text-muted-foreground">
              Generate a QR code that opens any URL when scanned
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
