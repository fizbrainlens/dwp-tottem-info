import type { Metadata } from "next";
import "./globals.css";
import { fontIqos, fontIqosBreathing } from "@/fonts";
import Image from "next/image";
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
				bg-[#000000] select-none"
				>
					{children}

					<div className="w-full flex bg-black text-white fixed bottom-0 gap-4 p-6 mx-auto">
						<div className="w-1/5 flex items-center justify-center">
							<Image
								src="/logo-21plus.png"
								alt="Logo 21+"
								width={80}
								height={80}
							/>
						</div>
						<div className="w-4/5">
							<div className="w-full h-full flex items-center justify-center text-center text-lg">
								Produk ini tidak bebas risiko dan mengandung nikotin yang
								menyebabkan ketergantungan. Hanya diperuntukkan bagi pengguna
								dewasa (21+). Dilarang menjual dan memberi kepada orang di bawah
								usia 21 tahun dan perempuan hamil.
							</div>
						</div>
					</div>
					{/* <div className="w-full flex bg-black text-white h-[150px] fixed bottom-0 gap-4 p-4">
						<div className="w-1/5 flex items-center justify-center">
							<Image
								src="/logo-21plus.png"
								alt="Logo 21+"
								width={100}
								height={100}
							/>
						</div>
						<div className="w-4/5">
							<div className="w-full h-full flex items-center justify-center text-center text-lg">
								Produk ini tidak bebas risiko dan mengandung nikotin yang{" "}<br></br>
								menyebabkan ketergantungan. Hanya diperuntukkan bagi pengguna{" "}<br></br>
								dewasa (21+). Dilarang menjual dan memberi kepada orang di bawah{" "}<br></br>
								usia 21 tahun dan perempuan hamil.
							</div>
						</div>
					</div> */}
				</div>
			</body>
		</html>
	);
}
