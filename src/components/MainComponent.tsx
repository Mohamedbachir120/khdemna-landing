import React from 'react';
import { FaSuitcase, FaGlobe } from 'react-icons/fa';
import AppScreen from "./../assets/appScreen.png";
import Arrow from "./../assets/arrow.svg";
import JobInfo from "./JobInfo";
import Avatar1 from "./../assets/avatars/Ellipse 8.svg";
import Avatar2 from "./../assets/avatars/Ellipse 9.svg";
import Avatar3 from "./../assets/avatars/Ellipse 10.svg";

const MainComponent: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full px-5 lg:px-20 mt-8">
      <JobInfo />
      
      {/* First Column (60%) */}
      <div className="w-full lg:w-3/5 ">
        <h1 className="text-4xl lg:text-8xl font-bold">
          Your Dream
        </h1>
        <h2 className="text-4xl lg:text-8xl font-bold">
          Career Start
        </h2>
        <div className="flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-8xl font-bold">
            Here
          </h3>
          <p className="text-text-secondary ml-0 lg:ml-4 text-sm lg:text-base mt-2 lg:mt-0">
            Job hunting Made easy. Get instant alerts for job matching your skills and innovate job offers
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center mt-8">
          <input
            type="text"
            placeholder="Search for jobs"
            className="border border-gray-300 rounded-[25px] px-4 py-2 w-full lg:mr-4 focus:outline-none focus:border-gray-300"
          />
          <button className="bg-primary text-white rounded-[25px] px-4 py-2 mt-4 lg:mt-0 w-full lg:w-auto">
            Search
          </button>
        </div>
        <div className="flex flex-col lg:flex-row items-center mt-8">
          <div className="w-1/3 ">&nbsp;</div>
          <div className="w-full lg:w-7/10 flex items-center">
            <img src={Arrow} alt="Arrow" className="w-1/4 h-auto object-contain" />
            <div className="flex items-center ml-4 p-4 shadow-lg rounded-xl">
              <img src={Avatar1} alt="Avatar 1" className="w-10 h-10 rounded-full -ml-2" />
              <img src={Avatar2} alt="Avatar 2" className="w-10 h-10 rounded-full -ml-2" />
              <img src={Avatar3} alt="Avatar 3" className="w-10 h-10 rounded-full -ml-2" />
              <p className="ml-4 text-sm lg:text-base">
                <span className="text-primary">+60k</span> has found their dream jobs
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Second Column (40%) */}
      <div className="w-full lg:w-2/5 p-4 lg:p-8 flex flex-col items-center">
        <div className="bg-gradient-to-t from-pink-200 to-white w-full lg:w-4/5 h-full rounded-tl-[200px] rounded-br-[200px] flex items-center justify-center">
          <img src={AppScreen} alt="App Screen" className="w-4/5 h-auto object-contain" />
        </div>
        <div className="flex w-full lg:w-4/5 mt-4">
          {/* First Element */}
          <div className="bg-blue-100 flex-1 p-4 py-8 rounded-br-[100px] rounded-tr-[100px] rounded-bl-[100px] flex flex-col items-center">
            <FaSuitcase className="h-8 w-8 text-blue-500" />
            <h5 className="text-lg font-bold my-4">Jobs</h5>
            <h6 className="text-sm font-bold text-text-primary">10000<span className="text-blue-500">+</span></h6>
          </div>
          {/* Second Element */}
          <div className="bg-pink-100 flex-1 px-4 py-8 rounded-tl-[100px] rounded-tr-[100px] rounded-bl-[100px] flex flex-col items-center ml-4">
            <FaGlobe className="h-8 w-8 text-pink-500" />
            <h5 className="text-lg font-bold my-4">Companies</h5>
            <h6 className="text-sm font-bold text-text-primary">70<span className="text-pink-500">+</span></h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;