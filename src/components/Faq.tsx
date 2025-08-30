import { useState } from 'react';
import { useLanguage, useTranslations } from './../hooks/useTranslation';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

const FaqItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center cursor-pointer" onClick={onClick}>
            <h4 className="font-semibold text-lg text-gray-800">{question}</h4>
            {isOpen ? (
                <MdExpandLess className="text-secondary text-2xl" />
            ) : (
                <MdExpandMore className="text-secondary text-2xl" />
            )}
        </div>
        {isOpen && <p className="mt-4 text-gray-600">{answer}</p>}
    </div>
);

const Faq = () => {
    const { language } = useLanguage();
    const t = useTranslations('Faq');
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        { key: 'booking' },
        { key: 'payment' },
        { key: 'safety' },
        { key: 'satisfaction' },
    ];

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="pt-10 pb-20 bg-gray-50" id="faq" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <div className="container mx-auto px-6">
                <div className="md:flex md:items-start md:space-x-12">
                    <div className="md:w-1/3">
                        <h2 className="text-3xl font-bold text-gray-800">{t('title')}</h2>
                        <p className="mt-4 text-gray-600">{t('description')}</p>
                        <button className="mt-6 bg-hero hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full">
                            {t('contactButton')}
                        </button>
                    </div>
                    <div className="md:w-2/3 mt-10 md:mt-0 space-y-4">
                        {faqs.map((faq, index) => (
                            <FaqItem
                                key={index}
                                question={t(`faqs.${faq.key}.question`)}
                                answer={t(`faqs.${faq.key}.answer`)}
                                isOpen={openIndex === index}
                                onClick={() => handleClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;