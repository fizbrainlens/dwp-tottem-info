"use client";

import { useSearchParams } from "next/navigation";
import LogoIqos from "@/components/LogoIqos";
import LocationDetail from "@/components/maps/LocationDetail";
import { LOCATION_BY_KEY } from "@/components/maps/locations";
import MapsMain from "@/components/maps/MapsMain";

export default function MapDwpPage() {
	const searchParams = useSearchParams();
	// `?page=<key>` → location popup; unknown/missing keys fall back to the overview.
	const location = LOCATION_BY_KEY[searchParams.get("page") ?? ""];

	return (
		<div className="bg-tottem flex h-screen w-full flex-col text-white">
			<div className="relative z-10 flex justify-center">
				<LogoIqos />
			</div>

			{location ? <LocationDetail location={location} /> : <MapsMain />}
		</div>
	);
}
