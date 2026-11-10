/**
 * Single source of truth for every map location: popup copy, points and the
 * hotspot position on the main map. `key` is the `/map?page=<key>` value.
 *
 * Copy for Registration Booth comes from the 2026 mockup; the rest is
 * transcribed from the 2025 popups (public/popup/pop-*.png) until the 2026
 * copy is delivered.
 */

export type PointItem = { label: string; points: number };

export type Location = {
	key: string;
	title: string;
	/** File inside /public/icon (with extension). */
	icon: string;
	description: string;
	/** Grey highlight box shown next to the points coin (e.g. collaboration name). */
	highlight?: string;
	/** Single points reward shown as "<coin> Points". */
	points?: number;
	/** Several point corners (House of IQOS). */
	pointItems?: PointItem[];
	/** Show "*TnC applies". */
	tnc?: boolean;
	/** Centre of the location in % of /2026/map-tottem-crop.png. Omit if not on the map. */
	hotspot?: { top: number; left: number };
};

export const LOCATIONS: Location[] = [
	{
		key: "regbooth",
		title: "Registration Booth",
		icon: "icon-regbooth.png",
		description:
			"The first stop to your smooth experience. Quick, easy, and made for your comfort",
		hotspot: { top: 31.7, left: 7.3 },
	},
	{
		key: "houseofiqos",
		title: "House of IQOS",
		icon: "icon-houseofiqos.png",
		description:
			"Welcome to the home of curiosity. Discover, explore, and collect points for a chance to unlock exclusive rewards",
		pointItems: [
			{ label: "Iluma Corner", points: 200 },
			{ label: "Bonds Corner", points: 100 },
			{ label: "Veev Corner", points: 100 },
			{ label: "Zyn Corner", points: 100 },
			{ label: "Personalize Engrave", points: 100 },
			{ label: "Unlock Loyalty", points: 400 },
		],
		tnc: true,
	},
	{
		key: "vvipblowfish",
		title: "VVIP Blowfish",
		icon: "icon-vvipblowfish.png",
		description:
			"An exclusive haven for unforgettable celebrations. Toast to the night with panoramic views, refined ambiance, and luxurious comfort.",
		hotspot: { top: 25.8, left: 71.5 },
	},
	{
		key: "tunnelexperience",
		title: "Tunnel Experience",
		icon: "icon-tunnelexperience.png",
		description:
			"Step into an immersive tunnel filled with vibrant visuals that transport you into a new flavorful world.",
		hotspot: { top: 26.3, left: 17.4 },
	},
	{
		key: "stage3",
		title: "Stage 3",
		icon: "icon-stage3.png",
		description:
			"Where the bass hits harder, the vibe runs raw, and the night feels different. You don’t just hear it, you feel it.",
		hotspot: { top: 75.7, left: 51.8 },
	},
	{
		key: "penthouse",
		title: "Penthouse",
		icon: "icon-penthouse.png",
		highlight: "You X Darbotz X Stereoflow",
		points: 100,
		description:
			"Immerse yourself in a luxurious experience at the Garuda Stage dock. Collaboration space designed to spark creativity and uncover unexpected moments.",
		tnc: true,
		hotspot: { top: 19.9, left: 62.5 },
	},
	{
		key: "qridestation",
		title: "Q-Ride Station",
		icon: "icon-qride.png",
		description: "Hop on your ride and skip the traffic hassle",
		hotspot: { top: 45.1, left: 8.2 },
	},
	{
		key: "immersivefoyer",
		title: "Immersive Foyer",
		icon: "icon-foyer.svg",
		// Placeholder copy — replace when the 2026 copy is delivered.
		description:
			"Step into the Curious Beats world before you enter the main gate.",
		hotspot: { top: 25, left: 13.4 },
	},
	{
		key: "thediscoverydeck",
		title: "The Discovery Deck",
		icon: "icon-thediscoverydeck.png",
		description:
			"Enjoy the best view at the center of the main stage. An exclusive experience designed for the curious and those seeking unexpected moments.",
	},
	{
		key: "giantmap",
		title: "Giant Map",
		icon: "icon-giantmap.png",
		description:
			"Find your way to every beat. Your ultimate guide to explore, vibe, and never get lost.",
		hotspot: { top: 25.5, left: 10.4 },
	},
	{
		key: "stage2",
		title: "Stage 2",
		icon: "icon-stage.png",
		description:
			"Feel the energy and never slow down. Hard dance and uplifting beats will elevate your experience.",
		hotspot: { top: 55.9, left: 87 },
	},
	{
		key: "stage1",
		title: "Stage 1",
		icon: "icon-stage.png",
		description:
			"Dance beneath the wings of Garuda. The main hall of DWP, where energy comes alive.",
		hotspot: { top: 10.7, left: 83.5 },
	},
	{
		key: "qrideshelter",
		title: "Q Ride Shelter",
		icon: "icon-qride.png",
		description:
			"Skip the walk, chase the rhythm. Your ultimate shortcut to every beat.",
		hotspot: { top: 63, left: 8.3 },
	},
	{
		key: "drumnbus",
		title: "Beats & Bus",
		icon: "icon-drumnbus.png",
		points: 100,
		description: "Unexpected beats awaits inside.",
		tnc: true,
		hotspot: { top: 29, left: 37.8 },
	},
	// Not in the legend, but still reachable from the map / old links.
	{
		key: "iqosland",
		title: "IQOS Land",
		icon: "icon-iqosland.png",
		highlight: "Photo NRG",
		points: 100,
		description:
			"Elevate your experience from the double-deck lounge. Take in sweeping views of the main stage while relaxing in style and collect points along the way to unlock exclusive rewards.",
		tnc: true,
		hotspot: { top: 21, left: 50.5 },
	},
	{
		key: "keyholeportal",
		title: "Keyhole Portal",
		icon: "icon-keyhole-portal.png",
		description:
			"Step into the world of Darbotz & Stereoflow. A bold collaboration that opens a gateway to a flavorful world.",
	},
];

export const LOCATION_BY_KEY: Record<string, Location> = Object.fromEntries(
	LOCATIONS.map((loc) => [loc.key, loc]),
);

/** Legend order, as in the 2026 design (3 columns, read left→right). */
export const LEGEND_KEYS = [
	"regbooth",
	"houseofiqos",
	"vvipblowfish",
	"tunnelexperience",
	"stage3",
	"penthouse",
	"qridestation",
	"immersivefoyer",
	"thediscoverydeck",
	"giantmap",
	"stage2",
	"stage1",
	"qrideshelter",
	"drumnbus",
] as const;
