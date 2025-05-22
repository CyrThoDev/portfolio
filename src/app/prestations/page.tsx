export default function OffresPage() {
	return (
		<>
			<main className="max-w-6xl mx-auto px-6 py-16 text-gray-800">
				<h1 className="text-4xl font-bold mb-10 text-center">
					Mes Offres de Création de Site
				</h1>

				<section className="grid md:grid-cols-3 gap-8">
					<OfferCard
						title="Site Express"
						color="bg-green-100"
						description="Un site vitrine rapide à mettre en ligne avec un template WordPress personnalisé. Idéal pour les indépendants qui démarrent."
						points={[
							"1 à 5 pages",
							"Personnalisation rapide",
							"Template prêt à l'emploi",
							"Mise en ligne sous 7 jours",
						]}
						cta="Découvrir"
					/>
					<OfferCard
						title="Site WordPress Personnalisé"
						color="bg-blue-100"
						description="Un site plus flexible et évolutif, créé à partir d'un thème WordPress ajusté à ton image."
						points={[
							"Charte graphique personnalisée",
							"Fonctionnalités spécifiques",
							"Blog, prise de rendez-vous, newsletter",
							"Formation incluse",
						]}
						cta="Voir les exemples"
					/>
					<OfferCard
						title="Site sur-mesure codé"
						color="bg-purple-100"
						description="Un site codé de A à Z avec Next.js pour un rendu unique, performant et scalable."
						points={[
							"Design sur mesure",
							"Performances & SEO optimisés",
							"Intégration API ou CMS Headless",
							"Idéal projets ambitieux",
						]}
						cta="Parlons de votre projet"
					/>
				</section>
			</main>
		</>
	);
}

function OfferCard({
	title,
	description,
	points,
	cta,
	color,
}: {
	title: string;
	description: string;
	points: string[];
	cta: string;
	color: string;
}) {
	return (
		<div className={`p-6 rounded-2xl shadow-md ${color}`}>
			<h2 className="text-2xl font-semibold mb-4">{title}</h2>
			<p className="mb-4">{description}</p>
			<ul className="mb-6 list-disc list-inside text-sm text-gray-700 space-y-1">
				{points.map((p, i) => (
					<li key={i}>{p}</li>
				))}
			</ul>
			<button className="text-sm font-medium text-white bg-black px-4 py-2 rounded-md hover:bg-gray-900 transition">
				{cta}
			</button>
		</div>
	);
}
