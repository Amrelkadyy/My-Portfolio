import { ArrowDown, Code, Sparkles, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Code className="w-8 h-8 text-primary animate-float" />
        </div>
        <div className="absolute top-40 right-20 opacity-20">
          <Sparkles className="w-6 h-6 text-purple-500 animate-float" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute bottom-40 left-20 opacity-20">
          <Zap className="w-7 h-7 text-primary animate-float" style={{ animationDelay: '4s' }} />
        </div>
      </div>

      <div className="container max-w-5xl mx-auto text-center z-10 relative">
        <div className="space-y-8">
          {/* Enhanced Greeting */}
          <div className="space-y-2">
            <p className="text-sm md:text-base text-muted-foreground/80 font-medium tracking-wider uppercase opacity-0 animate-fade-in">
              Welcome to my digital universe
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full opacity-0 animate-fade-in-delay-1"></div>
          </div>

          {/* Main Title with Enhanced Effects */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
            <div className="space-y-2">
              <div>
                <span className="opacity-0 animate-fade-in text-glow">Hi, I'm</span>
              </div>
              <div className="relative">
                <span className="text-primary opacity-0 animate-fade-in-delay-1 text-glow relative z-10">
                  Amr
                </span>
                <span className="text-gradient ml-4 opacity-0 animate-fade-in-delay-2 relative">
                  Ahmed
                  {/* Decorative underline */}
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full opacity-0 animate-fade-in-delay-3 transform scale-x-0 animate-[fade-in_0.7s_ease-out_1.2s_forwards,scale-x_0.8s_ease-out_1.2s_forwards]"></div>
                </span>
              </div>
            </div>
          </h1>

          {/* Enhanced Subtitle */}
          <div className="max-w-3xl mx-auto space-y-4 opacity-0 animate-fade-in-delay-3">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Building <span className="text-primary font-semibold">bold interfaces</span> with React — where{" "}
              <span className="text-gradient font-semibold">function meets finesse</span>
            </p>
            <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              I code with care, design with detail, and deploy with confidence.
            </p>
          </div>

          {/* Enhanced Skills Tags */}
          <div className="flex flex-wrap justify-center gap-3 opacity-0 animate-fade-in-delay-4">
            {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js'].map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${1.5 + index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 opacity-0 animate-fade-in-delay-4">
            <a 
              href="#projects" 
              className="group cosmic-button px-8 py-3 text-lg font-semibold relative overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 text-lg font-semibold border-2 border-primary/30 rounded-full text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get In Touch
            </a>
          </div>

          {/* Stats or Quick Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto pt-8 opacity-0 animate-fade-in-delay-4">
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Projects Built</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-primary">∞</div>
              <div className="text-sm text-muted-foreground">Lines of Code</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-0 animate-fade-in-delay-4">
        <span className="text-sm text-muted-foreground mb-2 font-medium">Discover More</span>
        <div className="relative">
          <ArrowDown className="h-6 w-6 text-primary" />
          <div className="absolute inset-0 h-6 w-6 border-2 border-primary/30 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-primary rounded-full animate-twinkle opacity-60"></div>
      <div className="absolute bottom-20 left-10 w-1 h-1 bg-purple-500 rounded-full animate-twinkle opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 w-1.5 h-1.5 bg-pink-500 rounded-full animate-twinkle opacity-50" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};
