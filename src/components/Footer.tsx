
import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const socialLinks = [
    {
      href: 'https://github.com/saurabhraj018',
      icon: <Github size={20} />,
      label: 'GitHub'
    },
    {
      href: 'https://linkedin.com/in/saurabh-raj-32801a254',
      icon: <Linkedin size={20} />,
      label: 'LinkedIn'
    },
    {
      href: 'mailto:saurabhraj6466@gmail.com',
      icon: <Mail size={20} />,
      label: 'Email'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black/30 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white">Saurabh Raj</div>
            <p className="text-gray-400 max-w-sm">
              Frontend Developer passionate about creating beautiful, functional web experiences 
              and solving complex problems with clean, efficient code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-400 hover:text-pink-400 transition-colors duration-300 text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="text-pink-400">Email:</span> saurabhraj6466@gmail.com
              </p>
              <p className="text-gray-400">
                <span className="text-pink-400">Phone:</span> +91-8210852699
              </p>
              <p className="text-gray-400">
                <span className="text-pink-400">Location:</span> Bhubaneswar, Odisha
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Saurabh Raj. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Built with</span>
              <Heart className="text-pink-400 fill-current" size={16} />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
