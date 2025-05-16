
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 section-padding bg-gradient-to-br from-background to-secondary/30"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
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
            <div className="relative w-80 h-80 rounded-full bg-gradient-to-tr from-primary/80 to-primary/20 flex items-center justify-center">
              <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
                <img 
                  src="public/Clear.png"
                  alt="James Pediongco" 
                  className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/80 rounded-full"></div>
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-primary/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
