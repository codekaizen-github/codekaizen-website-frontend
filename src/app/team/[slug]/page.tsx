"use client";

import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import { getTeamMember } from "@/app/api/user";
import { User } from "@interfaces/user";
import Image from "next/image";

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

	// TODO: Replace with a loading spinner
	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error || !member) {
		return notFound();
	}

	return (
		<div>
			<Image
				src={member.photoUrl}
				alt={member.name}
				width={350}
				height={350}
				className="mb-6 h-70 w-70 mx-auto"
			/>
			<div>
				<h1 className="text-2xl">{member.name}</h1>
				<a
					href={`https://github.com/${member.githubUsername}`}
					target="_blank"
					className="text-retro-blue hover:text-retro-darkBlue"
				>
					<p>@{member.githubUsername}</p>
				</a>
				<p className="mt-4">{member.bio}</p>
			</div>
			<div></div>
		</div>
	);

	// TODO: Design team member page
}
