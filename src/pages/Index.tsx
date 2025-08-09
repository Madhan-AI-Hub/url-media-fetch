import { SearchBox } from "@/components/SearchBox";
import { MediaPreview } from "@/components/MediaPreview";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ErrorDisplay } from "@/components/ErrorDisplay";
import { DisclaimerSection } from "@/components/DisclaimerSection";
import { Footer } from "@/components/Footer";
import { useMediaFetch } from "@/hooks/useMediaFetch";
import { Download, Sparkles } from "lucide-react";

const Index = () => {
  const { media, isLoading, error, fetchMedia, downloadMedia, reset } = useMediaFetch();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-8 mb-16">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="rounded-full hero-gradient p-2">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  MediaFetch
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Download your favorite media content from social platforms with ease
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4" />
                <span>Fast, simple, and reliable</span>
              </div>
            </div>

            <SearchBox 
              onSearch={fetchMedia} 
              isLoading={isLoading}
              className="animate-slide-up"
            />
          </div>

          {/* Content Area */}
          <div className="space-y-8">
            {isLoading && (
              <LoadingSpinner className="animate-fade-in" />
            )}

            {error && (
              <ErrorDisplay 
                error={error} 
                onRetry={reset}
                className="animate-fade-in"
              />
            )}

            {media && !isLoading && !error && (
              <MediaPreview 
                media={media} 
                onDownload={downloadMedia}
                className="animate-slide-up"
              />
            )}
          </div>

          {/* Disclaimer Section */}
          <div className="mt-24">
            <DisclaimerSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
