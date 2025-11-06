import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

const letterText = `Dear Friend,

On this special day, I just want to remind you how precious you are to everyone around you. Your smile lights up every room, your kindness touches every heart, and your presence makes the world a better place.

May this year bring you countless moments of joy, unforgettable adventures, and dreams coming true. You deserve all the happiness in the world!

Happy Birthday! 🎂✨

With love,
Your Special Someone 💖`;

const LetterSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < letterText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + letterText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 gradient-soft">
      <div className="max-w-3xl w-full">
        <Card className="p-8 md:p-16 shadow-soft backdrop-blur-sm bg-card/95 animate-scale-in">
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                💌 A Special Letter For You
              </h2>
            </div>
            
            <div className="bg-gradient-to-br from-background/50 to-primary/5 rounded-lg p-8 md:p-12 border-2 border-primary/20">
              <pre className="font-handwritten text-xl md:text-2xl text-foreground/90 whitespace-pre-wrap leading-relaxed">
                {displayedText}
                <span className="animate-pulse">|</span>
              </pre>
            </div>
          </div>
        </Card>
        
        <div className="text-center mt-8">
          <p className="text-muted-foreground text-lg">
            🎉 Wishing you the happiest birthday ever! 🎉
          </p>
        </div>
      </div>
    </section>
  );
};

export default LetterSection;
