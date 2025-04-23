import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { UserPlus, FileText, Share2 } from "lucide-react";

const DataSharingPreferences: React.FC = () => {
  const sharingPreferences = [
    {
      label: "Share with Healthcare Providers",
      id: "share-providers",
      icon: UserPlus,
    },
    {
      label: "Share for Research Purposes",
      id: "share-research",
      icon: FileText,
    },
    {
      label: "Share with Third-Party Services",
      id: "share-third-party",
      icon: Share2,
    },
  ];

  return (
    <Card className="overflow-hidden shadow-lg">
      <CardHeader className="bg-gradient-to-r from-[#125872] to-[#0e465a] text-accent-foreground p-6 -mt-6">
        <CardTitle className="text-2xl font-bold text-white">
          Data Sharing Preferences
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {sharingPreferences.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted-hover transition-colors"
          >
            <Label
              htmlFor={item.id}
              className="text-lg flex items-center cursor-pointer"
            >
              <item.icon className="mr-3 h-6 w-6" />
              {item.label}
            </Label>
            <Switch id={item.id} />
          </div>
        ))}
        <Button className="w-full mt-6">Update Data Sharing Preferences</Button>
      </CardContent>
    </Card>
  );
};

export default DataSharingPreferences;
