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
			className={`w-3xl py-16 text-5xl rounded-full font-bold ${className ?? ""}`}
		>
			<Link href={iqosLink}>{iqosLabel}</Link>
		</Button>
	);
}
