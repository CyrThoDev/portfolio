import type { Metadata } from "next";
import { type Offer } from "@/components/OfferCard";
import OfferDetailCard from "@/components/OfferDetailCard";

export const metadata: Metadata = {
	title: "Prestations – Cyrielle Thomas",
	description:
		"Création de sites web WordPress ou sur mesure, accompagnement technique et formation au développement web.",
	openGraph: {
		title: "Prestations – Cyrielle Thomas",
		description:
			"Particuliers, entreprises ou écoles : découvrez mes offres sur mesure pour vos projets web ou vos formations.",
		url: "https://www.cyrielle-webdev.fr/prestations",
		type: "website",
		images: [
			{
				url: "https://www.cyrielle-webdev.fr/og/prestations.png",
				width: 1200,
				height: 630,
				alt: "Prestations de Cyrielle Thomas",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Prestations – Cyrielle Thomas",
		description:
			"Sites vitrines, e-commerce, accompagnement, formation : des prestations pensées pour vos besoins.",
		images: ["https://www.cyrielle-webdev.fr/og/prestations.png"],
	},
};

const offers: Offer[] = [
  {
    title: "Landing Page / One Page",
    color: "bg-[#F4D9C3]",
    description:
      "Un site simple, efficace et rapide à mettre en ligne. Tout est regroupé sur une seule page : présentation, services, témoignages, contact… Parfait pour lancer une activité, annoncer un événement ou présenter un produit sans se perdre dans une arborescence complexe.",
    points: [
      "Contenu clair et structuré",
      "Chargement rapide",
      "Optimisée pour le SEO local",
      "Formulaire de contact inclus",
    ],
    cta: "Que souhaitez-vous mettre en avant ?",
  },
  {
    title: "Site vitrine classique",
    color: "bg-[#F4D9C3]",
    description:
      "Un site structuré avec plusieurs pages pour présenter en détail votre activité, vos services, votre équipe, vos réalisations, etc. Il s’adapte à votre image avec un design personnalisé. Idéal pour construire une présence professionnelle, rassurer vos futurs clients, et développer votre visibilité.",
    points: [
      "Pages : Accueil, À propos, Services, Contact...",
      "Design sur mesure",
      "Optimisation SEO de base",
      "Modules complémentaires possibles : blog, newsletter, agenda, annuaire...",
    ],
    cta: "Parlons de votre projet",
  },
  {
    title: "Site e-commerce",
    color: "bg-[#F4D9C3]",
    description:
      "Une boutique en ligne pour vendre vos produits ou prestations, gérer vos commandes, recevoir les paiements, et suivre votre activité. Je m’occupe de toute la partie technique pour que vous puissiez vous concentrer sur votre offre.",
    points: [
      "Catalogue de produits",
      "Paiement en ligne sécurisé",
      "Gestion des commandes et des stocks",
      "Options avancées : click & collect, code promo, facturation automatique",
    ],
    cta: "Commencez à vendre en ligne",
  },
  {
    title: "Application mobile",
    color: "bg-[#F4D9C3]",
    description:
      "Une application mobile sur mesure pour offrir une vraie expérience utilisateur à tes clients : réservation, suivi, contenu exclusif, messagerie ou notifications… Selon ton besoin, on peut partir sur une web app ou une application native.",
    points: [
      "Compatible mobile/tablette",
      "Réservation, messagerie, suivi, etc.",
      "Progressive Web App ou app native",
      "Idéal pour projets interactifs ou communautaires",
    ],
    cta: "Discutons de votre idée",
  },
];

export default function OffresPage() {
	return (
		<main className="min-h-screen flex flex-col px-10 lg:px-30 py-16 text-gray-800  scroll-smooth">
			<h1 className="text-4xl font-bold mb-10 text-center">
				Mes Offres de Création de Site
			</h1>

			
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  {offers.map((offer, index) => {
    const row = Math.floor(index / 2);
    const col = index % 2;

    // 🎯 Damier desktop
    const isWhiteDesktop =
      (row % 2 === 0 && col === 0) ||
      (row % 2 === 1 && col === 1);

    const desktopColor = isWhiteDesktop
      ? "md:bg-white"
      : "md:bg-[#fdf4f0]";

    // 📱 Alternance mobile simple
    const mobileColor =
      index % 2 === 0 ? "bg-white" : "bg-[#fdf4f0]";

    return (
      <div
        key={index}
        className={`${mobileColor} ${desktopColor} rounded-xl flex flex-col h-full`}
      >
        <OfferDetailCard
          offer={offer}
          reverse={index % 2 === 1}
          bgColor="bg-transparent"
        />
      </div>
    );
  })}
</div>
		</main>
	);
}
