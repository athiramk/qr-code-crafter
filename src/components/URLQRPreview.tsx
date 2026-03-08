import { QRCodeCanvas } from "qrcode.react";
import { useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Download, Sparkles } from "lucide-react";

interface URLQRPreviewProps {
  url: string;
  fgColor: string;
  bgColor: string;
  size: number;
}

const URLQRPreview = ({ url, fgColor, bgColor, size }: URLQRPreviewProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const hasData = url.trim().length > 0;

  const handleDownload = useCallback(() => {
    const canvas = canvasRef.current?.querySelector("canvas");
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `url-qr-${size}px.png`;
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
          value={hasData ? url : "https://example.com"}
          size={size}
          fgColor={fgColor}
          bgColor={bgColor}
          level="M"
          marginSize={2}
        />
      </div>

      {!hasData && (
        <div className="flex flex-col items-center gap-2 animate-pulse">
          <p className="text-sm text-muted-foreground text-center max-w-[220px] hidden lg:block">
            👈 Enter a URL on the left to generate your QR code
          </p>
          <p className="text-sm text-muted-foreground text-center max-w-[220px] lg:hidden">
            ☝️ Enter a URL above to generate your QR code
          </p>
        </div>
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

export default URLQRPreview;
