import MapZoom from "./MapZoom";
import NavLegends from "./NavLegends";

export default function MapsStage2() {
	return (
		<div className="flex flex-col">
			<MapZoom
				mapFile="stage-2.png"
				iconUrl="icon-stage"
				title="STAGE 2"
				content="Step into the realm of pure energy where
                uplifting bears and hard dance anthems take
                over. Let the powerfull drops ignite your spirit
                as world-class DJs and nation heroes bring
                unstoppable energy."
				popImage="pop-stage2"
				popHeight={550}
				popWidth={550}
			/>
			<NavLegends />
		</div>
	);
}
