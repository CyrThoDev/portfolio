import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Menu from "@/components/Menu";

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
	title: "Cyrielle Thomas - Développeuse web freelance",
	description:
		"Développeuse web freelance et formatrice, je vous accompagne dans la réussite de vos projets numériques.",
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
			</body>
		</html>
	);
}
