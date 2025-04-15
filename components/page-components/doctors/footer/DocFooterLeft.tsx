import Image from "next/image";

const DocFooterLeft = () => {
	return (
		<div className="xl:w-[40%] lg:w-[50%] relative lg:block hidden ">
			<div className=" ">
				<Image
					src="/websiteImages/SeekPng 1.png"
					alt=""
					height={500}
					width={300}
					className="w-[302px] h-[427px] absolute bottom-0 right-[150px] z-10"
				/>
				<Image
					src="/websiteImages/image 2.png"
					alt=""
					height={465}
					width={285}
					className=" absolute bottom-0 right-[156.99px] rounded-t-md z-10"
				/>
			</div>

			<div className="">
				<Image
					src="/websiteImages/SeekPng 2.png"
					alt=""
					height={500}
					width={300}
					className="w-[302px] h-[503px] absolute top-10 right-[50px]"
				/>
				<Image
					src="/websiteImages/image 2.png"
					alt=""
					height={465}
					width={285}
					className=" absolute top-[77px] right-[56.99px] rounded-t-md h-[465px] w-[285px]"
				/>
			</div>
		</div>
	);
};

export default DocFooterLeft;
