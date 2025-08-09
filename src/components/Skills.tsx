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
        { name: "VUE", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", iconColor: "#4FC08D" },
        { name: "Metronic", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", iconColor: "#7952B3" },
        { name: "HTML 5", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", iconColor: "#E34F26" },
        { name: "Bootstrap", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", iconColor: "#7952B3" },
        { name: "Sass", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", iconColor: "#CC6699" },
        { name: "jQuery", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg", iconColor: "#0769AD" },
        { name: "NPM", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", iconColor: "#CB3837" },
        { name: "CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", iconColor: "#1572B6" }
      ]
    },
    {
      title: "Back-End",
      icon: Settings,
      color: "#FF6B9E",
      skills: [
        { name: "PHP", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", iconColor: "#777BB4" },
        { name: "Laravel", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", iconColor: "#FF2D20" },
        { name: "Codeigniter", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg", iconColor: "#EE4323" }
      ]
    },
    {
      title: "Database",
      icon: Database,
      color: "#FF6B9E",
      skills: [
        { name: "MySQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", iconColor: "#4479A1" },
        { name: "MariaDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg", iconColor: "#003545" }
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
