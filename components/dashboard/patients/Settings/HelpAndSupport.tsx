import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, FileQuestion } from 'lucide-react';

const HelpAndSupport: React.FC = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-[#125872] text-secondary-foreground">
        <CardTitle className="text-2xl text-white font-bold">Help and Support</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        {[ 
          { label: 'Visit Help Center', icon: HelpCircle },
          { label: 'Contact Support', icon: MessageCircle },
          { label: 'FAQs', icon: FileQuestion },
        ].map((item, index) => (
          <Button key={index} variant="outline" className="w-full justify-start text-lg h-14">
            <item.icon className="mr-2 h-5 w-5" />
            {item.label}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default HelpAndSupport;