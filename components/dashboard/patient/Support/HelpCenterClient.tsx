"use client";

import dynamic from "next/dynamic";

const HelpCenter = dynamic(() => import("./HelpCenter"), { ssr: false });

export default HelpCenter;
