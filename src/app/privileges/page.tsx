"use client";

import Image from "next/image";
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
				{/* <Image
					src="/page-programprivileges.png"
					alt="Page Privileges"
					width={960}
					height={1200}
				/> */}
				{/* buat tambahan video disini dan hapus image */}

				<BacktoMain />
			</div>
		</div>
	);
}
