import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiMalt } from "react-icons/si";

const NavBar = () => {
	const email = "cyriellethomas.pro@gmail.com";
	const subject =
		"Demande de renseignements (Cet objet peut être personnalisé)";
	const body =
		"Bonjour,\nJe souhaite en savoir plus sur vos offres. (Ce message peut être personnalisé) ";

	const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	return (
		<div className="flex px-10 py-2 bg-themered justify-between items-center">
			<div className="font-playfair  flex flex-col md:flex-row justify-start gap-4 items-center">
				<Link href="/">
					<Image
						src={logo}
						alt="Logo Cyrielle Developpeur web freelance"
						width={75}
						height={75}
					/>
				</Link>
				<div className="flex flex-row gap-4 text-xl">
					<Link href={mailtoHref} className="font-medium">
						cyriellethomas.pro@gmail.com
					</Link>
					<Link href="tel:0761150913">07 61 15 09 13</Link>
				</div>
			</div>
			<div>
				<div className=" flex flex-row gap-4 items-center">
					<Link href="https://www.instagram.com/cyr_webdev" target="_blank">
						<FaInstagramSquare size="2rem" />
					</Link>
					<Link
						href="https://www.linkedin.com/in/cyrielle-thomas/"
						target="_blank"
					>
						<FaLinkedin size="2rem" />
					</Link>
					<Link href="https://www.instagram.com/cyr_webdev" target="_blank">
						<SiMalt size="3rem" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
