import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Copy, TrendingUp, DollarSign, BarChart3, Wallet, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ChartPage = () => {
  const { toast } = useToast();

  const contractAddress = "0x1234567890abcdef1234567890abcdef12345678";
  
  const tokenomics = [
    { label: "Total Supply", value: "1,000,000,000 $GOON", percentage: 100 },
    { label: "Liquidity Pool", value: "400,000,000 $GOON", percentage: 40 },
    { label: "Gaming Rewards", value: "300,000,000 $GOON", percentage: 30 },
    { label: "Community Fund", value: "200,000,000 $GOON", percentage: 20 },
    { label: "Team & Development", value: "100,000,000 $GOON", percentage: 10 },
  ];

  const quickStats = [
    { label: "Market Cap", value: "$2.4M", change: "+15.2%", color: "text-accent" },
    { label: "24h Volume", value: "$180K", change: "+8.7%", color: "text-primary" },
    { label: "Holders", value: "12,847", change: "+242", color: "text-secondary" },
    { label: "Price", value: "$0.0024", change: "+12.4%", color: "text-accent" },
  ];

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  return (
    <div className="min-h-screen pt-20 px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-lg py-2 px-6 bg-gradient-primary">
            <BarChart3 className="w-4 h-4 mr-2" />
            LIVE GOON CHART
          </Badge>
          <h1 className="text-5xl md:text-6xl font-orbitron font-black mb-6">
            $GOON CHART
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track the price, monitor the community, and join the goon revolution. Diamond hands only.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-4 pb-4 text-center">
                <div className={`text-2xl font-orbitron font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                <div className="text-xs text-accent font-medium mt-1">{stat.change}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chart Widget */}
          <div className="lg:col-span-2">
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary font-orbitron">
                  <TrendingUp className="w-5 h-5" />
                  Live Price Chart
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Placeholder for actual chart widget */}
                <div className="h-96 bg-gradient-to-b from-primary/10 to-secondary/10 rounded-lg border-2 border-primary/30 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <TrendingUp className="w-16 h-16 mx-auto text-primary/50" />
                    <div>
                      <h3 className="text-xl font-orbitron font-bold text-primary">Live Chart Widget</h3>
                      <p className="text-muted-foreground">
                        Integrate with DEXTools, Poocoin, or TradingView for real-time price data
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        DEXTools
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Poocoin
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        TradingView
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trading Actions */}
            <Card className="border-secondary/20 bg-card/50 backdrop-blur-sm mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary font-orbitron">
                  <DollarSign className="w-5 h-5" />
                  Quick Trading
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="neon" size="lg" className="h-auto py-4">
                    <Wallet className="w-5 h-5 mr-2" />
                    Buy on PancakeSwap
                  </Button>
                  <Button variant="goon" size="lg" className="h-auto py-4">
                    <Globe className="w-5 h-5 mr-2" />
                    Buy on Uniswap
                  </Button>
                  <Button variant="outline" size="lg" className="h-auto py-4">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Add to Wallet
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Contract Info */}
            <Card className="border-accent/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent font-orbitron">
                  <Globe className="w-5 h-5" />
                  Contract Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm text-muted-foreground">Contract Address</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <code className="text-xs bg-muted/30 p-2 rounded flex-1 font-mono">
                      {contractAddress.slice(0, 6)}...{contractAddress.slice(-6)}
                    </code>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => copyToClipboard(contractAddress, "Contract address")}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="text-sm text-muted-foreground">Network</Label>
                  <div className="text-sm font-orbitron font-bold text-primary mt-1">
                    Binance Smart Chain (BSC)
                  </div>
                </div>

                <div>
                  <Label className="text-sm text-muted-foreground">Decimals</Label>
                  <div className="text-sm font-orbitron font-bold text-secondary mt-1">
                    18
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    BSCScan
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    CoinGecko
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Tokenomics */}
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary font-orbitron">
                  <BarChart3 className="w-5 h-5" />
                  Tokenomics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {tokenomics.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground font-medium">{item.label}</span>
                      <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-muted-foreground">{item.value}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Community Links */}
            <Card className="border-secondary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary font-orbitron">
                  <Globe className="w-5 h-5" />
                  Community
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  X/Twitter
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Telegram
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Discord
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Reddit
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  YouTube
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto border-muted/30 bg-card/20 backdrop-blur-sm">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                <strong>Disclaimer:</strong> $GOON is a meme token created for entertainment purposes. 
                This is not financial advice. Cryptocurrency investments carry significant risk. 
                Always do your own research and never invest more than you can afford to lose. 
                Goon responsibly! 🚀
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const Label = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);

export default ChartPage;