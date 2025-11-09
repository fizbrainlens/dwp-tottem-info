import Image from "next/image";
import MapZoom from "./MapZoom";
import NavLegends from "./NavLegends";

export default function MapsDrumnBus() {
	const content = (
		<div className="flex gap-3 justify-center my-8">
			<div>
				<Image
					src="/icon/poin/poin-20.png"
					alt="point 20"
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
				mapFile="drumnbus.png"
				iconUrl="icon-drumnbus"
				title="DRUM AND BUS"
				content={content}
			/>
			<NavLegends />
		</div>
	);
}
