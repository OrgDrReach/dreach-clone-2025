# Frontend Integration Guide

This guide explains how to integrate the Dr. Reach frontend application with the backend server.

## Project Structure

Create the following directory structure in your frontend project:

```directory
src/
├── api/                    # API integration layer
│   ├── config/            # API configuration
│   │   ├── axios.ts       # Axios instance configuration
│   │   └── endpoints.ts   # API endpoint constants
│   ├── services/          # API service modules
│   │   ├── auth.ts       # Authentication service
│   │   ├── user.ts       # User management service
│   │   ├── provider.ts   # Healthcare provider service
│   │   ├── admin.ts      # Admin service
│   │   └── appointment.ts # Appointment service
│   └── types/            # TypeScript interfaces for API data
│       ├── auth.ts       # Authentication types
│       ├── user.ts       # User related types
│       ├── provider.ts   # Provider related types
│       └── common.ts     # Shared types
├── components/            # React components
│   ├── auth/             # Authentication components
│   ├── user/             # User related components
│   ├── provider/         # Provider related components
│   ├── admin/            # Admin dashboard components
│   ├── common/           # Shared/reusable components
│   └── layout/           # Layout components
├── hooks/                # Custom React hooks
│   ├── api/             # API related hooks
│   ├── auth/            # Authentication hooks
│   └── common/          # Shared hooks
├── context/             # React context providers
│   ├── AuthContext.tsx  # Authentication context
│   └── UserContext.tsx  # User data context
├── utils/               # Utility functions
│   ├── auth.ts         # Authentication utilities
│   ├── date.ts         # Date formatting utilities
│   ├── validation.ts   # Form validation utilities
│   └── format.ts       # Data formatting utilities
└── config/             # App configuration
    ├── routes.ts       # Route definitions
    └── constants.ts    # App constants

```

## File Naming and Module Organization

### Component Files

```directory
components/
├── auth/
│   ├── LoginForm/
│   │   ├── index.tsx         # Main component
│   │   ├── LoginForm.tsx     # Component implementation
│   │   ├── LoginForm.test.tsx # Tests
│   │   ├── LoginForm.module.css # Styles
│   │   └── types.ts          # Component types
│   └── SignupForm/
│       └── ... (same structure)
├── user/
│   └── UserProfile/
│       └── ... (same structure)
└── provider/
    └── ProviderDashboard/
        └── ... (same structure)
```

### Service Files

```directory
api/services/
├── auth/
│   ├── index.ts              # Service exports
│   ├── auth.service.ts       # Service implementation
│   ├── auth.types.ts         # Service types
│   └── auth.test.ts          # Service tests
└── user/
    └── ... (same structure)
```

### Hook Files

```directory
hooks/
├── api/
│   ├── useAuth/
│   │   ├── index.ts          # Hook export
│   │   ├── useAuth.ts        # Hook implementation
│   │   └── useAuth.test.ts   # Hook tests
│   └── useUser/
│       └── ... (same structure)
└── common/
    └── ... (same structure)
```

### Module Import Order

Maintain consistent import ordering in all files:

```typescript
// 1. External dependencies
import React from 'react';
import { useQuery } from 'react-query';

// 2. Internal modules/components
import { useAuth } from '@/hooks/auth';
import { Button } from '@/components/common';

// 3. Types
import type { User } from '@/types';

// 4. Styles
import styles from './ComponentName.module.css';
```

### File Export Patterns

Use consistent export patterns:

```typescript
// For components (named exports for testing, default export for usage)
export { ComponentName };
export default ComponentName;

// For hooks (always named exports)
export { useCustomHook };

// For services (object with methods)
export const serviceName = {
  methodOne,
  methodTwo,
};

// For types (named exports)
export type { TypeName };
export interface InterfaceName {}
```

### Module Resolution

