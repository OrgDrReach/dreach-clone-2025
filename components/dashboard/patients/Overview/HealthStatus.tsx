import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaHeartbeat } from "react-icons/fa";

type HealthStatus = "good" | "caution" | "concern";

interface HealthStatusProps {
  status: HealthStatus;
}

const getStatusColor = (status: HealthStatus): string => {
  switch (status) {
    case "good":
      return "bg-green-500";
    case "caution":
      return "bg-yellow-500";
    case "concern":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

const getStatusText = (status: HealthStatus): string => {
  switch (status) {
    case "good":
      return "Good";
    case "caution":
      return "Caution";
    case "concern":
      return "Concern";
    default:
      return "Unknown";
  }
};

const HealthStatus: React.FC<HealthStatusProps> = ({ status }) => {
  const statusColor = getStatusColor(status);
  const statusText = getStatusText(status);

  return (
    <Card className="shadow-md hover:shadow-xl transition-all duration-300  h-full">
      <CardHeader className="bg-gradient-to-r  from-[#285b6d] to-[#31addb] text-white rounded-t-lg">
        <CardTitle className="text-xl font-semibold flex items-center">
          <FaHeartbeat className="w-6 h-6 mr-2" />
          Health Status
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center h-[calc(100%-4rem)]">
        <div className="flex flex-col items-center space-y-4">
          <div
            className={`w-16 h-16 rounded-full ${statusColor} flex items-center justify-center`}
          >
            <span className="text-2xl font-bold text-white">
              {statusText[0]}
            </span>
          </div>
          <Badge
            variant="secondary"
            className={`text-lg font-medium px-4 py-2 ${statusColor.replace("bg-", "text-")}`}
          >
            {statusText}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthStatus;
