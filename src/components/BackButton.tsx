import { Undo2 } from "lucide-react";
import Link from "next/link";

interface Props {
	href?: string;
	label?: string;
	className?: string;
}

/** "BACK TO MENU" label + round cyan/purple button, as in the 2026 design. */
export default function BackButton({
	href = "/",
	label = "Back to menu",
	className,
}: Props) {
	return (
		<Link
			href={href}
			className={`flex items-center justify-end gap-4 font-iqos ${className ?? ""}`}
		>
			<span className="text-[20px] uppercase tracking-[0.3em] text-white">
				{label}
			</span>
			<span className="tottem-round size-[66px]">
				<Undo2 className="size-8" strokeWidth={2.5} />
			</span>
		</Link>
	);
}
