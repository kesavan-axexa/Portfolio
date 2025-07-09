import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';

export const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-background/20">
        <div 
          className="h-full bg-gradient-primary transition-all duration-300"
          style={{
            width: `${((window.scrollY) / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
          }}
        />
      </div>

      {/* Logo */}
      <div className="fixed top-6 left-6 z-50">
        <div className="text-2xl font-bold text-gradient-primary">
          KK
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="glow-subtle hover:glow-primary transition-all duration-300 bg-card/80 backdrop-blur-sm"
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>

      {/* Vertical Navigation - Desktop */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col space-y-6">
          {navItems.map((item, index) => (
            <div key={item.name} className="relative group">
              <button
                onClick={() => scrollToSection(item.href)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-primary glow-primary scale-125' 
                    : 'bg-muted-foreground hover:bg-primary hover:glow-primary'
                }`}
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-card/95 backdrop-blur-sm px-3 py-1 rounded-md text-sm whitespace-nowrap border border-border">
                  {item.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-6 right-16 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="glow-subtle hover:glow-primary transition-all duration-300 bg-card/80 backdrop-blur-sm"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-2xl font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};