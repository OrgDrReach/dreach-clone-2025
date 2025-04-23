import React from "react";

interface CardProps {
  title: string;
  value: number;
}

const Card: React.FC<CardProps> = ({ title, value }) => {
  return (
    <div className="bg-[#ffffff] dark:bg-slate-800 rounded-lg shadow-md p-6 w-80 flex flex-col items-center  mb-4">
      <h3 className="text-gray-700 dark:text-white text-lg font-bold">{title}</h3>
      <span className="text-3xl font-bold text-[#125872] dark:text-[#4dbbe4] mt-4">{value}</span>
    </div>
  );
};

const AlertUpdates: React.FC = () => {
  const data = [
    { title: "New Alerts", value: 8 },
    { title: "Unread Notification", value: 5 },
    { title: "Total Notification", value: 3 },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="bg-gradient-to-r from-[#285b6d] to-[#31addb] text-white flex flex-wrap justify-center md:justify-between w-full">
        {data.map((item, index) => (
          <Card key={index} title={item.title} value={item.value} />
        ))}
      </div>
    </div>
  );
};

export default AlertUpdates;
