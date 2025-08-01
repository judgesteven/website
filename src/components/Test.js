import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Trophy, TrendingUp, BarChart3, Gift, Package, Users, Flame, Ticket, HelpCircle, ClipboardList, ArrowRight } from 'lucide-react';
import GptSection from './GptSection';

const BADGES = [
  { name: 'Challenges', color: 'bg-blue-500 hover:bg-blue-600', icon: Target, description: 'Take on epic challenges and conquer awesome quests' },
  { name: 'Achievements', color: 'bg-green-500 hover:bg-green-600', icon: Trophy, description: 'Unlock shiny badges for your greatest moments' },
  { name: 'Level-ups', color: 'bg-purple-500 hover:bg-purple-600', icon: TrendingUp, description: 'Climb the ranks and show off your progress' },
  { name: 'Leaderboards', color: 'bg-yellow-500 hover:bg-yellow-600', icon: BarChart3, description: 'See who\'s on top and spark some friendly rivalry' },
  { name: 'Prizes', color: 'bg-pink-500 hover:bg-pink-600', icon: Gift, description: 'Win cool rewards and sweet surprises' },
  { name: 'Mystery Boxes', color: 'bg-indigo-500 hover:bg-indigo-600', icon: Package, description: 'Open for a chance at something unexpected and fun' },
  { name: 'Teams', color: 'bg-red-500 hover:bg-red-600', icon: Users, description: 'Join forces, compete, and celebrate together' },
  { name: 'Streaks', color: 'bg-teal-500 hover:bg-teal-600', icon: Flame, description: 'Keep the momentum going and rack up your streak' },
  { name: 'Raffles', color: 'bg-orange-500 hover:bg-orange-600', icon: Ticket, description: 'Take a lucky shot and maybe win big' },
  { name: 'Quizzes', color: 'bg-purple-500 hover:bg-purple-600', icon: HelpCircle, description: 'Test your smarts and learn new things' },
  { name: 'Surveys', color: 'bg-pink-500 hover:bg-pink-600', icon: ClipboardList, description: 'Share your thoughts and help shape the fun' }
];

const Test = () => {
  const [hovered, setHovered] = useState(null);

  const handleBadgeClick = (badgeName) => {
    console.log(`Selected badge: ${badgeName}`);
  };

  return (
    <>
      {/* Main Section */}
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-4xl mx-auto">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl lg:text-6xl font-bold leading-tight mb-10"
              >
                Create user engagement with a simple{' '}
                <span className="text-yellow-300">API integration</span>
              </motion.h1>

              {/* Badge Elements */}
              <div className="flex flex-wrap justify-center gap-3 mb-16 mt-4">
                {BADGES.map((badge, i) => {
                  const IconComponent = badge.icon;
                  return (
                    <div key={badge.name} className="relative flex flex-col items-center">
                      <button
                        onClick={() => handleBadgeClick(badge.name)}
                        onMouseEnter={() => setHovered(i)}
                        onMouseLeave={() => setHovered(null)}
                        className={`${badge.color} text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer flex items-center gap-2 hover:scale-105`}
                      >
                        <IconComponent className="w-4 h-4" />
                        {badge.name}
                      </button>
                      {hovered === i && (
                        <div className="absolute z-20 top-full mt-3 w-80 left-1/2 -translate-x-1/2 animate-fade-in-fast">
                          <div className="relative">
                            {/* Arrow */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 overflow-hidden">
                              <div className="w-5 h-5 bg-white/10 backdrop-blur border border-white/20 rotate-45 shadow-md"></div>
                            </div>
                            <div className="bg-white/10 backdrop-blur border border-white/20 text-white text-base rounded-full shadow-2xl px-6 py-4 text-center font-semibold" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)'}}>
                              {badge.description}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-center mt-16"
              >
                <motion.button
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative inline-flex items-center gap-3 px-10 py-4 rounded-full text-lg font-bold text-white animated-gradient shadow-[0_4px_32px_rgba(99,102,241,0.25)] transition-all duration-300 focus:outline-none border-0 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Get Started
                    <ArrowRight className="w-5 h-5 text-white drop-shadow" />
                  </span>
                  <span className="absolute inset-0 w-full h-full animated-gradient-bg pointer-events-none" />
                  <span className="absolute inset-0 rounded-full pointer-events-none" style={{boxShadow:'0 0 24px 4px rgba(139,92,246,0.25)'}}></span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* AI-Powered Section */}
      <GptSection />
    </>
  );
};

export default Test;

// Add a simple fade-in animation for the tooltip
// You can add this to your global CSS or Tailwind config:
// .animate-fade-in { animation: fadeIn 0.2s ease; }
// @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } } 