"use client";

import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface Props {
	zoom?: boolean;
}

type PingMap = {
	id: number;
	top: number;
	left: number;
	name: string;
};

export default function MapDwp({ zoom }: Props) {
	const pingMap: PingMap[] = [
		{ id: 1, top: 57, left: 10.5, name: "Registration Booth" },
		{ id: 2, top: 46, left: 26, name: "Tunnel Experience" },
		{ id: 3, top: 44, left: 33.8, name: "Q-RIDE Shelter A" },
		{ id: 4, top: 52, left: 43, name: "Giant Map" },
		{ id: 5, top: 64, left: 58, name: "Q-RIDE Shelter B" },
		{ id: 6, top: 67, left: 80.5, name: "Stage 3" },
		{ id: 7, top: 57, left: 65.7, name: "House of IQOS" },
		{ id: 8, top: 48, left: 62.5, name: "Keyhole Portal" },
		{ id: 9, top: 48, left: 81.5, name: "Beats & Bus" },
		{ id: 10, top: 36.5, left: 57, name: "Stage 2" },
		{ id: 11, top: 34, left: 66, name: "Penthouse" },
		{ id: 12, top: 37.5, left: 73, name: "VVIP Blowfish" },
		{ id: 13, top: 39, left: 83, name: "IQOS Land" },
		{ id: 14, top: 27, left: 82.3, name: "Discovery Deck" },
		{ id: 15, top: 21, left: 67, name: "Stage 1" },
	];

	return zoom === true ? (
		<div>test</div>
	) : (
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
				wrapperStyle={{
					width: "100%",
					height: "100%",
				}}
				contentStyle={{
					width: "100%",
					height: "100%",
				}}
			>
				<div>
					{pingMap.map((ping) => (
						<div
							key={ping.id}
							style={{ top: `${ping.top}%`, left: `${ping.left}%` }}
							className={`absolute z-30 size-3`}
						>
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
							{/* <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span> */}
						</div>
					))}

					<Image
						src={"/map-dwp-main.webp"}
						alt="DWP Map"
						width={2200}
						height={1600}
						className="mt-30 p-5"
					/>

					<Image
						src={"/you-are-here.png"}
						alt="You are here point"
						width={60}
						height={120}
						className="relative z-30 animate-bounce
					-top-60 left-124 transform -translate-x-1/2 -translate-y-1/2"
					/>
				</div>
			</TransformComponent>
		</TransformWrapper>
	);
}
