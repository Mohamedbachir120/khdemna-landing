import React from 'react';
import AppStoreImage from './../assets/Appstore.png'; // Assurez-vous d'avoir l'image appropriée
import PlayStoreImage from './../assets/Playstore.png'; // Assurez-vous d'avoir l'image appropriée

const DownloadApp: React.FC = () => {
  return (
    <div className="w-full p-5 lg:p-20 flex flex-col items-center ">
      <h2 className="text-2xl lg:text-4xl font-bold ">Download Our App</h2>
      <h5 className='mt-5 mb-10'>The Rani Khadam app offers many benefits. Download the app right now from the App Store or Google Play.</h5>
      <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <img src={AppStoreImage} alt="Download on the App Store" className="w-40 h-auto object-contain" />
        </a>
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
          <img src={PlayStoreImage} alt="Get it on Google Play" className="w-40 h-auto object-contain" />
        </a>
      </div>
    </div>
  );
};

export default DownloadApp;