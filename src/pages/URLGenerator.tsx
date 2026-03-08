import { useState } from "react";
import URLForm from "@/components/URLForm";
import URLQRPreview from "@/components/URLQRPreview";
import QRCustomizer from "@/components/QRCustomizer";
import { Link as LinkIcon, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const URLGenerator = () => {
  const [url, setUrl] = useState("");
  const [fgColor, setFgColor] = useState("#4a3a8a");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [size, setSize] = useState(256);

  return (
    <div className="min-h-screen bg-background">
      <header className="py-8 text-center">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="p-3 rounded-2xl bg-secondary/10">
            <LinkIcon className="h-8 w-8 text-secondary" />
          </div>
          <h1 className="font-heading text-4xl font-extrabold text-foreground tracking-tight">
            URL QR Code
          </h1>
        </div>
        <p className="text-muted-foreground font-medium max-w-md mx-auto">
          Generate a QR code that opens any link when scanned
        </p>
      </header>

      <main className="container max-w-5xl pb-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="rounded-2xl bg-card p-6 shadow-card">
              <URLForm url={url} onChange={setUrl} />
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-card">
              <QRCustomizer
                fgColor={fgColor}
                bgColor={bgColor}
                size={size}
                onFgChange={setFgColor}
                onBgChange={setBgColor}
                onSizeChange={setSize}
              />
            </div>
          </div>

          <div className="lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-2xl bg-card p-8 shadow-card flex justify-center">
              <URLQRPreview url={url} fgColor={fgColor} bgColor={bgColor} size={size} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default URLGenerator;
