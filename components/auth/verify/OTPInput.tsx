"use client";
import { Input } from "@/components/ui/input";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { OtpSchemaType } from "@/Zod/zod";

interface OTPInputProps {
	value: string;
	onChange: (value: string) => void;
	form: UseFormReturn<OtpSchemaType>;
	disabled?: boolean;
}

export const OTPInput: React.FC<OTPInputProps> = ({
	value,
	onChange,
	form,
	disabled = false,
}) => {
	const inputRef = React.useRef<HTMLInputElement>(null);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		// Allow only numbers, backspace, delete, and arrow keys
		if (
			!/^\d$/.test(e.key) &&
			!["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
		) {
			e.preventDefault();
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value.replace(/[^0-9]/g, "").slice(0, 6);
		onChange(newValue);
		form.setValue("otp", newValue, { shouldValidate: true });
	};

	return (
		<div role="group" aria-labelledby="otp-label">
			<label
				id="otp-label"
				className="block text-sm font-medium text-white mb-1">
				Enter OTP
			</label>
			<div className="relative">
				<Input
					ref={inputRef}
					type="text"
					inputMode="numeric"
					maxLength={6}
					value={value}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					disabled={disabled}
					aria-invalid={!!form.formState.errors.otp}
					aria-describedby={form.formState.errors.otp ? "otp-error" : undefined}
					placeholder="Enter 6-digit OTP"
					className="w-full px-4 py-3 text-center text-lg tracking-[1em] font-mono border border-gray-300 rounded-lg focus:ring-[#31addb] focus:border-[#31addb] bg-white transition-all duration-200"
				/>
				<div className="absolute inset-y-0 right-0 flex items-center pr-3">
					{value.length === 6 && (
						<svg
							className="h-5 w-5 text-green-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 13l4 4L19 7"
							/>
						</svg>
					)}
				</div>
			</div>
			{form.formState.errors.otp && (
				<p id="otp-error" className="mt-1 text-sm text-red-500" role="alert">
					{form.formState.errors.otp.message}
				</p>
			)}
			<p className="mt-2 text-sm text-gray-200">
				Enter the 6-digit code sent to your mobile number
			</p>
		</div>
	);
};
