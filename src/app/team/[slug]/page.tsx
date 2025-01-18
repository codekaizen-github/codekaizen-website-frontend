import { getAllTeamMemberSlugs, getTeamMember } from "@/api/user";
import Image from "next/image";
import { notFound } from "next/navigation";

interface TeamMemberPageProps {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	const slugs = await getAllTeamMemberSlugs();
	return slugs.map((slug) => ({
		slug,
	}));
}

export default async function TeamMemberPage(props: TeamMemberPageProps) {
	const params = await props.params;
	const member = await getTeamMember(params.slug);

	if (!member) {
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
					aria-label="View team member's GitHub profile"
					href={`https://github.com/${member.githubUsername}`}
					target="_blank"
				>
					<p>@{member.githubUsername}</p>
				</a>
				<div
					dangerouslySetInnerHTML={{ __html: member.bio }}
					className="mt-4 space-between-p"
				/>
			</div>
		</div>
	);
}
