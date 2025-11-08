import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift } from "lucide-react";
import confetti from "canvas-confetti";

interface SurpriseBoxProps {
  onNext: () => void;
}

const SurpriseBox = ({ onNext }: SurpriseBoxProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [candleGlow, setCandleGlow] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
    
    // Trigger confetti
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#FFB6C1', '#E6E6FA', '#FFDAB9', '#87CEEB', '#DDA0DD'],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#FFB6C1', '#E6E6FA', '#FFDAB9', '#87CEEB', '#DDA0DD'],
      });
    }, 250);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 gradient-soft">
      <div className="max-w-2xl w-full text-center space-y-8">
        {!isOpened ? (
          <div className="animate-scale-in">
            <div className="mb-8">
              <Gift className="w-32 h-32 md:w-48 md:h-48 mx-auto text-primary animate-bounce-soft" />
            </div>
            
            <Button 
              onClick={handleOpen}
              size="lg"
              className="px-12 py-8 text-xl shadow-glow hover:scale-110 transition-all duration-300 bg-primary hover:bg-primary/90"
            >
              Tap to Open 🎁
            </Button>
          </div>
        ) : (
          <Card className="p-8 md:p-12 shadow-soft animate-scale-in backdrop-blur-sm bg-card/90">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                🎊 Surprise! 🎊
              </h2>
              
              {/* Birthday Cake with Candle */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-6">
                <div 
                  className="cursor-pointer"
                  onClick={() => setCandleGlow(!candleGlow)}
                >
                  {/* Cake Base */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-24 md:w-52 md:h-32 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-3xl shadow-soft">
                    {/* Frosting waves */}
                    <div className="absolute -top-3 left-0 right-0 flex justify-around">
                      {[...Array(7)].map((_, i) => (
                        <div key={i} className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full shadow-sm" />
                      ))}
                    </div>
                    {/* Cake layers */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-pink-500/30" />
                  </div>
                  
                  {/* Candle */}
                  <div className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 w-3 h-12 md:w-4 md:h-16 bg-gradient-to-b from-red-300 to-red-400 rounded-t-sm shadow-sm" />
                  
                  {/* Flame with glow effect */}
                  <div className="absolute bottom-36 md:bottom-48 left-1/2 -translate-x-1/2">
                    <div 
                      className={`w-4 h-6 md:w-5 md:h-8 bg-gradient-to-t from-yellow-400 via-orange-400 to-red-500 rounded-full transition-all duration-300 ${
                        candleGlow 
                          ? 'animate-bounce-soft shadow-[0_0_30px_10px_rgba(251,191,36,0.8)]' 
                          : 'shadow-[0_0_10px_3px_rgba(251,191,36,0.5)]'
                      }`}
                    />
                    {candleGlow && (
                      <div className="absolute inset-0 w-4 h-6 md:w-5 md:h-8 bg-yellow-300 rounded-full blur-md animate-pulse" />
                    )}
                  </div>
                </div>
              </div>
              
              <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
                Wishing you a day filled with joy, love, and endless smiles 💕
              </p>
              
              <p className="text-muted-foreground text-lg">
                May this special day bring you all the happiness you deserve!
              </p>
              
              <Button 
                onClick={onNext}
                size="lg"
                className="mt-6 px-8 py-6 text-lg shadow-glow hover:scale-110 transition-all duration-300 bg-secondary hover:bg-secondary/90"
              >
                Next → Memories 📸
              </Button>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
};

export default SurpriseBox;
