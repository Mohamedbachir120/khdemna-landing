import React from 'react';
import { FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import AppLogo from './../assets/LOGO.png'; // Assurez-vous d'avoir l'image appropriée

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-light-gray p-3 lg:p-10 text-text-secondary border-t mt-5">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end">
        <div className="flex flex-col items-start mb-4 lg:mb-0">
          <img src={AppLogo} alt="App Logo" className="w-16 h-auto mb-4 rounded-2xl" />
          <p>Contact us at: info@ranikhadam.com</p>
          <p>Phone: +123 456 7890</p>
          <div className="text-left mt-4 lg:mt-0">
            <p>&copy; RaniKhadam 2025</p>
          </div>
        </div>
        <div className="flex flex-col items-start mb-4 lg:mb-0">
          <div className="flex space-x-4 mb-4 lg:mb-0">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary">
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>
          <div className="flex flex-col items-start mt-3">
            <a href="/privacy-policy" className="text-text-secondary mb-2">Privacy Policy</a>
            <a href="/terms-of-use" className="text-text-secondary">Terms of Use</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;