import { getProjects } from "@/api/project";
import ProjectCard from "@/partials/projectCard";

export default async function ProjectsPage() {
	let data = await getProjects();
	let projects = data; // await data.json

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
