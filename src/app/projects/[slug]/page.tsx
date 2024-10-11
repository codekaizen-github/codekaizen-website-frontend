import { notFound } from "next/navigation";
import { getProject } from "@/app/api/project";

export default async function ProjectDetailPage({
	params,
}: {
	params: { slug: string };
}) {
	let data = await getProject(params.slug as string);
	let project = data; // await data.json

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
