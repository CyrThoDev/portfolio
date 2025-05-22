import React from "react";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="px-6 sm:px-10 lg:px-30 text-white bg-black py-6">
			<div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-6">
				<div className="text-md">
					<p>
						Je suis située à Mimizan dans les Landes mais je suis très à
						l&#39;aise avec le travail à distance et je mettrai tous les outils
						à votre disposition pour que notre collaboration se passe comme si
						nous étions à côté !
					</p>
				</div>

				<div className="flex flex-col gap-4 items-center lg:items-end">
					<div className="flex gap-4 justify-center">
						<Link
							href="https://www.facebook.com/cyriellewebdev/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BsFacebook size="2rem" />
						</Link>
						<Link
							href="https://www.instagram.com/cyr_webdev"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagramSquare size="2rem" />
						</Link>
					</div>
					<Link href="#" className="underline">
						Mentions légales
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
