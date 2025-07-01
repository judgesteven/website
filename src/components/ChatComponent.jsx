import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";

export default function ChatComponent() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:3001/chat", {
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
          content: data.reply 
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
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
      <div className="h-96 overflow-y-auto p-4 space-y-4">
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
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                msg.role === "user" 
                  ? "bg-blue-600 text-white" 
                  : "bg-white/20 text-white"
              }`}>
                <div className="text-sm font-medium mb-1">
                  {msg.role === "user" ? "You" : "API Guru"}
                </div>
                <div className="whitespace-pre-wrap">{msg.content}</div>
              </div>
            </div>
          ))
        )}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/20 text-white rounded-2xl px-4 py-3">
              <div className="text-sm font-medium mb-1">API Guru</div>
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

      {/* Input Area */}
      <div className="p-4 border-t border-white/20">
        <div className="flex items-center bg-white/95 backdrop-blur-sm border-2 border-gray-300 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-400">
          <div className="flex-1 px-4 py-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask a question about the API..."
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