import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import memory1 from "@/assets/memory1.jpg";
import memory2 from "@/assets/memory2.jpg";
import memory3 from "@/assets/memory3.jpg";
import memory4 from "@/assets/memory4.jpg";
import memory5 from "@/assets/memory5.jpg";
import memory6 from "@/assets/memory6.jpg";

interface MemoriesGridProps {
  onNext: () => void;
}

const memories = [
  { id: 1, image: memory1, caption: "Beautiful moments" },
  { id: 2, image: memory2, caption: "Cherished memories" },
  { id: 3, image: memory3, caption: "Happy times" },
  { id: 4, image: memory4, caption: "Wonderful days" },
  { id: 5, image: memory5, caption: "Special occasions" },
  { id: 6, image: memory6, caption: "Forever treasured" },
];

const MemoriesGrid = ({ onNext }: MemoriesGridProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 gradient-dreamy">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          📸 Beautiful Memories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {memories.map((memory, index) => (
            <Card 
              key={memory.id}
              className="overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square relative">
                <img 
                  src={memory.image} 
                  alt={memory.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <p className="text-white font-medium text-lg">{memory.caption}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={onNext}
            size="lg"
            className="px-8 py-6 text-lg shadow-glow hover:scale-110 transition-all duration-300 bg-accent hover:bg-accent/90"
          >
            Next → Special Letter 💌
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MemoriesGrid;
