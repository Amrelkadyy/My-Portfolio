import { ArrowDown, Code, Sparkles, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs - Responsive sizes */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Elements - Hidden on small screens to reduce clutter */}
        <div className="hidden sm:block absolute top-20 left-10 opacity-20">
          <Code className="w-6 h-6 md:w-8 md:h-8 text-primary animate-float" />
        </div>
        <div className="hidden sm:block absolute top-40 right-20 opacity-20">
          <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-purple-500 animate-float" style={{ animationDelay: '2s' }} />
        </div>
        <div className="hidden sm:block absolute bottom-40 left-20 opacity-20">
          <Zap className="w-6 h-6 md:w-7 md:h-7 text-primary animate-float" style={{ animationDelay: '4s' }} />
        </div>
      </div>

      <div className="container max-w-5xl mx-auto text-center z-10 relative">
        <div className="space-y-6 sm:space-y-8">
          {/* Enhanced Greeting - Better mobile spacing */}
          <div className="space-y-2 pt-4 sm:pt-0">
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground/80 font-medium tracking-wider uppercase opacity-0 animate-fade-in">
              Welcome to my digital universe
            </p>
            <div className="h-0.5 sm:h-1 w-16 sm:w-20 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full opacity-0 animate-fade-in-delay-1"></div>
          </div>

          {/* Main Title with Enhanced Effects - Responsive text sizes */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight">
            <div className="space-y-1 sm:space-y-2">
              <div>
                <span className="opacity-0 animate-fade-in text-glow">Hi, I'm</span>
              </div>
              <div className="relative">
                <span className="text-primary opacity-0 animate-fade-in-delay-1 text-glow relative z-10">
                  Amr
                </span>
                <span className="text-gradient ml-2 sm:ml-4 opacity-0 animate-fade-in-delay-2 relative">
                  Ahmed
                  {/* Decorative underline - Responsive */}
                  <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full opacity-0 animate-fade-in-delay-3 transform scale-x-0 animate-[fade-in_0.7s_ease-out_1.2s_forwards,scale-x_0.8s_ease-out_1.2s_forwards]"></div>
                </span>
              </div>
            </div>
          </h1>

          {/* Enhanced Subtitle - Better mobile text sizes */}
          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 opacity-0 animate-fade-in-delay-3 px-2">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Building <span className="text-primary font-semibold">bold interfaces</span> with React — where{" "}
              <span className="text-gradient font-semibold">function meets finesse</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              I code with care, design with detail, and deploy with confidence.
            </p>
          </div>

          {/* Enhanced Skills Tags - Better mobile layout */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 opacity-0 animate-fade-in-delay-4 px-2">
            {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js'].map((skill, index) => (
              <span
                key={skill}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${1.5 + index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Enhanced CTA Buttons - Better mobile layout */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 opacity-0 animate-fade-in-delay-4 px-4">
            <a 
              href="#projects" 
              className="group cosmic-button px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold relative overflow-hidden w-full sm:w-auto max-w-xs"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="#contact" 
              className="px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold border-2 border-primary/30 rounded-full text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto max-w-xs"
            >
              Get In Touch
            </a>
          </div>

          {/* Stats or Quick Info - Better mobile grid */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-sm sm:max-w-2xl mx-auto pt-6 sm:pt-8 opacity-0 animate-fade-in-delay-4 px-4">
            <div className="text-center space-y-1">
              <div className="text-xl sm:text-2xl font-bold text-primary">3+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-xl sm:text-2xl font-bold text-primary">10+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Projects Built</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-xl sm:text-2xl font-bold text-primary">∞</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Lines of Code</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Better mobile positioning */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-0 animate-fade-in-delay-4">
        <span className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2 font-medium">Discover More</span>
        <div className="relative">
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          <div className="absolute inset-0 h-5 w-5 sm:h-6 sm:w-6 border-2 border-primary/30 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Decorative Elements - Responsive sizes and positioning */}
      <div className="absolute top-16 sm:top-10 right-6 sm:right-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-twinkle opacity-60"></div>
      <div className="absolute bottom-24 sm:bottom-20 left-6 sm:left-10 w-1 h-1 bg-purple-500 rounded-full animate-twinkle opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-12 sm:right-20 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-pink-500 rounded-full animate-twinkle opacity-50" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};
