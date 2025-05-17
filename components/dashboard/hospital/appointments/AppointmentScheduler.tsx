"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert } from "@/components/ui/alert";
import { Info } from "lucide-react";

export const AppointmentScheduler: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");
  const [patientName, setPatientName] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");

  const isFormValid =
    patientName &&
    contactNumber &&
    selectedDepartment &&
    selectedDoctor &&
    selectedTimeSlot;

  return (
    <Card className="w-full dark:bg-gray-900 dark:text-white rounded-lg shadow-lg">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">Schedule Appointment</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8 w-full">
        <Alert variant="default" className="dark:bg-gray-700 dark:text-gray-300 w-full flex">
          <Info className="h-5 w-5 mr-2 inline" />
          <span className="font-semibold">Note:</span> Make sure the doctor's schedule is available before scheduling.
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            {/* Department Selection */}
            <div>
              <Label>Select Department</Label>
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="neurology">Neurology</SelectItem>
                  <SelectItem value="orthopedics">Orthopedics</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Doctor Selection */}
            <div>
              <Label>Select Doctor</Label>
              <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose doctor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dr-smith">Dr. Smith</SelectItem>
                  <SelectItem value="dr-jones">Dr. Jones</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Patient Details */}
            <div>
              <Label>Patient Details</Label>
              <Input
                placeholder="Patient Name or ID"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="dark:bg-gray-700 dark:text-white"
              />
              <Input
                placeholder="Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="dark:bg-gray-700 dark:text-white mt-2"
              />
            </div>
          </div>

          <div className="space-y-6">
            {/* Date Selection */}
            <div>
              <Label>Select Date</Label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="dark:bg-gray-700 dark:text-white w-full rounded-md p-2"
              />
            </div>

            <div>
              <Label>Select Time Slot</Label>
              <Select value={selectedTimeSlot} onValueChange={setSelectedTimeSlot}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose time slot" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="09:00">09:00 AM</SelectItem>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-md shadow-sm">
            <div className="text-lg font-semibold text-white">Appointment Summary</div>
            <div className="text-sm text-gray-300">
              <p>Department: {selectedDepartment || "Not selected"}</p>
              <p>Doctor: {selectedDoctor || "Not selected"}</p>
              <p>Date: {selectedDate || "Not selected"}</p>
              <p>Time: {selectedTimeSlot || "Not selected"}</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md dark:bg-indigo-700 dark:hover:bg-indigo-800"
          disabled={!isFormValid}
        >
          Schedule Appointment
        </Button>
      </CardContent>
    </Card>
  );
};
