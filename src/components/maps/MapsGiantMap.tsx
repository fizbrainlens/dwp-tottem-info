import MapZoom from "./MapZoom";
import NavLegends from "./NavLegends";

export default function MapsGiantMap() {
	return (
		<div className="flex flex-col">
			<MapZoom
				mapFile="giant-map.png"
				iconUrl="icon-giantmap"
				title="GIANT MAP"
				content="Find your way, your vide, and your moment.
				Explore the entire festival ground with our Giant
				Map, you ultimate guide to stages, spots, and
				hidden gems across DWP. No worries, you won't 
				get lost in the beat."
			/>
			<NavLegends />
		</div>
	);
}
