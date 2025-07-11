import { GraduationCap, Calendar, MapPin, Award, BookOpen, Globe, Users, Trophy } from "lucide-react";

const educationData = [
  {
    id: 1,
    type: "formal",
    institution: "The Egyptian E-Learning University (EELU)",
    degree: "Bachelor of Science in Computers and Information Technology",
    location: "Alexandria, Egypt",
    duration: "2020 - July 2024",
    gpa: "3.01",
    grade: "Good",
    description: "Comprehensive program covering computer science fundamentals, software engineering, and information technology systems.",
    highlights: [
      "Graduation Project: SmartTrips - Travel Website",
      "Grade: A+ on final project",
      "Focus on web development and software engineering"
    ],
    icon: GraduationCap,
    color: "primary"
  },
  {
    id: 2,
    type: "formal",
    institution: "Collège Saint Marc",
    degree: "High School Certificate",
    location: "Alexandria, Egypt",
    duration: "2018 - 2021",
    description: "Completed secondary education with focus on science and mathematics.",
    highlights: [
      "Strong foundation in mathematics and sciences",
      "Multilingual education environment",
      "Developed analytical thinking skills"
    ],
    icon: BookOpen,
    color: "purple-500"
  }
];

const selfEducationData = [
  {
    id: 1,
    platform: "Route",
    course: "Full Stack Web Development",
    duration: "2023 - 2024",
    description: "Comprehensive full-stack development course covering both frontend and backend technologies.",
    skills: ["React", "Node.js", "MongoDB", "Express.js"],
    icon: Globe,
    color: "green-500"
  },
  {
    id: 2,
    platform: "Elzero Web School",
    course: "Frontend Development Mastery",
    duration: "2022 - 2023",
    description: "In-depth frontend development course with practical projects and real-world applications.",
    skills: ["HTML5", "CSS3", "JavaScript", "React"],
    icon: Users,
    color: "blue-500"
  },
  {
    id: 3,
    platform: "Coursera",
    course: "Frontend Development Specialization",
    duration: "2023",
    description: "Professional certificate program focusing on modern frontend development practices.",
    skills: ["React", "TypeScript", "UI/UX", "Responsive Design"],
    icon: Trophy,
    color: "orange-500"
  }
];

export const EducationSection = () => {
  return (
    <section id="education" className="relative py-20 sm:py-24 md:py-32 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-green-500/5 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-green-500 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning journey through formal education and self-directed skill development
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-full bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">Formal Education</h3>
          </div>

          <div className="space-y-8">
            {educationData.map((edu, index) => {
              const IconComponent = edu.icon;
              return (
                <div
                  key={edu.id}
                  className="gradient-border p-6 sm:p-8 card-hover group opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Icon and Timeline */}
                    <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2">
                      <div className={`p-4 rounded-full bg-${edu.color}/10 group-hover:bg-${edu.color}/20 transition-colors duration-300`}>
                        <IconComponent className={`h-8 w-8 text-${edu.color}`} />
                      </div>
                      <div className="hidden lg:block w-px h-16 bg-border/50 mt-4"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div className="space-y-2">
                        <h4 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {edu.degree}
                        </h4>
                        <p className="text-lg font-semibold text-primary">
                          {edu.institution}
                        </p>
                        
                        {/* Meta Information */}
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                          {edu.gpa && (
                            <div className="flex items-center gap-2">
                              <Award className="h-4 w-4" />
                              <span>GPA: {edu.gpa} ({edu.grade})</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2">
                        <h5 className="font-semibold text-foreground">Key Highlights:</h5>
                        <ul className="space-y-1">
                          {edu.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Self Education */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-full bg-green-500/10">
              <BookOpen className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Self-Directed Learning
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selfEducationData.map((course, index) => {
              const IconComponent = course.icon;
              return (
                <div
                  key={course.id}
                  className="gradient-border p-6 card-hover group opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full bg-${course.color}/10 group-hover:bg-${course.color}/20 transition-colors duration-300 flex-shrink-0`}>
                        <IconComponent className={`h-6 w-6 text-${course.color}`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors duration-300">
                          {course.course}
                        </h4>
                        <p className={`text-${course.color} font-semibold text-sm`}>
                          {course.platform}
                        </p>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {course.description}
                    </p>

                    {/* Skills */}
                    <div className="space-y-2">
                      <h5 className="font-semibold text-sm">Technologies Learned:</h5>
                      <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className={`px-2 py-1 text-xs bg-${course.color}/10 text-${course.color} rounded-full`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievement Summary */}
        <div className="mt-16 gradient-border p-6 sm:p-8 bg-gradient-to-r from-primary/5 to-green-500/5">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-green-500/20">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold">
              Continuous Learning Mindset
            </h4>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combining formal education with self-directed learning to stay current with 
              the latest technologies and industry best practices. Always eager to learn 
              new skills and tackle challenging projects.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Courses Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">A+</div>
                <div className="text-sm text-muted-foreground">Project Grade</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
