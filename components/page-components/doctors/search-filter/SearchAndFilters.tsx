"use client";

import React, {
	useState,
	useCallback,
	useEffect,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	FaSearch,
	FaMapMarkerAlt,
	FaCalendarAlt,
	FaStethoscope,
	FaVideo,
	FaUserMd,
	FaUserNurse,
} from "react-icons/fa";
import { MdLocationSearching } from "react-icons/md";
import { IoMdLocate } from "react-icons/io";
import { debounce } from "lodash";
import { getUserLocation, LocationData } from "@/utils/location";
import { toast } from "sonner";
import { doctors } from "@/data/doctorData";
import { useDoctorStore } from "@/lib/stores/doctorStore";
import { IDoctor, EDoctorConsultMode } from "@/types/doctor.d.types";
import { IAddress, Provider } from "@/types/provider.d.types";

interface LocationSuggestion {
	id: string;
	text: string;
	address: IAddress;
}

export interface SearchState {
	query: string;
	location: string;
}

export interface FilterState {
	availableToday: boolean;
	nextThreeDays: boolean;
	femaleDoctors: boolean;
	maleDoctors: boolean;
	videoConsult: boolean;
}

type TabType = "all" | "online" | "clinic";

// Enhanced filter configurations with improved TypeScript support
const FILTER_CONFIG = [
	{
		key: "availableToday",
		label: "Available Today",
		icon: FaStethoscope,
		iconColor: "text-blue-500 dark:text-blue-400",
		description: "See doctors available for consultation today",
	},
	{
		key: "nextThreeDays",
		label: "Next 3 Days",
		icon: FaCalendarAlt,
		iconColor: "text-green-500 dark:text-green-400",
		description: "View appointments in the next 3 days",
	},
	{
		key: "femaleDoctors",
		label: "Female Doctors",
		icon: FaUserNurse,
		iconColor: "text-purple-500 dark:text-purple-400",
		description: "Filter for female healthcare providers",
	},
	{
		key: "maleDoctors",
		label: "Male Doctors",
		icon: FaUserMd,
		iconColor: "text-indigo-500 dark:text-indigo-400",
		description: "Filter for male healthcare providers",
	},
	{
		key: "videoConsult",
		label: "Video Consult",
		icon: FaVideo,
		iconColor: "text-teal-500 dark:text-teal-400",
		description: "Available for online video consultation",
	},
] as const;

interface SearchAndFiltersProps {
	initialLocation?: LocationData | null;
	onSearch: (searchData: SearchState, filterData: FilterState) => void;
	isSearching: boolean;
}

const DEBOUNCE_DELAY = 500;

