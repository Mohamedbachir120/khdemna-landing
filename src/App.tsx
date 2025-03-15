import React from 'react';
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import ExperienceNumber from './components/ExperienceNumber';
import WhyRaniKhadam from './components/WhyRaniKhadam';
import WhatWeStandFor from './components/WhatWeStandFor';
import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';

const App: React.FC = () => {
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
};

export default App;