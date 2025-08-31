import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useAnalytics } from './hooks/useAnalytics';

// Lazy load components for better performance
const DashboardLogin = lazy(() => import('./components/DashboardLogin'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const Pricing = lazy(() => import('./components/Pricing'));
const Home = lazy(() => import('./components/Home'));
const References = lazy(() => import('./components/References'));
const ChatPage = lazy(() => import('./components/ChatPage'));
const ApiPage = lazy(() => import('./components/ApiPage'));
const AIContent = lazy(() => import('./components/AIContent'));
const BlogPost = lazy(() => import('./components/BlogPost'));

// Loading component for lazy-loaded routes
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

// Component to track page views
function PageTracker() {
  const location = useLocation();
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    try {
      // Track page view when location changes
      const pageName = location.pathname === '/' ? 'Home' : location.pathname.substring(1);
      trackPageView(pageName, window.location.href);
    } catch (error) {
      console.error('Error tracking page view:', error);
      // Don't let analytics errors break the app
    }
  }, [location, trackPageView]);

  return null;
}

function App() {
  useEffect(() => {
    // Signal that the React app is ready
    const timer = setTimeout(() => {
      try {
        console.log('App mounting...');
        
        // Remove the loading overlay if it still exists
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
          console.log('Removing loading overlay...');
          loadingOverlay.classList.add('fade-out');
          setTimeout(() => {
            if (loadingOverlay.parentNode) {
              loadingOverlay.parentNode.removeChild(loadingOverlay);
            }
          }, 300);
        }
        
        // Ensure the root element is visible
        const root = document.getElementById('root');
        if (root) {
          console.log('Setting root as loaded...');
          root.classList.add('loaded');
        } else {
          console.error('Root element not found!');
        }
        
        // Hide SEO content for users
        document.body.classList.add('js-loaded');
        console.log('App mounted successfully!');
      } catch (error) {
        console.error('Error during app mounting:', error);
        // Fallback: ensure the app is visible even if there's an error
        const root = document.getElementById('root');
        if (root) {
          root.classList.add('loaded');
        }
        document.body.classList.add('js-loaded');
      }
    }, 100); // Small delay to ensure smooth transition

    return () => clearTimeout(timer);
  }, []);

  // Add error boundary for the entire app
  const handleError = (error, errorInfo) => {
    console.error('App Error:', error, errorInfo);
    // Ensure the app is visible even if there's an error
    const root = document.getElementById('root');
    if (root) {
      root.classList.add('loaded');
    }
    document.body.classList.add('js-loaded');
  };

  // Global error handler
  useEffect(() => {
    const handleUnhandledError = (event) => {
      console.error('Unhandled error:', event.error);
      handleError(event.error, { componentStack: event.error?.stack });
    };

    const handleUnhandledRejection = (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      handleError(event.reason, { componentStack: event.reason?.stack });
    };

    window.addEventListener('error', handleUnhandledError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleUnhandledError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <PageTracker />
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/dashboard" element={<DashboardLogin />} />
            <Route path="/dashboard_admin" element={<Dashboard />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/references" element={<References />} />
            <Route path="/api" element={<ApiPage />} />
            <Route path="/ai-content" element={<AIContent />} />
            <Route path="/blog/gamification-guide-2025" element={<BlogPost />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 