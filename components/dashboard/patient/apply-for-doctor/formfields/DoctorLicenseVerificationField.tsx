import React from "react";
import { Controller, Control } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FormValues } from "./FormFields";
import { Upload } from "lucide-react";

interface DoctorLicenseVerificationFieldProps {
  control: Control<FormValues>;
  errors: any;
}

const DoctorLicenseVerificationField: React.FC<
  DoctorLicenseVerificationFieldProps
> = ({ control, errors }) => {
  return (
    <div className="space-y-4">
      <Label className="text-lg font-semibold">
        Doctor's License Verification
      </Label>
      <div className="space-y-4">
        <Controller
          name="licenseNumber"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div>
              <Label htmlFor="licenseNumber">License Number</Label>
              <Input
                id="licenseNumber"
                placeholder="Enter your medical license number"
                {...field}
              />
              {errors.licenseNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.licenseNumber.message}
                </p>
              )}
            </div>
          )}
        />
        <Controller
          name="licenseFile"
          control={control}
          defaultValue={undefined}
          render={({ field: { onChange, value, ...field } }) => (
            <div>
              <Label htmlFor="licenseFile">Upload License Document</Label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-md">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="licenseFile"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <Input
                        id="licenseFile"
                        type="file"
                        className="sr-only"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) =>
                          onChange(e.target.files?.[0] || undefined)
                        }
                        {...field}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PDF, PNG, JPG up to 10MB
                  </p>
                </div>
              </div>
              {errors.licenseFile && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.licenseFile.message}
                </p>
              )}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default DoctorLicenseVerificationField;
