"use client";

import Image from "next/image";
import Link from "next/link";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { LOCATIONS } from "./locations";

const HOTSPOTS = LOCATIONS.flatMap((loc) =>
	loc.hotspot
		? [{ ...loc.hotspot, name: loc.title, link: `?page=${loc.key}` }]
		: [],
);

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
