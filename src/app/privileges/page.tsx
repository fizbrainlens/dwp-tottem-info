"use client";

import BacktoMain from "@/components/BacktoMain";
import LogoIqos from "@/components/LogoIqos";

export default function PrivilegesPage() {
	return (
		<div
			className="w-full flex flex-col h-screen
            bg-[url(/bg-tottem-page.webp)] bg-cover bg-center text-white "
		>
			<div className="flex justify-center">
				<LogoIqos />
			</div>

			<div className="w-full flex flex-col justify-center items-center mt-20">
				<video
					src="/iqos-privileges.mp4"
					width="100%"
					height="100%"
					autoPlay
					muted
					loop
					playsInline
					className="w-[70vw] h-auto object-cover rounded-2xl"
				/>

				<BacktoMain />
			</div>
		</div>
	);
}
