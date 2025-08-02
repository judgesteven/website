import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DashboardLogin from './components/DashboardLogin';
import Pricing from './components/Pricing';
import Testing from './components/Testing';
import References from './components/References';
import ChatPage from './components/ChatPage';
import ApiPage from './components/ApiPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Testing />} />
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