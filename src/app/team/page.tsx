"use client";

import { notFound } from "next/navigation";
import TeamMemberCard from "./teamMemberCard";
import { useEffect, useState } from "react";
import { User } from "@interfaces/user";
import { getTeamMembers } from "../api/user";

// TODO: Replace with async fetch
export default function TeamPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);
	const [teamMembers, setTeamMembers] = useState<User[] | null>(null);

	useEffect(() => {
		setIsLoading(true);
		getTeamMembers()
			.then((teamMembers) => {
				setTeamMembers(teamMembers);
				setIsLoading(false);
			})
			.catch((e) => {
				setError(e);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error || !teamMembers) {
		return notFound();
	}

	return (
		<>
			<h1 className="text-3xl font-semibold pb-6">Meet Our Team</h1>
			<div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
				{teamMembers?.map((member) => (
					<TeamMemberCard key={member.id} member={member} />
				))}
			</div>
		</>
	);
}
