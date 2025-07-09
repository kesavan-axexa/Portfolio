import { Code, Cpu, Zap, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Clean Code",
      description: "Writing maintainable, efficient code with modern best practices"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "AI Integration",
      description: "Leveraging artificial intelligence to create smart solutions"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance",
      description: "Optimizing applications for speed and scalability"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer with a love for creating innovative digital solutions. 
            With expertise in modern web technologies and a keen eye for design, I transform 
            ideas into powerful applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="slide-in-left">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Building the Future, One Line at a Time
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 5 years of experience in software development, I specialize in 
                creating robust, scalable applications using cutting-edge technologies. 
                My journey began with a fascination for how technology can solve real-world problems.
              </p>
              <p>
                I thrive in environments where creativity meets technical excellence. Whether 
                it's building decentralized applications, implementing AI solutions, or crafting 
                beautiful user interfaces, I'm always eager to tackle new challenges.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest in blockchain technology, 
                contributing to open-source projects, or mentoring aspiring developers.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-lg border border-border glow-primary">
                <div className="text-3xl font-bold text-gradient-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border glow-secondary">
                <div className="text-3xl font-bold text-gradient-secondary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border glow-accent">
                <div className="text-3xl font-bold text-gradient-accent mb-2">100+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border glow-primary">
                <div className="text-3xl font-bold text-gradient-cyber mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="bg-card/80 border-border hover:border-primary transition-all duration-300 hover:glow-primary slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {highlight.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-foreground">
                  {highlight.title}
                </h4>
                <p className="text-muted-foreground">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};