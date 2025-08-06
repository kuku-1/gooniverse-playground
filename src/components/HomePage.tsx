import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-6 text-lg py-2 px-6 bg-gradient-secondary text-secondary-foreground font-orbitron">
            <Sparkles className="w-4 h-4 mr-2" />
            THE FUTURE OF MEME GAMING
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-6 text-neon bg-gradient-primary bg-clip-text text-transparent">
            GOON HARD.
          </h1>
          <h2 className="text-4xl md:text-6xl font-orbitron font-black mb-8 text-neon bg-gradient-secondary bg-clip-text text-transparent">
            MEME HARDER.
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto font-inter">
            Upload your face, play the games, win the leaderboard, and climb the Goon Ranks. 
            <span className="text-primary font-bold"> This isn't just a meme coin. It's a way of life.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="neon" 
              size="lg" 
              onClick={() => onNavigate('goonify')}
              className="text-xl px-8 py-4 h-auto"
            >
              <Sparkles className="w-6 h-6 mr-2" />
              GOONIFY ME
            </Button>
            
            <Button 
              variant="goon" 
              size="lg" 
              onClick={() => onNavigate('games')}
              className="text-xl px-8 py-4 h-auto"
            >
              <Gamepad2 className="w-6 h-6 mr-2" />
              PLAY THE GAME
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => onNavigate('chart')}
              className="text-xl px-8 py-4 h-auto"
            >
              <TrendingUp className="w-6 h-6 mr-2" />
              VIEW THE CHART
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 float">
          <div className="w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        </div>
        <div className="absolute bottom-32 right-20 float" style={{ animationDelay: '1s' }}>
          <div className="w-12 h-12 bg-secondary/20 rounded-full blur-lg animate-pulse"></div>
        </div>
        <div className="absolute top-1/3 right-10 float" style={{ animationDelay: '2s' }}>
          <div className="w-8 h-8 bg-accent/20 rounded-full blur-lg animate-pulse"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-4 text-neon">
            THE GOON EXPERIENCE
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            More than just hodling. More than just gaming. This is total goon domination.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-primary/20 rounded-xl p-8 glow-hover cursor-pointer">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-primary">AI GOONIFICATION</h3>
              <p className="text-muted-foreground">
                Upload your selfie and transform into the ultimate goon warrior. Multiple epic styles including Meme Lord, Retro Gamer, and Goon Samurai.
              </p>
            </div>

            <div className="bg-card border border-secondary/20 rounded-xl p-8 glow-hover cursor-pointer">
              <div className="w-16 h-16 bg-gradient-secondary rounded-lg flex items-center justify-center mb-6">
                <Gamepad2 className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-secondary">GOON DASH ARENA</h3>
              <p className="text-muted-foreground">
                Navigate through chaos, dodge distractions, collect $GOON tokens. Weekly winners get real airdrops. Leaderboard domination awaits.
              </p>
            </div>

            <div className="bg-card border border-accent/20 rounded-xl p-8 glow-hover cursor-pointer">
              <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-accent">GOON SCORE SYSTEM</h3>
              <p className="text-muted-foreground">
                Calculate your true goon power. From "Baby Goon" to "Goon God" - climb the ranks through memes, games, and pure dedication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-orbitron font-bold mb-12 text-neon">GOON NETWORK STATS</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-orbitron font-black text-primary mb-2 text-neon">
                10K+
              </div>
              <div className="text-muted-foreground font-inter">Active Goons</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-orbitron font-black text-secondary mb-2 text-neon">
                50M+
              </div>
              <div className="text-muted-foreground font-inter">Games Played</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-orbitron font-black text-accent mb-2 text-neon">
                100K+
              </div>
              <div className="text-muted-foreground font-inter">Goonified Images</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-orbitron font-black text-primary mb-2 text-neon">
                ∞
              </div>
              <div className="text-muted-foreground font-inter">Goon Potential</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-neon">
            READY TO JOIN THE GOON ARMY?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            The revolution starts with you. Goonify yourself, dominate the leaderboards, and earn your place in goon history.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="epic" 
              size="lg" 
              onClick={() => onNavigate('goonify')}
              className="text-xl px-12 py-6 h-auto"
            >
              <Users className="w-6 h-6 mr-2" />
              START GOONING NOW
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;