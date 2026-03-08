import { Label } from "@/components/ui/label";
import { Palette, Maximize } from "lucide-react";

interface QRCustomizerProps {
  fgColor: string;
  bgColor: string;
  size: number;
  onFgChange: (c: string) => void;
  onBgChange: (c: string) => void;
  onSizeChange: (s: number) => void;
}

const sizes = [
  { label: "Small", value: 150 },
  { label: "Medium", value: 256 },
  { label: "Large", value: 400 },
];

const QRCustomizer = ({ fgColor, bgColor, size, onFgChange, onBgChange, onSizeChange }: QRCustomizerProps) => {
  return (
    <div className="space-y-5">
      <h2 className="font-heading text-xl font-bold text-foreground flex items-center gap-2">
        <Palette className="h-5 w-5 text-secondary" />
        Customize
      </h2>

      <div className="flex gap-6">
        <div className="space-y-1.5">
          <Label className="text-sm text-muted-foreground">QR Color</Label>
          <div className="relative">
            <input
              type="color"
              value={fgColor}
              onChange={(e) => onFgChange(e.target.value)}
              className="w-12 h-12 rounded-xl border-2 border-border cursor-pointer appearance-none bg-transparent [&::-webkit-color-swatch-wrapper]:p-1 [&::-webkit-color-swatch]:rounded-lg"
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-sm text-muted-foreground">Background</Label>
          <div className="relative">
            <input
              type="color"
              value={bgColor}
              onChange={(e) => onBgChange(e.target.value)}
              className="w-12 h-12 rounded-xl border-2 border-border cursor-pointer appearance-none bg-transparent [&::-webkit-color-swatch-wrapper]:p-1 [&::-webkit-color-swatch]:rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-sm text-muted-foreground flex items-center gap-1.5">
          <Maximize className="h-3.5 w-3.5" />
          Download Size
        </Label>
        <div className="flex gap-2">
          {sizes.map((s) => (
            <button
              key={s.value}
              onClick={() => onSizeChange(s.value)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                size === s.value
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QRCustomizer;
