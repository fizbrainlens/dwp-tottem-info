"use client";

import { useEffect } from "react";

export default function DisableRightClick({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		const handleContextMenu = (e: MouseEvent) => {
			e.preventDefault();
			e.stopPropagation();
			return false;
		};

		const handleKeyDown = (e: KeyboardEvent) => {
			// Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
			if (
				e.key === "F12" ||
				(e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
				(e.ctrlKey && e.key === "U")
			) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			}
		};

		// Disable right-click
		document.addEventListener("contextmenu", handleContextMenu);

		// Disable developer tools shortcuts
		document.addEventListener("keydown", handleKeyDown);

		// Additional protection for text selection
		document.onselectstart = () => {
			return false;
		};

		// Disable drag
		document.ondragstart = () => {
			return false;
		};

		return () => {
			document.removeEventListener("contextmenu", handleContextMenu);
			document.removeEventListener("keydown", handleKeyDown);
			document.onselectstart = null;
			document.ondragstart = null;
		};
	}, []);

	return <>{children}</>;
}