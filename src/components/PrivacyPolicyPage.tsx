import React from 'react';
import { FaLock, FaShieldAlt, FaFileAlt, FaUserCheck, FaGlobe } from 'react-icons/fa';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full px-5 lg:px-20 py-8 min-h-screen">
      {/* Header Section */}
      <div className="w-full text-center mb-12">
        <h1 className="text-4xl lg:text-6xl font-bold text-primary">
          Privacy Policy
        </h1>
        <p className="text-text-secondary mt-4 text-base lg:text-lg max-w-3xl mx-auto">
          Welcome to our Privacy Policy. At our core, we are dedicated to safeguarding your personal information while fostering connections between enterprises and top talent for temporary job opportunities in Algeria. This policy outlines how we collect, use, protect, and share your data, ensuring transparency and trust in our free platform, which operates exclusively under Algerian laws and regulations.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column (60%) */}
        <div className="w-full lg:w-3/5">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FaLock className="h-6 w-6 text-blue-500 mr-2" />
              Data Collection
            </h2>
            <p className="text-text-secondary text-base mb-4">
              Our platform is designed to seamlessly connect enterprises with skilled providers for temporary job opportunities. To deliver this service effectively, we collect the following types of information:
            </p>
            <ul className="list-disc pl-6 text-text-secondary text-base">
              <li>Personal Information: Name, email address, phone number, and other contact details to create and manage your account.</li>
              <li>Professional Information: Qualifications, certifications, work experience, and skills to ensure accurate matching with job opportunities.</li>
              <li>Registration Documents: Providers must submit a valid government-issued ID, and enterprises must provide their Commercial Register entry to verify identity and ensure trust.</li>
              <li>Usage Data: Information about how you interact with our platform, such as search history, job applications, and preferences, to improve our services and user experience.</li>
              <li>Technical Data: IP addresses, browser types, device information, and cookies to optimize platform performance and enhance security.</li>
            </ul>
            <p className="text-text-secondary text-base mt-4">
              We collect only the data necessary to provide our services and ensure a secure, efficient, and personalized experience. You will always be informed when providing sensitive information, and we strive to minimize data collection wherever possible.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FaShieldAlt className="h-6 w-6 text-pink-500 mr-2" />
              Data Protection
            </h2>
            <p className="text-text-secondary text-base">
              We prioritize the security of your data by implementing industry-standard measures to protect it from unauthorized access, loss, or misuse. These measures include:
            </p>
            <ul className="list-disc pl-6 text-text-secondary text-base mt-2">
              <li>Encryption: All sensitive data, including personal and registration information, is encrypted during transmission and storage using secure protocols.</li>
              <li>Access Controls: Only authorized personnel with a legitimate need can access your data, and they are bound by strict confidentiality agreements.</li>
              <li>Regular Audits: We conduct routine security audits and vulnerability assessments to ensure our systems remain robust and up-to-date.</li>
              <li>Data Minimization: We collect and retain only the information necessary to fulfill our platform’s purpose.</li>
            </ul>
            <p className="text-text-secondary text-base mt-4">
              Your data is used solely to:
            </p>
            <ul className="list-disc pl-6 text-text-secondary text-base mt-2">
              <li>Facilitate connections between enterprises and providers for job opportunities.</li>
              <li>Verify the authenticity of registration documents to maintain a trusted platform.</li>
              <li>Analyze usage patterns to enhance platform functionality and user experience.</li>
              <li>Comply with legal obligations, such as tax reporting or regulatory requirements under Algerian law.</li>
            </ul>
            <p className="text-text-secondary text-base mt-4">
              We do not sell, rent, or share your personal information with third parties for marketing purposes. Any sharing of data is strictly limited to trusted partners who assist in delivering our services (e.g., cloud storage providers or payment processors), and they are contractually obligated to uphold the same security standards in compliance with Algerian regulations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FaUserCheck className="h-6 w-6 text-green-500 mr-2" />
              Your Rights and Choices
            </h2>
            <p className="text-text-secondary text-base">
              We respect your control over your personal data. You have the following rights:
            </p>
            <ul className="list-disc pl-6 text-text-secondary text-base mt-2">
              <li>Access: Request a copy of the personal data we hold about you.</li>
              <li>Correction: Update or correct any inaccurate or incomplete information.</li>
              <li>Deletion: Request the deletion of your data, subject to legal retention requirements.</li>
              <li>Restriction: Limit how we process your data in certain circumstances.</li>
              <li>Data Portability: Receive your data in a structured, machine-readable format for transfer to another service.</li>
              <li>Objection: Object to the processing of your data for specific purposes, such as analytics.</li>
            </ul>
            <p className="text-text-secondary text-base mt-4">
              To exercise any of these rights, please contact us at support@ranikhadam.com. We will respond to your request within 30 days, in compliance with applicable Algerian data protection laws.
            </p>
          </div>
        </div>

        {/* Right Column (40%) */}
        <div className="w-full lg:w-2/5">
          <div className="bg-gradient-to-t from-blue-100 to-white p-8 rounded-tl-[100px] rounded-br-[100px] flex flex-col items-center">
            <FaFileAlt className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-center">Free Platform with Required Documentation</h3>
            <p className="text-text-secondary text-base text-center mt-4">
              Our platform, operating exclusively in Algeria, is completely free for both enterprises and providers, designed to foster trust and reliability in the talent-matching process. To ensure a secure and verified community, providers are required to submit a valid government-issued ID, and enterprises must provide their Commercial Register entry during registration, in accordance with Algerian regulations. These documents are securely stored and used solely for verification purposes, ensuring that all users can confidently engage in job opportunities.
            </p>
            <button className="bg-primary text-white rounded-[25px] px-6 py-2 mt-6 hover:bg-blue-600 transition">
              Learn More
            </button>
          </div>

          <div className="bg-gradient-to-t from-green-100 to-white p-8 rounded-tl-[100px] rounded-br-[100px] flex flex-col items-center mt-6">
            <FaGlobe className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-center">Compliance with Algerian Laws</h3>
            <p className="text-text-secondary text-base text-center mt-4">
              Our platform operates solely in Algeria and adheres strictly to Algerian data protection laws and regulations. We are committed to transparency, ensuring that your data is handled in compliance with local legal standards. Our policies are regularly updated to reflect changes in Algerian laws, maintaining your trust in our platform.
            </p>
            <button className="bg-primary text-white rounded-[25px] px-6 py-2 mt-6 hover:bg-blue-600 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-12 text-center">
        <p className="text-text-secondary text-sm">
          Last updated: July 25, 2025. Our platform operates exclusively in Algeria under Algerian laws and regulations. For any questions about our Privacy Policy, data practices, or to exercise your data rights, please contact us at support@ranikhadam.com. We are committed to addressing your concerns promptly and transparently in accordance with Algerian legal standards.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;