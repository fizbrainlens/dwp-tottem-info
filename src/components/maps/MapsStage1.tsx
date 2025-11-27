import MapZoom from "./MapZoom";
import NavLegends from "./NavLegends";

export default function MapsStage1() {
	return (
		<div className="flex flex-col mt-20 font-iqos">
			<MapZoom
				mapFile="stage-1.png"
				iconUrl="icon-stage"
				title="STAGE 1"
				content="
                Lose yourselft in the electrifying pulse of 
                electronic dance music. Feel the rhythm come
                alive at the iconic garuda stage and immerse
                in stunning performance by local, national, and
                international electronic music artis."
				popImage="pop-stage1"
				popHeight={550}
				popWidth={550}
			/>
			<NavLegends />
		</div>
	);
}
