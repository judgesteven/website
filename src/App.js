import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
    // Track page view when location changes
    const pageName = location.pathname === '/' ? 'Home' : location.pathname.substring(1);
    trackPageView(pageName, window.location.href);
  }, [location, trackPageView]);

  return null;
}

function App() {
  useEffect(() => {
    // Signal that the React app is ready
    const timer = setTimeout(() => {
      // Remove the loading overlay if it still exists
      const loadingOverlay = document.getElementById('loadingOverlay');
      if (loadingOverlay) {
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
        root.classList.add('loaded');
      }
    }, 100); // Small delay to ensure smooth transition

    return () => clearTimeout(timer);
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
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 