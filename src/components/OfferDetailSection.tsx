import type { Offer } from "./OfferCard";

export default function OfferDetailSection({
	id,
	offer,
	reverse = false,
}: {
	id: string;
	offer: Offer;
	reverse?: boolean;
}) {
	const bgColor = reverse ? "bg-[#fdf4f0]" : "bg-white";
	const textColor = "text-gray-800";

	return (
		<section id={id} className={`py-24 ${bgColor}`}>
			<div
				className={`max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
					reverse ? "md:flex-row-reverse" : ""
				}`}
			>
				{/* Visuel ou Mockup à droite ou gauche */}
				<div className="rounded-xl h-72 bg-[#E19251]/10 flex items-center justify-center text-[#E19251] text-sm shadow-inner">
					📷 Visuel ou mockup à personnaliser
				</div>

				{/* Contenu textuel */}
				<div className={textColor}>
					<h2 className="text-3xl font-bold mb-4">{offer.title}</h2>
					<p className="mb-6 leading-relaxed text-lg">{offer.description}</p>

					{/* Public cible */}
					{offer.title.includes("Landing") && (
						<p className="mb-4 text-sm">
							🔍 <strong>Pour qui :</strong> Indépendants, artisans, thérapeutes
							ou encore événements ponctuels (salons, stages...). Tu veux aller
							à l’essentiel avec un site simple, clair, et percutant.
						</p>
					)}
					{offer.title.includes("vitrine") && (
						<p className="mb-4 text-sm">
							🔍 <strong>Pour qui :</strong> Professions libérales, commerçants,
							TPE, artistes ou associations qui ont besoin d’un site solide,
							rassurant, à leur image.
						</p>
					)}
					{offer.title.includes("e-commerce") && (
						<p className="mb-4 text-sm">
							🔍 <strong>Pour qui :</strong> Tu veux vendre des produits ou
							prestations en ligne et automatiser les paiements, commandes et
							livraisons.
						</p>
					)}
					{offer.title.includes("Application") && (
						<p className="mb-4 text-sm">
							🔍 <strong>Pour qui :</strong> Structures avec une idée de service
							numérique interactif (communauté, réservation, contenu exclusif,
							etc.) accessible sur smartphone.
						</p>
					)}

					{/* Liste des points forts */}
					<ul className="space-y-2 list-disc list-inside text-gray-700 text-base mb-6">
						{offer.points.map((point, index) => (
							<li key={index}>{point}</li>
						))}
					</ul>

					{/* Modules supplémentaires pour site vitrine */}
					{offer.title.includes("vitrine") && (
						<div className="mb-6">
							<h3 className="font-semibold text-base mb-2">
								🔧 Modules supplémentaires disponibles :
							</h3>
							<ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
								<li>Blog ou actualités</li>
								<li>Newsletter avec inscription</li>
								<li>Agenda ou calendrier d'événements</li>
								<li>Annuaire ou répertoire de membres</li>
								<li>Galerie photos/vidéos</li>
								<li>Carte interactive</li>
								<li>Prise de rendez-vous en ligne</li>
							</ul>
						</div>
					)}

					{/* CTA bouton */}
					<button className="bg-[#D16565] text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-[#b65353] transition">
						{offer.cta}
					</button>
				</div>
			</div>
		</section>
	);
}
