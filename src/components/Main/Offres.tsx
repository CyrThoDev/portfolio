"use client";
import { FaChalkboardTeacher, FaBuilding, FaLaptopHouse } from "react-icons/fa";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
	{
		title: "Vous cherchez une formatrice ?",
		icon: <FaChalkboardTeacher className="text-6xl text-themered" />,
		items: [
			"Cours & ateliers",
			"Niveau visé : jusqu'à Bac+2",
			"Ateliers ludiques dans les écoles",
			"Accompagnement de projets étudiants",
			"Préparation aux examens techniques",
		],
		link: "https://calendly.com/cyriellethomas-siteweb/30min",
	},
	{
		title: "Vous avez besoin d'un renfort dans votre équipe de dev?",
		icon: <FaBuilding className="text-6xl text-themered" />,
		items: [
			"Missions en freelance (à distance ou en présentiel dans les Landes)",
			"Création de fonctionnalités, refonte, intégration",
			"React/NextJs, PHP, Wordpress/Prestashop",
			"Travail avec des équipes ou en autonomie",
		],
		link: "https://calendly.com/cyriellethomas-siteweb/30min",
	},
	{
		title: "Vous avez un projet de site ou d'application mobile?",
		icon: <FaLaptopHouse className="text-6xl text-themered" />,
		items: [
			"Création de sites ou applications mobiles",
			"De la mise en place d'un template au site sur-mesure",
			"Autonomie garantie (formation à la prise en main si besoin)",
		],
		link: "https://calendly.com/cyriellethomas-siteweb/30min",
	},
];

const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.6, duration: 0.8, type: "spring" },
	}),
};

export default function Offres() {
	return (
		<section className="py-16 font-lato">
			<div className="">
				<div className="grid gap-10 md:grid-cols-3">
					{services.map((service, i) => (
						<motion.div
							key={i}
							custom={i}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={cardVariants}
							className="flex flex-col justify-between h-full rounded-2xl shadow-xl p-6 hover:scale-105 hover:shadow-xl transition-transform"
						>
							<div className="flex flex-col items-center gap-3 mb-4">
								<p>{service.icon}</p>
								<h3 className="text-2xl font-semibold font-playfair h-[100px] text-center">
									{service.title}
								</h3>
							</div>

							<div className="flex flex-col flex-grow justify-between">
								<ul className="space-y-3 mt-4">
									{service.items.map((item, idx) => (
										<div key={idx} className="flex items-center gap-3">
											<span className="text-themered">•</span>
											<p className="text-gray-700 text-sm">{item}</p>
										</div>
									))}
								</ul>

								{service.link && (
									<div className="mt-auto pt-6 text-center">
										<Link
											href={service.link}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-block bg-themered text-white px-6 py-2 rounded-xl text-sm font-semibold hover:bg-opacity-90 transition-colors"
										>
											Discutons de votre projet
										</Link>
									</div>
								)}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
