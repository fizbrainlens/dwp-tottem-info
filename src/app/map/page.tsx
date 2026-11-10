"use client";

import { useSearchParams } from "next/navigation";
import type { ComponentType } from "react";
import LogoIqos from "@/components/LogoIqos";
import MapsDiscoverDeck from "@/components/maps/MapsDiscoverDeck";
import MapsDrumnBus from "@/components/maps/MapsDrumnBus";
import MapsGiantMap from "@/components/maps/MapsGiantMap";
import MapsHouseofIqos from "@/components/maps/MapsHouseofIqos";
import MapsImmersiveFoyer from "@/components/maps/MapsImmersiveFoyer";
import MapsIqosLand from "@/components/maps/MapsIqosLand";
import MapsKeyholePortal from "@/components/maps/MapsKeyholePortal";
import MapsMain from "@/components/maps/MapsMain";
import MapsPenthouse from "@/components/maps/MapsPenthouse";
import MapsQrideShelter from "@/components/maps/MapsQrideShelter";
import MapsQrideStation from "@/components/maps/MapsQrideStation";
import MapsRegistrationBooth from "@/components/maps/MapsRegistrationBooth";
import MapsStage1 from "@/components/maps/MapsStage1";
import MapsStage2 from "@/components/maps/MapsStage2";
import MapsStage3 from "@/components/maps/MapsStage3";
import MapsTunnelExperience from "@/components/maps/MapsTunnelExperience";
import MapsVvipBlowfish from "@/components/maps/MapsVvipBlowfish";

/** `?page=<key>` → location view. Unknown/missing keys fall back to MapsMain. */
const MAP_PAGES: Record<string, ComponentType> = {
	stage1: MapsStage1,
	stage2: MapsStage2,
	stage3: MapsStage3,
	vvipblowfish: MapsVvipBlowfish,
	thediscoverydeck: MapsDiscoverDeck,
	qrideshelter: MapsQrideShelter,
	qridestation: MapsQrideStation,
	regbooth: MapsRegistrationBooth,
	giantmap: MapsGiantMap,
	drumnbus: MapsDrumnBus,
	iqosland: MapsIqosLand,
	penthouse: MapsPenthouse,
	houseofiqos: MapsHouseofIqos,
	tunnelexperience: MapsTunnelExperience,
	keyholeportal: MapsKeyholePortal,
	immersivefoyer: MapsImmersiveFoyer,
};

export default function MapDwpPage() {
	const searchParams = useSearchParams();
	const mapPage = searchParams.get("page") ?? "";
	const View = MAP_PAGES[mapPage] ?? MapsMain;

	return (
		<div className="bg-tottem flex h-screen w-full flex-col text-white">
			<div className="flex justify-center">
				<LogoIqos />
			</div>

			<View />
		</div>
	);
}
