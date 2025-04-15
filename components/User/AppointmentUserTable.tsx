import { convertDateToFormat } from "@/utils/utils";
import React from "react";
import MapTimes from "../MapTimes";
import Link from "next/link";

const status = {
  PENDING: "badge-warning",
  COMPLETED: "badge-success",
  REJECT: "badge-danger",
  APPROVED: "badge-primary",
};

const AppointmentUserTable = ({
  data,
}: {
  data: {
    doctorProfile: {
      user: {
        Fname: string;
        Lname: string;
        profilePic: string | null;
        username: string;
      };
      specializations: string[];
      fee: null | number;
    };
    appointmentSlotDate: string;
    appointmentSlotTime: string;
    createdAt: string;
    isForOthers: boolean;
    status: string;
  };
}) => {
  return (
    <tr>
      <td>
        <h2 className="table-avatar">
          <Link
            href={`/doctorprofile/${data.doctorProfile.user.username}`}
            className="avatar avatar-sm mr-2"
          >
            <img
              className="avatar-img rounded-circle"
              src={`${
                data.doctorProfile.user.profilePic
                  ? `https://storage.googleapis.com/kiitconnect_bucket/doctorProfile/${data.doctorProfile.user.profilePic}`
                  : "/assets/doctors/doctor-thumb-02.jpg"
              }`}
              alt="User Image"
            />
          </Link>
          <Link
            href={`/doctorprofile/${data.doctorProfile.user.username}`}
            className="no-underline"
          >
            {data.doctorProfile.user.Fname} {data.doctorProfile.user.Lname}{" "}
            <span>{data.doctorProfile.specializations.join(",")}</span>
          </Link>
        </h2>
      </td>
      <td>
        {convertDateToFormat(data.appointmentSlotDate)}{" "}
        <span className="d-block text-info">
          {<MapTimes slot={data.appointmentSlotTime} />}
        </span>
      </td>
      <td>{convertDateToFormat(data.createdAt)}</td>
      <td>Rs 2000</td>
      <td>{data.isForOthers ? "Other" : "Self"}</td>
      <td>
        <span
          className={`badge badge-pill ${
            status[data.status as keyof typeof status]
          }`}
        >
          {data.status}
        </span>
      </td>
      {/* <td className="text-right">
        <div className="table-action">
          <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
            <i className="fas fa-print" /> Print
          </a>
          <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
            <i className="far fa-eye" /> View
          </a>
        </div>
      </td> */}
    </tr>
  );
};

export default AppointmentUserTable;
