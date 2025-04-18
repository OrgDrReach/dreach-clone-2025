// "use client";
// import Logout from "@/components/Logout";
// import { convertDateToFormat } from "@/utils/utils";
// import { useSession } from "next-auth/react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";

// const Sidebar = () => {
//   const session = useSession();
//   const router = usePathname();
//   return (
//     <div className="col-md-5  col-lg-4 col-xl-3 theiaStickySidebar  border border-gray-700 rounded-md ">
//       <div className="profile-sidebar ">
//         <div className="widget-profile pro-widget-content">
//           <div className="profile-info-widget">
//             <a href="#" className="booking-doc-img">
//               <img
//                 src={`${
//                   session.data?.data.profilePic
//                     ? `https://storage.googleapis.com/kiitconnect_bucket/doctorProfile/${session.data.data.profilePic}`
//                     : "/assets/doctors/doctor-thumb-02.jpg"
//                 }`}
//                 alt="User Image"
//               />
//             </a>
//             <div className="profile-det-info">
//               <h3>
//                 {session.data?.data.Fname ?? "Update Fname"}{" "}
//                 {session?.data?.data.Lname ?? "Lname"}
//               </h3>
//               <div className="patient-details">
//                 <h5>
//                   <i className="fas fa-birthday-cake" />{" "}
//                   {session?.data?.data?.dob
//                     ? convertDateToFormat(session?.data?.data?.dob)
//                     : "update dob"}
//                   {/* 38 years */}
//                 </h5>
//                 <h5 className="mb-0">
//                   <i className="fas fa-map-marker-alt" />{" "}
//                   {session?.data?.data.address?.address ?? "update address"}
//                 </h5>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="dashboard-widget">
//           <nav className="dashboard-menu">
//             <ul>
//               <li className={`${router.split("/").length < 4 && "active"}`}>
//                 <Link href="/user/dashboard">
//                   <i className="fas fa-columns" />
//                   <span className="font-medium">Dashboard</span>
//                 </Link>
//               </li>

//               <li className={`${router.includes("/hybridmode") && "active"}`}>
//                 <Link href="/user/dashboard/hybridmode">
//                   <i className="fas fa-columns" />
//                   <span className="font-medium">Hybrid Mode</span>
//                 </Link>
//               </li>
//               {/* <li>
//               <a href="favourites.html">
//                 <i className="fas fa-bookmark" />
//                 <span>Favourites</span>
//               </a>
//             </li> */}
//               <li className={`${router.includes("/appointment") && "active"}`}>
//                 <Link href="/user/dashboard/appointment">
//                   <i className="fas fa-bookmark" />
//                   <span className="font-medium">Appointments</span>
//                 </Link>
//               </li>
//               <li
//                 className={`${router.includes("/medicalhistory") && "active"}`}
//               >
//                 <Link href="/user/dashboard/medicalhistory">
//                   <i className="fas fa-bookmark" />
//                   <span className="font-medium">Medical History</span>
//                 </Link>
//               </li>
//               {/* <li>
//               <a href="chat.html">
//                 <i className="fas fa-comments" />
//                 <span>Message</span>
//                 <small className="unread-msg">23</small>
//               </a>
//             </li> */}
//               <li
//                 className={`${router.includes("/profilesettings") && "active"}`}
//               >
//                 <Link href="/user/dashboard/profilesettings">
//                   <i className="fas fa-user-cog" />
//                   <span className="font-medium">Profile Settings</span>
//                 </Link>
//               </li>
//               <li className={`${router.includes("/applydoctor") && "active"}`}>
//                 <Link href="/user/dashboard/applydoctor">
//                   <i className="fas fa-lock" />
//                   <span className="font-medium">Apply Doctor</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#">
//                   <i className="fas fa-sign-out-alt" />
//                   <Logout />
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
