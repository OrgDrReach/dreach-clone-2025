import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Calendar, CreditCard } from "lucide-react";

interface QuickBillOverviewProps {
  currentBalance: number;
  dueDate: string;
  lastPayment: { date: string; amount: number };
}

const QuickBillOverview: React.FC<QuickBillOverviewProps> = ({
  currentBalance,
  dueDate,
  lastPayment,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <OverviewCard
        title="Current Balance"
        icon={<DollarSign className="w-6 h-6 text-green-500" />}
        value={`$${currentBalance.toFixed(2)}`}
        gradientFrom="from-green-400"
        gradientTo="to-green-600"
      />
      <OverviewCard
        title="Next Due Date"
        icon={<Calendar className="w-6 h-6 text-blue-500" />}
        value={new Date(dueDate).toLocaleDateString()}
        gradientFrom="from-blue-400"
        gradientTo="to-blue-600"
      />
      <OverviewCard
        title="Last Payment"
        icon={<CreditCard className="w-6 h-6 text-purple-500" />}
        value={`$${lastPayment.amount.toFixed(2)} on ${new Date(lastPayment.date).toLocaleDateString()}`}
        gradientFrom="from-purple-400"
        gradientTo="to-purple-600"
      />
    </div>
  );
};

interface OverviewCardProps {
  title: string;
  icon: React.ReactNode;
  value: string;
  gradientFrom: string;
  gradientTo: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  icon,
  value,
  gradientFrom,
  gradientTo,
}) => (
  <Card className="overflow-hidden">
    <div
      className={`p-4 text-white bg-gradient-to-r ${gradientFrom} ${gradientTo}`}
    >
      <div className="flex items-center space-x-2">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
    <CardContent className="pt-4">
      <p className="text-2xl font-bold">{value}</p>
    </CardContent>
  </Card>
);

export default QuickBillOverview;
