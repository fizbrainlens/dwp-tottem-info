"use client";

import Image from "next/image";
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

			<div className="w-full flex justify-center mt-15">
				<Image
					src="/page-programprivileges.png"
					alt="Page Privileges"
					width={880}
					height={1600}
				/>
			</div>
		</div>
	);
}
