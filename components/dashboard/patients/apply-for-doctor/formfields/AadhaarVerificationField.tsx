import React from "react";
import { Controller, Control } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormValues } from "./FormFields";
import { Upload } from "lucide-react";

interface AadhaarVerificationFieldProps {
  control: Control<FormValues>;
  errors: any;
}

const AadhaarVerificationField: React.FC<AadhaarVerificationFieldProps> = ({
  control,
  errors,
}) => {
  return (
    <div className="space-y-4">
      <Label className="text-lg font-semibold">Aadhaar Card Verification</Label>
      <div className="space-y-4">
        <Controller
          name="aadhaarNumber"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div>
              <Label htmlFor="aadhaarNumber">Aadhaar Number</Label>
              <Input
                id="aadhaarNumber"
                placeholder="Enter your 12-digit Aadhaar number"
                {...field}
              />
              {errors.aadhaarNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.aadhaarNumber.message}
                </p>
              )}
            </div>
          )}
        />
        <Controller
          name="aadhaarFile"
          control={control}
          defaultValue={undefined}
          render={({ field: { onChange, value, ...field } }) => (
            <div>
              <Label htmlFor="aadhaarFile">Upload Aadhaar Card</Label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-md">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="aadhaarFile"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <Input
                        id="aadhaarFile"
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
              {errors.aadhaarFile && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.aadhaarFile.message}
                </p>
              )}
            </div>
          )}
        />
      </div>
      <Button type="button" variant="secondary">
        Verify Aadhaar
      </Button>
    </div>
  );
};

export default AadhaarVerificationField;
