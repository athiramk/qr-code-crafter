import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Globe } from "lucide-react";

interface URLFormProps {
  url: string;
  onChange: (url: string) => void;
}

const URLForm = ({ url, onChange }: URLFormProps) => {
  return (
    <div className="space-y-4">
      <h2 className="font-heading text-xl font-bold text-foreground">Link Details</h2>
      <div className="space-y-1.5">
        <Label htmlFor="url" className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
          <Globe className="h-3.5 w-3.5" />
          URL
        </Label>
        <Input
          id="url"
          type="url"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => onChange(e.target.value)}
          className="rounded-xl border-border bg-muted/50 focus:bg-card transition-colors"
        />
      </div>
      <p className="text-xs text-muted-foreground">
        Enter any URL — website, social media profile, video, document, etc.
      </p>
    </div>
  );
};

export default URLForm;
