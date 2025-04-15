import React, { JSX } from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookSquare,
  FaWhatsapp,
} from "react-icons/fa";

interface SocialLink {
  href: string;
  title: string;
  icon: JSX.Element;
}

const socials: SocialLink[] = [
  // { href: "#", title: "Instagram", icon: <FaInstagram /> },
  // { href: "#", title: "Twitter", icon: <FaTwitter /> },
  { href: "#", title: "Facebook", icon: <FaFacebookSquare /> },
  {
    href: "https://www.linkedin.com/company/dreach/",
    title: "Linkedin",
    icon: <FaLinkedinIn />,
  },
  // { href: "#", title: "whatsapp", icon: <FaWhatsapp /> },
];

const FooterIcons: React.FC = () => {
  return (
    <ul className="ftco-footer-social p-2 lg:py-10 pt-8  flex space-x-4">
      {socials.map((social, index) => (
        <li
          key={index}
          className="ftco-animate bg-[#1d1d1e] text-2xl p-3 rounded-full"
        >
          <a
            href={social.href}
            data-toggle="tooltip"
            data-placement="top"
            title={social.title}
            className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterIcons;
