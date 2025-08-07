import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, BookOpen, Download, Play } from 'lucide-react';

const ApiPage = () => {
  const handleOpenApiDocs = () => {
    window.open('/api-docs.html', '_blank');
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            GameLayer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">API</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive API documentation for integrating gamification features into your applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Interactive Documentation</h3>
            <p className="text-gray-300 mb-6">
              Explore our comprehensive API documentation with interactive examples and real-time testing
            </p>
            <button
              onClick={handleOpenApiDocs}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Open API Docs
            </button>
          </div>

          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Start</h3>
            <p className="text-gray-300 mb-6">
              Get started with our API in minutes. Simple authentication and straightforward endpoints
            </p>
            <a
              href="#quick-start"
              className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Quick Start Guide
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
              <Download className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">SDK & Libraries</h3>
            <p className="text-gray-300 mb-6">
              Download our SDKs and libraries for popular programming languages and frameworks
            </p>
            <a
              href="#sdk"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download SDKs
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">API Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-400 font-bold">✓</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Authentication</h4>
              <p className="text-gray-400 text-sm">Secure API key authentication</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 font-bold">✓</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Rate Limiting</h4>
              <p className="text-gray-400 text-sm">Generous rate limits included</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-400 font-bold">✓</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Webhooks</h4>
              <p className="text-gray-400 text-sm">Real-time event notifications</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-pink-400 font-bold">✓</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Analytics</h4>
              <p className="text-gray-400 text-sm">Comprehensive usage analytics</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ApiPage; 