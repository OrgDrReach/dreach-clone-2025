"use client";

import React, { useState, useEffect } from "react";
import { getUserLocation, LocationData } from "@/utils/location";
import SearchAndFilters, {
	SearchState,
	FilterState,
} from "@/components/page-components/doctors/search-filter/SearchAndFilters";
import DoctorHero from "@/components/page-components/doctors/hero/DoctorHero";
import DoctorFeatured from "@/components/page-components/doctors/featured/DoctorFeatured";
import DoctorList from "@/components/page-components/doctors/search-filter/DoctorList";
import ModernFAQ from "@/components/page-components/doctors/faq/ModernFAQ";
import DocFooter from "@/components/page-components/doctors/footer/DocFooter";

export default function page() {
	const [userLocation, setUserLocation] = useState<LocationData | null>(null);
	const [isSearching, setIsSearching] = useState(false);
	const [searchError, setSearchError] = useState<string | undefined>();
	const [searchParams, setSearchParams] = useState({
		query: "",
		location: "",
		filters: {
			availableToday: false,
			nextThreeDays: false,
			femaleDoctors: false,
			maleDoctors: false,
			videoConsult: false,
		},
	});

	useEffect(() => {
		async function initLocation() {
			try {
				const location = await getUserLocation();
				setUserLocation(location);
			} catch (error) {
				console.error("Failed to get user location:", error);
			}
		}

		initLocation();
	}, []);

	const handleSearch = async (
		searchData: SearchState,
		filterData: FilterState
	) => {
		setIsSearching(true);
		setSearchError(undefined);

		try {
			setSearchParams({
				query: searchData.query,
				location: searchData.location,
				filters: {
					availableToday: filterData.availableToday,
					nextThreeDays: filterData.nextThreeDays,
					femaleDoctors: filterData.femaleDoctors,
					maleDoctors: filterData.maleDoctors,
					videoConsult: filterData.videoConsult,
				},
			});
		} catch (error) {
			setSearchError("Failed to perform search");
			console.error("Search error:", error);
		} finally {
			setIsSearching(false);
		}
	};

	return (
		<main className={`bg-gray-100 dark:bg-gray-900 min-h-screen`}>
			<div className={``}>
				<DoctorHero />
				<DoctorFeatured />
				<div className={`mb-8 px-4`}>
					<SearchAndFilters
						initialLocation={userLocation}
						onSearch={handleSearch}
						isSearching={isSearching}
					/>
				</div>
			</div>
			<div className={`container mx-auto`}>
				<div className="py-8 lg:px-32 px-4">
					<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
						Available Doctors
					</h2>
					<p className="text-gray-600 dark:text-gray-300">
						Find and book appointments with the right doctor
					</p>
				</div>
				<DoctorList
					searchQuery={searchParams.query}
					locationQuery={searchParams.location}
					filters={searchParams.filters}
					isLoading={isSearching}
					error={searchError}
				/>
				<div className={`mt-12`}>
					<ModernFAQ />
				</div>
				<div className={`mt-8`}>
					<DocFooter />
				</div>
			</div>
		</main>
	);
}
