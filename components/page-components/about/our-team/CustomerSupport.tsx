import React, { useState } from "react";
import Image from "next/image";
import ImageViewer from "@/components/images/ImageViewer";
const memberData = [
  {
    position: "UI/UX ",
    title: "Rewant Raj",
    imgSrc: "/websiteImages/Rewant v1.1.png",
  },
  {
    position: "UI/UX ",
    title: "Rewant Raj",
    imgSrc: "/websiteImages/Rewant v1.1.png",
  },
  {
    position: "UI/UX ",
    title: "Rewant Raj",
    imgSrc: "/websiteImages/Rewant v1.1.png",
  },
  {
    position: "UI/UX ",
    title: "Rewant Raj",
    imgSrc: "/websiteImages/Rewant v1.1.png",
  },
];

const CustomerSupportPost = ({
  position,
  title,
  imgSrc,
}: {
  position: string;
  title: string;
  imgSrc: string;
}) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <main>
      <div className="sm:w-60 w-44 lg:m-5 m-3 h-auto bg-slate-white shadow-md bg-transparent border-2 border-[#125875] dark:border-[#56d2ff] rounded-md">
        <div
          className="relative rounded-t-md sm:h-60 h-40 image bg-[#4a4950] overflow-hidden cursor-pointer"
          onClick={() => setIsImageOpen(true)}
        >
          <Image
            width={144}
            height={144}
            className="w-full rounded-t-md lg:h-auto  transition-transform duration-300 transform hover:scale-110"
            src={imgSrc}
            layout="responsive"
            alt="leadImage"
          />
          <div className="overlay absolute inset-0 bg-black opacity-0 transition-opacity duration-300"></div>
        </div>
        <div className="p-5 relative text-div">
          <h3 className="text-center font-bold text-[15px] sm:[17px]  lg:text-[20px]">
            {title}
          </h3>
          {/* <h4 className="text-sm font-bold text-orange-500 text-center m-1">{roll}</h4> */}

          <h4 className="text-center m-2 text-[#125875] dark:text-[#56d2ff] text-[12px]  lg:text-base font-bold">
            {position}
          </h4>
        </div>
      </div>
      <ImageViewer isOpen={isImageOpen} onClose={() => setIsImageOpen(false)}>
        <Image
          src={imgSrc}
          alt={title}
          width={800}
          height={800}
          className="max-w-full max-h-[85vh] object-contain rounded-lg"
        />
      </ImageViewer>
    </main>
  );
};

const CustomerSupport = () => (
  <div className="flex justify-center flex-wrap">
    {memberData.map((post, index) => (
      <CustomerSupportPost
        key={index}
        position={post.position}
        title={post.title}
        imgSrc={post.imgSrc}
      />
    ))}
  </div>
);

export default CustomerSupport;
