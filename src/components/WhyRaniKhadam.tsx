import React from 'react';
import { FaRegCheckCircle,  FaRegClock, FaRegHandshake } from 'react-icons/fa';
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineShowChart } from "react-icons/md";
import { LuUsers } from "react-icons/lu";


const WhyRaniKhadam: React.FC = () => {
  const items = [
    { icon: <FaRegCheckCircle className="text-primary" />, title: "Quality Jobs", description: "Find high-quality job listings that match your skills and help you grow in your career." },
    { icon: <LuUsers className="text-primary" />, title: "Community Support", description: "Join a community of professionals and get support from peers and mentors." },
    { icon: <IoBriefcaseOutline className="text-primary" />, title: "Career Growth", description: "Opportunities for career advancement and growth in various industries." },
    { icon: <MdOutlineShowChart className="text-primary" />, title: "Market Insights", description: "Get insights into the job market and trends to stay ahead in your career." },
    { icon: <FaRegClock className="text-primary" />, title: "Timely Updates", description: "Receive timely updates on new job listings and opportunities that match your profile." },
    { icon: <FaRegHandshake className="text-primary" />, title: "Trusted Partners", description: "Work with trusted partners and employers who value your skills and expertise." },
  ];

  return (
    <div className="w-full p-3 lg:p-20">
      <h2 className="text-center text-2xl lg:text-4xl font-bold mb-10">Why Rani Khadam is Right for You ?</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-start p-6 bg-white border rounded-lg shadow-md">
            {item.icon}
            <h3 className="text-text-primary text-lg lg:text-xl font-bold mt-4">{item.title}</h3>
            <p className="text-text-secondary text-sm lg:text-base mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyRaniKhadam;