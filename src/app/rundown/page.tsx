"use client";

import { useSearchParams } from "next/navigation";
import LogoIqos from "@/components/LogoIqos";
import DayOne from "@/components/rundown/DayOne";
import DayThree from "@/components/rundown/DayThree";
import DayTwo from "@/components/rundown/DayTwo";
import MainRundown from "@/components/rundown/MainRundown";

export default function RundownPage() {
	const searchParams = useSearchParams();

	const currentPage = searchParams.get("day");
	return (
		<div
			className="p-10 w-full flex flex-col items-center h-screen
			bg-[url(/bg-tottem-info-home.webp)] bg-cover bg-center text-white font-iqos"
		>
			<div className="flex justify-center mb-10">
				<LogoIqos />
			</div>

			{currentPage === "day1" && <DayOne />}
			{currentPage === "day2" && <DayTwo />}
			{currentPage === "day3" && <DayThree />}
			{(!currentPage ||
				(currentPage !== "day1" &&
					currentPage !== "day2" &&
					currentPage !== "day3")) && <MainRundown />}
		</div>
	);
}
