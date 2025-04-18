import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FeedbackForm: React.FC = () => {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-100">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold">
          Share Your Feedback
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-6">
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Your Name
            </label>
            <Input
              id="name"
              placeholder="John Doe"
              className="focus:ring-2 focus:ring-blue-500 transition-all duration-200 border-gray-300"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="focus:ring-2 focus:ring-blue-500 transition-all duration-200 border-gray-300"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="feedbackType"
              className="text-sm font-medium text-gray-700"
            >
              Feedback Type
            </label>
            <Select>
              <SelectTrigger
                id="feedbackType"
                className="w-full focus:ring-2 focus:ring-blue-500 transition-all duration-200 border-gray-300"
              >
                <SelectValue placeholder="Select feedback type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Feedback</SelectItem>
                <SelectItem value="bug">Bug Report</SelectItem>
                <SelectItem value="feature">Feature Request</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="feedback"
              className="text-sm font-medium text-gray-700"
            >
              Your Feedback
            </label>
            <Textarea
              id="feedback"
              placeholder="Please share your thoughts..."
              className="focus:ring-2 focus:ring-blue-500 transition-all duration-200 border-gray-300 h-32"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Submit Feedback
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FeedbackForm;
