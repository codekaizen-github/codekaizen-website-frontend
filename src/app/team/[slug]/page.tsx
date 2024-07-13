"use client";

import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import { fetchUserData } from "@/app/api/cms";
import { User } from "@interfaces/user";

export default function TeamMember({ params }: { params: { slug: string } }) {
	const [user, setUser] = useState<User | null>(null);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		fetchUserData(params.slug)
			.then(setUser)
			.catch((e) => {
				setError(e);
				console.log(e);
			});
	}, [params.slug]);

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	if (!user) {
		notFound();
	}

	// TODO: Design team member page

	return <div className="">Team member page for {user.name}</div>;
}
