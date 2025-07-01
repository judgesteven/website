import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Trophy, TrendingUp, BarChart3, Gift, Package, Users, Flame, Ticket, HelpCircle, ClipboardList } from 'lucide-react';
import ChatComponent from './ChatComponent';

const ChatPage = () => {
  const [highlightedBadge, setHighlightedBadge] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedBadge(Math.floor(Math.random() * 11));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const handleBadgeClick = (badgeName) => {
    console.log(`Selected badge: ${badgeName}`);
  };

  return (
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
              className="text-5xl lg:text-6xl font-bold leading-tight mb-12"
            >
              Build digital loyalty and user engagement experiences with a simple{' '}
              <span className="text-yellow-300">API integration</span>
            </motion.h1>

            {/* Badge Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {[
                { name: 'Mission', color: 'bg-blue-500 hover:bg-blue-600', icon: Target },
                { name: 'Achievement', color: 'bg-green-500 hover:bg-green-600', icon: Trophy },
                { name: 'Level-up', color: 'bg-purple-500 hover:bg-purple-600', icon: TrendingUp },
                { name: 'Leaderboard', color: 'bg-yellow-500 hover:bg-yellow-600', icon: BarChart3 },
                { name: 'Prize', color: 'bg-pink-500 hover:bg-pink-600', icon: Gift },
                { name: 'Mystery Box', color: 'bg-indigo-500 hover:bg-indigo-600', icon: Package },
                { name: 'Team', color: 'bg-red-500 hover:bg-red-600', icon: Users },
                { name: 'Streak', color: 'bg-teal-500 hover:bg-teal-600', icon: Flame },
                { name: 'Raffle', color: 'bg-orange-500 hover:bg-orange-600', icon: Ticket },
                { name: 'Quiz', color: 'bg-purple-500 hover:bg-purple-600', icon: HelpCircle },
                { name: 'Survey', color: 'bg-pink-500 hover:bg-pink-600', icon: ClipboardList }
              ].map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <motion.button
                    key={badge.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: highlightedBadge === index ? [1, 1.25, 1] : 1,
                      y: highlightedBadge === index ? [0, -12, 0] : 0,
                      x: highlightedBadge === index ? [-6, 6, -6] : 0,
                      rotate: highlightedBadge === index ? [-2, 2, -2] : 0,
                    }}
                    transition={{ 
                      delay: 0.5 + index * 0.1, 
                      duration: 0.5,
                      scale: highlightedBadge === index ? { 
                        duration: 1.0, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      } : 0.5,
                      y: highlightedBadge === index ? { 
                        duration: 1.0, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      } : 0.5,
                      x: highlightedBadge === index ? { 
                        duration: 0.6, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      } : 0.5,
                      rotate: highlightedBadge === index ? { 
                        duration: 0.8, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      } : 0.5,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleBadgeClick(badge.name)}
                    className={`${badge.color} text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer flex items-center gap-2 hover:scale-105 ${
                      highlightedBadge === index ? 'shadow-2xl' : ''
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {badge.name}
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Chat Component */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <ChatComponent />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChatPage; 