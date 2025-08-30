"use client";

 import { useLanguage, useTranslations } from './../hooks/useTranslation';

// Placeholder URLs (replace with actual app store links)
const clientAppStoreUrl = 'https://apps.apple.com/us/app/your-client-app';
const clientGooglePlayUrl = 'https://play.google.com/store/apps/details?id=com.your.clientapp';
const providerAppStoreUrl = 'https://apps.apple.com/us/app/your-provider-app';
const providerGooglePlayUrl = 'https://play.google.com/store/apps/details?id=com.your.providerapp';

const CallToAction = () => {
    const { language } = useLanguage();
    const t = useTranslations('CallToAction');

    return (
        <section className="relative bg-gradient-to-br from-purple-600 to-indigo-800 text-white overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-96 h-96 bg-indigo-400 rounded-full opacity-20"></div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                    {t('title')}
                </h2>
                <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-indigo-100 mb-10 sm:mb-12">
                    {t('description')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
                    {/* Client Apps */}
                    <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">{t('clients.title')}</h3>
                        <div className="flex justify-center items-center space-x-2 sm:space-x-4">
                            <a href={clientAppStoreUrl} target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-transform duration-300">
                                <img src={'/images/app-store-badge.svg'} alt={t('clients.appStoreAlt')} className="h-24 sm:h-28 md:h-32 w-auto"/>
                            </a>
                            <a href={clientGooglePlayUrl} target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-transform duration-300">
                                <img src={'/images/google-play-badge.svg'} alt={t('clients.googlePlayAlt')} className="h-24 sm:h-28 md:h-32 w-auto"/>
                            </a>
                        </div>
                    </div>

                    {/* Provider Apps */}
                    <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">{t('providers.title')}</h3>
                        <div className="flex justify-center items-center space-x-2 sm:space-x-4">
                            <a href={providerAppStoreUrl} target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-transform duration-300">
                                <img src={'/images/app-store-badge.svg'} alt={t('providers.appStoreAlt')} className="h-24 sm:h-28 md:h-32 w-auto"/>
                            </a>
                            <a href={providerGooglePlayUrl} target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-transform duration-300">
                                <img src={'/images/google-play-badge.svg'} alt={t('providers.googlePlayAlt')} className="h-24 sm:h-28 md:h-32 w-auto"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 sm:mt-16">
                    <button className="bg-white text-indigo-600 font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full text-base sm:text-lg hover:bg-indigo-100 transition-colors duration-300 shadow-xl">
                        {t('contactButton')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;