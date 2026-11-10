import Image from "next/image";
import Link from "next/link";

interface Props {
	title: string;
	/** File name inside /public/icon (with extension). */
	iconUrl: string;
	linkUrl: string;
	/** Highlight as the currently opened location (filled cyan). */
	active?: boolean;
	className?: string;
}

export default function MapsButton({
	title,
	iconUrl,
	linkUrl,
	active,
	className,
}: Props) {
	return (
		<Link
			href={linkUrl}
			aria-current={active ? "page" : undefined}
			className={`${active ? "tottem-pill-active" : "tottem-pill"} flex h-[78px] items-center gap-2 pr-5 pl-6 font-iqos ${className ?? ""}`}
		>
			<span className="flex w-[52px] flex-none justify-center">
				<Image
					src={`/icon/${iconUrl}`}
					width={48}
					height={48}
					alt=""
					className={`h-auto max-h-[44px] w-auto max-w-[48px] ${active ? "brightness-0 invert" : ""}`}
				/>
			</span>
			<span className="flex-1 text-center text-[21px] leading-[1.15] font-bold uppercase">
				{title}
			</span>
		</Link>
	);
}
