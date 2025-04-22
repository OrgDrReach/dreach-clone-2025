import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const TermsOfService: React.FC = () => {
  return (
    <Card  className="border-gray-300 dark:border-gray-600">
      <CardHeader>
        <CardTitle>Terms of Service</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px] w-full rounded-md border p-4 border-gray-300 dark:border-gray-600">
          <h3 className="text-lg font-semibold">1. Acceptance of Terms</h3>
          <p className="mb-4">
            By accessing and using this patient dashboard, you agree to be bound
            by these Terms of Service.
          </p>

          <h3 className="text-lg font-semibold">2. Privacy Policy</h3>
          <p className="mb-4">
            Your use of the patient dashboard is also governed by our Privacy
            Policy, which can be found [link].
          </p>

          <h3 className="text-lg font-semibold">3. Use of Services</h3>
          <p className="mb-4">
            You agree to use the patient dashboard only for lawful purposes and
            in accordance with these Terms of Service.
          </p>

          <h3 className="text-lg font-semibold">4. Data Usage and Sharing</h3>
          <p>
            We are committed to protecting your personal health information.
            Your data will be used and shared only in accordance with our
            Privacy Policy and applicable laws.
          </p>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default TermsOfService;
