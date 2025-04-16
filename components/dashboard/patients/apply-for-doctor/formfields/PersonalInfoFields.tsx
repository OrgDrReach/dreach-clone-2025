import React from "react";
import { Controller, Control } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormValues } from "./FormFields";

interface PersonalInfoFieldsProps {
	control: Control<FormValues>;
	errors: any;
}

const PersonalInfoFields: React.FC<PersonalInfoFieldsProps> = ({
	control,
	errors,
}) => (
	<div className="col-span-2 grid grid-cols-2 gap-4">
		<div>
			<Label htmlFor="firstName">First Name</Label>
			<Controller
				name="firstName"
				control={control}
				render={({ field }) => (
					<Input
						id="firstName"
						placeholder="Enter your first name"
						{...field}
					/>
				)}
			/>
			{errors.firstName && (
				<p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
			)}
		</div>
		<div>
			<Label htmlFor="lastName">Last Name</Label>
			<Controller
				name="lastName"
				control={control}
				render={({ field }) => (
					<Input id="lastName" placeholder="Enter your last name" {...field} />
				)}
			/>
			{errors.lastName && (
				<p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
			)}
		</div>
	</div>
);

export default PersonalInfoFields;
