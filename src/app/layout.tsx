import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Menu from "@/components/Menu";
import { SpeedInsights } from "@vercel/speed-insights/next";

const beautiful = localFont({
	src: "../fonts/beautiful.woff2",
	variable: "--font-beautiful",
});
const lato = Lato({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-lato",
	display: "swap",
});

const playfair = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-playfair",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Cyrielle Thomas – Développeuse Web Freelance & Formatrice",
	description:
		"Je crée des sites web modernes et performants pour particuliers, entreprises et établissements de formation. Sites WordPress, sur mesure, e-commerce et accompagnement pédagogique.",
	keywords: [
		"Développeuse web freelance",
		"Formatrice développement web",
		"Site WordPress",
		"Site sur mesure",
		"Next.js",
		"Cyrielle Thomas",
		"Formation web",
		"Création site vitrine",
		"Freelance Landes",
		"Développement web Mimizan",
	],
	openGraph: {
		title: "Cyrielle Thomas – Développeuse Web Freelance & Formatrice",
		description:
			"Sites web sur mesure, accompagnement technique, et formation au développement : découvrez mes services adaptés à vos besoins.",
		url: "https://www.cyrielle-webdev.fr",
		type: "website",
		images: [
			{
				url: "https://www.cyrielle-webdev.fr/og/home.png", // image à créer
				width: 1200,
				height: 630,
				alt: "Cyrielle Thomas – développeuse web freelance",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Cyrielle Thomas – Développeuse Web Freelance & Formatrice",
		description:
			"Création de sites modernes, performants et accessibles. Freelance basée dans les Landes, spécialisée en WordPress, Next.js et formation technique.",
		images: ["https://www.cyrielle-webdev.fr/og/home.png"],
	},
	robots: {
		index: true,
		follow: true,
	},
	authors: [{ name: "Cyrielle Thomas", url: "https://www.cyrielle-webdev.fr" }],
	creator: "Cyrielle Thomas",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="fr"
			className={`${beautiful.variable}  ${lato.variable} ${playfair.variable} bg-themewhite font-lato antialiased`}
		>
			<body>
				<NavBar />
				<Menu />
				{children} <Footer />
				<SpeedInsights />
			</body>
		</html>
	);
}
