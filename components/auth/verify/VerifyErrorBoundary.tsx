"use client";
import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
	children: ReactNode;
}

interface State {
	hasError: boolean;
	error: Error | null;
}

export class VerifyErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
		error: null,
	};

	public static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("Verification error:", error, errorInfo);
	}

	private handleRetry = () => {
		this.setState({ hasError: false, error: null });
	};

	public render() {
		if (this.state.hasError) {
			return (
				<div className="flex items-center justify-center min-h-screen bg-[#d8eaee] dark:bg-[#1F2C3B]">
					<div className="w-full max-w-md p-8 space-y-6 bg-offer rounded-xl shadow-lg">
						<div className="text-center space-y-4">
							<h2 className="text-2xl font-bold text-orange-400">
								Oops! Something went wrong
							</h2>
							<p className="text-white">
								{this.state.error?.message ||
									"An error occurred during verification"}
							</p>
							<div className="space-x-4">
								<Button
									onClick={this.handleRetry}
									className="bg-[#31addb] hover:bg-[#00bbff] text-white">
									Try Again
								</Button>
								<Button
									onClick={() => (window.location.href = "/auth/login")}
									variant="outline"
									className="text-white border-white hover:bg-white hover:text-gray-800">
									Back to Login
								</Button>
							</div>
						</div>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}
