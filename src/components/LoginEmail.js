import React, { useState } from 'react';
import SEOHead from './SEOHead';

const LoginEmail = () => {
  const [email, setEmail] = useState('eero@gamelayer.co');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendCode = () => {
    if (!email.trim()) {
      alert('Please enter your email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(`Login code sent to ${email}! (This is a demo - no actual email sent)`);
    }, 1500);
  };

  const handleBack = () => {
    window.location.href = '/login-welcome';
  };

  return (
    <>
      <SEOHead 
        title="Email Login - GameLayer" 
        description="Enter your email to access GameLayer - the ultimate gamification platform for creating engaging experiences that motivate users" 
        keywords="email login, authentication, GameLayer, gamification platform, user engagement, project management" 
      />
      
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/gamelayer-logo.png" 
              alt="GameLayer" 
              className="w-12 h-12 mr-3"
            />
            <h1 className="text-3xl font-bold text-gray-900">GameLayer</h1>
          </div>
          
          <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
            Welcome to GameLayer - the ultimate gamification platform for creating 
            engaging experiences that motivate users and drive meaningful engagement 
            across your projects and applications
          </p>
        </div>

        {/* Email Input Section */}
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
            Enter Your Email
          </h2>
          
          <p className="text-sm text-gray-600 text-center mb-8">
            We'll send a login code to your email if you have an existing account.
          </p>
          
          {/* Email Input */}
          <div className="mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              placeholder="Enter your email address"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handleSendCode}
              disabled={isLoading}
              className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'SEND LOGIN CODE'
              )}
            </button>

            <button
              onClick={handleBack}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              BACK
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Need help? Contact us at{' '}
            <a href="mailto:steve@gamelayer.co" className="text-blue-600 hover:underline">
              steve@gamelayer.co
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginEmail;
