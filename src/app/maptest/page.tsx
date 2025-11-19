"use client";

import { MapPin, Maximize2, ZoomIn, ZoomOut } from "lucide-react";
import Image from "next/image";
import type { MouseEvent } from "react";
import { useState } from "react";

type Location = {
	id: number;
	name: string;
	x: number;
	y: number;
	color: string;
};

export default function MapTestPage() {
	const [scale, setScale] = useState(1);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isDragging, setIsDragging] = useState(false);
	const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

	// Lokasi-lokasi menarik di peta
	const locations: Location[] = [
		{ id: 1, name: "Jakarta", x: 30, y: 40, color: "bg-red-500" },
		{ id: 2, name: "Bandung", x: 25, y: 50, color: "bg-blue-500" },
		{ id: 3, name: "Surabaya", x: 60, y: 45, color: "bg-green-500" },
		{ id: 4, name: "Yogyakarta", x: 45, y: 55, color: "bg-yellow-500" },
		{ id: 5, name: "Bali", x: 75, y: 60, color: "bg-purple-500" },
	];

	const zoomToLocation = (loc: Location) => {
		setScale(2.5);
		setPosition({
			x: -loc.x * 2.5 + 50,
			y: -loc.y * 2.5 + 50,
		});
	};

	const handleZoomIn = () => {
		setScale((prev) => Math.min(prev + 0.5, 4));
	};

	const handleZoomOut = () => {
		setScale((prev) => Math.max(prev - 0.5, 0.5));
	};

	const handleReset = () => {
		setScale(1);
		setPosition({ x: 0, y: 0 });
	};

	const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
		setIsDragging(true);
		setDragStart({
			x: e.clientX - position.x,
			y: e.clientY - position.y,
		});
	};

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		if (isDragging) {
			setPosition({
				x: e.clientX - dragStart.x,
				y: e.clientY - dragStart.y,
			});
		}
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-6">
					<h1 className="text-4xl font-bold text-white mb-2">
						Peta Interaktif Indonesia
					</h1>
					<p className="text-slate-300">
						Klik lokasi untuk zoom ke area tersebut
					</p>
				</div>

				<div className="grid lg:grid-cols-4 gap-6">
					{/* Sidebar dengan tombol lokasi */}
					<div className="lg:col-span-1 space-y-3">
						<div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
							<h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
								<MapPin className="w-5 h-5" />
								Pilih Lokasi
							</h2>
							<div className="space-y-2">
								{locations.map((loc) => (
									<button
										type="button"
										key={loc.id}
										onClick={() => zoomToLocation(loc)}
										className="w-full flex items-center gap-3 bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105"
									>
										<div className={`w-3 h-3 rounded-full ${loc.color}`} />
										<span className="font-medium">{loc.name}</span>
									</button>
								))}
							</div>
						</div>

						{/* Kontrol Zoom */}
						<div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
							<h2 className="text-lg font-semibold text-white mb-3">
								Kontrol Zoom
							</h2>
							<div className="space-y-2">
								<button
									type="button"
									onClick={handleZoomIn}
									className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
								>
									<ZoomIn className="w-4 h-4" />
									Zoom In
								</button>
								<button
									type="button"
									onClick={handleZoomOut}
									className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
								>
									<ZoomOut className="w-4 h-4" />
									Zoom Out
								</button>
								<button
									type="button"
									onClick={handleReset}
									className="w-full flex items-center justify-center gap-2 bg-slate-600 hover:bg-slate-500 text-white px-4 py-2 rounded-lg transition-colors"
								>
									<Maximize2 className="w-4 h-4" />
									Reset
								</button>
							</div>
							<div className="mt-3 text-center">
								<span className="text-sm text-slate-400">
									Zoom: {(scale * 100).toFixed(0)}%
								</span>
							</div>
						</div>
					</div>

					{/* Area Peta */}
					<div className="lg:col-span-3">
						<div className="bg-slate-800 rounded-xl p-6 border border-slate-700 h-[600px] overflow-hidden relative">
							<div
								className={`w-full h-full ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
								onMouseDown={handleMouseDown}
								onMouseMove={handleMouseMove}
								onMouseUp={handleMouseUp}
								onMouseLeave={handleMouseUp}
								role="application"
								aria-label="Peta interaktif"
							>
								<div
									className="relative w-full h-full transition-transform duration-500 ease-out"
									style={{
										transform: `translate(${position.x}%, ${position.y}%) scale(${scale})`,
										transformOrigin: "center center",
									}}
								>
									<Image
										src="/map-dwp-main.png"
										alt="Peta DWP"
										fill
										sizes="100vw"
										className="object-contain select-none"
										draggable={false}
										style={{
											filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))",
										}}
										priority
									/>

									{/* Marker lokasi */}
									<div className="absolute inset-0">
										{locations.map((loc) => (
											<div
												key={loc.id}
												className="absolute"
												style={{
													left: `${loc.x}%`,
													top: `${loc.y}%`,
													transform: "translate(-50%, -50%)",
												}}
											>
												<div
													className={`w-4 h-4 rounded-full ${loc.color} animate-pulse border-2 border-white shadow-lg`}
												/>
												<div
													className={`absolute inset-0 w-4 h-4 rounded-full ${loc.color} opacity-30 animate-ping`}
												/>
											</div>
										))}
									</div>
								</div>
							</div>

							{/* Info dragging */}
							<div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm">
								💡 Klik dan drag untuk menggeser peta
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
