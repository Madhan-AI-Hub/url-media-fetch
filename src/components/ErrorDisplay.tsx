import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ErrorDisplayProps {
  error: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorDisplay = ({ error, onRetry, className }: ErrorDisplayProps) => {
  return (
    <Card className={cn("w-full max-w-2xl mx-auto glass-effect animate-fade-in", className)}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="rounded-full bg-destructive/10 p-3">
            <AlertCircle className="h-8 w-8 text-destructive" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              Unable to fetch media
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">
              {error}
            </p>
          </div>

          {onRetry && (
            <Button
              onClick={onRetry}
              variant="outline"
              className="hover-lift"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
          )}

          <div className="text-xs text-muted-foreground space-y-1">
            <p>Make sure the URL is:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>From a supported platform</li>
              <li>Publicly accessible or your own content</li>
              <li>A valid media link</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};