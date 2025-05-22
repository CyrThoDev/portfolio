import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Réalisations – Cyrielle Thomas",
	description:
		"Exemples concrets de projets menés : sites vitrines, e-commerce, projets pédagogiques ou sur mesure.",
	openGraph: {
		title: "Réalisations – Cyrielle Thomas",
		description:
			"Parcourez mes réalisations : du site vitrine aux plateformes pédagogiques, un aperçu de mon savoir-faire.",
		url: "https://www.cyrielle-webdev.fr/realisations",
		type: "website",
		images: [
			{
				url: "https://www.cyrielle-webdev.fr/og/realisations.png",
				width: 1200,
				height: 630,
				alt: "Réalisations de Cyrielle Thomas",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Réalisations – Cyrielle Thomas",
		description:
			"Un aperçu de mes projets web réalisés pour des clients et partenaires, avec une approche personnalisée.",
		images: ["https://www.cyrielle-webdev.fr/og/realisations.png"],
	},
};

function page() {
	return <div>page</div>;
}

export default page;
