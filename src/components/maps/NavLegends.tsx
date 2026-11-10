import MapsButton from "@/components/MapsButton";

/** Legend order follows the 2026 design (3 columns, read left→right). */
const LEGENDS = [
	{ title: "Registration Booth", icon: "icon-regbooth.png", page: "regbooth" },
	{ title: "House of IQOS", icon: "icon-houseofiqos.png", page: "houseofiqos" },
	{
		title: "VVIP Blowfish",
		icon: "icon-vvipblowfish.png",
		page: "vvipblowfish",
	},
	{
		title: "Tunnel Experience",
		icon: "icon-tunnelexperience.png",
		page: "tunnelexperience",
	},
	{ title: "Stage 3", icon: "icon-stage3.png", page: "stage3" },
	{ title: "Penthouse", icon: "icon-penthouse.png", page: "penthouse" },
	{ title: "Q-Ride Station", icon: "icon-qride.png", page: "qridestation" },
	{ title: "Immersive Foyer", icon: "icon-foyer.svg", page: "immersivefoyer" },
	{
		title: "The Discovery Deck",
		icon: "icon-thediscoverydeck.png",
		page: "thediscoverydeck",
	},
	{ title: "Giant Map", icon: "icon-giantmap.png", page: "giantmap" },
	{ title: "Stage 2", icon: "icon-stage.png", page: "stage2" },
	{ title: "Stage 1", icon: "icon-stage.png", page: "stage1" },
	{ title: "Q Ride Shelter", icon: "icon-qride.png", page: "qrideshelter" },
	{ title: "Beats & Bus", icon: "icon-drumnbus.png", page: "drumnbus" },
];

// Gap in the top border where the "LEGENDS" heading sits.
const HEADING_GAP = 170;
const borderGapMask = {
	maskImage: `linear-gradient(to right, #000 calc(50% - ${HEADING_GAP}px), transparent calc(50% - ${HEADING_GAP}px), transparent calc(50% + ${HEADING_GAP}px), #000 calc(50% + ${HEADING_GAP}px)), linear-gradient(#000, #000)`,
	maskSize: "100% 12px, 100% calc(100% - 12px)",
	maskPosition: "0 0, 0 12px",
	maskRepeat: "no-repeat",
};

export default function NavLegends() {
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
				{LEGENDS.map((item) => (
					<MapsButton
						key={item.page}
						title={item.title}
						iconUrl={item.icon}
						linkUrl={`?page=${item.page}`}
					/>
				))}
			</div>
		</section>
	);
}
