"use client";

import BacktoMain from "@/components/BacktoMain";
import LogoIqos from "@/components/LogoIqos";

export default function PrivilegesPage() {
	return (
		<div className="bg-tottem flex h-screen w-full flex-col text-white">
			<div className="flex justify-center">
				<LogoIqos />
			</div>

			<div className="w-full flex flex-col justify-center items-center mt-20">
				<video
					src="/iqos-privileges.mp4"
					autoPlay
					muted
					loop
					playsInline
					className="h-[1150px] max-h-[60vh] w-auto rounded-[40px] object-cover shadow-[0_0_40px_rgb(25_211_214/0.35)]"
				/>

				<BacktoMain />
			</div>
		</div>
	);
}
