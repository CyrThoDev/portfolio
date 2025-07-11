import React from "react";
import Presentation from "./Presentation";
import Offres from "./Offres";

const Main = () => {
	return (
		<div className="py-20 flex flex-col gap-10">
			<Presentation />
			<Offres />
		</div>
	);
};

export default Main;
