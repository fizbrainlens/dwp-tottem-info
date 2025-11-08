import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
	title: string;
	iconUrl: string;
	linkUrl: string;
}

export default function MapsButton({ title, iconUrl, linkUrl }: Props) {
	return (
		<Button
			asChild
			variant={"ghost"}
			className="py-9 px-5 w-[300px] border 
        rounded-full hover:bg-slate-600 hover:text-white"
		>
			<Link href={linkUrl} className="flex gap-2 items-center">
				<div className="w-14 flex-none pl-2">
					<Image src={`/icon/${iconUrl}`} width={50} height={50} alt={title} />
				</div>
				<div className="text-2xl flex-1 text-center uppercase text-wrap">
					{title}
				</div>
			</Link>
		</Button>
	);
}
