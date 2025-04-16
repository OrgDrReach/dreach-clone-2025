import React from "react";
import { Controller, Control, useFieldArray } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select";
import { FormValues } from "./FormFields";
import { PlusCircle, Trash } from "lucide-react";

interface EducationFieldProps {
	control: Control<FormValues>;
	errors: any;
}

const EducationField: React.FC<EducationFieldProps> = ({ control, errors }) => {
	const { fields, append, remove } = useFieldArray({
		control,
		name: "education",
	});

	const currentYear = new Date().getFullYear();
	const years = Array.from({ length: 600 }, (_, i) => currentYear - i);

	return (
		<div className="col-span-2 flex flex-col gap-2">
			<Label>Education</Label>
			{fields.map((field, index) => (
				<div key={field.id} className="grid grid-cols-3 gap-2 mt-2">
					<Controller
						name={`education.${index}.degree`}
						control={control}
						defaultValue=""
						render={({ field }) => (
							<Input {...field} placeholder="Degree" className="col-span-1" />
						)}
					/>
					<Controller
						name={`education.${index}.institution`}
						control={control}
						defaultValue=""
						render={({ field }) => (
							<Input
								{...field}
								placeholder="Enter institution"
								className="col-span-1"
							/>
						)}
					/>
					<div className="flex items-center gap-2">
						<Controller
							name={`education.${index}.year`}
							control={control}
							defaultValue=""
							render={({ field }) => (
								<Select onValueChange={field.onChange} value={field.value}>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Year" />
									</SelectTrigger>
									<SelectContent>
										{years.map((year) => (
											<SelectItem key={year} value={year.toString()}>
												{year}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							)}
						/>
						<Button
							type="button"
							variant="destructive"
							size="icon"
							onClick={() => remove(index)}>
							<Trash className="h-4 w-4" />
						</Button>
					</div>
				</div>
			))}
			{errors.education && (
				<p className="text-red-500 text-sm mt-1">{errors.education.message}</p>
			)}
			<Button
				type="button"
				variant="outline"
				size="sm"
				className="mt-2"
				onClick={() => append({ degree: "", institution: "", year: "" })}>
				<PlusCircle className="h-4 w-4 mr-2" />
				Add Degree
			</Button>
		</div>
	);
};

export default EducationField;
