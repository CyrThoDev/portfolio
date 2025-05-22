import { realisations } from "@/data/realisationData";
import RealisationCard from "@/components/RealisationCard";

export default function Page() {
	return (
		<div className="px-10 lg:px-30">
			<h1 className="text-3xl  text-left my-20 font-bold">
				Un aperçu de mes dernières réalisations...
			</h1>
			<div className="space-y-10 grid grid-cols-3 gap-8 mb-20">
				{realisations.map((realisation) => (
					<RealisationCard key={realisation.title} realisation={realisation} />
				))}
			</div>
		</div>
	);
}
