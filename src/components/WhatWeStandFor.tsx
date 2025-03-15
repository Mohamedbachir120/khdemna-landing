import React from 'react';
import StandForImage from './../assets/whatWestand.png'; // Assurez-vous d'avoir l'image appropriée

const WhatWeStandFor: React.FC = () => {
  return (
    <div className="w-full bg-light-gray p-5 lg:p-16 flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2 flex justify-center lg:px-24">
        <img src={StandForImage} alt="What We Stand For" className="w-full max-w-md h-auto object-contain" />
      </div>
      <div className="w-full lg:w-1/2 lg:pl-10">
        <h2 className="text-2xl lg:text-4xl font-bold mb-4 mt-3">What We Stand For</h2>
        <p className="text-text-secondary text-sm lg:text-base">
          Welcome to RANI KHADAM, the leading platform for connecting skilled professionals with companies seeking temporary expertise. Whether you're an individual looking for flexible job opportunities or a company needing specialized talent for short-term projects.
          <br /> <br />
           RANI KHADAM is here to make the process simple and efficient. We offer tailored subscriptions for both individuals and businesses. As an individual, you can showcase your skills and apply to a wide range of interim job offers that fit your schedule and expertise.
           <br /> <br />
            For companies, our platform enables you to post job offers, connecting quickly with qualified professionals who can meet your short-term needs.
        </p>
      </div>
    </div>
  );
};

export default WhatWeStandFor;