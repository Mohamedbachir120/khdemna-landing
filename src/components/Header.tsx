'use client';

import { useState } from 'react';
 
import logo from "/images/logo.png"
import { useLanguage, useTranslations } from './../hooks/useTranslation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('Header');
  const { language } = useLanguage();

  return (
    <header className="bg-hero text-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img alt="Logo" src={logo} width={200} height={300} />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="hover:text-gray-300">
            {t('home')}
          </a>
          <a href="#services" className="hover:text-gray-300">
            {t('services')}
          </a>
          <a href="#how-it-works" className="hover:text-gray-300">
            {t('howItWorks')}
          </a>
          <a href="#about" className="hover:text-gray-300">
            {t('about')}
          </a>
          <a href="#faq" className="hover:text-gray-300">
            {t('faq')}
          </a>
          <a href="#contactus" className="hover:text-gray-300 mx-3">
            {t('contact')}
          </a>
        </div>
        <a
          href="#"
          className="hidden md:block bg-secondary hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full"
        >
          {t('joinUs')}
        </a>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-icons">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-hero text-white">
          <div className="container mx-auto pxBlog-6 py-4 flex flex-col space-y-4">
            <a href="#about" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              {t('home')}
            </a>
            <a href="#services" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              {t('services')}
            </a>
            <a href="#how-it-works" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              {t('howItWorks')}
            </a>
            <a href="#about" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              {t('about')}
            </a>
            <a href="#faq" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              {t('faq')}
            </a>
            <a href="#contactus" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              {t('contact')}
            </a>
            <a
              href="#"
              className="bg-secondary hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('joinUs')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
 