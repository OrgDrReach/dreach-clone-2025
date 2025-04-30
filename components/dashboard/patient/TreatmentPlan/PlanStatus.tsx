import React from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, AlertTriangle } from "lucide-react";

type StatusType = "In Progress" | "Completed" | "On Hold" | "Not Started";

interface PlanStatusProps {
  status: StatusType;
}

const PlanStatus: React.FC<PlanStatusProps> = ({ status }) => {
  const getStatusDetails = (status: StatusType) => {
    switch (status) {
      case "In Progress":
        return {
          icon: <Clock className="w-4 h-4 mr-1" />,
          color: "bg-blue-400 text-blue-800",
        };
      case "Completed":
        return {
          icon: <CheckCircle className="w-4 h-4 mr-1" />,
          color: "bg-green-100 text-green-800",
        };
      case "On Hold":
        return {
          icon: <AlertTriangle className="w-4 h-4 mr-1" />,
          color: "bg-yellow-100 text-yellow-800",
        };
      case "Not Started":
        return {
          icon: <Clock className="w-4 h-4 mr-1" />,
          color: "bg-gray-100 text-gray-800",
        };
    }
  };

  const { icon, color } = getStatusDetails(status);

  return (
    <Badge variant="outline" className={`flex items-center ${color}`}>
      {icon}
      {status}
    </Badge>
  );
};

export default PlanStatus;
