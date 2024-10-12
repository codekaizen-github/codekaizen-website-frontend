import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProject } from "@/app/api/project";

interface ProjectDetailPageProps {
	params: { slug: string };
}

export async function generateStaticParams() {
	const slugs = await getAllProjectSlugs();
	return slugs.map((slug) => ({
		slug,
	}));
}

export default async function ProjectDetailPage({
	params,
}: ProjectDetailPageProps) {
	const project = await getProject(params.slug);

	if (!project) {
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
