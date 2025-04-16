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

interface MedicalDegreesFieldProps {
	control: Control<FormValues>;
	errors: any;
}

const MedicalDegreesField: React.FC<MedicalDegreesFieldProps> = ({
	control,
	errors,
}) => {
	const { fields, append, remove } = useFieldArray({
		control,
		name: "medicalDegrees",
	});

	const currentYear = new Date().getFullYear();
	const years = Array.from({ length: 600 }, (_, i) => currentYear - i);

	return (
		<div className="col-span-2 flex flex-col gap-2">
			<Label>Medical Degrees</Label>
			{fields.map((field, index) => (
				<div key={field.id} className="grid grid-cols-3 gap-2 mt-2">
					<Controller
						name={`medicalDegrees.${index}.degree`}
						control={control}
						defaultValue=""
						render={({ field }) => (
							<Input
								{...field}
								placeholder="Enter medical degree"
								className="col-span-1"
							/>
						)}
					/>
					<Controller
						name={`medicalDegrees.${index}.institution`}
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
							name={`medicalDegrees.${index}.year`}
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
			{errors.medicalDegrees && (
				<p className="text-red-500 text-sm mt-1">
					{errors.medicalDegrees.message}
				</p>
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

export default MedicalDegreesField;
