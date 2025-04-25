# Frontend Integration Guide

This guide explains how to integrate the Dr. Reach frontend application with the backend server.

## Project Structure

Create the following directory structure in your Next.js frontend project:

```directory
app/                     # Next.js app directory (replaces pages/)
├── (auth)/             # Authentication routes group
│   ├── login/
│   │   └── page.tsx    # Login page
│   ├── register/
│   │   └── page.tsx    # Register page
│   └── layout.tsx      # Auth layout
├── (dashboard)/        # Dashboard routes group
│   ├── provider/       # Provider dashboard routes
│   ├── patient/        # Patient dashboard
│   └── admin/          # Admin dashboard
├── api/                # Route handlers (API endpoints)
├── layout.tsx          # Root layout
└── page.tsx            # Home page

lib/                    # Shared utilities & business logic
├── api/                # API integration layer
│   ├── config/        # API configuration
│   │   ├── axios.ts   # Axios instance & interceptors
│   │   └── env.ts     # Environment variables
│   ├── services/      # API service modules
│   │   ├── auth.ts    # Authentication service
│   │   ├── user.ts    # User service
│   │   └── provider.ts # Provider service
│   └── types/         # TypeScript interfaces
│       ├── auth.ts    # Auth types
│       └── common.ts  # Shared types
├── hooks/             # Custom React hooks
│   ├── api/          # API-related hooks
│   └── auth/         # Auth hooks
└── utils/            # Utility functions

components/            # React components
├── auth/             # Authentication components
├── dashboard/        # Dashboard components
├── forms/           # Form components
├── providers/       # Context providers
└── ui/             # UI components
```

## Environment Setup

1. Create `.env.local` in project root:

```env
# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:4000

# Environment
NEXT_PUBLIC_ENV=development
```

## API Integration

1. First install required dependencies:

```bash
npm install axios @tanstack/react-query jwt-decode date-fns
```

2. Set up Axios instance (`lib/api/config/axios.ts`):

```typescript
import axios from 'axios';
import { cookies } from 'next/headers';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor with cookie auth
api.interceptors.request.use((config) => {
  const token = cookies().get('token')?.value;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for error handling & token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle token refresh
      const refreshToken = cookies().get('refreshToken')?.value;
      if (refreshToken) {
        try {
          const response = await api.post('/auth/refresh', null, {
            headers: { Authorization: `Bearer ${refreshToken}` },
          });

          // Update cookies with new tokens
          cookies().set('token', response.data.accessToken);
          cookies().set('refreshToken', response.data.refreshToken);

          // Retry failed request
          const config = error.config;
          config.headers.Authorization = `Bearer ${response.data.accessToken}`;
          return api(config);
        } catch (refreshError) {
          // Clear cookies and redirect to login
          cookies().delete('token');
          cookies().delete('refreshToken');
        }
      }
    }
    return Promise.reject(error);
  },
);

export default api;
```

3. Set up React Query Provider (`app/providers.tsx`):

```typescript
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
```

4. Update root layout (`app/layout.tsx`):

```typescript
import { Providers } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
```

5. Implement API services (`lib/api/services/`):

Example auth service (`lib/api/services/auth.ts`):

```typescript
import api from '../config/axios';
import { LoginRequest, AuthResponse } from '../types/auth';

export const authService = {
  async login(data: LoginRequest): Promise<AuthResponse> {
    const response = await api.post('/auth/login', data);
    return response.data;
  },

  async register(data: RegisterRequest): Promise<AuthResponse> {
    const response = await api.post('/auth/register', data);
    return response.data;
  },

  async logout() {
    const response = await api.post('/auth/logout');
    return response.data;
  },
};
```

6. Create custom hooks for API calls (`lib/hooks/api/`):

Example appointment hook (`lib/hooks/api/use-appointment.ts`):

```typescript
'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { providerService } from '@/lib/api/services/provider';

export function useBookAppointment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: providerService.bookAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appointments'] });
    },
  });
}
```

