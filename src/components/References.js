import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Users, 
  MapPin, 
  Target,
  Globe,
  Plane,
  Gamepad2,
  BookOpen,
  Sparkles,
  CheckCircle,
  Image,
  ExternalLink
} from 'lucide-react';

const References = () => {
  const [accessForm, setAccessForm] = useState({
    name: '',
    email: '',
    project: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const references = [
    {
      id: 'veikkaus-points',
      title: 'Veikkaus Points',
      subtitle: 'Finnish National Lottery',
      description: 'A loyalty experience that turned responsible gaming into fun challenges. Members earned points by completing challenges, which they could use to unlock rewards, enter prize draws, or score mystery wins.',
      image: '/references/points copy.png',
      largeImage: '/references/points_large copy.png',
      icon: Star,
      color: 'from-yellow-400 to-orange-400',
      category: 'Gaming & Lottery'
    },
    {
      id: 'veikkaus-checkpoints',
      title: 'Veikkaus CheckPoints',
      subtitle: 'Finnish National Lottery',
      description: 'Location-based experience encouraging members to explore points of interest that benefit from Veikkaus funding. Members unlock mystery rewards while learning about beneficiaries.',
      image: '/references/checkpoints copy.png',
      icon: MapPin,
      color: 'from-blue-400 to-cyan-400',
      category: 'Location-Based'
    },
    {
      id: 'veikkaus-salespoints',
      title: 'Veikkaus SalesPoints',
      subtitle: 'Finnish National Lottery',
      description: 'Training tool integrated into POS terminals for salespeople. Complete product-based challenges to earn points, redeem rewards, and unlock quizzes with product-specific achievements.',
      image: '/references/salespoints copy.png',
      icon: Target,
      color: 'from-green-400 to-emerald-400',
      category: 'Training & Education'
    },
    {
      id: 'reima-go',
      title: 'Reima GO!',
      subtitle: 'Kids Clothing & Activity',
      description: 'Learning adventure powered by collaborative physical activity. Kids choose destinations, learn fun facts, and stay active while wearing activity trackers to help characters travel.',
      image: '/references/reima_group copy.png',
      icon: Globe,
      color: 'from-purple-400 to-pink-400',
      category: 'Kids & Education'
    },
    {
      id: 'finnair',
      title: 'Finnair',
      subtitle: 'Airline Loyalty',
      description: 'Extension to the frequent flyer programme rewarding members with bonus points for completing personalized, non-transactional tasks that bring value to the airline.',
      image: '/references/finnair copy.png',
      icon: Plane,
      color: 'from-indigo-400 to-blue-400',
      category: 'Travel & Aviation'
    },
    {
      id: 'baaz',
      title: 'Baaz',
      subtitle: 'Social Platform',
      description: 'Gamified loyalty experience that nudges users to take on fun challenges, create content, and engage across the platform. Activities earn points that boost rankings and unlock premium features.',
      image: '/references/baaz copy.png',
      icon: Users,
      color: 'from-pink-400 to-rose-400',
      category: 'Social Media'
    },
    {
      id: 'dubbz',
      title: 'Dubbz',
      subtitle: 'Web3 Gaming Platform',
      description: 'Completely revamped gamification experience with new mechanics like Streaks, bringing in features they wouldn\'t have developed on their own, making everything more exciting and engaging.',
      image: '/references/dubbz copy.png',
      icon: Gamepad2,
      color: 'from-orange-400 to-red-400',
      category: 'Web3 & Gaming'
    },
    {
      id: 'symbaloo',
      title: 'Symbaloo',
      subtitle: 'Education Platform',
      description: 'Gamified onboarding journey guiding users through core features with fun, challenge-based steps. Users unlock achievement badges, earn experience points, and level up while exploring the service.',
      image: '/references/symbaloo copy.png',
      icon: BookOpen,
      color: 'from-teal-400 to-cyan-400',
      category: 'Education'
    }
  ];

  const handleAccessSubmit = async (e) => {
    e.preventDefault();
    
    // Validation checks
    if (!accessForm.name.trim()) {
      alert('Please enter your full name');
      return;
    }
    
    if (!accessForm.email.trim()) {
      alert('Please enter your email address');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(accessForm.email.trim())) {
      alert('Please enter a valid email address');
      return;
    }
    
    if (!accessForm.project.trim()) {
      alert('Please tell us about your project');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Using Formspree for form submission (no server setup required)
      const response = await fetch('https://formspree.io/f/mgvzlonb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: accessForm.name.trim(),
          email: accessForm.email.trim(),
          project: accessForm.project.trim(),
          _subject: 'New GameLayer Access Request'
        })
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setAccessForm({ name: '', email: '', project: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        throw new Error('Failed to send request');
      }
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
                <span className="text-white font-semibold drop-shadow-sm">Project References</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl lg:text-6xl font-bold leading-tight mt-6 mb-6"
              >
                Powered by{' '}
                <span className="text-yellow-300">GameLayer</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl text-blue-100 mb-8 leading-relaxed"
              >
                Over the past decade we've helped many companies launch gamification experiences. From aviation to lottery to retail, our lightweight API-based solution is <span className="text-yellow-300 font-semibold">flexible and scalable</span> to meet the challenge of the most demanding projects
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex justify-center items-center"
              >
                <Link to="/pricing">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full text-lg font-bold text-white border-2 border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
                  >
                    View Pricing
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* References Grid Section */}
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
              <Image className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">Project Details</span>
            </motion.div>
            

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <blockquote className="text-xl text-gray-300 italic mb-4 leading-relaxed">
                "Using GameLayer's platform has been a rewarding experience for us. We had some initial ideas on how to gamify our web service and engage our visitors better, however, we lacked the technical solution to make it happen. GameLayer has enabled us to bring those ideas to reality quickly and easily. And the results so far look more than promising."
              </blockquote>
              <div className="text-right">
                <p className="text-white font-semibold">Joni Ruotsalainen</p>
                <p className="text-gray-400 text-sm">Concept Designer, Veikkaus</p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {references.map((reference, index) => {
              const IconComponent = reference.icon;
              return (
                <motion.div
                  key={reference.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:border-white/20 h-full">
                    {/* Image Section */}
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={reference.image}
                        alt={reference.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                        onClick={() => setSelectedImage(reference.largeImage || reference.image)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur rounded-full p-3">
                          <ExternalLink className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${reference.color} rounded-xl mr-3 shadow-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{reference.title}</h3>
                          <p className="text-gray-400 text-sm">{reference.subtitle}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <span className="inline-block bg-white/10 text-white text-xs px-3 py-1 rounded-full">
                          {reference.category}
                        </span>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {reference.description}
                      </p>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedImage(reference.largeImage || reference.image)}
                        className="w-full bg-white/10 text-white font-semibold py-2 px-4 rounded-xl hover:bg-white/20 border border-white/20 transition-all duration-200"
                      >
                        View
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Project Screenshot"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          </motion.div>
        </motion.div>
      )}

      {/* Access Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-teal-900 to-gray-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-500/30 rounded-full px-6 py-2 mb-6"
            >
              <CheckCircle className="w-5 h-5 text-teal-400" />
              <span className="text-teal-300 font-medium">Request Access</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Ready to{' '}
              <span className="text-teal-400">
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
                      className="w-full bg-white/20 backdrop-blur border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200"
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
                      className="w-full bg-white/20 backdrop-blur border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200"
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
                      className="w-full bg-white/20 backdrop-blur border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your project"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={!accessForm.name.trim() || !accessForm.email.trim() || !accessForm.project.trim() || isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold py-4 px-6 rounded-xl hover:from-teal-600 hover:to-emerald-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
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

export default References; 