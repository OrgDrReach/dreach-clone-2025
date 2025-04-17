export interface IAuthUser {
  id: string;
  email: string;
  phone: string;
  name: string;
  userType: "Patient" | "Provider";
  providerType?: "Doctor" | "Hospital" | "Lab" | "Nursing" | "DoctorsAssistant";
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ILoginResponse {
  status: number;
  message: string;
  token?: string;
  user?: IAuthUser;
}

export interface IRegisterResponse {
  status: number;
  message: string;
  userId?: string;
}

export interface IVerifyResponse {
  status: number;
  message: string;
  token?: string;
}
