import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SubmitQuestion: React.FC = () => {
  return (
    <Card className="border-gray-300 dark:border-gray-600">
      <CardHeader>
        <CardTitle>Submit a Question</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <Input placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Textarea placeholder="Your Question" />
          <Button type="submit">Submit Question</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SubmitQuestion;
