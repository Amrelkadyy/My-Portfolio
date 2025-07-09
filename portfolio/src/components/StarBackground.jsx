import { useEffect, useState } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [shootingStars, setShootingStars] = useState([]);
    const [nebulae, setNebulae] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check theme immediately
        const checkTheme = () => {
            const isDark = document.documentElement.classList.contains('dark');
            setIsDarkMode(isDark);
        };

        checkTheme();
        generateStars();
        generateMeteors();
        generateNebulae();
        
        // Create initial shooting stars after a delay
        const initialShootingStarTimeout = setTimeout(() => {
            generateShootingStars();
        }, 2000);
        
        const handleResize = () => {
            generateStars();
            generateNebulae();
        };
        
        // Listen for theme changes
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });
        
        window.addEventListener("resize", handleResize);
        
        // Create shooting stars periodically
        const shootingStarInterval = setInterval(() => {
            generateShootingStars();
        }, 8000);
        
        return () => {
            window.removeEventListener("resize", handleResize);
            observer.disconnect();
            clearInterval(shootingStarInterval);
            clearTimeout(initialShootingStarTimeout);
        };
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 8000
        );
        const newStars = [];
        
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 2.5 + 0.5,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.6 + 0.4,
                animationDuration: Math.random() * 3 + 2,
                animationType: Math.random() > 0.7 ? 'twinkle' : 'pulse-subtle',
                brightness: Math.random() * 0.5 + 0.5,
                delay: Math.random() * 2, // Add delay to prevent stuck stars
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 3;
        const newMeteors = [];
        
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 1.5 + 0.8,
                x: Math.random() * 100,
                y: Math.random() * 30,
                delay: Math.random() * 15 + 1,
                animationDuration: Math.random() * 4 + 6,
            });
        }
        setMeteors(newMeteors);
    };

    const generateShootingStars = () => {
        const numberOfShootingStars = Math.floor(Math.random() * 3) + 1;
        const newShootingStars = [];
        
        for (let i = 0; i < numberOfShootingStars; i++) {
            newShootingStars.push({
                id: Date.now() + i,
                x: Math.random() * 100,
                y: Math.random() * 50,
                delay: Math.random() * 2,
                animationDuration: Math.random() * 1 + 2,
            });
        }
        setShootingStars(newShootingStars);
        
        // Clear shooting stars after animation
        setTimeout(() => {
            setShootingStars([]);
        }, 5000);
    };

    const generateNebulae = () => {
        const numberOfNebulae = 4;
        const newNebulae = [];
        
        for (let i = 0; i < numberOfNebulae; i++) {
            newNebulae.push({
                id: i,
                size: Math.random() * 200 + 100,
                x: Math.random() * 100,
                y: Math.random() * 100,
                animationDuration: Math.random() * 10 + 15,
                delay: Math.random() * 3 + 0.5,
            });
        }
        setNebulae(newNebulae);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Static stars - only in dark mode */}
            {isDarkMode && stars.map((star) => (
                <div 
                    key={`star-${star.id}`} 
                    className={`star animate-${star.animationType} opacity-0`}
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                        animationDelay: star.delay + "s",
                        animationFillMode: 'forwards',
                        filter: `brightness(${star.brightness})`,
                    }} 
                />
            ))}

            {/* Nebulae - only in dark mode */}
            {isDarkMode && nebulae.map((nebula) => (
                <div 
                    key={`nebula-${nebula.id}`} 
                    className="nebula animate-nebula opacity-0" 
                    style={{
                        width: nebula.size + "px",
                        height: nebula.size + "px",
                        left: nebula.x + "%",
                        top: nebula.y + "%",
                        animationDuration: nebula.animationDuration + "s",
                        animationDelay: nebula.delay + "s",
                        animationFillMode: 'forwards',
                    }} 
                />
            ))}

            {/* Enhanced meteors - visible in both modes */}
            {meteors.map((meteor) => (
                <div 
                    key={`meteor-${meteor.id}`} 
                    className="meteor animate-meteor opacity-0" 
                    style={{
                        width: meteor.size * 15 + "px",
                        height: meteor.size + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay + "s",
                        animationDuration: meteor.animationDuration + "s",
                        animationFillMode: 'forwards',
                    }} 
                />
            ))}

            {/* Shooting stars - visible in both modes */}
            {shootingStars.map((shootingStar) => (
                <div 
                    key={`shooting-star-${shootingStar.id}`} 
                    className="shooting-star animate-shooting-star opacity-0" 
                    style={{
                        left: shootingStar.x + "%",
                        top: shootingStar.y + "%",
                        animationDelay: shootingStar.delay + "s",
                        animationDuration: shootingStar.animationDuration + "s",
                        animationFillMode: 'forwards',
                    }} 
                />
            ))}

            {/* Cosmic dust effect - only in dark mode */}
            {isDarkMode && (
                <div className="absolute inset-0 opacity-30">
                    <div 
                        className="absolute inset-0 animate-cosmic-drift opacity-0"
                        style={{
                            background: `radial-gradient(ellipse at 20% 30%, 
                                rgba(139, 92, 246, 0.03) 0%, 
                                transparent 50%), 
                            radial-gradient(ellipse at 80% 70%, 
                                rgba(167, 139, 250, 0.02) 0%, 
                                transparent 50%)`,
                            animationDelay: '1s',
                            animationFillMode: 'forwards',
                        }}
                    />
                </div>
            )}

            {/* Subtle background gradient overlay */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/5" />
                {isDarkMode && (
                    <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-20" />
                )}
            </div>
        </div>
    );
};
