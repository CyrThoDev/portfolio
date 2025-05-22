import OfferCard, { type Offer } from "@/components/OfferCard";
import OfferDetailSection from "@/components/OfferDetailSection";

const offers: Offer[] = [
	{
		title: "Landing Page / One Page",
		color: "bg-themered/20",
		description:
			"Un site simple, efficace et rapide à mettre en ligne. Tout est regroupé sur une seule page : présentation, services, témoignages, contact… Parfait pour lancer une activité, annoncer un événement ou présenter un produit sans se perdre dans une arborescence complexe.",
		points: [
			"Contenu clair et structuré",
			"Chargement rapide",
			"Optimisée pour le SEO local",
			"Formulaire de contact inclus",
		],
		cta: "Voir un exemple de landing page",
	},
	{
		title: "Site vitrine classique",
		color: "bg-themered/20",
		description:
			"Un site structuré avec plusieurs pages pour présenter en détail ton activité, tes services, ton équipe, tes réalisations, etc. Il s’adapte à ton image avec un design personnalisé. Idéal pour construire une présence pro, rassurer tes futurs clients, et développer ta visibilité.",
		points: [
			"Pages : Accueil, À propos, Services, Contact...",
			"Design sur mesure",
			"Optimisation SEO de base",
			"Modules complémentaires possibles : blog, newsletter, agenda, annuaire...",
		],
		cta: "Découvrir les options possibles",
	},
	{
		title: "Site e-commerce",
		color: "bg-themered/20",
		description:
			"Une boutique en ligne pour vendre tes produits ou prestations, gérer tes commandes, recevoir les paiements, et suivre ton activité. Je m’occupe de toute la partie technique pour que tu puisses te concentrer sur ton offre.",
		points: [
			"Catalogue de produits",
			"Paiement en ligne sécurisé",
			"Gestion des commandes et des stocks",
			"Options avancées : click & collect, code promo, facturation automatique",
		],
		cta: "Parlons de ta boutique en ligne",
	},
	{
		title: "Application mobile",
		color: "bg-themered/20",
		description:
			"Une application mobile sur mesure pour offrir une vraie expérience utilisateur à tes clients : réservation, suivi, contenu exclusif, messagerie ou notifications… Selon ton besoin, on peut partir sur une web app ou une application native.",
		points: [
			"Compatible mobile/tablette",
			"Réservation, messagerie, suivi, etc.",
			"Progressive Web App ou app native",
			"Idéal pour projets interactifs ou communautaires",
		],
		cta: "Discutons de ton idée d'app",
	},
];

export default function OffresPage() {
	return (
		<main className="min-h-screen flex flex-col px-10 lg:px-30 py-16 text-gray-800  scroll-smooth">
			<h1 className="text-4xl font-bold mb-10 text-center">
				Mes Offres de Création de Site
			</h1>

			<section className="w-full max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
				{offers.map((offer, index) => (
					<a key={index} href={`#offer-${index}`} className="block">
						<OfferCard {...offer} />
					</a>
				))}
			</section>

			{/* Section détails des offres */}
			{offers.map((offer, index) => (
				<OfferDetailSection
					key={index}
					id={`offer-${index}`}
					offer={offer}
					reverse={index % 2 === 1}
				/>
			))}
		</main>
	);
}
