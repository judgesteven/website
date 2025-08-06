import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Trophy, 
  TrendingUp, 
  BarChart3, 
  Gift, 
  Package, 
  Flame, 
  Ticket, 
  Send,
  Bot,
  Sparkles,
  CheckCircle,
  Star,
  Shield,
  Code
} from 'lucide-react';

const Testing = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi! I'm your Gamification Assistant, here to provide expert guidance on gamification, implementation strategies, and best practices for user engagement. What would you like to know about gamification?", 
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [accessForm, setAccessForm] = useState({
    name: '',
    email: '',
    project: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/chat/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          conversationId: 'testing'
        }),
      });

      const data = await response.json();

      if (data.response) {
        const aiMessage = {
          id: Date.now() + 1,
          text: data.response,
          sender: 'ai',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiMessage]);
      } else {
        throw new Error('No response from AI');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "I'm having trouble connecting right now. Please try again in a moment!",
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

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

  const features = [
    {
      icon: Code,
      title: "Open API",
      description: "Comprehensive RESTful API with extensive documentation and integration tools for seamless gamification implementation",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Content Dashboard",
      description: "Powerful content management interface to create and manage your gamification projects, track performance metrics, and optimize your gamification strategy",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Rules Manager",
      description: "Flexible rule engine to create, customize, and manage complex gamification mechanics, rewards, and user progression systems",
      color: "from-purple-500 to-pink-500"
    }
  ];

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
                <span className="text-white font-semibold drop-shadow-sm">#1 Gamification Platform</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl lg:text-6xl font-bold leading-tight mt-6 mb-8"
              >
                Make Boring Tasks, Less Boring{' '}
                <span className="text-yellow-400">
                  ... Even Fun!
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              >
                With a{' '}
                <span className="text-yellow-400 font-semibold">
                  simple API integration
                </span>
                , create gamification mechanics to engage, motivate and retain your audiences
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex justify-center items-center"
              >
                <Link to="/api">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full text-lg font-bold text-white border-2 border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
                  >
                    API Docs
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Section */}
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
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">AI-Powered Support</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Expert Guidance with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                GPT-4o-mini
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Use our AI assistant to get immediate answers about gamification, implementation strategies, and best practices for user engagement
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 px-6 py-4 border-b border-white/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                                          <h3 className="text-lg font-semibold text-white">Gamification Assistant</h3>
                    <p className="text-sm text-gray-300">Powered by GPT-4o-min</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">AI Active</span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                          : 'bg-white/20 backdrop-blur text-white border border-white/10'
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                      <p className="text-xs opacity-70 mt-2">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/20 backdrop-blur text-white max-w-xs lg:max-w-md px-4 py-3 rounded-2xl border border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input */}
              <div className="p-6 border-t border-white/20">
                <div className="flex gap-3">
                  <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about gamification concepts, GameLayer features, or API documentation..."
                    className="flex-1 bg-white/20 backdrop-blur border border-white/30 rounded-xl px-6 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 resize-none"
                    rows="2"
                    disabled={isLoading}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isLoading}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
                <p className="text-xs text-gray-400 mt-3 text-center">
                  💡 Try asking: "What is gamification?" or "How do I create a mission with GameLayer?" or "What are the best practices for implementing gamification?"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-2 mb-6"
            >
              <Star className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-medium">Core Features</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Start Quickly, then{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Iterate
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Add some magic to your service ... Plugs seamlessly into your existing tech stack, making it quick and easy to create and manage new gamification experiences
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-white/20">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {[
              { icon: Target, title: "Missions", description: "Create engaging challenges and quests for users" },
              { icon: Flame, title: "Streaks", description: "Track consecutive engagement and reward consistency" },
              { icon: Trophy, title: "Achievements", description: "Reward users with badges and accomplishments" },
              { icon: TrendingUp, title: "Level-Ups", description: "Progressive advancement system for user growth" },
              { icon: BarChart3, title: "Leaderboards", description: "Foster competition with dynamic rankings" },
              { icon: Gift, title: "Mystery Wins", description: "Surprise rewards and unexpected bonuses" },
              { icon: Package, title: "Prizes", description: "Tangible rewards and virtual currency systems" },
              { icon: Ticket, title: "Raffles", description: "Chance-based rewards and lottery mechanics" }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
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

export default Testing; 