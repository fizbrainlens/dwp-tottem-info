import Image from "next/image";

export default function MapDwp() {
	return (
		<Image
			src={"/map-dwp-main.png"}
			alt="DWP Map"
			width={1000}
			height={900}
			className="mt-30"
		/>
	);
}
