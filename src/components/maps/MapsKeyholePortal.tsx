import MapZoom from "./MapZoom";
import NavLegends from "./NavLegends";

export default function MapsKeyholePortal() {
	return (
		<div className="flex flex-col">
			<MapZoom
				mapFile="keyhole-portal.png"
				iconUrl="icon-keyholeportal"
				title="KEYHOLE PORTAL"
				content="Find your way, your vide, and your moment.
				Explore the entire festival ground with our Giant
				Map, you ultimate guide to stages, spots, and
				hidden gems across DWP. No worries, you won't 
				get lost in the beat."
				popImage="pop-keyholeportal"
				popHeight={550}
				popWidth={550}
			/>
			<NavLegends />
		</div>
	);
}
