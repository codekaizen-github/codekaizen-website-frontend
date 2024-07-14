import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { User } from "@interfaces/user";

interface TeamMemberCardProps {
	member: User;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
	return (
		<div key={member.id} className="bg-neutral-800">
			<div className="flex items-center h-full">
				<div className="flex flex-wrap items-center py-4 pl-4 md:flex-nowrap">
					{member.photoUrl && (
						<Image
							src={member.photoUrl}
							alt={member.name}
							width={150}
							height={150}
							className="mb-4 h-40 w-40 md:mb-0 sm:mr-4"
						/>
					)}
					<div className="flex gap-4 mr-4">
						<div className="member-content">
							<h2 className="text-xl font-semibold">
								{member.name}
							</h2>
							<p className="text-lg">{member.role}</p>
							<p className="">{member.description}</p>
						</div>
					</div>
				</div>
				<Link
					href={`/team/${member.slug}`}
					className="flex items-center h-full p-4 rounded-r-lg hover:bg-neutral-700 hover:cursor-pointer"
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
