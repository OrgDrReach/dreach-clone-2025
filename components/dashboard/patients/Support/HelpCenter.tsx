import React from 'react';
import dynamic from 'next/dynamic';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactInformation = dynamic(() => import('./ContactInformation'), { ssr: false });
const FAQs = dynamic(() => import('./FAQs'), { ssr: false });
const SupportResources = dynamic(() => import('./SupportResources'), { ssr: false });

const HelpCenter: React.FC = () => {
  return (
    <Card className="bg-transparent space-y-4 border-none transition-all duration-300">

        <FAQs />
        <SupportResources />
    </Card>
  );
};

export default HelpCenter;