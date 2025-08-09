import { Shield, AlertTriangle, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const DisclaimerSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="glass-effect">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-primary/10 p-2 flex-shrink-0">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Legal Notice</h3>
              <p className="text-sm text-muted-foreground">
                This service is intended for personal use only. Download content that you own 
                or that is in the public domain. Respect copyright laws and platform terms of service.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Card className="glass-effect">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-foreground">Supported Content</h4>
                <p className="text-xs text-muted-foreground">
                  Public posts, your own content, and copyright-free material only.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <FileText className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-foreground">Terms of Use</h4>
                <p className="text-xs text-muted-foreground">
                  By using this service, you agree to respect all applicable laws and regulations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};