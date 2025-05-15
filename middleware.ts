import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("dreach_token")?.value;

  let user: {
    id: string;
    userId: string;
    role?: string;
    isVerified?: boolean;
  } | null = null;

  if (token) {
    try {
      const decoded: any = jwtDecode(token);
      user = {
        id: decoded.sub,
        userId: decoded.userId,
        role: decoded.role,
        isVerified: decoded.isVerified,
      };
    } catch {
      user = null;
    }
  }

  const isProfileCompletePath =
    request.nextUrl.pathname === "/auth/complete-profile";

  // Not logged in: redirect to login
  if (!user) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Not verified: force complete-profile
  if (!user.isVerified && !isProfileCompletePath) {
    return NextResponse.redirect(
      new URL(`/auth/complete-profile?userId=${user.userId}`, request.url)
    );
  }

  // Verified: prevent access to complete-profile
  if (user.isVerified && isProfileCompletePath) {
    let dashboardPath = "/dashboard";
    switch (user.role) {
      case "Doctor":
        dashboardPath = `/dashboard/doctor/${user.userId}`;
        break;
      case "Lab":
        dashboardPath = `/dashboard/lab/${user.userId}`;
        break;
      case "Hospital":
        dashboardPath = `/dashboard/hospital/${user.userId}`;
        break;
      default:
        dashboardPath = `/dashboard/patient/${user.userId}`;
    }
    return NextResponse.redirect(new URL(dashboardPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/complete-profile"],
};