import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Video, Music, Image, Clock, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MediaData {
  id: string;
  title: string;
  thumbnail: string;
  duration?: string;
  views?: string;
  platform: string;
  type: "video" | "audio" | "image";
  formats: {
    format: string;
    quality: string;
    size?: string;
  }[];
}

interface MediaPreviewProps {
  media: MediaData;
  onDownload: (format: string) => void;
  className?: string;
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case "video":
      return Video;
    case "audio":
      return Music;
    case "image":
      return Image;
    default:
      return Video;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "video":
      return "bg-blue-500";
    case "audio":
      return "bg-green-500";
    case "image":
      return "bg-purple-500";
    default:
      return "bg-blue-500";
  }
};

export const MediaPreview = ({ media, onDownload, className }: MediaPreviewProps) => {
  const TypeIcon = getTypeIcon(media.type);

  return (
    <Card className={cn("w-full max-w-2xl mx-auto glass-effect animate-fade-in", className)}>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Thumbnail */}
          <div className="relative flex-shrink-0">
            <img
              src={media.thumbnail}
              alt={media.title}
              className="w-full md:w-48 h-32 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <TypeIcon className="h-8 w-8 text-white" />
            </div>
            {media.duration && (
              <Badge className="absolute bottom-2 right-2 bg-black/80 text-white border-none">
                <Clock className="h-3 w-3 mr-1" />
                {media.duration}
              </Badge>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className={cn("text-white", getTypeColor(media.type))}>
                  {media.platform}
                </Badge>
                <Badge variant="outline">
                  <TypeIcon className="h-3 w-3 mr-1" />
                  {media.type}
                </Badge>
              </div>
              <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                {media.title}
              </h3>
              {media.views && (
                <p className="text-sm text-muted-foreground flex items-center mt-1">
                  <Eye className="h-3 w-3 mr-1" />
                  {media.views} views
                </p>
              )}
            </div>

            {/* Download Options */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-foreground">Download Options:</h4>
              <div className="flex flex-wrap gap-2">
                {media.formats.map((format, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => onDownload(format.format)}
                    className="hover-lift"
                  >
                    <Download className="h-3 w-3 mr-1" />
                    {format.format} - {format.quality}
                    {format.size && <span className="ml-1 text-xs">({format.size})</span>}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};