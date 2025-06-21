
import React, { useState } from 'react';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Bharat Yatra',
      subtitle: 'Tourism Web Application',
      description: 'A comprehensive tourism platform featuring destination exploration, trip planning, and booking functionality with modern UI/UX design.',
      longDescription: 'Bharat Yatra is a full-stack tourism web application that allows users to explore various destinations across India, plan their trips, and make bookings seamlessly. The application features a modern, responsive design with smooth animations and interactive elements.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      features: ['Interactive Carousel', 'Advanced Pagination', 'Responsive Design', 'Booking System', 'User Authentication'],
      github: 'https://github.com/saurabhraj018',
      live: '#',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500',
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'ASD Detection System',
      subtitle: 'Machine Learning Project',
      description: 'Advanced ML system for Autism Spectrum Disorder detection using multiple algorithms with comprehensive performance metrics.',
      longDescription: 'This machine learning project focuses on early detection of Autism Spectrum Disorder using various ML algorithms. The system includes data preprocessing, feature engineering, model training, and comprehensive evaluation metrics with interactive visualizations.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      features: ['Multiple ML Models', 'Data Visualization', 'Performance Metrics', 'Feature Engineering', 'Model Comparison'],
      github: 'https://github.com/saurabhraj018',
      live: '#',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500',
      category: 'Machine Learning'
    },
    {
      id: 3,
      title: 'Notification Service API',
      subtitle: 'Microservice Architecture',
      description: 'FastAPI-based microservice for handling email and SMS notifications with queue management and real-time processing.',
      longDescription: 'A robust notification microservice built with FastAPI that handles both email and SMS notifications. Features include message queuing, rate limiting, template management, and comprehensive logging for enterprise-level applications.',
      tech: ['Python', 'FastAPI', 'Redis', 'Celery', 'PostgreSQL', 'Docker'],
      features: ['Queue Management', 'Rate Limiting', 'Template Engine', 'Real-time Processing', 'API Documentation'],
      github: 'https://github.com/saurabhraj018',
      live: '#',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500',
      category: 'Backend Development'
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Showcasing my passion for clean code, innovative solutions, and modern technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-pink-500/80 text-white text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-pink-400 text-sm mb-3">{project.subtitle}</p>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-1 text-gray-300 hover:text-pink-400 transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-1 text-gray-300 hover:text-pink-400 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-pink-400 text-lg mb-4">{selectedProject.subtitle}</p>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.longDescription}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded border border-purple-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
