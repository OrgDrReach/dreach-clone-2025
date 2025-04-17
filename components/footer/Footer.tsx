import React from "react";
import Link from "next/link";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import FooterIcons from "./FooterIcons";
import { useTheme } from "next-themes";
const CurrYear = new Date().getFullYear();

const contactInfo = [
  { icon: MdEmail, text: "support@dreach.in", type: "email" },
  { icon: MdPhone, text: "+91 7909053014", type: "phone" },
  {
    icon: MdLocationOn,
    text: "Vill Chirand, Rasalpura, Saran, Chapra, Bihar, India, 841211",
    type: "location",
  },
];

const quickLinks = [
  { name: "About Us", url: "/aboutus" },
  { name: "Services", url: "/services" },
  { name: "Contact Us", url: "/contact" },
  { name: "Blog", url: "#" },
  { name: "Careers", url: "/careers" },
  { name: "Sitemap", url: "/sitemap.xml" },
];

const Footer = () => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <main>
      <footer className="footer">
        <div className="footer-flex">
          <div>
            <div className="">
              <Link href="/">
                <div className="footer-logo">
                  <img src="/logos/DR.ico" alt="Logo" className="h-16 w-16" />
                  <p className="text-[#31ADDB] text-4xl font-semibold italic hidden md:block">
                    Dr.{" "}
                    <span
                      className={`text-transparent bg-gradient-to-r from-[#125872] to-[#135f7a] bg-clip-text`}
                    >
                      Reach
                    </span>
                  </p>
                </div>
              </Link>
            </div>
            <div className="footer-address">
              {contactInfo.map((info, index) => (
                <div className="flex my-3 items-center" key={index}>
                  <info.icon className="text-slate-400 text-3xl mr-4" />
                  <p className="text-slate-300">{info.text}</p>
                </div>
              ))}
            </div>
            <FooterIcons />
          </div>
          <div className=" xl:ml-0">
            <h2 className="font-semibold pt-6 text-center text-neutral-300 text-xl">
              Quick Links
            </h2>
            <div className="p-2 w-32 h-1 border-b-2 border-sky-300"></div>
            <div className="text-gray-400 mt-5 text-center">
              {quickLinks.map((link, index) => (
                <p className="py-1 cursor-pointer hover:text-white" key={index}>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-semibold pt-7 text-neutral-300 text-xl">
              Location
            </h2>
            <div className="h-1 w-40 p-2 border-b-2 border-sky-300"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7187.7961582424305!2d84.81451471116281!3d25.74088387600517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992ae341ff4a0f3%3A0xf3b8cd8558511c7c!2sChirand%2C%20Bihar%20841211!5e0!3m2!1sen!2sin!4v1718205802322!5m2!1sen!2sin"
              width="400"
              height="250"
              loading="lazy"
              className="mt-5"
            ></iframe>
          </div>
        </div>
        <div className="w-full mx-auto py-5 pb-8">
          <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5" />
          <span className="text-sm text-gray-200 flex justify-center text-center dark:text-gray-400">
            © 2024 - {CurrYear} Healthunity Solutions Pvt Ltd | All rights
            reserved.
          </span>
        </div>
      </footer>
      {/* for small screen only */}
      <footer className="block bg-[#061418] lg:hidden p-8 pt-10">
        <div className="   ">
          <img src="/logos/DR.ico" alt="Logo" className=" w-32 mx-auto" />
          <h1 className=" font-bold text-[#f97316] pt-5 text-xl text-center">
            "Global Care, Local Trust"
          </h1>
        </div>

        <div className="flex justify-center">
          <FooterIcons />
        </div>

        <div>
          <div className="pt-4 text-center text-xl font-bold pb-3 text-white ">
            Contact Us
          </div>
          <div>
            <div className={`text-center text-gray-400`}>
              {contactInfo.map((info, index) => (
                <div
                  className="flex my-3 items-center justify-center"
                  key={index}
                >
                  <p className={``}>{info.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-white">
          <h1 className="text-xl pt-6 p-4 font-bold">Quick Links</h1>
          <div>
            <div className="text-gray-400 text-center">
              {quickLinks.map((link, index) => (
                <p className="py-1 cursor-pointer" key={index}>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </Link>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full  mx-auto p-2 sm:py-">
          <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5" />
          <span className="text-sm text-gray-500 flex justify-center text-center dark:text-gray-400">
            © {CurrYear} Healthunity Solutions Pvt Ltd
          </span>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
