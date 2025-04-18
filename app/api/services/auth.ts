import api from '../config/axios';
import { LoginRequest, SignupRequest, AuthResponse } from '../types/auth';

export const authService = {
  async login(data: LoginRequest): Promise<AuthResponse> {
    const response = await api.post('/auth/login', data);
    return response.data;
  },

  async signup(data: SignupRequest): Promise<AuthResponse> {
    const response = await api.post('/auth/signup', data);
    return response.data;
  },

  async refreshToken(): Promise<AuthResponse> {
    const response = await api.post('/auth/refresh');
    return response.data;
  },

  logout() {
    localStorage.clear();
  },
};