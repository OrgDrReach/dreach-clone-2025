"use client";

import React, { useState } from "react";
import { Calendar, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

const InstantAppointment: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = () => {
    let isValid = true;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
    }

    if (!phone || !/^[0-9]{10}$/.test(phone)) {
      isValid = false;
    }

    // Fixed date validation
    if (!selectedDate) {
      isValid = false;
    } else {
      const dateToCheck = new Date(selectedDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (isNaN(dateToCheck.getTime()) || dateToCheck < today) {
        isValid = false;
      }
    }

    if (!isValid) {
      setShowSuccess(false);
      setShowError(true);
      setTimeout(() => setShowError(false), 6000);
      return;
    }

    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Appointment Date:", selectedDate);

    setEmail("");
    setPhone("");
    setSelectedDate("");

    setShowSuccess(true);
    setShowError(false);
    setTimeout(() => setShowSuccess(false), 6000);
  };

  return (
    <div className="flex flex-col items-center justify-center border-gray-200 dark:border-gray-700 border-4 text-[#125872] rounded-xl bg-gray-100 dark:bg-gray-900 p-5 pt-8 m-6 mt-8 sm:m-12 sm:mx-20 xl:mx-32 lg:-mt-28 sm:py-8 sm:pt-12 2xlg:mx-48">
      <h1 className="text-xl lg:text-3xl font-bold text-center text-[#125872] dark:text-white mb-8">
        Book an Appointment
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
        <div className="relative w-fit 2xl:w-72">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-white" />
          <Input
            type="email"
            placeholder="Enter your Email"
            value={email}
            autoComplete="email"
            onChange={handleEmailChange}
            className="pl-10 dark:text-white h-11"
          />
        </div>
        <div className="relative w-64 lg:w-48 xl:w-64 2xl:w-72">
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-white" />
          <Input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="pl-25 md:pl-30 lg:pl-15 xl:pl-30 2xl:pl-39 h-11 dark:text-white"
          />
        </div>
        <div className="relative w-64 lg:w-48 xl:w-64 2xl:w-72">
          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-white" />
          <Input
            type="tel"
            placeholder="Enter your Phone number"
            autoComplete="tel"
            value={phone}
            onChange={handlePhoneChange}
            className="pl-10 dark:text-white h-11"
          />
        </div>
        <Button
          onClick={handleSubmit}
          className="bg-orange-600 hover:bg-red-600 text-white font-semibold px-6 py-6 sm:px-10"
        >
          Book Now
        </Button>
      </div>

      {showSuccess && (
        <Alert className="mt-4 bg-green-100 text-green-800">
          <AlertDescription>Appointment booked successfully!</AlertDescription>
        </Alert>
      )}

      {showError && (
        <Alert className="mt-4 bg-red-100 text-red-800">
          <AlertDescription>
            Invalid date or email or phone number. Please try again.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default InstantAppointment;
