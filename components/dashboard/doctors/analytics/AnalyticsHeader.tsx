import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import React from "react";

const AnalyticsHeader: React.FC = () => {
  return (
    <main>
      <div>
        {/* Header with button */}
        <div className="h-full w-full bg-white rounded-lg p-2">
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-black justify-center px-2">
              Analytics
            </p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="font-semibold">Export Report</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Export Analytics Report</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AnalyticsHeader;
