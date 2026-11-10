import BackButton from "@/components/BackButton";
import MapDwp from "./MapDwp";
import NavLegends from "./NavLegends";

export default function MapsMain() {
	return (
		<div className="flex flex-col">
			<MapDwp />

			<div className="absolute top-[1015px] right-[55px] z-20">
				<BackButton />
			</div>

			<NavLegends />
		</div>
	);
}
