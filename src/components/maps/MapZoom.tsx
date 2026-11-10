"use client";

import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
	/** File inside /public/mapzoom. Optional: without it only the card is shown. */
	mapFile?: string;
	/** Icon inside /public/icon; ".png" is appended when no extension is given. */
	iconUrl: string;
	title: string;
	content: string | ReactNode;
	popImage?: string;
	popWidth?: number;
	popHeight?: number;
}

export default function MapZoom({
	mapFile,
	iconUrl,
	title,
	content,
	popImage,
	popWidth,
	popHeight,
}: Props) {
	const iconSrc = iconUrl.includes(".")
		? `/icon/${iconUrl}`
		: `/icon/${iconUrl}.png`;

	return (
		<div>
			<div
				style={
					mapFile ? { backgroundImage: `url(/mapzoom/${mapFile})` } : undefined
				}
				className="mx-auto mt-[30px] h-[870px] w-[min(990px,92vw)] rounded-[60px] bg-cover
					bg-position-[center_top_-5rem] bg-no-repeat mask-y-from-85% mask-y-to-100%"
			/>
			<div className="absolute bottom-[45%] left-1/2 w-[85%] -translate-x-1/2 font-iqos">
				{popImage ? (
					<div className="flex justify-center">
						<Image
							src={`/popup/${popImage}.png`}
							alt={title}
							width={popWidth || 800}
							height={popHeight || 700}
						/>
					</div>
				) : (
					<div className="tottem-pill rounded-[48px]! overflow-hidden">
						<div
							className="flex items-center gap-4 bg-linear-to-r from-tottem-purple/70 to-tottem-teal/70
								px-8 py-5"
						>
							<Image src={iconSrc} alt="" width={60} height={60} />
							<div className="mr-[60px] flex-1 text-center text-4xl font-bold tracking-[2px] uppercase">
								{title}
							</div>
						</div>
						<div className="px-15 py-8 text-center text-2xl text-white">
							{content}
						</div>
					</div>
				)}
				<div className="mt-5 flex justify-center">
					<Link
						href="/map"
						aria-label="Close"
						className="tottem-round size-[60px]"
					>
						<X className="size-8" strokeWidth={2.5} />
					</Link>
				</div>
			</div>
		</div>
	);
}
