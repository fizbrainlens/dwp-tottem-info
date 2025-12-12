import type { Metadata } from "next";
import "./globals.css";
import FooterPeringatan from "@/components/FooterPeringatan";
import IdleTimeoutProvider from "@/components/IdleTimeoutProvider";
import DisableRightClick from "@/components/DisableRightClick";
import DisableZoom from "@/components/DisableZoom";
import { fontIqos, fontIqosBreathing } from "@/fonts";
import { cn } from "@/lib/utils";
import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
}

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
				<DisableRightClick>
					<IdleTimeoutProvider>
						<div
							className="w-full min-h-screen flex flex-col items-center
						bg-[#000000] select-none"
						>
							<DisableZoom />
							{children}

							<FooterPeringatan />
						</div>
					</IdleTimeoutProvider>
				</DisableRightClick>
			</body>
		</html>
	);
}
