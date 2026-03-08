import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Phone, Mail, Building2, Globe, MapPin } from "lucide-react";

export interface VCardData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  company: string;
  jobTitle: string;
  website: string;
  address: string;
}

interface VCardFormProps {
  data: VCardData;
  onChange: (data: VCardData) => void;
}

const fields: { key: keyof VCardData; label: string; icon: typeof User; placeholder: string; type?: string }[] = [
  { key: "firstName", label: "First Name", icon: User, placeholder: "John" },
  { key: "lastName", label: "Last Name", icon: User, placeholder: "Doe" },
  { key: "phone", label: "Phone", icon: Phone, placeholder: "+1 234 567 890", type: "tel" },
  { key: "email", label: "Email", icon: Mail, placeholder: "john@example.com", type: "email" },
  { key: "company", label: "Company", icon: Building2, placeholder: "Acme Inc." },
  { key: "jobTitle", label: "Job Title", icon: Building2, placeholder: "Software Engineer" },
  { key: "website", label: "Website", icon: Globe, placeholder: "https://example.com", type: "url" },
  { key: "address", label: "Address", icon: MapPin, placeholder: "123 Main St, City" },
];

const VCardForm = ({ data, onChange }: VCardFormProps) => {
  const update = (key: string, value: string) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <div className="space-y-4">
      <h2 className="font-heading text-xl font-bold text-foreground">Contact Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map(({ key, label, icon: Icon, placeholder, type }) => (
          <div key={key} className="space-y-1.5">
            <Label htmlFor={key} className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
              <Icon className="h-3.5 w-3.5" />
              {label}
            </Label>
            <Input
              id={key}
              type={(type as string) || "text"}
              placeholder={placeholder}
              value={data[key as keyof VCardData]}
              onChange={(e) => update(key, e.target.value)}
              className="rounded-xl border-border bg-muted/50 focus:bg-card transition-colors"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VCardForm;
