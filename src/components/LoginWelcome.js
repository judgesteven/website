import React from 'react';
import SEOHead from './SEOHead';

const LoginWelcome = () => {
  const handlePasswordLogin = () => {
    // For now, just show an alert - we'll implement actual login later
    alert('Password login clicked - will implement authentication later');
  };

  const handleEmailCode = () => {
    // Navigate to email code screen
    window.location.href = '/login-email';
  };

  return (
    <>
      <SEOHead 
        title="Login - GameLayer" 
        description="Welcome to GameLayer - the ultimate gamification platform for creating engaging experiences that motivate users and drive meaningful engagement" 
        keywords="login, authentication, GameLayer, gamification platform, user engagement, project management" 
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

        {/* Login Options */}
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Choose Login Method
          </h2>
          
          <div className="space-y-4">
            {/* Password Login Button */}
            <button
              onClick={handlePasswordLogin}
              className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-4 px-6 rounded-xl transition-colors duration-200 flex flex-col items-center justify-center"
            >
              <span className="text-lg">LOGIN WITH</span>
              <span className="text-lg font-bold">PASSWORD</span>
            </button>

            {/* Email Code Button */}
            <button
              onClick={handleEmailCode}
              className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-4 px-6 rounded-xl transition-colors duration-200 flex flex-col items-center justify-center"
            >
              <span className="text-lg">GET EMAIL CODE</span>
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

export default LoginWelcome;
