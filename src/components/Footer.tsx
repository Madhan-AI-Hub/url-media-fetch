import { Mail, Github, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-foreground mb-2">MediaFetch</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Simple, fast, and reliable media downloading for personal use.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hover-lift">
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </Button>
            <Button variant="ghost" size="sm" className="hover-lift">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="h-3 w-3 text-red-500" /> for personal media downloading
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2024 MediaFetch. Use responsibly and respect copyright laws.
          </p>
        </div>
      </div>
    </footer>
  );
};