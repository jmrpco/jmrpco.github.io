
import { Briefcase, Calendar, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            I'm a dedicated web developer passionate about creating elegant solutions to complex problems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I am a passionate web developer with experience in creating visually appealing and user-friendly websites. I focus on writing clean, efficient code and implementing modern technologies to deliver exceptional digital experiences.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or expanding my knowledge through continuous learning.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/50 border border-border/50">
                <Briefcase size={24} className="text-primary mb-2" />
                <span className="text-2xl font-bold">2+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/50 border border-border/50">
                <Calendar size={24} className="text-primary mb-2" />
                <span className="text-2xl font-bold">10+</span>
                <span className="text-sm text-muted-foreground">Projects</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/50 border border-border/50">
                <Clock size={24} className="text-primary mb-2" />
                <span className="text-2xl font-bold">24/7</span>
                <span className="text-sm text-muted-foreground">Support</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://jmrpco.github.io/portfolio/img/4.png" 
                alt="Jeremiah at work" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
