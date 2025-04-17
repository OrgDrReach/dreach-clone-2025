import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  ContactInformation,
  FAQs,
  SupportResources,
  HelpCenter,
  SubmitQuestion,
  SupportTickets,
  KnowledgeBase,
  PatientAdvocacy,
  FeedbackForm,
  TermsOfService,
} from "@/components/dashboard/patients/Support";

const SupportPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex space-x-4 mb-6">
        <Input placeholder="Search for help..." className="flex-grow" />
        <Button>
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </div>

      <ContactInformation />

      <Tabs defaultValue="help" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-6 bg-sky-200 text-black">
          <TabsTrigger value="help">Help Center</TabsTrigger>
          <TabsTrigger value="tickets">My Tickets</TabsTrigger>
          <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="help" className="space-y-4">
          <HelpCenter />
          <FAQs />
          <SupportResources />
        </TabsContent>

        <TabsContent value="tickets">
          <Card>
            <CardContent className="p-4">
              <SupportTickets />
              <div className="mt-4">
                <SubmitQuestion />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="knowledge">
          <KnowledgeBase />
        </TabsContent>

        <TabsContent value="feedback">
          <FeedbackForm />
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PatientAdvocacy />
        <TermsOfService />
      </div>
    </div>
  );
};

export default SupportPage;
