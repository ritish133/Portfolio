import { ArrowDown, ExternalLink, Github } from "lucide-react";
import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "AI Studio",
      description: "A one-stop destination for creative and productive AI tools.",
      image: "/projects/AIStudio.png",
      tags: ["React.js", "TailwindCSS", "MongoDB"],
      demoUrl: "https://ai-studio-project.vercel.app/",
      githurl: "https://github.com/ritish133/AI-Studio-Project",
    },
    {
      id: 2,
      title: "EduWeb",
      description: "A platform for exploring and accessing quality educational resources.",
      image: "/projects/EduWeb.png",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://edu-web-delta.vercel.app/#home",
      githurl: "https://github.com/ritish133/EduWeb",
    },
    {
      id: 3,
      title: "Weather App",
      description: "A real-time companion for weather tracking.",
      image: "/projects/WeatherApp.png",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://weather-app-ruby-beta-55.vercel.app/",
      githurl: "https://github.com/ritish133/WeatherApp",
    },
  ];

  return (
    <section id="project" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githurl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ritish133"
          >
            Check My Github <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

