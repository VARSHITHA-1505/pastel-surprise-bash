import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import vkraftLogo from "@/assets/vkraft-logo.jpg";
import videoSparkle from "@/assets/videosparkle.mp4";

interface HeroSectionProps {
  onStartSurprise: () => void;
}

const HeroSection = ({ onStartSurprise }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSparkle} type="video/mp4" />
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/60 via-purple-200/60 to-blue-200/60" />
      
      <div className="absolute top-6 left-6 flex items-center gap-3 z-10">
        <img 
          src={vkraftLogo} 
          alt="VKRAFT Logo" 
          className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover shadow-soft"
        />
        <span className="text-2xl md:text-3xl font-bold text-foreground">
          VKRAFT
        </span>
      </div>
      <div className="max-w-2xl w-full text-center space-y-8 relative z-10">
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
