"use client";

import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { Project } from "@interfaces/project";
import { getProjects } from "../api/project";
import ProjectCard from "../partials/projectCard";

export default function ProjectsPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);
	const [projects, setProjects] = useState<Project[] | null>(null);

	useEffect(() => {
		setIsLoading(true);
		getProjects()
			.then((projects) => {
				setProjects(projects);
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

	if (error || !projects) {
		return notFound();
	}

	return (
		<div>
			<h1 className="text-3xl pb-6">Our Projects</h1>
			<div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
}
