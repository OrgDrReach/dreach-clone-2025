import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { phoneNumber } = await req.json();
    
    // TODO: Implement your OTP sending logic here
    // This could be through SMS gateway, email, etc.
    
    return NextResponse.json({ message: "OTP sent successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send OTP" },
      { status: 500 }
    );
  }
}