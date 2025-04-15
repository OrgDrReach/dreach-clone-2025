"use client";
import React from "react";
import MedicalTable from "./MedicalTable";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AddMedicalRecord from "@/components/patients/AddMedicalRecord";
import { useAppDispatch } from "@/Redux/hooks/hooks";
import { setAddMedicalRecordDialog } from "@/Redux/reducers/UserReducers";

export interface Root {
  patient: Patient;
  isMyDoctor: boolean;
}

export interface Patient {
  medicalRecords: MedicalRecord[];
  id: string;
}

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

const MedicalTab = ({ data }: { data: Root }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  return (
    <>
      <div id="pat_medical_records" className="tab-pane show active ">
        {data.isMyDoctor && (
          <div className="text-right">
            <a
              href="#"
              onClick={() => dispatch(setAddMedicalRecordDialog(true))}
              className="add-new-btn"
              data-toggle="modal"
              data-target="#add_medical_records"
            >
              Add Medical Records
            </a>
          </div>
        )}
        <div className="card card-table mb-0">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover table-center mb-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Date </th>
                    <th>Description</th>
                    <th>Created</th>
                    <th>Attachment</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {data.patient.medicalRecords.map((d, i) => {
                    return <MedicalTable key={i} data={d} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <AddMedicalRecord patientsId={data.patient.id} />
      </div>
    </>
  );
};

export default MedicalTab;
