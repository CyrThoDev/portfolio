import Image from "next/image";
import cyr from "../../../public/cyr.jpeg";

const Presentation = () => {
	return (
		<div className=" flex justify-between">
			<section className="flex flex-col gap-4">
				<div className="flex flex-col ">
					<h1 className="font-beautiful text-6xl md:text-9xl ">
						Cyrielle Thomas
					</h1>
					<p className="font-playfair text-themered font-semibold text-3xl">
						Développeuse web & formatrice
					</p>
				</div>
				<p className="text-lg  text-themered">
					Pour les entreprises, les particuliers et les écoles
				</p>
				<p className="text-lg max-w-2xl mx-auto">
					Je suis Cyrielle, développeuse web freelance & formatrice jusqu’au
					niveau bac+2. J’accompagne les entreprises, les particuliers et les
					centres de formation dans la réussite de leurs projets numériques ou
					pédagogiques.
				</p>
			</section>
			<section>
				<Image
					src={cyr}
					alt="Photo Cyrielle"
					width={350}
					height={"auto"}
					className="rounded-3xl"
				/>
			</section>
		</div>
	);
};

export default Presentation;
