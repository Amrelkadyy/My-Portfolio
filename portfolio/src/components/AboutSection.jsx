import { Briefcase, Code, User, Download, MapPin, Calendar, Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 sm:py-24 md:py-32 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through clean code and innovative design
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                Passionate <span className="text-primary">Frontend Developer</span> & 
                <span className="text-gradient"> Tech Creator</span>
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-base sm:text-lg">
                  A recent Computer and Information Technology graduate with a strong focus on front-end web development. 
                  I bring over <span className="text-primary font-semibold">2+ years</span> of hands-on experience in designing 
                  and developing responsive, user-friendly interfaces.
                </p>
                
                <p className="text-base sm:text-lg">
                  Proficient in modern technologies like <span className="text-primary font-semibold">React, TypeScript, and Node.js</span>, 
                  I specialize in creating clean, interactive, and visually appealing web applications. With a keen eye for detail 
                  and user experience, I'm passionate about turning ideas into engaging digital experiences.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-6">
                <div className="text-center p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
                  <div className="text-xl sm:text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
                  <div className="text-xl sm:text-2xl font-bold text-primary">+10</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Projects Built</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 col-span-2 sm:col-span-1">
                  <div className="text-xl sm:text-2xl font-bold text-primary">A+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Graduation Grade</div>
                </div>
              </div>

              {/* Location & Contact Info */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Alexandria/Cairo, Egypt</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href="#contact" 
                className="cosmic-button group px-6 py-3 text-center"
              >
                <span className="relative z-10">Get In Touch</span>
              </a>
              <a
                href="/amr's cv.pdf" 
                download
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column - Services/Skills Cards */}
          <div className="space-y-6">
            <div className="gradient-border p-6 card-hover group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-semibold text-lg mb-2">Frontend Development</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Specialized in React, TypeScript, and modern CSS frameworks. Creating responsive, 
                    interactive interfaces with clean code and optimal performance.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">React</span>
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">TypeScript</span>
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">Tailwind</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-semibold text-lg mb-2">UI/UX Design</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Passionate about user-centered design principles. Proficient in Adobe Creative Suite 
                    and Figma, focusing on creating intuitive and visually appealing interfaces.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 text-xs bg-purple-500/10 text-purple-500 rounded-full">Figma</span>
                    <span className="px-2 py-1 text-xs bg-purple-500/10 text-purple-500 rounded-full">Photoshop</span>
                    <span className="px-2 py-1 text-xs bg-purple-500/10 text-purple-500 rounded-full">Canva Pro</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-semibold text-lg mb-2">Full-Stack Development</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Experience with backend technologies including Node.js, Express.js, and Laravel. 
                    Building complete web applications from concept to deployment.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 text-xs bg-green-500/10 text-green-500 rounded-full">Node.js</span>
                    <span className="px-2 py-1 text-xs bg-green-500/10 text-green-500 rounded-full">Laravel</span>
                    <span className="px-2 py-1 text-xs bg-green-500/10 text-green-500 rounded-full">MongoDB</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Highlight */}
            <div className="gradient-border p-6 card-hover group bg-gradient-to-r from-primary/5 to-purple-500/5">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-semibold text-lg mb-2">Recent Achievement</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <span className="text-primary font-semibold">A+ Grade</span> on graduation project "SmartTrips" - 
                    A comprehensive travel website with personalized recommendations and booking system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
