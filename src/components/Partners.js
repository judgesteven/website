import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Plane, 
  Gamepad2, 
  BookOpen, 
  Vote,
  Globe,
  Target,
  Users,
  Zap,
  Star
} from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      name: 'Veikkaus',
      industry: 'Finnish National Lottery',
      icon: Building2,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Finnair',
      industry: 'Airline',
      icon: Plane,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      name: 'Reima GO!',
      industry: 'Kids Clothing',
      icon: Globe,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Baaz',
      industry: 'Social Platform',
      icon: Users,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      name: 'Dubbz',
      industry: 'Web3 Gaming',
      icon: Gamepad2,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      name: 'Symbaloo',
      industry: 'Education Platform',
      icon: BookOpen,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      name: 'SDP',
      industry: 'Political Party',
      icon: Vote,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      name: 'Target Corp',
      industry: 'Retail',
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      name: 'TechFlow',
      industry: 'SaaS Platform',
      icon: Zap,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      name: 'StarBank',
      industry: 'Financial Services',
      icon: Star,
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Trusted by Industry Leaders
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Partners & Customers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've helped organizations across various industries implement successful 
            gamification strategies that drive engagement and results.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${partner.bgColor} ${partner.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <partner.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {partner.industry}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <p className="text-gray-600">Successful Implementations</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">10M+</div>
                <p className="text-gray-600">Active Users Worldwide</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
                <p className="text-gray-600">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners; 