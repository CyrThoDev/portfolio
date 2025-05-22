// app/sitemap.xml/route.ts
import { NextResponse } from "next/server";

export async function GET() {
	const baseUrl = "https://www.cyrielle-webdev.fr";

	const staticRoutes = ["", "apropos", "prestations", "realisations"];

	const urls = staticRoutes
		.map((route) => {
			const fullUrl = `${baseUrl}/${route}`;
			const lastMod = new Date().toISOString();
			return `
        <url>
          <loc>${fullUrl}</loc>
          <lastmod>${lastMod}</lastmod>
        </url>`;
		})
		.join("");

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

	return new NextResponse(sitemap, {
		headers: {
			"Content-Type": "application/xml",
		},
	});
}
