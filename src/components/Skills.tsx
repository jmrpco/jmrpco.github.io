
import { useEffect, useRef } from 'react';

interface SkillProps {
  name: string;
  percentage: number;
  delay?: number;
}

const SkillBar = ({ name, percentage, delay = 0 }: SkillProps) => {
  const progressRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && progressRef.current) {
            setTimeout(() => {
              if (progressRef.current) {
                progressRef.current.style.width = `${percentage}%`;
              }
            }, delay);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [percentage, delay]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-primary font-medium">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div ref={progressRef} className="skill-progress" style={{ width: '0%' }}></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML & CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React.js', percentage: 85 },
    { name: 'Node.js', percentage: 80 },
    { name: 'PHP', percentage: 85 },
    { name: 'WordPress', percentage: 90 }
  ];
  
  const softSkills = [
    { name: 'Problem Solving', percentage: 95 },
    { name: 'Communication', percentage: 90 },
    { name: 'Team Collaboration', percentage: 85 },
    { name: 'Time Management', percentage: 90 }
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            I've worked with a variety of technologies and methodologies throughout my career.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-center">Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar 
                key={skill.name} 
                name={skill.name} 
                percentage={skill.percentage}
                delay={index * 100} 
              />
            ))}
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-center">Soft Skills</h3>
            {softSkills.map((skill, index) => (
              <SkillBar 
                key={skill.name} 
                name={skill.name} 
                percentage={skill.percentage}
                delay={index * 100} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
