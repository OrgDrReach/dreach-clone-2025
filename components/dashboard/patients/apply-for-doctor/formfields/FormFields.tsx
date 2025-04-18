import React from "react";
import { useForm, Controller, Control } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
	UserInfoFields,
	PersonalInfoFields,
	DateOfBirthField,
	PhoneNumberField,
	GenderField,
	BloodGroupSelect,
} from "./index";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select";
import AddressFields from "./AddressFields";
import MedicalDegreesField from "./MedicalDegreesField";
import SkillsAndHobbiesField from "./SkillsAndHobbiesField";
import EducationField from "./EducationField";
import AwardsField from "./AwardsField";
import ClinicInfoFields from "./ClinicInfoFields";
import AadhaarVerificationField from "./AadhaarVerificationField";
import DoctorLicenseVerificationField from "./DoctorLicenseVerificationField";

const formSchema = z
	.object({
		username: z
			.string()
			.min(3, "Username must be at least 3 characters")
			.max(20, "Username must be at most 20 characters"),
		email: z.string().email("Invalid email address"),
		firstName: z.string().min(2, "First name must be at least 2 characters"),
		lastName: z.string().min(2, "Last name must be at least 2 characters"),
		dateOfBirth: z
			.date()
			.max(new Date(), "Date of birth cannot be in the future"),
		phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
		gender: z.enum(["male", "female", "other"], {
			required_error: "Please select a gender",
		}),
		bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
			required_error: "Please select a blood group",
		}),
		biography: z.string().optional(),
		appointmentMode: z.enum(["in-person", "video", "both"], {
			required_error: "Please select an appointment mode",
		}),
		permanentAddressLine1: z.string().min(1, "Address line 1 is required"),
		permanentAddressLine2: z.string().optional(),
		permanentCity: z.string().min(1, "City is required"),
		permanentState: z.string().min(1, "State is required"),
		permanentCountry: z.string().min(1, "Country is required"),
		permanentPostalCode: z.string().min(1, "Postal code is required"),
		sameAsPermament: z.boolean().default(false),
		residentialAddressLine1: z.string().min(1, "Address line 1 is required"),
		residentialAddressLine2: z.string().optional(),
		residentialCity: z.string().min(1, "City is required"),
		residentialState: z.string().min(1, "State is required"),
		residentialCountry: z.string().min(1, "Country is required"),
		residentialPostalCode: z.string().min(1, "Postal code is required"),
		medicalDegrees: z
			.array(
				z.object({
					degree: z.string().min(1, "Degree is required"),
					institution: z.string().min(1, "Institution is required"),
					year: z.string().min(1, "Year is required"),
				})
			)
			.min(1, "At least one medical degree is required"),
		skills: z
			.array(
				z.object({
					skill: z.string().min(1, "Skill is required"),
				})
			)
			.optional(),
		hobbies: z
			.array(
				z.object({
					hobby: z.string().min(1, "Hobby is required"),
				})
			)
			.optional(),
		education: z
			.array(
				z.object({
					degree: z.string().min(1, "Degree is required"),
					institution: z.string().min(1, "Institution is required"),
					year: z.string().min(1, "Year is required"),
				})
			)
			.optional(),
		awards: z
			.array(
				z.object({
					title: z.string().min(1, "Award title is required"),
					organization: z.string().min(1, "Awarding organization is required"),
					year: z.string().min(1, "Year is required"),
				})
			)
			.optional(),
		clinics: z
			.array(
				z.object({
					name: z.string().min(1, "Clinic name is required"),
					address: z.string().min(1, "Clinic address is required"),
					hours: z.string().min(1, "Clinic hours are required"),
				})
			)
			.optional(),
		aadhaarNumber: z.string().length(12, "Aadhaar number must be 12 digits"),
		aadhaarFile: z
			.instanceof(File, { message: "Please upload your Aadhaar card" })
			.optional(),
		licenseNumber: z.string().min(1, "License number is required"),
		licenseFile: z
			.instanceof(File, { message: "Please upload your medical license" })
			.optional(),
	})
	.strict();

export type FormValues = z.infer<typeof formSchema>;

