import { useState } from "react";
import { MediaData } from "@/components/MediaPreview";
import { useToast } from "@/hooks/use-toast";

interface UseMediaFetchReturn {
  media: MediaData | null;
  isLoading: boolean;
  error: string | null;
  fetchMedia: (url: string) => Promise<void>;
  downloadMedia: (format: string) => void;
  reset: () => void;
}

// Mock data for demonstration
const mockMediaData: Record<string, MediaData> = {
  youtube: {
    id: "1",
    title: "Amazing Tech Tutorial - Learn Something New Today",
    thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop",
    duration: "12:34",
    views: "1.2M",
    platform: "YouTube",
    type: "video",
    formats: [
      { format: "MP4", quality: "1080p", size: "45MB" },
      { format: "MP4", quality: "720p", size: "28MB" },
      { format: "MP3", quality: "320kbps", size: "12MB" },
    ],
  },
  instagram: {
    id: "2",
    title: "Beautiful Landscape Photography",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    platform: "Instagram",
    type: "image",
    formats: [
      { format: "JPG", quality: "Original", size: "2.4MB" },
      { format: "JPG", quality: "Compressed", size: "800KB" },
    ],
  },
  default: {
    id: "3",
    title: "Sample Media Content - Demo Video",
    thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=225&fit=crop",
    duration: "8:15",
    views: "324K",
    platform: "TikTok",
    type: "video",
    formats: [
      { format: "MP4", quality: "720p", size: "15MB" },
      { format: "MP3", quality: "128kbps", size: "6MB" },
    ],
  },
};

export const useMediaFetch = (): UseMediaFetchReturn => {
  const [media, setMedia] = useState<MediaData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchMedia = async (url: string) => {
    setIsLoading(true);
    setError(null);
    setMedia(null);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock URL validation and platform detection
      const isValidUrl = url.includes("youtube.com") || 
                        url.includes("instagram.com") || 
                        url.includes("facebook.com") || 
                        url.includes("tiktok.com") ||
                        url.includes("example.com");

      if (!isValidUrl) {
        throw new Error("Unsupported URL or platform. Please check the link and try again.");
      }

      // Mock response based on URL content
      let mockData: MediaData;
      if (url.includes("youtube")) {
        mockData = mockMediaData.youtube;
      } else if (url.includes("instagram")) {
        mockData = mockMediaData.instagram;
      } else {
        mockData = mockMediaData.default;
      }

      setMedia(mockData);
      toast({
        title: "Media found!",
        description: "Media information fetched successfully.",
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to fetch media. Please try again.";
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const downloadMedia = (format: string) => {
    toast({
      title: "Download started",
      description: `Downloading in ${format} format...`,
    });
    
    // In a real implementation, this would trigger the actual download
    // For demo purposes, we'll just show a success message
    setTimeout(() => {
      toast({
        title: "Download complete!",
        description: `Media downloaded successfully in ${format} format.`,
      });
    }, 1500);
  };

  const reset = () => {
    setMedia(null);
    setError(null);
    setIsLoading(false);
  };

  return {
    media,
    isLoading,
    error,
    fetchMedia,
    downloadMedia,
    reset,
  };
};