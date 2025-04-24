import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Star } from "lucide-react";

export const FeedbackSystem: React.FC = () => {
	return (
		<div className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle>System Feedback</CardTitle>
				</CardHeader>
				<CardContent>
					<form className="space-y-6">
						<div className="space-y-2">
							<label className="text-sm font-medium">Feedback Category</label>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="Select category" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="general">General Feedback</SelectItem>
									<SelectItem value="bug">Bug Report</SelectItem>
									<SelectItem value="feature">Feature Request</SelectItem>
									<SelectItem value="improvement">
										Improvement Suggestion
									</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div className="space-y-2">
							<label className="text-sm font-medium">Rating</label>
							<div className="flex space-x-1">
								{[1, 2, 3, 4, 5].map((rating) => (
									<Button
										key={rating}
										variant="ghost"
										size="sm"
										className="hover:text-yellow-400">
										<Star className="h-5 w-5" />
									</Button>
								))}
							</div>
						</div>

						<div className="space-y-2">
							<label className="text-sm font-medium">Your Feedback</label>
							<Textarea
								placeholder="Please share your thoughts or report any issues..."
								className="min-h-[150px]"
							/>
						</div>

						<Button type="submit" className="w-full">
							Submit Feedback
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};
