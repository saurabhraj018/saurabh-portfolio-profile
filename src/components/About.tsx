
import React from 'react';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'KIIT University',
      year: '2022 - 2026',
      icon: <GraduationCap className="text-pink-400" size={20} />
    },
    {
      degree: 'Intermediate',
      institution: 'A.N. College, Patna',
      year: '2021',
      icon: <GraduationCap className="text-purple-400" size={20} />
    },
    {
      degree: 'Matriculation',
      institution: 'Gyan Niketan, Patna',
      year: '2019',
      icon: <GraduationCap className="text-violet-400" size={20} />
    }
  ];

  const traits = [
    'Consistency', 'Curiosity', 'Growth Mindset', 
    'Attention to Detail', 'Ethics', 'Problem Solving'
  ];

  return (
    <section id="about" className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a final-year B.Tech student in Computer Science and Engineering at KIIT University, 
                passionate about Frontend Development and Data Structures & Algorithms. With strong 
                proficiency in C++, React, and modern web technologies, I focus on writing clean, 
                scalable code that solves real-world problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in technology is driven by curiosity and a growth mindset. I believe in 
                consistency, attention to detail, and maintaining high ethical standards in all my work. 
                Whether it's crafting beautiful user interfaces or optimizing algorithms, I approach 
                every challenge with enthusiasm and determination.
              </p>
            </div>

            {/* Personal Traits */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Core Values</h3>
              <div className="flex flex-wrap gap-3">
                {traits.map((trait, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full text-pink-300 border border-pink-400/30 text-sm"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-1 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-semibold text-white">{item.degree}</h4>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <MapPin size={16} />
                        <span>{item.institution}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-pink-400">
                        <Calendar size={16} />
                        <span>{item.year}</span>
                      </div>
                    </div>
                    {index < education.length - 1 && (
                      <div className="absolute left-3 top-8 w-0.5 h-12 bg-gradient-to-b from-purple-400 to-transparent"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
