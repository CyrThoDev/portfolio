// app/sitemap.xml/route.ts
import type { MetadataRoute } from "next";

export async function GET(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = "https://www.cyrielle-webdev.fr";

	const staticRoutes = ["", "apropos", "prestations", "realisations"];

	const urls = staticRoutes.map((route) => ({
		url: `${baseUrl}/${route}`,
		lastModified: new Date().toISOString(),
	}));

	return urls;
}
