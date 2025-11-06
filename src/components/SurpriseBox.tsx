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
