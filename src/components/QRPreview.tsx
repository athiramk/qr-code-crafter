import { QRCodeCanvas } from "qrcode.react";
import { useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Download, Sparkles } from "lucide-react";
import type { VCardData } from "./VCardForm";

interface QRPreviewProps {
  data: VCardData;
  fgColor: string;
  bgColor: string;
  size: number;
}

function buildVCard(d: VCardData) {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${d.lastName};${d.firstName};;;`,
    `FN:${d.firstName} ${d.lastName}`,
    d.company ? `ORG:${d.company}` : "",
    d.jobTitle ? `TITLE:${d.jobTitle}` : "",
    d.phone ? `TEL;TYPE=CELL:${d.phone}` : "",
    d.email ? `EMAIL:${d.email}` : "",
    d.website ? `URL:${d.website}` : "",
    d.address ? `ADR;TYPE=HOME:;;${d.address};;;;` : "",
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\n");
}

const QRPreview = ({ data, fgColor, bgColor, size }: QRPreviewProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const vcard = buildVCard(data);
  const hasData = data.firstName || data.lastName || data.phone || data.email;

  const handleDownload = useCallback(() => {
    const canvas = canvasRef.current?.querySelector("canvas");
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `vcard-qr-${size}px.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }, [size]);

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="font-heading text-xl font-bold text-foreground flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-primary" />
        Your QR Code
      </h2>

      <div
        ref={canvasRef}
        className="rounded-2xl p-6 shadow-card bg-card animate-float"
        style={{ background: bgColor }}
      >
        <QRCodeCanvas
          value={hasData ? vcard : "HELLO"}
          size={size}
          fgColor={fgColor}
          bgColor={bgColor}
          level="M"
          marginSize={2}
        />
      </div>

      {!hasData && (
        <p className="text-sm text-muted-foreground text-center max-w-[200px]">
          Fill in your details to generate a personalized QR code ✨
        </p>
      )}

      {hasData && (
        <Button
          onClick={handleDownload}
          className="rounded-xl gap-2 px-6 font-heading font-semibold"
        >
          <Download className="h-4 w-4" />
          Download PNG ({size}×{size})
        </Button>
      )}
    </div>
  );
};

export default QRPreview;
