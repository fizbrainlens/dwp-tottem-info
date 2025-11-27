"use client";

import { useSearchParams } from "next/navigation";
import LogoIqos from "@/components/LogoIqos";
import MapsDiscoverDeck from "@/components/maps/MapsDiscoverDeck";
import MapsDrumnBus from "@/components/maps/MapsDrumnBus";
import MapsGiantMap from "@/components/maps/MapsGiantMap";
import MapsHouseofIqos from "@/components/maps/MapsHouseofIqos";
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

export default function MapDwpPage() {
	const searchParams = useSearchParams();

	const mapPage = searchParams.get("page");

	return (
		<div
			className="w-full flex flex-col h-screen
			bg-[url(/bg-tottem-page.webp)] bg-cover bg-center text-white "
		>
			<div className="flex justify-center">
				<LogoIqos />
			</div>

			{mapPage === "stage1" && <MapsStage1 />}
			{mapPage === "stage2" && <MapsStage2 />}
			{mapPage === "stage3" && <MapsStage3 />}
			{mapPage === "vvipblowfish" && <MapsVvipBlowfish />}
			{mapPage === "thediscoverydeck" && <MapsDiscoverDeck />}
			{mapPage === "qrideshelter" && <MapsQrideShelter />}
			{mapPage === "qridestation" && <MapsQrideStation />}
			{mapPage === "regbooth" && <MapsRegistrationBooth />}
			{mapPage === "giantmap" && <MapsGiantMap />}
			{mapPage === "drumnbus" && <MapsDrumnBus />}
			{mapPage === "iqosland" && <MapsIqosLand />}
			{mapPage === "penthouse" && <MapsPenthouse />}
			{mapPage === "houseofiqos" && <MapsHouseofIqos />}
			{mapPage === "tunnelexperience" && <MapsTunnelExperience />}
			{mapPage === "keyholeportal" && <MapsKeyholePortal />}
			{(!mapPage ||
				(mapPage !== "stage1" &&
					mapPage !== "stage2" &&
					mapPage !== "stage3" &&
					mapPage !== "vvipblowfish" &&
					mapPage !== "thediscoverydeck" &&
					mapPage !== "qrideshelter" &&
					mapPage !== "qridestation" &&
					mapPage !== "regbooth" &&
					mapPage !== "giantmap" &&
					mapPage !== "drumnbus" &&
					mapPage !== "iqosland" &&
					mapPage !== "penthouse" &&
					mapPage !== "houseofiqos" &&
					mapPage !== "tunnelexperience" &&
					mapPage !== "keyholeportal")) && <MapsMain />}
		</div>
	);
}
