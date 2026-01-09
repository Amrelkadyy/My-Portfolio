import { useState } from "react";
import { Code, Database, Wrench, Sparkles, Layout, Server, Smartphone, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

// Removed "level" and simplified the data structure
const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend", icon: Code, description: "Semantic markup & styling" },
  { name: "JavaScript", category: "frontend", icon: Globe, description: "ES6+, Async/Await, DOM" },
  { name: "React", category: "frontend", icon: Code, description: "Hooks, Context, Redux" },
  { name: "Tailwind CSS", category: "frontend", icon: Sparkles, description: "Utility-first design" },
  { name: "Next.js", category: "frontend", icon: Layout, description: "SSR, SSG, API Routes" },
  // Backend
  { name: "Node.js", category: "backend", icon: Server, description: "Runtime environment" },
  { name: "Express", category: "backend", icon: Database, description: "RESTful APIs" },
  { name: "MongoDB", category: "backend", icon: Database, description: "NoSQL Database" },
  { name: "Laravel", category: "backend", icon: Database, description: "PHP Framework" },
  // Tools
  { name: "Git/GitHub", category: "tools", icon: Wrench, description: "Version Control" },
  { name: "Vercel", category: "tools", icon: Globe, description: "Deployment & CI/CD" },
  { name: "Figma", category: "tools", icon: Layout, description: "UI/UX Design" },
  { name: "VS Code", category: "tools", icon: Wrench, description: "Development Environment" },
];

const categories = [
  { id: "all", label: "Full Stack", icon: Sparkles },
  { id: "frontend", label: "Frontend", icon: Layout },
  { id: "backend", label: "Backend", icon: Server },
  { id: "tools", label: "Tools", icon: Wrench },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="relative py-20 sm:py-24 md:py-32 px-4 overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Technical <span className="text-primary">Proficiency</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A curated list of technologies and tools I use to build scalable digital products.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-105"
                    : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                )}
              >
                <IconComponent className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            
            return (
              <div
                key={`${skill.name}-${index}`}
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                  {/* Icon Container */}
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground tracking-tight">
                      {skill.name}
                    </h3>
                    {/* Optional: Add a tiny description or remove this line if you want it cleaner */}
                    <p className="text-xs text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple Footer Stats */}
        <div className="mt-16 pt-8 border-t border-border/50 grid grid-cols-2 md:grid-cols-4 gap-8">
           <div className="text-center">
             <div className="text-3xl font-bold text-primary mb-1">{skills.length}+</div>
             <div className="text-sm text-muted-foreground uppercase tracking-wider">Technologies</div>
           </div>
           <div className="text-center">
             <div className="text-3xl font-bold text-primary mb-1">
               {skills.filter(s => s.category === 'frontend').length}
             </div>
             <div className="text-sm text-muted-foreground uppercase tracking-wider">Frontend Tools</div>
           </div>
           <div className="text-center">
             <div className="text-3xl font-bold text-primary mb-1">
               {skills.filter(s => s.category === 'backend').length}
             </div>
             <div className="text-sm text-muted-foreground uppercase tracking-wider">Backend Tech</div>
           </div>
           <div className="text-center">
             <div className="text-3xl font-bold text-primary mb-1">100%</div>
             <div className="text-sm text-muted-foreground uppercase tracking-wider">Committed</div>
           </div>
        </div>
      </div>
    </section>
  );
};