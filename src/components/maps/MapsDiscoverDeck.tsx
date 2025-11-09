import MapZoom from "./MapZoom";
import NavLegends from "./NavLegends";

export default function MapsDiscoverDeck() {
	return (
		<div className="flex flex-col">
			<MapZoom
				mapFile="discover-deck.png"
				iconUrl="icon-thediscoverydeck"
				title="DISCOVER DECK"
				content="Experience the festival from a new
				perspective. Perched above the FOH, the
				mezzanine spot offers an exclusive bird's-eye
				view of the main stage, where every beat and 
				light hit differently from above."
			/>
			<NavLegends />
		</div>
	);
}
