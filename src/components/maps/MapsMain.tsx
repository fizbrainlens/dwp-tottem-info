import MapDwp from "./MapDwp";
import NavLegends from "./NavLegends";

export default function MapsMain() {
	return (
		<div className="flex flex-col">
			<MapDwp />
			<NavLegends />
		</div>
	);
}
