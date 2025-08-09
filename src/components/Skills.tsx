import { Code, Server, Database, Wrench } from 'lucide-react';

const Skills = () => {
  // Categories for the skills
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: [
        { name: "PHP", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "HTML5", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Sass", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" }
      ]
    },
    {
      title: "Frontend Frameworks",
      icon: Code,
      skills: [
        { name: "Vue.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "Bootstrap", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "jQuery", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" }
      ]
    },
    {
      title: "Backend Frameworks",
      icon: Server,
      skills: [
        { name: "Laravel", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
        { name: "CodeIgniter", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" }
      ]
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MySQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MariaDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" }
      ]
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: [
        { name: "NPM", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
        { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-background to-secondary/30">
      <div className="container-custom max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>
        
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card rounded-lg p-8 shadow-xl border border-border">
              {/* Category title with icon */}
              <div className="flex items-center gap-4 mb-8">
                <div className="text-primary">
                  <category.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold">{category.title}:</h3>
              </div>
              
              {/* Skills grid - horizontal layout like the reference */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group flex flex-col items-center gap-3">
                    <div className="relative w-16 h-16 bg-gray-800 rounded-xl p-3 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                      <img 
                        src={skill.iconUrl} 
                        alt={skill.name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-center leading-tight">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
