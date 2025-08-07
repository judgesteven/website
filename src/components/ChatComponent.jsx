import React from "react";
import { Bot, Sparkles } from "lucide-react";

export default function ChatComponent() {
  return (
    <div className="flex flex-col h-full bg-gray-900 rounded-lg border border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Gamification Assistant</h3>
            <p className="text-sm text-gray-400">AI Feature Coming Soon</p>
          </div>
        </div>
                  <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-gray-400" />
            <span className="text-xs text-gray-400 font-medium">Disabled</span>
          </div>
      </div>

      {/* Placeholder Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              AI Assistant Temporarily Disabled
            </h3>
            <p className="text-gray-400 mb-6">
              The AI assistant functionality has been temporarily disabled. The UI is preserved for future use. 
              When active, it will specialize in gamification topics (user engagement, customer loyalty, employee retention) and GameLayer platform questions.
            </p>
          </div>

          {/* Feature Preview */}
          <div className="space-y-3 text-left">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm text-gray-300">Gamification strategies for user engagement</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm text-gray-300">Customer loyalty and employee retention</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm text-gray-300">GameLayer pricing and API documentation</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm text-gray-300">Implementation guidance and case studies</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 p-4 bg-gray-800 rounded-lg">
            <p className="text-sm text-gray-300 mb-2">
              Need help now? Contact our team:
            </p>
            <p className="text-blue-400 text-sm">
              steve@gamelayer.co
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 