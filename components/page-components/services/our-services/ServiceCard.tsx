import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  text: string;
  desc: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  text,
  desc,
  className,
}) => {
  return (
    <div className={className}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#31ADDB] to-[#125872] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

      <div className="relative mb-3">
        <div className="absolute inset-0 bg-blue-50 dark:bg-gray-700/30 rounded-full scale-150 group-hover:bg-white/10 transition-colors duration-300"></div>
        <div className="relative p-3">{icon}</div>
      </div>

      <h3 className="text-xl font-bold text-[#125872] dark:text-[#31ADDB] group-hover:text-white transition-colors duration-300 text-center mb-2">
        {text}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 text-center group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
        {desc}
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#31ADDB] dark:bg-[#125872] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
    </div>
  );
};

export default ServiceCard;
