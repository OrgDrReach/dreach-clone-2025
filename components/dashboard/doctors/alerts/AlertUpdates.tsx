import React from "react";

interface CardProps {
  title: string;
  value: number;
}

const Card: React.FC<CardProps> = ({ title, value }) => {
  return (
    <div className="bg-[#ffffff] rounded-lg shadow-md p-6 w-80 flex flex-col items-center  mb-4">
      <h3 className="text-gray-700 text-lg font-bold">{title}</h3>
      <span className="text-3xl font-bold text-[#125872] mt-4">{value}</span>
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
      <div className="flex flex-wrap  justify-center md:justify-between w-full">
        {data.map((item, index) => (
          <Card key={index} title={item.title} value={item.value} />
        ))}
      </div>
    </div>
  );
};

export default AlertUpdates;
