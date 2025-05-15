"use server";

import { IUser, IPatient } from "@/types/user.d.types";
import { EUserRole, EUserStatus, EGender } from "@/types/auth.d.types";


interface UpdateUserPayload {
	userId: string;
	name: string;
	phone: string;
	dob: string | Date; 
	gender: EGender;
	bloodGroup?: string;
	role: EUserRole;
	address?: {
		address?: string;
		city?: string;
		state?: string;
		country?: string;
		pincode?: string;
	};
}


interface ApiResponse<T> {
	status: number;
	message?: string;
	error?: string;
	data?: T;
}


/**
 * Create new user
 */
export const createUser = async (
	userData: Partial<IUser>
): Promise<ApiResponse<IUser>> => {
	try {
		const res = await fetch(`${process.env.SERVER_URL}/user/signup`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify(userData),
		});
		console.log(`"user is being created", ${JSON.stringify(userData)}`);

		const data = await res.json();

		console.log(data);




		 let user: IUser | undefined = data.user;
        if (!user && data.userId) {
            const userRes = await fetch(`${process.env.SERVER_URL}/user/fetchUserById/${data.userId}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            });
            const userData = await userRes.json();
            user = userData.user;
        }

        return {
            status: res.status,
            message: data.message || "User created",
            data: user,
        };
	} catch (error) {
		console.error("Error creating user:", error);
		return {
			status: 500,
			message: "Internal server error",
			error: error instanceof Error ? error.message : "Unknown error occurred",
		};
	}
};

/**
 * Fetch user data by ID
 */
export const fetchUserById = async (
	userId: string
): Promise<ApiResponse<IUser>> => {
	try {
		if (!userId) {
			throw new Error("User ID is required");
		}

		const res = await fetch(
			`${process.env.SERVER_URL}/user/fetchUserById/${userId}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			}
		);

		const data = await res.json();
		console.log("Response data:", data);

		if (!res.ok) {
			throw new Error(data.message || "Failed to fetch user");
		}

		return {
			status: res.status,
			message: data.message,
			data: data.user,
		};
	} catch (error) {
		console.error("Error fetching user:", error);
		return {
			status: 500,
			message: "Internal server error",
			error: error instanceof Error ? error.message : "Unknown error occurred",
		};
	}
};


export const fetchUserByEmail = async (
  email: string
): Promise<ApiResponse<IUser>> => {
  try {
    if (!email) {
      return {
        status: 400,
        message: "Email is required",
        error: "Email is required",
      };
    }

    if (!process.env.SERVER_URL) {
      throw new Error("SERVER_URL environment variable is not defined");
    }

    console.log("Attempting to fetch user with email:", email);
    const res = await fetch(
      `${process.env.SERVER_URL}/user/fetchUserByEmail/?email=${encodeURIComponent(email)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    const data = await res.json();
    console.log("Response status:", res.status);
    console.log("Response data:", data);

    // User found
    if (res.ok && data?.user) {
      return {
        status: 200,
        message: "User found successfully",
        data: data.user,
      };
    }

    // User not found, create new user and fetch full user object
    if (res.status === 404) {
      console.log("User not found, creating new user");
      const createUserResponse = await createUser({
        email,
        role: EUserRole.PATIENT,
        status: EUserStatus.ACTIVE,
      });

      if (createUserResponse.status === 201 && createUserResponse.data) {
        return {
          status: 201,
          message: "User created successfully",
          data: createUserResponse.data,
        };
      }
      throw new Error(createUserResponse.message || "Failed to create user");
    }

    throw new Error(data.message || "Unexpected error occurred");
  } catch (error) {
    console.error("Error in fetchUserByEmail:", error);
    return {
      status: 500,
      message: error instanceof Error ? error.message : "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};

// Fetch user ID by email
export const fetchUserIdByEmail = async (email: string): Promise<string | null> => {
		try {
				const response = await fetchUserByEmail(email);
				if (response.status === 200 && response.data) {
						return response.data.userId;
				}
				throw new Error(response.message || "Failed to fetch user ID");
		} catch (error) {
				const errorMessage = error instanceof Error ? error.message : "Failed to fetch user ID";
				console.error("Error fetching user ID:", errorMessage);
				return null;
		}
};

// Update existing user
export const updateUser = async (
    data: UpdateUserPayload,
    file?: File // Optional file parameter for profile picture
): Promise<ApiResponse<IUser>> => {
    try {
        if (!process.env.SERVER_URL) {
            throw new Error("SERVER_URL environment variable is not defined");
        }

        const apiUrl = `${process.env.SERVER_URL}/user/updateUser`;

        // Create a FormData object to handle both file and user data
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("phone", data.phone);
        formData.append("dob", data.dob instanceof Date ? data.dob.toISOString() : data.dob);
        formData.append("gender", data.gender);
        if (data.bloodGroup) formData.append("bloodGroup", data.bloodGroup);
        if (data.address) {
            formData.append("address", JSON.stringify(data.address)); // Serialize address object
        }
        formData.append("userId", data.userId);
        if (file) {
            formData.append("profilePic", file); // Append the file if provided
        }

        console.log("Payload sent to update user:", formData);

        const response = await fetch(apiUrl, {
            method: "POST",
            body: formData, // Send FormData directly
        });

        const responseData = await response.json();
        console.log("Server response:", responseData);

        if (!response.ok) {
            throw new Error(responseData.message || "Failed to update user");
        }

        return {
            status: response.status,
            data: responseData.user,
            message: "Profile updated successfully",
        };
    } catch (error) {
        console.error("Error updating user:", error);
        return {
            status: 500,
            error: error instanceof Error ? error.message : "Failed to update profile",
        };
    }
};

/**
 * Fetch patient profile with medical history
 */
export const fetchPatientProfile = async (
	userId: string
): Promise<ApiResponse<IPatient>> => {
	try {
		const res = await fetch(
			`${process.env.SERVER_URL}/user/patient/${userId}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			}
		);

		const data = await res.json();

		return {
			status: res.status,
			message: data.message,
			data: data.patient,
		};
	} catch (error) {
		console.error("Error fetching patient profile:", error);
		return {
			status: 500,
			message: "Internal server error",
			error: error instanceof Error ? error.message : "Unknown error occurred",
		};
	}
};



/**
 * Delete user account
 */
export const deleteUser = async (
	userId: string
): Promise<ApiResponse<void>> => {
	try {
		const res = await fetch(`${process.env.SERVER_URL}/user/${userId}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		});

		const data = await res.json();

		return {
			status: res.status,
			message: data.message,
		};
	} catch (error) {
		console.error("Error deleting user:", error);
		return {
			status: 500,
			message: "Internal server error",
			error: error instanceof Error ? error.message : "Unknown error occurred",
		};
	}
};