import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CalendarIcon, MapPinIcon, UserIcon } from "lucide-react";

interface Appointment {
	id: string;
	dateTime: string;
	providerName: string;
	providerSpecialty: string;
	location?: string;
}

const Upcoming: React.FC = () => {
	// Mock data for demonstration purposes
	const appointments: Appointment[] = [
		{
			id: "1",
			dateTime: "2023-04-15T10:00:00",
			providerName: "Dr. Smith",
			providerSpecialty: "Cardiologist",
			location: "Heart Center",
		},
		{
			id: "2",
			dateTime: "2023-04-18T14:30:00",
			providerName: "Dr. Johnson",
			providerSpecialty: "Dermatologist",
		},
		{
			id: "3",
			dateTime: "2023-04-20T11:00:00",
			providerName: "Dr. Williams",
			providerSpecialty: "Orthopedist",
		},
		{
			id: "4",
			dateTime: "2023-04-22T09:30:00",
			providerName: "Dr. Brown",
			providerSpecialty: "Neurologist",
		},
		// Add more appointments as needed
	];

	const sliderSettings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const AppointmentCard: React.FC<{ appointment: Appointment }> = ({
		appointment,
	}) => (
		<div className="p-4">
			<Card className="h-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-gray-500">
				<CardContent className="p-6">
					<div className="flex items-center space-x-2 mb-4">
						<CalendarIcon className="h-4 w-4 text-emerald-500" />
						<Badge
							variant="secondary"
							className="bg-emerald-50 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300">
							{new Date(appointment.dateTime).toLocaleString()}
						</Badge>
					</div>

					<div className="flex items-start space-x-3 mb-3">
						<UserIcon className="h-5 w-5 text-emerald-600 mt-1" />
						<div>
							<h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
								{appointment.providerName}
							</h3>
							<p className="text-sm text-gray-600 dark:text-gray-300">
								{appointment.providerSpecialty}
							</p>
						</div>
					</div>

					<div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
						<MapPinIcon className="h-4 w-4 text-emerald-500" />
						<p className="text-sm">{appointment.location || "Main Clinic"}</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);

	return (
		<Card className="shadow-xl bg-white dark:bg-gray-800 border-gray-500">
			<CardHeader className="border-b border-gray-500">
				<div className="flex items-center justify-between">
					<CardTitle className="text-2xl font-bold text-indigo-600 dark:text-gray-100">
						Upcoming Appointments
					</CardTitle>
					<Badge
						variant="outline"
						className="bg-emerald-50 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300">
						{appointments.length} scheduled
					</Badge>
				</div>
			</CardHeader>
			<CardContent className="mt-6 p-14">
				{appointments.length > 3 ?
					<div className="appointment-slider">
						<Slider {...sliderSettings} className={`text-white`}>
							{appointments.map((appointment) => (
								<AppointmentCard
									key={appointment.id}
									appointment={appointment}
								/>
							))}
						</Slider>
					</div>
				:	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{appointments.map((appointment) => (
							<AppointmentCard key={appointment.id} appointment={appointment} />
						))}
					</div>
				}
			</CardContent>
		</Card>
	);
};

export default Upcoming;
