"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface RatingSystemProps {
  onSubmit: (rating: number, feedback: string) => void;
}

const RatingSystem: React.FC<RatingSystemProps> = ({ onSubmit }) => {
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>("");

  const handleSubmit = () => {
    onSubmit(rating, feedback);
    // Reset form after submission
    setRating(0);
    setFeedback("");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Rate Your Messaging Experience</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-medium mb-2">Overall Satisfaction</p>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Button
                key={star}
                variant="ghost"
                size="sm"
                onClick={() => setRating(star)}
                className={`p-1 ${rating >= star ? "text-yellow-400" : "text-gray-300"}`}
              >
                <Star className="h-6 w-6 fill-current" />
              </Button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="feedback" className="text-sm font-medium">
            Comments or Feedback
          </label>
          <Textarea
            id="feedback"
            placeholder="Share your thoughts on the messaging system..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="min-h-[100px]"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} disabled={rating === 0}>
          Submit Feedback
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RatingSystem;
