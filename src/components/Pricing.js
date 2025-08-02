import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  CheckCircle, 
  Sparkles,
  Star,
  Users,
  TrendingUp,
  Crown
} from 'lucide-react';

const Pricing = () => {
  const [accessForm, setAccessForm] = useState({
    name: '',
    email: '',
    project: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const pricingTiers = [
    {
      title: 'Starter',
      users: 'Up to 1,000 users',
      price: '€100',
      description: 'per month',
      features: [
        'Up to 1,000 active users',
        'All gamification features',
        'Unlimited elements',
        'Email support',
        'Basic analytics'
      ],
      popular: false,
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Growth',
      users: 'Up to 25,000 users',
      price: '€1,000',
      description: 'per month',
      features: [
        'Up to 25,000 active users',
        'All gamification mechanics',
        'Unlimited elements',
        'Priority support',
        'Basic Analytics'
      ],
      popular: true,
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Scale',
      users: 'Up to 100,000 users',
      price: '€2,500',
      description: 'per month',
      features: [
        'Up to 100,000 active users',
        'All gamification mechanics',
        'Unlimited elements',
        'Advanced support',
        'Advanced reporting'
      ],
      popular: false,
      icon: Star,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Enterprise',
      users: 'Above 100,000 users',
      price: 'Contact us',
      description: '',
      features: [
        'Unlimited active users',
        'All gamification mechanics',
        'Unlimited elements',
        'Enterprise support',
        'Custom SLA agreements',
        'Advanced reporting'
      ],
      popular: false,
      icon: Crown,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const handleAccessSubmit = async (e) => {
    e.preventDefault();
    if (!accessForm.name.trim() || !accessForm.email.trim() || !accessForm.project.trim()) return;

    setIsSubmitting(true);
    
    try {
      // Log the request to console for now (since email setup requires configuration)
      console.log('Access Request Submitted:', {
        name: accessForm.name.trim(),
        email: accessForm.email.trim(),
        project: accessForm.project.trim(),
        timestamp: new Date().toISOString()
      });

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      setSubmitSuccess(true);
      setAccessForm({ name: '', email: '', project: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send access request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccessForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      {/* Main Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-6 py-3 mb-6 border border-purple-400/30 shadow-lg"
              >
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <span className="text-white font-semibold drop-shadow-sm">Transparent Pricing</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl lg:text-6xl font-bold leading-tight mt-6 mb-6"
              >
                Simple Pricing based on your{' '}
                <span className="text-yellow-300">Project Needs</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl text-blue-100 mb-8 leading-relaxed"
              >
                Start with a 30-day free trial. No credit card required. 
                Scale as you grow with predictable pricing based on your active user count
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex justify-center items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const accessSection = document.getElementById('access-section');
                    if (accessSection) {
                      accessSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-8 py-4 rounded-full text-lg font-bold text-white border-2 border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
                >
                  Start Free Trial
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-6 py-2 mb-6"
            >
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">Choose Your Plan</span>
            </motion.div>
            

            

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              return (
                <motion.div
                  key={tier.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`group relative ${tier.popular ? 'lg:scale-105' : ''}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1 rounded-full text-sm font-semibold z-10">
                      Most Popular
                    </div>
                  )}
                  <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-white/20 h-full">
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{tier.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{tier.users}</p>
                      <div className="mb-2">
                        <span className="text-3xl font-bold text-white">{tier.price}</span>
                        <span className="text-gray-400 text-sm ml-1">{tier.description}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                      tier.popular 
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600' 
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}>
                      {tier.title === 'Enterprise' ? 'Contact Us' : 'Choose Plan'}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access-section" className="py-20 bg-gradient-to-br from-gray-800 via-purple-900 to-gray-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full px-6 py-2 mb-6"
            >
              <CheckCircle className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-300 font-medium">Request Access</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Ready to{' '}
              <span className="text-yellow-400">
                Get Started?
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Request free access and start transforming your user engagement
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto"
          >
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/20 backdrop-blur border border-green-500/30 rounded-2xl p-8 text-center"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Access Requested!</h3>
                <p className="text-green-300">
                  Thank you for your interest! We'll review your request and get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleAccessSubmit} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={accessForm.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/20 backdrop-blur border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Company Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={accessForm.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/20 backdrop-blur border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-white mb-2">
                      Your Project
                    </label>
                    <textarea
                      id="project"
                      name="project"
                      value={accessForm.project}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      className="w-full bg-white/20 backdrop-blur border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your project"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={!accessForm.name.trim() || !accessForm.email.trim() || !accessForm.project.trim() || isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-4 px-6 rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Requesting Access...</span>
                      </div>
                    ) : (
                      'Request Access'
                    )}
                  </motion.button>
                </div>
                
                <p className="text-xs text-gray-400 mt-4 text-center">
                  We'll review your request and respond within 24 hours
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Pricing; 