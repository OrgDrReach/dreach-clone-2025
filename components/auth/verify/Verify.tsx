"use client";
import { verifyUser, resendOTP } from "@/server-actions/user";
import { otpSchema, OtpSchemaType } from "@/Zod/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { VerifyLoading } from "./VerifyLoading";
import { OTPInput } from "./OTPInput";
import { Button } from "@/components/ui/button";

const Verify = ({ phone }: { phone: string }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [otp, setOtp] = useState("");

  const form = useForm<OtpSchemaType>({
    resolver: zodResolver(otpSchema),
    mode: "onChange",
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendTimer > 0 && !canResend) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(timer);
  }, [resendTimer, canResend]);

  const onSubmit = async (data: OtpSchemaType) => {
    try {
      setLoading(true);
      const res = await verifyUser(phone, data.otp);

      if (res.status !== 201) {
        toast.error(res.message || "Verification failed");
        return;
      }

      toast.success("Mobile number verified successfully!");
      router.push("/auth/login");
    } catch (error) {
      toast.error("An error occurred during verification");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (!canResend) return;

    try {
      const res = await resendOTP(phone);

      if (res.status !== 201) {
        toast.error(res.message || "Failed to resend OTP");
        return;
      }

      setResendTimer(30);
      setCanResend(false);
      toast.success("OTP resent successfully");
    } catch (error) {
      toast.error("Failed to resend OTP");
    }
  };

  const formatPhoneNumber = (phone: string) => {
    const lastFourDigits = phone.slice(-4);
    return `XXXXXX${lastFourDigits}`;
  };

  return (
    <>
      {loading && <VerifyLoading />}
      <div className="flex items-center justify-center min-h-screen bg-[#d8eaee] dark:bg-[#1F2C3B]">
        <div className="w-full max-w-md p-8 space-y-6 bg-offer rounded-xl shadow-lg transform transition-all hover:shadow-xl">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-center text-orange-400">
              Verify Your Mobile
            </h1>
            <div className="text-center space-y-2">
              <p className="text-white">We have sent you an OTP on</p>
              <p
                className="text-white font-medium"
                aria-label={`Phone number ending in ${phone.slice(-4)}`}
              >
                {formatPhoneNumber(phone)}
              </p>
            </div>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <OTPInput
              value={otp}
              onChange={setOtp}
              form={form}
              disabled={loading}
            />

            <div className="flex justify-between text-sm">
              <button
                type="button"
                disabled={!canResend}
                onClick={handleResendOTP}
                className="text-orange-400 hover:text-orange-500 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
                aria-label={
                  canResend
                    ? "Resend OTP"
                    : `Wait ${resendTimer} seconds to resend OTP`
                }
              >
                {canResend ? "Resend OTP" : `Resend OTP in ${resendTimer}s`}
              </button>
              <Button
                type="button"
                disabled={!canResend}
                variant="ghost"
                className="text-white hover:text-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
              >
                Get via call
              </Button>
            </div>

            <Button
              type="submit"
              disabled={loading || otp.length !== 6}
              className="w-full px-4 py-3 text-white bg-[#31addb] hover:bg-[#00bbff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#31addb] transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Verifying...</span>
                </span>
              ) : (
                "Verify & Continue"
              )}
            </Button>
          </form>

          <div className="text-center" aria-live="polite">
            <p className="text-sm text-white">
              Didn&apos;t receive the OTP? Check your spam folder or try
              resending after the timer ends.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verify;
