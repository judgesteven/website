import React, { useState, useRef, useEffect } from "react";
import { Send, ChevronDown } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function ChatComponent() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const scrollToBottom = (smooth = true) => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: smooth ? "smooth" : "auto",
        block: "end"
      });
    }
  };

  const handleScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShowScrollButton(!isNearBottom);
    }
  };

  useEffect(() => {
    scrollToBottom(false);
  }, [messages]);

  useEffect(() => {
    const container = chatContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:3001/api/gpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input.trim() })
      });

      const data = await res.json();
      
      if (data.error) {
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: "Sorry, I encountered an error. Please try again." 
        }]);
      } else {
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: data.response 
        }]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Sorry, I encountered an error. Please try again." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatMessage = (content) => {
  return (
    <ReactMarkdown
      className="prose prose-invert max-w-none"
      components={{
        // Custom styling for different markdown elements
        h1: ({ children }) => (
          <h1 className="text-2xl font-bold text-blue-300 border-b border-blue-400/30 pb-2 mb-6">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-xl font-bold text-blue-300 border-b border-blue-400/30 pb-2 mb-6">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-lg font-semibold text-blue-200 mb-4">
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-base font-semibold text-blue-100 mb-3">
            {children}
          </h4>
        ),
        p: ({ children }) => (
          <p className="text-white/90 leading-relaxed text-sm mb-4">
            {children}
          </p>
        ),
        ul: ({ children }) => (
          <ul className="list-none space-y-2 mb-4">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-none space-y-2 mb-4">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
            <span className="text-white/90 leading-relaxed text-sm flex-1">
              {children}
            </span>
          </li>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-yellow-300">
            {children}
          </strong>
        ),
        em: ({ children }) => (
          <em className="italic text-blue-200">
            {children}
          </em>
        ),
        code: ({ children, className }) => {
          const language = className ? className.replace('language-', '') : '';
          if (language) {
            // Code block
            return (
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 mb-4">
                <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
                  <span className="text-gray-300 text-xs font-mono">{language}</span>
                </div>
                <pre className="p-4 text-sm text-green-400 font-mono overflow-x-auto">
                  <code>{children}</code>
                </pre>
              </div>
            );
          } else {
            // Inline code
            return (
              <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-sm font-mono">
                {children}
              </code>
            );
          }
        },
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-blue-400 pl-4 py-2 bg-blue-500/10 rounded-r-lg mb-4">
            <p className="text-blue-200 italic">
              {children}
            </p>
          </blockquote>
        ),
        a: ({ children, href }) => (
          <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            {children}
          </a>
        ),
        table: ({ children }) => (
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full bg-white/5 rounded-lg overflow-hidden">
              {children}
            </table>
          </div>
        ),
        th: ({ children }) => (
          <th className="px-4 py-2 bg-gray-800 text-left text-sm font-semibold text-gray-300 border-b border-gray-700">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="px-4 py-2 text-sm text-white/90 border-b border-gray-700">
            {children}
          </td>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl overflow-hidden relative">
      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">AI</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold">GameLayer API Guru</h3>
            <p className="text-sm text-white/80">Ask me anything about GameLayer's API</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div 
        ref={chatContainerRef}
        className="h-96 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
      >
        {messages.length === 0 ? (
          <div className="text-center text-white/70 py-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">?</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Start a conversation</h3>
            <p>Ask me about GameLayer's API implementation, authentication, or gamification features!</p>
          </div>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] rounded-2xl px-5 py-4 ${
                msg.role === "user" 
                  ? "bg-blue-600 text-white" 
                  : "bg-white/20 text-white backdrop-blur-sm"
              }`}>
                <div className="text-sm font-medium mb-3 opacity-80">
                  {msg.role === "user" ? "You" : "GameLayer AI Assistant"}
                </div>
                <div className={msg.role === "user" ? "whitespace-pre-wrap leading-relaxed" : "leading-relaxed"}>
                  {msg.role === "user" ? msg.content : formatMessage(msg.content)}
                </div>
              </div>
            </div>
          ))
        )}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/20 text-white rounded-2xl px-5 py-4 backdrop-blur-sm">
              <div className="text-sm font-medium mb-3 opacity-80">GameLayer AI Assistant</div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Scroll to Bottom Button */}
      {showScrollButton && (
        <button
          onClick={() => scrollToBottom(true)}
          className="absolute bottom-20 right-6 w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      )}

      {/* Input Area */}
      <div className="p-4 border-t border-white/20">
        <div className="flex items-center bg-white/95 backdrop-blur-sm border-2 border-gray-300 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-400">
          <div className="flex-1 px-4 py-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about GameLayer pricing, API features, or gamification..."
              className="w-full bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
              disabled={isLoading}
            />
          </div>
          <button 
            className={`p-3 mr-2 rounded-xl transition-colors duration-200 flex items-center justify-center ${
              isLoading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
            onClick={sendMessage}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
} 