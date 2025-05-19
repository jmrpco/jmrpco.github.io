
import { react, nextjs, gatsby, bootstrap, tailwind, nodejs, graphql, python, mysql, mongodb, materialUi } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Skills = () => {
  // Categories for the skills
  const skillCategories = [
    {
      title: "Front-End",
      icon: "monitor",
      color: "#FF6B9E",
      skills: [
        { name: "React", icon: react, iconColor: "#61DAFB" },
        { name: "Next.js", icon: nextjs, iconColor: "#000000" },
        { name: "Gatsby", icon: gatsby, iconColor: "#663399" },
        { name: "Material-UI", icon: materialUi, iconColor: "#0081CB" },
        { name: "Bootstrap", icon: bootstrap, iconColor: "#7952B3" },
        { name: "Tailwind", icon: tailwind, iconColor: "#38B2AC" }
      ]
    },
    {
      title: "Back-End",
      icon: "settings",
      color: "#FF6B9E",
      skills: [
        { name: "Node/Express", icon: nodejs, iconColor: "#68A063" },
        { name: "GraphQL", icon: graphql, iconColor: "#E535AB" },
        { name: "Python/Flask", icon: python, iconColor: "#3776AB" }
      ]
    },
    {
      title: "Database",
      icon: "database",
      color: "#FF6B9E",
      skills: [
        { name: "MySQL", icon: mysql, iconColor: "#4479A1" },
        { name: "MongoDB", icon: mongodb, iconColor: "#47A248" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-[#1A1F2C] text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Professional Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-[#242B3E] rounded-lg overflow-hidden shadow-xl">
              {/* Category header with accent color */}
              <div className="h-2 bg-[#FF6B9E]"></div>
              
              <div className="p-8">
                {/* Category title with icon */}
                <div className="flex flex-col items-center justify-center mb-8">
                  <div className="text-[#FF6B9E] mb-4">
                    {category.title === "Front-End" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    )}
                    {category.title === "Back-End" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                      </svg>
                    )}
                    {category.title === "Database" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                      </svg>
                    )}
                  </div>
                  <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                </div>
                
                {/* Skills grid */}
                <div className="grid grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex flex-col items-center justify-center">
                      <div className="mb-2">
                        <skill.icon size={40} color={skill.iconColor} />
                      </div>
                      <p className="text-center">{skill.name}</p>
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
