import   { FC } from 'react';
import { useLanguage, useTranslations } from '../hooks/useTranslation'; // Adjust the import path as needed

// It's a good practice to define props, even if they are empty
 
const AboutUs: FC= () => {
  // Initialize the translation function for the 'aboutUs' namespace
  const t = useTranslations('aboutUs');
  const {language} = useLanguage();

  return (
    <section className=" bg-white px-7 md:px-15 py-20  text-gray-900" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-full mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {t('title')}
        </h1>
        <p className="text-base md:text-lg mb-8 leading-relaxed">
          {t('introduction')}
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center">
            <span className="text-2xl mr-2">💡</span>
            {t('mission.title')}
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            {t('mission.text')}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="text-2xl mr-2">⚡️</span>
            {t('whatWeOffer.title')}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 text-base md:text-lg">
            <li className="flex items-center">
              <span className="mr-3">📲</span> {t('whatWeOffer.items.simpleApp')}
            </li>
            <li className="flex items-center">
               <span className="mr-3">🧾</span> {t('whatWeOffer.items.clearPricing')}
            </li>
            <li className="flex items-center">
               <span className="mr-3">✅</span> {t('whatWeOffer.items.qualifiedProviders')}
            </li>
            <li className="flex items-center">
              <span className="mr-3">⏲️</span> {t('whatWeOffer.items.realTimeTracking')}
            </li>
          </ul>
        </div>

        <div className="mt-10">
            <p className="font-semibold text-base md:text-lg">
                {t('slogan')}
            </p>
            <p className="text-base md:text-lg">
                {t('tagline')}
            </p>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;