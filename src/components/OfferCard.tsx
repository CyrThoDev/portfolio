export interface Offer {
	title: string;
	description: string;
	points: string[];
	cta: string;
	color: string;
}

export default function OfferCard({
	title,
	description,
	points,
	cta,
	color,
}: Offer) {
	return (
		<div className={`p-6 rounded-2xl shadow-md h-full ${color}`}>
			<h2 className="text-xl font-semibold mb-3">{title}</h2>
			<p className="text-sm mb-4">{description.slice(0, 100)}...</p>
			<ul className="text-xs text-gray-600 space-y-1 mb-4 list-disc list-inside">
				{points.slice(0, 3).map((p, i) => (
					<li key={i}>{p}</li>
				))}
			</ul>
			<span className="text-sm underline text-black hover:text-gray-700">
				{cta}
			</span>
		</div>
	);
}
