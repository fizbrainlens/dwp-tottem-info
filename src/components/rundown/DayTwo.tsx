import Image from "next/image";
import BacktoMain from "../BacktoMain";

export default function DayTwo() {
	return (
		<div>
			<Image
				src="/rundown/day2.png"
				alt="Day 2"
				width={880}
				height={1218}
				className="h-auto w-[880px]"
			/>
			<BacktoMain />
		</div>
	);
}
