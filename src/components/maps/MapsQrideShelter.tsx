import Image from "next/image";
import MapZoom from "./MapZoom";
import NavLegends from "./NavLegends";

export default function MapsQrideShelter() {
	const content = (
		<div className="flex gap-3 justify-center my-8">
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
				mapFile="qride-shelter.png"
				iconUrl="icon-qride"
				title="QRIDE SHELTER"
				content={content}
			/>
			<NavLegends />
		</div>
	);
}
