import React, { useState, useEffect, useMemo } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import DoctorCard from "./DoctorCard";
import {
	IDoctor,
	EDoctorConsultMode,
	EDayOfWeek,
} from "@/types/doctor.d.types";
import { Provider, EProviderType } from "@/types/provider.d.types";
import { doctors } from "@/data/doctorData";

// Add this helper function to convert Date to EDayOfWeek
const getWeekDay = (date: Date): EDayOfWeek => {
	const days: Record<number, EDayOfWeek> = {
		0: EDayOfWeek.SUNDAY,
		1: EDayOfWeek.MONDAY,
		2: EDayOfWeek.TUESDAY,
		3: EDayOfWeek.WEDNESDAY,
		4: EDayOfWeek.THURSDAY,
		5: EDayOfWeek.FRIDAY,
		6: EDayOfWeek.SATURDAY,
	};
	return days[date.getDay()];
};

// Filter and type narrow doctors to only include doctor type providers
const doctorProviders = doctors.filter(
	(provider): provider is Provider & IDoctor =>
		provider.type === EProviderType.DOCTOR
);

interface DoctorListProps {
	searchQuery?: string;
	locationQuery?: string;
	filters?: {
		availableToday: boolean;
		nextThreeDays: boolean;
		femaleDoctors: boolean;
		maleDoctors: boolean;
		videoConsult: boolean;
	};
	isLoading?: boolean;
	error?: string;
}

const DoctorList: React.FC<DoctorListProps> = ({
	searchQuery = "",
	locationQuery = "",
	filters = {
		availableToday: false,
		nextThreeDays: false,
		femaleDoctors: false,
		maleDoctors: false,
		videoConsult: false,
	},
	isLoading = false,
	error,
}) => {
	const [filteredDoctors, setFilteredDoctors] =
		useState<(Provider & IDoctor)[]>(doctorProviders);

	useEffect(() => {
		let filtered = [...doctorProviders] as (Provider & IDoctor)[];

		const applySearchFilters = () => {
			if (searchQuery) {
				const query = searchQuery.toLowerCase();
				filtered = filtered.filter((doctor) => {
					const searchableFields = [
						doctor.name,
						...doctor.specialization,
						...doctor.degree,
						doctor.contact.email,
					].map((field) => field?.toLowerCase());

					return searchableFields.some((field) => field?.includes(query));
				});
			}
		};

		const applyLocationFilters = () => {
			if (locationQuery) {
				const locationParts = locationQuery
					.toLowerCase()
					.split(",")
					.map((part) => part.trim());

				filtered = filtered.filter((doctor) => {
					const doctorLocations = doctor.address.map((addr) =>
						[addr.city, addr.state, addr.country].map((field) =>
							field?.toLowerCase().trim()
						)
					);

					return doctorLocations.some((locations) =>
						locationParts.some((searchPart) =>
							locations.some((location) => location?.includes(searchPart))
						)
					);
				});
			}
		};

		const applyConsultModeFilters = () => {
			if (filters.videoConsult) {
				filtered = filtered.filter((doctor) =>
					doctor.consultMode.includes(EDoctorConsultMode.VIDEO_CONSULT)
				);
			}
		};

		const applyAvailabilityFilters = () => {
			if (filters.availableToday || filters.nextThreeDays) {
				const today = new Date();
				const todayWeekDay = getWeekDay(today);

				filtered = filtered.filter((doctor) => {
					if (!doctor.availability) return false;

					const hasAvailableSlots = doctor.availability.some((slot) => {
						return filters.availableToday ?
								slot.day.includes(todayWeekDay)
							:	true;
					});

					return hasAvailableSlots;
				});
			}
		};

		// Apply all filters in sequence
		applySearchFilters();
		applyLocationFilters();
		applyConsultModeFilters();
		applyAvailabilityFilters();

		setFilteredDoctors(filtered);
	}, [searchQuery, locationQuery, filters]);

	// Group doctors by location for better organization
	const doctorsByLocation = useMemo(() => {
		return filteredDoctors.reduce(
			(acc, doctor) => {
				const primaryAddress = doctor.address[0];
				const location = `${primaryAddress.city}, ${primaryAddress.state}`;
				if (!acc[location]) {
					acc[location] = [];
				}
				acc[location].push(doctor);
				return acc;
			},
			{} as Record<string, (Provider & IDoctor)[]>
		);
	}, [filteredDoctors]);

	if (isLoading) {
		return (
			<div className="space-y-8 p-4">
				{[1, 2, 3].map((i) => (
					<div key={i} className="animate-pulse">
						<div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-[1.5rem]" />
					</div>
				))}
			</div>
		);
	}

	if (error) {
		return (
			<div className="text-center py-8">
				<div className="text-red-500 mb-2">
					<FaExclamationCircle className="inline-block h-8 w-8" />
				</div>
				<h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
					{error}
				</h3>
				<p className="text-gray-500 dark:text-gray-400 mt-2">
					Please try again later
				</p>
			</div>
		);
	}

	return (
		<div className="flex flex-col items-center p-4 space-y-8 dark:bg-gray-900">
			{Object.keys(doctorsByLocation).length > 0 ?
				Object.entries(doctorsByLocation).map(([location, doctors]) => (
					<div key={location} className="w-full">
						<h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 px-4">
							{location} ({doctors.length} doctors)
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
							{doctors.map((doctor, index) => (
								<DoctorCard key={`${location}-${index}`} doctor={doctor} />
							))}
						</div>
					</div>
				))
			:	<div className="text-center py-8">
					<h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
						No doctors found matching your criteria
					</h3>
					<p className="text-gray-500 dark:text-gray-400 mt-2">
						Try adjusting your search filters
					</p>
				</div>
			}
		</div>
	);
};

export default DoctorList;
