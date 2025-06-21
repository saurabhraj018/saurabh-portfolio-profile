
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-violet-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-pink-400 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-6xl font-bold text-white">
                SR
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Saurabh Raj
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in delay-300">
            Frontend Developer | C++ Enthusiast | Problem Solver
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in delay-500">
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-3 border-2 border-pink-400 text-pink-400 rounded-full font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in delay-700">
            <a href="https://github.com/saurabhraj018" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-pink-400 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/saurabh-raj-32801a254" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-pink-400 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:saurabhraj6466@gmail.com" className="text-white/60 hover:text-pink-400 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('#about')}
            className="animate-bounce text-white/60 hover:text-pink-400 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
