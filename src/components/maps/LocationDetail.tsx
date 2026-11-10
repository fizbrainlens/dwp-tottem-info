import Image from "next/image";
import Link from "next/link";
import type { Location } from "./locations";
import NavLegends from "./NavLegends";

/* ---- Zoomed-map geometry (1080×1920 kiosk) ---------------------------- */
const MAP_RATIO = 1282 / 2754; // height / width of map-tottem-crop.png
const BASE_WIDTH = 990; // main-map width on the overview page
const ZOOM = 4;
const MAP_W = BASE_WIDTH * ZOOM;
const MAP_H = MAP_W * MAP_RATIO;
const AREA_TOP = 380; // zoomed-map window, in page px
const AREA_HEIGHT = 680;
// Where the selected location lands inside the window (from the mockup).
const FOCUS_X = 470;
const FOCUS_Y = 306;

function ZoomedMap({ location }: { location: Location }) {
	const spot = location.hotspot;

	// Locations that aren't on the 2026 map show the whole map instead.
	const style = spot
		? {
				width: MAP_W,
				height: MAP_H,
				left: FOCUS_X - (spot.left / 100) * MAP_W,
				top: FOCUS_Y - (spot.top / 100) * MAP_H,
			}
		: {
				width: BASE_WIDTH,
				height: BASE_WIDTH * MAP_RATIO,
				left: `calc(50% - ${BASE_WIDTH / 2}px)`,
				top: 20,
			};

	return (
		<Link
			href="/map"
			aria-label="Back to map"
			className="absolute inset-x-0 overflow-hidden mask-t-from-80% mask-b-from-78% mask-l-from-65% mask-r-from-90%"
			style={{ top: AREA_TOP, height: AREA_HEIGHT }}
		>
			<Image
				src="/2026/map-tottem-crop.png"
				alt=""
				width={2754}
				height={1282}
				priority
				className="absolute max-w-none"
				style={style}
			/>
		</Link>
	);
}

function Coin({ value, size = 48 }: { value: number; size?: number }) {
	return (
		<span
			className="grid flex-none place-items-center rounded-full font-iqos font-bold text-white"
			style={{
				width: size,
				height: size,
				fontSize: size * 0.36,
				background:
					"radial-gradient(circle at 50% 50%, #e8a530 0 52%, #f2c94c 54% 100%)",
				boxShadow: "inset 0 0 0 2px #e0a93a, 0 1px 2px rgb(0 0 0 / 0.25)",
				textShadow: "0 1px 2px rgb(120 60 0 / 0.7)",
			}}
		>
			{value}
		</span>
	);
}

function PopupCard({ location }: { location: Location }) {
	return (
		// Card is anchored by its bottom edge so longer content grows upward.
		<div className="absolute bottom-[926px] left-[566px] w-[456px]">
			{/* Icon bubble overlapping the top-left corner */}
			<div className="absolute -top-[74px] -left-[65px] grid size-[88px] place-items-center rounded-full bg-white shadow-[0_0_24px_rgb(25_211_214/0.35)]">
				<Image
					src={`/icon/${location.icon}`}
					alt=""
					width={56}
					height={56}
					className="h-auto max-h-[46px] w-auto max-w-[56px] invert hue-rotate-180"
				/>
			</div>

			{/* Concave fillets that blend the bubble into the card (speech-bubble join) */}
			<span
				aria-hidden
				className="absolute -top-3 left-[11px] size-3"
				style={{
					background:
						"radial-gradient(circle at 100% 0, transparent 11.5px, #fff 12px)",
				}}
			/>
			<span
				aria-hidden
				className="absolute top-[9px] -left-3 size-3"
				style={{
					background:
						"radial-gradient(circle at 0 100%, transparent 11.5px, #fff 12px)",
				}}
			/>

			<div className="rounded-[14px] rounded-tl-none bg-white px-8 pt-[30px] pb-7 font-iqos text-[#2b2833] shadow-[0_0_40px_rgb(25_211_214/0.45)]">
				<h2 className="text-[20px] leading-tight font-bold tracking-[0.02em] uppercase">
					{location.title}
				</h2>

				{(location.highlight || location.points) && (
					<div className="mt-4 flex items-center gap-3">
						{location.highlight && (
							<div className="flex-1 rounded-md bg-linear-to-r from-[#e9e9ec] to-[#cfcfd4] px-3 py-2 text-[16px] leading-snug font-bold">
								{location.highlight}
							</div>
						)}
						{location.points && (
							<div className="flex items-center gap-2">
								<Coin value={location.points} />
								<span className="text-[18px]">Points</span>
							</div>
						)}
					</div>
				)}

				<p className="mt-3 text-[18.5px] leading-[1.45]">
					{location.description}
				</p>

				{location.pointItems && (
					<div className="mt-4 grid grid-cols-3 gap-2">
						{location.pointItems.map((item, i) => (
							<div
								key={item.label}
								className={`flex flex-col items-center gap-1 rounded-md px-1 py-2 text-center ${
									i % 2 === 0 ? "bg-[#ececef]" : ""
								}`}
							>
								<span className="flex min-h-[34px] items-center text-[13px] leading-tight font-bold">
									{item.label}
								</span>
								<Coin value={item.points} size={42} />
								<span className="text-[13px]">Points</span>
							</div>
						))}
					</div>
				)}

				{location.tnc && (
					<p className="mt-2 text-right text-[13px] text-[#55525e]">
						*TnC applies
					</p>
				)}
			</div>
		</div>
	);
}

export default function LocationDetail({ location }: { location: Location }) {
	return (
		<>
			<ZoomedMap location={location} />
			<PopupCard location={location} />
			<NavLegends activeKey={location.key} />
		</>
	);
}
