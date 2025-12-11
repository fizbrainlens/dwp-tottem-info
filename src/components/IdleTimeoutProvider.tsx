"use client";

import { useIdleTimeout } from "@/hooks/useIdleTimeout";

export default function IdleTimeoutProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	useIdleTimeout(30000); // 30 seconds

	return <>{children}</>;
}
