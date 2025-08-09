import { Loader2, Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  className?: string;
  message?: string;
}

export const LoadingSpinner = ({ className, message = "Analyzing URL..." }: LoadingSpinnerProps) => {
  return (
    <div className={cn("flex flex-col items-center justify-center p-8 space-y-4", className)}>
      <div className="relative">
        <div className="animate-pulse-glow rounded-full bg-primary/20 p-4">
          <Download className="h-8 w-8 text-primary" />
        </div>
        <Loader2 className="absolute inset-0 h-16 w-16 animate-spin text-primary/30" />
      </div>
      <div className="text-center space-y-2">
        <p className="text-lg font-medium text-foreground">{message}</p>
        <p className="text-sm text-muted-foreground">
          Fetching media information...
        </p>
      </div>
    </div>
  );
};