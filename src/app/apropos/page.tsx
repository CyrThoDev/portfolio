import type { Metadata } from "next";
import Link from "next/link";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { LiaLaptopCodeSolid } from "react-icons/lia";

export const metadata: Metadata = {
	title: "À propos – Cyrielle Thomas",
	description:
		"Développeuse web freelance et formatrice passionnée, je conçois des solutions web sur mesure et accessibles, en alliant technique et pédagogie.",
	openGraph: {
		title: "À propos – Cyrielle Thomas",
		description:
			"Découvrez mon parcours, mes valeurs et ma manière de travailler en tant que développeuse et formatrice.",
		url: "https://www.cyrielle-webdev.fr/apropos",
		type: "website",
		images: [
			{
				url: "https://www.cyrielle-webdev.fr/og/apropos.png",
				width: 1200,
				height: 630,
				alt: "À propos de Cyrielle Thomas",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "À propos – Cyrielle Thomas",
		description:
			"Apprenez à me connaître : mon expérience, ma philosophie et mes engagements dans le développement web.",
		images: ["https://www.cyrielle-webdev.fr/og/apropos.png"],
	},
};
export default function Apropos() {
	return (
		<section className="py-16 font-lato px-10 md:px-20">
			<div className="max-w-5xl mx-auto space-y-12">
				{/* Intro */}
				<div>
					<h1 className="text-2xl font-playfair font-bold  mb-4">
						Bienvenue sur mon site, moi c’est Cyrielle !
					</h1>
					<p className="text-lg text-gray-800">
						Développeuse web freelance et formatrice passionnée, je suis animée
						par une seule envie : rendre le web plus clair, plus humain, et plus
						accessible. Codeuse de métier, curieuse de nature, j’aime autant
						structurer une architecture technique que transmettre ce que
						j’apprends.
					</p>
				</div>

				{/* Double casquette */}
				<div className="grid md:grid-cols-2 gap-10">
					<div>
						<h2 className="text-2xl font-semibold mb-2 text-themered font-playfair">
							<LiaLaptopCodeSolid className="text-4xl" />
							Côté freelance
						</h2>
						<p className="text-gray-800">
							Je conçois des sites web sur mesure pour les particuliers, TPE/PME
							et entrepreneurs. J’utilise des outils modernes , toujours au
							service d’un site rapide, fluide et aligné avec vos besoins.
						</p>
					</div>
					<div>
						<h2 className="text-2xl font-semibold mb-2 text-themered font-playfair">
							<LiaChalkboardTeacherSolid className="text-4xl" />
							Côté formatrice
						</h2>
						<p className="text-gray-800">
							J’anime des formations et ateliers ludiques, notamment pour des
							publics débutants. Mon approche : apprendre par la pratique, en
							rendant les choses simples, concrètes… et fun !
						</p>
					</div>
				</div>

				{/* Ma manière de travailler */}
				<div>
					<h2 className="text-2xl font-semibold text-themered mb-3 font-playfair">
						Ma manière de travailler
					</h2>
					<p className="text-gray-800 mb-4">
						Je crois que le bon code commence par une bonne écoute. Avant de
						parler techno, j’écoute vos besoins, vos contraintes, vos idées.
						Ensuite, j’explique, je vulgarise, je propose, et je construis pas à
						pas avec vous.
					</p>
					<ul className="list-disc list-inside text-gray-700">
						<li>Travail structuré et transparent</li>
						<li>Autonomie + conseils sur-mesure</li>
						<li>Un vrai lien humain tout au long du projet</li>
					</ul>
				</div>

				{/* Ce qui me différencie */}
				<div>
					<h2 className="text-2xl font-semibold text-themered mb-3 font-playfair">
						Ce qui me différencie
					</h2>
					<ul className="list-disc list-inside text-gray-700">
						<li>
							Une <strong>double casquette</strong> technique et pédagogique
						</li>
						<li>
							Une <strong>exigence de clarté</strong> dans tout ce que je fais
						</li>
						<li>
							Une <strong>curiosité insatiable</strong> pour la tech, la
							pédagogie et les sciences humaines
						</li>
						<li>
							Une <strong>énergie positive</strong> que mes clients et
							apprenants soulignent souvent
						</li>
					</ul>
				</div>

				{/* Témoignages (placeholder)
				<div>
					<h2 className="text-2xl font-semibold text-themered mb-3">
						Ce qu’on dit de moi
					</h2>
					<blockquote className="text-gray-800 italic border-l-4 border-themered pl-4 mb-3">
						“Cyrielle sait vulgariser le code sans le simplifier. Elle m’a aidé
						à comprendre ce que je voulais, même quand je ne savais pas trop
						l’exprimer.”
					</blockquote>
					<blockquote className="text-gray-800 italic border-l-4 border-themered pl-4">
						“Elle combine expertise technique et vraie bienveillance. Ça change
						tout.”
					</blockquote>
				</div> */}

				{/* CTA final */}
				<div className="text-center pt-6">
					<p className="text-lg font-semibold text-gray-800 mb-4">
						Un projet ? Une question ? Une envie d’apprendre ?
					</p>
					<Link
						href="https://calendly.com/cyriellethomas-siteweb/30min"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block bg-themered text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-opacity-90 transition-colors"
					>
						Discutons-en!
					</Link>
				</div>
			</div>
		</section>
	);
}
