import React from "react";

interface CardProps {
  title: string;
  value: number;
}

const Card: React.FC<CardProps> = ({ title, value }) => {
  return (
    <div className="bg-[#ffffff] dark:bg-slate-800 rounded-lg shadow-md p-6 w-60 flex flex-col items-center">
      <h3 className="text-gray-700 dark:text-white text-lg font-bold">{title}</h3>
      <span className="text-3xl font-bold text-[#125872] dark:text-[#4dbbe4] mt-4">{value}</span>
    </div>
  );
};

const Updates: React.FC = () => {
  const data = [
    { title: "Today's Appointments", value: 8 },
    { title: "Patients Seen Today", value: 5 },
    { title: "Pending Reports", value: 3 },
    { title: "New Messages", value: 0 },
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

export default Updates;
