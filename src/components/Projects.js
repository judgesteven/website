import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Star, 
  Users, 
  MapPin, 
  Target,
  Globe,
  Plane,
  Heart,
  Gamepad2,
  BookOpen,
  Vote,
  Sparkles,
  CheckCircle
} from 'lucide-react';

const Projects = () => {
  const [accessForm, setAccessForm] = useState({
    name: '',
    email: '',
    project: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const projects = [
    {
      id: 'veikkaus-points',
      title: 'Veikkaus Points',
      subtitle: 'Finnish National Lottery',
      description: 'Veikkaus was having a tough time getting members engaged with its responsible gaming tools, especially a quiz on gambling behavior. As a state-run national lottery, it was essential for members to interact with these tools regularly.',
      solution: 'GameLayer stepped in to power a loyalty experience that turned responsible gaming into fun challenges. Members could earn \'points\' by completing the challenges, which they could use to unlock small non-gambling rewards, enter bigger prize draws, or even score mystery wins. It\'s responsible gaming with a fun twist.',
      testimonial: {
        text: 'Using GameLayer\'s platform has been a rewarding experience for us. We had some initial ideas on how to gamify our web service and engage our visitors better, however, we lacked the technical solution to make it happen. GameLayer has enabled us to bring those ideas to reality quickly and easily. And the results so far look more than promising.',
        author: 'Joni Ruotsalainen',
        role: 'Concept Designer, Veikkaus'
      },
      icon: Star,
      color: 'from-yellow-400 to-orange-400'
    },
    {
      id: 'veikkaus-checkpoints',
      title: 'Veikkaus CheckPoints',
      subtitle: 'Finnish National Lottery',
      description: 'Veikkaus was also finding it challenging to educate Finnish citizens about the national lottery\'s role in society, especially how its revenue supports causes both locally and nationally.',
      solution: 'GameLayer helped create a location-based experience in the Veikkaus app, encouraging members to explore \'points of interest\' that benefit from Veikkaus funding. When members visit these spots, they can unlock a mystery rewards box after checking out a quick bit of info about the beneficiaries. It\'s a fun way to learn and give back.',
      icon: MapPin,
      color: 'from-blue-400 to-cyan-400'
    },
    {
      id: 'veikkaus-salespoints',
      title: 'Veikkaus SalesPoints',
      subtitle: 'Finnish National Lottery',
      description: 'Veikkaus wanted to provide a fun and engaging product training experience to the vast number of salespeople responsible for selling their products but who were not Veikkaus employees.',
      solution: 'Inspired by the success of the consumer Points program, the concept evolved into a training tool integrated into the client\'s POS terminals. Salespeople could complete product-based challenges to earn points, redeem rewards, and unlock quizzes as they progressed. Successful completion of quizzes awarded product-specific achievements, making training engaging and rewarding across the vast network.',
      icon: Target,
      color: 'from-green-400 to-emerald-400'
    },
    {
      id: 'reima-go',
      title: 'Reima GO!',
      subtitle: 'Kids Clothing',
      description: 'Reima wanted a fun and engaging way to get kindergarten kids moving while adding a touch of learning. They were already making wearable activity trackers just for this age group, paired with a simple app.',
      solution: 'GameLayer helped bring the app to life with a learning adventure powered by collaborative physical activity. The experience centred around a character on a journey around the world, where kids could choose the next destination and learn fun facts about it. To reach the destination and unlock an achievement, kids had to stay active while wearing the tracker, helping the character travel on his journey.',
      icon: Globe,
      color: 'from-purple-400 to-pink-400'
    },
    {
      id: 'finnair',
      title: 'Finnair',
      subtitle: 'Airline',
      description: 'Like many frequent flyer programmes, points could only be earned through transactional activity, making small amounts of points pretty useless and often left to expire. Finnair wanted to engage members with the brand even when they weren\'t traveling or planning a trip, and also reduce the time points showed up as a liability.',
      solution: 'GameLayer enabled an extension to the programme that rewards members with bonus points for completing personalised, non-transactional tasks that bring value to the airline—like giving marketing permissions or updating traveler profiles. These bonus points could then unlock travel perks, taking members on an exciting journey through the programme\'s tiers.',
      icon: Plane,
      color: 'from-indigo-400 to-blue-400'
    },
    {
      id: 'baaz',
      title: 'Baaz',
      subtitle: 'Social Platform',
      description: 'As a social platform driven by user-generated content, Baaz wanted fresh ways to motivate users to stay active across all areas of the site.',
      solution: 'Baaz introduced a gamified loyalty experience built on GameLayer, that nudges users to take on fun challenges, create content, and engage in different parts of the platform. Activities earn users points that boost their daily rankings, help them level up to unlock premium features, and score a variety of digital rewards to enhance their experience. It\'s all about keeping the fun going and rewarding users for getting involved.',
      icon: Users,
      color: 'from-pink-400 to-rose-400'
    },
    {
      id: 'dubbz',
      title: 'Dubbz',
      subtitle: 'Web3 Gaming Platform',
      description: 'Dubbz had started with a basic gamification setup (challenges, rankings, points) in the first version of their product. But they soon realized it wouldn\'t scale without a lot of effort to keep everything updated, taking focus away from their core business.',
      solution: 'Initially, the plan was to just replicate the existing features, but once they saw how much more they could do with GameLayer, they completely revamped and expanded the gamification experience. New mechanics like Streaks were added, bringing in features they wouldn\'t have developed on their own, making everything more exciting and engaging.',
      icon: Gamepad2,
      color: 'from-orange-400 to-red-400'
    },
    {
      id: 'symbaloo',
      title: 'Symbaloo',
      subtitle: 'Education Platform',
      description: 'Symbaloo was having trouble getting new users to explore all the features—and benefits—of their educational resources manager for teachers and students. As a result, many new users had a less-than-great experience, leading to high churn rates.',
      solution: 'Together we introduced a gamified onboarding journey that guided users through the platform\'s core features with fun, challenge-based steps. As users explored the service, they unlocked achievement badges, earned experience points, and leveled up—opening up new content along the way. It made learning the platform playful and engaging, encouraging users to stick around and get the most out of it.',
      icon: BookOpen,
      color: 'from-teal-400 to-cyan-400'
    },
    {
      id: 'sdp',
      title: 'SDP',
      subtitle: 'Political Party',
      description: 'During the 2019 election campaign, the SDP party wanted to boost engagement with campaigners across the country and add a little friendly competition to the mix. They already had a mobile app with a section for official campaigners, making it the perfect platform for this experience.',
      solution: 'Using GameLayer, the Party turned campaign efforts into a game, where campaigners competed on individual rankings and region vs. region leaderboards. Each week, campaigners got a personalised target for face-to-face meetings based on their constituency\'s size and location. Hitting these targets unlocked new goals, letting them earn extra points and climb the rankings. It was a fun way to keep the campaign energy high.',
      icon: Vote,
      color: 'from-red-400 to-pink-400'
    }
  ];

  const handleAccessSubmit = async (e) => {
    e.preventDefault();
    if (!accessForm.name.trim() || !accessForm.email.trim() || !accessForm.project.trim()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/request-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: accessForm.name.trim(),
          email: accessForm.email.trim(),
          project: accessForm.project.trim()
        })
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitSuccess(true);
        setAccessForm({ name: '', email: '', project: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        throw new Error(data.error || 'Failed to send request');
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
                <span className="text-white font-semibold drop-shadow-sm">Success Stories</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                Gamification &{' '}
                <span className="text-yellow-300">Loyalty</span>{' '}
                Projects
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl text-blue-100 mb-8 leading-relaxed"
              >
                As a super lightweight alternative to heavier platforms, we take pride in our flexibility. 
                We've worked across a wide range of industries and helped clients deliver successful solutions.
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
                  className="px-8 py-4 rounded-full text-lg font-bold text-white border-2 border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
                >
                  View Projects
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
              <span className="text-purple-300 font-medium">Case Studies</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Success Stories
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Whatever the challenge, we're here to make it happen. Explore how we've transformed user engagement across industries.
            </motion.p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:border-white/20"
                >
                  <div className="p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                      {/* Left Content */}
                      <div>
                        <div className="flex items-center mb-6">
                          <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl mr-4 shadow-lg`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                            <p className="text-gray-300 font-medium">{project.subtitle}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                              <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                              The Challenge
                            </h3>
                            <p className="text-gray-300 leading-relaxed">{project.description}</p>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                              The Solution
                            </h3>
                            <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                          </div>
                        </div>
                      </div>

                      {/* Right Content - Testimonial or Visual */}
                      <div className="lg:pl-8">
                        {project.testimonial ? (
                          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
                            <div className="flex items-start">
                              <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
                                  <Heart className="w-6 h-6 text-white" />
                                </div>
                              </div>
                              <div className="ml-4">
                                <blockquote className="text-gray-200 italic mb-4 leading-relaxed">
                                  "{project.testimonial.text}"
                                </blockquote>
                                <div>
                                  <p className="font-semibold text-white">{project.testimonial.author}</p>
                                  <p className="text-sm text-gray-400">{project.testimonial.role}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-8 h-full flex items-center justify-center">
                            <div className="text-center">
                              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${project.color} rounded-2xl mb-6 shadow-lg`}>
                                <IconComponent className="w-10 h-10 text-white" />
                              </div>
                              <h4 className="text-xl font-semibold text-white mb-3">Success Story</h4>
                              <p className="text-gray-300">Transformed user engagement through innovative gamification</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-purple-900 to-gray-800 relative overflow-hidden">
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

export default Projects; 