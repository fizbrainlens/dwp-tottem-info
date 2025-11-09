import Image from "next/image";
import MapZoom from "./MapZoom";
import NavLegends from "./NavLegends";

export default function MapsIqosLand() {
	const content = (
		<div className="flex gap-3 justify-center my-8">
			<div className="text-4xl mt-4">NRG</div>
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
				mapFile="iqos-land.png"
				iconUrl="icon-iqosland"
				title="IQOS LAND"
				content={content}
			/>
			<NavLegends />
		</div>
	);
}
