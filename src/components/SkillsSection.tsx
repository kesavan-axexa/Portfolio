import { Code, Database, Server, Container, GitBranch, Globe } from 'lucide-react';

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="h-6 w-6" />,
      skills: ["React.js", "HTML", "CSS", "JavaScript (ES6+)", "TailwindCSS"]
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js"]
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["MongoDB", "PostgreSQL"]
    },
    {
      title: "DevOps & Tools",
      icon: <Container className="h-6 w-6" />,
      skills: ["Docker", "Git"]
    }
  ];

  const allSkills = [
    "React.js", "Node.js", "MongoDB", "PostgreSQL", 
    "HTML", "CSS", "JavaScript (ES6+)", "TailwindCSS", 
    "Docker", "Git and Github",   
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient-primary">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to create exceptional digital experiences
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="  border border-primary/20 rounded-lg px-4 pt-4 bg-neutral-950 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center   mb-4">       
                  <div className="p-2 bg-primary/10 rounded-lg text-primary mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                {/* <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="text-sm text-muted-foreground bg-muted/30 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </div>
                  ))}
                </div> */}
              </div>
            ))}
          </div>

          {/* Featured Skills Tags */}
          <div className="text-center">
            {/* <h3 className="text-2xl font-semibold mb-8 ">Core Technologies</h3> */}
            <div className="flex flex-wrap justify-center gap-3  max-w-4xl mx-auto">
              {allSkills.map((skill, index) => (
                <div 
                  key={skill}
                  className="px-4 py-2 bg-neutral-900/60 border border-gray-700/80 rounded-full text-sm font-medium hover:glow-subtle transition-all duration-300"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};