"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
	mapFile: string;
	iconUrl: string;
	title: string;
	content: string | ReactNode;
	popImage?: string;
	popWidth?: number;
	popHeight?: number;
}

export default function MapZoom({ mapFile, iconUrl, title, content, popImage, popWidth, popHeight }: Props) {
	console.log("maps: ", mapFile);

	const renderContent = () => {
		// Return content directly - React will render both string and ReactNode properly
		return content;
	};

	return (
		<div
			style={{
				backgroundImage: `url(/mapzoom/${mapFile})`,
			}}
			className={`h-[900px] bg-no-repeat 
            bg-cover bg-top rounded-t-[150px] mask-t-from-80% mask-t-to-90%`}
		>
			<div
				className="h-[900px] bg-linear-to-b from-transparent from-0%  to-[#35303f] to-80% 
                flex justify-center-safe"
			>
				<div className="w-[85%] absolute bottom-[38%] font-iqos">
					
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
						<div>
							<div
								className="flex py-5 px-5
									w-50% border border-white
								bg-[#23cfd0]/70 rounded-t-4xl"
							>
								<Image
									src={`/icon/${iconUrl}.png`}
									alt="Icon Stage"
									width={60}
									height={60}
								/>
								<div
									className="flex-1 text-center 
									uppercase text-4xl font-semibold tracking-[2px] mt-2 mr-5 "
								>
									{title}
								</div>
							</div>
							<div
								className="text-center text-2xl py-5 px-15
								bg-gray-200/80 text-gray-950 rounded-b-4xl"
							>
								{renderContent()}
							</div>
						</div>
					)}
					<div className="flex justify-center mt-5">
						<Link href={"/map"}>
							<Image
								src="/btn-close.png"
								alt="Button Close"
								width={60}
								height={60}
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
