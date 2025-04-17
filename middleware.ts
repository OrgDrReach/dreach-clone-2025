import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const isProfileCompletePath = request.nextUrl.pathname === "/auth/complete-profile";

  // If user is not logged in, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Check if profile is incomplete and user is not on complete-profile page
  if (!token.user?.phoneNumber && !isProfileCompletePath) {
    return NextResponse.redirect(new URL("/auth/complete-profile", request.url));
  }

  // If profile is complete and user tries to access complete-profile page
  if (token.user?.phoneNumber && isProfileCompletePath) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/complete-profile"]
};