Add to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@hooks/*": ["src/hooks/*"],
      "@api/*": ["src/api/*"],
      "@utils/*": ["src/utils/*"],
      "@context/*": ["src/context/*"],
      "@config/*": ["src/config/*"]
    }
  }
}
```

### State Management Organization

```directory
src/store/
├── auth/
│   ├── actions.ts
│   ├── reducers.ts
│   ├── selectors.ts
│   └── types.ts
└── user/
    └── ... (same structure)
```

### Component Structure Guidelines

1. **Common Components:**

   - Keep in `components/common`
   - Must be highly reusable
   - Should accept children and custom styling
   - Example structure:

   ```typescript
   // Button/index.tsx
   interface ButtonProps {
     variant?: 'primary' | 'secondary';
     size?: 'sm' | 'md' | 'lg';
     children: React.ReactNode;
     className?: string;
   }
   ```

2. **Page Components:**

   - Keep in `pages` directory
   - Follow Next.js routing conventions
   - Handle data fetching and layout
   - Example structure:

   ```typescript
   // pages/provider/[id].tsx
   export const getServerSideProps: GetServerSideProps = async (context) => {
     // Handle data fetching
   };
   ```

3. **Feature Components:**
   - Group related components in feature folders
   - Include all related files (tests, styles, types)
   - Example structure:

   ```directory
   features/
   └── appointments/
       ├── components/
       ├── hooks/
       ├── services/
       └── types/
   ```

## Prerequisites

1. Backend server running (default: <http://localhost:4000>)
2. Frontend application (Next.js) repository: <https://github.com/OrgDrReach/dreach-clone-2025.git>

## Configuration Steps

### 1. Environment Setup

Create a `.env.local` file in your frontend project root with:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_APP_ENV=development
```

### 2. API Configuration Setup

Create the following files:

```typescript
// src/api/config/axios.ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for authentication
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle token refresh or logout
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        try {
          const response = await api.post('/auth/refresh', null, {
            headers: { Authorization: `Bearer ${refreshToken}` },
          });
          localStorage.setItem('token', response.data.accessToken);
          localStorage.setItem('refreshToken', response.data.refreshToken);

          // Retry the original request
          const config = error.config;
          config.headers.Authorization = `Bearer ${response.data.accessToken}`;
          return api(config);
        } catch (refreshError) {
          // Refresh token is invalid, logout user
          localStorage.clear();
          window.location.href = '/login';
        }
      }
    }
    return Promise.reject(error);
  },
);

export default api;
```

### 3. API Services Implementation

Example service implementation:

```typescript
// src/api/services/auth.ts
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
```

### 4. Type Definitions

Create TypeScript interfaces for API data:

```typescript
// src/api/types/auth.ts
export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest extends LoginRequest {
  name: string;
}

export interface AuthResponse {
  user: User;
  backendToken: {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  };
}

// src/api/types/user.ts
export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  // Add other user properties
}
```

### 5. Context Setup

Implement authentication context:

```typescript
// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../api/types/user';

interface AuthContextType {
  user: User | null;
  login: (tokens: any) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Add authentication logic here

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
```

### 6. Custom Hooks

Create hooks for API integration:

```typescript
// src/hooks/api/useAuth.ts
import { useState } from 'react';
import { authService } from '../api/services/auth';
import { useAuth } from '../context/AuthContext';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login: setAuth } = useAuth();

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await authService.login({ email, password });
      setAuth(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Add other auth-related functions

  return { login, loading, error };
};
```

## Development Guidelines

1. Always use TypeScript interfaces for API responses
2. Implement proper loading and error states
3. Use environment variables for configuration
4. Handle token expiration and refresh
5. Implement proper form validation before API calls
6. Use proper error boundaries in React components

## Testing API Integration

1. Use tools like Jest and React Testing Library
2. Mock API calls in tests
3. Test error scenarios and loading states
4. Validate form submissions

## Security Best Practices

1. Never store sensitive data in localStorage
2. Always validate data on both client and server
3. Implement proper CSRF protection
4. Use HTTPS in production
5. Sanitize all user inputs
6. Implement rate limiting on the frontend

## Production Deployment

1. Update environment variables for production
2. Enable production mode in Next.js
3. Configure proper CORS for production domain
4. Enable error logging and monitoring
5. Configure proper caching strategies

## Dependencies

Add these to your package.json:

```json
{
  "dependencies": {
    "axios": "^1.6.0",
    "react-query": "^3.39.0",
    "jwt-decode": "^4.0.0",
    "date-fns": "^2.30.0",
    "yup": "^1.3.0",
    "react-hook-form": "^7.48.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "eslint": "^8.0.0",
    "typescript": "^5.0.0"
  }
}
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up environment variables

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Begin implementing components and services following the structure above

Remember to:

- Keep the code modular and reusable
- Follow TypeScript best practices
- Implement proper error handling
- Add proper documentation
- Follow the established folder structure
