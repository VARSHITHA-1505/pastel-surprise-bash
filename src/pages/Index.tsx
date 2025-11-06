import { useState, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import SurpriseBox from "@/components/SurpriseBox";
import MemoriesGrid from "@/components/MemoriesGrid";
import LetterSection from "@/components/LetterSection";

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const surpriseRef = useRef<HTMLDivElement>(null);
  const memoriesRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleStartSurprise = () => {
    setCurrentSection(1);
    setTimeout(() => scrollToSection(surpriseRef), 100);
  };

  const handleSurpriseNext = () => {
    setCurrentSection(2);
    setTimeout(() => scrollToSection(memoriesRef), 100);
  };

  const handleMemoriesNext = () => {
    setCurrentSection(3);
    setTimeout(() => scrollToSection(letterRef), 100);
  };

  return (
    <div className="min-h-screen">
      <HeroSection onStartSurprise={handleStartSurprise} />
      
      {currentSection >= 1 && (
        <div ref={surpriseRef}>
          <SurpriseBox onNext={handleSurpriseNext} />
        </div>
      )}
      
      {currentSection >= 2 && (
        <div ref={memoriesRef}>
          <MemoriesGrid onNext={handleMemoriesNext} />
        </div>
      )}
      
      {currentSection >= 3 && (
        <div ref={letterRef}>
          <LetterSection />
        </div>
      )}
    </div>
  );
};

export default Index;
