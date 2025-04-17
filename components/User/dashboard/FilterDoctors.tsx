import { useAppDispatch } from "@/Redux/hooks/hooks";
import { setDoctorList, setFindingDoctor } from "@/Redux/reducers/UserReducers";
import { filterDoctor } from "@/ServerActions";
import React from "react";
import { useForm } from "react-hook-form";

const FilterDoctors = ({ mode }: { mode: null | string }) => {
  // checkDoctorTime()

  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submit = async (data: any) => {
    dispatch(setFindingDoctor(true));
    const res = await filterDoctor(
      data.speciality === "SPECIALITY" ? "NONE" : data.speciality,
      data.address === "ADDRESS" ? "NONE" : data.address,
      mode ? mode : "NONE",
    );
    if (res) {
      dispatch(setDoctorList(res));
    }
    dispatch(setFindingDoctor(false));
  };

  return (
    <div className="flex flex-col w-full my-2">
      <form
        onSubmit={handleSubmit(submit)}
        className="w-full flex md:flex-row gap-2 flex-col border border-gray-600"
      >
        <select
          {...register("address")}
          id=""
          className="w-full md:w-1/4 py-3 bg-white p-2"
        >
          <option>ADDRESS</option>
          <option>Bhubaneshwar</option>
          {/* <option value="ONLINE">OFFLINE</option>
          <option value="HYBRID">HYBRID</option> */}
        </select>

        <select
          {...register("speciality")}
          id=""
          className="w-full md:w-1/4 py-3 bg-white p-2"
        >
          <option>SPECIALITY</option>
          <option value="Dentist">Dentist</option>
          <option value="Gynecologist">Gynecologist</option>
          <option value="General Physician">General Physician</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Ear-Nose-Throat">
            Ear-Nose-Throat (ENT) Specialist
          </option>
          <option value="Homoeopath">Homoeopath</option>
          <option value="Ayurveda">Ayurveda</option>
          {/* <option value="HYBRID">HYBRID</option> */}
        </select>

        <button type="submit" className="bg-green-800 p-2 font-bold text-white">
          Find Doctor
        </button>
      </form>

      <div></div>
    </div>
  );
};

export default FilterDoctors;
