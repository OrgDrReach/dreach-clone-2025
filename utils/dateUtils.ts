import { format } from "date-fns";
import { IDoctor, EDayOfWeek } from "@/types/doctor.d.types";
import {
	Provider,
	ITimeSlot,
	EProviderType,
	IBaseProvider,
} from "@/types/provider.d.types";

const isDoctorProvider = (
	provider: Provider
): provider is IBaseProvider & IDoctor => {
	return provider.type === EProviderType.DOCTOR;
};

const convertToEDayOfWeek = (day: string): EDayOfWeek => {
	return EDayOfWeek[day as keyof typeof EDayOfWeek];
};

export const getAvailableSlotsForDate = (
	provider: Provider,
	date: Date
): ITimeSlot[] => {
	const dateKey = format(date, "yyyy-MM-dd");
	const dayOfWeek = convertToEDayOfWeek(format(date, "EEEE").toUpperCase());

	if (isDoctorProvider(provider)) {
		return (
			provider.availability?.find((avail) => avail.day.includes(dayOfWeek))
				?.slots || []
		);
	}

	const dayType = isWeekend(date) ? "weekends" : "regular";
	return provider.operatingHours[dayType] ?
			[provider.operatingHours[dayType]]
		:	[];
};

const isWeekend = (date: Date): boolean => {
	const day = date.getDay();
	return day === 0 || day === 6;
};
