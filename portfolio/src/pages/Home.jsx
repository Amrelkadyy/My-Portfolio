import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { SkillsSection } from "../components/SkillsSection";
import { EducationSection } from "../components/EducationSection";
import { TrainingSection } from "../components/TrainingSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Toaster } from "@/components/ui/toaster"; // Add this import

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Background Effects */}
            <StarBackground />
            
            {/* Navbar */}
            <Navbar />
            
            {/* Main Content */}
            <main>
                <HeroSection/>
                <AboutSection />
                <SkillsSection />
                <EducationSection />
                <TrainingSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            
            {/* Footer */}
            <Footer />
            
            {/* Toast Container - Add this */}
            <Toaster />
        </div>
    );
};
