import Image from "next/image";
import BacktoMain from "../BacktoMain";

export default function DayThree() {
	return (
		<div>
			<Image
				src="/rundown/day3.png"
				alt="Day 3"
				width={880}
				height={1218}
				className="h-auto w-[880px]"
			/>
			<BacktoMain />
		</div>
	);
}
