import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import DashboardLogin from './components/DashboardLogin';
import Pricing from './components/Pricing';
import Home from './components/Home';
import References from './components/References';
import ChatPage from './components/ChatPage';
import ApiPage from './components/ApiPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useAnalytics } from './hooks/useAnalytics';

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
  return (
    <Router>
      <div className="App">
        <PageTracker />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/dashboard" element={<DashboardLogin />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/references" element={<References />} />
          <Route path="/api" element={<ApiPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 