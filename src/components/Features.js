import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  BarChart3, 
  Settings, 
  Trophy, 
  Users, 
  Shield,
  Zap,
  Target
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Code,
      title: 'Open API',
      description: 'RESTful API with comprehensive documentation and SDKs for multiple languages.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: BarChart3,
      title: 'Content Dashboard',
      description: 'Real-time analytics and insights to track user engagement and performance.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Settings,
      title: 'Rules Manager',
      description: 'Flexible rule engine to create custom gamification logic and workflows.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Trophy,
      title: 'Game Mechanics',
      description: 'Built-in mechanics like points, badges, leaderboards, and challenges.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Comprehensive user profiles, achievements, and social features.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with GDPR compliance and data protection.',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
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
    <section id="features" className="py-20 bg-gray-50">
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
            Platform Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to build engaging experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            GameLayer provides a complete suite of gamification tools and services to create powerful 
            user engagement experiences that drive loyalty programs and retention strategies. Our gamification platform 
            helps businesses build engaging digital experiences and optimize user retention through proven gamification mechanics.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-8 group hover:shadow-2xl transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 ${feature.bgColor} ${feature.color} rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <Target className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of developers who are already using GameLayer to create 
              engaging user experiences and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Free Trial
              </button>
              <button className="btn-secondary">
                View Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 