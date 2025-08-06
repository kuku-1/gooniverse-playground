import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Play, Pause, RotateCcw, DollarSign, Users, Timer } from "lucide-react";

const GamesPage = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isPaused, setIsPaused] = useState(false);

  // Mock leaderboard data
  const leaderboard = [
    { rank: 1, name: "GoonMaster69", score: 15420, avatar: "🏆" },
    { rank: 2, name: "MemeLord420", score: 12350, avatar: "👑" },
    { rank: 3, name: "ChadGoon", score: 11200, avatar: "💎" },
    { rank: 4, name: "EpicGamer", score: 9850, avatar: "⚡" },
    { rank: 5, name: "NoobSlayer", score: 8900, avatar: "🔥" },
  ];

  // Game timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (gameStarted && !isPaused && !gameOver && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setGameOver(true);
            setGameStarted(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [gameStarted, isPaused, gameOver, timeLeft]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setTimeLeft(60);
    setIsPaused(false);
  };

  const pauseGame = () => {
    setIsPaused(!isPaused);
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setScore(0);
    setTimeLeft(60);
    setIsPaused(false);
  };

  // Simple clicking game for demo
  const handleGameClick = () => {
    if (gameStarted && !isPaused && !gameOver) {
      setScore(prev => prev + Math.floor(Math.random() * 100) + 50);
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-lg py-2 px-6 bg-gradient-accent">
            <Trophy className="w-4 h-4 mr-2" />
            GOON DASH ARENA
          </Badge>
          <h1 className="text-5xl md:text-6xl font-orbitron font-black mb-6 text-neon">
            GAME ARENA
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dodge distractions, collect $GOON tokens, and dominate the leaderboards. Weekly winners get real airdrops!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Game Area */}
          <div className="lg:col-span-2">
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-primary font-orbitron">
                  <span className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Goon Dash
                  </span>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Timer className="w-4 h-4" />
                      {timeLeft}s
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {score}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Game Display */}
                <div 
                  className="relative h-96 bg-gradient-to-b from-primary/10 to-secondary/10 rounded-lg border-2 border-primary/30 overflow-hidden cursor-pointer"
                  onClick={handleGameClick}
                >
                  {!gameStarted && !gameOver && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                      <div className="text-6xl animate-bounce">🎮</div>
                      <h3 className="text-2xl font-orbitron font-bold text-primary">Ready to Goon?</h3>
                      <p className="text-muted-foreground text-center max-w-sm">
                        Click anywhere in this area to collect $GOON tokens. Avoid the distractions and maximize your score!
                      </p>
                    </div>
                  )}

                  {gameStarted && !gameOver && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                      {isPaused ? (
                        <>
                          <div className="text-6xl">⏸️</div>
                          <h3 className="text-2xl font-orbitron font-bold text-secondary">PAUSED</h3>
                        </>
                      ) : (
                        <>
                          <div className="text-6xl animate-pulse">💎</div>
                          <h3 className="text-2xl font-orbitron font-bold text-primary">CLICK TO COLLECT!</h3>
                          <div className="text-4xl font-orbitron font-black text-accent text-neon">
                            {score}
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {gameOver && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                      <div className="text-6xl">🏆</div>
                      <h3 className="text-2xl font-orbitron font-bold text-accent">GAME OVER!</h3>
                      <div className="text-center">
                        <p className="text-xl text-primary font-bold">Final Score: {score}</p>
                        <p className="text-muted-foreground">
                          {score > 5000 ? "Epic Goon Performance!" : score > 2000 ? "Solid Goon Work!" : "Keep Gooning!"}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Floating particles effect */}
                  {gameStarted && !isPaused && !gameOver && (
                    <>
                      <div className="absolute top-4 left-4 float animate-pulse">💰</div>
                      <div className="absolute top-8 right-8 float animate-pulse" style={{ animationDelay: '1s' }}>⚡</div>
                      <div className="absolute bottom-4 left-1/3 float animate-pulse" style={{ animationDelay: '2s' }}>💎</div>
                    </>
                  )}
                </div>

                {/* Game Controls */}
                <div className="flex flex-wrap gap-4 justify-center">
                  {!gameStarted && !gameOver && (
                    <Button variant="neon" size="lg" onClick={startGame}>
                      <Play className="w-5 h-5 mr-2" />
                      START GAME
                    </Button>
                  )}

                  {gameStarted && !gameOver && (
                    <Button variant="secondary" size="lg" onClick={pauseGame}>
                      {isPaused ? <Play className="w-5 h-5 mr-2" /> : <Pause className="w-5 h-5 mr-2" />}
                      {isPaused ? 'RESUME' : 'PAUSE'}
                    </Button>
                  )}

                  {(gameStarted || gameOver) && (
                    <Button variant="outline" size="lg" onClick={resetGame}>
                      <RotateCcw className="w-5 h-5 mr-2" />
                      RESET
                    </Button>
                  )}
                </div>

                {/* Game Info */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="text-2xl font-orbitron font-bold text-primary">{score}</div>
                    <div className="text-sm text-muted-foreground">Current Score</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-orbitron font-bold text-secondary">{Math.max(0, timeLeft)}</div>
                    <div className="text-sm text-muted-foreground">Time Left</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-orbitron font-bold text-accent">1x</div>
                    <div className="text-sm text-muted-foreground">Multiplier</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Leaderboard */}
          <div className="space-y-6">
            <Card className="border-secondary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary font-orbitron">
                  <Trophy className="w-5 h-5" />
                  Weekly Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {leaderboard.map((player) => (
                  <div 
                    key={player.rank}
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant={player.rank === 1 ? "default" : "secondary"}
                        className={`w-8 h-8 rounded-full flex items-center justify-center p-0 ${
                          player.rank === 1 ? 'bg-gradient-primary' : 
                          player.rank === 2 ? 'bg-gradient-secondary' : 
                          player.rank === 3 ? 'bg-gradient-accent' : 'bg-muted'
                        }`}
                      >
                        {player.rank}
                      </Badge>
                      <div>
                        <div className="font-orbitron font-bold text-sm text-foreground">
                          {player.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {player.score.toLocaleString()} points
                        </div>
                      </div>
                    </div>
                    <div className="text-xl">{player.avatar}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Rewards Info */}
            <Card className="border-accent/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent font-orbitron">
                  <DollarSign className="w-5 h-5" />
                  Weekly Rewards
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">🥇 1st Place</span>
                    <span className="font-orbitron font-bold text-primary">1000 $GOON</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">🥈 2nd Place</span>
                    <span className="font-orbitron font-bold text-secondary">500 $GOON</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">🥉 3rd Place</span>
                    <span className="font-orbitron font-bold text-accent">250 $GOON</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Top 10</span>
                    <span className="font-orbitron font-bold text-muted-foreground">100 $GOON</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-muted/30 text-center">
                  <p className="text-xs text-muted-foreground">
                    Rewards distributed every Sunday at 00:00 UTC
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Connect Wallet */}
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6 text-center space-y-4">
                <Users className="w-12 h-12 mx-auto text-primary/50" />
                <div>
                  <h3 className="font-orbitron font-bold text-primary mb-2">Connect Wallet</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Connect your wallet to track scores and receive rewards
                  </p>
                  <Button variant="neon" size="sm" className="w-full">
                    Connect Wallet
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesPage;