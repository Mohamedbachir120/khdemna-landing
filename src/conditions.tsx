import   { useState } from 'react';
import { Helmet } from 'react-helmet';
import Footer from './components/Footer';
import { useLanguage, useTranslations } from './hooks/useTranslation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('Header');
  const { language } = useLanguage();

  return (
    <header className="bg-hero text-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/">

          <img alt="Logo" src="/images/logo.png" width={200} height={300} />

          </a>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="hover:text-gray-300">
            {t('home')}
          </a>
          <a href="/#services" className="hover:text-gray-300">
            {t('services')}
          </a>
          <a href="/#how-it-works" className="hover:text-gray-300">
            {t('howItWorks')}
          </a>
          <a href="/#about" className="hover:text-gray-300">
            {t('about')}
          </a>
          <a href="/#faq" className="hover:text-gray-300">
            {t('faq')}
          </a>
          <a href="/#contactus" className="hover:text-gray-300">
            {t('contact')}
          </a>
        </div>
        <a
          href="/#"
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
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a href="/" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              {t('home')}
            </a>
            <a href="/#services" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              {t('services')}
            </a>
            <a href="/#how-it-works" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              {t('howItWorks')}
            </a>
            <a href="/#about" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              {t('about')}
            </a>
            <a href="/#faq" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              {t('faq')}
            </a>
            <a href="/#contactus" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
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

const ConditionsGeneralesPage = () => {
  const t = useTranslations('Conditions');
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
      </Helmet>
      <Header />
      <main className="font-sans antialiased" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <section className="bg-white border-b border-gray-300 border-gray-200">
          <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
                  {t('title')}
                </h1>
                <p className="mt-3 text-lg text-gray-500">
                  {t('lastUpdated')}
                </p>
              </div>
              <div className="hidden sm:block flex-shrink-0 ml-8">
                <img
                  src="/images/illu-condition.png"
                  alt={t('illustrationAlt')}
                  height={500}
                  width={300}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="container py-12 px-0 lg:px-8">
          <div className="max-w-full mx-auto bg-white rounded-2xl p-4 md:p-8 sm:p-0 space-y-12">
            <section aria-labelledby="section-1">
              <h2 id="section-1" className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-3 mb-6">
                {t('section1.title')}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{t('section1.description1')}</p>
                <p>{t('section1.description2')}</p>
              </div>
            </section>

            <section aria-labelledby="section-2">
              <h2 id="section-2" className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-3 mb-6">
                {t('section2.title')}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section2.definitions.title')}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                    <li><strong className="font-semibold text-gray-700">{t('section2.definitions.platform').split(':')[0]}:</strong> {t('section2.definitions.platform').split(':')[1]}</li>
                    <li><strong className="font-semibold text-gray-700">{t('section2.definitions.client').split(':')[0]}:</strong> {t('section2.definitions.client').split(':')[1]}</li>
                    <li><strong className="font-semibold text-gray-700">{t('section2.definitions.provider').split(':')[0]}:</strong> {t('section2.definitions.provider').split(':')[1]}</li>
                    <li><strong className="font-semibold text-gray-700">{t('section2.definitions.service').split(':')[0]}:</strong> {t('section2.definitions.service').split(':')[1]}</li>
                    <li><strong className="font-semibold text-gray-700">{t('section2.definitions.member').split(':')[0]}:</strong> {t('section2.definitions.member').split(':')[1]}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section2.role.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('section2.role.description')}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section2.nonAssumedRoles.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('section2.nonAssumedRoles.description')}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4 mt-2">
                    <li>{t('section2.nonAssumedRoles.item1')}</li>
                    <li>{t('section2.nonAssumedRoles.item2')}</li>
                    <li>{t('section2.nonAssumedRoles.item3')}</li>
                    <li>{t('section2.nonAssumedRoles.item4')}</li>
                    <li>{t('section2.nonAssumedRoles.item5')}</li>
                    <li>{t('section2.nonAssumedRoles.item6')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section2.clientResponsibilities.title')}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                    <li>{t('section2.clientResponsibilities.item1')}</li>
                    <li>{t('section2.clientResponsibilities.item2')}</li>
                    <li>{t('section2.clientResponsibilities.item3')}</li>
                    <li>{t('section2.clientResponsibilities.item4')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section2.providerCommitments.title')}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                    <li>{t('section2.providerCommitments.item1')}</li>
                    <li>{t('section2.providerCommitments.item2')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section2.limitations.title')}</h3>
                  <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2">{t('section2.limitations.ineligibleServices.title')}</h4>
                  <p className="text-gray-600 leading-relaxed">{t('section2.limitations.ineligibleServices.description1')}</p>
                  <p className="text-gray-600 leading-relaxed mt-2">{t('section2.limitations.ineligibleServices.description2')}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4 mt-2">
                    <li>{t('section2.limitations.ineligibleServices.item1')}</li>
                    <li>{t('section2.limitations.ineligibleServices.item2')}</li>
                    <li>{t('section2.limitations.ineligibleServices.item3')}</li>
                    <li>{t('section2.limitations.ineligibleServices.item4')}</li>
                  </ul>
                  <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2">{t('section2.limitations.providerCompetencies.title')}</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                    <li>{t('section2.limitations.providerCompetencies.item1')}</li>
                    <li>{t('section2.limitations.providerCompetencies.item2')}</li>
                    <li>{t('section2.limitations.providerCompetencies.item3')}</li>
                  </ul>
                </div>
              </div>
            </section>

            <section aria-labelledby="section-3">
              <h2 id="section-3" className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-3 mb-6">{t('section3.title')}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section3.eligibility.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('section3.eligibility.description1')}</p>
                  <p className="text-gray-600 leading-relaxed mt-2">{t('section3.eligibility.description2')}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section3.registrationMethod.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('section3.registrationMethod.description')}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4 mt-2">
                    <li>{t('section3.registrationMethod.item1')}</li>
                    <li>{t('section3.registrationMethod.item2')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section3.validity.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('section3.validity.description')}</p>
                </div>
              </div>
            </section>

            <section aria-labelledby="section-4">
              <h2 id="section-4" className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-3 mb-6">{t('section4.title')}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section4.servicePricing.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('section4.servicePricing.description')}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section4.platformFees.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('section4.platformFees.description')}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section4.paymentTerms.title')}</h3>
                  <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2">{t('section4.paymentTerms.cashPayments.title')}</h4>
                  <p className="text-gray-600 leading-relaxed">{t('section4.paymentTerms.cashPayments.description')}</p>
                  <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2">{t('section4.paymentTerms.proofOfPayment.title')}</h4>
                  <p className="text-gray-600 leading-relaxed">{t('section4.paymentTerms.proofOfPayment.description')}</p>
                </div>
              </div>
            </section>

            <section aria-labelledby="section-5">
              <h2 id="section-5" className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-3 mb-6">{t('section5.title')}</h2>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">{t('section5.description')}</p>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section5.exclusion.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('section5.exclusion.description')}</p>
                </div>
              </div>
            </section>

            <section aria-labelledby="section-6">
              <h2 id="section-6" className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-3 mb-6">{t('section6.title')}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                <li>{t('section6.item1')}</li>
                <li>{t('section6.item2')}</li>
              </ul>
            </section>

            <section aria-labelledby="section-7">
              <h2 id="section-7" className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-3 mb-6">{t('section7.title')}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                <li>{t('section7.item1')}</li>
                <li>{t('section7.item2')}</li>
                <li>{t('section7.item3')}</li>
              </ul>
            </section>

            <section aria-labelledby="section-8">
              <h2 id="section-8" className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-3 mb-6">{t('section8.title')}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section8.violation.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('section8.violation.description')}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section8.otherReasons.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('section8.otherReasons.description')}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4 mt-2">
                    <li>{t('section8.otherReasons.item1')}</li>
                    <li>{t('section8.otherReasons.item2')}</li>
                    <li>{t('section8.otherReasons.item3')}</li>
                    <li>{t('section8.otherReasons.item4')}</li>
                    <li>{t('section8.otherReasons.item5')}</li>
                    <li>{t('section8.otherReasons.item6')}</li>
                    <li>{t('section8.otherReasons.item7')}</li>
                    <li>{t('section8.otherReasons.item8')}</li>
                    <li>{t('section8.otherReasons.item9')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section8.consequences.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('section8.consequences.description')}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section8.accountDeletion.title')}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                    <li>{t('section8.accountDeletion.item1')}</li>
                    <li>{t('section8.accountDeletion.item2')}</li>
                    <li>{t('section8.accountDeletion.item3')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section8.inactivity.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('section8.inactivity.description')}</p>
                </div>
              </div>
            </section>

            <section aria-labelledby="section-9">
              <h2 id="section-9" className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-3 mb-6">{t('section9.title')}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section9.backgroundCheck.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('section9.backgroundCheck.description')}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4 mt-2">
                    <li dangerouslySetInnerHTML={{ __html: t('section9.backgroundCheck.item1') }} />
                    <li dangerouslySetInnerHTML={{ __html: t('section9.backgroundCheck.item2') }} />
                    <li dangerouslySetInnerHTML={{ __html: t('section9.backgroundCheck.item3') }} />
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section9.providerConsent.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('section9.providerConsent.description')}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section9.liabilityLimitation.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('section9.liabilityLimitation.description')}</p>
                </div>
              </div>
            </section>

            <section aria-labelledby="section-10">
              <h2 id="section-10" className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-3 mb-6">{t('section10.title')}</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{t('section10.description1')}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                  <li dangerouslySetInnerHTML={{ __html: t('section10.item1') }} />
                  <li dangerouslySetInnerHTML={{ __html: t('section10.item2') }} />
                </ul>
                <div dangerouslySetInnerHTML={{ __html: t('section10.description2') }} />
              </div>
            </section>

            <section aria-labelledby="section-11">
              <h2 id="section-11" className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-3 mb-6">{t('section11.title')}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section11.khdemnaIP.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('section11.khdemnaIP.description')}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section11.externalIP.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('section11.externalIP.description1')}</p>
                  <p className="text-gray-600 leading-relaxed mt-2">{t('section11.externalIP.description2')}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{t('section11.contentLicense.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('section11.contentLicense.description1')}</p>
                  <p className="text-gray-600 leading-relaxed mt-2">{t('section11.contentLicense.description2')}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4 mt-2">
                    <li>{t('section11.contentLicense.item1')}</li>
                    <li>{t('section11.contentLicense.item2')}</li>
                    <li>{t('section11.contentLicense.item3')}</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-2">{t('section11.contentLicense.description3')}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default ConditionsGeneralesPage;