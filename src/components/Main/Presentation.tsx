import Image from "next/image";
import cyr from "../../../public/cyr.jpeg";

const Presentation = () => {
	return (
		<div className=" flex flex-col lg:flex-row gap-8 justify-between">
			<section className="flex flex-col gap-4">
				<div className="flex flex-col gap-4">
					<h2 className="font-beautiful text-7xl md:text-9xl ">
						Cyrielle Thomas
					</h2>
					<h1 className="font-playfair text-themered font-semibold text-3xl">
						Développeuse web & formatrice
					</h1>
				</div>
				<h3 className="text-lg  text-themered">
					Pour les entreprises, les particuliers et les écoles
				</h3>
				<h3 className="text-lg max-w-2xl mx-auto">
					Je suis Cyrielle, développeuse web freelance & formatrice jusqu’au
					niveau bac+2. J’accompagne les entreprises, les particuliers et les
					centres de formation dans la réussite de leurs projets numériques ou
					pédagogiques.
				</h3>
			</section>
			<section>
				<Image
					src={cyr}
					alt="Photo Cyrielle"
					width={350}
					height={300}
					className="rounded-3xl"
				/>
			</section>
		</div>
	);
};

export default Presentation;
