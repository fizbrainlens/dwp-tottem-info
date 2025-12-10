import Image from "next/image";
import Link from "next/link";

export default function BacktoMain() {
	return (
		<div className="absolute z-20 bottom-40 right-0 mt-20">
			<Link href="/">
				<div className="flex justify-end items-center mr-14">
					<div className="uppercase font-iqos text-2xl mr-4 tracking-wider">
						Back to menu
					</div>
					<div>
						<Image
							src="/btn-back.png"
							alt="button back"
							width={80}
							height={80}
						/>
					</div>
				</div>
			</Link>
		</div>
	);
}
