export interface IAuthUser {
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  userType: 'patient' | 'provider';
  providerRole?: 'doctor' | 'hospital' | 'lab' | 'pharmaceutical' | 'ambulance';
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