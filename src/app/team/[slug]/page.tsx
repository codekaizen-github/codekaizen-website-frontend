import { getAllTeamMemberSlugs, getTeamMember } from "@clients/wordpress/user";
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
			<Image className="mb-6 h-70 w-70 mx-auto"
				src={member.avatar.url}
				alt={member.name}
				width={350}
				height={350}
			/>
			<div>
				<h1 className="text-2xl">{member.name}</h1>
				<a
					aria-label="View team member's GitHub profile"
					href={`https://github.com/${member.githubUserId}`}
					target="_blank"
				>
					<p>@{member.githubUserId}</p>
				</a>
				<div
					dangerouslySetInnerHTML={{ __html: member.teamMember.content }}
					className="mt-4 space-between-p"
				/>
			</div>
		</div>
	);
}
