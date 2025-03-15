import React from 'react';

const ExperienceNumber: React.FC = () => {
  return (
    <div className="w-full bg-lightest-pink p-5 lg:px-20 lg:py-10 ">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* First Column */}
        <div className="flex flex-col w-full lg:w-1/2 mb-4 lg:mb-0">
          <h5 className="text-text-secondary text-lg lg:text-xl">Join connect today</h5>
          <h2 className="text-text-primary text-2xl lg:text-4xl">Experience</h2>
        </div>
        {/* Second Column */}
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 w-full lg:w-1/2">
          <div className="flex flex-col items-start border-b lg:border-b-0 lg:border-r border-gray-500 py-2 lg:px-4 lg:py-0">
            <h4 className="text-primary text-xl lg:text-2xl font-bold">80%</h4>
            <p className="text-text-secondary text-lg">Many users find jobs relevant to their skills</p>
          </div>
          <div className="flex flex-col items-start border-b lg:border-b-0 lg:border-r border-gray-500 py-2 lg:px-4 lg:py-0">
            <h4 className="text-primary text-xl lg:text-2xl font-bold">85%</h4>
            <p className="text-text-secondary text-lg">Many companies have found the ideal candidate</p>
          </div>
          <div className="flex flex-col items-start py-2 lg:px-4 lg:py-0">
            <h4 className="text-primary text-xl lg:text-2xl font-bold">90%</h4>
            <p className="text-text-secondary text-lg">Many users have been hired in a short period</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceNumber;