
import { Monitor, Settings, Database } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Skills = () => {
  // Categories for the skills
  const skillCategories = [
    {
      title: "Front-End",
      icon: Monitor,
      color: "#FF6B9E",
      skills: [
        { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", iconColor: "#61DAFB" },
        { name: "Next.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", iconColor: "#000000" },
        { name: "Gatsby", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg", iconColor: "#663399" },
        { name: "Material-UI", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", iconColor: "#0081CB" },
        { name: "Bootstrap", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", iconColor: "#7952B3" },
        { name: "Tailwind", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", iconColor: "#38B2AC" }
      ]
    },
    {
      title: "Back-End",
      icon: Settings,
      color: "#FF6B9E",
      skills: [
        { name: "Node/Express", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", iconColor: "#68A063" },
        { name: "GraphQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", iconColor: "#E535AB" },
        { name: "Python/Flask", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", iconColor: "#3776AB" }
      ]
    },
    {
      title: "Database",
      icon: Database,
      color: "#FF6B9E",
      skills: [
        { name: "MySQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", iconColor: "#4479A1" },
        { name: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", iconColor: "#47A248" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-background to-secondary/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden shadow-xl border border-border">
              {/* Category header with accent color */}
              <div className="h-2 bg-[#FF6B9E]"></div>
              
              <div className="p-8">
                {/* Category title with icon */}
                <div className="flex flex-col items-center justify-center mb-8">
                  <div className="text-[#FF6B9E] mb-4">
                    <category.icon size={48} />
                  </div>
                  <h3 className="text-3xl font-bold">{category.title}</h3>
                </div>
                
                {/* Skills list - vertical layout */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <img 
                          src={skill.iconUrl} 
                          alt={skill.name}
                          className="w-10 h-10"
                          style={{ filter: skill.name === 'Next.js' ? 'invert(1)' : 'none' }}
                        />
                      </div>
                      <p className="text-lg font-medium">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
