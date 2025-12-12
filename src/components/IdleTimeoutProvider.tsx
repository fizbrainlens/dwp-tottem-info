"use client";

import { useIdleTimeout } from "@/hooks/useIdleTimeout";

export default function IdleTimeoutProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	useIdleTimeout(80000); // 80 seconds

	return <>{children}</>;
}
