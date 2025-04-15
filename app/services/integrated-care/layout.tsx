import React from "react";
import { RNChildProp } from "@/@types/interface/Interface";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrated Care | Dreach.in",
  description: "A new approach to integrated care facility",
};

const layout: React.FC<RNChildProp> = ({ children }: RNChildProp) => {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
};

export default layout;
