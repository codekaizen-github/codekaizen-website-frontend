import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Project } from "@interfaces/project";

interface ProjectCardProps {
	project: Project;
}

export default function TeamMemberCard({ project }: ProjectCardProps) {
	return (
		<div key={project.id} className="bg-neutral-800">
			<div className="flex items-center h-full">
				<div className="flex flex-wrap items-center py-4 pl-4 md:flex-nowrap">
					{project.photoUrl && (
						<Image
							src={project.photoUrl}
							alt={project.name}
							width={80}
							height={80}
							className="mb-4 md:mb-0 sm:mr-4"
							priority={true}
						/>
					)}
					<div className="flex gap-4 mr-4">
						<div className="project-content">
							<h2 className="text-xl font-semibold">
								{project.name}
							</h2>
							<p className="">{project.summary}</p>
						</div>
					</div>
				</div>
				<Link
					href={`/team/${project.slug}`}
					className="flex items-center h-full p-4 hover:bg-neutral-700 hover:cursor-pointer text-retro-blue hover:text-retro-darkBlue"
				>
					<FontAwesomeIcon
						icon={faAngleRight}
						className="font-lg h-full"
						size="lg"
					/>
				</Link>
			</div>
		</div>
	);
}
