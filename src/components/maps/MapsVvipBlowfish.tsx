import MapZoom from "./MapZoom";
import NavLegends from "./NavLegends";

export default function MapsVvipBlowfish() {
	return (
		<div className="flex flex-col">
			<MapZoom
				mapFile="vvip-blowfish.png"
				iconUrl="icon-vvipblowfish"
				title="VVIP BLOWFISH"
				content="Welcome to the most exclusive corner of
				DWP. Sip, mingle and dance in style
				surrounded by an immersive setup curated
				comfort, connection, and celebration."
				popImage="pop-vvipblowfish"
				popHeight={550}
				popWidth={550}
			/>
			<NavLegends />
		</div>
	);
}
