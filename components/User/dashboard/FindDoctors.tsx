"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { BsStarFill } from "react-icons/bs";
import FilterDoctors from "./FilterDoctors";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks/hooks";
import { setDoctorList } from "@/Redux/reducers/UserReducers";
import Loader from "@/components/Loader";
import { serviceMap } from "@/utils/utils";

interface FindDoctorList {
  specializations: string[];

  id: string;
  fee: number;
  service: string;
  isAvailableForDesk?: boolean; // Optional property added for completeness

  user: {
    id: string;

    name: string;
    email: string;
    profilePic: string;
    phone: string;
    username: string;
    address: {
      address: string;
      city: string;
      state: string;
      country: string;
      pincode: string;
    };
  };
}

const FindDoctors = ({ data,service }: { data: FindDoctorList[], service:null|string}) => {
  const dispatch = useAppDispatch();
  const isFindingDoctor = useAppSelector(
    (state) => state.userReducer.findingDoctor
  );
  const doctorList = useAppSelector((state) => state.userReducer.doctorList);

  useEffect(() => {
    if (doctorList.length === 0) {
      dispatch(setDoctorList(data));
      console.log("called");
    }
  }, [data]);

  return (
    <div className="grid grid-flow-cols ">
      <FilterDoctors mode={service} />
      {isFindingDoctor ? (
        <Loader />
      ) : (

        <div className="grid grid-flow-cols grid-cols-1 md:p-4  divide-y ">

       { doctorList &&
        doctorList.map((d, v) => {
          return <div key={d.id} className="w-full flex justify-between px-3 md:flex-row py-3 flex-col">

            <div className="flex items-center md:flex-row gap-2">
              <img className="w-[100px] h-[100px] rounded-full object-cover border border-green-700" src={`https://storage.googleapis.com/kiitconnect_bucket/doctorProfile/${d.user.profilePic}`} alt="" />
              <div className="flex flex-col">
               <Link className="no-underline" href={`/doctorprofile/${d.user.username}`}><span className="text-[15px]  text-cyan-500 font-bold">{d.user.Fname} {d.user.Lname}</span></Link> 
                <span className="text-[12px] text-muted">{d.specializations.join(",")}</span>
                <span className="text-[12px] text-muted">{d.user.address.city} {d.user.address.state}</span>
                <span className="text-[12px] text-muted">Rs. 200</span>
                <Link href={`/doctorprofile/${d.user.username}`} className="bg-green-700 text-center no-underline hover:bg-green-800 my-2 px-2 py-1 rounded-[4px] text-[10px] max-w-[100px] text-white" >View Profile</Link>

              </div>
              
            </div>
            <div className="flex flex-col my-2 gap-2 text-[12px] md:pr-[ 30px] justify-center">
              <Link  href={`/doctorprofile/${d.user.username}?single_service=${d.service}`} className="bg-cyan-700 no-underline text-center hover:bg-cyan-800 px-2 py-1 rounded-[4px] text-white">Book {serviceMap[d.service as keyof typeof serviceMap]}</Link>
              {d.isAvailableForDesk && (
                <Link    href={`/doctorprofile/${d.user.username}?single_service=`} className="bg-yellow-700 no-underline text-center hover:bg-yellow-800 px-2 py-1 rounded-[4px] text-white">Book Clinic Visit</Link>
              )}
              </div>
        
          </div>
        })}
        </div>
      )
      
      }
    </div>
  );
};

export default FindDoctors;

// <div key={v} className="w-full">
// <div className="profile-widget">
//   <div className="doc-img">
//     <Link href={`/doctorprofile/${d.user.username}`}>
//       <img
//         className="h-[200px] rounded-full object-contain"
//         alt="User Image"
//         src={`${
//           d.user.profilePic
//             ? `https://storage.googleapis.com/kiitconnect_bucket/doctorProfile/${d.user.profilePic}`
//             : "/assets/doctor-2.jpg"
//         } `}
//       />
//     </Link>
//   </div>
//   <div className="pro-content">
//     <h3 className="title">
//       <Link href={`/doctorprofile/${d.user.username}`}>
//         {d?.user?.Fname} {d?.user?.Lname}
//       </Link>
//       <i className="fas fa-check-circle verified" />
//     </h3>

//     <p className=" text-[12px]">{d.specializations.join(",")}</p>
//     {/* <div className="rating">
//       <BsStarFill className="text-yellow-500" size={20} />
//       <BsStarFill className="text-yellow-500" size={20} />
//       <BsStarFill className="text-yellow-500" size={20} />
//       <BsStarFill className="text-yellow-500" size={20} />
//       <BsStarFill className="text-yellow-500" size={20} />

//       <span className="d-inline-block average-rating">(17)</span>
//     </div> */}
//     <ul className="available-info mt-0">
//       <li>
//         <i className="fas fa-map-marker-alt" />
//         {d.user?.address?.city} {d?.user?.address?.state}
//       </li>

//       <li>
//         <i className="far fa-money-bill-alt" /> Rs.200-500{" "}
//         <i
//           className="fas fa-info-circle"
//           data-toggle="tooltip"
//           title="Lorem Ipsum"
//         />
//       </li>
//     </ul>
//     <div className="w-full  flex gap-2 flex-col">
//       <Link
//         href={`/doctorprofile/${d.user.username}`}
//         className="btn btn-primary btn-sm"
//       >
//         View Profile
//       </Link>
//       <Link
//         href={`/doctorprofile/${d.user.username}?single_mode=${d.mode}`}
//         type="button"
//         className="w-full btn btn-info text-white font-bold btn-sm"
//       >
//         Book {modeMap[d?.mode as keyof typeof modeMap]}
//       </Link>

//       {d?.isAvailableForDesk && (
//         <Link
//           href={`/doctorprofile/${d.user.username}?single_mode=CLINIC_VISIT`}
//           type="button"
//           className="btn btn-success btn-sm"
//         >
//           Book Clinic Visit
//         </Link>
//       )}
//     </div>
//   </div>
// </div>
// </div>
// );
// })
// )}
// </div>
