import { useState } from "react";
import { Code, Database, Wrench, Sparkles, Zap, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", icon: Code },
  { name: "JavaScript", level: 90, category: "frontend", icon: Zap },
  { name: "React", level: 90, category: "frontend", icon: Layers },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: Sparkles },
  { name: "Next.js", level: 80, category: "frontend", icon: Layers },
  // Backend
  { name: "Node.js", level: 80, category: "backend", icon: Database },
  { name: "Express", level: 75, category: "backend", icon: Database },
  { name: "MongoDB", level: 80, category: "backend", icon: Database },
  { name: "Larave", level: 80, category: "backend", icon: Database },
  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", icon: Wrench },
  { name: "Vercel", level: 90, category: "tools", icon: Wrench },
  { name: "Figma", level: 85, category: "tools", icon: Wrench },
  { name: "VS Code", level: 95, category: "tools", icon: Wrench },
];

const categories = [
  { id: "all", label: "All Skills", icon: Sparkles },
  { id: "frontend", label: "Frontend", icon: Code },
  { id: "backend", label: "Backend", icon: Database },
  { id: "tools", label: "Tools", icon: Wrench },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const getSkillColor = (level) => {
    if (level >= 90) return "from-green-500 to-emerald-600";
    if (level >= 80) return "from-blue-500 to-cyan-600";
    if (level >= 70) return "from-purple-500 to-violet-600";
    if (level >= 60) return "from-orange-500 to-amber-600";
    return "from-red-500 to-rose-600";
  };

  const getSkillGlow = (level) => {
    if (level >= 90) return "shadow-green-500/30";
    if (level >= 80) return "shadow-blue-500/30";
    if (level >= 70) return "shadow-purple-500/30";
    if (level >= 60) return "shadow-orange-500/30";
    return "shadow-red-500/30";
  };

  return (
    <section id="skills" className="relative py-20 sm:py-24 md:py-32 px-4 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/3 left-1/5 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/3 right-1/5 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Code Elements */}
        <div className="hidden sm:block absolute top-16 left-12 opacity-10">
          <Code className="w-8 h-8 md:w-10 md:h-10 text-primary animate-float" />
        </div>
        <div className="hidden sm:block absolute top-32 right-16 opacity-10">
          <Database className="w-6 h-6 md:w-8 md:h-8 text-blue-500 animate-float" style={{ animationDelay: '1s' }} />
        </div>
        <div className="hidden sm:block absolute bottom-32 left-16 opacity-10">
          <Wrench className="w-7 h-7 md:w-9 md:h-9 text-purple-500 animate-float" style={{ animationDelay: '3s' }} />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="space-y-2">
            <p className="text-xs sm:text-sm text-muted-foreground/80 font-medium tracking-wider uppercase opacity-0 animate-fade-in">
              Technical Expertise
            </p>
            <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full opacity-0 animate-fade-in-delay-1"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight opacity-0 animate-fade-in-delay-1">
            My <span className="text-gradient">Skills</span> & 
            <span className="text-primary ml-2 sm:ml-3">Expertise</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">
            Crafting digital experiences with modern technologies and tools
          </p>
        </div>

        {/* Enhanced Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 opacity-0 animate-fade-in-delay-2">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "group flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all duration-300 font-medium text-sm sm:text-base",
                  "border-2 backdrop-blur-sm hover:scale-105 active:scale-95",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30"
                    : "bg-card/50 text-muted-foreground border-border/50 hover:bg-card/80 hover:border-primary/30 hover:text-primary"
                )}
              >
                <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                <span className="hidden sm:inline">{category.label}</span>
                <span className="sm:hidden">{category.id === "all" ? "All" : category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 opacity-0 animate-fade-in-delay-3">
          {filteredSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={`${skill.name}-${index}`}
                className="group relative bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl p-6 transition-all duration-500 hover:bg-card/60 hover:border-primary/30 hover:scale-105 hover:shadow-xl card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {skill.level}%
                  </span>
                </div>

                {/* Enhanced Progress Bar */}
                <div className="space-y-2">
                  <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                    <div
                      className={cn(
                        "h-2 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r",
                        getSkillColor(skill.level),
                        "shadow-lg",
                        getSkillGlow(skill.level)
                      )}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1 + 0.5}s`
                      }}
                    />
                  </div>
                  
                  {/* Skill Level Indicator */}
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>Proficiency</span>
                    <span className="font-medium">
                      {skill.level >= 90 ? "Expert" : 
                       skill.level >= 80 ? "Advanced" : 
                       skill.level >= 70 ? "Intermediate" : 
                       skill.level >= 60 ? "Proficient" : "Learning"}
                    </span>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Skills Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 opacity-0 animate-fade-in-delay-4">
          <div className="text-center space-y-2 p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50">
            <div className="text-2xl sm:text-3xl font-bold text-primary">{skills.length}</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Total Skills</div>
          </div>
          <div className="text-center space-y-2 p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50">
            <div className="text-2xl sm:text-3xl font-bold text-primary">
              {skills.filter(s => s.category === 'frontend').length}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">Frontend</div>
          </div>
          <div className="text-center space-y-2 p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50">
            <div className="text-2xl sm:text-3xl font-bold text-primary">
              {skills.filter(s => s.category === 'backend').length}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">Backend</div>
          </div>
          <div className="text-center space-y-2 p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50">
            <div className="text-2xl sm:text-3xl font-bold text-primary">
              {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">Avg Level</div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-8 w-2 h-2 bg-primary rounded-full animate-twinkle opacity-60"></div>
        <div className="absolute bottom-32 left-8 w-1.5 h-1.5 bg-purple-500 rounded-full animate-twinkle opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-16 w-1 h-1 bg-pink-500 rounded-full animate-twinkle opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};
