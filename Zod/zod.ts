import * as z from "zod";

export const SignUpSchema = z.object({
	firstName: z
		.string()
		.min(2, {
			message: "First name must be at least 2 characters.",
		})
		.max(50, {
			message: "First name cannot exceed 50 characters.",
		})
		.regex(/^[a-zA-Z\s]*$/, {
			message: "First name can only contain letters and spaces.",
		}),
	lastName: z
		.string()
		.min(2, {
			message: "Last name must be at least 2 characters.",
		})
		.max(50, {
			message: "Last name cannot exceed 50 characters.",
		})
		.regex(/^[a-zA-Z\s]*$/, {
			message: "Last name can only contain letters and spaces.",
		}),
	email: z
		.string()
		.email({
			message: "Please enter a valid email address.",
		})
		.min(5, {
			message: "Email is too short.",
		})
		.max(255, {
			message: "Email is too long.",
		}),
	userType: z.enum(["patient", "provider"], {
		required_error: "Please select a user type.",
	}),
	providerRole: z
		.enum(["doctor", "hospital", "lab", "pharmaceutical", "ambulance"], {
			required_error: "Please select a provider role.",
		})
		.optional(),
	phone: z
		.string()
		.min(10, {
			message: "Phone number must be at least 10 digits.",
		})
		.max(15, {
			message: "Phone number cannot exceed 15 digits.",
		})
		.regex(/^\+?[0-9]+$/, {
			message: "Please enter a valid phone number.",
		}),
	password: z
		.string()
		.min(8, {
			message: "Password must be at least 8 characters.",
		})
		.max(100, {
			message: "Password cannot exceed 100 characters.",
		})
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
			{
				message:
					"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
			}
		),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export const SignInSchema = z.object({
	phone: z
		.string()
		.min(10, {
			message: "Phone number must be at least 10 digits.",
		})
		.max(15, {
			message: "Phone number cannot exceed 15 digits.",
		})
		.regex(/^\+?[0-9]+$/, {
			message: "Please enter a valid phone number.",
		}),
	password: z.string().min(8, {
		message: "Password must be at least 8 characters.",
	}),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;

export const otpSchema = z.object({
	otp: z
		.string()
		.length(6, "OTP must be exactly 6 digits")
		.regex(/^[0-9]+$/, "OTP can only contain numbers")
		.transform((val) => val.trim()),
});

export type OtpSchemaType = z.infer<typeof otpSchema>;

export const CompleteProfileSchema = z.object({
	dateOfBirth: z.date({
		required_error: "Date of birth is required.",
	}),
	gender: z.enum(["MALE", "FEMALE", "OTHER", "PREFER_NOT_TO_SAY"], {
		required_error: "Please select a gender.",
	}),
	address: z.object({
		street: z.string().min(1, "Street address is required."),
		city: z.string().min(1, "City is required."),
		state: z.string().min(1, "State is required."),
		country: z.string().min(1, "Country is required."),
		postalCode: z.string().regex(/^[0-9]+$/, "Invalid postal code."),
	}),
	profileImage: z.string().optional(),
});

export type CompleteProfileSchemaType = z.infer<typeof CompleteProfileSchema>;
