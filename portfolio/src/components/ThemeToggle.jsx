import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                                
    if (storedTheme === "dark" || (!storedTheme && systemPrefersDark)) {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
    } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
}, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    if (!mounted) return null;

    return (
        <button 
            onClick={toggleTheme}
            className={cn(
                "group fixed z-[10001] p-[9.5px] rounded-full transition-all duration-500",
                "bg-card/90 backdrop-blur-md border border-border/60",
                "hover:bg-card hover:scale-110 hover:shadow-2xl active:scale-95",
                "focus:outline-none focus:ring-2 focus:ring-primary/50",
                // Enhanced glow effects
                "hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]",
                "dark:hover:shadow-[0_0_25px_rgba(167,139,250,0.4)]",
                // Fixed positioning - aligned with navbar behavior
                "top-[0.875rem] right-4", // Adjusted to match navbar py-2/py-3 behavior
                "sm:top-5 sm:right-5",
                "md:right-5",
                // Enhanced mobile styles
                "max-sm:bg-card/95 max-sm:backdrop-blur-lg",
                "max-sm:border-2 max-sm:border-border/80"
            )}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {/* Animated background glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-subtle" />
                                    
            <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                <Sun 
                    className={cn(
                        "absolute inset-0 w-full h-full transition-all duration-700",
                        "text-amber-500 drop-shadow-lg",
                        "group-hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]",
                        isDarkMode 
                            ? "rotate-180 scale-0 opacity-0"
                            : "rotate-0 scale-100 opacity-100"
                    )}
                />
                <Moon 
                    className={cn(
                        "absolute inset-0 w-full h-full transition-all duration-700",
                        "text-blue-400 drop-shadow-lg",
                        "group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]",
                        isDarkMode 
                            ? "rotate-0 scale-100 opacity-100"
                            : "-rotate-180 scale-0 opacity-0"
                    )}
                />
            </div>
                                                
            {/* Enhanced tooltip for larger screens */}
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-2
                            bg-card/95 backdrop-blur-sm border border-border/60 rounded-lg text-sm whitespace-nowrap
                            opacity-0 group-hover:opacity-100 transition-all duration-300
                            pointer-events-none hidden sm:block shadow-xl
                            transform translate-x-2 group-hover:translate-x-0
                            text-foreground font-medium">
                {isDarkMode ? '☀️ Light mode' : '🌙 Dark mode'}
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-card/95" />
            </span>
                        
            {/* Ripple effect on click */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-active:scale-100 transition-transform duration-200" />
            </div>
        </button>
    );
};
