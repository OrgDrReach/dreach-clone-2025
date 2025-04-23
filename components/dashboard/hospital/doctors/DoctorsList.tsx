"use client";

import React, { useState, useEffect } from "react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	FormDescription,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Search, Plus, MoreHorizontal, Star } from "lucide-react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { useDoctorStore } from "@/lib/stores/doctorStore";
import {
	IDoctor,
	EDoctorStatus,
	EDoctorConsultMode,
} from "@/types/doctor.d.types";
import { Provider, EProviderType } from "@/types/provider.d.types";

// Following form schema from TYPE_SYSTEM_DOCUMENTATION.md
const addDoctorSchema = z.object({
	firstName: z.string().min(3, "First name must be at least 3 characters"),
	lastName: z.string().min(1, "Last name is required"),
	email: z.string().email("Invalid email address"),
	registrationNumber: z.string().min(3, "Registration number is required"),
	specialization: z
		.array(z.string())
		.min(1, "At least one specialization is required"),
	experience: z.number().min(0, "Experience must be a positive number"),
	phone: z.string().min(10, "Phone number must be at least 10 digits"),
	degree: z.array(z.string()).min(1, "At least one degree is required"),
	languages: z.array(z.string()).min(1, "At least one language is required"),
	consultMode: z
		.array(z.nativeEnum(EDoctorConsultMode))
		.min(1, "At least one consultation mode is required"),
	institution: z.string().min(3, "Institution name is required"),
	yearOfCompletion: z.number().min(1950).max(new Date().getFullYear()),
});

type AddDoctorForm = z.infer<typeof addDoctorSchema>;

const specializations = [
	"General Medicine",
	"Cardiology",
	"Neurology",
	"Pediatrics",
	"Orthopedics",
	"Dermatology",
	"Psychiatry",
	"Ophthalmology",
	"ENT",
	"Dentistry",
];

const languages = [
	"English",
	"Hindi",
	"Spanish",
	"French",
	"German",
	"Chinese",
	"Japanese",
	"Arabic",
];

const consultModes = [
	{ value: EDoctorConsultMode.VIDEO, label: "Video Consultation" },
	{ value: EDoctorConsultMode.IN_PERSON, label: "In-Person Visit" },
	{ value: EDoctorConsultMode.HOME_VISIT, label: "Home Visit" },
	{ value: EDoctorConsultMode.CLINIC, label: "Clinic Consultation" },
	{ value: EDoctorConsultMode.HYBRID, label: "Hybrid" },
];

