
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const outerCircleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // First animated circle
    const animateCircle = () => {
      const circle = circleRef.current;
      if (!circle) return;

      let xPosition = 0;
      let yPosition = 0;
      let xSpeed = 0.7;
      let ySpeed = 0.5;
      const maxRange = 30; // Maximum movement range

      const animate = () => {
        if (!circle) return;
        
        // Update position
        xPosition += xSpeed;
        yPosition += ySpeed;
        
        // Bounce when hitting boundaries
        if (Math.abs(xPosition) > maxRange) xSpeed = -xSpeed;
        if (Math.abs(yPosition) > maxRange) ySpeed = -ySpeed;
        
        // Apply the new position with a transform
        circle.style.transform = `translate(${xPosition}px, ${yPosition}px)`;
        
        requestAnimationFrame(animate);
      };
      
      animate();
    };
    
    // Second animated circle with different movement pattern
    const animateOuterCircle = () => {
      const circle = outerCircleRef.current;
      if (!circle) return;

      let angle = 0;
      const radius = 15;
      const speed = 0.01;

      const animate = () => {
        if (!circle) return;
        
        // Create circular motion
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        angle += speed;
        
        // Apply the new position with a transform
        circle.style.transform = `translate(${x}px, ${y}px)`;
        
        requestAnimationFrame(animate);
      };
      
      animate();
    };
    
    animateCircle();
    animateOuterCircle();
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 section-padding bg-gradient-to-br from-background to-secondary/30 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      {/* Animated background circles */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
      
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Web Developer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-primary">James Pediongco</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#projects" 
                className="btn btn-primary px-6 py-3"
              >
                View Projects
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="#contact" 
                className="btn btn-outline px-6 py-3"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative hidden md:flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Profile circle container with glow effect */}
            <div className="relative w-[330px] h-[330px] rounded-full animate-pulse-glow">
              {/* Main profile container */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-tr from-primary/80 to-primary/20 flex items-center justify-center mx-auto my-auto">
                {/* Moving circles */}
                <div 
                  ref={circleRef}
                  className="absolute -top-10 -right-10 w-20 h-20 bg-primary/40 rounded-full blur-md"
                ></div>
                
                <div 
                  ref={outerCircleRef}
                  className="absolute -bottom-8 -left-8 w-16 h-16 bg-secondary/40 rounded-full blur-md"
                ></div>
                
                {/* Profile image container */}
                <div className="absolute inset-3 bg-background rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://jmrpco.github.io/Clear.png"
                    alt="James Pediongco" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/70 rounded-full blur-sm animate-float"></div>
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-primary/20 rounded-full blur-sm" 
                 style={{animation: "float 7s ease-in-out infinite"}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
