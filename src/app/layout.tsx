import type { Metadata } from "next";
import "./globals.css";
import FooterPeringatan from "@/components/FooterPeringatan";
import IdleTimeoutProvider from "@/components/IdleTimeoutProvider";
import DisableRightClick from "@/components/DisableRightClick";
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
				<DisableRightClick>
					<IdleTimeoutProvider>
						<div
							className="w-full min-h-screen flex flex-col items-center
						bg-[#000000] select-none"
						>
							{children}

							<FooterPeringatan />
						</div>
					</IdleTimeoutProvider>
				</DisableRightClick>
			</body>
		</html>
	);
}
