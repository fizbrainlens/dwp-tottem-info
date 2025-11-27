import Image from "next/image";

interface Props {
	zoom?: boolean;
}

export default function MapDwp({ zoom }: Props) {
	return zoom === true ? (
		<div>test</div>
	) : (
		<div>
		<Image
			src={"/map-dwp-main-v2.png"}
			alt="DWP Map"
			width={1200}
			height={900}
			className="mt-30 p-5"
		/>
		
		<Image 
			src={"/you-are-here.png"}
			alt="You are here point"
			width={60}
			height={120}
			className="relative z-30 animate-bounce
			-top-60 left-124 transform -translate-x-1/2 -translate-y-1/2"
		/>
		</div>
	);
}
