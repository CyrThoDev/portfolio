import { realisations } from "@/data/realisationData";
import RealisationCard from "@/components/RealisationCard";
import Link from "next/link";

export default function Page() {
	return (
		<div className="px-10 lg:px-30">
			<h1 className="text-3xl  text-left mt-20 mb-10 font-bold">
				Un aperçu de mes dernières réalisations...
			</h1>
			<div className="flex flex-col gap-10">
				<div className="text-center pt-6">
					<p className="text-lg font-semibold text-gray-800 mb-4">
						Vous avez un projet ? Une question ?
					</p>
					<Link
						href="https://calendly.com/cyriellethomas-siteweb/30min"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block bg-themered text-black px-6 py-3 rounded-xl text-md font-semibold hover:bg-opacity-90 transition-colors"
					>
						Discutons-en!
					</Link>
				</div>
				<div className="space-y-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
					{realisations.map((realisation) => (
						<RealisationCard
							key={realisation.title}
							realisation={realisation}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
