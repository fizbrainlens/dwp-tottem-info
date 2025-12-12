"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export function useIdleTimeout(timeoutMs: number = 80000) {
	const router = useRouter();
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const resetTimer = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		timeoutRef.current = setTimeout(() => {
			router.push("/");
		}, timeoutMs);
	};

	useEffect(() => {
		const events = [
			"mousedown",
			"mousemove",
			"keypress",
			"scroll",
			"touchstart",
			"click",
			"keydown",
		];

		const handleActivity = () => {
			resetTimer();
		};

		events.forEach((event) => {
			window.addEventListener(event, handleActivity);
		});

		resetTimer();

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}

			events.forEach((event) => {
				window.removeEventListener(event, handleActivity);
			});
		};
	}, []);

	return { resetTimer };
}
