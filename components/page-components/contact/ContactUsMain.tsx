import React from "react";
import { GrLocation } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactUsMain = () => {
	return (
		<main>
			<section>
				<div className="h-[354px] border-4 bmage"></div>
				<div className="flex flex-col md:flex-row justify-center items-start gap-7 mt-6 px-6">
					<div className="flex flex-col gap-7">
						<div className="flex flex-col gap-3">
							<h2 className="text-[28px] md:text-[36px] text-[#011334] dark:text-white font-bold">
								Let's talk with us
							</h2>
							<p className="text-[16px] w-full md:w-[360px] text-[#011334] dark:text-white font-thin">
								Questions, comments, or suggestions? Simply fill in the form and
								we'll be in touch shortly.
							</p>
						</div>
						<div className="flex flex-col justify-center items-start gap-3">
							<div className="flex justify-center items-center gap-4 text-[16px] md:text-[18px]">
								<GrLocation className="text-[#125872] text-[24px] md:text-[28px]" />
								<h3 className="text-[#011334] dark:text-white font-semibold w-full md:w-[332px]">
									Shop No. 4, P.C. Sarkar Lane, Cuttack, Odisha 753012
								</h3>
							</div>
							<div className="flex justify-center items-center gap-4 text-[16px] md:text-[18px]">
								<LuPhoneCall className="text-[#125872] text-[24px] md:text-[28px]" />
								<h3 className="text-[#011334] dark:text-white font-semibold">
									+91 123 456 7890
								</h3>
							</div>
							<div className="flex justify-center items-center gap-4 text-[16px] md:text-[18px]">
								<MdOutlineMailOutline className="text-[#125872] text-[24px] md:text-[28px]" />
								<h3 className="text-[#011334] dark:text-white font-semibold">
									Contact@drreach.com
								</h3>
							</div>
						</div>
					</div>
					<div className="border-2 w-full lg:w-[552px] p-6 lg:p-12 shadow-2xl">
						<form className="flex flex-col gap-5">
							<div className="flex flex-col md:flex-row justify-between gap-5">
								<input
									className="border-2 focus:border-[#125872] active:border-[#125872] border-[#828282] rounded-md p-2 w-full md:w-[48%]"
									type="text"
									placeholder="First Name*"
								/>
								<input
									className="border-2 border-[#828282] rounded-md p-2 w-full md:w-[48%]"
									type="text"
									placeholder="Last Name"
								/>
							</div>
							<input
								className="border-2 border-[#828282] rounded-md p-2"
								type="text"
								placeholder="Email*"
							/>
							<input
								className="border-2 border-[#828282] rounded-md p-2"
								type="text"
								placeholder="Phone Number*"
							/>
							<textarea
								className="border-2 border-[#828282] rounded-md p-2"
								placeholder="Message"
								rows={5}></textarea>
							<button className="card text-white rounded-md p-2">Send</button>
						</form>
					</div>
				</div>
				<div className="flex justify-center items-center mt-14 mb-16 px-4 ">
					<div className="w-full lg:w-[1196px] h-auto md:h-[400px] flex flex-col gap-7 md:gap-14 justify-center items-center border-2 rounded-[35px] bg-[#125872] p-6 md:p-0">
						<div className="w-full md:w-[750px] text-center sm:px-20 sm:pb-10 lg:pb-0 lg:px-0">
							<h2 className="text-[28px] lg:text-[36px] text-white">
								Download an app now and the various benefits you will get
								immediately
							</h2>
						</div>
						<div className="flex flex-col md:flex-row gap-5 md:gap-20 w-full md:w-[550px] justify-center">
							<button className="icon-ani w-full md:w-[250px] h-[75px] border-4 border-[white] rounded-full text-[#28C6BC] bg-white">
								Download App
							</button>
							<button className="icon-ani w-full md:w-[250px] h-[75px] border-4 border-[white] rounded-full text-white bg-[#F97316]">
								About App
							</button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default ContactUsMain;
