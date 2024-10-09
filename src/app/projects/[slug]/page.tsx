"use client";

import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import { getProject } from "@/app/api/project";
import { Project } from "@interfaces/project";

export default function ProjectPage({ params }: { params: { slug: string } }) {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);
	const [project, setProject] = useState<Project | null>(null);

	useEffect(() => {
		setIsLoading(true);
		getProject(params.slug)
			.then((member) => {
				setProject(member);
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

	if (error || !project) {
		return notFound();
	}

	return (
		<div>
			<div>
				<h1 className="text-2xl">{project.name}</h1>
				<div
					dangerouslySetInnerHTML={{ __html: project.description }}
					className="mt-4 space-between-p"
				/>
			</div>
			<div></div>
		</div>
	);
}