const FormFields: React.FC = () => {
	const form = useForm<FormValues>({
		resolver: zodResolver<FormValues, any, typeof formSchema>(formSchema),
		mode: "onChange",
		defaultValues: {
			username: "",
			email: "",
			firstName: "",
			lastName: "",
			phoneNumber: "",
			biography: "",
			permanentAddressLine1: "",
			permanentAddressLine2: "",
			permanentCity: "",
			permanentState: "",
			permanentCountry: "",
			permanentPostalCode: "",
			sameAsPermament: false,
			residentialAddressLine1: "",
			residentialAddressLine2: "",
			residentialCity: "",
			residentialState: "",
			residentialCountry: "",
			residentialPostalCode: "",
			bloodGroup: "A+" as const,
			dateOfBirth: new Date(),
			gender: "male" as const,
			appointmentMode: "in-person" as const,
			medicalDegrees: [],
			skills: [],
			hobbies: [],
			education: [],
			awards: [],
			clinics: [],
			aadhaarNumber: "",
			licenseNumber: "",
		},
	});

	const {
		control,
		handleSubmit,
		formState: { errors },
		watch,
	} = form;

	const onSubmit = async (data: FormValues) => {
		console.log(data);
		// Handle form submission
	};

	type FormControl = Control<FormValues>;

	return (
		<div className="grid grid-cols-2 gap-6">
			<UserInfoFields
				control={control as unknown as FormControl}
				errors={errors}
			/>
			<PersonalInfoFields
				control={control as unknown as FormControl}
				errors={errors}
			/>
			<DateOfBirthField
				control={control as unknown as FormControl}
				errors={errors}
			/>
			<PhoneNumberField
				control={control as unknown as FormControl}
				errors={errors}
			/>
			<GenderField
				control={control as unknown as FormControl}
				errors={errors}
			/>
			<div className="space-y-2">
				<Label
					htmlFor="bloodGroup"
					className={errors.bloodGroup ? "text-destructive" : ""}>
					Blood Group
				</Label>
				<Controller
					name="bloodGroup"
					control={control}
					render={({ field }) => (
						<BloodGroupSelect
							onValueChange={field.onChange}
							value={field.value}
							error={errors.bloodGroup}
							className="w-full"
						/>
					)}
				/>
				{errors.bloodGroup && (
					<p className="text-sm text-destructive">
						{errors.bloodGroup.message}
					</p>
				)}
			</div>
			<div className="col-span-2">
				<Label htmlFor="biography">Biography</Label>
				<Controller
					name="biography"
					control={control}
					render={({ field }) => (
						<Textarea
							id="biography"
							placeholder="Tell us about yourself"
							{...field}
						/>
					)}
				/>
			</div>
			<div className="col-span-2">
				<Label htmlFor="appointmentMode">Mode of Appointment</Label>
				<Controller
					name="appointmentMode"
					control={control}
					render={({ field }) => (
						<Select onValueChange={field.onChange} value={field.value}>
							<SelectTrigger
								id="appointmentMode"
								className={errors.appointmentMode ? "border-red-500" : ""}>
								<SelectValue placeholder="Select appointment mode" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="in-person">In-person</SelectItem>
								<SelectItem value="video">Video</SelectItem>
								<SelectItem value="both">Both</SelectItem>
							</SelectContent>
						</Select>
					)}
				/>
				{errors.appointmentMode && (
					<p className="text-red-500 text-sm mt-1">
						{errors.appointmentMode.message}
					</p>
				)}
			</div>
			<AddressFields
				control={control as unknown as FormControl}
				errors={errors}
			/>
			<MedicalDegreesField
				control={control as unknown as FormControl}
				errors={errors}
			/>
			<SkillsAndHobbiesField
				control={control as unknown as FormControl}
				errors={errors}
			/>
			<EducationField
				control={control as unknown as FormControl}
				errors={errors}
			/>
			<AwardsField
				control={control as unknown as FormControl}
				errors={errors}
			/>
			<ClinicInfoFields
				control={control as unknown as FormControl}
				errors={errors}
			/>
			<div className="col-span-2 grid grid-cols-2 gap-6">
				<AadhaarVerificationField
					control={control as unknown as FormControl}
					errors={errors}
				/>
				<DoctorLicenseVerificationField
					control={control as unknown as FormControl}
					errors={errors}
				/>
			</div>
		</div>
	);
};

export default FormFields;
