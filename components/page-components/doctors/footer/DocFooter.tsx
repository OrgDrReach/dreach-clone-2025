import React from "react";
import DocFooterLeft from "./DocFooterLeft";
import DocFooterRight from "./DocFooterRight";

const DocFooter: React.FC = () => {
	return (
		<main>
			<div className={`w-full lg:h-[542px] hidden lg:flex`}>
				<DocFooterLeft />
				<DocFooterRight />
			</div>
			<div className={`lg:hidden flex  mx-auto`}>
				<DocFooterRight />
			</div>
		</main>
	);
};

export default DocFooter;
