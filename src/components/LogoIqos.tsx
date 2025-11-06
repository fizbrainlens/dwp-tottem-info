import Image from "next/image";

export default function LogoIqos() {
	return (
		<Image
			src="/logo-tottem.png"
			alt="Tottem Logo"
			width={1000}
			height={900}
			priority
			className="mt-[50px] lg:mt-[100px] w-[500px] lg:w-[900px]"
		/>
	);
}
