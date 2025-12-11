import Image from "next/image";
import BacktoMain from "../BacktoMain";

export default function DayOne() {
	return (
		<div className="w-full flex justify-center">
			<Image src="/rundown/day1.png" alt="Day 1" width={950} height={1600} />
			<BacktoMain />
		</div>
	);
}
