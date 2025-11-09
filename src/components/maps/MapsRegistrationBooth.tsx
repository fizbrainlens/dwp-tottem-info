import MapZoom from "./MapZoom";
import NavLegends from "./NavLegends";

export default function MapsRegistrationBooth() {
	return (
		<div className="flex flex-col">
			<MapZoom
				mapFile="registration-booth.png"
				iconUrl="icon-regbooth"
				title="REGISTRATION BOOTH"
				content="Your journey begins here. Register, gear up, and
				step into a rave experience that's smoother,
				faster, and completely hustle-free, because
				the best nights start easy."
			/>
			<NavLegends />
		</div>
	);
}
