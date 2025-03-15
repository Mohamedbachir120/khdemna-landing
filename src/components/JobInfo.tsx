import React from 'react';
import logo from "./../assets/LOGO.png";

const JobInfo: React.FC = () => {
  return (
    <div className="hidden lg:flex absolute left-[52%] top-[55%] justify-between items-center p-2 bg-white shadow-md rounded-2xl">
      {/* Logo Company */}
      <div className="flex items-center">
        <img src={logo} alt="Company Logo" className="h-10 w-10 rounded-full" />
      </div>
      {/* Info */}
      <div className="flex flex-col ml-2">
        <h4 className="text-md font-bold">UI/UX Designer</h4>
        <div className="flex items-center">
          <div className="flex flex-row">
            <span className="text-xs text-gray-600">Rani Khadam &nbsp;</span>
            <span className="text-xs text-gray-600">Algiers</span>
          </div>
          <div className="flex items-center ml-2">
            <span className="text-xs text-primary">Hiring</span>
            <span className="h-2 w-2 bg-primary rounded-full ml-2"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobInfo;