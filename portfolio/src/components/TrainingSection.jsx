import { Calendar, MapPin, Award, ExternalLink, Users, Code, Briefcase } from "lucide-react";

const trainings = [
  {
    id: 1,
    title: "Laravel Training",
    organization: "RMZtech",
    duration: "Jul 2024 – Sept 2024",
    location: "Remote",
    type: "Backend Development",
    icon: Code,
    color: "from-red-500 to-orange-500",
    description: "Completed practical training in Laravel for back-end web development.",
    highlights: [
      "Gained experience with routing, MVC structure",
      "Database migrations and dynamic web applications",
      "Worked with PHP and MySQL",
      "Built CRUD-based mini projects"
    ],
    skills: ["Laravel", "PHP", "MySQL", "MVC Architecture", "Database Design"]
  },
  {
    id: 2,
    title: "Web Design Intern",
    organization: "National Telecommunication Institute (NTI)",
    duration: "May 2025 – Jul 2025",
    location: "Alexandria, Egypt",
    type: "Frontend Development",
    icon: Award,
    color: "from-blue-500 to-cyan-500",
    description: "Completed a 3-month intensive training focused on responsive web design.",
    highlights: [
      "Learned HTML, CSS, Bootstrap, jQuery and Javascript",
      "Built static and responsive pages",
      "Real-time instructor guidance and feedback",
      "Focus on responsive design principles"
    ],
    skills: ["HTML", "CSS", "Bootstrap", "jQuery", "JavaScript", "Responsive Design"]
  },
  {
    id: 3,
    title: "Freelancing & Digital Work Training",
    organization: "ITIDA + GIGS",
    duration: "May 2025 – Jul 2025",
    location: "Remote",
    type: "Professional Development",
    icon: Briefcase,
    color: "from-purple-500 to-pink-500",
    description: "Completed a 3-month program focused on launching and growing a successful freelancing career.",
    highlights: [
      "Essential freelancing skills development",
      "Proposal writing and client communication",
      "Project pricing and time management",
      "Personal branding and client relationships"
    ],
    skills: ["Freelancing", "Client Communication", "Project Management", "Business Development", "Personal Branding"]
  }
];

export const TrainingSection = () => {
  return (
    <section id="training" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Training & <span className="text-gradient">Internships</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through hands-on training programs and professional development courses
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Training Cards */}
        <div className="space-y-8">
          {trainings.map((training, index) => {
            const IconComponent = training.icon;
            return (
              <div
                key={training.id}
                className={`group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 
                  hover:bg-card/70 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl 
                  hover:shadow-primary/10 card-hover opacity-0 animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${training.color} opacity-0 
                  group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon and Type */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${training.color} 
                        flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${training.color} 
                            text-white shadow-sm`}>
                            {training.type}
                          </span>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary 
                          transition-colors duration-300">
                          {training.title}
                        </h3>
                        
                        <p className="text-lg font-semibold text-primary">
                          {training.organization}
                        </p>
                      </div>

                      {/* Meta Information */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{training.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{training.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {training.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {training.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${training.color} 
                                mt-2 flex-shrink-0`}></div>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills Tags */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Technologies & Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {training.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-xs font-medium bg-secondary/70 text-foreground 
                                rounded-full border border-border/50 hover:bg-primary/10 hover:border-primary/30 
                                transition-all duration-300 hover:scale-105"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${training.color} blur-xl`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-6 opacity-0 animate-fade-in-delay-4">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold">
              Ready to <span className="text-gradient">Collaborate?</span>
            </h3>
            <p className="text-muted-foreground">
              Let's discuss how my training and experience can benefit your next project
            </p>
          </div>
          
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-twinkle opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-1.5 h-1.5 bg-purple-500/40 rounded-full animate-twinkle" 
          style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-20 w-1 h-1 bg-pink-500/50 rounded-full animate-twinkle" 
          style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};
