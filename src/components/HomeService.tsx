// src/components/HomeService.tsx

import React from 'react';
import { useTranslations } from '../hooks/useTranslation'; // Adjust the import path as needed

// Import icons from react-icons
import { BsShieldCheck, BsPhone, BsGraphUp } from 'react-icons/bs';
import { IoMdSpeedometer } from 'react-icons/io';
import { MdOutlineFindInPage, MdLocationOn } from 'react-icons/md';

const HomeService: React.FC = () => {
  const t = useTranslations('homeService');

  const features = [
    {
      icon: <BsShieldCheck size={30} className="text-primary" />,
      title: t('features.reliability.title'),
      description: t('features.reliability.description'),
    },
    {
      icon: <IoMdSpeedometer size={30} className="text-primary" />,
      title: t('features.speed.title'),
      description: t('features.speed.description'),
    },
    {
      icon: <MdOutlineFindInPage size={30} className="text-primary" />,
      title: t('features.transparency.title'),
      description: t('features.transparency.description'),
    },
    {
      icon: <MdLocationOn size={30} className="text-primary" />,
      title: t('features.proximity.title'),
      description: t('features.proximity.description'),
    },
    {
      icon: <BsPhone size={30} className="text-primary" />,
      title: t('features.simplicity.title'),
      description: t('features.simplicity.description'),
    },
    {
      icon: <BsGraphUp size={30} className="text-primary" />,
      title: t('features.professionalism.title'),
      description: t('features.professionalism.description'),
    },
  ];

  return (
    <div className="bg-gray-50 font-sans p-5 sm:p-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
          {t('mainTitle')}
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          {t('subtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 flex items-center space-x-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="flex-shrink-0">
                {feature.icon}
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-12 px-8 py-3 bg-white text-primary font-bold border-2 border-purple-700 rounded-full hover:bg-purple-700 hover:text-white transition-colors duration-300">
          {t('downloadButton')}
        </button>
      </div>
    </div>
  );
};

export default HomeService;