import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface HeroSectionProps {
  onStartSurprise: () => void;
}

const HeroSection = ({ onStartSurprise }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 gradient-pastel">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground animate-fade-in-up mb-12">
          🎉 Happy Birthday Surprise 🎀
        </h1>
        
        <Card className="p-8 md:p-12 shadow-soft animate-float backdrop-blur-sm bg-card/90">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
              Welcome to your special birthday celebration page 💖
            </p>
            
            <p className="text-muted-foreground">
              Get ready for a magical journey filled with surprises, memories, and love!
            </p>
            
            <Button 
              onClick={onStartSurprise}
              size="lg"
              className="mt-6 px-8 py-6 text-lg shadow-glow hover:scale-110 transition-all duration-300 bg-primary hover:bg-primary/90"
            >
              Start the Surprise ✨
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;
