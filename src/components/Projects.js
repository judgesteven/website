import React from 'react';
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
  Mail
} from 'lucide-react';

const Projects = () => {
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
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 'veikkaus-checkpoints',
      title: 'Veikkaus CheckPoints',
      subtitle: 'Finnish National Lottery',
      description: 'Veikkaus was also finding it challenging to educate Finnish citizens about the national lottery\'s role in society, especially how its revenue supports causes both locally and nationally.',
      solution: 'GameLayer helped create a location-based experience in the Veikkaus app, encouraging members to explore \'points of interest\' that benefit from Veikkaus funding. When members visit these spots, they can unlock a mystery rewards box after checking out a quick bit of info about the beneficiaries. It\'s a fun way to learn and give back.',
      icon: MapPin,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'veikkaus-salespoints',
      title: 'Veikkaus SalesPoints',
      subtitle: 'Finnish National Lottery',
      description: 'Veikkaus wanted to provide a fun and engaging product training experience to the vast number of salespeople responsible for selling their products but who were not Veikkaus employees.',
      solution: 'Inspired by the success of the consumer Points program, the concept evolved into a training tool integrated into the client\'s POS terminals. Salespeople could complete product-based challenges to earn points, redeem rewards, and unlock quizzes as they progressed. Successful completion of quizzes awarded product-specific achievements, making training engaging and rewarding across the vast network.',
      icon: Target,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'reima-go',
      title: 'Reima GO!',
      subtitle: 'Kids Clothing',
      description: 'Reima wanted a fun and engaging way to get kindergarten kids moving while adding a touch of learning. They were already making wearable activity trackers just for this age group, paired with a simple app.',
      solution: 'GameLayer helped bring the app to life with a learning adventure powered by collaborative physical activity. The experience centred around a character on a journey around the world, where kids could choose the next destination and learn fun facts about it. To reach the destination and unlock an achievement, kids had to stay active while wearing the tracker, helping the character travel on his journey.',
      icon: Globe,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'finnair',
      title: 'Finnair',
      subtitle: 'Airline',
      description: 'Like many frequent flyer programmes, points could only be earned through transactional activity, making small amounts of points pretty useless and often left to expire. Finnair wanted to engage members with the brand even when they weren\'t traveling or planning a trip, and also reduce the time points showed up as a liability.',
      solution: 'GameLayer enabled an extension to the programme that rewards members with bonus points for completing personalised, non-transactional tasks that bring value to the airline—like giving marketing permissions or updating traveler profiles. These bonus points could then unlock travel perks, taking members on an exciting journey through the programme\'s tiers.',
      icon: Plane,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      id: 'baaz',
      title: 'Baaz',
      subtitle: 'Social Platform',
      description: 'As a social platform driven by user-generated content, Baaz wanted fresh ways to motivate users to stay active across all areas of the site.',
      solution: 'Baaz introduced a gamified loyalty experience built on GameLayer, that nudges users to take on fun challenges, create content, and engage in different parts of the platform. Activities earn users points that boost their daily rankings, help them level up to unlock premium features, and score a variety of digital rewards to enhance their experience. It\'s all about keeping the fun going and rewarding users for getting involved.',
      icon: Users,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      id: 'dubbz',
      title: 'Dubbz',
      subtitle: 'Web3 Gaming Platform',
      description: 'Dubbz had started with a basic gamification setup (challenges, rankings, points) in the first version of their product. But they soon realized it wouldn\'t scale without a lot of effort to keep everything updated, taking focus away from their core business.',
      solution: 'Initially, the plan was to just replicate the existing features, but once they saw how much more they could do with GameLayer, they completely revamped and expanded the gamification experience. New mechanics like Streaks were added, bringing in features they wouldn\'t have developed on their own, making everything more exciting and engaging.',
      icon: Gamepad2,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 'symbaloo',
      title: 'Symbaloo',
      subtitle: 'Education Platform',
      description: 'Symbaloo was having trouble getting new users to explore all the features—and benefits—of their educational resources manager for teachers and students. As a result, many new users had a less-than-great experience, leading to high churn rates.',
      solution: 'Together we introduced a gamified onboarding journey that guided users through the platform\'s core features with fun, challenge-based steps. As users explored the service, they unlocked achievement badges, earned experience points, and leveled up—opening up new content along the way. It made learning the platform playful and engaging, encouraging users to stick around and get the most out of it.',
      icon: BookOpen,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      id: 'sdp',
      title: 'SDP',
      subtitle: 'Political Party',
      description: 'During the 2019 election campaign, the SDP party wanted to boost engagement with campaigners across the country and add a little friendly competition to the mix. They already had a mobile app with a section for official campaigners, making it the perfect platform for this experience.',
      solution: 'Using GameLayer, the Party turned campaign efforts into a game, where campaigners competed on individual rankings and region vs. region leaderboards. Each week, campaigners got a personalised target for face-to-face meetings based on their constituency\'s size and location. Hitting these targets unlocked new goals, letting them earn extra points and climb the rankings. It was a fun way to keep the campaign energy high.',
      icon: Vote,
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
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Success Stories
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Gamification & Loyalty Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            As a super lightweight (and much more affordable) alternative to many of the heavier platforms out there, 
            we take pride in our flexibility. We've worked across a wide range of industries and helped clients deliver 
            successful solutions to their customers and users. Whatever the challenge, we're here to make it happen.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Left Content */}
                  <div>
                    <div className="flex items-center mb-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 ${project.bgColor} ${project.color} rounded-lg mr-4`}>
                        <project.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
                        <p className="text-gray-600 font-medium">{project.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">The Challenge</h3>
                        <p className="text-gray-600 leading-relaxed">{project.description}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">The Solution</h3>
                        <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Content - Testimonial or Visual */}
                  <div className="lg:pl-8">
                    {project.testimonial ? (
                      <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border-l-4 border-primary-500">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                              <Heart className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <blockquote className="text-gray-700 italic mb-4">
                              "{project.testimonial.text}"
                            </blockquote>
                            <div>
                              <p className="font-semibold text-gray-900">{project.testimonial.author}</p>
                              <p className="text-sm text-gray-600">{project.testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className={`${project.bgColor} rounded-xl p-6 h-full flex items-center justify-center`}>
                        <div className="text-center">
                          <div className={`inline-flex items-center justify-center w-16 h-16 ${project.color} bg-white rounded-full mb-4`}>
                            <project.icon className="w-8 h-8" />
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Success Story</h4>
                          <p className="text-gray-600">Transformed user engagement through innovative gamification</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Get Your Free Account
              </h3>
              <p className="text-primary-100 text-lg mb-6">
                What have you got to lose? Just a heads-up: <strong>we only accept requests from validated company email accounts</strong> (don't worry, most accounts get activated within 12 hours). We can't wait to welcome you aboard!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your company email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Send
                </button>
              </div>
              
              <p className="text-primary-200 text-sm mt-4">
                Please check our Terms of Service for any limits placed on free accounts
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 