7. Create server-side API handlers (`app/api/`):

Example appointment handler (`app/api/appointments/route.ts`):

```typescript
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { api } from '@/lib/api/config/axios';

// Validation schema
const appointmentSchema = z.object({
  providerId: z.string(),
  date: z.string(),
  time: z.string(),
  service: z.string(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = appointmentSchema.parse(body);

    const response = await api.post('/provider/appointment', validated);

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid appointment data' },
      { status: 400 },
    );
  }
}
```

8. Example page component using the API (`app/(dashboard)/provider/appointments/page.tsx`):

```typescript
'use client';

import { useBookAppointment } from '@/lib/hooks/api/use-appointment';

export default function AppointmentsPage() {
  const { mutate: bookAppointment, isPending } = useBookAppointment();

  const handleSubmit = async (data: AppointmentFormData) => {
    try {
      await bookAppointment(data);
      // Show success message
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <h1>Book Appointment</h1>
      <AppointmentForm onSubmit={handleSubmit} isLoading={isPending} />
    </div>
  );
}
```

## Important Notes

1. All components that use React hooks must be marked with 'use client' directive

2. Server components (default in app/ directory) should:

   - Make direct API calls using fetch or axios
   - Not use React hooks or browser APIs
   - Handle data fetching and pass data to client components

3. Client components should:

   - Be marked with 'use client'
   - Handle user interactions and state
   - Use React hooks and browser APIs

4. API Routes should:

   - Validate incoming requests
   - Forward requests to your backend
   - Handle errors appropriately
   - Be used for sensitive operations requiring server-side logic

5. Authentication:

   - Use cookies instead of localStorage for token storage
   - Implement middleware for protected routes
   - Handle token refresh on the server side

6. Error Handling:

   - Implement error boundaries for client components
   - Use try/catch for async operations
   - Show appropriate error messages to users

7. Performance:
   - Use React Suspense for loading states
   - Implement proper caching with React Query
   - Use Next.js Image component for images
   - Enable page caching where appropriate

## Testing

1. Install testing dependencies:

```bash
npm install -D jest @testing-library/react @testing-library/jest-dom
```

2. Create test setup (`tests/setup.ts`):

```typescript
import '@testing-library/jest-dom';
import { server } from './mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

3. Example component test:

```typescript
import { render, screen } from '@testing-library/react';
import { AppointmentForm } from './AppointmentForm';

describe('AppointmentForm', () => {
  it('submits appointment data', async () => {
    const onSubmit = jest.fn();
    render(<AppointmentForm onSubmit={onSubmit} />);

    // Add test implementation
  });
});
```

## Deployment

1. Update environment variables for production

2. Build the application:

```bash
npm run build
```

3. Deploy to your hosting platform (Vercel recommended for Next.js)

4. Configure proper CORS settings in your backend for the production domain

Remember to:

- Keep components small and focused
- Use TypeScript for better type safety
- Implement proper error handling
- Follow Next.js best practices
- Use server components where possible
- Handle loading and error states appropriately

## Developer Notes

The integration guide has been updated to reflect the modern Next.js app directory structure and best practices. The main differences from the previous guide are:

1. Changed the directory structure from src to app/ and lib/
2. Updated authentication to use cookies instead of localStorage for better security
3. Added server-side API handlers for sensitive operations
4. Separated client and server components
5. Added React Query setup with proper TypeScript types

You can now follow this guide to integrate your backend with a Next.js frontend. Start by creating the directory structure and following the step-by-step API integration process.

A few key additional points to keep in mind:

1. For real-time features (like chat or notifications), you'll need to set up WebSocket connections in a client component.

2. For file uploads (like profile pictures), use the FormData API and make sure to handle multipart/form-data properly.

3. For protected routes, create a middleware file (middleware.ts) in your project root:

```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');

  if (!token && request.nextUrl.pathname.startsWith('/(dashboard)')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/(dashboard)/:path*'],
};
```
