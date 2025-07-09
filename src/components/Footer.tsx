import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, url: "https://twitter.com", label: "Twitter" },
    { icon: <Mail className="h-5 w-5" />, url: "mailto:hello@techdev.com", label: "Email" }
  ];

  return (
    <footer className="bg-card/80 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold text-gradient-primary mb-2">
              &lt;Dev/&gt;
            </div>
            <p className="text-muted-foreground text-sm">
              © {currentYear} Tech Portfolio. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center justify-center w-10 h-10 bg-background/50 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:glow-primary"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            Built with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};