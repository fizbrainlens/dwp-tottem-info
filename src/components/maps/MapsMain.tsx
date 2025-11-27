import Image from "next/image";
import Link from "next/link";
import MapDwp from "./MapDwp";
import NavLegends from "./NavLegends";

export default function MapsMain() {
	return (
		<div className="flex flex-col">
			<MapDwp />

			<Link href="/" className="absolute z-20 top-260 right-0">
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
			<NavLegends />
		</div>
	);
}
