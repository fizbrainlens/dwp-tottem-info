// import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

export const fontIqos = localFont({
	src: [
		{
			path: "./IQOS-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./IQOS-Bold.woff2",
			weight: "700",
			style: "bold",
		},
	],
	display: "swap",
	variable: "--font-iqos",
	fallback: ["Arial", "sans-serif"],
});

export const fontIqosBreathing = localFont({
	src: [
		{
			path: "./IQOS-Breathing-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	display: "swap",
	variable: "--font-iqos-breathing",
	fallback: ["Arial", "sans-serif"],
});

// export const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"],
// });

// export const geistMono = Geist_Mono({
// 	variable: "--font-geist-mono",
// 	subsets: ["latin"],
// });
