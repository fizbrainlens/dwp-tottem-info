import type { Metadata } from "next";
import "./globals.css";
import { fontIqos, fontIqosBreathing } from "@/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: "DWP Information",
	description: "DWP Information",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"antialiased",
					fontIqos.variable,
					fontIqosBreathing.variable,
				)}
			>
				<div
					className="w-full min-h-screen flex flex-col items-center 
				bg-[#000000]"
				>
					{children}
				</div>
			</body>
		</html>
	);
}
