import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Code, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Play
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      icon: Palette,
      title: 'Design',
      description: 'Create your gamification strategy and design user engagement flows using our intuitive interface.',
      features: ['Define user journeys', 'Set up reward systems', 'Configure game mechanics']
    },
    {
      number: '2',
      icon: Code,
      title: 'Implement',
      description: 'Integrate GameLayer APIs into your application with our comprehensive SDKs and documentation.',
      features: ['RESTful API integration', 'Multiple language SDKs', 'Real-time data sync']
    },
    {
      number: '3',
      icon: Zap,
      title: 'Launch',
      description: 'Deploy your gamified experience and start engaging users with powerful analytics and insights.',
      features: ['A/B testing capabilities', 'Performance monitoring', 'User behavior analytics']
    }
  ];

  const codeExample = `// Initialize GameLayer SDK
const gameLayer = new GameLayer({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Award points to user
await gameLayer.users.awardPoints({
  userId: 'user123',
  points: 100,
  reason: 'completed_task'
});

// Get user leaderboard
const leaderboard = await gameLayer.leaderboards.get({
  leaderboardId: 'global_ranking'
});`;

  return (
    <section id="how-it-works" className="py-20 bg-white">
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
            Get Started Quickly
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Three simple steps to gamification success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to launch, GameLayer makes it easy to implement powerful 
            gamification features in your application.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <step.icon className="w-6 h-6 text-primary-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Code Example */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-900 rounded-xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm">game-layer.js</span>
              </div>
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg border">
              <div className="flex items-center space-x-2">
                <Play className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-medium text-gray-700">Live Demo</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Ready to integrate?
              </h3>
              <p className="text-primary-100 text-lg mb-6">
                Get started with GameLayer in minutes. Our comprehensive documentation 
                and SDKs make integration seamless for any platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                  View Documentation
                </button>
                <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-xl hover:bg-white hover:text-primary-600 transition-colors duration-200">
                  Start Free Trial
                </button>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4">
                <ArrowRight className="w-10 h-10" />
              </div>
              <p className="text-primary-100">
                Average integration time:<br />
                <span className="text-2xl font-bold">2-4 hours</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 