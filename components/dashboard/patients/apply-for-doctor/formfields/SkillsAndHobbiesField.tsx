import React from "react";
import { Controller, Control, useFieldArray } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormValues } from "./FormFields";
import { PlusCircle, Trash } from "lucide-react";

interface SkillsAndHobbiesFieldProps {
  control: Control<FormValues>;
  errors: any;
}

const SkillsAndHobbiesField: React.FC<SkillsAndHobbiesFieldProps> = ({ control, errors }) => {
  const { fields: skillFields, append: appendSkill, remove: removeSkill } = useFieldArray({
    control,
    name: "skills",
  });

  const { fields: hobbyFields, append: appendHobby, remove: removeHobby } = useFieldArray({
    control,
    name: "hobbies",
  });

  return (
    <div className="col-span-2 grid grid-cols-2 gap-6">
      <div className="flex flex-col">
        <Label>Skills</Label>
        {skillFields.map((field, index) => (
          <div key={field.id} className="flex items-center gap-2 mt-2">
            <Controller
              name={`skills.${index}.skill`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Enter a skill"
                  className="flex-grow"
                />
              )}
            />
            <Button
              type="button"
              variant="destructive"
              size="icon"
              onClick={() => removeSkill(index)}
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        ))}
        {errors.skills && (
          <p className="text-red-500 text-sm mt-1">{errors.skills.message}</p>
        )}
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-2"
          onClick={() => appendSkill({ skill: "" })}
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Skill
        </Button>
      </div>

      <div className="flex flex-col">
        <Label>Hobbies</Label>
        {hobbyFields.map((field, index) => (
          <div key={field.id} className="flex items-center gap-2 mt-2">
            <Controller
              name={`hobbies.${index}.hobby`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Enter a hobby"
                  className="flex-grow"
                />
              )}
            />
            <Button
              type="button"
              variant="destructive"
              size="icon"
              onClick={() => removeHobby(index)}
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        ))}
        {errors.hobbies && (
          <p className="text-red-500 text-sm mt-1">{errors.hobbies.message}</p>
        )}
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-2"
          onClick={() => appendHobby({ hobby: "" })}
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Hobby
        </Button>
      </div>
    </div>
  );
};

export default SkillsAndHobbiesField;