import MapZoom from "./MapZoom";
import NavLegends from "./NavLegends";

// Placeholder until the Immersive Foyer popup / mapzoom assets are delivered.
// When they arrive: add mapFile="immersive-foyer.png" and popImage="pop-immersivefoyer".
export default function MapsImmersiveFoyer() {
	return (
		<div className="flex flex-col">
			<MapZoom
				iconUrl="icon-foyer.svg"
				title="Immersive Foyer"
				content="Step into the Curious Beats world before you enter the main gate."
			/>
			<NavLegends />
		</div>
	);
}
