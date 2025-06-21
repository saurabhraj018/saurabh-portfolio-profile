
import React from 'react';
import { Code, Palette, Server, Wrench, Users, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="text-pink-400" size={24} />,
      skills: ['C', 'C++', 'Java', 'JavaScript'],
      color: 'from-pink-500/20 to-purple-600/20',
      border: 'border-pink-400/30'
    },
    {
      title: 'Frontend',
      icon: <Palette className="text-purple-400" size={24} />,
      skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS'],
      color: 'from-purple-500/20 to-violet-600/20',
      border: 'border-purple-400/30'
    },
    {
      title: 'Backend',
      icon: <Server className="text-violet-400" size={24} />,
      skills: ['Node.js', 'Express', 'MySQL', 'MongoDB'],
      color: 'from-violet-500/20 to-indigo-600/20',
      border: 'border-violet-400/30'
    },
    {
      title: 'Tools',
      icon: <Wrench className="text-indigo-400" size={24} />,
      skills: ['Git', 'VS Code', 'Postman', 'JIRA', 'Figma', 'AI Cursor'],
      color: 'from-indigo-500/20 to-blue-600/20',
      border: 'border-indigo-400/30'
    },
    {
      title: 'Soft Skills',
      icon: <Users className="text-blue-400" size={24} />,
      skills: ['Teamwork', 'Leadership', 'Communication', 'Time Management'],
      color: 'from-blue-500/20 to-cyan-600/20',
      border: 'border-blue-400/30'
    },
    {
      title: 'Core',
      icon: <Brain className="text-cyan-400" size={24} />,
      skills: ['Problem Solving', 'Analytical Thinking', 'DSA', 'Algorithm Design'],
      color: 'from-cyan-500/20 to-pink-600/20',
      border: 'border-cyan-400/30'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through dedication, practice, and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${category.color} backdrop-blur-md rounded-2xl p-6 border ${category.border} hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group`}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-white/10 rounded-lg mr-4 group-hover:bg-white/20 transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors duration-300"
                  >
                    <span className="text-gray-300">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? 'bg-gradient-to-r from-pink-400 to-purple-600' : 'bg-gray-600'
                          }`}
                        ></div>
                      ))}
                    </div>
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
