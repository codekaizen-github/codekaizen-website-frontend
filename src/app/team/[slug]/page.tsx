import { notFound } from "next/navigation";
import { getTeamMember } from "@/app/api/user";
import Image from "next/image";

export default async function TeamMemberPage({
	params,
}: {
	params: { slug: string };
}) {
	let data = await getTeamMember(params.slug as string);
	let member = data; // await data.json

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
				>
					<p>@{member.githubUsername}</p>
				</a>
				<div
					dangerouslySetInnerHTML={{ __html: member.bio }}
					className="mt-4 space-between-p"
				/>
			</div>
			<div></div>
		</div>
	);
}
