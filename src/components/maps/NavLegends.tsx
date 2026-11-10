import MapsButton from "@/components/MapsButton";
import { LEGEND_KEYS, LOCATION_BY_KEY } from "./locations";

// Gap in the top border where the "LEGENDS" heading sits.
const HEADING_GAP = 170;
const borderGapMask = {
	maskImage: `linear-gradient(to right, #000 calc(50% - ${HEADING_GAP}px), transparent calc(50% - ${HEADING_GAP}px), transparent calc(50% + ${HEADING_GAP}px), #000 calc(50% + ${HEADING_GAP}px)), linear-gradient(#000, #000)`,
	maskSize: "100% 12px, 100% calc(100% - 12px)",
	maskPosition: "0 0, 0 12px",
	maskRepeat: "no-repeat",
};

export default function NavLegends({ activeKey }: { activeKey?: string }) {
	return (
		<section
			className="fixed bottom-[240px] left-1/2 z-10 w-[min(975px,94vw)] -translate-x-1/2
				rounded-[56px] bg-linear-to-b from-[#05061a]/55 to-[#05040d]/80 px-[15px] pt-[62px] pb-[28px] font-iqos"
		>
			{/* Gradient border (purple → cyan) with a gap behind the heading */}
			<div
				className="pointer-events-none absolute inset-0"
				style={borderGapMask}
			>
				<div
					className="absolute inset-0 rounded-[56px] p-[2px]
						bg-linear-to-r from-tottem-purple via-[#3b3f9e] to-tottem-teal
						shadow-[0_8px_30px_rgb(184_74_217/0.25)]"
					style={{
						WebkitMask:
							"linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
						WebkitMaskComposite: "xor",
						mask: "linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0)",
					}}
				/>
			</div>

			<h3 className="tottem-headline absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[56px] leading-none">
				Legends
			</h3>

			<div className="grid grid-cols-3 gap-x-[22px] gap-y-[22px]">
				{LEGEND_KEYS.map((key) => {
					const item = LOCATION_BY_KEY[key];
					return (
						<MapsButton
							key={key}
							title={item.title}
							iconUrl={item.icon}
							linkUrl={`?page=${key}`}
							active={key === activeKey}
						/>
					);
				})}
			</div>
		</section>
	);
}
