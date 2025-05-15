"use client";

import { mapBloodGroup } from "@/utils/bloodGroupUtils";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { EUserRole, EGender } from "@/types/auth.d.types";
import { jwtDecode } from "jwt-decode";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { updateUser, fetchUserByEmail } from "@/lib/api/services/user";

// Define a more complete Session type that includes our custom fields
interface ExtendedUser {
  userId: string;
  email?: string | null;
  name?: string | null;
  image?: string | null;
  phone?: string | null;
  role?: EUserRole;
  gender?: EGender;
  bloodGroup?: string;
  authProvider?: string;
}

interface ProfileFormData {
  name: string;
  phone: string;
  dob: string;
  gender: EGender;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
  role: EUserRole;
  address?: {
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    pincode?: string;
  };
  otp: string;
}

// Define the profile validation schema
const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15)
    .regex(/^\+?[1-9]\d{9,14}$/, "Please enter a valid phone number"),
  dob: z.string().min(1, "Date of birth is required"),
  gender: z.nativeEnum(EGender, {
    required_error: "Please select a gender",
  }),
  bloodGroup: z
    .enum(["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"])
    .optional(),
  role: z.nativeEnum(EUserRole, {
    required_error: "Please select a role",
    invalid_type_error: "Invalid role selected",
  }),
  address: z
    .object({
      address: z.string().optional(),
      city: z.string().optional(),
      state: z.string().optional(),
      country: z.string().optional(),
      pincode: z.string().optional(),
    })
    .optional(),
  otp: z.string().length(4, "OTP must be 4 digits"),
});

type OtpResponse = {
  message: string;
};

interface UserLookupResponse {
  id: string;
  userId: string;
  email: string;
}

export default function CompleteProfile() {
  const router = useRouter();
  const [user, setUser] = useState<ExtendedUser | null>(null);
  const [userLoading, setUserLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [showOtpField, setShowOtpField] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [userData, setUserData] = useState<UserLookupResponse | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);
  
 // Update the JWT token loading effect to remove form dependency
useEffect(() => {
  // Remove the form.getValues() call from here
  console.log("Current user state:", user);
  
  if (typeof window !== "undefined") {
    // Check both cookie and URL parameter for user identification
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("dreach_token="))
      ?.split("=")[1];
    
    // Attempt to get userId from URL query parameter as fallback
    const urlParams = new URLSearchParams(window.location.search);
    const userIdParam = urlParams.get('userId');
    
    console.log("JWT Token:", token);
    console.log("URL userId:", userIdParam);
    
    if (token) {
      try {
        const decoded = jwtDecode<ExtendedUser>(token);
        console.log("Decoded user:", decoded);
        setUser(decoded);
      } catch (err) {
        console.error("JWT decode error:", err);
        
        // If JWT decode fails but we have userId from URL, create a minimal user object
        if (userIdParam) {
          console.log("Using userId from URL parameter");
          setUser({
            userId: userIdParam,
            email: null, // Ensure we have a null email value, not undefined
            role: EUserRole.PATIENT // Default role
          });
        } else {
          setUser(null);
        }
      }
    } else if (userIdParam) {
      // No token but we have userId - create minimal user object
      console.log("No token found, using userId from URL parameter");
      setUser({
        userId: userIdParam,
        email: null, // Ensure we have a null email value, not undefined  
        role: EUserRole.PATIENT
      });
    } else {
      setUser(null);
    }
    setUserLoading(false);
  }
}, []); // No dependencies needed here

// Move form initialization after user state is set up
const form = useForm<ProfileFormData>({
  resolver: zodResolver(profileSchema),
  defaultValues: {
    name: "",
    phone: "",
    dob: "",
    gender: EGender.MALE,
    bloodGroup: undefined,
    role: EUserRole.PATIENT,
    address: {
      address: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
    },
    otp: "",
  },
  mode: "onChange",
});

// Separate useEffect to update form when user changes
useEffect(() => {
  if (user) {
    form.reset({
      name: user.name || "",
      phone: user.phone || "",
      dob: "",
      gender: user.gender || EGender.MALE,
      bloodGroup: user.bloodGroup as any,
      role: user.role || EUserRole.PATIENT,
      address: {
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
      },
      otp: "",
    });
    console.log("Form reset with user data:", user);
  }
}, [user, form]);

