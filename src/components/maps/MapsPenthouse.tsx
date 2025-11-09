import Image from "next/image";
import MapZoom from "./MapZoom";
import NavLegends from "./NavLegends";

export default function MapsPenthouse() {
	const content = (
		<div className="flex gap-3 justify-center my-8 ">
			<div className="text-4xl text-left">
				DIGITAL<br></br>GRAFITTI
			</div>
			<div>
				<Image
					src="/icon/poin/poin-10.png"
					alt="point 10"
					width={80}
					height={80}
				/>
			</div>
			<div className="text-4xl mt-4 ml-3">Points</div>
		</div>
	);

	return (
		<div className="flex flex-col">
			<MapZoom
				mapFile="penthouse.png"
				iconUrl="icon-penthouse"
				title="PENTHOUSE"
				content={content}
			/>
			<NavLegends />
		</div>
	);
}
