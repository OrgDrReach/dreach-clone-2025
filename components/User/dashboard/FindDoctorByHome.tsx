// "use client";
// import Link from "next/link";
// import React, { useEffect } from "react";
// import { BsStarFill } from "react-icons/bs";
// import FilterDoctors from "./FilterDoctors";
// import { useAppDispatch, useAppSelector } from "@/Redux/hooks/hooks";
// import {
//   setDoctorList,
//   setHomeVisitDoctorList,
// } from "@/Redux/reducers/UserReducers";
// import { modeMap } from "@/utils/utils";

// interface FindDoctorList {
//   specializations: string[];

//   id: string;
//   fee: number;
//   mode: string;
//   isAvailableForDesk: boolean;

//   user: {
//     id: string;

//     Fname: string;
//     Lname: string;
//     email: string;
//     profilePic: string;
//     contact: string;
//     username: string;
//     address: {
//       address: string;
//       city: string;
//       state: string;
//       country: string;
//       pincode: string;
//     };
//   };
// }

// const FindDoctorsByHome = ({
//   data,
//   url,
//   mode,
// }: {
//   data: FindDoctorList[];
//   url: string;
//   mode: string;
// }) => {
//   const dispatch = useAppDispatch();
//   const doctorList = useAppSelector(
//     (state) => state.userReducer.HomeVisitDoctorList,
//   );

//   useEffect(() => {
//     if (data && doctorList.length === 0) {
//       dispatch(setHomeVisitDoctorList(data));
//     }
//   }, [data]);

//   return (
//     // <div className="row row-grid">
//     //   {/* <FilterDoctors/> */}
//     //   {doctorList &&
//     //     doctorList.map((d, v) => {
//     //       return (
//     //         <div key={v} className="col-md-6 col-lg-4 col-xl-3">
//     //           <div className="profile-widget">
//     //             <div className="doc-img">
//     //               <a href="doctor-profile.html">
//     //                 <img
//     //                   className="h-[200px] object-contain"
//     //                   alt="User Image"
//     //                   src={`${
//     //                     d.user.profilePic
//     //                       ? `https://storage.googleapis.com/kiitconnect_bucket/doctorProfile/${d.user.profilePic}`
//     //                       : "/assets/doctor-2.jpg"
//     //                   } `}
//     //                 />
//     //               </a>
//     //               {/* <a href="javascript:void(0)" className="fav-btn">
//     //       <i className="far fa-bookmark" />
//     //     </a> */}
//     //             </div>
//     //             <div className="pro-content">
//     //               <h3 className="title">
//     //                 <a href="doctor-profile.html">
//     //                   {d?.user?.Fname} {d?.user?.Lname}
//     //                 </a>
//     //                 <i className="fas fa-check-circle verified" />
//     //               </h3>

//     //               <p className=" text-[12px]">{d.specializations.join(",")}</p>
//     //               {/* <div className="rating">
//     //                 <BsStarFill className="text-yellow-500" size={20} />
//     //                 <BsStarFill className="text-yellow-500" size={20} />
//     //                 <BsStarFill className="text-yellow-500" size={20} />
//     //                 <BsStarFill className="text-yellow-500" size={20} />
//     //                 <BsStarFill className="text-yellow-500" size={20} />

//     //                 <span className="d-inline-block average-rating">(17)</span>
//     //               </div> */}
//     //               <ul className="available-info mt-0">
//     //                 <li>
//     //                   <i className="fas fa-map-marker-alt" />
//     //                   {d.user?.address?.city} {d?.user?.address?.state}
//     //                 </li>
//     //                 {/* <li>
//     //         <i className="far fa-clock" /> Available on Fri, 22 Mar
//     //       </li> */}
//     //                 <li>
//     //                   <i className="far fa-money-bill-alt" /> $300 - $1000{" "}
//     //                   <i
//     //                     className="fas fa-info-circle"
//     //                     data-toggle="tooltip"
//     //                     title="Lorem Ipsum"
//     //                   />
//     //                 </li>
//     //               </ul>
//     //               <div className="w-full  flex gap-2 flex-col">
//     //                 <Link
//     //                   href={`/doctorprofile/${d.user.username}`}
//     //                   className="btn btn-primary btn-sm "
//     //                 >
//     //                   View Profile
//     //                 </Link>
//     //                 <Link
//     //                   href={`/doctorprofile/${d.user.username}?mode=${mode}&${url}`}
//     //                   type="button"
//     //                   className="w-full btn btn-info btn-sm"
//     //                 >
//     //                   Book {modeMap[d?.mode as keyof typeof modeMap]}

//     //                 </Link>
//     //               </div>
//     //             </div>
//     //           </div>
//     //         </div>
//     //       );
//     //     })}
//     // </div>
//     <div className="grid grid-flow-cols grid-cols-1 md:p-4  divide-y ">
//       {doctorList &&
//         doctorList.map((d, v) => {
//           return (
//             <div
//               key={d.id}
//               className="w-full flex justify-between px-3 md:flex-row py-3 flex-col"
//             >
//               <div className="flex items-center md:flex-row gap-2">
//                 <img
//                   className="w-[100px] h-[100px] rounded-full object-cover border border-green-700"
//                   src={`https://storage.googleapis.com/kiitconnect_bucket/doctorProfile/${d.user.profilePic}`}
//                   alt=""
//                 />
//                 <div className="flex flex-col">
//                   <Link
//                     className="no-underline"
//                     href={`/doctorprofile/${d.user.username}`}
//                   >
//                     <span className="text-[15px]  text-cyan-500 font-bold">
//                       {d.user.Fname} {d.user.Lname}
//                     </span>
//                   </Link>
//                   <span className="text-[12px] text-muted">
//                     {d.specializations.join(",")}
//                   </span>
//                   <span className="text-[12px] text-muted">
//                     {d.user.address.city} {d.user.address.state}
//                   </span>
//                   <span className="text-[12px] text-muted">Rs. 200</span>
//                   <Link
//                     href={`/doctorprofile/${d.user.username}`}
//                     className="bg-green-700 text-center no-underline hover:bg-green-800 my-2 px-2 py-1 rounded-[4px] text-[10px] max-w-[100px] text-white"
//                   >
//                     View Profile
//                   </Link>
//                 </div>
//               </div>
//               <div className="flex flex-col  gap-2 text-[12px] md:pr-[ 30px] justify-center">
//                 <Link
//                   href={`/doctorprofile/${d.user.username}?mode=${mode}&${url}`}
//                   className="bg-cyan-700 no-underline text-center hover:bg-cyan-800 px-2 py-1 rounded-[4px] text-white"
//                 >
//                   Book {modeMap[d.mode as keyof typeof modeMap]}
//                 </Link>
//               </div>
//             </div>
//           );
//         })}
//     </div>
//   );
// };

// export default FindDoctorsByHome;
