import TeamMemberCard from "@partials/teamMemberCard";
import { getTeamMembers } from "@clients/wordpress/user";

export default async function TeamPage() {
	let data = await getTeamMembers();
	let teamMembers = data;
	return (
		<>
			<h1 className="text-3xl pb-6">Our Team</h1>
			<div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
				{teamMembers?.map((member) => (
					<TeamMemberCard key={member.slug} member={member} />
				))}
			</div>
		</>
	);
}