// Debug log for form values (separate from user initialization)
useEffect(() => {
  // Only log if form is properly initialized
  if (form) {
    console.log("Submit button conditions:", {
      isSubmitting,
      isOtpVerified,
      name: form.getValues("name"),
      phone: form.getValues("phone"),
      dob: form.getValues("dob"),
      gender: form.getValues("gender"),
      role: form.getValues("role")
    });
  }
}, [isSubmitting, isOtpVerified, form]);

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  // Send OTP function
  const sendOtp = async () => {
    const phone = form.getValues("phone");
    const phoneValidation = await form.trigger("phone");
    if (!phoneValidation) return;
    try {
      setIsSubmitting(true);
      const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      const data: OtpResponse = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to send OTP");
      setShowOtpField(true);
      setIsOtpSent(true);
      toast.success("OTP sent successfully");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to send OTP";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Verify OTP function
  const verifyOtp = async (otp: string) => {
    const otpValidation = await form.trigger("otp");
    if (!otpValidation) return;
    try {
      setIsSubmitting(true);
      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: form.getValues("phone"),
          otp,
        }),
      });
      const data: OtpResponse = await response.json();
      if (!response.ok) throw new Error(data.message || "Invalid OTP");
      setIsOtpVerified(true);
      toast.success("Phone number verified successfully");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Invalid OTP";
      toast.error(message);
      form.setValue("otp", "");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fetch user by email
  const fetchUserByEmailHandler = async (email: string) => {
    try {
      const response = await fetchUserByEmail(email);
      if (response.status === 200 && response.data) {
        setUserData(response.data);
        setFetchError(null);
        console.log("Fetched user by email successfully");
        return response.data;
      }
      throw new Error(response.message || "Failed to fetch user data");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to fetch user data";
      setFetchError(errorMessage);
      setUserData(null);
      toast.error(errorMessage);
      return null;
    }
  };

  // Form submission handler
  const onSubmit = async (data: ProfileFormData) => {
  if (!isOtpVerified) {
    toast.error("Please verify your phone number first");
    return;
  }
  
  try {
    setIsSubmitting(true);
    
    // Extract user ID from current user state
    const userId = user?.userId;
    if (!userId) {
      toast.error("User ID is required to continue");
      return;
    }
    
    // Instead of using email lookup, use the userId directly if needed
    let userResponse = userData;
    if (!userResponse && user?.email) {
      userResponse = await fetchUserByEmailHandler(user.email);
    }
    
    // Use userId from URL if no user response
    if (!userResponse) {
      userResponse = { userId: userId, id: userId, email: user?.email || "" };
    }
    
    const mappedBloodGroup = mapBloodGroup(data.bloodGroup);
    const updateData = {
      ...data,
      userId: userResponse.userId,
      bloodGroup: mappedBloodGroup,
    };
    
    const updateResponse = await updateUser(updateData, file || undefined);
      if (updateResponse.status === 200 || updateResponse.status === 201) {
        if (updateResponse.data) {
          toast.success("Profile updated successfully");
          const role = updateResponse.data.role;
          const userId = updateResponse.data.userId;
          if (role === "Doctor") {
            router.push(`/dashboard/doctor/${userId}`);
          } else if (role === "Lab") {
            router.push(`/dashboard/lab/${userId}`);
          } else if (role === "Hospital") {
            router.push(`/dashboard/hospital/${userId}`);
          } else {
            router.push(`/dashboard/patient/${userId}`);
          }
          setTimeout(() => {
            window.location.href = `/dashboard/${role ? role.toLowerCase() : "patient"}/${userId}`;
          }, 1000);
        } else {
          throw new Error("No data received from server");
        }
      } else {
        throw new Error(
          updateResponse.error ||
          updateResponse.message ||
          "Failed to update profile"
        );
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to update profile";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (userLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-white">Loading...</span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-red-400">
          User not detected. Please sign in again.
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-[#d8eaee] dark:bg-[#1F2C3B] p-4">
      <div className="w-full max-w-md">
        <div className="bg-offer rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-orange-400 mb-8">
            Complete Your Profile
          </h2>
          <p className="text-white text-center mb-6">
            Please verify your phone number and select your role
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 w-full max-w-[500px] mx-auto">
              {/* Profile Picture Upload */}
              <div>
                <FormLabel className="text-white">Profile Picture</FormLabel>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="block w-full text-white bg-gray-800 border border-gray-600 rounded-md"
                />
              </div>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-white">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter your full name"
                        className="h-12 bg-white text-black dark:text-white placeholder:text-black dark:placeholder:text-white focus:ring-[#31addb] focus:border-[#31addb]"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-white">Date of Birth</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="date"
                        className="h-12 bg-white text-black dark:text-white placeholder:text-black focus:ring-[#31addb] focus:border-[#31addb]"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <div className="w-full space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="text-white">Gender</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-14 bg-white text-black dark:text-white focus:ring-[#31addb] focus:border-[#31addb]">
                              <SelectValue
                                placeholder="Select gender"
                                className="text-black dark:placeholder:text-white dark:text-white placeholder:text-black"
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value={EGender.MALE}>Male</SelectItem>
                            <SelectItem value={EGender.FEMALE}>
                              Female
                            </SelectItem>
                            <SelectItem value={EGender.OTHER}>Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="bloodGroup"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="text-white">
                          Blood Group (Optional)
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-14 bg-white text-black dark:text-white focus:ring-[#31addb] focus:border-[#31addb]">
                              <SelectValue
                                placeholder="Select blood group"
                                className="text-black dark:placeholder:text-white dark:text-white placeholder:text-black"
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[
                              "A+",
                              "A-",
                              "B+",
                              "B-",
                              "O+",
                              "O-",
                              "AB+",
                              "AB-",
                            ].map((group) => (
                              <SelectItem key={group} value={group}>
                                {group}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-white">Phone Number</FormLabel>
                    <div className="flex gap-2 w-full">
                      <div className="flex flex-1">
                        <FormControl>
                          <div className="flex w-full">
                            <div className="flex items-center justify-center h-12 px-3 border border-r-0 rounded-l-md bg-white text-gray-900">
                              +91
                            </div>
                            <Input
                              {...field}
                              value={
                                field.value.startsWith("+91") ?
                                  field.value.slice(3)
                                : field.value
                              }
                              onChange={(e) => {
                                const value = e.target.value;
                                const sanitizedValue = value
                                  .replace(/\D/g, "")
                                  .slice(0, 10);
                                field.onChange(`+91${sanitizedValue}`);
                              }}
                              type="tel"
                              placeholder="Enter your number"
                              className="flex-1 rounded-l-none h-12 bg-white dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:ring-[#31addb] focus:border-[#31addb]"
                              disabled={isOtpVerified}
                            />
                          </div>
                        </FormControl>
                      </div>
                      <Button
                        type="button"
                        onClick={sendOtp}
                        disabled={
                          isSubmitting || isOtpVerified || !field.value.length
                        }
                        className="h-12 min-w-[120px] whitespace-nowrap bg-[#31addb] hover:bg-[#00bbff] text-white">
                        {isOtpSent ? "Resend OTP" : "Send OTP"}
                      </Button>
                    </div>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {showOtpField && (
                <FormField
                  control={form.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-white">Enter OTP</FormLabel>
                      <div className="flex gap-2 w-full">
                        <FormControl className="flex-1">
                          <Input
                            {...field}
                            placeholder="Enter 4-digit OTP"
                            maxLength={4}
                            disabled={isOtpVerified}
                            className="h-12 bg-white text-black dark:text-white placeholder:text-black dark:placeholder:text-white focus:ring-[#31addb] focus:border-[#31addb]"
                          />
                        </FormControl>
                        <Button
                          type="button"
                          onClick={() => verifyOtp(field.value)}
                          disabled={
                            isSubmitting || isOtpVerified || !field.value
                          }
                          className="h-12 min-w-[120px] whitespace-nowrap bg-[#31addb] hover:bg-[#00bbff] text-white">
                          Verify OTP
                        </Button>
                      </div>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-white">Select Role</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={!isOtpVerified}>
                      <FormControl>
                        <SelectTrigger className="h-14 bg-white text-black dark:text-white focus:ring-[#31addb] focus:border-[#31addb]">
                          <SelectValue
                            placeholder="Select your role"
                            className="text-white placeholder:text-black dark:placeholder:text-white"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={EUserRole.PATIENT}>
                          Patient
                        </SelectItem>
                        <SelectItem value={EUserRole.DOCTOR}>Doctor</SelectItem>
                        <SelectItem value={EUserRole.HOSPITAL}>
                          Hospital
                        </SelectItem>
                        <SelectItem value={EUserRole.LAB}>
                          Laboratory
                        </SelectItem>
                        <SelectItem value={EUserRole.PHARMACEUTICAL}>
                          Pharmaceutical
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <div className="space-y-4 w-full border-t border-gray-700 pt-6 mt-6">
                <FormLabel className="text-white block mb-4">
                  Address Details (Optional)
                </FormLabel>

                <FormField
                  control={form.control}
                  name="address.address"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Street Address"
                          className="h-12 bg-white text-black dark:text-white placeholder:text-black dark:placeholder:text-white focus:ring-[#31addb] focus:border-[#31addb]"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="address.city"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="City"
                            className="h-12 bg-white text-black dark:text-white placeholder:text-black dark:placeholder:text-white focus:ring-[#31addb] focus:border-[#31addb]"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address.state"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="State"
                            className="h-12 bg-white text-black dark:text-white placeholder:text-black dark:placeholder:text-white focus:ring-[#31addb] focus:border-[#31addb]"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="address.country"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Country"
                            className="h-12 bg-white text-black dark:text-white placeholder:text-black dark:placeholder:text-white focus:ring-[#31addb] focus:border-[#31addb]"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address.pincode"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Pincode"
                            className="h-12 bg-white text-black dark:text-white placeholder:text-black dark:placeholder:text-white focus:ring-[#31addb] focus:border-[#31addb]"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-lg font-semibold bg-[#31addb] hover:bg-[#00bbff] text-white disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={
                  isSubmitting ||
                  !isOtpVerified ||
                  !form.getValues("name") ||
                  !form.getValues("phone") ||
                  !form.getValues("dob") ||
                  !form.getValues("gender") ||
                  !form.getValues("role")
                }
              >
                {isSubmitting ? "Saving..." : "Submit"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}