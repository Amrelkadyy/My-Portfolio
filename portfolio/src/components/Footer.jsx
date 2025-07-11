import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Code,
  Heart,
  Coffee,
  ArrowUp,
  ExternalLink
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/amr-ahmed-662342334/"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Amrelkadyy"
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
           href: "https://vercel.com/amr-ahmeds-projects-9e44e912"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-background via-secondary/10 to-background border-t border-border/50">
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gradient">Amr Ahmed</h3>
                  <p className="text-sm text-muted-foreground">Frontend Developer</p>
                </div>
              </div>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Passionate frontend developer specializing in React and modern web technologies. 
                Creating beautiful, responsive, and user-friendly digital experiences.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>Alexandria, Egypt</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail size={14} />
                  <a href="mailto:amr2002ahmed@gmail.com" className="hover:text-primary transition-colors">
                    amr2002ahmed@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Section */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Connect</h4>
              <div className="flex flex-col gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm group"
                  >
                    <social.icon size={16} className="group-hover:scale-110 transition-transform" />
                    {social.label}
                  </a>
                ))}
              </div>
              
              {/* Status */}
              <div className="mt-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-700 dark:text-green-400">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <p>
                  &copy; {currentYear} Amr Ahmed. All rights reserved.
                </p>
                <div className="hidden md:flex items-center gap-1">
                  <span>Made with</span>
                  <Heart size={14} className="text-red-500 animate-pulse" />
                  <span>and</span>
                  <Coffee size={14} className="text-amber-600" />
                  <span>in Egypt</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Tech Stack */}
                <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Built with React & Tailwind CSS</span>
                </div>
                
                {/* Back to Top Button */}
                <button
                  onClick={scrollToTop}
                  className="group p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110 active:scale-95"
                  aria-label="Back to top"
                >
                  <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Mobile "Made with" section */}
            <div className="md:hidden flex items-center justify-center gap-1 text-sm text-muted-foreground mt-4 pt-4 border-t border-border/30">
              <span>Made with</span>
              <Heart size={14} className="text-red-500 animate-pulse" />
              <span>and</span>
              <Coffee size={14} className="text-amber-600" />
              <span>in Egypt</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
