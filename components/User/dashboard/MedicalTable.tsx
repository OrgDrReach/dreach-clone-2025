import { convertDateToFormat } from "@/utils/utils";
import Link from "next/link";
import React from "react";

export interface MedicalRecord {
  id: string;
  userId: string;
  doctorProfileId: string;
  recordId: string;
  description: string;
  attachment: string;
  createdAt: string;
  updatedAt: string;
  doctorProfile: DoctorProfile;
}

export interface DoctorProfile {
  user: User;
}

export interface User {
  Fname: string;
  Lname: string;
  profilePic: any;
}

const MedicalTable = ({ data }: { data: MedicalRecord }) => {
  return (
    <tr>
      <td>
        <Link href="#">#{data.recordId}</Link>
      </td>
      <td>{convertDateToFormat(data.createdAt)}</td>
      <td>{data.description}</td>
      {/* <td>
        <a href="#">View</a>
      </td> */}
      <td>
        <h2 className="table-avatar">
          <a href="doctor-profile.html" className="avatar avatar-sm mr-2">
            <img
              className="avatar-img rounded-circle"
              // src={`${data.doctorProfile.user.profilePic.image}`}
              src={`${
                data?.doctorProfile.user.profilePic
                  ? `https://storage.googleapis.com/kiitconnect_bucket/doctorProfile/${data?.doctorProfile.user.profilePic}`
                  : "/assets/doctors/doctor-thumb-02.jpg"
              }`}
              alt="User Image"
            />
          </a>
          <a href="doctor-profile.html">
            {data.doctorProfile.user.Fname} {data.doctorProfile.user.Lname}
          </a>
        </h2>
      </td>
      <td className="text-right">
        <div className="table-action">
          <a
            href={`https://storage.googleapis.com/kiitconnect_bucket/medicalRecords/${data?.attachment}`}
            target="_blank"
            className="btn btn-sm bg-info-light"
          >
            <i className="far fa-eye" /> View
          </a>
        </div>
      </td>
    </tr>
  );
};

export default MedicalTable;
