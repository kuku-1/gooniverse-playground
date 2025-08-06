import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, Download, Sparkles, Camera, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GoonifyPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [selectedStyle, setSelectedStyle] = useState<string>("meme-lord");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const goonStyles = [
    { id: "meme-lord", name: "Meme Lord", description: "Become the ultimate meme master with legendary status" },
    { id: "retro-gamer", name: "Retro Gamer", description: "80s gaming nostalgia with pixel perfect aesthetics" },
    { id: "ai-cyborg", name: "AI Cyborg", description: "Futuristic cyberpunk enhancement for maximum cool" },
    { id: "pixel-goon", name: "Pixel Goon", description: "Classic 8-bit transformation for true arcade legends" },
    { id: "goon-samurai", name: "Goon Samurai", description: "Honor, blade, and meme mastery combined" },
  ];

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select an image under 10MB",
          variant: "destructive",
        });
        return;
      }

      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setGeneratedImage("");
    }
  };

  const handleGoonify = async () => {
    if (!selectedFile) {
      toast({
        title: "No image selected",
        description: "Please upload an image first",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI processing
    setTimeout(() => {
      // In a real app, this would call an AI service
      setGeneratedImage(previewUrl); // Placeholder - would be the AI-generated result
      setIsGenerating(false);
      toast({
        title: "Goonification Complete!",
        description: `Your ${goonStyles.find(s => s.id === selectedStyle)?.name} transformation is ready!`,
      });
    }, 3000);
  };

  const handleDownload = () => {
    if (generatedImage) {
      // In a real app, this would download the actual generated image
      toast({
        title: "Download Started",
        description: "Your goonified image is downloading...",
      });
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-lg py-2 px-6 bg-gradient-primary">
            <Sparkles className="w-4 h-4 mr-2" />
            AI GOONIFICATION CHAMBER
          </Badge>
          <h1 className="text-5xl md:text-6xl font-orbitron font-black mb-6">
            GOONIFY ME
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload your selfie and transform into the ultimate goon warrior. Choose your style and ascend to legendary status.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload & Preview Section */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary font-orbitron">
                <Camera className="w-5 h-5" />
                Upload Your Image
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Upload Area */}
              <div 
                className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center cursor-pointer hover:border-primary/60 transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                {previewUrl ? (
                  <div className="space-y-4">
                    <img 
                      src={previewUrl} 
                      alt="Preview" 
                      className="max-w-full max-h-64 mx-auto rounded-lg shadow-glow"
                    />
                    <p className="text-sm text-muted-foreground">Click to change image</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="w-16 h-16 mx-auto text-primary/50" />
                    <div>
                      <p className="text-lg font-medium text-foreground">Drop your selfie here</p>
                      <p className="text-sm text-muted-foreground">or click to browse</p>
                    </div>
                  </div>
                )}
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />

              {/* Style Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-orbitron font-bold text-foreground">Choose Your Goon Style</h3>
                <div className="grid grid-cols-1 gap-3">
                  {goonStyles.map((style) => (
                    <div
                      key={style.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        selectedStyle === style.id
                          ? 'border-primary bg-primary/10 shadow-neon'
                          : 'border-muted bg-card hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedStyle(style.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-orbitron font-bold text-foreground">{style.name}</h4>
                          <p className="text-sm text-muted-foreground">{style.description}</p>
                        </div>
                        {selectedStyle === style.id && (
                          <div className="w-4 h-4 rounded-full bg-primary animate-pulse"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <Button 
                variant="neon" 
                size="lg" 
                className="w-full text-lg py-6 h-auto"
                onClick={handleGoonify}
                disabled={!selectedFile || isGenerating}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    GOONIFYING...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    GOONIFY ME NOW
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Result Section */}
          <Card className="border-secondary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-secondary font-orbitron">
                <Sparkles className="w-5 h-5" />
                Your Goonified Result
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {isGenerating ? (
                <div className="flex flex-col items-center justify-center h-64 space-y-4">
                  <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-lg font-orbitron text-primary">Processing your goon transformation...</p>
                  <p className="text-sm text-muted-foreground">This usually takes 30-60 seconds</p>
                </div>
              ) : generatedImage ? (
                <div className="space-y-6">
                  <div className="relative">
                    <img 
                      src={generatedImage} 
                      alt="Goonified" 
                      className="w-full rounded-lg shadow-epic"
                    />
                    <Badge 
                      variant="secondary" 
                      className="absolute top-2 right-2 bg-gradient-secondary"
                    >
                      {goonStyles.find(s => s.id === selectedStyle)?.name}
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      variant="goon" 
                      size="lg" 
                      className="w-full text-lg py-4 h-auto"
                      onClick={handleDownload}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      DOWNLOAD GOON IMAGE
                    </Button>

                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full text-lg py-4 h-auto"
                    >
                      MINT AS NFT (Coming Soon)
                    </Button>

                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="ghost" size="sm">
                        Share on X
                      </Button>
                      <Button variant="ghost" size="sm">
                        Share on TG
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 space-y-4 text-center">
                  <Camera className="w-16 h-16 text-muted-foreground/50" />
                  <div>
                    <p className="text-lg font-medium text-muted-foreground">Your goon transformation will appear here</p>
                    <p className="text-sm text-muted-foreground">Upload an image and hit goonify to get started</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Instructions */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto border-accent/20 bg-card/30 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h3 className="text-xl font-orbitron font-bold mb-4 text-accent">Pro Goon Tips</h3>
              <div className="text-left space-y-2 text-sm text-muted-foreground">
                <p>• Use clear, well-lit photos for best results</p>
                <p>• Face should be clearly visible and centered</p>
                <p>• Supported formats: JPG, PNG, WebP (max 10MB)</p>
                <p>• Higher resolution inputs = higher quality goon output</p>
                <p>• Share your goonified images to earn bonus goon score points</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GoonifyPage;