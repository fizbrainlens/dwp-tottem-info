"use client";

import LogoIqos from "@/components/LogoIqos";
import MapsMain from "@/components/maps/MapsMain";
import MapsStage1 from "@/components/maps/MapsStage1";
import MapsStage2 from "@/components/maps/MapsStage2";
import { useSearchParams } from "next/navigation";

export default function MapDwpPage() {
	const searchParams = useSearchParams()

	const mapPage = searchParams.get('page')

	return (
		<div
			className="w-full flex flex-col h-screen
			bg-[url(/bg-tottem-page.webp)] bg-cover bg-center text-white "
		>
			<div className="flex justify-center">
				<LogoIqos />
			</div>

			{mapPage === 'stage1' && <MapsStage1 />}
			{mapPage === 'stage2' && <MapsStage2 />}
			{(!mapPage || (mapPage !== 'stage1' && mapPage !== 'stage2')) && <MapsMain />}
		</div>
	);
}
