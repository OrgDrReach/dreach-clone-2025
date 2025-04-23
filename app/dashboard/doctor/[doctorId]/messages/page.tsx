"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MessageFilters from "@/components/dashboard/doctor/messages/MessageFilters";
import ChatList from "@/components/dashboard/doctor/messages/ChatList";
import ChatHeader from "@/components/dashboard/doctor/messages/ChatHeader";
import MessageHistory from "@/components/dashboard/patient/Messages/MessageHistory";

const MessagingPage = () => {
	const [showFilters, setShowFilters] = useState(false);
	const [selectedChat, setSelectedChat] = useState<number | null>(null);

	return (
		<div className="flex h-[calc(100vh-4rem)] bg-gray-50 dark:bg-gray-900">
			<aside className="w-96 border-r border-gray-200 dark:border-gray-700 flex flex-col">
				<div className="p-4 border-b dark:border-gray-700">
					<div className="relative">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
						<Input
							placeholder="Search conversations..."
							className="pl-10 w-full"
						/>
					</div>
					<Button
						onClick={() => setShowFilters(!showFilters)}
						variant="secondary"
						className="w-full mt-3">
						Filters {showFilters ? "▼" : "▲"}
					</Button>
				</div>

				<MessageFilters showFilters={showFilters} />

				<div className="flex-1 overflow-y-auto space-y-2 p-4">
					<ChatList
						selectedChat={selectedChat}
						onChatSelect={setSelectedChat}
					/>
					{/* Add more ChatList items here */}
				</div>
			</aside>

			<main className="flex-1 flex flex-col">
				<ChatHeader />
				<div className="flex-1 overflow-y-auto">
					<MessageHistory />
				</div>
				<div className="p-4 border-t dark:border-gray-700 bg-white dark:bg-gray-800">
					<div className="flex items-center gap-4">
						<Input placeholder="Type your message..." className="flex-1" />
						<Button>Send</Button>
					</div>
				</div>
			</main>
		</div>
	);
};

export default MessagingPage;
