import React from "react";
import { Badge } from "@/components/ui/badge";
import { FileCheck, FileX, FileEdit } from "lucide-react";

type StatusType = "Draft" | "Finalized" | "Rejected";

interface ReportStatusProps {
  status: StatusType;
}

const ReportStatus: React.FC<ReportStatusProps> = ({ status }) => {
  const getStatusDetails = (status: StatusType) => {
    switch (status) {
      case "Draft":
        return { icon: <FileEdit className="w-4 h-4 mr-1" />, color: "bg-yellow-100 text-yellow-800" };
      case "Finalized":
        return { icon: <FileCheck className="w-4 h-4 mr-1" />, color: "bg-green-100 text-green-800" };
      case "Rejected":
        return { icon: <FileX className="w-4 h-4 mr-1" />, color: "bg-red-100 text-red-800" };
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

export default ReportStatus;