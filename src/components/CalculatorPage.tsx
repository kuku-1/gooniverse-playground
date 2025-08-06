import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Award, Share2, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CalculatorPage = () => {
  const [formData, setFormData] = useState({
    memesCreated: "",
    timeSpent: "",
    gameScore: "",
    goonHoldings: "",
    goonifiedImages: "",
    socialShares: "",
  });
  
  const [goonScore, setGoonScore] = useState<number | null>(null);
  const [goonRank, setGoonRank] = useState<string>("");
  const { toast } = useToast();

  const goonRanks = [
    { rank: "Baby Goon", minScore: 0, maxScore: 999, color: "text-muted-foreground", emoji: "👶" },
    { rank: "Goon Cadet", minScore: 1000, maxScore: 2499, color: "text-primary", emoji: "🎯" },
    { rank: "Goon Warrior", minScore: 2500, maxScore: 4999, color: "text-secondary", emoji: "⚔️" },
    { rank: "Elite Goon", minScore: 5000, maxScore: 9999, color: "text-accent", emoji: "💎" },
    { rank: "Goon Master", minScore: 10000, maxScore: 19999, color: "text-primary", emoji: "👑" },
    { rank: "Goon Legend", minScore: 20000, maxScore: 49999, color: "text-secondary", emoji: "🏆" },
    { rank: "Goon God", minScore: 50000, maxScore: Infinity, color: "text-accent", emoji: "⚡" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateGoonScore = () => {
    const {
      memesCreated,
      timeSpent,
      gameScore,
      goonHoldings,
      goonifiedImages,
      socialShares,
    } = formData;

    // Validate inputs
    if (!memesCreated || !timeSpent || !gameScore || !goonHoldings || !goonifiedImages || !socialShares) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to calculate your Goon Score",
        variant: "destructive",
      });
      return;
    }

    // Calculate score based on weighted factors
    const score = 
      parseInt(memesCreated) * 100 +           // 100 points per meme
      parseInt(timeSpent) * 5 +                // 5 points per hour
      parseInt(gameScore) * 0.1 +              // 0.1 points per game point
      parseInt(goonHoldings) * 50 +            // 50 points per $GOON token
      parseInt(goonifiedImages) * 200 +        // 200 points per goonified image
      parseInt(socialShares) * 150;            // 150 points per social share

    const finalScore = Math.round(score);
    const rank = goonRanks.find(r => finalScore >= r.minScore && finalScore <= r.maxScore);

    setGoonScore(finalScore);
    setGoonRank(rank?.rank || "Unknown Goon");

    toast({
      title: "Goon Score Calculated!",
      description: `You are a ${rank?.rank} with ${finalScore} points!`,
    });
  };

  const resetCalculator = () => {
    setFormData({
      memesCreated: "",
      timeSpent: "",
      gameScore: "",
      goonHoldings: "",
      goonifiedImages: "",
      socialShares: "",
    });
    setGoonScore(null);
    setGoonRank("");
  };

  const shareScore = () => {
    if (goonScore && goonRank) {
      const shareText = `I just calculated my Goon Score! I'm a ${goonRank} with ${goonScore} points! 🚀 Calculate yours at GooningGames.com #GoonLife #MemeCoin`;
      
      if (navigator.share) {
        navigator.share({
          title: 'My Goon Score',
          text: shareText,
        });
      } else {
        navigator.clipboard.writeText(shareText);
        toast({
          title: "Copied to clipboard!",
          description: "Share your goon score on social media",
        });
      }
    }
  };

  const currentRank = goonRanks.find(r => goonScore && goonScore >= r.minScore && goonScore <= r.maxScore);

  return (
    <div className="min-h-screen pt-20 px-4 py-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-lg py-2 px-6 bg-gradient-accent">
            <Calculator className="w-4 h-4 mr-2" />
            GOON SCORE CALCULATOR
          </Badge>
          <h1 className="text-5xl md:text-6xl font-orbitron font-black mb-6 text-neon">
            CALCULATE YOUR GOON POWER
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Input your goon activities and discover your true rank. From "Baby Goon" to "Goon God" - where do you stand?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary font-orbitron">
                <Calculator className="w-5 h-5" />
                Goon Metrics Input
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="memes" className="text-foreground font-medium">Memes Created This Month</Label>
                  <Input
                    id="memes"
                    type="number"
                    placeholder="e.g., 25"
                    value={formData.memesCreated}
                    onChange={(e) => handleInputChange("memesCreated", e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">+100 points per meme</p>
                </div>

                <div>
                  <Label htmlFor="time" className="text-foreground font-medium">Time Spent on Site (hours)</Label>
                  <Input
                    id="time"
                    type="number"
                    placeholder="e.g., 50"
                    value={formData.timeSpent}
                    onChange={(e) => handleInputChange("timeSpent", e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">+5 points per hour</p>
                </div>

                <div>
                  <Label htmlFor="gameScore" className="text-foreground font-medium">Best Game Score</Label>
                  <Input
                    id="gameScore"
                    type="number"
                    placeholder="e.g., 15000"
                    value={formData.gameScore}
                    onChange={(e) => handleInputChange("gameScore", e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">+0.1 points per game point</p>
                </div>

                <div>
                  <Label htmlFor="holdings" className="text-foreground font-medium">$GOON Holdings</Label>
                  <Input
                    id="holdings"
                    type="number"
                    placeholder="e.g., 1000"
                    value={formData.goonHoldings}
                    onChange={(e) => handleInputChange("goonHoldings", e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">+50 points per token</p>
                </div>

                <div>
                  <Label htmlFor="images" className="text-foreground font-medium">Goonified Images Created</Label>
                  <Input
                    id="images"
                    type="number"
                    placeholder="e.g., 10"
                    value={formData.goonifiedImages}
                    onChange={(e) => handleInputChange("goonifiedImages", e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">+200 points per image</p>
                </div>

                <div>
                  <Label htmlFor="shares" className="text-foreground font-medium">Social Media Shares</Label>
                  <Input
                    id="shares"
                    type="number"
                    placeholder="e.g., 15"
                    value={formData.socialShares}
                    onChange={(e) => handleInputChange("socialShares", e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">+150 points per share</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  variant="neon" 
                  size="lg" 
                  className="flex-1 text-lg py-4 h-auto"
                  onClick={calculateGoonScore}
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  CALCULATE GOON SCORE
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-6 py-4 h-auto"
                  onClick={resetCalculator}
                >
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results & Rank Display */}
          <div className="space-y-6">
            {/* Score Result */}
            <Card className="border-secondary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary font-orbitron">
                  <Award className="w-5 h-5" />
                  Your Goon Score
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                {goonScore !== null ? (
                  <>
                    <div className="space-y-4">
                      <div className="text-6xl font-orbitron font-black text-neon bg-gradient-primary bg-clip-text text-transparent">
                        {goonScore.toLocaleString()}
                      </div>
                      <div className="space-y-2">
                        <div className="text-2xl font-orbitron font-bold flex items-center justify-center gap-2">
                          <span className="text-4xl">{currentRank?.emoji}</span>
                          <span className={currentRank?.color}>{goonRank}</span>
                        </div>
                        <p className="text-muted-foreground">
                          {currentRank?.rank === "Goon God" 
                            ? "You have achieved maximum goon enlightenment!" 
                            : `${(currentRank?.maxScore || 0) - goonScore} points to next rank`
                          }
                        </p>
                      </div>
                    </div>

                    <Button 
                      variant="goon" 
                      size="lg" 
                      className="w-full text-lg py-4 h-auto"
                      onClick={shareScore}
                    >
                      <Share2 className="w-5 h-5 mr-2" />
                      SHARE MY GOON SCORE
                    </Button>
                  </>
                ) : (
                  <div className="py-12 space-y-4">
                    <div className="text-6xl opacity-50">🤔</div>
                    <div>
                      <h3 className="text-xl font-orbitron font-bold text-muted-foreground mb-2">
                        Calculate Your Power
                      </h3>
                      <p className="text-muted-foreground">
                        Fill in your goon metrics to discover your rank and unlock your true potential.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Rank System */}
            <Card className="border-accent/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent font-orbitron">
                  <TrendingUp className="w-5 h-5" />
                  Goon Rank System
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {goonRanks.map((rank, index) => (
                  <div 
                    key={rank.rank}
                    className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                      goonScore && goonScore >= rank.minScore && goonScore <= rank.maxScore
                        ? 'bg-primary/20 border border-primary/40 shadow-neon'
                        : 'bg-muted/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{rank.emoji}</span>
                      <div>
                        <div className={`font-orbitron font-bold ${rank.color}`}>
                          {rank.rank}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {rank.minScore.toLocaleString()}{rank.maxScore === Infinity ? '+' : ` - ${rank.maxScore.toLocaleString()}`} points
                        </div>
                      </div>
                    </div>
                    {goonScore && goonScore >= rank.minScore && goonScore <= rank.maxScore && (
                      <Badge variant="default" className="bg-gradient-primary">
                        Current
                      </Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-12">
          <Card className="border-primary/20 bg-card/30 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h3 className="text-xl font-orbitron font-bold mb-4 text-primary text-center">Pro Goon Tips</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="space-y-2">
                  <p>• Create and share more memes for maximum points</p>
                  <p>• Hold $GOON tokens to boost your score significantly</p>
                  <p>• Goonify multiple images for bonus multipliers</p>
                </div>
                <div className="space-y-2">
                  <p>• Play games daily to improve your high score</p>
                  <p>• Share on social media for community points</p>
                  <p>• Spend time engaging with the goon community</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;