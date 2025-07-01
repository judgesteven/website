import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Partners from './components/Partners';
import HowItWorks from './components/HowItWorks';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Test from './components/Test';
import ChatPage from './components/ChatPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Partners />
              <HowItWorks />
            </>
          } />
          <Route path="/test" element={<Test />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 