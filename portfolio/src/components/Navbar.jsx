import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import logoLight from "../assets/logo.png";
import logoDark from "../assets/logo-white.png";
import { Menu, X, Sparkles } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Training", href: "#training" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Active section detection
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    handleScroll();
    checkTheme();
    window.addEventListener("scroll", handleScroll);
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-500",
        isScrolled 
          ? "py-2 bg-background/85 backdrop-blur-xl shadow-lg border-b border-border/50" 
          : "py-4 bg-transparent"
      )}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      <div className="container relative flex items-center justify-between">
        {/* Logo with enhanced styling */}
        <a 
          href="#" 
          className="group relative flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
        >
          <div className="relative">
            <img
              src={isDarkMode ? logoDark : logoLight}
              alt="Logo"
              className={cn(
                "transition-all duration-500",
                "h-8 w-auto sm:h-10 md:h-12 lg:h-14 xl:h-16",
                "group-hover:drop-shadow-lg"
              )}
            />
            {/* Logo glow effect */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          {/* Optional: Add your name/title next to logo */}
          <div className="hidden sm:block">
            <div className="text-lg font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Portfolio
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item, key) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={cn(
                  "relative px-4 py-2 rounded-full transition-all duration-300",
                  "text-sm font-medium tracking-wide",
                  "hover:bg-primary/10 hover:text-primary",
                  "focus:outline-none focus:ring-2 focus:ring-primary/50",
                  isActive 
                    ? "text-primary bg-primary/10 shadow-lg" 
                    : "text-foreground/80"
                )}
              >
                {item.name}
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button - Enhanced */}
        <button 
          onClick={() => setIsMenuOpen((prev) => !prev)} 
          className={cn(
            "md:hidden relative p-2 rounded-full transition-all duration-300 z-50",
            "bg-card/80 backdrop-blur-sm border border-border/60",
            "hover:bg-card hover:scale-110 hover:shadow-lg",
            "focus:outline-none focus:ring-2 focus:ring-primary/50",
            isMenuOpen && "bg-card shadow-lg"
          )}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu 
              size={24} 
              className={cn(
                "absolute inset-0 transition-all duration-300 text-foreground",
                isMenuOpen ? "rotate-180 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
              )}
            />
            <X 
              size={24} 
              className={cn(
                "absolute inset-0 transition-all duration-300 text-foreground",
                isMenuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0"
              )}
            />
          </div>
          
          {/* Button glow effect */}
          <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Mobile Menu - Enhanced */}
        <div 
          className={cn(
            "fixed inset-0 z-40 md:hidden",
            "transition-all duration-500 ease-in-out",
            isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          )}
        >
          {/* Backdrop */}
          <div 
            className={cn(
              "absolute inset-0 bg-background/95 backdrop-blur-xl",
              "transition-opacity duration-500",
              isMenuOpen ? "opacity-100" : "opacity-0"
            )}
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div 
            className={cn(
              "absolute inset-x-4 top-20 bottom-4 rounded-2xl",
              "bg-card/90 backdrop-blur-xl border border-border/60 shadow-2xl",
              "transition-all duration-500 ease-out",
              "flex flex-col items-center justify-center",
              isMenuOpen 
                ? "opacity-100 scale-100 translate-y-0" 
                : "opacity-0 scale-95 -translate-y-4"
            )}
          >
            {/* Decorative elements */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2">
              <Sparkles className="w-6 h-6 text-primary/60 animate-pulse" />
            </div>
            
            <div className="flex flex-col space-y-6 text-center">
              {navItems.map((item, key) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={key}
                    href={item.href}
                    className={cn(
                      "relative px-8 py-3 rounded-full transition-all duration-300",
                      "text-lg font-medium tracking-wide",
                      "hover:bg-primary/10 hover:text-primary hover:scale-105",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50",
                      "transform hover:translate-y-[-2px]",
                      isActive 
                        ? "text-primary bg-primary/10 shadow-lg scale-105" 
                        : "text-foreground/80"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    style={{
                      animationDelay: `${key * 50}ms`,
                      animation: isMenuOpen ? 'slideInUp 0.5s ease-out forwards' : 'none'
                    }}
                  >
                    {item.name}
                    {/* Active indicator for mobile */}
                    {isActive && (
                      <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full animate-pulse" />
                    )}
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </a>
                );
              })}
            </div>
            
            {/* Bottom decorative element */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full" />
          </div>
        </div>
      </div>
      
      {/* Bottom border animation */}
      <div className={cn(
        "absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-all duration-500",
        isScrolled ? "w-full opacity-100" : "w-0 opacity-0"
      )} />
    </nav>
  );
};
