import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const LanguageSettings: React.FC = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-[#125872] text-accent-foreground p-4 -mt-6">
        <CardTitle className="text-2xl text-white font-bold">
          Language Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-2">
          <Label htmlFor="language" className="text-lg">
            Preferred Language
          </Label>
          <Select>
            <SelectTrigger id="language" className="w-full">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="hi">Hindi</SelectItem>
              <SelectItem value="or">Odia</SelectItem>
              <SelectItem value="ban">Bangla</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default LanguageSettings;
