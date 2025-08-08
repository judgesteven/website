import React, { useState, useRef, useEffect } from "react";
import { Bot, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sendMessage } from "../utils/api";

export default function ChatComponent() {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi! I'm your Gamification Assistant, here to provide expert guidance on gamification, implementation strategies, and best practices for user engagement. What would you like to know?",
      sender: 'ai',
      timestamp: new Date(),
      type: 'welcome'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Suggested questions for better UX
  const suggestedQuestions = [
    "How can gamification boost my loyalty program?",
    "What are GameLayer's pricing plans?",
    "How do I implement gamification in my app?",
    "What are the best practices for user engagement?"
  ];

  const handleSendMessage = async (message = inputMessage) => {
    if (!message.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setIsTyping(true);

    try {
      const data = await sendMessage(message, 'chat-component');

      if (data.response) {
        const aiMessage = {
          id: Date.now() + 1,
          text: data.response,
          sender: 'ai',
          timestamp: new Date(),
          type: 'response'
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
        timestamp: new Date(),
        type: 'error'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestedQuestion = (question) => {
    handleSendMessage(question);
  };

  const clearChat = () => {
    setMessages([
      { 
        id: Date.now(),
        text: "Hi! I'm your Gamification Assistant, here to provide expert guidance on gamification, implementation strategies, and best practices for user engagement. What would you like to know?",
        sender: 'ai',
        timestamp: new Date(),
        type: 'welcome'
      }
    ]);
  };

  return (
    <div className="flex flex-col h-full bg-gray-900 rounded-lg border border-gray-700 shadow-xl">
      {/* Enhanced Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Gamification Assistant</h3>
            <p className="text-sm text-gray-400">Powered by GPT-5.0</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-400 font-medium">AI Active</span>
          </div>
          <button
            onClick={clearChat}
            className="text-gray-400 hover:text-white transition-colors text-xs"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Enhanced Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                    : message.type === 'error'
                    ? 'bg-red-600/20 border border-red-500/30 text-red-200'
                    : message.type === 'welcome'
                    ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-200'
                    : 'bg-gray-700/80 text-gray-100'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
                <p className="text-xs opacity-70 mt-2">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Enhanced Typing Indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-gray-700/80 text-gray-100 max-w-xs px-4 py-3 rounded-2xl">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <span className="text-xs text-gray-400 ml-2">AI is typing...</span>
              </div>
            </div>
          </motion.div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      {messages.length === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="p-4 border-t border-gray-700 bg-gray-800/30"
        >
          <p className="text-xs text-gray-400 mb-3 text-center">💡 Try asking:</p>
          <div className="grid grid-cols-1 gap-2">
            {suggestedQuestions.slice(0, 2).map((question, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedQuestion(question)}
                className="text-left text-xs text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg px-3 py-2 transition-all duration-200"
              >
                {question}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Enhanced Input */}
      <div className="p-4 border-t border-gray-700 bg-gray-800/30">
        <div className="flex space-x-3">
          <div className="flex-1">
            <textarea
              ref={inputRef}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about gamification..."
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200"
              rows="2"
              disabled={isLoading}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSendMessage()}
            disabled={!inputMessage.trim() || isLoading}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-200 flex items-center space-x-2 shadow-lg"
          >
            <Send className="w-4 h-4" />
          </motion.button>
        </div>
        <p className="text-xs text-gray-400 mt-2 text-center">
          💡 Try asking: "How can gamification boost my loyalty program?" or "What are the best practices for implementing gamification?"
        </p>
      </div>
    </div>
  );
} 