import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronLeft } from 'lucide-react';
import { themes } from '../styles/tailwindStyles';
import satyabratImg from './satyabrat.jpeg';
import kartikImg from './kartik.jpeg';
import ashutoshImg from './ashutosh.jpeg';
import akshitImg from './akshit.jpeg';

const teamMembers = [
  {
    name: 'Satyabrat Sahu',
    role: 'Founder, ML Engineer',
    photoUrl: satyabratImg,
    githubUrl: 'https://github.com/Satyabrat2005',
    linkedinUrl: 'https://www.linkedin.com/in/satyabrat-sahu-638726324/',
  },
  {
    name: 'Kartik Bhardwaj',
    role: 'Co-Founder, ML Engineer',
    photoUrl: kartikImg,
    githubUrl: 'https://github.com/Kartik1446',
    linkedinUrl: 'https://www.linkedin.com/in/kartik1446',
  },
  {
    name: 'Ashutosh Rath',
    role: 'Co-Founder, IOT Engineer',
    photoUrl: ashutoshImg,
    githubUrl: 'https://github.com/GitGudScrubss',
    linkedinUrl: 'https://www.linkedin.com/in/ashutosh-rath-904687300/',
  },
  {
    name: 'Akshit Tiwari',
    role: 'Full Stack Developer',
    photoUrl: akshitImg,
    githubUrl: 'https://github.com/AkshitTiwarii',
    linkedinUrl: 'https://www.linkedin.com/in/akshit-tiwarii/',
  },
  {
    name: 'Rajan Jha',
    role: 'Full Stack Developer',
    photoUrl: 'https://avatars.githubusercontent.com/u/150759488?v=4',
    githubUrl: 'https://github.com/Rajan167030',
    linkedinUrl: 'https://www.linkedin.com/in/rajan-jha-0307b7310/',
  },
];

const TeamMemberCard = ({ theme, member }) => {
  const currentColors = themes[theme];
  return (
    <motion.div
      className="rounded-2xl p-8 text-center shadow-2xl border transition-all duration-300 group h-full"
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.05)', 
        borderColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)'
      }}
      whileHover={{ y: -12, scale: 1.02 }}
    >
      <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 shadow-xl" style={{ borderColor: '#B19EEF' }}>
        <img
          src={member.photoUrl}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x300/1a1a1a/FFFFFF?text=" + member.name.split(' ').map(n => n[0]).join(''); }}
        />
      </div>
      <h3 className="text-2xl font-bold mb-2" style={{ color: '#FFFFFF' }}>{member.name}</h3>
      <p className="text-lg font-medium mb-6" style={{ color: '#B19EEF' }}>{member.role}</p>
      <div className="flex justify-center items-center space-x-6">
        <a 
          href={member.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-125" 
          style={{ color: '#FFFFFF' }}
          aria-label={`${member.name}'s GitHub`}
        >
          <Github size={30} />
        </a>
        <a 
          href={member.linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-125" 
          style={{ color: '#FFFFFF' }}
          aria-label={`${member.name}'s LinkedIn`}
        >
          <Linkedin size={30} />
        </a>
      </div>
    </motion.div>
  );
};

const TeamPage = ({ theme = 'dark', onBack }) => {
  const currentColors = themes[theme];
  return (
    <motion.div
      key="team-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen pt-24 md:pt-32 px-6 pb-16"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.button
          onClick={onBack}
          className="flex items-center gap-2 mb-12 px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300"
          style={{ color: '#FFFFFF' }}
          whileHover={{ x: -5 }}
        >
          <ChevronLeft size={24} />
          <span className="text-lg font-semibold">Back to Home</span>
        </motion.button>

        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6" 
            style={{ color: '#FFFFFF' }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Meet the Team Behind ECHO
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A passionate group of innovators dedicated to transforming memory preservation through AI and blockchain technology
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
            >
              <TeamMemberCard theme={theme} member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamPage;


