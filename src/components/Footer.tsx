/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="text-white grid grid-cols-2 items-center bg-black  px-10 py-4 ">
			<div className="">
				<p className="text-white">
					{" "}
					Je suis située à Mimizan dans les Landes mais je suis très à l'aise
					avec le travail à distance et je mettrai tous les outils à votre
					disposition pour que notre collaboration se passe comme si nous étions
					à côté!{" "}
				</p>
			</div>
			<div className="flex flex-col gap-4 items-end">
				<div className="flex flex-row gap-4 justify-center">
					<Link href="https://www.facebook.com/cyriellewebdev/" target="_blank">
						<BsFacebook size="2rem" />
					</Link>
					<Link href="https://www.instagram.com/cyr_webdev" target="_blank">
						<FaInstagramSquare size="2rem" />
					</Link>
				</div>
				<Link href="#">Mentions légales</Link>
			</div>
		</div>
	);
};

export default Footer;
