"use client";
import React, { useState, useRef, useEffect } from "react";
import {
	Badge,
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui";
import Image from "next/image";

const doctorsData = [
	{
		image: "/images/Rewant v1.1.png",
		name: "Rewant Raj",
		username: "rewant_raj",
		email: "rewant.off@gmail.com",
		docID: "DR00001",
		specialty: "Cardiology",
		status: "Pending",
		dateOfBirth: "1990-01-01",
		gender: "Male",
		phone: "9876543210",
		about: "I am a doctor",
		appointmentMode: "Online",
		clinicAddress: "1234 Main St, Anytown, USA",
		clinicTimings: "9:00 AM - 5:00 PM",
		clinicName: "Anytown Clinic",
		appointmentDuration: "30 minutes",
		aadharCardUrl: "/path/to/aadhar/card.jpg",
		doctorLicenseUrl: "/path/to/doctor/license.jpg",
	},
	{
		image: "/images/Rewant v1.1.png",
		name: "Rewant Raj",
		username: "rewant_raj",
		email: "rewant.off@gmail.com",
		docID: "DR00002",
		specialty: "Cardiology",
		status: "Pending",
		dateOfBirth: "1990-01-01",
		gender: "Male",
		phone: "9876543210",
		about: "I am a doctor",
		appointmentMode: "Online",
		clinicAddress: "1234 Main St, Anytown, USA",
		clinicTimings: "9:00 AM - 5:00 PM",
		clinicName: "Anytown Clinic",
		appointmentDuration: "30 minutes",
		aadharCardUrl: "/path/to/aadhar/card.jpg",
		doctorLicenseUrl: "/path/to/doctor/license.jpg",
	},
];

type DoctorType = (typeof doctorsData)[0];

const Verification: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedDoctor, setSelectedDoctor] = useState<DoctorType | null>(null);
	const [isPrintPreviewOpen, setIsPrintPreviewOpen] = useState(false);
	const printPreviewRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const style = document.createElement("style");
		style.textContent = `
			@media print {
				.no-print {
					display: none !important;
				}
			}
		`;
		document.head.appendChild(style);
		return () => {
			document.head.removeChild(style);
		};
	}, []);

	const openModal = (doctor: DoctorType) => {
		setIsModalOpen(true);
		setSelectedDoctor(doctor);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedDoctor(null);
	};

	const openPrintPreview = () => {
		setIsPrintPreviewOpen(true);
	};

	const closePrintPreview = () => {
		setIsPrintPreviewOpen(false);
	};

	const handlePrint = () => {
		const printContent = printPreviewRef.current;
		const originalContents = document.body.innerHTML;

		if (printContent) {
			document.body.innerHTML = printContent.innerHTML;
			window.print();
			document.body.innerHTML = originalContents;
			setIsPrintPreviewOpen(false);
		}
	};

	return (
		<main>
			<div>
				<div className={`pb-3`}>
					<h1 className={`text-white text-2xl font-bold`}>
						Doctor's Management
					</h1>
				</div>
				<Card>
					<CardHeader>
						<CardTitle>Doctor's Verification</CardTitle>
						<CardDescription>Check doctor's application status</CardDescription>
					</CardHeader>
					<CardContent>
						<Table>
							<TableCaption>
								A list of recent doctor's applications for verification request
							</TableCaption>
							<TableHeader className="bg-[rgba(55,65,81,0.3)]">
								<TableRow>
									<TableHead className="text-black text-base">Name</TableHead>
									<TableHead className="text-black text-base">
										Specialty
									</TableHead>
									<TableHead className="text-black text-base">
										Documents
									</TableHead>
									<TableHead className="text-black text-base">Status</TableHead>
									<TableHead className="text-black text-base">
										Actions
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{doctorsData.map((doctor) => (
									<TableRow key={doctor.docID}>
										<TableCell>
											<div className="flex gap-4 items-center">
												<img
													src={doctor.image}
													alt={doctor.name}
													className="rounded-full border-[#3ebdec] border-2"
													width={80}
													height={80}
												/>
												<div className="flex flex-col">
													<h1 className="text-black text-xl">{doctor.name}</h1>
													<p>ID: {doctor.docID}</p>
													<p>{doctor.email}</p>
												</div>
											</div>
										</TableCell>
										<TableCell className="text-base">
											{doctor.specialty}
										</TableCell>
										<TableCell className="text-lg text-blue-500 hover:underline cursor-pointer">
											<span onClick={() => openModal(doctor)}>
												View Documents
											</span>
										</TableCell>
										<TableCell>
											<Badge variant={"destructive"} className="text-base">
												{doctor.status}
											</Badge>
										</TableCell>
										<TableCell>
											<div className="flex gap-4">
												<Button className="bg-green-600">Approve</Button>
												<Button variant={"destructive"}>Reject</Button>
											</div>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</div>
			{isModalOpen && selectedDoctor && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white p-8 rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
						<span
							className="close text-2xl font-bold cursor-pointer float-right"
							onClick={closeModal}>
							&times;
						</span>
						<h2 className="text-2xl font-bold mb-4">
							Doctor's Application Form
						</h2>
						<div className="grid grid-cols-2 gap-4">
							<div>
								<img
									src={selectedDoctor.image}
									alt={`Passport size photo of Dr. ${selectedDoctor.name}`}
									className="w-32 h-32 object-cover mb-2"
								/>
								<p>
									<strong>Username:</strong> {selectedDoctor.username}
								</p>
								<p>
									<strong>Email:</strong> {selectedDoctor.email}
								</p>
								<p>
									<strong>First Name:</strong>{" "}
									{selectedDoctor.name.split(" ")[0]}
								</p>
								<p>
									<strong>Last Name:</strong>{" "}
									{selectedDoctor.name.split(" ")[1]}
								</p>
								<p>
									<strong>Date of Birth:</strong> {selectedDoctor.dateOfBirth}
								</p>
								<p>
									<strong>Gender:</strong> {selectedDoctor.gender}
								</p>
								<p>
									<strong>Phone Number:</strong> {selectedDoctor.phone}
								</p>
							</div>
							<div>
								<h3 className="font-bold mb-2">About</h3>
								<p>{selectedDoctor.about}</p>
								<h3 className="font-bold mt-4 mb-2">Mode of Appointment</h3>
								<p>{selectedDoctor.appointmentMode}</p>
								<h3 className="font-bold mt-4 mb-2">Clinic Details</h3>
								<p>
									<strong>Address:</strong> {selectedDoctor.clinicAddress}
								</p>
								<p>
									<strong>Timings:</strong> {selectedDoctor.clinicTimings}
								</p>
								<p>
									<strong>Clinic Name:</strong> {selectedDoctor.clinicName}
								</p>
								<p>
									<strong>Duration:</strong>{" "}
									{selectedDoctor.appointmentDuration}
								</p>
							</div>
						</div>
						<div className="mt-4">
							<h3 className="font-bold mb-2">Personal Address</h3>
							<p>
								<strong>Permanent Address:</strong>{" "}
								{selectedDoctor.clinicAddress}
							</p>
							<p>
								<strong>Current Address:</strong> {selectedDoctor.clinicAddress}
							</p>
						</div>
						<div className="mt-4">
							<h3 className="font-bold mb-2">Services & Specialization</h3>
							<p>
								<strong>Medical Degrees:</strong> {selectedDoctor.specialty}
							</p>
							<p>
								<strong>Skills:</strong> {selectedDoctor.specialty}
							</p>
						</div>
						<div className="mt-4">
							<h3 className="font-bold mb-2">Education Details</h3>
							<p>
								<strong>Degree:</strong> {selectedDoctor.specialty}
							</p>
							<p>
								<strong>Institute:</strong> {selectedDoctor.specialty}
							</p>
							<p>
								<strong>Year of Completion:</strong> {selectedDoctor.specialty}
							</p>
						</div>
						<div className="mt-4">
							<h3 className="font-bold mb-2">Awards & Achievements</h3>
							<p>
								<strong>Name:</strong> {selectedDoctor.specialty}
							</p>
							<p>
								<strong>Year:</strong> {selectedDoctor.specialty}
							</p>
							<p>
								<strong>Description:</strong> {selectedDoctor.specialty}
							</p>
						</div>
						<div className="mt-4">
							<h3 className="font-bold mb-2">Documents for Verification</h3>
							<div className="space-y-4">
								<div>
									<p className="font-semibold mb-2">Aadhar Card</p>
									<div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse"></div>
								</div>
								<div>
									<p className="font-semibold mb-2">Doctor's License</p>
									<div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse"></div>
								</div>
							</div>
						</div>
						<Button
							onClick={openPrintPreview}
							className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
							View Print Preview
						</Button>
					</div>
				</div>
			)}
			{/* Print Preview Modal */}
			{isPrintPreviewOpen && selectedDoctor && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div
						ref={printPreviewRef}
						className="bg-white text-black p-8 w-[210mm] h-[80vh] overflow-y-auto rounded-xl border-8 border-blue-400 shadow-2xl">
						<div className="border-4 border-blue-400 p-4 h-full overflow-y-auto">
							<span
								className="close text-black cursor-pointer float-right no-print"
								onClick={closePrintPreview}>
								&times;
							</span>
							<header className="mb-6 text-center">
								<Image
									src="/logos/DR.png"
									height={150}
									width={150}
									alt="logo"
									className={`mx-auto mb-2`}
								/>
								<p className="text-sm">CIN No: XXXXXXXXXXXXXXXXX</p>
								<p className="text-sm">
									123 Health Avenue, Medical District, City - 110001
								</p>
								<h1 className="text-2xl font-bold mt-4">
									Doctor's Application Form
								</h1>
								<p className="text-sm">Application Reference No.: APP123456</p>
								<p className="text-sm">Date of Apply: 01/05/2023</p>
							</header>

							<section className="mb-6">
								<h2 className="text-xl font-bold mb-2">1. Basic Information</h2>
								<div className="flex gap-8">
									<img
										src={selectedDoctor.image}
										alt={selectedDoctor.name}
										className="w-32 h-40 object-cover mb-2 border-2 border-gray-300"
									/>
									<div>
										<p>
											<strong>Username:</strong> {selectedDoctor.username}
										</p>
										<p>
											<strong>Email:</strong> {selectedDoctor.email}
										</p>
										<p>
											<strong>First Name:</strong>{" "}
											{selectedDoctor.name.split(" ")[0]}
										</p>
										<p>
											<strong>Last Name:</strong>{" "}
											{selectedDoctor.name.split(" ")[1]}
										</p>
										<p>
											<strong>Date of Birth:</strong>{" "}
											{selectedDoctor.dateOfBirth}
										</p>
										<p>
											<strong>Gender:</strong> {selectedDoctor.gender}
										</p>
										<p>
											<strong>Phone Number:</strong> {selectedDoctor.phone}
										</p>
									</div>
								</div>
							</section>

							<section className="mb-6">
								<h2 className="text-xl font-bold mb-2">2. About</h2>
								<p>{selectedDoctor.about}</p>
							</section>

							<section className="mb-6">
								<h2 className="text-xl font-bold mb-2">
									3. Mode of Appointment
								</h2>
								<p>{selectedDoctor.appointmentMode}</p>
							</section>

							<section className="mb-6">
								<h2 className="text-xl font-bold mb-2">
									4. Clinic Address & Sitting hours
								</h2>
								<p>
									<strong>Clinic Name:</strong> {selectedDoctor.clinicName}
								</p>
								<p>
									<strong>Address:</strong> {selectedDoctor.clinicAddress}
								</p>
								<p>
									<strong>Timings:</strong> {selectedDoctor.clinicTimings}
								</p>
								<p>
									<strong>Duration:</strong>{" "}
									{selectedDoctor.appointmentDuration}
								</p>
							</section>

							<section className="mb-6">
								<h2 className="text-xl font-bold mb-2">5. Personal Address</h2>
								<p>
									<strong>Permanent Address:</strong>{" "}
									{selectedDoctor.clinicAddress}
								</p>
								<p>
									<strong>Current Address:</strong>{" "}
									{selectedDoctor.clinicAddress}
								</p>
							</section>

							<section className="mb-6">
								<h2 className="text-xl font-bold mb-2">
									6. Services & Specialization
								</h2>
								<p>
									<strong>Medical Degrees:</strong> {selectedDoctor.specialty}
								</p>
								<p>
									<strong>Skills:</strong> {selectedDoctor.specialty}
								</p>
							</section>

							<section className="mb-6">
								<h2 className="text-xl font-bold mb-2">7. Education Details</h2>
								<p>
									<strong>Degree:</strong> {selectedDoctor.specialty}
								</p>
								<p>
									<strong>Institute:</strong> {selectedDoctor.specialty}
								</p>
								<p>
									<strong>Year of Completion:</strong>{" "}
									{selectedDoctor.specialty}
								</p>
							</section>

							<section className="mb-6">
								<h2 className="text-xl font-bold mb-2">
									8. Awards & Achievements
								</h2>
								<p>
									<strong>Name:</strong> {selectedDoctor.specialty}
								</p>
								<p>
									<strong>Year:</strong> {selectedDoctor.specialty}
								</p>
								<p>
									<strong>Description:</strong> {selectedDoctor.specialty}
								</p>
							</section>

							<section className="mb-6">
								<h2 className="text-xl font-bold mb-2">
									9. Documents for verification
								</h2>
								<div className="space-y-4">
									<div>
										<p className="font-semibold mb-2">Aadhar Card</p>
										<div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse"></div>
									</div>
									<div>
										<p className="font-semibold mb-2">Doctor's License</p>
										<div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse"></div>
									</div>
								</div>
							</section>

							<footer className="text-center text-sm mt-8">
								<p>Dr. Reach - Healthunity Solutions Pvt Ltd</p>
								<p>123 Health Avenue, Medical District, City - 110001</p>
								<p>
									&copy; Copyrights reserved, 2024, Terms & Conditions apply
								</p>
							</footer>

							<div className="mt-4 no-print">
								<Button
									onClick={handlePrint}
									className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
									Print
								</Button>
							</div>
						</div>
					</div>
				</div>
			)}
		</main>
	);
};

export default Verification;
