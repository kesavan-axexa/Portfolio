import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileAvatar from '@/assets/profile-avatar.jpg';

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const words = ['Full-Stack Developer', 'React Specialist', 'Problem Solver', 'Digital Creator'];

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < currentWord.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2500);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentWordIndex, words]);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative minimal-grid">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="mb-8">
                <p className="text-primary font-mono text-sm mb-4 fade-in">Hi, I'm</p>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 fade-in-left">
                  <span className="text-gradient-primary">Kesavan K</span>
                </h1>
                <div className="text-2xl lg:text-3xl font-medium mb-8 fade-in-left" style={{ animationDelay: '0.2s' }}>
                  <span className="text-foreground">A </span>
                  <span className="text-gradient-accent">
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </span>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed fade-in-up" style={{ animationDelay: '0.4s' }}>
                A developer who loves building clean, user-focused digital experiences. 
                Passionate about crafting elegant solutions that bridge design and functionality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:glow-primary transition-all duration-300 text-primary-foreground font-medium px-8 py-3"
                  onClick={() => scrollToAbout()}
                >
                  Explore My Work
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-3"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative fade-in-right">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-border glow-subtle float">
                  <img 
                    src={profileAvatar} 
                    alt="Kesavan K" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="text-primary hover:text-accent transition-colors duration-300"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};