"use client";

import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import { getTeamMember } from "@/app/api/user";
import { User } from "@interfaces/user";

export default function TeamMemberPage({
	params,
}: {
	params: { slug: string };
}) {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);
	const [member, setMember] = useState<User | null>(null);

	useEffect(() => {
		setIsLoading(true);
		getTeamMember(params.slug)
			.then((member) => {
				setMember(member);
				setIsLoading(false);
			})
			.catch((e) => {
				setError(e);
				setIsLoading(false);
			});
	}, [params.slug]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error || !member) {
		return notFound();
	}

	return <div>{member?.name}</div>;

	// TODO: Design team member page
}
