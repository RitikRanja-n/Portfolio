import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "TaskFlow",
      description: "A collaborative task management platform for teams to streamline projects, organize workflows, and track progress with real-time filtering and pagination capabilities.",
      imageUrl: process.env.PUBLIC_URL + "/assets/Taskmaster.png",
      technologies: ["React", "TypeScript", "MongoDB"],
      githubLink: "https://github.com/rajritik21/TaskFlow",
      demoLink: "https://task-flow-tau-teal.vercel.app"
    },
    {
      id: 2,
      title: "Weather ",
      description: "Real-time weather application that shows current conditions and forecasts for any location.",
      imageUrl: process.env.PUBLIC_URL + "/assets/weather1.png",
      technologies: ["React.js", "Axios", "OpenWeatherMap API "],
      githubLink: "https://github.com/rajritik21/Weather-App",
      demoLink: "https://rajritik21.github.io/Weather-App/"
    },
    {
      id: 3,
      title: "HandVision-Pro",
      description: "A premium AI-powered web application for real-time hand tracking, multi-finger counting, and neon air-canvas writing.",
      imageUrl: process.env.PUBLIC_URL + "/assets/handvisionpro.png",
      technologies: ["JavaScript", "MediaPipe Hands", "Air-Canvas"],
      githubLink: "https://github.com/rajritik21/HandVision-Pro",
      demoLink: "https://rajritik21.github.io/HandVision-Pro/"
    },
    {
      id: 4,
      title: "Interior-Design-Landing-Page",
      description: "A modern interior design studio landing page developed by converting a Figma UI into a responsive web layout",
      imageUrl: process.env.PUBLIC_URL + "/assets/Blackstudio.png",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/rajritik21/Interior-design-landing-page",
      demoLink: "https://rajritik21.github.io/Interior-design-landing-page/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-primary/80">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-secondary">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark/50 rounded-lg overflow-hidden shadow-lg"
            >
            <div className="h-48 bg-gray-800 flex items-center justify-center overflow-hidden">
  {/* Custom SVG Logic for each project */}
  {project.title === "TaskFlow" ? (
    <div className="h-full w-full bg-gradient-to-br from-indigo-600 to-blue-700 flex flex-col items-center justify-center p-4">
      <svg className="h-20 w-20 mb-2 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
      <div className="text-white font-bold text-xl">TaskFlow</div>
    </div>
  ) : project.title === "Weather " ? (
    <div className="h-full w-full bg-gradient-to-br from-blue-400 to-cyan-600 flex flex-col items-center justify-center p-4">
      <svg className="h-20 w-20 mb-2 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
      <div className="text-white font-bold text-xl">Weather App</div>
    </div>
  ) : project.title === "HandVision-Pro" ? (
    <div className="h-full w-full bg-gradient-to-br from-emerald-600 to-teal-800 flex flex-col items-center justify-center p-4">
      <svg className="h-20 w-20 mb-2 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
      <div className="text-white font-bold text-xl">HandVision-Pro</div>
    </div>
  ) : project.title === "Interior-Design-Landing-Page" ? (
    <div className="h-full w-full bg-gradient-to-br from-amber-800 to-stone-900 flex flex-col items-center justify-center p-4">
      <svg className="h-20 w-20 mb-2 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      <div className="text-white font-bold text-xl">Interior Studio</div>
    </div>
  ) : (
    <img src={project.imageUrl} alt={project.title} className="h-full w-full object-contain p-2" />
  )}
</div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 h-16">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-primary rounded text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center text-white hover:text-secondary transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GitHub
                  </motion.a>
                  {project.demoLink && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex items-center text-white hover:text-secondary transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/rajritik21?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-secondary hover:underline"
          >
            View more projects on GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 