export const DoctorsList: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const { toast } = useToast();
	const { doctors, isLoading, error, addDoctor, fetchDoctors } =
		useDoctorStore();

	useEffect(() => {
		fetchDoctors();
	}, [fetchDoctors]);

	const form = useForm<AddDoctorForm>({
		resolver: zodResolver(addDoctorSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			registrationNumber: "",
			specialization: [],
			experience: 0,
			phone: "",
			degree: [],
			languages: ["English"],
			consultMode: [],
			institution: "",
			yearOfCompletion: new Date().getFullYear(),
		},
	});

	// const onSubmit = async (data: AddDoctorForm) => {
	// 	try {
	// 		await addDoctor({
	// 			...data,
	// 			type: EProviderType.DOCTOR,
	// 			name: `Dr. ${data.firstName} ${data.lastName}`,
	// 			firstName: data.firstName,
	// 			lastName: data.lastName,
	// 			status: EDoctorStatus.OFFLINE,
	// 			ratings: { average: 0, total: 0 },
	// 			availability: [],
	// 			isVerified: false,
	// 			specialization: data.specialization,
	// 			registrationNumber: data.registrationNumber,
	// 			experience: data.experience,
	// 			languages: data.languages,
	// 			consultMode: data.consultMode,
	// 			education: data.degree.map((deg) => ({
	// 				degree: deg,
	// 				institution: data.institution,
	// 				year: data.yearOfCompletion,
	// 			})),
	// 			clinic: [],
	// 			expertise: [],
	// 			degree: data.degree,
	// 			consultationFee: 0,
	// 			address: [
	// 				{
	// 					id: "",
	// 					street: "",
	// 					city: "",
	// 					state: "",
	// 					country: "",
	// 					postalCode: "",
	// 				},
	// 			],
	// 			contact: {
	// 				phone: [data.phone],
	// 				email: data.email,
	// 			},
	// 			operatingHours: {
	// 				regular: {
	// 					startTime: "09:00",
	// 					endTime: "17:00",
	// 				},
	// 			},
	// 		});

	// 		toast({
	// 			title: "Success",
	// 			description: "Doctor profile created. Pending verification.",
	// 		});

	// 		setIsDialogOpen(false);
	// 		form.reset();
	// 	} catch (error) {
	// 		console.error("Error adding doctor:", error);
	// 		toast({
	// 			title: "Error",
	// 			description:
	// 				error instanceof Error ? error.message : "Failed to add doctor",
	// 			variant: "destructive",
	// 		});
	// 	}
	// };

	const filteredDoctors = doctors.filter((doctor) => {
		const searchString = searchTerm.toLowerCase();
		const doctorData = doctor as Provider & IDoctor;
		return (
			doctorData.name.toLowerCase().includes(searchString) ||
			doctorData.specialization.some((spec) =>
				spec.toLowerCase().includes(searchString)
			)
		);
	});

	const getStatusColor = (status: EDoctorStatus) => {
		switch (status) {
			case EDoctorStatus.ONLINE:
				return "bg-green-500 dark:bg-green-600";
			case EDoctorStatus.BUSY:
				return "bg-yellow-500 dark:bg-yellow-600";
			case EDoctorStatus.OFFLINE:
				return "bg-gray-500 dark:bg-gray-600";
			case EDoctorStatus.ON_LEAVE:
				return "bg-red-500 dark:bg-red-600";
			case EDoctorStatus.SUSPENDED:
				return "bg-red-700 dark:bg-red-800";
			default:
				return "bg-gray-500 dark:bg-gray-600";
		}
	};

	return (
		<Card className="dark:bg-gray-800">
			<CardHeader className="flex flex-row items-center justify-between">
				<div>
					<CardTitle className="text-2xl font-bold dark:text-white">
						Doctors List
					</CardTitle>
					<CardDescription className="dark:text-gray-400">
						Manage and monitor hospital doctors
					</CardDescription>
				</div>
				<div className="flex items-center space-x-4">
					<div className="relative w-64">
						<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							placeholder="Search doctors..."
							className="pl-8 dark:bg-gray-700 dark:text-white"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							aria-label="Search doctors"
						/>
					</div>
					<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
						<DialogTrigger asChild>
							<Button>
								<Plus className="mr-2 h-4 w-4" />
								Add Doctor
							</Button>
						</DialogTrigger>
						<DialogContent className="sm:max-w-[600px] dark:bg-gray-800">
							<DialogHeader>
								<DialogTitle className="dark:text-white">
									Add New Doctor
								</DialogTitle>
							</DialogHeader>
							<Form {...form}>
								<form
									// onSubmit={form.handleSubmit(onSubmit)}
									className="space-y-4">
									<div className="grid grid-cols-2 gap-4">
										<FormField
											control={form.control}
											name="firstName"
											render={({ field }) => (
												<FormItem>
													<FormLabel className="dark:text-white">
														First Name
													</FormLabel>
													<FormControl>
														<Input
															placeholder="John"
															{...field}
															className="dark:bg-gray-700 dark:text-white"
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="lastName"
											render={({ field }) => (
												<FormItem>
													<FormLabel className="dark:text-white">
														Last Name
													</FormLabel>
													<FormControl>
														<Input
															placeholder="Doe"
															{...field}
															className="dark:bg-gray-700 dark:text-white"
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>

									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="dark:text-white">Email</FormLabel>
												<FormControl>
													<Input
														type="email"
														placeholder="doctor@example.com"
														{...field}
														className="dark:bg-gray-700 dark:text-white"
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="registrationNumber"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="dark:text-white">
													Medical Registration Number
												</FormLabel>
												<FormControl>
													<Input
														placeholder="MED12345"
														{...field}
														className="dark:bg-gray-700 dark:text-white"
													/>
												</FormControl>
												<FormDescription className="dark:text-gray-400">
													Enter your medical council registration number
												</FormDescription>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="specialization"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="dark:text-white">
													Specialization
												</FormLabel>
												<FormControl>
													<Select
														onValueChange={(value) => field.onChange([value])}
														defaultValue={field.value?.[0]}>
														<SelectTrigger className="dark:bg-gray-700 dark:text-white">
															<SelectValue placeholder="Select specialization" />
														</SelectTrigger>
														<SelectContent>
															{specializations.map((spec) => (
																<SelectItem key={spec} value={spec}>
																	{spec}
																</SelectItem>
															))}
														</SelectContent>
													</Select>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<div className="grid grid-cols-2 gap-4">
										<FormField
											control={form.control}
											name="experience"
											render={({ field }) => (
												<FormItem>
													<FormLabel className="dark:text-white">
														Years of Experience
													</FormLabel>
													<FormControl>
														<Input
															type="number"
															min="0"
															{...field}
															onChange={(e) =>
																field.onChange(parseInt(e.target.value))
															}
															className="dark:bg-gray-700 dark:text-white"
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>

										<FormField
											control={form.control}
											name="phone"
											render={({ field }) => (
												<FormItem>
													<FormLabel className="dark:text-white">
														Phone Number
													</FormLabel>
													<FormControl>
														<Input
															type="tel"
															placeholder="+1234567890"
															{...field}
															className="dark:bg-gray-700 dark:text-white"
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>

									<FormField
										control={form.control}
										name="degree"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="dark:text-white">
													Medical Degree
												</FormLabel>
												<FormControl>
													<Input
														placeholder="MBBS, MD, etc."
														{...field}
														onChange={(e) =>
															field.onChange(
																e.target.value.split(",").map((s) => s.trim())
															)
														}
														className="dark:bg-gray-700 dark:text-white"
													/>
												</FormControl>
												<FormDescription className="dark:text-gray-400">
													Enter comma-separated degrees (e.g., MBBS, MD, DM)
												</FormDescription>
												<FormMessage />
											</FormItem>
										)}
									/>

									<div className="grid grid-cols-2 gap-4">
										<FormField
											control={form.control}
											name="institution"
											render={({ field }) => (
												<FormItem>
													<FormLabel className="dark:text-white">
														Medical Institution
													</FormLabel>
													<FormControl>
														<Input
															placeholder="Institution name"
															{...field}
															className="dark:bg-gray-700 dark:text-white"
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>

										<FormField
											control={form.control}
											name="yearOfCompletion"
											render={({ field }) => (
												<FormItem>
													<FormLabel className="dark:text-white">
														Year of Completion
													</FormLabel>
													<FormControl>
														<Input
															type="number"
															min="1950"
															max={new Date().getFullYear()}
															{...field}
															onChange={(e) =>
																field.onChange(parseInt(e.target.value))
															}
															className="dark:bg-gray-700 dark:text-white"
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>

									<FormField
										control={form.control}
										name="languages"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="dark:text-white">
													Languages Spoken
												</FormLabel>
												<FormControl>
													<Select
														onValueChange={(value) =>
															field.onChange([...field.value, value])
														}>
														<SelectTrigger className="dark:bg-gray-700 dark:text-white">
															<SelectValue placeholder="Select languages" />
														</SelectTrigger>
														<SelectContent>
															{languages.map((lang) => (
																<SelectItem key={lang} value={lang}>
																	{lang}
																</SelectItem>
															))}
														</SelectContent>
													</Select>
												</FormControl>
												<div className="flex flex-wrap gap-2 mt-2">
													{field.value.map((lang, index) => (
														<Badge
															key={index}
															variant="secondary"
															className="cursor-pointer"
															onClick={() => {
																const newLangs = field.value.filter(
																	(_, i) => i !== index
																);
																field.onChange(newLangs);
															}}>
															{lang} ×
														</Badge>
													))}
												</div>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="consultMode"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="dark:text-white">
													Consultation Modes
												</FormLabel>
												<FormControl>
													<Select
														onValueChange={(value) =>
															field.onChange([
																...field.value,
																value as EDoctorConsultMode,
															])
														}>
														<SelectTrigger className="dark:bg-gray-700 dark:text-white">
															<SelectValue placeholder="Select consultation modes" />
														</SelectTrigger>
														<SelectContent>
															{consultModes.map((mode) => (
																<SelectItem key={mode.value} value={mode.value}>
																	{mode.label}
																</SelectItem>
															))}
														</SelectContent>
													</Select>
												</FormControl>
												<div className="flex flex-wrap gap-2 mt-2">
													{field.value.map((mode, index) => (
														<Badge
															key={index}
															variant="secondary"
															className="cursor-pointer"
															onClick={() => {
																const newModes = field.value.filter(
																	(_, i) => i !== index
																);
																field.onChange(newModes);
															}}>
															{
																consultModes.find((m) => m.value === mode)
																	?.label
															}{" "}
															×
														</Badge>
													))}
												</div>
												<FormMessage />
											</FormItem>
										)}
									/>

									<div className="flex justify-end space-x-2 pt-4">
										<Button
											type="button"
											variant="outline"
											onClick={() => setIsDialogOpen(false)}
											className="dark:bg-gray-700 dark:text-white">
											Cancel
										</Button>
										<Button type="submit">Add Doctor</Button>
									</div>
								</form>
							</Form>
						</DialogContent>
					</Dialog>
				</div>
			</CardHeader>
			<CardContent>
				{isLoading ?
					<div className="flex justify-center items-center h-64">
						<LoadingSpinner />
					</div>
				: error ?
					<div className="text-center text-red-500 dark:text-red-400 p-4">
						{error}
					</div>
				:	<div className="rounded-md border dark:border-gray-700">
						<Table>
							<TableHeader>
								<TableRow className="dark:bg-gray-800 dark:border-gray-700">
									<TableHead className="dark:text-gray-400">Name</TableHead>
									<TableHead className="dark:text-gray-400">
										Specialization
									</TableHead>
									<TableHead className="dark:text-gray-400">
										Experience
									</TableHead>
									<TableHead className="dark:text-gray-400">Status</TableHead>
									<TableHead className="dark:text-gray-400">
										Verification
									</TableHead>
									<TableHead className="dark:text-gray-400">Rating</TableHead>
									<TableHead className="dark:text-gray-400">
										Next Available
									</TableHead>
									<TableHead className="dark:text-gray-400">Actions</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{filteredDoctors.map((doctor) => {
									const doctorData = doctor as Provider & IDoctor;
									return (
										<TableRow
											key={doctorData.id}
											className="dark:border-gray-700">
											<TableCell className="font-medium dark:text-gray-300">
												<div className="flex items-center space-x-3">
													{doctorData.profileImage && (
														<img
															src={doctorData.profileImage}
															alt={doctorData.name}
															className="h-8 w-8 rounded-full object-cover"
														/>
													)}
													<div>
														<div>{doctorData.name}</div>
														<div className="text-sm text-gray-500 dark:text-gray-400">
															#{doctorData.registrationNumber}
														</div>
													</div>
												</div>
											</TableCell>
											<TableCell className="dark:text-gray-300">
												<div className="flex flex-wrap gap-1">
													{doctorData.specialization.map((spec, index) => (
														<Badge
															key={index}
															variant="secondary"
															className="text-xs dark:bg-gray-700">
															{spec}
														</Badge>
													))}
												</div>
											</TableCell>
											<TableCell className="dark:text-gray-300">
												{doctorData.experience} years
											</TableCell>
											<TableCell>
												<Badge className={getStatusColor(doctorData.status)}>
													{doctorData.status}
												</Badge>
											</TableCell>
											<TableCell>
												<Badge
													variant={
														doctorData.isVerified ? "default" : "destructive"
													}
													className="text-xs">
													{doctorData.isVerified ? "Verified" : "Pending"}
												</Badge>
											</TableCell>
											<TableCell className="dark:text-gray-300">
												<div className="flex items-center">
													{doctorData.ratings?.average || "-"}
													{doctorData.ratings && (
														<Star className="h-4 w-4 ml-1 text-yellow-400 fill-current" />
													)}
												</div>
											</TableCell>
											<TableCell className="dark:text-gray-300">
												{doctorData.availability?.[0]?.slots?.[0]?.startTime ||
													"Not available"}
											</TableCell>
											<TableCell>
												<DropdownMenu>
													<DropdownMenuTrigger asChild>
														<Button
															variant="ghost"
															className="h-8 w-8 p-0 dark:text-gray-400">
															<span className="sr-only">Open menu</span>
															<MoreHorizontal className="h-4 w-4" />
														</Button>
													</DropdownMenuTrigger>
													<DropdownMenuContent
														align="end"
														className="dark:bg-gray-800">
														<DropdownMenuItem className="dark:text-gray-300 dark:focus:bg-gray-700">
															View Profile
														</DropdownMenuItem>
														<DropdownMenuItem className="dark:text-gray-300 dark:focus:bg-gray-700">
															Edit Details
														</DropdownMenuItem>
														<DropdownMenuItem className="dark:text-gray-300 dark:focus:bg-gray-700">
															Manage Schedule
														</DropdownMenuItem>
														<DropdownMenuItem className="text-red-600 dark:text-red-400 dark:focus:bg-gray-700">
															Disable Account
														</DropdownMenuItem>
													</DropdownMenuContent>
												</DropdownMenu>
											</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</div>
				}
			</CardContent>
		</Card>
	);
};
