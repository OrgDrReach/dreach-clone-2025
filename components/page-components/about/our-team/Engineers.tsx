import React, { useState } from "react";
import Image from "next/image";
import ImageViewer from "@/components/images/ImageViewer";

const memberData = [
  {
    position: "Backend Developer",
    title: " Ranjit Kumar Das",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725373679/RANJIT_KUMAR_DAS_r7emt7.jpg",
  },
  {
    position: "Android Developer",
    title: " Rohan Karn",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725373704/Rohan_Karn_e47vql.jpg",
  },
  {
    position: "Frontend Developer",
    title: "Soumyadip Maity",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725372902/soumyadipmaity_uwc6jg.svg",
  },
  {
    position: "Frontend Developer & UI/UX",
    title: "Shyam Barua",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725373691/shyam_re1pip.jpg",
  },
  {
    position: "Frontend Developer & UI/UX",
    title: "Aniket Rouniyar",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725373692/Aniket_Rouniyar_gg0hda.jpg",
  },
  {
    position: "Full-Stack Developer",
    title: "Sudev Kumar",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725373683/sudev_kumar_dvpihq.jpg",
  },
  {
    position: "Full-Stack Developer",
    title: "Abhik Patra",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725373679/Abhik_Patra_fqecr6.jpg",
  },
  {
    position: "UI/UX",
    title: "Deepika Kumari",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725373687/Deepika_Kumari_f7y9j6.png",
  },
  {
    position: "Visual Designer",
    title: "Ayon Mondal",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725373716/Ayon_Mondal_x1z8pf.jpg",
  },
];

const EngineerPost = ({
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
            className="w-full rounded-t-md lg:h-auto transition-transform duration-300 transform hover:scale-110"
            src={imgSrc}
            layout="responsive"
            alt="leadImage"
          />
          <div className="overlay absolute inset-0 bg-black opacity-0 transition-opacity duration-300"></div>
        </div>
        <div className="p-5 relative text-div">
          <h3 className="text-center font-bold text-[15px] sm:[17px] lg:text-[20px]">
            {title}
          </h3>
          <h4 className="text-center m-2 text-[#125875] dark:text-[#56d2ff] text-[12px] lg:text-base font-bold">
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

const Engineers = () => (
  <div className="flex justify-center flex-wrap">
    {memberData.map((post, index) => (
      <EngineerPost
        key={index}
        position={post.position}
        title={post.title}
        imgSrc={post.imgSrc}
      />
    ))}
  </div>
);

export default Engineers;
