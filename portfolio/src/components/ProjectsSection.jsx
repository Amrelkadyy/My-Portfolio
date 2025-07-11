import { ArrowRight, ExternalLink, Github, Calendar, Award } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Majestic Fragrance - E-commerce Website",
    description: "A complete online store for luxury perfume brand built with MERN stack. Features product catalog, shopping cart, secure checkout flow, and modern responsive design.",
    image: "/projects/majestic-fragrance.png", // You'll need to add this image
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    demoUrl: "https://www.majesticfragrances-eg.com",
    githubUrl: "https://github.com/Amrelkadyy/Perfumes-website",
    year: "2025",
    type: "Personal Project",
    featured: true,
  },
  {
    id: 2,
    title: "SmartTrips - Travel Website",
    description: "Full-stack travel website with dynamic trip listings, booking system, and user management. Features personalized travel recommendations and integrated chatbot with NLP.",
    image: "/projects/smarttrips.png", // You'll need to add this image
    tags: ["Laravel", "HTML", "CSS", "JavaScript", "SCSS", "NLP", "APIs"],
    demoUrl: "https://github.com/Amrelkadyy/Travel-Project-SmartTrips-", // Update with actual Vercel link
    githubUrl: "https://github.com/Amrelkadyy/Travel-Project-SmartTrips-",
    year: "2024",
    type: "Graduation Project",
    grade: "A+",
    featured: true,
  },
  {
    id: 3,
    title: "Laravel E-commerce Platform",
    description: "Training-based e-commerce platform featuring comprehensive user authentication, advanced cart system, and powerful admin dashboard for inventory management.",
    image: "/projects/laravel-ecommerce.png", // You'll need to add this image
    tags: ["Laravel", "PHP", "MySQL", "Blade", "Bootstrap"],
    demoUrl: "https://github.com/Amrelkadyy/E-commerce-laravel-project", // Update with actual Vercel link
    githubUrl: "https://github.com/Amrelkadyy/E-commerce-laravel-project",
    year: "2024",
    type: "Training Project",
    featured: true,
  },
  {
    id: 4,
    title: "Fokir - Modern Landing Page",
    description: "Responsive, modern landing page created during NTI web design course. Focused on clean layout design, visual hierarchy, and mobile-first responsiveness.",
    image: "/projects/fokir.png", // You'll need to add this image
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design"],
    demoUrl: "https://github.com/Amrelkadyy/fokir-landing-page", // Update with actual Vercel link
    githubUrl: "https://github.com/Amrelkadyy/fokir-landing-page", // Update with actual repo
    year: "2025",
    type: "Course Project",
    featured: false,
  },
  {
    id: 5,
    title: "Bookstore Frontend Website",
    description: "Responsive bookstore interface with interactive layout and clean design. Features book browsing, search functionality, and modern UI components.",
    image: "/projects/bookstore.png", // You'll need to add this image
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    demoUrl: "https://github.com/Amrelkadyy/bookstore-frontend", // Update with actual Vercel link
    githubUrl: "https://github.com/Amrelkadyy/bookstore-frontend", // Update with actual repo
    year: "2023",
    type: "Personal Project",
    featured: false,
  },
];

export const ProjectsSection = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Here's a showcase of my recent work. Each project represents a unique challenge 
            and demonstrates my growth as a developer, from concept to deployment.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            <span className="text-primary">✨ Featured Work</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-border/50 hover:border-primary/30"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-purple-500/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback gradient background if image fails to load
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Project Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium rounded-full">
                      {project.type}
                    </span>
                  </div>

                  {/* Grade Badge (if applicable) */}
                  {project.grade && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-green-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full flex items-center gap-1">
                        <Award size={12} />
                        {project.grade}
                      </span>
                    </div>
                  )}

                  {/* Action Buttons Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cosmic-button px-4 py-2 text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-card/90 backdrop-blur-sm border border-border rounded-full text-sm font-medium hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0"
                      style={{ transitionDelay: '50ms' }}
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      {project.year}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-secondary/70 text-secondary-foreground rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 p-1"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 p-1"
                        title="Source Code"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">
                      {project.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              <span className="text-primary">🚀 More Projects</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-card/40 backdrop-blur-sm rounded-lg p-6 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:bg-card/60"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 4).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 text-xs bg-secondary/50 text-secondary-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 text-xs text-muted-foreground">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="https://github.com/Amrelkadyy"
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button flex items-center gap-2 px-8 py-3 text-lg"
            >
              <Github size={20} />
              View All Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 text-lg font-semibold border-2 border-primary/30 rounded-full text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105"
            >
              Let's Work Together
            </a>
          </div>
          <p className="text-muted-foreground text-sm mt-4 max-w-md mx-auto">
            Interested in collaborating? I'm always open to discussing new opportunities and exciting projects.
          </p>
        </div>
      </div>
    </section>
  );
};
