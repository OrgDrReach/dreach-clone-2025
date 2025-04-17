import React from "react";
import { Metadata } from "next";
import { RNChildProp } from "@/@types/interface/Interface";

export const metadata: Metadata = {
  title: "Dreach.in | Join Our Healthcare Revolution",
  description:
    "Join our mission to transform healthcare through innovative digital solutions.",
};

const layout: React.FC = ({ children }: RNChildProp) => {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
};

export default layout;
