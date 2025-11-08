import LogoIqos from "@/components/LogoIqos";
import MapsMain from "@/components/maps/MapsMain";

export default function MapDwpPage() {
	return (
		<div
			className="p-10 w-full flex flex-col h-screen
			bg-[url(/bg-tottem-page.webp)] bg-cover bg-center text-white "
		>
			<div className="flex justify-center">
				<LogoIqos />
			</div>

			<MapsMain />
		</div>
	);
}
