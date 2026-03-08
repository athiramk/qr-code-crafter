import { useState } from "react";
import VCardForm, { type VCardData } from "@/components/VCardForm";
import QRPreview from "@/components/QRPreview";
import QRCustomizer from "@/components/QRCustomizer";
import { QrCode } from "lucide-react";

const emptyVCard: VCardData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  company: "",
  jobTitle: "",
  website: "",
  address: "",
};

const Index = () => {
  const [data, setData] = useState<VCardData>(emptyVCard);
  const [fgColor, setFgColor] = useState("#4a3a8a");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [size, setSize] = useState(256);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="p-3 rounded-2xl bg-primary/10">
            <QrCode className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-heading text-4xl font-extrabold text-foreground tracking-tight">
            QR Card
          </h1>
        </div>
        <p className="text-muted-foreground font-medium max-w-md mx-auto">
          Create beautiful vCard QR codes to share your contact info instantly
        </p>
      </header>

      {/* Main content */}
      <main className="container max-w-5xl pb-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column: Form + Customizer */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-card p-6 shadow-card">
              <VCardForm data={data} onChange={setData} />
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

          {/* Right column: QR Preview */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-2xl bg-card p-8 shadow-card flex justify-center">
              <QRPreview data={data} fgColor={fgColor} bgColor={bgColor} size={size} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
