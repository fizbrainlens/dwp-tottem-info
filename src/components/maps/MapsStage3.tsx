import MapZoom from "./MapZoom";
import NavLegends from "./NavLegends";

export default function MapsStage3() {
	return (
		<div className="flex flex-col">
			<MapZoom
				mapFile="stage-3.png"
				iconUrl="icon-stage3"
				title="STAGE 3"
				content="Step into the realm of pure energy where
                uplifting bears and hard dance anthems take
                over. Let the powerfull drops ignite your spirit
                as world-class DJs and nation heroes bring
                unstoppable energy."
			/>
			<NavLegends />
		</div>
	);
}
