"use client";

import Image from "next/image";
import LogoIqos from "@/components/LogoIqos";
import Link from "next/link";

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
				<Image
					src="/page-programprivileges.png"
					alt="Page Privileges"
					width={940}
					height={1600}
				/>

				<Link href="/" className="self-end">
					<div className="flex justify-center items-center mr-14 mt-12">
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
			</div>
		</div>
	);
}
