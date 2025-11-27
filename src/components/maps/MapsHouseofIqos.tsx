import MapZoom from "./MapZoom";
import NavLegends from "./NavLegends";

export default function MapsHouseofIqos() {
	return (
		<div className="flex flex-col">
			<MapZoom
				mapFile="house-of-iqos.png"
				iconUrl="icon-houseofiqos"
				title="HOUSE OF IQOS"
				content="Your journey begins here. Register, gear up, and
				step into a rave experience that's smoother,
				faster, and completely hustle-free, because
				the best nights start easy."
			/>
			<NavLegends />
		</div>
	);
}
