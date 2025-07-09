import { Briefcase, Calendar } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground">
              My professional journey and key contributions
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
            
            <div className="relative pl-12">
              <div className="absolute left-0 top-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Briefcase className="h-4 w-4 text-primary-foreground" />
              </div>
              
              <div className="elegant-card">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gradient-accent">Intern</h3>
                    <p className="text-primary font-semibold">Axexa Technology Solution</p>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>2024</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Worked on React dashboards, calendar logic, and backend integration. 
                    Gained hands-on experience with modern web development practices and team collaboration.
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Key Contributions:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex items-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                        Developed React dashboard components with interactive features
                      </li>
                      <li className="flex items-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                        Implemented calendar logic for team availability management
                      </li>
                      <li className="flex items-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                        Integrated frontend with backend APIs for seamless data flow
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};