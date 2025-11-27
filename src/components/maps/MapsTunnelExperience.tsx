import MapZoom from "./MapZoom";
import NavLegends from "./NavLegends";

export default function MapsTunnelExperience() {
	return (
		<div className="flex flex-col">
			<MapZoom
				mapFile="tunnel-experience.png"
				iconUrl="icon-tunnelexperience"
				title="TUNNEL EXPERIENCE"
				content="Your journey begins here. Register, gear up, and
				step into a rave experience that's smoother,
				faster, and completely hustle-free, because
				the best nights start easy."
			/>
			<NavLegends />
		</div>
	);
}
