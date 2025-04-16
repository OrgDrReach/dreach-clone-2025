"use client";

import React from "react";
import dynamic from "next/dynamic";

const ChartWrapper = dynamic(() => import("./ChartWrapper"), { ssr: false });
const TrendChart = dynamic(() => import("./TrendChart"), { ssr: false });

const TrendAnalysis: React.FC = () => {
	return (
		<div className="h-[400px] w-full bg-white rounded-lg p-4 shadow-md">
			<ChartWrapper>
				<TrendChart />
			</ChartWrapper>
		</div>
	);
};

export default TrendAnalysis;
