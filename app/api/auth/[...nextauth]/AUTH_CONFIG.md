# NextAuth Configuration Documentation

## Overview

This document explains the authentication configuration for Dr. Reach using NextAuth.js with Google OAuth provider.

## Table of Contents

1. [Type Definitions](#type-definitions)
2. [Provider Configuration](#provider-configuration)
3. [Custom Pages](#custom-pages)
4. [Callbacks](#callbacks)
5. [Session Configuration](#session-configuration)

## Type Definitions

### ExtendedSessionUser Interface

```typescript
interface ExtendedSessionUser {
  id: string;
  email: string;
  name: string;
  image?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  role?: EUserRole;
  isVerified?: boolean;
  providerRole?: string;
  address?: any[];
  profileImage?: string;
  authProvider?: "google";
}
```

This interface extends the default session user with additional properties needed for Dr. Reach.

### ExtendedUser Interface

```typescript
interface ExtendedUser extends User {
  phone?: string;
  firstName?: string;
  lastName?: string;
  role?: EUserRole;
  isVerified?: boolean;
  providerType?: string;
  address?: any[];
  profileImage?: string;
  authProvider?: "google";
}
```

Extends the NextAuth User type with custom properties.

## Provider Configuration

### Google OAuth Provider

```typescript
GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  authorization: {
    params: {
      prompt: "consent",
      access_type: "offline",
      response_type: "code",
    },
  },
  profile(profile) {
    return {
      id: profile.sub,
      email: profile.email,
      name: profile.name,
      firstName: profile.given_name,
      lastName: profile.family_name,
      image: profile.picture,
      role: EUserRole.PATIENT,
      isVerified: true,
      phone: "",
      authProvider: "google"
    };
  },
})
```

### Configuration Details

- **Required Environment Variables**:
  - `GOOGLE_CLIENT_ID`
  - `GOOGLE_CLIENT_SECRET`
  - `SERVER_URL`

- **Authorization Parameters**:
  - `prompt: "consent"` - Forces consent screen display
  - `access_type: "offline"` - Enables refresh token
  - `response_type: "code"` - Authorization code flow

## Custom Pages

```typescript
pages: {
  signIn: "/auth/login",
  error: "/auth/error",
  newUser: "/auth/complete-profile",
}
```

- **signIn**: Custom login page route
- **error**: Custom error page route
- **newUser**: Profile completion page for new users

## API Integration

The configuration uses the `createUser` axios function for backend integration:

```typescript
const response = await createUser({
  email: extendedUser.email ?? undefined,
  firstName: extendedUser.firstName,
  lastName: extendedUser.lastName,
  profileImage: extendedUser.profileImage,
});
```

### API Response Handling

```typescript
if (response.status !== 200) {
  throw new Error(response.message || "Google authentication failed");
}

token.signupData = response.data;
```

## Callbacks

### JWT Callback

```typescript
async jwt({ token, user, account }) {
  if (user) {
    const extendedUser = user as ExtendedUser;
    // Maps all user properties to token
    token.id = extendedUser.id;
    token.email = extendedUser.email;
    token.name = extendedUser.name;
    token.phone = extendedUser.phone;
    token.firstName = extendedUser.firstName;
    token.lastName = extendedUser.lastName;
    token.role = extendedUser.role;
    token.isVerified = extendedUser.isVerified;
    token.providerRole = extendedUser.providerType;
    token.address = extendedUser.address;
    token.profileImage = extendedUser.profileImage;
    token.authProvider = extendedUser.authProvider;

    // API integration with error handling
    try {
      // User creation API call
      // Store response data in token
    } catch (error) {
      console.error("Error during Google auth:", error);
    }
  }
  return token;
}
```

### Session Callback

```typescript
async session({ session, token }) {
  if (session.user) {
    const user = {
      id: token.id as string,
      email: token.email as string,
      name: token.name as string,
      image: token.image as string,
      phone: token.phone as string,
      firstName: token.firstName as string,
      lastName: token.lastName as string,
      role: token.role as EUserRole,
      isVerified: token.isVerified as boolean,
      providerRole: token.providerRole as string,
      address: token.address,
      profileImage: token.profileImage as string,
      authProvider: token.authProvider as "google",
    } satisfies ExtendedSessionUser;

    session.user = user;
  }
  return session;
}
```

## Session Configuration

```typescript
session: {
  strategy: "jwt",
  maxAge: 30 * 24 * 60 * 60, // 30 days
}
```

- Uses JWT strategy for session management
- Session expires after 30 days

## Security Considerations

1. Environment variables must be properly set
2. API endpoints must be secured
3. Error handling implemented for authentication failures
4. Token expiration handled appropriately
5. User data validated during signup

## Type Safety

The configuration ensures type safety through:

- Custom interfaces for extended user data (`ExtendedSessionUser`, `ExtendedUser`)
- Type assertions in callbacks using the `satisfies` operator
- Strong typing for API responses and error handling
- Proper type checking for token and session data
- Type-safe environment variable validation
