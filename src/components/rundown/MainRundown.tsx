import Image from "next/image";
import Link from "next/link";
import BacktoMain from "../BacktoMain";

export default function MainRundown() {
	return (
		<div className="mt-[20%]">

			<Image
				src="/text-stagerundown.png"
				alt="Stage Rundown"
				width={300}
				height={200}
				className="mx-auto mb-[250px]"
			/>

			<div className="flex w-full gap-8">
				<Link href="/rundown?day=day1">
					<Image
						src="/btn-day1.png"
						alt="Button Day 1"
						width={200}
						height={200}
					/>
				</Link>
				<Link href="/rundown?day=day2">
					<Image
						src="/btn-day2.png"
						alt="Button Day 2"
						width={200}
						height={200}
					/>
				</Link>
				<Link href="/rundown?day=day3">
					<Image
						src="/btn-day3.png"
						alt="Button Day 3"
						width={200}
						height={200}
					/>
				</Link>
			</div>

			<BacktoMain />
		</div>
	);
}