const SearchAndFilters: React.FC<SearchAndFiltersProps> = ({
	initialLocation,
	onSearch,
	isSearching,
}) => {
	const [activeTab, setActiveTab] = useState<TabType>("all");
	const [search, setSearch] = useState<SearchState>({
		query: "",
		location: "",
	});
	const [filters, setFilters] = useState<FilterState>({
		availableToday: false,
		nextThreeDays: false,
		femaleDoctors: false,
		maleDoctors: false,
		videoConsult: false,
	});
	const [locationSuggestions, setLocationSuggestions] = useState<
		LocationSuggestion[]
	>([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [isLoadingLocation, setIsLoadingLocation] = useState(true);
	const [isLocationActive, setIsLocationActive] = useState(false);
	const { searchDoctors, filteredDoctors } = useDoctorStore();

	// Enhanced search functionality
	const handleSearch = useCallback(
		async (searchData: SearchState, filterData: FilterState) => {
			const filtered = doctors.filter((doctor: Provider) => {
				const isMatchingQuery =
					searchData.query ?
						doctor.name
							.toLowerCase()
							.includes(searchData.query.toLowerCase()) ||
						(doctor as IDoctor).specialization.some((spec) =>
							spec.toLowerCase().includes(searchData.query.toLowerCase())
						)
					:	true;

				// Modified location matching to show all doctors when no location is specified
				const isMatchingLocation =
					!searchData.location || // Added this condition to show all when no location
					doctor.address.some(
						(addr) =>
							addr.city
								.toLowerCase()
								.includes(searchData.location.toLowerCase()) ||
							addr.state
								.toLowerCase()
								.includes(searchData.location.toLowerCase()) ||
							addr.country
								.toLowerCase()
								.includes(searchData.location.toLowerCase())
					);

				const isMatchingFilters = {
					videoConsult:
						!filterData.videoConsult ||
						(doctor as IDoctor).consultMode.includes(
							EDoctorConsultMode.VIDEO_CONSULT
						),
					gender:
						(!filterData.femaleDoctors && !filterData.maleDoctors) ||
						(filterData.femaleDoctors && doctor.name.includes("Dr.")) ||
						(filterData.maleDoctors && !doctor.name.includes("Dr.")),
				};

				return (
					isMatchingQuery &&
					isMatchingLocation &&
					Object.values(isMatchingFilters).every(Boolean)
				);
			});

			searchDoctors(filtered);
		},
		[searchDoctors]
	);

	// Add debounced search effect
	useEffect(() => {
		const debouncedSearch = debounce(() => {
			onSearch(search, filters);
			handleSearch(search, filters);
		}, DEBOUNCE_DELAY);

		debouncedSearch();
		return () => debouncedSearch.cancel();
	}, [search, filters, onSearch, handleSearch]);

	const handleInputChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			setSearch((prev) => ({ ...prev, [name]: value }));
		},
		[]
	);

	const handleFilterChange = useCallback((key: keyof FilterState) => {
		setFilters((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	}, []);

	// Initialize location with initialLocation prop
	useEffect(() => {
		if (initialLocation) {
			setSearch((prev) => ({
				...prev,
				location: `${initialLocation.city}, ${initialLocation.state}, ${initialLocation.country}`,
			}));
			setIsLoadingLocation(false);
		} else {
			initializeLocation();
		}
	}, [initialLocation]);

	// Modified location initialization function
	const initializeLocation = async () => {
		setIsLoadingLocation(true);
		try {
			if (!isLocationActive) {
				const location = await getUserLocation();
				if (location) {
					setSearch((prev) => ({
						...prev,
						location: `${location.city}, ${location.state}, ${location.country}`,
					}));
					toast.success("Location detected successfully");
					handleSearch(
						{
							...search,
							location: `${location.city}, ${location.state}, ${location.country}`,
						},
						filters
					);
					setIsLocationActive(true);
				} else {
					setSearch((prev) => ({ ...prev, location: "" }));
					toast.error("Could not detect location, showing all doctors");
				}
			} else {
				// Clear location and deactivate
				setSearch((prev) => ({ ...prev, location: "" }));
				setIsLocationActive(false);
				handleSearch({ ...search, location: "" }, filters);
				toast.success("Location detection disabled, showing all doctors");
			}
		} catch (error) {
			setSearch((prev) => ({
				...prev,
				location: "",
			}));
			toast.error("Could not detect location, showing all doctors");
		} finally {
			setIsLoadingLocation(false);
		}
	};

	// Handle location input focus
	const handleLocationFocus = useCallback(() => {
		setShowSuggestions(true);
		// Generate location suggestions based on doctor addresses
		const suggestions: LocationSuggestion[] = doctors
			.flatMap((doctor) =>
				doctor.address.map((addr) => ({
					id: `${addr.city}-${addr.state}-${addr.country}`,
					text: `${addr.city}, ${addr.state}, ${addr.country}`,
					address: addr,
				}))
			)
			.filter(
				(suggestion, index, self) =>
					index === self.findIndex((s) => s.text === suggestion.text)
			);
		setLocationSuggestions(suggestions);
	}, []);

	// Handle location input blur
	const handleLocationBlur = useCallback(() => {
		// Delay hiding suggestions to allow click events
		setTimeout(() => {
			setShowSuggestions(false);
		}, 200);
	}, []);

	// Handle tab changes
	const handleTabChange = useCallback((tab: TabType) => {
		setActiveTab(tab);
		setFilters((prev) => ({
			...prev,
			videoConsult: tab === "online",
		}));
	}, []);

	// Add new handler for search button click
	const handleSearchClick = useCallback(() => {
		onSearch(search, filters);
		handleSearch(search, filters);
	}, [search, filters, onSearch, handleSearch]);

	// Update SearchInput components with new handlers
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl mt-5 shadow-lg p-4 md:p-6 max-w-7xl mx-auto border border-gray-200 dark:border-gray-700">
			{/* Add Tabs Section */}
			<div className="flex space-x-4 mb-6">
				{["all", "online", "clinic"].map((tab) => (
					<button
						key={tab}
						onClick={() => handleTabChange(tab as TabType)}
						className={`
							px-4 py-2 rounded-lg font-medium transition-all duration-200
							${
								activeTab === tab ?
									"bg-[#30ACDA] text-white"
								:	"text-gray-600 dark:text-gray-300 hover:bg-[#30ACDA]/10"
							}
						`}>
						{tab.charAt(0).toUpperCase() + tab.slice(1)}
					</button>
				))}
			</div>

			{/* Update Search Section with Search Button */}
			<div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-4 items-start">
				<SearchInput
					icon={<FaSearch className="h-5 w-5 text-gray-400" />}
					name="query"
					value={search.query}
					onChange={handleInputChange}
					placeholder="Search doctors, specialties..."
					aria-label="Search doctors"
				/>
				<SearchInput
					icon={<FaMapMarkerAlt className="h-5 w-5 text-gray-400" />}
					name="location"
					value={search.location}
					onChange={handleInputChange}
					placeholder="Location"
					aria-label="Search location"
					disabled={isSearching || isLoadingLocation}
					isLoading={isLoadingLocation}
					onFocus={handleLocationFocus}
					onBlur={handleLocationBlur}
					showGPS={true}
					isLocationActive={isLocationActive}
					onGPSClick={() => {
						setIsLoadingLocation(true);
						initializeLocation();
					}}
				/>
				<button
					onClick={handleSearchClick}
					disabled={isSearching}
					className={`
						px-6 py-3 rounded-xl font-medium
						transition-all duration-200
						flex items-center justify-center
						min-w-[120px]
						${
							isSearching ?
								"bg-gray-100 dark:bg-gray-700 cursor-not-allowed"
							:	"bg-[#30ACDA] hover:bg-[#2691B7] text-white shadow-sm hover:shadow-md"
						}
					`}>
					{isSearching ?
						<div className="flex items-center space-x-2">
							<div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
							<span>Searching...</span>
						</div>
					:	<div className="flex items-center space-x-2">
							<FaSearch className="h-5 w-5" />
							<span>Search</span>
						</div>
					}
				</button>
			</div>

			{/* Filters Section */}
			<div className="mt-4">
				<div className="flex flex-wrap gap-3">
					{FILTER_CONFIG.map(({ key, label, icon: Icon, iconColor }) => (
						<button
							key={key}
							onClick={() => handleFilterChange(key as keyof FilterState)}
							className={`
                inline-flex items-center px-4 py-2 rounded-lg
                border transition-all duration-200
                ${
									filters[key as keyof FilterState] ?
										"bg-[#30ACDA]/10 border-[#30ACDA] text-[#30ACDA]"
									:	"border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-[#30ACDA] hover:text-[#30ACDA]"
								}
              `}>
							<Icon className={`mr-2 h-4 w-4 ${iconColor}`} />
							{label}
						</button>
					))}
				</div>
			</div>

			{/* Location Suggestions */}
			<div className="relative">
				<AnimatePresence>
					{showSuggestions && locationSuggestions.length > 0 && (
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							className="absolute z-10 left-0 right-0 mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-h-60 overflow-y-auto">
							{locationSuggestions.map((suggestion) => (
								<button
									key={suggestion.id}
									className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
									onClick={() => {
										setSearch((prev) => ({
											...prev,
											location: suggestion.text,
										}));
										setShowSuggestions(false);
									}}>
									<div className="flex items-center">
										<FaMapMarkerAlt className="h-4 w-4 text-gray-400 mr-2" />
										<span>{suggestion.text}</span>
									</div>
								</button>
							))}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.div>
	);
};

// Enhanced SearchInput component with better TypeScript support
const SearchInput: React.FC<{
	icon: React.ReactNode;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	disabled?: boolean;
	onFocus?: () => void;
	onBlur?: () => void;
	"aria-label": string;
	isLoading?: boolean;
	showGPS?: boolean;
	onGPSClick?: () => void;
	isLocationActive?: boolean;
}> = ({
	icon,
	name,
	value,
	onChange,
	placeholder,
	disabled,
	onFocus,
	onBlur,
	"aria-label": ariaLabel,
	isLoading,
	showGPS,
	onGPSClick,
	isLocationActive,
}) => (
	<div className="relative">
		<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
			{icon}
		</div>
		<input
			type="text"
			name={name}
			value={value}
			onChange={onChange}
			onFocus={onFocus}
			onBlur={onBlur}
			placeholder={placeholder}
			disabled={disabled}
			aria-label={ariaLabel}
			className={`
        block w-full pl-10 ${showGPS ? "pr-10" : "pr-3"} py-3 
        border border-gray-200 dark:border-gray-600 
        rounded-xl 
        focus:ring-2 focus:ring-[#30ACDA] dark:focus:ring-[#2691B7]/70 
        focus:border-transparent 
        bg-white dark:bg-gray-700 
        text-gray-900 dark:text-white 
        placeholder-gray-500 dark:placeholder-gray-400
        transition-all duration-200 
        ${disabled ? "cursor-wait opacity-75" : ""}
      `}
		/>
		{showGPS && (
			<button
				onClick={onGPSClick}
				className="absolute inset-y-0 right-0 pr-3 flex items-center"
				disabled={disabled}
				title={isLocationActive ? "Disable location" : "Get current location"}>
				{isLocationActive ?
					<IoMdLocate
						className={`h-5 w-5 ${
							disabled ?
								"text-gray-400 cursor-not-allowed"
							:	"text-green-500 hover:text-green-600 cursor-pointer"
						}`}
					/>
				:	<MdLocationSearching
						className={`h-5 w-5 ${
							disabled ?
								"text-gray-400 cursor-not-allowed"
							:	"text-green-500 hover:text-green-600 cursor-pointer"
						}`}
					/>
				}
			</button>
		)}
		{isLoading && (
			<div className="absolute right-10 top-1/2 transform -translate-y-1/2">
				<div className="animate-spin h-5 w-5 border-2 border-[#30ACDA] border-t-transparent rounded-full" />
			</div>
		)}
	</div>
);

export default SearchAndFilters;
