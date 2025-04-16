import React from "react";
import { Badge } from "@/components/ui/badge";
import { Check, CheckCheck, Clock } from "lucide-react";

type StatusType = "sent" | "read" | "responded";

interface MessageStatusProps {
  status: StatusType;
}

const MessageStatus: React.FC<MessageStatusProps> = ({ status }) => {
  const getStatusDetails = (status: StatusType) => {
    switch (status) {
      case "sent":
        return { icon: <Check size={14} />, text: "Sent", color: "bg-blue-500" };
      case "read":
        return { icon: <CheckCheck size={14} />, text: "Read", color: "bg-green-500" };
      case "responded":
        return { icon: <Clock size={14} />, text: "Responded", color: "bg-purple-500" };
      default:
        return { icon: <Check size={14} />, text: "Unknown", color: "bg-gray-500" };
    }
  };

  const { icon, text, color } = getStatusDetails(status);

  return (
    <Badge variant="secondary" className={`${color} text-white flex items-center gap-1`}>
      {icon}
      {text}
    </Badge>
  );
};

export default MessageStatus;