import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import confetti from "canvas-confetti";

interface VideoMessageSectionProps {
  onNext: () => void;
}

const VideoMessageSection = ({ onNext }: VideoMessageSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Trigger confetti when section appears
    const timer = setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFB6C1', '#DDA0DD', '#87CEEB', '#FFE4E1'],
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300">
      <div className={`max-w-4xl w-full space-y-8 transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-8">
          📹 A Special Video Message
        </h2>
        
        <Card className="p-8 bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-sm border-purple-200/50 shadow-elegant">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_40px_10px_rgba(147,51,234,0.2)]">
            <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center rounded-2xl">
              <div className="text-center space-y-4 p-8">
                <div className="text-6xl animate-bounce-soft">🎥</div>
                <p className="text-xl text-muted-foreground font-quicksand">
                  Video message placeholder
                </p>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-300/30 via-pink-300/30 to-purple-300/30 blur-3xl -z-10 animate-pulse" />
          </div>
          
          <p className="text-center text-lg text-muted-foreground mt-6 font-quicksand">
            Because some feelings sound better when spoken. 💝
          </p>
        </Card>
        
        <div className="flex justify-center pt-4">
          <Button
            onClick={onNext}
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-soft transition-all hover:scale-105"
          >
            Next → Special Letter 💌
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoMessageSection;
