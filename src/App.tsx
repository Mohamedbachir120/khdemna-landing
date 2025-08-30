import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
 
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Benefits from './components/Benifits';
import CallToAction from './components/CallToAction';
import Faq from './components/Faq';
import Hero from './components/Hero';
import HomeService from './components/HomeService';
import ConditionsGeneralesPage from './conditions';
import { LanguageProvider } from './hooks/useTranslation';
 
const App: React.FC = () => {
  return (
    <LanguageProvider>
    <Router>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/conditions" element={<ConditionsGeneralesPage />} />
      </Routes>
    </Router>
      </LanguageProvider>
  );
};
export const HomePage : React.FC = () => {
  return (
    <div className="bg-gray-50">
    <Header />
   <main>
     <Hero />
     <Benefits />
     <AboutUs />
     <HomeService />
     <Faq />
     <CallToAction />
   </main>
   <Footer />
 </div>
  );

}

export default App;