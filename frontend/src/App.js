import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import CropRecommendation from './pages/CropRecommendation';
import YieldPrediction from './pages/YieldPrediction';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recommendation" element={<CropRecommendation />} />
        <Route path="/yield-prediction" element={<YieldPrediction />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </>
  );
};

export default App;
