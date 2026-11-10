import Image from "next/image";

export default function LogoIqos() {
	return (
		<Image
			src="/2026/logo-tottem-2026.png"
			alt="Curious Beats x DWP 2026 Jakarta"
			width={2236}
			height={462}
			priority
			className="mt-[95px] h-auto w-[min(840px,78vw)]"
		/>
	);
}
