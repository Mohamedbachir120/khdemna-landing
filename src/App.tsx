import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import ExperienceNumber from './components/ExperienceNumber';
import WhyRaniKhadam from './components/WhyRaniKhadam';
import WhatWeStandFor from './components/WhatWeStandFor';
import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </Router>
  );
};
export const HomePage : React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-start justify-start bg-white">
      <Header />
      <MainComponent />
      <ExperienceNumber />
      <WhyRaniKhadam />
      <WhatWeStandFor />
      <DownloadApp />
      <Footer />
    </div>
  );

}

export default App;