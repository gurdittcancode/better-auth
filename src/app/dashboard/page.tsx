"use client";

import { useSession } from "@/lib/auth-client";

export default function Dashboard() {
	const { data } = useSession();
	return <div>Hi {data?.user.email}</div>;
}
