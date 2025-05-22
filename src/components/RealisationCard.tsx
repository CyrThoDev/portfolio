import Image from "next/image";

type Realisation = {
	title: string;
	status: string;
	url: string;
	image: string;
	need: string;
	features: string[];
	technologies: string[];
};

export default function RealisationCard({
	realisation,
}: { realisation: Realisation }) {
	const { title, status, url, image, need, features, technologies } =
		realisation;

	const isOnline = status.toLowerCase() === "en ligne";

	return (
		<div className="flex flex-col h-full p-6 gap-6 rounded-2xl bg-themewhite shadow-md transition-shadow duration-300">
			{/* image */}
			<div className="overflow-hidden rounded-xl">
				<Image
					src={image}
					alt={`Aperçu du site ${title}`}
					width={400}
					height={400}
					className="object-cover w-full h-auto"
				/>
			</div>

			{/* contenu */}
			<div className="flex flex-col flex-1 justify-between">
				{/* Haut */}
				<div className="flex flex-col gap-2">
					<div className="flex items-center justify-between">
						<h3 className="text-xl font-semibold font-playfair text-themered">
							{title}
						</h3>
						<span
							className={`text-xs px-2 py-1 rounded-full font-medium tracking-wide ${
								isOnline
									? "bg-green-100 text-green-700"
									: "bg-yellow-100 text-yellow-700"
							}`}
						>
							{status}
						</span>
					</div>

					<p className="text-sm text-gray-700">{need}</p>

					<ul className="text-sm text-gray-600 list-disc list-inside mt-2 space-y-1">
						{features.map((f) => (
							<li key={f}>{f}</li>
						))}
					</ul>
				</div>

				{/* Bas aligné */}
				<div className="mt-auto pt-4 flex flex-col gap-4">
					<div className="flex flex-wrap gap-2">
						{technologies.map((tech) => (
							<span
								key={tech}
								className="text-xs px-3 py-1 rounded-full bg-themered text-white"
							>
								{tech}
							</span>
						))}
					</div>

					{url && (
						<a
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm font-medium text-themered underline underline-offset-4 hover:no-underline"
						>
							Voir le site
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
