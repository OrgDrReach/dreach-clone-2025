import React from "react";
import { Metadata } from "next";
import { RNChildProp } from "@/@types/interface/Interface";

export const metadata: Metadata = {
  title: "Dreach.in | Contact Us",
  description:
    "Get in touch with us, we are here to help. Contact Dreach.in for any query, feedback or support.",
};

const layout: React.FC = ({ children }: RNChildProp) => {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
};

export default layout;
