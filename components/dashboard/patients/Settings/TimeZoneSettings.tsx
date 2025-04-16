import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Clock } from 'lucide-react';

const TimeZoneSettings: React.FC = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-[#125872] text-accent-foreground">
        <CardTitle className="text-2xl text-white font-bold flex items-center">
          <Clock className="mr-2" /> Time Zone Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-2">
          <Label htmlFor="timezone" className="text-lg">Time Zone</Label>
          <Select>
            <SelectTrigger id="timezone" className="w-full">
              <SelectValue placeholder="Select time zone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
              <SelectItem value="est">Eastern Time (ET)</SelectItem>
              <SelectItem value="cst">Central Time (CT)</SelectItem>
              <SelectItem value="mst">Mountain Time (MT)</SelectItem>
              <SelectItem value="pst">Pacific Time (PT)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimeZoneSettings;