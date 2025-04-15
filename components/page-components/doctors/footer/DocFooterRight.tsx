import React from "react";
import Image from "next/image";

const DocFooterRight = () => {
	return (
		<>
			<div className="xl :w-[55%] lg:w-[40%] hidden lg:block">
				<div className=" w-full h-full flex flex-col justify-center relative ml-[55px]">
					<h1 className=" text-[48px] text-[#1B3C74] font-semibold ">
						Download the
					</h1>
					<h1 className=" text-[48px] text-[#14BEF0] font-semibold">
						Dr. Reach Healthcare <span className="">App</span>
					</h1>
					<Image
						src="/websiteImages/Group 1.png"
						alt=""
						height={500}
						width={300}
						className=" w-[42.94px] h-[42.94px]  absolute top-[130px] -left-10"
					/>

					<Image
						src="/websiteImages/Vector1.png"
						alt=""
						height={500}
						width={300}
						className=" w-[52.35px] h-[95.17px]  absolute top-[230px] -left-[70px]"
					/>

					<p className=" mt-4 text-[14px]">Get the link to download the app</p>

					<div className="xl:w-[65%] h-[45px] flex justify-between mt-4">
						<div className=" w-[75%] h-full flex bg-white dark:bg-[#121212] rounded-md mx-2">
							<div className=" flex h-full w-[15%] justify-center items-center border-r text-[14px] font-bold">
								+91
							</div>
							<input
								type="number"
								name=""
								id=""
								placeholder="Enter phone number"
								className=" placeholder:text-gray-400 placeholder:text-[14px] text-gray-400 text-[14px] rounded-md w-[85%] outline-none px-6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
							/>
						</div>
						<button className="xl:w-[20%] w-[] bg-[#F97316] p-2 xl:p-0 rounded-md text-[15px] text-white font-semibold">
							Send SMS
						</button>{" "}
					</div>
				</div>
			</div>

			{/* for small screens */}

			<div className="m-6 block  sm:p-10 sm:m-10  p-6 border-2 border-white rounded-lg bg-offer lg:hidden">
				<div className=" w-full h-full flex flex-col justify-center relative ">
					<h1 className=" sm:text-[48px] text-[36px]  font-semibold text-white ">
						Download the
					</h1>
					<h1 className=" sm:text-[48px] text-[36px]  gradient-text font-semibold">
						Dr. Reach Healthcare <span className="">App</span>
					</h1>

					<p className=" mt-4 text-white font-semibold text-[14px]">
						Get the link to download the app
					</p>

					<div className="  h-[45px] flex justify-between mt-4">
						<div className=" w-[75%] h-full flex bg-white rounded-md mx-2">
							<div className=" flex h-full w-[15%] justify-center items-center border-r text-[14px] font-bold">
								+91
							</div>
							<input
								type="number"
								name=""
								id=""
								placeholder="Enter phone number"
								className=" placeholder:text-gray-400 placeholder:text-[14px] text-gray-400 text-[14px] rounded-md w-[85%] outline-none px-6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
							/>
						</div>
						<button className="sm:w-[20%] bg-[#F97316] lg:p-2 xl:p-0 rounded-md sm:text-[15px] text-[14px] px-3 text-white font-semibold">
							Send SMS
						</button>{" "}
					</div>
				</div>
			</div>
		</>
	);
};

export default DocFooterRight;
