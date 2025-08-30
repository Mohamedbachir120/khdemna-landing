import { Language, useLanguage, useTranslations } from './../hooks/useTranslation';
import { MdFacebook, MdCameraAlt } from 'react-icons/md';

const XIcon = () => (
  <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
  </svg>
);

const Footer = () => {
  const { language, changeLanguage } = useLanguage();
  const t = useTranslations('Footer');

  const handleLanguageChange = (newLanguage: Language) => {
    changeLanguage(newLanguage);
  };

  return (
    <footer className="bg-white" id="contactus" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <img alt={t('logoAlt')} src="/src/assets/images/logo.png" width={40} height={40} className="rounded-full me-2" />
              <span className="text-xl font-bold text-gray-800">{t('brandName')}</span>
            </div>
            <p className="mt-4 text-gray-500">{t('description')}</p>
          </div>
          <div>
            <h5 className="font-bold text-gray-800">{t('services.title')}</h5>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-800">{t('services.plumbing')}</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800">{t('services.handyman')}</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800">{t('services.cleaning')}</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800">{t('services.building')}</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-gray-800">{t('resources.title')}</h5>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-800">{t('resources.blog')}</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800">{t('resources.helpCenter')}</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800">{t('resources.faq')}</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-gray-800">{t('legal.title')}</h5>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-800">{t('legal.privacyPolicy')}</a></li>
              <li><a href="/conditions" className="text-gray-500 hover:text-gray-800">{t('legal.termsOfService')}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-300 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">{t('copyright')}</p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mt-4 sm:mt-0">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-800"><MdFacebook className="h-6 w-6" /></a>
              <a href="#" className="text-gray-500 hover:text-gray-800"><XIcon /></a>
              <a href="#" className="text-gray-500 hover:text-gray-800"><MdCameraAlt className="h-6 w-6" /></a>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-3 py-1 rounded-full text-sm font-medium ${language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              >
                {t('languages.english')}
              </button>
              <button
                onClick={() => handleLanguageChange('fr')}
                className={`px-3 py-1 rounded-full text-sm font-medium ${language === 'fr' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              >
                {t('languages.french')}
              </button>
              <button
                onClick={() => handleLanguageChange('ar')}
                className={`px-3 py-1 rounded-full text-sm font-medium ${language === 'ar' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              >
                {t('languages.arabic')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;