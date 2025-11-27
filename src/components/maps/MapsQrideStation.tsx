import MapZoom from "./MapZoom";
import NavLegends from "./NavLegends";

export default function MapsQrideStation() {
	return (
		<div className="flex flex-col">
			<MapZoom
				mapFile="qride-station.png"
				iconUrl="icon-qride"
				title="Q RIDE SHELTER B"
				content="End your night the smart way. Skip the crowd,
				skip the jam, hop on out dedicated ride service
				with a personal driver ready to take you home
				fast, safe, and hassle-free, exclusively for IQOS users."
			/>
			<NavLegends />
		</div>
	);
}
