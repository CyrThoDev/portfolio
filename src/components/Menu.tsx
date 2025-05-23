"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Menu = () => {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`sticky top-0 z-50  transition-colors duration-300 ${
				isSticky ? "shadow-md bg-[#D16565]" : ""
			}`}
		>
			<div className="flex flex-col md:flex-row gap-4 text-xl items-center text-center justify-center py-4 tablet:flex-row tablet:justify-end tablet:gap-8 tablet:px-8">
				<Link href="/realisations" className="hover:underline">
					Mes réalisations
				</Link>
				<Link href="/prestations" className="hover:underline">
					Vous avez un projet ?
				</Link>
				<Link href="/apropos" className="hover:underline">
					A propos
				</Link>
			</div>
		</nav>
	);
};

export default Menu;
