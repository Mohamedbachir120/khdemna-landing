"use client";

import { useLanguage, useTranslations } from './../hooks/useTranslation';

const Hero = () => {
    const { language } = useLanguage();
    const t = useTranslations('Hero');

    return (
        <div className="bg-[#6316DB] text-white relative pb-32 md:pb-16" id="about" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {/* Main Text */}
            <div className="container mx-auto px-6 py-16 text-center relative z-10">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">{t('title')}</h1>
                    <p className="mt-4 text-lg font-semibold">{t('subtitle')}</p>
                </div>
            </div>

            {/* Categories Bar */}
            <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 
                           w-11/12 grid grid-cols-2 gap-4 
                           md:w-auto md:flex md:space-x-6 md:overflow-x-auto 
                           md:bg-white md:rounded-2xl md:shadow-lg md:px-6 md:py-4"
            >
                {['summer', 'handyman', 'cleaning', 'childcare', 'homecare', 'tutoring'].map((key, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-black bg-white rounded-2xl shadow-lg p-4 text-center md:bg-transparent md:shadow-none md:p-0"
                    >
                        <span className="text-2xl">{t(`categories.${key}.icon`)}</span>
                        <span className="text-sm mt-1 md:whitespace-nowrap">{t(`categories.${key}.name`)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;