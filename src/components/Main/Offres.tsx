"use client";
import {
	FaChalkboardTeacher,
	FaBuilding,
	FaLaptopHouse,
	FaCheckCircle,
} from "react-icons/fa";

import { motion } from "framer-motion";

const services = [
	{
		title: "Vous cherchez une formatrice ?",
		icon: <FaChalkboardTeacher className="text-4xl text-themered" />,
		items: [
			"Cours & ateliers",
			"Niveau visé : jusqu'à Bac+2",
			"Ateliers ludiques dans les écoles",
			"Accompagnement de projets étudiants",
			"Préparation aux examens techniques",
		],
	},
	{
		title: "Tu veux un site web ou un renfort en dev ?",
		icon: <FaBuilding className="text-4xl text-themered" />,
		items: [
			"Missions en freelance (à distance ou en présentiel dans les Landes)",
			"Création de fonctionnalités, refonte, intégration",
			"React/NextJs, PHP, Wordpress/Prestashop",
			"Travail avec des équipes ou en autonomie",
		],
	},
	{
		title: "Tu veux découvrir mes projets ?",
		icon: <FaLaptopHouse className="text-4xl text-themered" />,
		items: [
			"Création de sites ou applications mobiles",
			"De la mise en place d'un template au site sur-mesure",
			"Autonomie garantie (formation à la prise en main si besoin)",
		],
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
							className=" rounded-2xl shadow-xl p-6 border hover:scale-105 hover:shadow-xl transition-transform"
						>
							<div className="flex items-center gap-3 mb-4">
								{service.icon}
								<h3 className="text-2xl font-semibold">{service.title}</h3>
							</div>
							<ul className="space-y-2 mt-4">
								<div className="space-y-3 mt-4">
									{service.items.map((item, idx) => (
										<div key={idx} className="flex items-center gap-3">
											<span className="text-themered ">•</span>
											<p className="text-gray-700 text-sm">{item}</p>
										</div>
									))}
								</div>
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
