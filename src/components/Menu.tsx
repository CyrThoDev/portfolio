import React from "react";
import Link from "next/link";

const Menu = () => {
	return (
		<>
			<div className="flex flex-col text-2xl items-center text-center justify-center lg:justify-end bg-background tablet:flex-row">
				<div className="flex gap-4 my-4 tablet:mr-20 ">
					<Link href="/realisations">Mes réalisations</Link>
					<Link href="/prestations">Vous avez un projet?</Link>
					<Link href="/apropos">A propos</Link>
				</div>
			</div>
		</>
	);
};

export default Menu;
