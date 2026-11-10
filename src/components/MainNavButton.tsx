import Link from "next/link";

export default function MainNavButton({
	iqosLink,
	iqosLabel,
	className,
}: {
	iqosLink: string;
	iqosLabel: string;
	className?: string;
}) {
	return (
		<Link
			href={iqosLink}
			className={`tottem-pill flex h-[93px] w-[min(815px,85vw)] items-center justify-center
				font-iqos text-[40px] uppercase tracking-wide ${className ?? ""}`}
		>
			{iqosLabel}
		</Link>
	);
}
