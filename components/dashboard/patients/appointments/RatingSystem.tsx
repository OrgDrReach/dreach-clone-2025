"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
		setRating(0);
		setFeedback("");
	};

	return (
		<Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
			<CardHeader className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
				<CardTitle className="text-2xl font-bold">Rate Your Provider</CardTitle>
			</CardHeader>
			<CardContent className="mt-4 space-y-4">
				<div className="flex space-x-1">
					{[1, 2, 3, 4, 5].map((star) => (
						<Button
							key={star}
							variant="ghost"
							size="sm"
							onClick={() => setRating(star)}
							className="hover:bg-yellow-100"
						>
							<Star
								className={`h-8 w-8 ${
									star <= rating
										? "fill-yellow-400 text-yellow-400"
										: "text-gray-300"
								}`}
							/>
						</Button>
					))}
				</div>
				<Textarea
					placeholder="Share your feedback about the provider..."
					value={feedback}
					onChange={(e) => setFeedback(e.target.value)}
					className="min-h-[100px] resize-none"
				/>
				<Button 
					onClick={handleSubmit} 
					disabled={rating === 0}
					className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 transition-colors duration-300"
				>
					Submit Rating
				</Button>
			</CardContent>
		</Card>
	);
};

export default RatingSystem;
