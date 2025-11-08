import { useState, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import SurpriseBox from "@/components/SurpriseBox";
import MemoriesGrid from "@/components/MemoriesGrid";
import BackgroundVideoSection from "@/components/BackgroundVideoSection";
import AudioNoteSection from "@/components/AudioNoteSection";
import VideoMessageSection from "@/components/VideoMessageSection";
import LetterSection from "@/components/LetterSection";

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const surpriseRef = useRef<HTMLDivElement>(null);
  const memoriesRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLDivElement>(null);
  const videoMessageRef = useRef<HTMLDivElement>(null);
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
    setTimeout(() => scrollToSection(videoRef), 100);
  };

  const handleVideoNext = () => {
    setCurrentSection(4);
    setTimeout(() => scrollToSection(audioRef), 100);
  };

  const handleAudioNext = () => {
    setCurrentSection(5);
    setTimeout(() => scrollToSection(videoMessageRef), 100);
  };

  const handleVideoMessageNext = () => {
    setCurrentSection(6);
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
        <div ref={videoRef}>
          <BackgroundVideoSection onNext={handleVideoNext} />
        </div>
      )}
      
      {currentSection >= 4 && (
        <div ref={audioRef}>
          <AudioNoteSection onNext={handleAudioNext} />
        </div>
      )}
      
      {currentSection >= 5 && (
        <div ref={videoMessageRef}>
          <VideoMessageSection onNext={handleVideoMessageNext} />
        </div>
      )}
      
      {currentSection >= 6 && (
        <div ref={letterRef}>
          <LetterSection />
        </div>
      )}
    </div>
  );
};

export default Index;
