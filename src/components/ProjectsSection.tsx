import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "DeFi Trading Platform",
      description: "A decentralized trading platform built with React, Web3.js, and Solidity. Features real-time price feeds, automated market making, and yield farming.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["React", "Web3.js", "Solidity", "DeFi"],
      github: "#",
      live: "#"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Comprehensive analytics dashboard with machine learning insights. Built with Next.js, Python, and TensorFlow for predictive analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Next.js", "Python", "TensorFlow", "AI"],
      github: "#",
      live: "#"
    },
    {
      title: "Blockchain Voting System",
      description: "Secure, transparent voting system using blockchain technology. Features voter verification, real-time results, and immutable vote records.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Blockchain", "Ethereum", "Smart Contracts"],
      github: "#",
      live: "#"
    },
    {
      title: "NFT Marketplace",
      description: "Full-featured NFT marketplace with minting, trading, and auction capabilities. Built with React, IPFS, and Ethereum smart contracts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["React", "IPFS", "NFT", "Ethereum"],
      github: "#",
      live: "#"
    },
    {
      title: "Crypto Portfolio Tracker",
      description: "Real-time cryptocurrency portfolio tracking with advanced analytics, alerts, and DeFi protocol integration.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Vue.js", "Node.js", "MongoDB", "Crypto"],
      github: "#",
      live: "#"
    },
    {
      title: "Decentralized Social Network",
      description: "Privacy-focused social platform built on blockchain with end-to-end encryption and user-controlled data ownership.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["React", "IPFS", "Ethereum", "Privacy"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 tech-grid">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work in blockchain technology, AI integration, 
            and cutting-edge web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card/80 border-border hover:border-primary transition-all duration-300 hover:glow-primary overflow-hidden slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-cyber opacity-80">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-mono text-sm">
                  {project.title}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-foreground mb-2">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-gradient-primary hover:glow-primary transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};