import Verification from "@/components/dashboard/admin/hospitals/Verification";
import React from "react";

const Hospitals: React.FC = () => {
  return (
    <main>
      <div className="p-4">
        <div className={`pb-3`}>
          <h1 className={`text-white text-2xl font-bold`}>
            Hospital's Management
          </h1>
        </div>
        <Verification />
      </div>
    </main>
  );
};

export default Hospitals;
