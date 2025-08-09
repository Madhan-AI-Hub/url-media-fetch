import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBoxProps {
  onSearch: (url: string) => void;
  isLoading: boolean;
  className?: string;
}

export const SearchBox = ({ onSearch, isLoading, className }: SearchBoxProps) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onSearch(url.trim());
    }
  };

  return (
    <div className={cn("w-full max-w-2xl mx-auto", className)}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="url"
            placeholder="Paste URL from Instagram, YouTube, Facebook, etc..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="pl-12 pr-32 h-14 text-lg glass-effect border-border/50 focus:border-primary focus:ring-primary/20"
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={!url.trim() || isLoading}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 hero-gradient hover:opacity-90 transition-opacity"
          >
            <Download className="h-4 w-4 mr-2" />
            {isLoading ? "Fetching..." : "Download"}
          </Button>
        </div>
      </form>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
          Supports Instagram, YouTube, Facebook, TikTok, and more
        </p>
      </div>
    </div>
  );
};