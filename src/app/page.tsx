import Image from "next/image";
import LogoIqos from "@/components/LogoIqos";
import MainNavButton from "@/components/MainNavButton";

export default function Home() {
	return (
		<div
			className="p-3 w-full flex flex-col items-center h-screen
			bg-[url(/bg-tottem-info.webp)] bg-cover bg-center text-white"
		>
			<div>
				<LogoIqos />
			</div>
			<div className="">
				<Image
					src="/text-discover-your-curiosity.png"
					alt="Discover Your Curiosity"
					width={600}
					height={300}
					className="my-[100px] lg:my-[250px] w-[200px] lg:w-[600px] h-auto"
				/>
			</div>
			<div className="flex flex-col gap-5 lg:gap-10">
				<MainNavButton
					iqosLabel="DWP MAPS"
					iqosLink="#"
					className="bg-[#34303e] text-[#0acecf]"
				/>
				<MainNavButton
					iqosLabel="PROGRAM PRIVILEGES"
					iqosLink="#"
					className="bg-[#ffffff] text-[#34303e]"
				/>
				<MainNavButton
					iqosLabel="STAGE RUNDOWN"
					iqosLink="#"
					className="bg-[#ffffff] text-[#34303e]"
				/>
			</div>
		</div>
	);
}
