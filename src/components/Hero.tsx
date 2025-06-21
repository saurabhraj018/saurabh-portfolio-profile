
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Frontend Developer",
    "C++ Enthusiast", 
    "Problem Solver",
    "Full Stack Developer",
    "Tech Innovator"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-70"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-purple-500/25 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700 opacity-60"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-violet-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000 opacity-50"></div>
        <div className="absolute top-1/2 left-20 w-64 h-64 bg-cyan-400/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-12">
          
          {/* Left Content */}
          <div className={`flex-1 text-center lg:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            
            {/* AI Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-gray-300 font-medium">AI-Enhanced Portfolio</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Saurabh
              </span>
              <br />
              <span className="text-white">Raj</span>
            </h1>
            
            {/* Animated Role */}
            <div className="h-16 mb-8">
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light">
                {roles.map((role, index) => (
                  <span
                    key={role}
                    className={`absolute transition-all duration-500 ${
                      index === currentRole 
                        ? 'opacity-100 transform translate-y-0' 
                        : 'opacity-0 transform translate-y-4'
                    }`}
                  >
                    {role}
                  </span>
                ))}
              </p>
            </div>

            {/* Enhanced Description */}
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Passionate about creating innovative web solutions with modern technologies. 
              Specialized in React, C++, and building scalable applications that make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={() => scrollToSection('#projects')}
                className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center gap-2">
                  View Projects
                  <div className="transform group-hover:translate-x-1 transition-transform">→</div>
                </span>
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-4 border-2 border-pink-400 text-pink-400 rounded-full font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                Get in Touch
              </button>
              <button className="px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-full font-semibold hover:bg-gray-600 hover:text-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                <span className="flex items-center gap-2">
                  <Download size={18} />
                  Resume
                </span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a href="https://github.com/saurabhraj018" target="_blank" rel="noopener noreferrer" 
                 className="group p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/60 hover:text-pink-400 hover:border-pink-400/50 transition-all duration-300 hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/saurabh-raj-32801a254" target="_blank" rel="noopener noreferrer"
                 className="group p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/60 hover:text-pink-400 hover:border-pink-400/50 transition-all duration-300 hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="mailto:saurabhraj6466@gmail.com"
                 className="group p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/60 hover:text-pink-400 hover:border-pink-400/50 transition-all duration-300 hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl blur-sm opacity-75 animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-96 md:w-96 md:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-white/10">
                <img
                  src="/lovable-uploads/f4665fb4-ee88-426e-96db-a356cf87a6fa.png"
                  alt="Saurabh Raj"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Overlay gradient for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent"></div>
                
                {/* Floating tech icons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-xs font-bold text-blue-400">C++</span>
                  </div>
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-xs font-bold text-cyan-400">JS</span>
                  </div>
                </div>
              </div>

              {/* Floating achievement badges */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-lg px-3 py-2">
                <span className="text-sm text-green-400 font-medium">B.Tech CSE</span>
              </div>
              
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg px-3 py-2">
                <span className="text-sm text-purple-400 font-medium">KIIT '26</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('#about')}
            className="animate-bounce text-white/60 hover:text-pink-400 transition-colors duration-300 group"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-400 group-hover:text-pink-400 transition-colors">Scroll Down</span>
              <ChevronDown size={32} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
