import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import videoSparkle from "@/assets/videosparkle.mp4";

interface BackgroundVideoSectionProps {
  onNext: () => void;
}

const BackgroundVideoSection = ({ onNext }: BackgroundVideoSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
      <div className="max-w-4xl w-full space-y-8 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-8">
          🎬 A Special Moment for You
        </h2>
        
        <Card className="p-8 bg-gradient-to-br from-white/80 to-pink-50/80 backdrop-blur-sm border-pink-200/50 shadow-elegant">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_40px_10px_rgba(219,39,119,0.2)] animate-scale-in">
            <video
              controls
              className="w-full h-auto rounded-2xl"
              poster=""
            >
              <source src={videoSparkle} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-300/30 via-purple-300/30 to-blue-300/30 blur-3xl -z-10" />
          </div>
          
          <p className="text-center text-lg text-muted-foreground mt-6 font-quicksand">
            This moment is just for you. ✨
          </p>
        </Card>
        
        <div className="flex justify-center pt-4">
          <Button
            onClick={onNext}
            size="lg"
            className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white shadow-soft transition-all hover:scale-105"
          >
            Next → Audio Note 🎧
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BackgroundVideoSection;
