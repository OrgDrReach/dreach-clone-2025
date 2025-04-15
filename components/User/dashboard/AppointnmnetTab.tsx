import React from "react";
import AppointmentUserTable from "../AppointmentUserTable";
import Link from "next/link";

const AppointnmnetTab = ({
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
  }[];
}) => {
  return (
    <>
      {/* Tab Menu */}

      <div id="pat_appointments" className="tab-pane fade show active">
        <div className="card card-table mb-0">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover table-center mb-0">
                <thead>
                  <tr>
                    <th>Doctor</th>
                    <th>Appt Date</th>
                    <th>Booking Date</th>
                    <th>Amount</th>
                    <th>Appt For</th>
                    <th>Status</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {data.map((d, i) => {
                    return <AppointmentUserTable key={i} data={d} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointnmnetTab;
