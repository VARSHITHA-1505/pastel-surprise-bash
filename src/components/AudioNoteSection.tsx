
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface AudioNoteSectionProps {
  onNext: () => void;
}

const AudioNoteSection = ({ onNext }: AudioNoteSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-pink-100 via-lavender-100 to-purple-100 relative overflow-hidden">
      {/* Sparkle decorations */}
      <div className="absolute top-20 left-10 text-4xl animate-float">✨</div>
      <div className="absolute bottom-32 right-16 text-3xl animate-bounce-soft">💫</div>
      <div className="absolute top-40 right-20 text-2xl animate-float" style={{ animationDelay: '1s' }}>⭐</div>
      <div className="absolute bottom-20 left-20 text-3xl animate-bounce-soft" style={{ animationDelay: '0.5s' }}>🌟</div>
      
      <div className="max-w-3xl w-full space-y-8 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-8">
          🎧 A Voice Filled With Love
        </h2>
        
        <Card className="p-12 bg-gradient-to-br from-white/90 to-purple-50/90 backdrop-blur-sm border-purple-200/50 shadow-elegant">
          <div className="space-y-8 animate-scale-in">
            <div className="w-full max-w-md mx-auto">
              <audio
                controls
                className="w-full rounded-full shadow-soft"
                style={{
                  filter: 'hue-rotate(320deg) saturate(1.2)',
                }}
              >
                <source src="/audio/audio.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            
            <p className="text-center text-lg text-muted-foreground font-quicksand">
              Tap play to hear a heartfelt audio message. 💕
            </p>
          </div>
        </Card>
        
        <div className="flex justify-center pt-4">
          <Button
            onClick={onNext}
            size="lg"
            className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white shadow-soft transition-all hover:scale-105"
          >
            Next → Video Message 📹
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AudioNoteSection;
