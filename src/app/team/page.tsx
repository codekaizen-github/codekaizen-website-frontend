import TeamMemberCard from "../partials/teamMemberCard";
import { getTeamMembers } from "../api/user";

export default async function TeamPage() {
	let data = await getTeamMembers();
	let teamMembers = data; // await data.json

	return (
		<>
			<h1 className="text-3xl pb-6">Our Team</h1>
			<div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
				{teamMembers?.map((member) => (
					<TeamMemberCard key={member.id} member={member} />
				))}
			</div>
		</>
	);
}
