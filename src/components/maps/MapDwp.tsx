"use client";

import Image from "next/image";
import Link from "next/link";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

type Hotspot = {
	/** Centre of the location, in % of the map image (map-tottem-crop.png). */
	top: number;
	left: number;
	name: string;
	link: string;
};

// Positions measured on /2026/map-tottem-crop.png (2754x1282).
const HOTSPOTS: Hotspot[] = [
	{ top: 31.7, left: 7.3, name: "Registration Booth", link: "?page=regbooth" },
	{ top: 25.5, left: 10.4, name: "Giant Map", link: "?page=giantmap" },
	{
		top: 25,
		left: 13.4,
		name: "Immersive Foyer",
		link: "?page=immersivefoyer",
	},
	{
		top: 26.3,
		left: 17.4,
		name: "Tunnel Experience",
		link: "?page=tunnelexperience",
	},
	{ top: 45.1, left: 8.2, name: "Q-Ride Station", link: "?page=qridestation" },
	{ top: 63, left: 8.3, name: "Q Ride Shelter", link: "?page=qrideshelter" },
	{ top: 29, left: 37.8, name: "Beats & Bus", link: "?page=drumnbus" },
	{ top: 21, left: 50.5, name: "IQOS Land", link: "?page=iqosland" },
	{ top: 19.9, left: 62.5, name: "Penthouse", link: "?page=penthouse" },
	{ top: 25.8, left: 71.5, name: "VVIP Blowfish", link: "?page=vvipblowfish" },
	{ top: 10.7, left: 83.5, name: "Stage 1", link: "?page=stage1" },
	{ top: 55.9, left: 87, name: "Stage 2", link: "?page=stage2" },
	{ top: 75.7, left: 51.8, name: "Stage 3", link: "?page=stage3" },
];

export default function MapDwp() {
	return (
		<TransformWrapper
			initialScale={1}
			minScale={0.5}
			maxScale={3}
			wheel={{ step: 0.1 }}
			pinch={{ step: 5 }}
			doubleClick={{ mode: "reset" }}
			centerOnInit={true}
		>
			<TransformComponent
				wrapperStyle={{ width: "100%", height: "100%" }}
				contentStyle={{ width: "100%", height: "100%" }}
			>
				<div className="mt-[130px] flex w-full justify-center">
					<div className="relative w-[min(990px,92vw)]">
						<Image
							src="/2026/map-tottem-crop.png"
							alt="DWP 2026 Map"
							width={2754}
							height={1282}
							priority
							className="h-auto w-full"
						/>

						{HOTSPOTS.map((spot) => (
							<Link
								key={spot.link}
								href={spot.link}
								aria-label={spot.name}
								style={{ top: `${spot.top}%`, left: `${spot.left}%` }}
								className="absolute z-30 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center"
							>
								<span className="relative flex size-3">
									<span className="absolute inline-flex size-full animate-ping rounded-full bg-tottem-cyan opacity-75" />
								</span>
							</Link>
						))}
					</div>
				</div>
			</TransformComponent>
		</TransformWrapper>
	);
}
