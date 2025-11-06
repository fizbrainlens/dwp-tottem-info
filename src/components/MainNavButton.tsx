import Link from "next/link";
import { Button } from "./ui/button";

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
		<Button
			asChild
			variant={"link"}
			className={`w-[300px] lg:w-3xl py-8 lg:py-16 text-xl lg:text-5xl rounded-full font-bold ${className ?? ""}`}
		>
			<Link href={iqosLink}>{iqosLabel}</Link>
		</Button>
	);
}
