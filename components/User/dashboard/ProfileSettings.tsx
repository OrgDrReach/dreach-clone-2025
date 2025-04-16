"use client";

import { useAppDispatch, useAppSelector } from "@/Redux/hooks/hooks";
import { setDob } from "@/Redux/reducers/UserReducers";
import { updateUser } from "@/ServerActions";
import { DatePickerDemo } from "@/components/DatePicker";
import { loadToast, updateToast } from "@/utils/utils";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const bloodGroupMap = {
  A_POSITIVE: "A+",
  A_NEGATIVE: "A-",
  B_POSITIVE: "B+",
  B_NEGATIVE: "B-",
  AB_POSITIVE: "AB+",
  AB_NEGATIVE: "AB-",
  O_POSITIVE: "O+",
  O_NEGATIVE: "O-",
};

const ProfileSettings = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const dobDate: Date | null = useAppSelector((state: { userReducer: { dob: Date | null } }) => state.userReducer.dob);
  const [file, setFile] = useState<File | null>(null);
  const session = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (session.data?.data.dob) {
      dispatch(setDob(new Date(session.data.data.dob)));
    }
  }, [session.data?.data.dob, dispatch]);

  if (session.status === "loading") {
    return <div className="h-[900px]">Loading...</div>;
  }

  if (session.status === "unauthenticated" || !session.data) {
    return redirect("/");
  }

  const handleOnFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const onSubmit = async (data: any) => {
    if (!session.data?.data.id) {
      return toast.error("Session Expired, Refresh the page");
    }

    const { name, bloodGroup, gender, phone, address, city, state, pincode, country } = data;
    const Address = { address, city, state, pincode, country };

    const formData = new FormData();
    if (file) {
      formData.append("profileImage", file);
    }
    formData.set("userId", session.data.data.id);
    formData.set("name", name);
    if (dobDate) {
      formData.set("dob", dobDate.toString());
    } else {
      return toast.error("Date of Birth is required");
    }
    formData.set("bloodGroup", bloodGroup);
    formData.set("phone", phone);
    formData.set("Address", JSON.stringify(Address));
    formData.set("gender", gender);

    const toastId = loadToast("Updating Profile");

    try {
      const update = await updateUser(formData);

      if (update.status === 201) {
        updateToast(toastId, "Profile Updated", "success");
        await session.update({ ...session, data: update.data });
        return router.push("/user/dashboard");
      }

      if (update.status === 400) {
        updateToast(toastId, "Error Updating Profile", "error");
      }

      if (update.status === 500) {
        updateToast(toastId, "Server Error", "error");
      }
    } catch (error) {
      updateToast(toastId, "Unexpected Error", "error");
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 col-lg-8 col-xl-9">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row form-row">
                    <div className="col-12 col-md-12">
                      <div className="form-group">
                        <div className="change-avatar">
                          <div className="profile-img">
                            <img
                              src={
                                file
                                  ? URL.createObjectURL(file)
                                  : session.data.data.profilePic
                                  ? `https://drrreach.s3.ap-south-1.amazonaws.com/doctorProfile/${session.data.data.profilePic}`
                                  : "/assets/doctor-2.jpg"
                              }
                              alt="User Image"
                            />
                          </div>
                          <div className="upload-img flex flex-col">
                            <div className="change-photo-btn">
                              <span>
                                <i className="fa fa-upload" /> Edit Image
                              </span>
                              <input
                                onChange={handleOnFileChange}
                                type="file"
                                className="upload"
                              />
                            </div>
                            <small className="form-text text-muted">
                              Allowed JPG, GIF, or PNG. Max size of 2MB
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>
                          Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          {...register("name", { required: true })}
                          type="text"
                          className="form-control"
                          defaultValue={session.data.data.name ?? ""}
                        />
                        {errors.name && (
                          <span className="text-danger">This field is required</span>
                        )}
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>
                          Date of Birth <span className="text-red-600">*</span>
                        </label>
                        <div className="cal-icon">
                          <DatePickerDemo />
                          {errors.dob && (
                            <span className="text-danger">This field is required</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Gender <span className="text-red-600">*</span>
                        </label>
                        <select
                          defaultValue={session.data.data.gender}
                          {...register("gender", { required: true })}
                          className="form-control form-select"
                        >
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                        {errors.gender && (
                          <span className="text-danger">This field is required</span>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Blood Group <span className="text-red-600">*</span>
                        </label>
                        <select
                          defaultValue={session.data.data.bloodGroup}
                          {...register("bloodGroup", { required: true })}
                          className="form-control form-select"
                        >
                          {Object.entries(bloodGroupMap).map(([key, value]) => (
                            <option key={key} value={key}>
                              {value}
                            </option>
                          ))}
                        </select>
                        {errors.bloodGroup && (
                          <span className="text-danger">This field is required</span>
                        )}
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>
                          Email ID <span className="text-red-600">*</span>
                        </label>
                        <input
                          disabled
                          type="email"
                          className="form-control"
                          defaultValue={session.data.data.email ?? ""}
                        />
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>
                          Mobile <span className="text-red-600">*</span>
                        </label>
                        <input
                          {...register("phone", { required: true })}
                          type="text"
                          defaultValue={session.data.data.phone ?? ""}
                          className="form-control"
                        />
                        {errors.phone && (
                          <span className="text-danger">This field is required</span>
                        )}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Address <span className="text-red-600">*</span>
                        </label>
                        <input
                          {...register("address", { required: true })}
                          type="text"
                          className="form-control"
                          defaultValue={session.data.data.address?.address ?? ""}
                        />
                        {errors.address && (
                          <span className="text-danger">This field is required</span>
                        )}
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>
                          City <span className="text-red-600">*</span>
                        </label>
                        <input
                          {...register("city", { required: true })}
                          type="text"
                          className="form-control"
                          defaultValue={session.data.data.address?.city ?? ""}
                        />
                        {errors.city && (
                          <span className="text-danger">This field is required</span>
                        )}
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>
                          State <span className="text-red-600">*</span>
                        </label>
                        <input
                          {...register("state", { required: true })}
                          type="text"
                          className="form-control"
                          defaultValue={session.data.data.address?.state ?? ""}
                        />
                        {errors.state && (
                          <span className="text-danger">This field is required</span>
                        )}
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>
                          Zip Code <span className="text-red-600">*</span>
                        </label>
                        <input
                          {...register("pincode", { required: true })}
                          type="text"
                          className="form-control"
                          defaultValue={session.data.data.address?.pincode ?? ""}
                        />
                        {errors.pincode && (
                          <span className="text-danger">This field is required</span>
                        )}
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>
                          Country <span className="text-red-600">*</span>
                        </label>
                        <input
                          {...register("country", { required: true })}
                          type="text"
                          className="form-control"
                          defaultValue={session.data.data.address?.country ?? ""}
                        />
                        {errors.country && (
                          <span className="text-danger">This field is required</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="submit-section">
                    <button type="submit" className="btn btn-primary submit-btn">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;