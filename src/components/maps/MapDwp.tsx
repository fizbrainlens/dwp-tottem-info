import Image from "next/image";

interface Props {
	zoom?: boolean;
}

export default function MapDwp({ zoom }: Props) {
	return zoom === true ? (
		<div>test</div>
	) : (
		<Image
			src={"/map-dwp-main.png"}
			alt="DWP Map"
			width={1200}
			height={900}
			className="mt-30 p-5"
		/>
	);
}
