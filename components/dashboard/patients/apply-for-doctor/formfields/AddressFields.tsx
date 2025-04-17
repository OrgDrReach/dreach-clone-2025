import React from "react";
import { Controller, Control } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FormValues } from "./FormFields";

interface AddressFieldsProps {
  control: Control<FormValues>;
  errors: any;
}

const AddressFields: React.FC<AddressFieldsProps> = ({ control, errors }) => {
  return (
    <div className="col-span-2 grid gap-6">
      <div className="grid gap-4">
        <h3 className="text-lg font-semibold">Permanent Address</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Label htmlFor="permanentAddressLine1">Address Line 1</Label>
            <Controller
              name="permanentAddressLine1"
              control={control}
              render={({ field }) => (
                <Input
                  id="permanentAddressLine1"
                  placeholder="Enter address line 1"
                  {...field}
                />
              )}
            />
            {errors.permanentAddressLine1 && (
              <p className="text-red-500 text-sm mt-1">
                {errors.permanentAddressLine1.message}
              </p>
            )}
          </div>
          <div className="col-span-2">
            <Label htmlFor="permanentAddressLine2">Address Line 2</Label>
            <Controller
              name="permanentAddressLine2"
              control={control}
              render={({ field }) => (
                <Input
                  id="permanentAddressLine2"
                  placeholder="Enter address line 2 (optional)"
                  {...field}
                />
              )}
            />
            {errors.permanentAddressLine2 && (
              <p className="text-red-500 text-sm mt-1">
                {errors.permanentAddressLine2.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="permanentCity">City</Label>
            <Controller
              name="permanentCity"
              control={control}
              render={({ field }) => (
                <Input id="permanentCity" placeholder="Enter city" {...field} />
              )}
            />
            {errors.permanentCity && (
              <p className="text-red-500 text-sm mt-1">
                {errors.permanentCity.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="permanentState">State</Label>
            <Controller
              name="permanentState"
              control={control}
              render={({ field }) => (
                <Input
                  id="permanentState"
                  placeholder="Enter state"
                  {...field}
                />
              )}
            />
            {errors.permanentState && (
              <p className="text-red-500 text-sm mt-1">
                {errors.permanentState.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="permanentCountry">Country</Label>
            <Controller
              name="permanentCountry"
              control={control}
              render={({ field }) => (
                <Input
                  id="permanentCountry"
                  placeholder="Enter country"
                  {...field}
                />
              )}
            />
            {errors.permanentCountry && (
              <p className="text-red-500 text-sm mt-1">
                {errors.permanentCountry.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="permanentPostalCode">Postal Code</Label>
            <Controller
              name="permanentPostalCode"
              control={control}
              render={({ field }) => (
                <Input
                  id="permanentPostalCode"
                  placeholder="Enter postal code"
                  {...field}
                />
              )}
            />
            {errors.permanentPostalCode && (
              <p className="text-red-500 text-sm mt-1">
                {errors.permanentPostalCode.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Controller
          name="sameAsPermament"
          control={control}
          render={({ field }) => (
            <Checkbox
              id="sameAsPermament"
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          )}
        />
        <Label htmlFor="sameAsPermament">
          Residential address same as permanent
        </Label>
      </div>

      <div className="grid gap-4">
        <h3 className="text-lg font-semibold">Residential Address</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Label htmlFor="residentialAddressLine1">Address Line 1</Label>
            <Controller
              name="residentialAddressLine1"
              control={control}
              render={({ field }) => (
                <Input
                  id="residentialAddressLine1"
                  placeholder="Enter address line 1"
                  {...field}
                />
              )}
            />
            {errors.residentialAddressLine1 && (
              <p className="text-red-500 text-sm mt-1">
                {errors.residentialAddressLine1.message}
              </p>
            )}
          </div>
          <div className="col-span-2">
            <Label htmlFor="residentialAddressLine2">Address Line 2</Label>
            <Controller
              name="residentialAddressLine2"
              control={control}
              render={({ field }) => (
                <Input
                  id="residentialAddressLine2"
                  placeholder="Enter address line 2 (optional)"
                  {...field}
                />
              )}
            />
            {errors.residentialAddressLine2 && (
              <p className="text-red-500 text-sm mt-1">
                {errors.residentialAddressLine2.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="residentialCity">City</Label>
            <Controller
              name="residentialCity"
              control={control}
              render={({ field }) => (
                <Input
                  id="residentialCity"
                  placeholder="Enter city"
                  {...field}
                />
              )}
            />
            {errors.residentialCity && (
              <p className="text-red-500 text-sm mt-1">
                {errors.residentialCity.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="residentialState">State</Label>
            <Controller
              name="residentialState"
              control={control}
              render={({ field }) => (
                <Input
                  id="residentialState"
                  placeholder="Enter state"
                  {...field}
                />
              )}
            />
            {errors.residentialState && (
              <p className="text-red-500 text-sm mt-1">
                {errors.residentialState.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="residentialCountry">Country</Label>
            <Controller
              name="residentialCountry"
              control={control}
              render={({ field }) => (
                <Input
                  id="residentialCountry"
                  placeholder="Enter country"
                  {...field}
                />
              )}
            />
            {errors.residentialCountry && (
              <p className="text-red-500 text-sm mt-1">
                {errors.residentialCountry.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="residentialPostalCode">Postal Code</Label>
            <Controller
              name="residentialPostalCode"
              control={control}
              render={({ field }) => (
                <Input
                  id="residentialPostalCode"
                  placeholder="Enter postal code"
                  {...field}
                />
              )}
            />
            {errors.residentialPostalCode && (
              <p className="text-red-500 text-sm mt-1">
                {errors.residentialPostalCode.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressFields;
