
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ image, title, description, tags, liveUrl, githubUrl }: ProjectProps) => {
  return (
    <div className="project-card">
      <div className="aspect-video overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-secondary text-sm px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary px-4 py-2"
            >
              Live Demo <ExternalLink size={16} className="ml-1" />
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline px-4 py-2"
            >
              Code <Github size={16} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      image: 'https://jmrpco.github.io/portfolio/img/5.png',
      title: 'E-commerce Website',
      description: 'A fully responsive e-commerce platform with cart functionality and payment integration.',
      tags: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
      liveUrl: 'https://jmrpco.github.io/portfolio/',
      githubUrl: 'https://github.com/jmrpco',
    },
    {
      image: 'https://jmrpco.github.io/portfolio/img/2.png',
      title: 'Portfolio Website',
      description: 'A personal portfolio showcasing projects and skills with modern design principles.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      liveUrl: 'https://jmrpco.github.io/portfolio/',
      githubUrl: 'https://github.com/jmrpco',
    },
    {
      image: 'https://jmrpco.github.io/portfolio/img/6.png',
      title: 'Task Management App',
      description: 'A task manager application with drag and drop functionality for better organization.',
      tags: ['React', 'TypeScript', 'Firebase'],
      liveUrl: 'https://jmrpco.github.io/portfolio/',
      githubUrl: 'https://github.com/jmrpco',
    },
    {
      image: 'https://jmrpco.github.io/portfolio/img/3.png',
      title: 'Blog Platform',
      description: 'A content management system for publishing and managing blog posts.',
      tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      liveUrl: 'https://jmrpco.github.io/portfolio/',
      githubUrl: 'https://github.com/jmrpco',
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Here are some of my recent projects. Each one was designed and developed with attention to detail.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/jmrpco" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline px-6 py-3"
          >
            See More Projects <Github size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
