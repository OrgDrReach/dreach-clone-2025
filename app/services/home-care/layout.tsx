import React from "react";
import { RNChildProp } from "@/@types/interface/Interface";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Care | Dreach.in",
  description: "We provide home care services for elderly and disabled people.",
};

const layout: React.FC<RNChildProp> = ({ children }: RNChildProp) => {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
};

export default layout;
