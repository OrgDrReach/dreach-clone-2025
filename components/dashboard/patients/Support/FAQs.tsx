import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
  {
    question: "How do I schedule an appointment?",
    answer:
      "You can schedule an appointment by navigating to the 'Appointments' section and clicking on 'Schedule New Appointment'.",
  },
  {
    question: "How can I view my medical records?",
    answer:
      "Your medical records can be accessed in the 'Medical Records' section of your dashboard.",
  },
  // Add more FAQs as needed
];

const FAQs: React.FC = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">
          Frequently Asked Questions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-200 last:border-b-0"
            >
              <AccordionTrigger className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FAQs;
